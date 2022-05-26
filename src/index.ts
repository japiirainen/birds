/**
 * I combinator - identity bird / idiot bird
 * `id` in Haskell
 */
export const idiot: <T>(a: T) => T = (a) => a

/**
 * K combinator - kestrel bird
 * `const` in Haskell
 */
export const kestrel: <A, B>(a: A) => (b: B) => A = (a) => (_) => a

/**
 * B combinator - cardinal bird
 * `flip` in Haskell
 */
export const cardinal: <A, B, C>(
  f: (a: A) => (b: B) => C
) => (b: B) => (a: A) => C = (f) => (a) => (b) => f(b)(a)

/**
 * A combinator - apply / applicator bird
 * `($)` in Haskell
 */
export const applicator: <A, B>(f: (a: A) => B) => (a: A) => B = (f) => (a) =>
  f(a)

/**
 * Psi combinator - psi bird (?)
 * `on` in Haskell
 */
export const psi: <B, C>(
  f: (b: B) => (a: B) => C
) => <A>(g: (a: A) => B) => (a: A) => (a: A) => C = (f) => (g) => (a) => (b) =>
  f(g(a))(g(b))
