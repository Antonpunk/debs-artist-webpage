const works = [
  {id:1,cat:'painting',title:'Tide Memory I',info:'Oil on canvas · 36×48"',desc:'Layers of translucent blue and ochre built up over weeks, capturing the moment the tide recedes and leaves its mark on sand.',img:'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',sold:false},
  {id:3,cat:'painting',title:'Horizon, Soft Light',info:'Acrylic on linen · 24×30"',desc:'A study in the way coastal light flattens and diffuses at dusk — warm grays dissolving into pale gold.',img:'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80',sold:false},
  {id:4,cat:'painting',title:'Deep Water Study',info:'Oil on canvas · 48×60"',desc:'The darkest piece in the current series — deep prussian blues and raw umber, textured with sand and sea glass.',img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',sold:true},
  {id:6,cat:'painting',title:'Shore at Noon',info:'Mixed media · 20×20"',desc:'Built with palette knife, sand, and encaustic wax. The surface catches light the way wet stone does.',img:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',sold:false},
  {id:7,cat:'painting',title:'Salt Flat',info:'Acrylic on canvas · 30×40"',desc:'A wide, quiet painting — the horizon sits very high, almost all foreground, all texture and heat.',img:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80',sold:false},
  {id:9,cat:'painting',title:'Estuary',info:'Oil on linen · 40×50"',desc:'Where the river meets the sea — murky greens, silted browns, and the constant movement of water finding its level.',img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80',sold:false},
];

let activeFilter = 'all';
let lbIndex = 0;
let filteredWorks = [...works];

function buildGallery(filter){
  activeFilter = filter;
  filteredWorks = filter === 'all' ? works : works.filter(w => w.cat === filter);
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  filteredWorks.forEach((w,i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.cat = w.cat;
    item.innerHTML = `
      <div class="gallery-item-inner" onclick="openLightbox(${i})">
        <img src="${w.img}" alt="${w.title}" loading="lazy" />
        <div class="gallery-item-overlay">
          <div class="gallery-item-overlay-icon">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </div>
      </div>
      <div class="gallery-meta">
        <div class="gallery-meta-top">
          <div>
            <div class="gallery-title">${w.title}</div>
            <div class="gallery-info">${w.info}</div>
          </div>
          <button class="red-dot-toggle ${w.sold ? 'sold' : ''}" title="${w.sold ? 'Mark available' : 'Mark sold'}" onclick="toggleSold(${w.id}, this)" aria-label="Toggle sold status"></button>
        </div>
      </div>`;
    grid.appendChild(item);
  });
}

function toggleSold(id, btn){
  const w = works.find(x => x.id === id);
  if(!w) return;
  w.sold = !w.sold;
  btn.classList.toggle('sold', w.sold);
  btn.title = w.sold ? 'Mark available' : 'Mark sold';
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildGallery(btn.dataset.filter);
  });
});

function openLightbox(i){
  lbIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightboxBtn(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function closeLightbox(e){
  if(e.target === document.getElementById('lightbox')) closeLightboxBtn();
}
function updateLightbox(){
  const w = filteredWorks[lbIndex];
  document.getElementById('lbImg').src = w.img;
  document.getElementById('lbImg').alt = w.title;
  document.getElementById('lbTitle').textContent = w.title;
  document.getElementById('lbDesc').textContent = w.desc + '\n\n' + w.info;
}
function lbNav(dir){
  lbIndex = (lbIndex + dir + filteredWorks.length) % filteredWorks.length;
  updateLightbox();
}
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if(lb.classList.contains('open')){
    if(e.key === 'Escape') closeLightboxBtn();
    if(e.key === 'ArrowRight') lbNav(1);
    if(e.key === 'ArrowLeft') lbNav(-1);
  }
});

function toggleNav(){
  document.getElementById('navLinks').classList.toggle('open');
}
function closeNav(){
  document.getElementById('navLinks').classList.remove('open');
}

function handleForm(e){
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#5a8a5a';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting) en.target.classList.add('visible'); });
}, {threshold: 0.12});
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

buildGallery('all');
