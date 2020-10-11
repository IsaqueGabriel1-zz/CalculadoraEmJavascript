class calculadora{
    constructor(){

    }
    somar(valor1, valor2, res){
        valor1 = Number(document.getElementById('valor1').value);
        valor2 = Number(document.getElementById('valor2').value);
        res = valor1 + valor2;
        document.getElementById('res').innerHTML = res;
    }
    subtrair(valor1, valor2, res){
        valor1 = Number(document.getElementById('valor1').value);
        valor2 = Number(document.getElementById('valor2').value);
        res = valor1 - valor2;
        document.getElementById('res').innerHTML = res;
    }
    dividir(valor1, valor2, res){
        valor1 = Number(document.getElementById('valor1').value);
        valor2 = Number(document.getElementById('valor2').value);
        if(valor1 <= 0 || valor2 <= 0){
            document.getElementById('res').innerHTML = "Zero não é divisivel";
        }else {
            res = valor1 / valor2;
            document.getElementById('res').innerHTML = res;
        }   
    }
    multiplicar(valor1, valor2, res){
        valor1 = Number(document.getElementById('valor1').value);
        valor2 = Number(document.getElementById('valor2').value);
        res = valor1 * valor2;
        document.getElementById('res').innerHTML = res;
    }
}
let calcular = new calculadora();