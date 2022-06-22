function aoEntrar(input){
	
}

function aoSair(input){
 var expressao=input.value;
 var possivel=(eval(expressao)!=undefined); //possivel para 'eval'?
 
 let letra="=";//'=', ASC 61
 let ASC=letra.charCodeAt(0);//primeiro caracter, i=0
 
 //String.fromCharCode(61);//caracter, 'asc'

 var aceito=(letra.charCodeAt(0)==expressao.charCodeAt(0));  //primeiro caracter é '='? dá erro!
	if(possivel){
    		input.value = eval(expressao)//(faltou tirar o '=' antes)
    	}
	console.log("codigos_de_planilha_V1.js->aoSair()->log: é uma fórmula? "+aceito);
}

function GEBI(Id){
    return Number(document.getElementById(Id).value)
}

