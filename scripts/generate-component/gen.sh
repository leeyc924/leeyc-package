#!/bin/bash

escape='\033'
bold="${escape}[1m"
color_blue_underline="${escape}[1;4;36m"
color_blue_deep="${escape}[1;38;2;0;122;204m"
color_reset="${escape}[0m"

blue_line() {
  echo "${color_blue_underline}$1${color_reset}"
}
deep_blue() {
  echo "${color_blue_deep}$1${color_reset}"
}
log_matrix() {
  tput el # 현재 줄을 지움
  local selected_service=$1
  for row in "${DOMAIN_MATRIX[@]}"; do
    row_string=""
    for service in $row; do
      if [ "$service" == "$selected_service" ]; then
        row_string+="$(blue_line "$service") "
        domain="$service"
      else
        row_string+="$service "
      fi
    done
    echo -e "$row_string"
  done
}

DOMAIN_MATRIX=(
  "test test"
  "exit"
)
MAX_Y_LENGTH=${#DOMAIN_MATRIX[@]}
domain=$(echo "${DOMAIN_MATRIX[y]}" | cut -d' ' -f$((x + 1)))
y=0
x=0

echo '┏━━━━━━━━━━━━━━━━━━━━┓'
echo '┃ Generate Schema    ┃'
echo -e "┃ ${bold}Select your $(deep_blue domain) ┃"
echo '┗━━━━━━━━━━━━━━━━━━━━┛'

tput civis
log_matrix "${domain}"

while :; do
  read -s -r -n3 key
  tput cuu 5

  case "$key" in
  $'\e[A') # 위쪽 화살표
    y=$(((y - 1 + MAX_Y_LENGTH) % MAX_Y_LENGTH))
    X_LENGTH=$(echo "${DOMAIN_MATRIX[y]}" | wc -w)
    if ((x >= X_LENGTH)); then
      x=0
    fi
    ;;
  $'\e[B') # 아래쪽 화살표
    y=$(((y + 1) % MAX_Y_LENGTH))
    X_LENGTH=$(echo "${DOMAIN_MATRIX[y]}" | wc -w)
    if ((x >= X_LENGTH)); then
      x=0
    fi
    ;;
  $'\e[C') # 오른쪽 화살표
    X_LENGTH=$(echo "${DOMAIN_MATRIX[y]}" | wc -w)
    x=$(((x + 1) % X_LENGTH))
    ;;
  $'\e[D') # 왼쪽 화살표
    X_LENGTH=$(echo "${DOMAIN_MATRIX[y]}" | wc -w)
    x=$(((x - 1 + X_LENGTH) % X_LENGTH))
    ;;
  '')
    break
    ;;
  esac
  domain=$(echo "${DOMAIN_MATRIX[y]}" | cut -d' ' -f$((x + 1)))
  log_matrix "${domain}"
done
tput cnorm
if [ "$domain" = "exit" ]; then
  echo "exit"
  exit 0
fi

inputPath=''
parse_args() {
  case "$1" in
  -p)
    inputPath="$2"
    ;;
  esac
}

while [[ "$#" -ge 2 ]]; do
  parse_args "$1" "$2"
  shift
  shift
done

node scripts/generate-schema.js "$domain" "$inputPath"
