/** I combinator - identity bird / idiot bird */
export const idiot: <T>(a: T) => T = (a) => a

/** K combinator - kestrel bird */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const kestrel: <A, B>(a: A) => (b: B) => A = (a) => (_) => a

/** B combinator - cardinal bird */
export const cardinal: <A, B, C>(
  f: (a: A) => (b: B) => C
) => (b: B) => (a: A) => C = (f) => (a) => (b) => f(b)(a)

/** A combinator - apply / applicator bird */
export const applicator: <A, B>(f: (a: A) => B) => (a: A) => B = (f) => (a) =>
  f(a)

/** Psi combinator - psi bird (?) */
export const psi: <B, C>(
  f: (b: B) => (a: B) => C
) => <A>(g: (a: A) => B) => (a: A) => (a: A) => C = (f) => (g) => (a) => (b) =>
  f(g(a))(g(b))

/** B3 combinator - becard bird */
export const becard: <C, D>(
  f: (c: C) => D
) => <B>(g: (b: B) => C) => <A>(h: (a: A) => B) => (a: A) => D =
  (f) => (g) => (h) => (x) =>
    f(g(h(x)))
