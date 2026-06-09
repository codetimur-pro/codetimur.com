(function(){
  var burger   = document.getElementById('g-burger');
  var drawer   = document.getElementById('g-drawer');
  var backdrop = document.getElementById('g-backdrop');
  var nav      = document.getElementById('g-nav');
  if(!burger || !drawer) return;

  function setOpen(open){
    burger.classList.toggle('is-open', open);
    drawer.classList.toggle('is-open', open);
    if(backdrop) backdrop.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', function(){ setOpen(!burger.classList.contains('is-open')); });
  if(backdrop) backdrop.addEventListener('click', function(){ setOpen(false); });

  drawer.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') setOpen(false);
  });

  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, {passive:true});
  nav.classList.toggle('scrolled', window.scrollY > 8);

  // highlight active page in drawer
  var path = window.location.pathname;
  drawer.querySelectorAll('.g-drawer-links a').forEach(function(a){
    var h = a.getAttribute('href');
    var base = h.replace(/\.html$/, '').replace(/\/$/, '');
    if(path === h || (base.length > 1 && path.replace(/\.html$/, '').startsWith(base))){
      a.classList.add('is-active');
    }
  });
})();
