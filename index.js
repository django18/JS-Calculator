document.addEventListener('DOMContentLoaded',function(){

    var currentExp="";

    [].forEach.call(document.querySelectorAll('button'),function (el) {
        el.addEventListener('click',function () {
            console.log(this.innerHTML);
            var buttonVal=this.innerHTML;
            var $p=document.querySelector('.outputScreen p');
            if(buttonVal==='='){
                var result=eval(currentExp);
                $p.innerHTML=result;
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