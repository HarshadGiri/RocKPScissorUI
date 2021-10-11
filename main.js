user='';
const play = document.getElementById('play');
const img1 = document.querySelector('#img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const Imguser = document.getElementById('Imguser')
const com = document.getElementById('com')
const win = document.getElementById('win')
let img = document.querySelector('.img')
let sc = document.querySelector('.sc');
let cc = document.querySelector('.cc');

let c=0;
let cs =0;

emoji = {
    first : '🥌',
    Second : '📰',
    third :'✂️'
}
img.style.display='none'

play.addEventListener('click', function(){
   
    if(img=='none'){
        img.style.display='none'
    }
    else{
        img.style.display='block'
    }
    img1.addEventListener('click' , function(){
        computer =Math.floor(Math.random() * 3 )+1;
        
 Imguser.innerHTML= emoji.first
 if(computer ==1){
   com.innerHTML= emoji.first
   win.textContent= 'TIE'

 }else if(computer==2){com.innerHTML= emoji.Second
    win.textContent= 'Computer Win'
    c=c+5;
    cc.textContent= `${c}`;
    


 }if(computer==3){
    com.innerHTML= emoji.third
    win.textContent= 'You Win'
cs=cs+5;
sc.textContent= `${cs}`;

 }

    })
    img2.addEventListener('click' , function(){
        computer =Math.floor(Math.random() * 3 )+1;
        

        Imguser.innerHTML= emoji.Second
        if(computer ==1){
            com.innerHTML= emoji.first
            win.textContent= 'You Win'
            cs=cs+5;
sc.textContent= `${cs}`;
         
          }else if(computer==2){com.innerHTML= emoji.Second
             win.textContent= 'TIE'
         
         
          }if(computer==3){
             com.innerHTML= emoji.third
             win.textContent= 'Computer Win'
             c=c+5;
             cc.textContent= `${c}`;
             
          }
    })
    img3.addEventListener('click' , function(){
        computer =Math.floor(Math.random() * 3 )+1;
        

        Imguser.innerHTML= emoji.third
        if(computer ==1){
            com.innerHTML= emoji.first
            win.textContent= 'Computer Win'
            c=c+5;
            cc.textContent= `${c}`;
            
          }else if(computer==2){com.innerHTML= emoji.Second
             win.textContent= 'You Win'
             cs=cs+5;
             sc.textContent= `${cs}`;
         
          }if(computer==3){
             com.innerHTML= emoji.third
             win.textContent= 'TIE'
          }
    })
})

