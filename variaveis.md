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
    - Um array é um objeto que armazena uma coleção ordenada de valores. Os valores podem ser de qualquer tipo, incluindo outros arrays, o que permite criar estruturas de dados complexas.
    ```javascript
    let numeros = [1, 2, 3, 4, 5];
    ```

# Operadores Básicos

- ## Aritméticos
    - 
- ## De Comparação
    - 
- ## Lógicos
    - 
- ## Typeof
    - 

