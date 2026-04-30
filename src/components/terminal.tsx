"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLine {
  type: "cmd" | "output" | "multivar";
  content: string | string[];
  delay: number;
}

const LINES: TerminalLine[] = [
  { type: "cmd", content: "whoami", delay: 400 },
  { type: "output", content: "abdul-hakeem", delay: 600 },
  { type: "cmd", content: "cat /now", delay: 900 },
  { type: "output", content: "→ lynkboard 2.0 (rust core)", delay: 1100 },
  { type: "output", content: "→ privachat v1.3 (group calls)", delay: 1300 },
  { type: "cmd", content: "ls ~/shipped", delay: 1700 },
  {
    type: "multivar",
    content: ["privachat", "lynkboard", "maccleaner"],
    delay: 1900,
  },
  {
    type: "multivar",
    content: ["tradeslynk", "neurosiv", "arvora"],
    delay: 2100,
  },
];

function TerminalLineItem({
  line,
  lineNum,
}: {
  line: TerminalLine;
  lineNum: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {line.type === "cmd" && (
        <div>
          <span className="ln">{lineNum}</span>
          <span className="pp">$</span>{" "}
          <span className="kw">{(line.content as string).split(" ")[0]}</span>
          {(line.content as string).includes(" ") && (
            <>
              {" "}
              <span className="str">
                {(line.content as string).split(" ").slice(1).join(" ")}
              </span>
            </>
          )}
        </div>
      )}
      {line.type === "output" && (
        <div>
          <span className="ln">{lineNum}</span>
          <span style={{ color: "#d4d4d8" }}>{line.content as string}</span>
        </div>
      )}
      {line.type === "multivar" && (
        <div>
          <span className="ln">{lineNum}</span>
          {(line.content as string[]).map((v, i) => (
            <span key={v}>
              <span className="vr">{v}</span>
              {i < (line.content as string[]).length - 1 && (
                <span style={{ color: "var(--text-4)" }}>{"  "}</span>
              )}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function AnimatedTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleCount(i + 1);
          if (i === LINES.length - 1) {
            setTimeout(() => setShowCursor(true), 200);
          }
        }, line.delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  let lineNum = 1;

  return (
    <div className="dev-term" style={{ height: "100%", border: "none", borderRadius: 14 }}>
      <div className="dev-term-bar">
        <div className="lights">
          <span style={{ background: "#f87171" }} />
          <span style={{ background: "#fbbf24" }} />
          <span style={{ background: "#4ade80" }} />
        </div>
        <span style={{ color: "var(--text-3)" }}>~/hakeem · zsh</span>
      </div>
      <div className="dev-term-body" style={{ fontSize: 12 }}>
        <AnimatePresence>
          {LINES.slice(0, visibleCount).map((line, i) => {
            const currentLineNum = lineNum;
            lineNum++;
            return (
              <TerminalLineItem
                key={i}
                line={line}
                lineNum={currentLineNum}
              />
            );
          })}
        </AnimatePresence>

        {showCursor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="ln">{lineNum}</span>
            <span className="pp">$</span>{" "}
            <span className="cursor-blink">_</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
