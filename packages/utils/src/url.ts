import { parseToString } from './parse';

interface ParsedQuery {
  [key: string]: string;
}

interface QueryObject {
  [key: string]: unknown;
}

interface ParseOption<T> {
  decode?: boolean;
  type?: T;
}

/** 전달받은 문자열에서 쿼리스트링`(?FOO=BAR)` 제거 */
export const removeQueryString = (path: string) => path.split('?')[0];

/** 문자열에서 특정 쿼리 제거 */
export const removeSpecificQueryString = (path: string, ...queries: string[]) => {
  const url = new URL(`${location.origin}${path.startsWith('/') ? '' : '/'}${path}`);

  for (let i = 0, max = queries.length; i < max; ++i) {
    url.searchParams.delete(queries[i]);
  }

  return `${url.pathname}${url.search}`;
};

export function parseQuery<T extends ParsedQuery>(
  queryString: string,
  { decode = false, type }: ParseOption<T> = {},
): T {
  if (!queryString) {
    return {} as unknown as T;
  }
  const arr = queryString.substring(1).split('&');
  const obj: Record<string, string | number> = {};
  const parseValue = (key: string, value: string) => {
    if (!type || !type[key]) {
      return value;
    }

    if (typeof type[key] !== 'undefined') {
      switch (typeof type[key]) {
        case 'number': {
          return +value;
        }
        default: {
          return value;
        }
      }
    }

    return value;
  };

  for (let i = 0, len = arr.length; i < len; i++) {
    const [key, value] = arr[i].split('=');

    obj[key] = parseValue(key, decode ? decodeURIComponent(value) : value);
  }

  return obj as unknown as T;
}

export function stringifyQuery(queryObject: QueryObject, encode = true, initialString = '?'): string {
  let str = initialString;

  for (const key in queryObject) {
    const stringified = parseToString(queryObject[key]);
    str += `${key}=${encode ? encodeURIComponent(stringified) : stringified}&`;
  }

  return str.slice(0, -1);
}
