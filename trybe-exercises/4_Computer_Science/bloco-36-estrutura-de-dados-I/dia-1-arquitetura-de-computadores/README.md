- [x] Exercício 1: Crie um projeto que irá simular a arquitetura que vimos em aula de uma maneira bem simples, ela terá um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes que representarão a Memória Principal e a Secundária .

    1. Crie um novo diretório na sua máquina para os exercícios (pode chamar ele de computador ou pc 😎), os próximos arquivos deverão ser criados dentro dela.
    2. Vamos começar a nossa memória principal, ou memória RAM, para isso crie um arquivo main_memory.py e adicione o [conteúdo abaixo](./compiuter/main_memory.py) nela. Implemente os métodos get e load .
        - No load você irá adicionar ( append ) o elemento passado ( value ) à lista loaded_memory .
        - No get você irá retornar o valor presente na posição dada ( index ) na lista loaded_memory . Se o valor não existir ou não for numérico, retorne 0 .
    3. Agora, crie um arquivo secondary_memory.py para ser a nossa memória secundária e adicione o [conteúdo abaixo](./compiuter/secondary_memory.py). Mais uma vez você será responsável pela implementação dos métodos get e load porém, agora, você deverá utilizar a função open , para persistir esses dados em disco.
        - No load , utilizando o método open , escreva o código que crie um novo arquivo utilizando next_file_name como path e salve o value no conteúdo deste novo arquivo.
        - No get , também utilizando o método open , retorne o conteúdo do arquivo file_name . Não esqueça de converter o valor para numérico ( float ou int ).
    4. Vamos criar nosso arquivo principal para gerenciar as "memórias" que criamos, crie um novo arquivo operating_system.py e coloque o [seguinte conteúdo](./compiuter/operating_system.py):

    5. Vamos testar nosso script, execute o comando python ~operating_system.py~ [`python3 exercise_01`](exercise_01.py) e veja a saída no console.