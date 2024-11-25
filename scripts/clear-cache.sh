#!/bin/bash

echo "remove .turbo:"
echo "  \$ROOT/.turbo"
rm -r ".turbo"

find packages -name ".turbo" -type d -prune | while read -r d; do
  echo "  $d"
  rm -rf "$d"
done

for d in apps/*/.turbo; do
  echo "  $d"
  rm -r "$d"
done

pnpm store prune
