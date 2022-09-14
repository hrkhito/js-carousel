'use strict';

{

  const next=document.getElementById('next');
  const prev=document.getElementById('prev');
  const ul=document.querySelector('ul');
  const slides=ul.children;
  const dots=[];
  let currentIndex=0;

  const updateButtons = ()=>{
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if(currentIndex===0){
      prev.classList.add('hidden');
    } 
    if(currentIndex===slides.length-1){
      next.classList.add('hidden');
    }
  };

  const moveSlides = ()=>{
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentIndex}px)`;
  };

  const updateDots = ()=>{
    dots.forEach((dot)=>{
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  };

  const setupDots = ()=>{
    for(let i=0; i<slides.length; i++){
      const button=document.createElement('button');
      dots.push(button);
      document.querySelector('nav').appendChild(button);
      button.addEventListener('click',()=>{
        currentIndex=i;
        updateButtons();
        updateDots();
        moveSlides();
      });
    }
    dots[0].classList.add('current');
  };

  updateButtons();
  setupDots();

  next.addEventListener('click',()=>{
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click',()=>{
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize',()=>{
    moveSlides();
  });
}