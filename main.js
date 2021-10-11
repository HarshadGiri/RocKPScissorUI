user='';
const play = document.getElementById('play');
const img1 = document.querySelector('#img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const Imguser = document.getElementById('Imguser')
const com = document.getElementById('com')
const win = document.getElementById('win')
let img = document.querySelector('.img')



emoji = {
    first : '🪨',
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


 }if(computer==3){
    com.innerHTML= emoji.third
    win.textContent= 'You Win'
 }

    })
    img2.addEventListener('click' , function(){
        computer =Math.floor(Math.random() * 3 )+1;
        

        Imguser.innerHTML= emoji.Second
        if(computer ==1){
            com.innerHTML= emoji.first
            win.textContent= 'You Win'
         
          }else if(computer==2){com.innerHTML= emoji.Second
             win.textContent= 'TIE'
         
         
          }if(computer==3){
             com.innerHTML= emoji.third
             win.textContent= 'Computer Win'
          }
    })
    img3.addEventListener('click' , function(){
        computer =Math.floor(Math.random() * 3 )+1;
        

        Imguser.innerHTML= emoji.third
        if(computer ==1){
            com.innerHTML= emoji.first
            win.textContent= 'Computer Win'
         
          }else if(computer==2){com.innerHTML= emoji.Second
             win.textContent= 'You Win'
         
         
          }if(computer==3){
             com.innerHTML= emoji.third
             win.textContent= 'TIE'
          }
    })
})

