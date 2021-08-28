const { expect } = require('chai');
const classifyNumber = require('./classifyNumber');

describe('Executa função classifyNumber', () => {
  describe('Quando o parametro não é um número', () => {
    describe('a reposta', () => {
      const resposta = classifyNumber('x');

      it('é uma "String"', () => {
        expect(resposta).a('string');
      });

      it('igual a "O parâmetro precisa ser um número"', () => {
        expect(resposta).equals('O parâmetro precisa ser um número');
      })
    })
  })


  describe('Quando o número for maior que 0', () => {
    describe('a resposta', () => {
      const resposta = classifyNumber(2);

      it('é uma "String"', () => {
        expect(resposta).a('string');
      });

      it('igual a "positivo"', () => {
        expect(resposta).equals('positivo');
      });
    });
  });

  describe('Quando o númerio for menor que 0', () => {
    describe('a reposta', () => {
      const resposta = classifyNumber(-2);

      it('é uma "String"', () => {
        expect(resposta).a('string');
      });

      it('igual a "negativo"', () => {
        expect(resposta).equals('negativo');
      });
    });
  });

  describe('Quando o número for igual a 0', () => {
    describe('a reposta', () => {
      const resposta = classifyNumber(0);

      it('é uma "String"', () => {
        expect(resposta).a('string');
      });

      it('igual a "neutro"', () => {
        expect(resposta).equals('neutro');
      });
    });
  });
});