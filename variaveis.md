# Criação de Variáveis
## Let
- Para reatribuir valores;
-  Não pode ser redeclarada no mesmo escopo; 
-  Tem escopo de bloco, o que significa que é acessível apenas dentro do bloco em que foi declarada.
  ```javascript
let num1 = 5;
let num2 = 6;
let resul = num1 + num2
  ```




## Const
  
- Quando quiser que uma variável não seja reatribuída;
- Para declarar valores constantes.
- Não pode ser redeclarada




## Var
  
- Pode ser reatribuída e redeclarada; 
- declara uma variável globalmente ou localmente para uma função, independentemente do escopo de bloco 
- O var só deve ser usada em código escrito para navegadores mais antigos.

## Quando usar cada um?
- Se o valor e o tipo desejado não iram ser alterados, você deve usar o const. Se não puder usar o const, use o let. O var só é usado para oferecer suporte a navegadores antigos.

  




# Escopo

## Escopo de Bloco
- Variáveis ​​declaradas dentro de um bloco { } não podem ser acessadas de fora do bloco;
- Variáveis ​​declaradas com o var NÃO podem ter escopo de bloco.
  ```javascript
    {
    let x = 2;
    }
  ```





## Escopo Global
- Uma variável declarada fora de uma função torna-se global
- Uma variável global tem Escopo Global, ou seja,
todos os scripts e funções em uma página da web podem acessá-la. 





## Escopo de Função
- Variáveis ​​definidas dentro de uma função não são acessíveis (visíveis) de fora da função;
- Variáveis ​​declaradas com var, let e const são bastante semelhantes quando declaradas dentro de uma função.

```javascript
function myFunction() {
  let carName = "Volvo";
  //Poderia ser um var ou um const também
}
```