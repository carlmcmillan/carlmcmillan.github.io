#!/usr/bin/env bash
# Generates the CV PDF from index.html using headless Chrome (uses the @media print styles in styles.css).
# Usage: ./build_pdf.sh [output.pdf]
set -euo pipefail

cd "$(dirname "$0")"
out="${1:-carl_mcmillan_cv.pdf}"
chrome="$(command -v google-chrome-stable || command -v google-chrome || command -v chromium || command -v chromium-browser)"

"$chrome" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$out" "file://$PWD/index.html"
