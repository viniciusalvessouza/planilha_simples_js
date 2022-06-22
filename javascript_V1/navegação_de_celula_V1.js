/*
Isso esta funcionando NAO MEXER
oq faz? muda a seleção da celula ao apertar as setas do teclado

A CORRIGIR:
    quando ele vai da coluna 1 para esquerda ele volta uma linha para cima
    quando ele vai da coluna final para direita ele volta uma linha para baixo
*/
    
const inputs = document.getElementsByTagName('input')

let tamanho = inputs.length

for(let i = 0; i< tamanho;i++)
inputs[i].addEventListener("keyup",(e)=>{
    console.log(e);
    if(e.key =="ArrowLeft" && i > 0){
        inputs[i-1].focus()
    } 

    else if(e.key =="ArrowRight" && i<tamanho-1 ){
        inputs[i+1].focus()
    }
    
    else if(e.key =="ArrowUp"){
        let indiceColuna = inputs[i].id[0]
        let indiceLinhaSuperior ='';
        for(let j=1;j<3;j++)
            if(inputs[i].id[j] !=null)
                indiceLinhaSuperior += inputs[i].id[j]
            indiceLinhaSuperior =Number (indiceLinhaSuperior)- 1

        let id = String(indiceColuna)+String(indiceLinhaSuperior)
        
        if(indiceLinhaSuperior >0)
            document.getElementById(id).focus()
    }

    else if((e.key =="ArrowDown")||(e.key =="Enter")){
        let indiceColuna = inputs[i].id[0]
        let indiceLinhaSuperior ='';
        for(let j=1;j<3;j++)
            if(inputs[i].id[j] !=null)
                indiceLinhaSuperior += inputs[i].id[j]
            indiceLinhaSuperior =Number (indiceLinhaSuperior)+ 1

        let id = String(indiceColuna)+String(indiceLinhaSuperior)
        
        if(document.getElementById(id) != null)
            document.getElementById(id).focus()
    }
    console.log(e.key)
})



console.log(tamanho)



