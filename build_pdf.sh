#!/usr/bin/env bash
# Generates a PDF from an HTML page using headless Chrome (uses the page's @media print styles).
# Usage: ./build_pdf.sh [output.pdf] [input.html]
#   ./build_pdf.sh                                   -> carl_mcmillan_cv.pdf from index.html
#   ./build_pdf.sh cover_letter.pdf cover_letter.html
set -euo pipefail

cd "$(dirname "$0")"
out="${1:-carl_mcmillan_cv.pdf}"
in="${2:-index.html}"
chrome="$(command -v google-chrome-stable || command -v google-chrome || command -v chromium || command -v chromium-browser)"

"$chrome" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$out" "file://$PWD/$in"
