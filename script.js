// Você pode criar uma função, que carregue junto com a página,
// usando window.onload, e criar suas variaveis com let, usando os metodos de evento. segue o código com exemplos:


// window.onload dispara o carregamento desse código logo que o carregamento dá página termina
window.onload = () => {
let botaoCalcular = document.getElementById("btnCalcular");
  botaoCalcular.addEventListener('click', CalcularIMC);
};

function CalcularIMC(){   
    let peso = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    
    
    if(peso === "" || isNaN(peso)){
      resultado.innerHTML = "Forneça um peso válido!";  
      //resultado.textContent = `Seu IMC é ${imc}`;
    }else if(altura === "" || isNaN(altura) || altura === 0){
      resultado.innerHTML = "Forneça uma altura válida!"; 
    }else{

      let imc = (peso / ((Math.pow(altura,2) / 10000))).toFixed(2);
      resultado.innerHTML = imc; 
      let mensagem = "";

      if(imc < 18.5){
        resultado.innerHTML = `<h3 id ="texto-resultado">Abaixo do peso : </h3>
                              <h2 id="valor-resultado" style="color: red;">${imc}</h2>`;
      }else if(imc < 25){
        resultado.innerHTML = `<h3 id ="texto-resultado">Peso ideal! : </h3>
                              <h2 id="valor-resultado" style="color: #12fc30;">${imc}</h2>`;
      }else if(imc < 30){
        resultado.innerHTML = `<h3 id ="texto-resultado">Acima do peso! : </h3>
                              <h2 id="valor-resultado" style="color: red;">${imc}</h2>`;
      }else if( imc < 35){
        resultado.innerHTML = `<h3 id ="texto-resultado">Cuidado, obesidade grau 1! : </h3>
                              <h2 id="valor-resultado" style="color: red;">${imc}</h2>`;
      }else if( imc < 40){
        resultado.innerHTML = `<h3 id ="texto-resultado">Cuidado, obesidade grau 2! : </h3>
                              <h2 id="valor-resultado" style="color: red;">${imc}</h2>`;
      }else {
        resultado.innerHTML = `<h3 id ="texto-resultado">Cuidado, obesidade grau 3! : </h3>
                              <h2 id="valor-resultado" style="color: red;">${imc}</h2>`;
      }
    }
}

