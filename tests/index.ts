import { idiot, kestrel, cardinal, applicator } from '../src'
import * as fc from 'fast-check'

describe('birds', () => {
  it('idiot bird', () =>
    fc.assert(fc.property(fc.anything(), (a) => expect(idiot(a)).toBe(a))))

  it('kestrel bird', () =>
    fc.assert(
      fc.property(fc.anything(), fc.anything(), (a, b) =>
        expect(kestrel(a)(b)).toBe(a)
      )
    ))

  it('cardinal bird', () =>
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        const f = (a: number) => (b: number) => a + b
        expect(cardinal(f)(a)(b)).toBe(f(b)(a))
      })
    ))

  it('applicator bird', () =>
    fc.assert(
      fc.property(fc.nat(), (a) => {
        const f = (b: number) => `${b}`
        expect(applicator(f)(a)).toBe(f(a))
      })
    ))
})
