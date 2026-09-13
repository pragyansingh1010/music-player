from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
files = list(ROOT.glob("*.html")) + list(ROOT.glob("*.js"))
assert files, "no player source found"
text = "\n".join(p.read_text(encoding="utf-8") for p in files).lower()
assert "audio" in text or "play" in text
print("Music Player smoke check passed")
