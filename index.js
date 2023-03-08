var butt = document.getElementsByClassName("butt");
var numm = document.getElementsByClassName("num");
var input = document.getElementById("input");
var result = document.getElementById("result");
var exp = '';
var clear = document.getElementById("clear");
var op = document.getElementsByClassName("opp");
var err = document.querySelector(".error");
var bsp = document.querySelector('.bsp');
var Evv = '';
var evv = 0;
var splt = '';
var lore = ''
var inexp = document.querySelector('.exp')




var calc = () => {
  //display the content of the button when clicked😎
  for(let button in butt){
    butt[button].onclick =  () => {
      
      if(input.innerHTML == 0 || input.innerHTML == ''){
        exp = '';
        exp += butt[button].innerHTML;
        input.innerHTML = exp;  
      }
      else if(input.innerHTML != '' && inexp.innerHTML != ''){
        for(let o in op){
          if(butt[button].innerHTML == op[o].innerHTML){
            exp += op[o].innerHTML;
            input.innerHTML = exp;
            inexp.innerHTML = '';
          }
        } 
        for( let num in numm){
           if(butt[button].innerHTML == numm[num].innerHTML){
            exp = '';
            exp += numm[num].innerHTML;
            input.innerHTML = exp;
            inexp.innerHTML = '';
        }
        }        
        }
      else {
        exp += butt[button].innerHTML;
        input.innerHTML = exp;
      }
      err.innerHTML = '';
    }
  }
    //when 'equal-to' is clicked the following happens😎:
  result.addEventListener('click', () => {
    try{
      evv = eval(exp);
      inexp.innerHTML = evv;
    }
    catch(error){
      err.innerHTML = error;
      err.style.color = 'red';
    }

  })
  //Do this when the 'clear' button's clicked
  clear.addEventListener('click', () => {
    exp = '';
    input.innerHTML = '';
    inexp.innerHTML = '';
  })
    //Do this when the 'back-space' button's clicked
  bsp.addEventListener('click', () => {
    err.innerHTML = ''
    splt = exp.split('');
    splt.pop();
    splt;
    for(let item in splt){
      lore += splt[item]
    }
   exp = lore;
   lore = ''
   input.innerHTML = exp;
  })
  
}
calc();







































/*butCli();
opera();

inexp.innerHTML = exp;
function butCli(){
  for (let but in butt) {
    butt[but].onclick = () => {
      if(inexp.innerHTML != 0 || inexp.innerHTML != ''){
        console.log(exp)
        exp = '';

        stor += butt[but].innerHTML;
        lore = stor;
        input.innerHTML = stor;
      }
      if(inexp.innerHTML == 0 || inexp.innerHTML == ''){
      exp += butt[but].innerHTML;
      input.innerHTML = exp;
      err.innerHTML = "";
    }
    };
  }
}

 bsp.addEventListener('click', () => {
        var splt = exp.split('');
        splt.pop();
        console.log(splt);
        for(let sp in splt){
          console.log(splt[sp])
          exp = '';
          exp += splt[sp];
        }
      })
            
     
result.addEventListener("click", () => {
              try {
                if(inexp.innerHTML != 0 || inexp.innerHTML != ''){
                                Evv = eval(stor);
                }
                if(inexp.innerHTML == 0 || inexp.innerHTML == ''){
                  Evv = eval(exp);
                }
                evv = Evv;
                stor = '';
                inexp.innerHTML = Evv;
              } catch (error) {
                exp = 0;
                input.innerHTML = exp;
                err.innerHTML = error;
              }
            }
            );

      function opera() {
        for (let o in op) {
          op[o].onclick = () => {
            if(inexp.innerHTML == 0 || inexp.innerHTML == ''){
            if (exp == "" || exp !== "") {
              exp += op[o].innerHTML;
              Evv = exp;
              input.innerHTML = Evv;
            }
          }
          if(inexp.innerHTML != 0 || inexp.innerHTML != ''){
            if (stor !== "") {
              stor += op[o].innerHTML;
              Evv = stor;
              input.innerHTML = Evv;
            }
            if(stor == ""){
              lore += op[o].innerHTML;
              Evv = lore;
              input.innerHTML = Evv;
            }
          }
      
            
      
            clear.addEventListener("click", () => {
              exp = 0;
              input.innerHTML = exp;
            });
      
           
          };
        }
      }*/ 