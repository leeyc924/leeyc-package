export function parseToNumber<T>(value: T, defaultValue = 0): number {
  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    return defaultValue;
  }

  return parsed;
}

export function parseToString(value: unknown): string {
  switch (typeof value) {
    case 'string': {
      return value;
    }
    case 'number':
    case 'boolean':
    case 'undefined': {
      return `${value}`;
    }
    default: {
      return JSON.stringify(value);
    }
  }
}
