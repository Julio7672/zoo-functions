const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
      it ('Ao nao passar parametros, retornar undefined', () => {
        expect(handlerElephants()).toBe(undefined);
      });
      it ('Caso seja um parametro que nao seja string, retornar a mensagem abaixo', () => {
        expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
      });
      it ('caso seja passado uma das chaves do obj elefantes ela retornara o valor da chave', () => {
        expect(handlerElephants('popularity')).toBe(5);
      });
      it ('caso seja passsado o parametro count da funçao computeData() ele tera o retorno esperado', () => {
        expect(handlerElephants('count', 'elephants')).toBe(4);
      });
      it ('caso seja passsado o parametro names da funçao computeData() ele tera o retorno esperado', () => {
        expect(handlerElephants('names', 'elephants')).toEqual(["Ilana", "Orval", "Bea", "Jefferson"]);
      });
      it ('caso seja passsado o parametro averageAge da funçao computeData() ele tera o retorno esperado', () => {
        expect(handlerElephants('averageAge', 'elephants')).toBe(10.5);
      });
});
