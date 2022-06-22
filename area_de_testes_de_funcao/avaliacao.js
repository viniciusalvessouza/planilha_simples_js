function aoSair(input){
 //let teste = eval(input.value)

    input.value = eval(input.value)
    
    console.log('funcionou funcao aoSair()')
    //console.log(input.value)
}

function soma(p1,p2,){
    let resultado =p1+p2;
    return Number(resultado)
}

function subtracao(p1,p2,){
    let resultado =p1-p2;
    return Number(resultado)
}

function potencia(base,expoente){
    return Math.pow(base,expoente)
}

function laco(inicial,final,passo){
    var validade;
    validade=(((final =>inicial) && (passo>0)) || (final <= inicial) && (passo<0) ) && (passo!=0);
    return validade;
}

function areaDoTriangulo(a,b,c){
    //heron
    const p=(a+b+c)/2
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}
let totalDasAreas=[]
    function areaDasParedes(largura,comprimento,peDireito){
    area=2*(largura+comprimento)*peDireito;
    totalDasAreas.push(area)
    return area;
}
function retornaArea(indice=null){
    console.log(totalDasAreas);
    if (indice==null) {return totalDasAreas} 
        else{return totalDasAreas[indice]}
}

function GEBI(Id){
    return Number(document.getElementById(Id).value)
}

