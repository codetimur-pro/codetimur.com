(function(){
  var burger = document.getElementById('g-burger');
  var ov     = document.getElementById('g-ov');
  var nav    = document.getElementById('g-nav');
  if(!burger || !ov) return;

  function setOpen(open){
    burger.classList.toggle('is-open', open);
    ov.classList.toggle('is-open', open);
    ov.setAttribute('aria-hidden', !open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', function(){ setOpen(!burger.classList.contains('is-open')); });

  ov.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') setOpen(false);
  });

  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, {passive:true});
  nav.classList.toggle('scrolled', window.scrollY > 8);
})();
