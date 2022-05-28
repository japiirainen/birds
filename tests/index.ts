import * as Birds from '../src'
import * as fc from 'fast-check'

describe('birds', () => {
  it('idiot bird', () =>
    fc.assert(
      fc.property(fc.anything(), (a) => expect(Birds.idiot(a)).toBe(a))
    ))

  it('kestrel bird', () =>
    fc.assert(
      fc.property(fc.anything(), fc.anything(), (a, b) =>
        expect(Birds.kestrel(a)(b)).toBe(a)
      )
    ))

  it('bluebird', () =>
    fc.assert(
      fc.property(fc.nat(), (a) => {
        const f = (a: number) => a + 1
        const g = (a: number) => a * 2
        expect(Birds.bluebird(f)(g)(a)).toBe(f(g(a)))
      })
    ))

  it('cardinal bird', () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        const f = (a: number) => (b: number) => a + b
        expect(Birds.cardinal(f)(a)(b)).toBe(f(b)(a))
      })
    ))

  it('applicator bird', () =>
    fc.assert(
      fc.property(fc.nat(), (a) => {
        const f = (b: number) => `${b}`
        expect(Birds.applicator(f)(a)).toBe(f(a))
      })
    ))

  it('applicator bird', () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        const f = (a: number) => (b: number) => a + b
        const g = (a: number) => a
        expect(Birds.psi(f)(g)(a)(b)).toBe(f(g(a))(g(b)))
      })
    ))

  it('becard bird', () =>
    fc.assert(
      fc.property(fc.nat(), (a) => {
        const f = (a: number) => a - 2
        const g = (a: number) => a + 2
        const h = (a: number) => a * 2
        expect(Birds.becard(f)(g)(h)(a)).toBe(f(g(h(a))))
      })
    ))

  it('blackbird', () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        const f = (a: number) => a * 2
        const g = (a: number) => (b: number) => a * b
        expect(Birds.blackbird(f)(g)(a)(b)).toBe(f(g(a)(b)))
      })
    ))

  it("bluebird'", () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        const f = (a: number) => (b: number) => a * b
        const g = (a: number) => a * 2
        expect(Birds.bluebirdp(f)(a)(g)(b)).toBe(f(a)(g(b)))
      })
    ))

  it("bunting bird'", () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), fc.nat(), (a, b, c) => {
        const f = (d: number) => d * 2
        const g = (a: number) => (b: number) => (c: number) => a * b * c
        expect(Birds.bunting(f)(g)(a)(b)(c)).toBe(f(g(a)(b)(c)))
      })
    ))

  it("cardinal' bird'", () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        const f = (c: number) => (a: number) => c * a
        const g = (b: number) => b * 2
        expect(Birds.cardinalp(f)(g)(a)(b)).toBe(f(g(b))(a))
      })
    ))

  it("cardinalstar bird'", () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), fc.nat(), (a, b, c) => {
        const f = (a: number) => (c: number) => (b: number) => c * a * b
        expect(Birds.cardinalstar(f)(a)(b)(c)).toBe(f(a)(c)(b))
      })
    ))
})
