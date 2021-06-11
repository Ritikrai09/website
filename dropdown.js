let main = document.querySelectorAll('element');

let tabs = document.querySelectorAll('.tabing');
  
   let  li;

 async function activate(evt,name,status){
       
   let Img2 = document.querySelector('#'+name);

      evt.classList.add('active');   
        
     for (var j = 0; j < tabs.length; j++) {
     
      tabs[j].style.display='none'; 

     }
     
     document.getElementById(name).style.display='flex';
     document.getElementById(name).style.transition='display .300ms ease-in';

      let i=0;

       do{

      if (evt.classList.add('active') != true) {     
        
          main[i].className = main[i].className.replace('active',''); 
         
         for (var k = 0; k < 13; k++) {
     
         li = document.createElement('li');
     
          Img2.appendChild(li);
    
       }
    
   }
      i++;

    }while(i < 5);   

  }

