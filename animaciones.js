document.addEventListener("DOMContentLoaded", function(){
const elementos = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entradas) => {
entradas.forEach(entrada => {
if(entrada.isIntersecting){
entrada.target.classList.add("visible");
observer.unobserve(entrada.target);}});},
{threshold:0.15});
elementos.forEach(elemento=>{
observer.observe(elemento);});});
if(history.scrollRestoration)
{history.scrollRestoration="manual";}
window.scrollTo(0,0);