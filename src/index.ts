/**
 * I combinator - identity bird / idiot bird
* `id` in Haskell
 */
export const idiot: <T>(a: T) => T = a => a

/**
 * K combinator - kestrel bird
* `const` in Haskell
 */
export const kestrel: <A, B>(a: A) => (b: B) => A = a => _ => a
