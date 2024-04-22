

AOS.init();


const header = document.querySelector("header");




window.addEventListener("scroll" ,function(){
    header.classList.toggle('sticky' , window.scrollY>0);
})


function showSidebar(){
    const sidebar =document.querySelector('.sidebar') ;
    sidebar.style.display='flex';
    const menu = document.querySelector('.bx-menu');
    menu.style.display='none';
  

}
function hideSidebar(){
    const sidebar =document.querySelector('.sidebar') ;
    sidebar.style.display='none';
    const menu = document.querySelector('.bx-menu');
    menu.style.display="flex";
}

function counterIncrease(){
     
    let counterDiv1 = document.querySelector("#first");
    let counterDiv2 = document.querySelector(" #sec");
    let counterDiv3 = document.querySelector(" #third");
    let counterDiv4 = document.querySelector(" #four");
    
    let counter1 = 1400;
    let id1 = setInterval(()=>{
      if (counter1 >= 1500) clearInterval(id1);
      counterDiv1.innerText = `${counter1}+`
      counter1++;
    },30)
    let counter2 = 350;
    let id2 = setInterval(()=>{
      if (counter2 >= 450) clearInterval(id2);
      counterDiv2.innerText = `${counter2}+`
      counter2++;
    },30)
    let counter3 = 1000;
    let id3 = setInterval(()=>{
      if (counter3 >= 1100) clearInterval(id3);
      counterDiv3.innerText = `${counter3}+`
      counter3++;
    },30)
    let counter4 = 4400;
    let id4 = setInterval(()=>{
      if (counter4 >= 4500) clearInterval(id4);
      counterDiv4.innerText = `${counter4}+`
      counter4++;
    },40)
}
window.addEventListener('scroll', function() {
    counterIncrease();
    window.removeEventListener('scroll', arguments.callee);

});

