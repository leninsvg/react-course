import {retornaArreglo} from '../../src/base-pruebas-2/07-deses-arr.js';

describe('Pruebas en 07-deses-arr.js', () => {
    test('Debe de retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo()
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)
        expect(typeof numbers).toBe('number')
        expect(typeof letters).toBe('string')
        expect(letters).toEqual(expect.any(String))
        expect(numbers).toEqual(expect.any(Number))

    })
})
