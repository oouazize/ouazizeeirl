import type { CSSProperties, ReactNode } from "react";
import type { MockupKind } from "@/lib/apps";

interface Props {
  kind: MockupKind;
  accent: string;
  surface: string;
}

export function Mockup({ kind, accent, surface }: Props) {
  switch (kind) {
    case "snail": return <SnailMock accent={accent} surface={surface} />;
    case "split": return <SplitMock accent={accent} surface={surface} />;
    case "scan": return <ScanMock accent={accent} surface={surface} />;
    case "chat":
    default: return <ChatMock accent={accent} surface={surface} />;
  }
}

const screenStyle = (surface: string): CSSProperties => ({
  width: "100%",
  height: "100%",
  background: surface,
  color: "#1a1814",
  fontFamily: "var(--font-body)",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  paddingTop: "44px",
});

function StatusBar() {
  return (
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 44,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 24px", fontSize: 12, fontWeight: 600,
      fontFamily: "var(--font-mono)",
    }}>
      <span>9:41</span>
      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <span style={{ width: 14, height: 8, border: "1px solid currentColor", borderRadius: 2, position: "relative" }}>
          <span style={{ position: "absolute", inset: 1, background: "currentColor", borderRadius: 1 }} />
        </span>
      </span>
    </div>
  );
}

function Bubble({ side, accent, children }: { side: "user" | "bot"; accent?: string; children: ReactNode }) {
  return (
    <div style={{
      alignSelf: side === "user" ? "flex-end" : "flex-start",
      maxWidth: "82%",
      background: side === "user" ? accent : "white",
      color: side === "user" ? "white" : "#1a1814",
      padding: "10px 14px",
      borderRadius: 16,
      borderBottomRightRadius: side === "user" ? 4 : 16,
      borderBottomLeftRadius: side === "user" ? 16 : 4,
      fontSize: 13, lineHeight: 1.4,
      boxShadow: side === "bot" ? "0 4px 12px -4px rgba(0,0,0,0.06)" : "none",
    }}>{children}</div>
  );
}

function ChatMock({ accent, surface }: { accent: string; surface: string }) {
  return (
    <div style={screenStyle(surface)}>
      <StatusBar />
      <div style={{ padding: "20px 18px 12px", borderBottom: "1px solid rgba(26,24,20,0.08)" }}>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1, opacity: 0.5 }}>Workspace</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 2 }}>Personal Notes</div>
      </div>
      <div style={{ flex: 1, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
        <Bubble side="user" accent={accent}>What did I decide about Q3 hiring?</Bubble>
        <Bubble side="bot" accent={accent}>
          Per your <u>Hiring v3</u> page (Aug 12), you committed to <b>two design hires</b> and paused engineering until Q4.
          <div style={{ marginTop: 8, fontSize: 10, opacity: 0.6, fontFamily: "var(--font-mono)" }}>↳ 3 sources cited</div>
        </Bubble>
        <Bubble side="user" accent={accent}>Show finance dashboard</Bubble>
        <div style={{ background: "white", borderRadius: 14, padding: 14, boxShadow: "0 4px 12px -4px rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", opacity: 0.5, textTransform: "uppercase", letterSpacing: 1 }}>October · runway</div>
          <div style={{ fontSize: 26, fontFamily: "var(--font-display)", marginTop: 4 }}>14.2 mo</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 36, marginTop: 10 }}>
            {[40, 55, 48, 62, 70, 58, 72, 80].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? accent : "rgba(26,24,20,0.15)", borderRadius: 2 }} />
            ))}
          </div>
        </div>
      </div>
      <div style={{
        margin: "0 14px 22px", padding: "12px 16px",
        background: "white", borderRadius: 999, display: "flex", alignItems: "center",
        gap: 8, fontSize: 13, color: "#999",
        boxShadow: "0 4px 12px -4px rgba(0,0,0,0.08)",
      }}>
        <span style={{ flex: 1 }}>Ask about your workspace…</span>
        <span style={{ width: 28, height: 28, borderRadius: "50%", background: accent, display: "grid", placeItems: "center", color: "white", fontSize: 14 }}>↑</span>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1, opacity: 0.5 }}>{label}</div>
      <div style={{ fontWeight: 500, marginTop: 2 }}>{value}</div>
    </div>
  );
}

function SnailMock({ accent, surface }: { accent: string; surface: string }) {
  const corners: Array<[number | null, number | null, number | null, number | null]> = [
    [12, null, null, 12],
    [12, 12, null, null],
    [null, null, 12, 12],
    [null, 12, 12, null],
  ];
  return (
    <div style={screenStyle(surface)}>
      <StatusBar />
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: "20px 18px 0", height: "55%",
          borderRadius: 18, overflow: "hidden",
          background: "radial-gradient(circle at 30% 40%, #6b8e4e 0%, #3d5a2c 70%, #2a3f1f 100%)",
          display: "grid", placeItems: "center",
        }}>
          <svg viewBox="0 0 100 100" width="65%" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}>
            <g fill="#1a1814" fillOpacity="0.85">
              <ellipse cx="60" cy="68" rx="32" ry="10" />
              <circle cx="42" cy="55" r="22" fill="#2d2a24" />
              <path d="M 38 55 Q 42 45 48 50 Q 52 55 46 58 Q 42 60 38 55 Z" fill="#3d3a34" />
              <path d="M 24 60 Q 18 50 22 45 M 30 58 Q 24 48 28 42" stroke="#1a1814" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="20" cy="44" r="2" /><circle cx="27" cy="40" r="2" />
            </g>
          </svg>
          {corners.map((c, i) => (
            <span key={i} style={{
              position: "absolute",
              top: c[0] ?? "auto", right: c[1] ?? "auto", bottom: c[2] ?? "auto", left: c[3] ?? "auto",
              width: 18, height: 18,
              borderTop: c[0] != null ? "2px solid white" : "none",
              borderBottom: c[2] != null ? "2px solid white" : "none",
              borderLeft: c[3] != null ? "2px solid white" : "none",
              borderRight: c[1] != null ? "2px solid white" : "none",
            }} />
          ))}
        </div>
        <div style={{
          position: "absolute", left: 18, right: 18, bottom: 22,
          background: "white", borderRadius: 18, padding: 16,
          boxShadow: "0 12px 32px -8px rgba(0,0,0,0.2)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1, color: accent }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} /> Identified · 97%
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 6 }}>Cornu aspersum</div>
          <div style={{ fontSize: 12, opacity: 0.6, fontStyle: "italic" }}>Garden snail · brown / striped shell</div>
          <div style={{ display: "flex", gap: 10, marginTop: 12, fontSize: 11 }}>
            <Stat label="Size" value="25–40mm" />
            <Stat label="Range" value="Worldwide" />
            <Stat label="Sightings" value="3rd" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Expense({ who, amt, by, accent }: { who: string; amt: string; by: string; accent: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", background: "white", borderRadius: 12 }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: accent, opacity: 0.15 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 500 }}>{who}</div>
        <div style={{ fontSize: 10, opacity: 0.6, fontFamily: "var(--font-mono)" }}>{by}</div>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>{amt}</div>
    </div>
  );
}

function SplitMock({ accent, surface }: { accent: string; surface: string }) {
  return (
    <div style={screenStyle(surface)}>
      <StatusBar />
      <div style={{ padding: "20px 18px 8px" }}>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1, opacity: 0.5 }}>Group · 4 people</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 26, marginTop: 2 }}>Lisbon trip</div>
      </div>

      <div style={{ margin: "0 18px", padding: "16px 18px", background: accent, color: "white", borderRadius: 18, position: "relative", overflow: "hidden" }}>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1, opacity: 0.7 }}>You&apos;re owed</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 38, marginTop: 4, lineHeight: 1 }}>€142.50</div>
        <div style={{ fontSize: 11, opacity: 0.85, marginTop: 6 }}>2 settle-up payments needed</div>
        <div style={{ position: "absolute", right: -20, bottom: -20, fontSize: 100, fontFamily: "var(--font-display)", opacity: 0.12, lineHeight: 1 }}>÷</div>
      </div>

      <div style={{ flex: 1, padding: "18px 18px", display: "flex", flexDirection: "column", gap: 10, overflow: "hidden" }}>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1, opacity: 0.5, marginBottom: 2 }}>Recent</div>
        <Expense who="Time Out Market" amt="€86.40" by="You paid · split 4 ways" accent={accent} />
        <Expense who="Tram tickets" amt="€18.00" by="Maya paid · split 4 ways" accent="#999" />
        <Expense who="Pastéis de Belém" amt="€12.20" by="You paid · split 3 ways" accent={accent} />
        <Expense who="Airbnb" amt="€420.00" by="Sam paid · split 4 ways" accent="#999" />
      </div>
    </div>
  );
}

function ScanMock({ accent, surface }: { accent: string; surface: string }) {
  const cards = [
    { name: "Alma Suárez", role: "Head of Design · Stripe", color: "#1a1814", offset: 16, rotate: 4 },
    { name: "Tomás Chen", role: "Founder · Linear", color: accent, offset: 8, rotate: -2 },
    { name: "Naomi Park", role: "PM · Figma", color: "#5a5048", offset: 0, rotate: 1 },
  ];
  return (
    <div style={screenStyle(surface)}>
      <StatusBar />
      <div style={{ padding: "20px 18px 8px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1, opacity: 0.5 }}>Inbox</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 24, marginTop: 2 }}>12 new cards</div>
        </div>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", padding: "4px 8px", background: accent, color: "white", borderRadius: 999, textTransform: "uppercase", letterSpacing: 1 }}>Live</div>
      </div>

      <div style={{ flex: 1, position: "relative", padding: "20px 18px" }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            position: "absolute", left: 18, right: 18,
            top: 20 + c.offset * 2, transform: `rotate(${c.rotate}deg)`,
            background: "white", borderRadius: 14, padding: 18,
            boxShadow: "0 8px 24px -8px rgba(0,0,0,0.12)",
            border: "1px solid rgba(26,24,20,0.06)",
            zIndex: 10 - i,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: c.color, color: "white", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontSize: 16 }}>
                {c.name[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{c.name}</div>
                <div style={{ fontSize: 11, opacity: 0.6 }}>{c.role}</div>
              </div>
            </div>
            {i === 2 && (
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px dashed rgba(26,24,20,0.15)", fontSize: 11, fontFamily: "var(--font-mono)", display: "flex", flexDirection: "column", gap: 4, opacity: 0.7 }}>
                <span>naomi@figma.com</span>
                <span>+1 415 555 0142</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        margin: "0 18px 22px", padding: "12px 16px",
        background: "#1a1814", color: "white", borderRadius: 999,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        fontSize: 12, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent }} />
        Scan next card
      </div>
    </div>
  );
}
