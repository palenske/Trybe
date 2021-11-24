# JavaScript - Array e loop For
## Aprendido duas das principais estruturas de dados disponíveis na linguagem e algumas das formas de iterar sobre elas.

### Serei capaz de
- Manipular arrays (listas);
- Utilizar o comando for.

## Conteúdo e exercícios:
## [exercise_1](exercise_1.js)
### Lista de desafios:
> Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```
- [x] **1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();**
- [x] **2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;**
- [x] **3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;**
- A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
- [x] **4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";**
- [x] **5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;**
- [x] **6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";**
- [x] **7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;**
- [x] **8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;**
- [x] **9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.**
### Bônus:
> Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
```
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}
```
- [x] **1. Ordene o array numbers em ordem crescente e imprima seus valores;**
- [x] **2. Ordene o array numbers em ordem decrescente e imprima seus valores;**
- [x] **3. Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.**
> O resultado deve ser o array abaixo:
```
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```
