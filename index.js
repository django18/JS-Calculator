document.addEventListener('DOMContentLoaded',function(){

    var currentExp="";

    [].forEach.call(document.querySelectorAll('button'),function (el) {
        el.addEventListener('click',function () {
            console.log(this.target);
            var buttonVal=this.innerHTML;
            var $p=document.querySelector('.outputScreen p');
            var $output=document.querySelector('.outputScreen');
            var $exp=document.querySelector('.expression p');
            var $expCont=document.querySelector('.expression');
            
            if(buttonVal==='='){
                var result=eval(currentExp);
                $p.innerHTML=result;

                //$exp.innerHTML=null;

                //var $cloneText=$p.cloneNode(true);  
                //console.log($cloneText);

                //$expCont.removeChild($exp);
                //$expCont.appendChild($cloneText);

                // console.log($p.style)
                // var pos = $p.pos;
                // console.log(pos);
                // var id = setInterval(frame, 3);
                
                //  function frame() {
                //    if (pos == $exp.style.top) {
                //      clearInterval(id);
                //    } else {
                //      pos++; 
                //      $cloneText.style.top = pos + 'px'; 
                //      $cloneText.style.left = pos + 'px'; 
                //    }
                //  }

                $exp.innerHTML=currentExp+' =';
                currentExp=result;
            }
            else if(buttonVal==='AC'){
                currentExp="";
                $p.innerHTML=currentExp;
            }
            else{
                currentExp+=buttonVal;
                $p.innerHTML=currentExp;
            }
            
        });
    })


})