describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar', () => {
        // 1. inicializacion
        const msj1 = 'Hello world'
        // 2. estimulo
        const msj2 = msj1.trim()
        // 3. aserciones (observar el comportamiento esperado)
        expect(msj1).toBe(msj2);
    })
})

