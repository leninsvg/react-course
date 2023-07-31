import {getSaludo} from '../../src/base-pruebas-2/02-template-string.js';

describe('Pruebas en 02-template-string', () => {
    test('retornar "Hola lenin"', () => {
        const name = 'lenin'
        const message = getSaludo(name)
        expect(message).toBe(`Hola ${name}`)
    })
})
