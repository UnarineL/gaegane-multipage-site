<<<<<<< HEAD
const menuToggle=document.querySelector(".menu-toggle");const navLinks=document.querySelector(".nav-links");if(menuToggle&&navLinks){menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("active");menuToggle.setAttribute("aria-expanded",open?"true":"false")})}const slides=document.querySelectorAll(".hero-slide");const dots=document.querySelectorAll(".hero-dots button");let current=0;function showSlide(i){slides.forEach((s,n)=>s.classList.toggle("active",n===i));dots.forEach((d,n)=>d.classList.toggle("active",n===i));current=i}if(slides.length){dots.forEach((d,i)=>d.addEventListener("click",()=>showSlide(i)));setInterval(()=>showSlide((current+1)%slides.length),5200)}const reveals=document.querySelectorAll(".reveal");const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("revealed")}})},{threshold:.12});reveals.forEach(el=>observer.observe(el));
=======
const menuBtn=document.querySelector(".menu-toggle"),navLinks=document.querySelector(".nav-links");
if(menuBtn&&navLinks){menuBtn.addEventListener("click",()=>{const o=navLinks.classList.toggle("active");menuBtn.classList.toggle("active",o);menuBtn.setAttribute("aria-expanded",o?"true":"false");document.body.classList.toggle("nav-open",o)});navLinks.querySelectorAll("a").forEach(l=>l.addEventListener("click",()=>{navLinks.classList.remove("active");menuBtn.classList.remove("active");document.body.classList.remove("nav-open")}))}
const slides=[...document.querySelectorAll(".hero-slide")],dots=[...document.querySelectorAll(".hero-dot")];let index=0,timer;
function showSlide(i){if(!slides.length)return;slides.forEach((s,n)=>s.classList.toggle("active",n===i));dots.forEach((d,n)=>d.classList.toggle("active",n===i));index=i}
function nextSlide(){showSlide((index+1)%slides.length)}function startSlider(){if(slides.length>1)timer=setInterval(nextSlide,5200)}function resetSlider(){clearInterval(timer);startSlider()}
dots.forEach((d,i)=>d.addEventListener("click",()=>{showSlide(i);resetSlider()}));startSlider();
const observer=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.14});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
>>>>>>> f34cf66c8f82d0b5936bfe1d0e8e9f3deeac0847
