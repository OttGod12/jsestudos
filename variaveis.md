# Criação de Variáveis
  - ## let
    - Para reatribuir valores; 
    - Não pode ser redeclarada no mesmo escopo;
    -  Tem escopo de bloco, o que significa que é acessível apenas dentro do bloco em que foi declarada;
    -  Variáveis ​​definidas com let não podem ser declaradas novamente.
    ```javascript
    let x = 5;
    let y = 6;
    let z = x + y; 
    ```
   
- ## const
  - Quando quiser que uma variável não seja reatribuída;
  - Para declarar valores constantes;
  - Variáveis ​​definidas com CONST não podem ser redeclaradas;
  - Sempre declare uma variável com CONST quando souber que o valor não deve ser alterado.
    ```javascript
    const x = 5;
    const y = 6;
    const z = x + y; 
    ```
  
- ## var 
  - Pode ser reatribuída e redeclarada; 
  - Independentemente do escopo de bloco.
  - Declara uma variável globalmente ou localmente para uma função
  - Só deve ser usada em código escrito para navegadores mais antigos.
  - Variáveis ​​declaradas com VAR sempre possuem Escopo Global.
    ```javascript
    var x = 5;
    var y = 6;
    var z = x + y;
    ```

- ## Quando usar cada um?
  - Só use o VAR se você deve oferecer suporte para navegadores antigos; use o CONST se o valor e o tipo não deve ser alterado; use o LET quando não puder usar o CONST.
  

# Escopo
Em JavaScript, escopo refere-se à visibilidade de uma variável ou como ela pode ser usada após ser declarada;

O escopo de uma variável depende do local onde foi declarada e da palavra-chave usada (let, var, const).

O escopo determina a acessibilidade de variáveis, objetos e funções de diferentes partes do código.

- ## Escopo de Bloco
  - Variáveis ​​declaradas dentro de um bloco { } não podem ser acessadas de fora do bloco;
    ```javascript
    {
    let x = 2;
    }
    ```
  
- ## Escopo de Função
  - JavaScript tem escopo de função: cada função cria um novo escopo;
  - Variáveis ​​definidas dentro de uma função não são acessíveis de fora da função.
    ```javascript
    function myFunction() {
    let Nome = "João"; 
    }
    ```
       
- ## Escopo de Global
  - Uma variável declarada fora de uma função torna-se global;
  - Variáveis ​​globais podem ser acessadas de qualquer lugar em um programa JavaScript.
  
        ```javascript
        let planta = "Samambaia";
        ```


# Tipos Primitivos

- ## String
    - Sequência de caracteres que representam texto. Strings são definidas usando aspas simples (' ') ou duplas (" ").
    ```javascript
    let nome = 'João';
    ```
- ## Number
    - Representa números inteiros ou de ponto flutuante.
    ```javascript
    let idade = 25;
    let altura = 1.75;
    ```
- ## Boolean
    -  Representa um valor verdadeiro ou falso.
    ```javascript
    let solteiro = true;
    ```
- ## Null
    - Representa a ausência intencional de qualquer valor ou objeto.
    ```javascript
    let endereco = null;
    ```
- ## Undefined
    - Representa uma variável que foi declarada, mas ainda não foi atribuída a nenhum valor.
    ```javascript
    let sobrenome;
    ```

# Tipos de Dados

- ## Objeto
    -  Em JavaScript, um objeto é uma coleção de pares de chave e valor. É uma entidade independente com propriedades e tipos. As propriedades de um objeto podem ser acessadas usando a notação de ponto (.) ou a notação de colchetes ([]).
    ```javascript
    let pessoa = {
    nome: 'Maria',
    idade: 30,
    solteira: false
    };
    ```
- ## Array
    - Um array é um objeto que armazena uma coleção ordenada de valores. Os valores podem ser de qualquer tipo, incluindo outros arrays, o que permite criar estruturas de dados complexas. Podem ser comparados com as listas do python.
    ```javascript
    let numeros = [1, 2, 3, 4, 5];
    ```

# Operadores Básicos
Os operadores são símbolos que realizam operações em variáveis e valores. 

- ## Aritméticos
    - O "+" indica Adição;
    - O "-" indica Subtração;
    - O "*" indica Multiplicação;
    - A "/" indica Divisão;
    - A "%" indica Módulo (resto da divisão);
    - Os "**" indicam Exponenciação.
    ```javascript
    let a = 10;
    let b = 5;
    let soma = a + b; 
    let produto = a * b; 
    let resto = a % b;
    let sub = a - b
    let divisao = a / b
    let expo = a ** b

    ```
- ## De Comparação
    - "==" : Igualdade, não leva em conta o tipo de dado;
    - "===" : Igualdade estrita, compara valor e tipo de dado;
    - "!=" : Diferente, não leva em conta o tipo de dado;
    - "!==" : Diferença estrita, compara valor e tipo de dado;
    - ">" : Maior que;
    - "<" : Menor que;
    - "<=" : Menor ou igual a;
    - ">=" : Maior ou igual a.


- ## Lógicos
    - "&&" : O operador && retorna verdadeiro se ambos os operandos forem verdadeiros. Caso contrário, retorna falso.
    - "||" : O operador || retorna verdadeiro se pelo menos um dos operandos for verdadeiro. Se ambos forem falsos, retorna falso.
    - "!" : O operador ! inverte o valor de verdadeiro para falso e vice-versa.
    ```javascript
    let a = true;
    let b = false;

    console.log(a && b); // false

    console.log(a || b); // true

    console.log(!a); // false
    console.log(!b); // true

    ```


- ## Typeof
  Os operadores typeof em JavaScript são utilizados para determinar o tipo de dado de uma variável ou expressão. Eles retornam uma string indicando o tipo de dado. 
  - typeof undefined: Retorna "undefined" para valores não definidos.
  - typeof string: Retorna "string" para valores de texto.
  - typeof number: Retorna "number" para valores numéricos.
  - typeof boolean: Retorna "boolean" para valores booleanos (true ou false).
  ```javascript
  let nome = "João";
  let idade = 30;
  console.log(typeof nome); // "string"
  console.log(typeof idade); // "number"
  ```






