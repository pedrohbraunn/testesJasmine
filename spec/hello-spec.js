var hello = require('../hello')

describe('Teste Hello word',function(){
    it('Espera-se que ocorra o print do texto "Hello Word!"',function(){
        var texto = hello();
        expect(texto).toEqual('Hello Word!'); //Mather
    })
})
//end suit case 1