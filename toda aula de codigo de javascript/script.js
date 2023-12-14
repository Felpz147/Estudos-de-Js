function calcular(){

    var name = document.getElementById('name').value;
    var sal = document.getElementById('sal').value;
    var emp = document.getElementById('emp').value;
    var par = document.getElementById('par').value;
    var resposta = document.getElementById('resposta');
    //juros composto 
    //M = sal(1+0.06)**3
    //Juros simples
    // J = sal 
    //m/par = n
    //if n < 30% sal ent é liberado
    name = (name);
    sal = parseInt(sal);
    emp = parseInt(emp);
    par = parseInt(par);
    j = sal * 0.3;
   numero_de_parcelas = emp/par;
     
    
    if(j > numero_de_parcelas && par <=6 ){
        
        var juros_simples = emp*0.08*par
        var valor_parcela = juros_simples/par
        resposta.textContent = juros_simples.toFixed(2);
    }else if(j > numero_de_parcelas && par >6){
        var juros_composto = emp*Math.pow((1.08),par)
        var valor_parcela2 = juros_composto/par
        resposta.textContent = valor_parcela2.toFixed(2)
        
    }else{
        resposta.textContent = "não possivel de calcular"
    }
    
    
    
    
    
    
    
   
           
        
    
    }
    




























