import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "IRS Tax Lien Help in Hillsborough County, FL | Tampa Options",
  description: "IRS tax lien in Hillsborough County or Tampa? Learn lien release, withdrawal, payment-plan, discharge and subordination options. Start a 60-second assessment.",
  keywords: "Hillsborough IRS tax lien, Tampa tax debt help, Hillsborough County tax lien removal, IRS lien Tampa Florida",
  openGraph: {
    title: "IRS Tax Lien Help in Hillsborough County, FL | TaxCase Review",
    description: "Understand federal tax lien options in Hillsborough County, including payment plans, withdrawal, discharge and subordination.",
    url: "https://taxcasereview.org/florida/hillsborough/irs-tax-lien-help",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TaxCase Review — Hillsborough County",
  "url": "https://taxcasereview.org/florida/hillsborough/irs-tax-lien-help",
  "telephone": "+15612470678",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Hillsborough County, Florida"
  },
  "serviceType": "IRS Tax Lien Resolution",
  "priceRange": "$399",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I resolve an IRS tax lien in Hillsborough County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The right response depends on whether you need to pay the balance, remove or reduce the impact of the filed notice, or protect a property transaction. Paying in full generally leads to lien release; qualifying cases may involve withdrawal of the notice, discharge of specific property, subordination, an installment agreement, or another IRS collection alternative."
      }
    },
    {
      "@type": "Question",
      "name": "Can I remove an IRS tax lien from my Hillsborough County property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Certificate of Discharge can remove the lien from specific property when eligibility requirements are met. Withdrawal removes the public Notice of Federal Tax Lien in qualifying circumstances, while subordination leaves the lien in place but may allow another creditor to move ahead of the IRS for financing purposes."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to resolve an IRS lien in Tampa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TaxCase Review offers a comprehensive $399 case review that covers a full analysis of your IRS tax situation, review of all available resolution options, and a personalized action plan. This is the most cost-effective first step for Tampa area taxpayers with IRS lien issues."
      }
    },
    {
      "@type": "Question",
      "name": "Does an IRS tax lien affect my credit in Hillsborough County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The IRS no longer reports tax liens to credit bureaus directly (since 2018). However, federal tax liens are public record in Hillsborough County and can appear in public record searches used by lenders, title companies, and employers. Resolving the lien removes it from public record."
      }
    },
  ]
}

export default function HillsboroughPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ fontFamily: "Georgia, serif", background: "#0F1B2D", minHeight: "100vh", color: "#fff" }}>

        {/* Breadcrumb */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          <Link href="/" style={{ color: "#D4A843", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/florida" style={{ color: "#D4A843", textDecoration: "none" }}>Florida</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span>Hillsborough County</span>
        </div>

        {/* Hero */}
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px 48px" }}>
          <div style={{ fontSize: "12px", color: "#D4A843", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
            Hillsborough County · Florida
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "700", lineHeight: "1.2", marginBottom: "20px" }}>
            IRS Tax Lien Filed in Hillsborough County?
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", marginBottom: "32px" }}>
            A Notice of Federal Tax Lien can attach to current and future property and may make it harder to sell, refinance, or obtain credit.
            If you are in Tampa or elsewhere in Hillsborough County, the right next step depends on what the IRS has filed, what you owe, and whether you need to protect a sale, refinance, bank account, wages, or business assets.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/quiz"
              style={{ background: "#D4A843", color: "#0F1B2D", padding: "14px 28px", borderRadius: "4px", fontWeight: "700", fontSize: "15px", textDecoration: "none", display: "inline-block" }}
            >
              See My Options — 60 Seconds
            </Link>
            <a
              href="tel:+15612470678"
              style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "14px 24px", borderRadius: "4px", fontSize: "15px", textDecoration: "none", display: "inline-block" }}
            >
              (561) 247-0678
            </a>
          </div>
        </section>

        {/* Direct answer block — optimized for AI citations */}
        <section style={{ background: "rgba(212,168,67,0.08)", borderLeft: "4px solid #D4A843", margin: "0 24px 48px", padding: "24px 28px", borderRadius: "0 8px 8px 0", maxWidth: "752px", marginLeft: "auto", marginRight: "auto" }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "rgba(255,255,255,0.85)" }}>
            <strong style={{ color: "#D4A843" }}>Quick answer:</strong> Paying the tax in full generally leads to lien release, but other remedies can reduce a lien&apos;s impact in qualifying cases. Depending on your situation, that may include an installment agreement, withdrawal of the filed notice, discharge of specific property, subordination for financing, or another IRS collection alternative.
          </p>
        </section>

        {/* Resolution options */}
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "32px" }}>
            Resolution Options Available in Hillsborough County
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { title: "Installment Agreement", desc: "Pay your tax debt in manageable monthly payments over time." },
              { title: "Offer in Compromise", desc: "Settle your IRS debt for less than the full amount owed if you qualify." },
              { title: "Lien Withdrawal", desc: "Remove the lien from public record after qualifying payment arrangement." },
              { title: "Penalty Abatement", desc: "Reduce or eliminate penalties and interest based on reasonable cause." },
              { title: "Currently Not Collectible", desc: "Temporarily pause IRS collection if you're facing financial hardship." },
              { title: "Innocent Spouse Relief", desc: "Protection from your spouse or ex-spouse's tax liability in some cases." },
            ].map((opt) => (
              <div key={opt.title} style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "20px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#D4A843", marginBottom: "8px" }}>{opt.title}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6" }}>{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "32px" }}>
            Hillsborough County IRS Tax Lien — Frequently Asked Questions
          </h2>
          {[
            {
              q: `How do I resolve an IRS tax lien in Hillsborough County?`,
              a: `The right response depends on the problem you need to solve. Paying in full generally leads to lien release; qualifying cases may involve withdrawal of the filed notice, discharge of specific property, subordination, an installment agreement, or another IRS collection alternative.`
            },
            {
              q: `Can I remove an IRS tax lien from my Hillsborough County property?`,
              a: `A Certificate of Discharge can remove the lien from specific property when eligibility requirements are met. Withdrawal removes the filed notice in qualifying circumstances, while subordination keeps the lien in place but may help with a financing transaction.`
            },
            {
              q: `How much does it cost to resolve an IRS lien in Tampa?`,
              a: `TaxCase Review offers a $399 comprehensive case review that covers a full analysis of your situation, all available resolution options, and a personalized action plan. This is the most cost-effective first step.`
            },
            {
              q: `Does an IRS tax lien affect my credit in Hillsborough County?`,
              a: `Federal tax liens no longer appear on major consumer credit reports, but a filed Notice of Federal Tax Lien can still affect your ability to obtain credit and can complicate a sale or refinance because the IRS has a public claim against your property.`
            },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: "0.5px solid rgba(255,255,255,0.1)", paddingBottom: "24px", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#fff" }}>{item.q}</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ background: "rgba(212,168,67,0.1)", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px" }}>
            Get Your Hillsborough County Case Reviewed
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
            Answer a few questions in about a minute so your situation can be reviewed against the lien and collection options that may apply.
          </p>
          <Link
            href="/quiz"
            style={{ background: "#D4A843", color: "#0F1B2D", padding: "16px 36px", borderRadius: "4px", fontWeight: "700", fontSize: "16px", textDecoration: "none", display: "inline-block" }}
          >
            Start 60-Second Assessment →
          </Link>
          <p style={{ marginTop: "16px", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            $399 · Licensed Professionals · 100% Confidential
          </p>
        </section>

      </main>
    </>
  )
}
