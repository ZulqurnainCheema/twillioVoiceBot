// ------------------------------------------------------------------
// TRANSCRIPTION HELPERS
// ------------------------------------------------------------------
import fs from "fs";
import path from "path";
const logDir = path.join(process.cwd(), "transcriptions");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

export function appendTranscription(callSid, speaker, text) {
  if (!text) return;
  const file = path.join(logDir, `${callSid}.txt`);
  fs.appendFileSync(file, `${speaker}: ${text.trim()}\n`, "utf8");
  
}