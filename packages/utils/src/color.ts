export function hexToRgbaObject(hex: string) {
  if (!/^#[0-9A-Fa-f]{3,8}$/.test(hex)) {
    console.log('유효하지 않은 HEX 값입니다');
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  if (hex.length === 8) {
    const a = Number((parseInt(hex.slice(6, 8), 16) / 255).toFixed(2));
    hex = hex.slice(0, 6);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b, a };
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b, a: 1 };
}

export function rgbaToHex({ a, b, g, r }: { r: number; g: number; b: number; a: number }) {
  const toHex = (n: number) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const alpha = Math.round(a * 255);

  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`;
}

export function rgbaToString(rgba: { r: number; g: number; b: number; a: number }) {
  const { a, b, g, r } = rgba;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function rgbaStringToObject(rgba: string) {
  if (!rgba.startsWith('rgb')) {
    console.log('rgb로 시작하지 않는 문자열입니다');
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  const [r, g, b, a] = rgba.match(/\d+(\.\d+)?/g)?.map(Number) ?? [0, 0, 0, 1];
  return { r, g, b, a: a ?? 1 };
}
