import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell" style={{ padding: "120px 0", textAlign: "center" }}>
      <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 24 }}>404</div>
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(3rem, 10vw, 7rem)",
        lineHeight: 0.95,
        letterSpacing: "-0.04em",
        margin: "0 0 32px",
      }}>
        Not <em style={{ color: "var(--accent)" }}>here.</em>
      </h1>
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.5rem", color: "var(--ink-soft)", marginBottom: 40 }}>
        That page never made it to the catalogue.
      </p>
      <Link href="/" className="btn">Back to index <span className="btn__arrow">→</span></Link>
    </div>
  );
}
