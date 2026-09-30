/* ─────────────────────────────────────────────────────────────────────────────
   Deb Mortl — artist portfolio

   The `works` array below drives the whole gallery. To swap in a real photo,
   drop the file into images/ using the exact path in `img` — no code change
   needed. See images/README.md for filenames and sizing guidance.
   ───────────────────────────────────────────────────────────────────────────── */

const works = [
  /* ── PAINTINGS ──
     Far North carries the only real photograph so far. The twelve pieces after
     it come from Deb's catalogue sheet: titles, materials, dimensions and
     prices are hers exactly as she keeps them.

     `info` is the formatted line shown on the card. `desc` is the raw catalogue
     line, shown in the lightbox. `sold:true` fills the red dot.

     No photographs exist for painting-02 onward yet, so each shows the
     photo-pending panel. `fallback:''` is deliberate and must stay empty until a
     real photograph exists - see images/README.md. */
  {id:1,cat:'painting',title:'Far North',info:'Oil on canvas \u00b7 36 \u00d7 36 in \u00b7 $1,495',
   desc:'Deb Mortl Far North oil on canvas 36x36 $1,495',
   img:'images/painting-01.jpg',fallback:'',sold:false},
  {id:2,cat:'painting',title:'Meadow\'s Edge',info:'Oil on panel \u00b7 24 \u00d7 30 in \u00b7 $895',
   desc:'Deb Mortl Meadow\'s Edge oil on panel 24x30 $895 deliver in June',
   img:'images/painting-02.jpg',fallback:'',sold:false},
  {id:3,cat:'painting',title:'Late Launch',info:'Oil on canvas \u00b7 9.5 \u00d7 9.5 in, framed \u00b7 $295',
   desc:'Deb Mortl Late Launch oil on canvas 9.5x9.5 Framed $295 ret.',
   img:'images/painting-03.jpg',fallback:'',sold:false},
  {id:4,cat:'painting',title:'Beach Days',info:'Oil on canvas \u00b7 9.5 \u00d7 9.5 in, framed \u00b7 $295',
   desc:'Deb Mortl Beach Days oil on canvas 9.5x9.5 Framed $295 ret.',
   img:'images/painting-04.jpg',fallback:'',sold:false},
  {id:5,cat:'painting',title:'Woodland Welcome',info:'Oil on canvas \u00b7 24 \u00d7 36 in \u00b7 $895',
   desc:'Deb Mortl Woodland Welcome oil on canvas 24x36 $895 ret',
   img:'images/painting-05.jpg',fallback:'',sold:false},
  {id:6,cat:'painting',title:'Gold Splendor',info:'Oil on canvas \u00b7 9.5 \u00d7 9.5 in, framed \u00b7 $295',
   desc:'Deb Mortl Gold Splendor oil on canvas 9.5x9.5 Framed $295 ret',
   img:'images/painting-06.jpg',fallback:'',sold:false},
  {id:7,cat:'painting',title:'Lake Life',info:'Oil on canvas \u00b7 9.5 \u00d7 9.5 in, framed \u00b7 $295',
   desc:'Deb Mortl Lake Life oil on canvas 9.5x9.5 Framed $295 ret',
   img:'images/painting-07.jpg',fallback:'',sold:false},
  {id:8,cat:'painting',title:'Sailor\'s Delight',info:'Oil on canvas \u00b7 25 \u00d7 32 in, framed \u00b7 $995',
   desc:'Deb Mortl Sailor\'s Delight oil on canvas 25x32 Framed $995 kept for 2024',
   img:'images/painting-08.jpg',fallback:'',sold:false},
  {id:9,cat:'painting',title:'Woodland Allegory',info:'Oil on canvas \u00b7 13 \u00d7 13 in, framed \u00b7 $395',
   desc:'Deb Mortl Woodland Allegory oil on canvas 13x13 Framed $395',
   img:'images/painting-09.jpg',fallback:'',sold:true},
  {id:10,cat:'painting',title:'Dreaming of Summer',info:'Oil on canvas \u00b7 24 \u00d7 36 in \u00b7 $895',
   desc:'Deb Mortl Dreaming of Summer oil on canvas 24x36 $895 ret',
   img:'images/painting-10.jpg',fallback:'',sold:false},
  {id:11,cat:'painting',title:'Color of Light',info:'Oil on canvas \u00b7 13 \u00d7 13 in, framed \u00b7 $395',
   desc:'Deb Mortl Color of Light oil on canvas 13x13 framed $395 ret',
   img:'images/painting-11.jpg',fallback:'',sold:false},
  {id:12,cat:'painting',title:'Distant Song',info:'Oil on canvas \u00b7 13 \u00d7 13 in, framed \u00b7 $395',
   desc:'Deb Mortl Distant Song oil on canvas 13x13 Framed $395',
   img:'images/painting-12.jpg',fallback:'',sold:true},
  {id:13,cat:'painting',title:'Muse',info:'Oil on canvas \u00b7 21.5 \u00d7 21.5 in, framed \u00b7 $695',
   desc:'Deb Mortl Muse oil on canvas 21.5x21.5 framed $695 ret',
   img:'images/painting-13.jpg',fallback:'',sold:false},

  /* ── JEWELRY (Third Coast Jewelry) ──
     No jewelry catalogue has been supplied yet, so these six remain unnamed
     placeholders. No photographs exist, so each shows the pending panel. */
  {id:101,cat:'jewelry',title:'Untitled Pendant',info:'Materials to be confirmed',
   desc:'Placeholder \u2014 Deb\u2019s description to come.',
   img:'images/jewelry-pendant.jpg',fallback:'',sold:false},
  {id:102,cat:'jewelry',title:'Untitled Earrings',info:'Materials to be confirmed',
   desc:'Placeholder \u2014 Deb\u2019s description to come.',
   img:'images/jewelry-earrings.jpg',fallback:'',sold:false},
  {id:103,cat:'jewelry',title:'Untitled Cuff',info:'Materials to be confirmed',
   desc:'Placeholder \u2014 Deb\u2019s description to come.',
   img:'images/jewelry-cuff.jpg',fallback:'',sold:false},
  {id:104,cat:'jewelry',title:'Untitled Brooch',info:'Materials to be confirmed',
   desc:'Placeholder \u2014 Deb\u2019s description to come.',
   img:'images/jewelry-brooch.jpg',fallback:'',sold:false},
  {id:105,cat:'jewelry',title:'Untitled Necklace',info:'Materials to be confirmed',
   desc:'Placeholder \u2014 Deb\u2019s description to come.',
   img:'images/jewelry-necklace.jpg',fallback:'',sold:false},
  {id:106,cat:'jewelry',title:'Untitled Ring',info:'Materials to be confirmed',
   desc:'Placeholder \u2014 Deb\u2019s description to come.',
   img:'images/jewelry-ring.jpg',fallback:'',sold:false},
];

let activeFilter = 'all';
let lbIndex = 0;
let filteredWorks = [...works];

/* ── IMAGES ──
   Shows the local photo from images/ if it exists, otherwise the stock
   fallback while the real photo is pending, otherwise a labelled placeholder.
   Keeps the site looking finished before Deb's own photos are added. */
function wireImage(img, w, container){
  container.classList.remove('img-missing');
  container.dataset.label = w.title + ' — photo coming soon';
  img.style.display = '';
  img.alt = w.title;
  let stage = 0;
  img.onerror = () => {
    if(stage === 0 && w.fallback){ stage = 1; img.src = w.fallback; return; }
    img.onerror = null;
    img.style.display = 'none';
    container.classList.add('img-missing');
  };
  img.src = w.img;
}

/* ── GALLERY ── */
function buildGallery(filter){
  activeFilter = filter;
  filteredWorks = filter === 'all' ? works : works.filter(w => w.cat === filter);
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  if(!filteredWorks.length){
    const empty = document.createElement('p');
    empty.className = 'gallery-empty';
    empty.textContent = 'No pieces in this category yet.';
    grid.appendChild(empty);
    return;
  }

  filteredWorks.forEach((w,i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.cat = w.cat;
    item.innerHTML = `
      <div class="gallery-item-inner">
        <img alt="" loading="lazy" />
        <div class="gallery-item-overlay">
          <div class="gallery-item-overlay-icon">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </div>
      </div>
      <div class="gallery-meta">
        <div class="gallery-meta-top">
          <div>
            <div class="gallery-title"></div>
            <div class="gallery-info"></div>
          </div>
          <button class="red-dot-toggle ${w.sold ? 'sold' : ''}" title="${w.sold ? 'Mark available' : 'Mark sold'}" aria-label="Toggle sold status"></button>
        </div>
      </div>`;

    item.querySelector('.gallery-title').textContent = w.title;
    item.querySelector('.gallery-info').textContent = w.info;

    const inner = item.querySelector('.gallery-item-inner');
    inner.addEventListener('click', () => openLightbox(i));
    item.querySelector('.red-dot-toggle').addEventListener('click', e => {
      e.stopPropagation();
      toggleSold(w.id, e.currentTarget);
    });

    wireImage(item.querySelector('img'), w, inner);
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

/* Used by the header nav so "Jewelry" jumps to the gallery pre-filtered. */
function showCategory(cat){
  closeNav();
  const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
  if(btn) btn.click();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildGallery(btn.dataset.filter);
  });
});

/* ── LIGHTBOX ── */
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
  if(!w) return;
  const inner = document.querySelector('.lightbox-inner');
  // Build a fresh <img> each time: a reused element won't re-fire onerror for a
  // src that already failed, so the placeholder wouldn't come back.
  const img = document.createElement('img');
  img.className = 'lightbox-img';
  img.id = 'lbImg';
  document.getElementById('lbImg').replaceWith(img);
  wireImage(img, w, inner);
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

/* ── NAV ── */
function toggleNav(){
  document.getElementById('navLinks').classList.toggle('open');
}
function closeNav(){
  document.getElementById('navLinks').classList.remove('open');
}

/* ── CONTACT FORM ──
   Posts to Formspree. Until a real form ID is pasted into the `action`
   attribute in index.html, the form says so instead of pretending to send. */
const FORM_NOT_CONNECTED = 'REPLACE_WITH_FORM_ID';

function setFormStatus(msg, kind){
  const el = document.getElementById('formStatus');
  if(!el) return;
  el.textContent = msg;
  el.className = 'form-status' + (kind ? ' ' + kind : '');
}

async function handleForm(e){
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.form-submit');

  if(form.action.includes(FORM_NOT_CONNECTED)){
    setFormStatus('This form isn\u2019t connected yet \u2014 please email hello@debmortl.com in the meantime.', 'error');
    return;
  }

  const idleLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending\u2026';
  setFormStatus('');

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {Accept: 'application/json'}
    });

    if(res.ok){
      form.reset();
      btn.textContent = 'Message Sent \u2713';
      btn.classList.add('sent');
      setFormStatus('Thank you \u2014 your message has been sent. Deb will reply personally.', 'success');
      setTimeout(() => {
        btn.textContent = idleLabel;
        btn.classList.remove('sent');
      }, 4000);
    } else {
      const data = await res.json().catch(() => null);
      const detail = data && Array.isArray(data.errors) && data.errors.length
        ? data.errors.map(x => x.message).join(', ')
        : 'Please try again.';
      btn.textContent = idleLabel;
      setFormStatus('Sorry, that didn\u2019t send. ' + detail, 'error');
    }
  } catch(err){
    btn.textContent = idleLabel;
    setFormStatus('Sorry, that didn\u2019t send \u2014 check your connection, or email hello@debmortl.com.', 'error');
  } finally {
    btn.disabled = false;
  }
}

/* ── REVEAL ON SCROLL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting) en.target.classList.add('visible'); });
}, {threshold: 0.12});
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

buildGallery('all');

/* -- FOOTER YEAR ------------------------------------------------
   Keeps the copyright current without anyone editing it each January. */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
