/**
 * @signature idiot :: a -> a
 * I combinator - identity bird / idiot bird
 */
export const idiot: <T>(a: T) => T = (a) => a

/**
 * @signature kestrel :: a -> b -> a
 * K combinator - kestrel bird
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const kestrel: <A, B>(a: A) => (b: B) => A = (a) => (_) => a

/**
 * @signature bluebird :: (b -> c) -> (a -> b) -> a -> c
 * B combinator - bluebird
 */
export const bluebird: <B, C>(
  f: (b: B) => C
) => <A>(g: (a: A) => B) => (a: A) => C = (f) => (g) => (a) => f(g(a))

/**
 * @signature cardinal :: (a -> b -> c) -> b -> a -> c
 * B combinator - cardinal bird
 */
export const cardinal: <A, B, C>(
  f: (a: A) => (b: B) => C
) => (b: B) => (a: A) => C = (f) => (a) => (b) => f(b)(a)

/**
 * @signature applicator :: (a -> b) -> a -> b
 * A combinator - apply / applicator bird
 */
export const applicator: <A, B>(f: (a: A) => B) => (a: A) => B = (f) => (a) =>
  f(a)

/**
 * @signature psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c
 * Psi combinator - psi bird (?)
 */
export const psi: <B, C>(
  f: (b: B) => (a: B) => C
) => <A>(g: (a: A) => B) => (a: A) => (a: A) => C = (f) => (g) => (a) => (b) =>
  f(g(a))(g(b))

/**
 * @signature becard :: (c -> d) -> (b -> c) -> (a -> b) -> a -> d
 * B3 combinator - becard bird
 */
export const becard: <C, D>(
  f: (c: C) => D
) => <B>(g: (b: B) => C) => <A>(h: (a: A) => B) => (a: A) => D =
  (f) => (g) => (h) => (x) =>
    f(g(h(x)))

/**
 * @signature blackbird :: (c -> d) -> (a -> b -> c) -> a -> b -> d
 * B1 combinator - blackbird
 */
export const blackbird: <C, D>(
  f: (c: C) => D
) => <A, B>(g: (a: A) => (b: B) => C) => (a: A) => (b: B) => D =
  (f) => (g) => (a) => (b) =>
    f(g(a)(b))

/**
 * @signature bluebird' :: (a -> c -> d) -> a -> (b -> c) -> b -> d
 * B' combinator - bluebird'
 */
export const bluebirdp: <A, C, D>(
  f: (a: A) => (c: C) => D
) => (a: A) => <B>(g: (b: B) => C) => (b: B) => D = (f) => (a) => (g) => (b) =>
  f(a)(g(b))

/**
 * @signature bunting :: (d -> e) -> (a -> b -> c -> d) -> a -> b -> c -> e
 * B2 combinator - binting bird'
 */
export const bunting: <D, E>(
  f: (d: D) => E
) => <A, B, C>(
  g: (a: A) => (b: B) => (c: C) => D
) => (a: A) => (b: B) => (c: C) => E = (f) => (g) => (a) => (b) => (c) =>
  f(g(a)(b)(c))

/**
 * @signature cardinal' :: (c -> a -> d) -> (b -> c) -> a -> b -> d
 * C' combinator - no name
 */
export const cardinalp: <C, A, D>(
  f: (c: C) => (a: A) => D
) => <B>(g: (b: B) => C) => (a: A) => (b: B) => D = (f) => (g) => (a) => (b) =>
  f(g(b))(a)

/**
 * @signature cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d
 * c* combinator - cardinal once removed
 */
export const cardinalstar: <A, C, B, D>(
  f: (a: A) => (c: C) => (b: B) => D
) => (a: A) => (b: B) => (c: C) => D = (f) => (a) => (b) => (c) => f(a)(c)(b)

/**
 * @signature cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e
 * c* combinator - cardinal twice removed
 */
export const cardinalstarstar: <A, B, C, D, E>(
  f: (a: A) => (b: B) => (d: D) => (c: C) => E
) => (a: A) => (b: B) => (c: C) => (d: D) => E =
  (f) => (a) => (b) => (c) => (d) =>
    f(a)(b)(d)(c)

/**
 * @signature dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e
 * D1 combinator - dickcissel
 */
export const dickcissel: <A, B, D, E>(
  f: (a: A) => (b: B) => (d: D) => E
) => (a: A) => (b: B) => <C>(g: (c: C) => D) => (c: C) => E =
  (f) => (a) => (b) => (g) => (c) =>
    f(a)(b)(g(c))

/**
 * @signature dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d
 * D combinator - dove
 */
export const dove: <A, C, D>(
  f: (a: A) => (c: C) => D
) => (a: A) => <B>(g: (b: B) => C) => (b: B) => D = (f) => (a) => (g) => (b) =>
  f(a)(g(b))

/**
 * @signature dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e
 * D2 combinator - dovekie
 */
export const dovekie: <C, D, E>(
  f: (c: C) => (d: D) => E
) => <A>(g: (a: A) => C) => (a: A) => <B>(h: (b: B) => D) => (b: B) => E =
  (f) => (g) => (a) => (h) => (b) =>
    f(g(a))(h(b))
