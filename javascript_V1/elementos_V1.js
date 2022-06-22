class Tplanilha{
	constructor(linhas,colunas,planId){
    	this.linhaPos = linhas
        this.colunaPos = colunas
        this.focus = "aoEntrar()"
        this.blur = "aoSair()"
        this.montar(planId)
	}
    
    montar(id){
    	let tabela = document.getElementById(id)
    	let linha = this.linhaPos
        let coluna = this.colunaPos
        let aux ="<th class='rotulo'></th>"
        //console.log(tabela.innerHTML)
    	let indiceC = 0
        for(let C=0; C < coluna; C++ ){//rotula as colunas
           	indiceC =C+1
			var caractere=String.fromCharCode(64+indiceC);
			aux += "<th class='rotulo'>"+caractere+"</th>"
        }
        let indiceL = 0
    	indiceC = 0
        for(let L=0; L < linha; L++ ){//rotula as linhas enquanto gera as linhas
          	indiceL =L+1
        	aux += "<tr>"
            	aux += "<td class='rotulo' width='20px'>"+indiceL+"</td>"//rotulo das linhas
        	for(let C=0; C < coluna; C++ ){
        		indiceC =C+1
        		var caractere=String.fromCharCode(64+indiceC);
                	var celId=caractere+indiceL
                	aux += "<td>"+"<input "+"id='"+celId+"' onFocus='aoEntrar(this)' onBlur='aoSair(this)' style='width:100px' type='text'>"+"</td>"
            	}
            aux += "</tr>"
        }
    	tabela.innerHTML = aux
    }
    
   
}
