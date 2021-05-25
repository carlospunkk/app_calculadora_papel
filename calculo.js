
function Calcular(){
    
    // CALCULO METRO QUADRADO
    var result = window.document.getElementById('result')//AQUI É A TAG RESULT
    var alt = window.document.getElementById('altura')//VAR ALT RECEBE A TAG ALTURA
    var larg = window.document.getElementById('largura')//VAR LARG RECEBE A TAG LARGURA
    var alturacx = Number(alt.value)//PEGUE O VALOR E COLOQUE NA CAIXA ALTURACX
    var larguracx = Number(larg.value)
    var tot = (alturacx*larguracx)/4
    result=(Math.ceil(tot))

    //CALCULO QUANTIDADE DE PAPEL 
    var Qpapel= window.document.getElementById('quantidaderolo')//AQUI A TAG ID quantidaderolo passa a ser var Qpapel
    var qtd_papel = (Math.ceil(tot))//A VAR RECEBE O CALCULO DA MEDIDA TOTAL DIVIDA POR 4
    Qpapel.innerHTML=('a quantidade de rolos necessaria para instalar é : '+(Math.ceil(qtd_papel)))

    // CALCULO PREÇO 
    var cal= window.document.getElementById('calcu')
    var preco_rolo = window.document.getElementById('preco')
    var precocx = Number(preco_rolo.value)
    var calc = precocx*(Math.ceil(qtd_papel))
    cal=(`o valor só dos rolos são R$ ${calc}`)
    
    //CALCULO VALOR TOTAL COM A INSTALAÇÃO DA COMPRA E COM A CONDIÇÃO DA PROMOÇÃO 
    var norm = window.document.getElementById("pnormal")
    var instalacao = 109.00
    var norma = (instalacao + precocx)*(Math.ceil(qtd_papel))
    norm.innerHTML= (` o valor total instalado é  R$: ${norma}`)

    if (qtd_papel >=2){
        var d = window.document.getElementById("descontofull")
        var desc = window.document.getElementById("desc")
        var inst_desc = 99.00
        desc=(inst_desc+precocx)*(Math.ceil(qtd_papel))
        d.innerHTML=(`Parabéns você comprou 2 rolos ou mais e ganhou um desconto na instalação R$ ${desc} `)
        }else{
            var norm = window.document.getElementById("pnormal")
            var instalacao = 109.00
            var norma = (instalacao + precocx)*(Math.ceil(qtd_papel))
            norm.innerHTML= (` o valor total instalado é  R$: ${norma}`)
        }

    
    }


    function limpar(){
    document.getElementById('altura').value ='';
    document.getElementById('largura').value ='';
    document.getElementById('preco').value ='';
  }
    
