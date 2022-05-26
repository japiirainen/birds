import { idiot, kestrel } from '../src'
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
})
