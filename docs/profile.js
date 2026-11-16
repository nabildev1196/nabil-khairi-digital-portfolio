document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('nabilhasan100@gmail.com');status.textContent='Copied!';}catch{status.textContent='Please select and copy the email above.';}});
const sections=document.querySelectorAll('main section[id]');const links=document.querySelectorAll('nav a,.rail a');if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{const active=link.getAttribute('href')==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -45% 0px',threshold:0});sections.forEach(section=>observer.observe(section));}
const motionButton=document.getElementById('motion-toggle');
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
function setMotion(paused){document.body.classList.toggle('motion-paused',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=motionPreference.matches?'Reduced motion enabled':paused?'Resume animation':'Pause animation';motionButton.disabled=motionPreference.matches;}
setMotion(motionPreference.matches);
motionButton.addEventListener('click',()=>setMotion(!document.body.classList.contains('motion-paused')));
motionPreference.addEventListener('change',()=>setMotion(motionPreference.matches));
