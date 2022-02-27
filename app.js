let juro = 1.2;
let ValorTotal =0;
for(i=1;i<97;i++){
    valorParcela = ((1834.58 / 100) * juro) + 1834.58;
    //toFixed arredonda para duas casas decimais
    valorParcela = parseFloat(valorParcela.toFixed(2));
    console.log("Parcela " + i + " = " + valorParcela);
    juro += 1.2;
    ValorTotal += valorParcela;
    ValorTotal = parseFloat(ValorTotal.toFixed(2));  
}

console.log("O valor total é " +  ValorTotal);


