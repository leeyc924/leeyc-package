import { ComponentProps, ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from 'react';

/** `T`의 모든 속성을 순회하며 optional로 수정 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/** 특정 key를 제외하고 optional로 변환 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/** 특정 key를 제외하고 모든 속성을 optional로 변환 */
export type DeepPartialExcept<T, K extends keyof T> = DeepPartial<T> & Pick<T, K>;

/** 특정 key만 optional로 변환 */
export type PartialKeys<T, K extends keyof T> = Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K> extends infer O
  ? { [P in keyof O]: O[P] }
  : never;

/** `T`와 `K` 모두 가지고 있는 키 반환 */
export type DuplicatedKeys<T, K> = keyof T & keyof K;

/** `T`와 `K`를 합친 타입 반환 */
// FIXME: I don't think it's usable
export type SoftMerge<T extends Record<string, unknown>, K extends Record<string, unknown>> = {
  [key in DuplicatedKeys<T, K>]: T[key] | K[key];
} & { [key in keyof T]?: T[key] } & { [key in keyof K]?: K[key] };

/** 함수 반환값의 타입. Promise를 반환하면 Promise를 제거 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Return<T extends (...args: any) => unknown> = Awaited<ReturnType<T>>;

export type Nullable<T> = T | null;

/** 특정 key의 optional 해제 */
export type RequiredKey<T, K extends keyof T> = Required<Pick<T, K>>[K];
