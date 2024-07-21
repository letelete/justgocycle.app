/**
 * Either one set T or array of sets T.
 */
export type OneOrMany<T> = T | T[];

/**
 * Only allow children with props of type T.
 */
export type ChildrenWithProps<T> = OneOrMany<React.ReactElement<T>>;

/**
 * Require at least one property from set T
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

/**
 * Create a type that allows either all properties from one type
 * to be required while all properties from the other types are optional.
 *
 * @example
 * ```
 * type A = { a: string; b: number };
 * type B = { c: boolean; d: string };
 *
 * type Result = OneOf<[A, B]>;
 * ```
 *
 * The resulting type will allow:
 * All properties of A with properties of B marked as optional.
 * All properties of B with properties of A marked as optional.
 */
export type OneOf<T1, T2> = (T1 & Partial<T2>) | (T2 & Partial<T1>);
