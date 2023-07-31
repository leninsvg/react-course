import {getUser, getUsuarioActivo} from '../../src/base-pruebas-2/05-funciones.js';

describe('Pruebas en 05-Funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(testUser).toEqual(user)
    })
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name= 'Lenin'
        const testUser = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name)
        expect(testUser).toEqual(user)
    })
})
