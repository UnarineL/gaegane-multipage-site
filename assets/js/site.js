function toggleMenu(button){
  const menu=document.getElementById('navMenu');
  if(!menu) return;
  const open=menu.classList.toggle('active');
  if(button) button.setAttribute('aria-expanded',open?'true':'false');
}

const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
let current=0;
function showSlide(i){
  if(!slides.length) return;
  slides.forEach((s,index)=>s.classList.toggle('active',index===i));
  dots.forEach((d,index)=>d.classList.toggle('active',index===i));
  current=i;
}
function nextSlide(){showSlide((current+1)%slides.length)}
if(slides.length){
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));
  setInterval(nextSlide,5200);
}

const revealItems=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('revealed')});
},{threshold:.12});
revealItems.forEach(item=>observer.observe(item));
