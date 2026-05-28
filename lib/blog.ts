// lib/blog.ts
// Blog utilities for reading markdown posts from /content/blog/

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export interface BlogPost {
  slug: string
  title: string
  date: string
  metaDescription: string
  content: string
  contentHtml?: string
}

const BLOG_DIR = path.join(process.cwd(), "content/blog")

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

function getAllMarkdownFiles(): string[] {
  ensureBlogDir()
  try {
    const files = fs.readdirSync(BLOG_DIR)
    return files.filter((file) => file.endsWith(".md"))
  } catch {
    return []
  }
}

export function getAllBlogSlugs(): string[] {
  const files = getAllMarkdownFiles()
  const slugs: string[] = []
  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    try {
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      const slug = data.slug || file.replace(/\.md$/, "")
      slugs.push(slug)
    } catch {
      slugs.push(file.replace(/\.md$/, ""))
    }
  }
  return slugs
}

export function getAllBlogPosts(): Omit<BlogPost, "contentHtml">[] {
  const files = getAllMarkdownFiles()
  const posts: Omit<BlogPost, "contentHtml">[] = []
  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    try {
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)
      posts.push({
        slug: data.slug || file.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString().split("T")[0],
        metaDescription: data.metaDescription || data.meta_description || "",
        content,
      })
    } catch {
      // skip
    }
  }
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir()

  // Try direct filename match first
  const directPath = path.join(BLOG_DIR, `${slug}.md`)
  if (fs.existsSync(directPath)) {
    try {
      const fileContents = fs.readFileSync(directPath, "utf8")
      const { data, content } = matter(fileContents)
      return {
        slug: data.slug || slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString().split("T")[0],
        metaDescription: data.metaDescription || data.meta_description || "",
        content,
      }
    } catch {
      // fall through
    }
  }

  // Search all files for matching frontmatter slug
  const files = getAllMarkdownFiles()
  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    try {
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)
      if (data.slug === slug) {
        return {
          slug: data.slug,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString().split("T")[0],
          metaDescription: data.metaDescription || data.meta_description || "",
          content,
        }
      }
    } catch {
      // skip
    }
  }
  return null
}

export async function getBlogPostWithHtml(slug: string): Promise<BlogPost | null> {
  const post = getBlogPostBySlug(slug)
  if (!post) return null
  const processedContent = await remark().use(html).process(post.content)
  return {
    ...post,
    contentHtml: processedContent.toString(),
  }
}

export function writeBlogPost(post: {
  slug: string
  title: string
  date: string
  metaDescription: string
  content: string
}): void {
  ensureBlogDir()
  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
date: "${post.date}"
slug: "${post.slug}"
metaDescription: "${post.metaDescription.replace(/"/g, '\\"')}"
---

`
  const fileContent = frontmatter + post.content
  const filePath = path.join(BLOG_DIR, `${post.slug}.md`)
  fs.writeFileSync(filePath, fileContent, "utf8")
}

export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
