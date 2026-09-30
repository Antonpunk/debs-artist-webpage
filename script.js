/* ─────────────────────────────────────────────────────────────────────────────
   Deb Mortl — artist portfolio

   The `works` array below drives the whole gallery. To swap in a real photo,
   drop the file into images/ using the exact path in `img` — no code change
   needed. See images/README.md for filenames and sizing guidance.
   ───────────────────────────────────────────────────────────────────────────── */

const works = [
  /* ── PAINTINGS ──
     Titles, materials and descriptions are PLACEHOLDERS. The previous draft had
     invented ocean-themed titles and descriptions that did not match Deb's
     practice; replace these with her real details.

     `fallback:''` is deliberate. With no photo in images/ and no stock fallback,
     wireImage() shows the "photo coming soon" panel instead of displaying a
     stock photograph of someone else's work as if it were her painting. */
  {id:1,cat:'painting',title:'Untitled I',info:'Oil on canvas · dimensions to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/painting-01.jpg',fallback:'',sold:false},
  {id:2,cat:'painting',title:'Untitled II',info:'Oil on canvas · dimensions to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/painting-02.jpg',fallback:'',sold:false},
  {id:3,cat:'painting',title:'Untitled III',info:'Oil on linen · dimensions to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/painting-03.jpg',fallback:'',sold:false},
  {id:4,cat:'painting',title:'Untitled IV',info:'Mixed media · dimensions to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/painting-04.jpg',fallback:'',sold:false},
  {id:5,cat:'painting',title:'Untitled V',info:'Acrylic on canvas · dimensions to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/painting-05.jpg',fallback:'',sold:false},
  {id:6,cat:'painting',title:'Untitled VI',info:'Oil on panel · dimensions to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/painting-06.jpg',fallback:'',sold:false},

  /* ── JEWELRY ──
     No photographs yet, so every piece shows the "photo coming soon" panel.
     `sold` is false throughout — the previous draft flagged pieces sold, which
     was invented. */
  {id:101,cat:'jewelry',title:'Untitled Pendant',info:'Materials to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/jewelry-pendant.jpg',fallback:'',sold:false},
  {id:102,cat:'jewelry',title:'Untitled Earrings',info:'Materials to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/jewelry-earrings.jpg',fallback:'',sold:false},
  {id:103,cat:'jewelry',title:'Untitled Cuff',info:'Materials to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/jewelry-cuff.jpg',fallback:'',sold:false},
  {id:104,cat:'jewelry',title:'Untitled Brooch',info:'Materials to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/jewelry-brooch.jpg',fallback:'',sold:false},
  {id:105,cat:'jewelry',title:'Untitled Necklace',info:'Materials to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
   img:'images/jewelry-necklace.jpg',fallback:'',sold:false},
  {id:106,cat:'jewelry',title:'Untitled Ring',info:'Materials to be confirmed',
   desc:'Placeholder — Deb\u2019s description to come.',
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
