#!/bin/bash

echo "remove node_modules:"
echo "  \$ROOT/node_modules"
rm -r "node_modules"
rm -r "pnpm-lock.yaml"

find packages -name "node_modules" -type d -prune | while read -r d; do
  echo "  $d"
  rm -rf "$d"
done

for d in apps/*/node_modules; do
  echo "  $d"
  rm -r "$d"
done

pnpm store prune

pnpm install
