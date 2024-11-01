//======================================navbar================================================//
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
navbar.onclick = () =>{
    navbar.classList.toggle('open');
}
//======================================navbar================================================//



//============================================scroll==============================================//
const search = document.querySelector(".section-hero")
const footerElem = document.querySelector(".footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("tops");

scrollElement.innerHTML = `<i class='bx bxs-up-arrow buttons'></i>`;

footerElem.before(scrollElement);

const buttons = () => {
  search.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", buttons);
//============================================scroll==============================================//


var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click', () =>{

  play.classList.toggle('active');

  if(play.paused){
    play.play();
  }else{
    play.pause();
    play.currentTime = 0;
  }

}));
