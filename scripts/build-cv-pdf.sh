#!/usr/bin/env bash
# Build the executive CV PDF from cv/cv.typ into cv/Philipp_Michel_CV_YYYY-MM-DD.pdf.
# Requires Nix (fetches Typst and the Source Sans 3 / Source Serif 4 fonts from nixpkgs).
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
date_suffix="${1:-$(date +%F)}"
out="$repo_root/cv/Philipp_Michel_CV_${date_suffix}.pdf"

# Use only the static OTFs: Typst doesn't pick weights from the variable fonts correctly
font_dir="$(mktemp -d)"
trap 'rm -rf "$font_dir"' EXIT
for pkg in source-sans source-serif; do
  find "$(nix build --no-link --print-out-paths "nixpkgs#$pkg")" -name '*.otf' ! -iname '*variable*' \
    -exec cp {} "$font_dir" \;
done

nix shell nixpkgs#typst -c typst compile \
  --ignore-system-fonts \
  --font-path "$font_dir" \
  "$repo_root/cv/cv.typ" "$out"

echo "Wrote $out"
