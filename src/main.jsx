import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const WA = '263713478012';
const wa = (text='Hello FAA\'S Closet, I would like to enquire about your products.') => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const ig = 'https://www.instagram.com/';

const products = [
  {img:'/assets/product-01.webp', title:'Strappy Heels', price:'$8', sizes:'36–41'},
  {img:'/assets/product-02.webp', title:'Lifestyle Sneakers', price:'$20', sizes:'37–41'},
  {img:'/assets/product-03.webp', title:'Strappy Sandals', price:'$8', sizes:'36–41'},
  {img:'/assets/product-04.webp', title:'Everyday Sandals', price:'$10', sizes:'Selected sizes'},
  {img:'/assets/product-05.webp', title:'New Balance Style', price:'$20', sizes:'37–41'},
  {img:'/assets/product-06.webp', title:'Black Strap Heels', price:'$8', sizes:'36–41'},
  {img:'/assets/product-07.webp', title:'Classic Loafers', price:'$15', sizes:'Selected sizes'},
  {img:'/assets/product-08.webp', title:'Sport Sneakers', price:'$20', sizes:'40–45'},
  {img:'/assets/product-09.webp', title:'Sneaker Collection', price:'$20', sizes:'41–45'},
  {img:'/assets/product-10.webp', title:'Black Sneakers', price:'$20', sizes:'41–45'},
  {img:'/assets/product-11.webp', title:'Green Sneakers', price:'$20', sizes:'41–45'},
  {img:'/assets/product-12.webp', title:'White Sneakers', price:'$20', sizes:'41–45'},
  {img:'/assets/product-13.webp', title:'Red Sneakers', price:'$20', sizes:'41–45'},
  {img:'/assets/product-14.webp', title:'Black Trainers', price:'$20', sizes:'40–45'},
  {img:'/assets/product-15.webp', title:'White Slip-ons', price:'$15', sizes:'Selected sizes'}
];

function WhatsAppIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L.08 24l6.35-1.67a11.86 11.86 0 0 0 5.62 1.43h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.43-8.39ZM12.06 21.75h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.87 9.87 0 1 1 8.37 4.64Zm5.41-7.39c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.12-.27-.2-.57-.35Z"/></svg>}

function App(){
 const [menu,setMenu]=React.useState(false);
 return <div className="site">
   <div className="bg bg-a"/><div className="bg bg-b"/><div className="grain"/>
   <header className="nav glass">
    <a className="brand" href="#home"><span className="brand-mark">FAA'S</span><span className="brand-sub">CLOSET</span></a>
    <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Open menu"><span/><span/><span/></button>
    <nav className={menu?'open':''}>
      <a href="#home" onClick={()=>setMenu(false)}>Home</a><a href="#collection" onClick={()=>setMenu(false)}>Collection</a><a href="#new" onClick={()=>setMenu(false)}>New In</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#visit" onClick={()=>setMenu(false)}>Visit Us</a>
      <a className="nav-wa" href={wa()} target="_blank" rel="noreferrer"><WhatsAppIcon/> WhatsApp</a>
    </nav>
   </header>

   <main>
    <section id="home" className="hero section-bg">
      <div className="hero-overlay"/>
      <div className="hero-content">
       <p className="eyebrow">QUALITY GUARANTEED · HARARE</p>
       <h1>Style<br/><em>That Moves</em><br/>With You.</h1>
       <p className="lead">Discover women's fashion and footwear selected for everyday confidence, from FAA'S Closet.</p>
       <div className="actions"><a className="gold-btn" href={wa('Hello FAA\'S Closet, I would like to shop from your latest collection.')} target="_blank" rel="noreferrer"><WhatsAppIcon/> Shop on WhatsApp</a><a className="outline-btn" href="#collection">Explore Collection <span>→</span></a></div>
      </div>
      <div className="hero-meta glass"><div><b>31K+</b><span>Followers</span></div><div><b>Shop 9</b><span>Construction House Mall</span></div><div><b>Harare</b><span>Mezzanine Floor</span></div><div><b>WhatsApp</b><span>0713 478 012</span></div></div>
    </section>

    <section id="collection" className="collections section-bg alt-bg">
      <div className="section-head"><div><p className="eyebrow">SHOP THE LOOK</p><h2>Featured <em>Collection</em></h2></div><a href={wa('Hello FAA\'S Closet, please send me your latest available styles.')} target="_blank" rel="noreferrer" className="text-link">Request latest styles →</a></div>
      <div className="product-grid">{products.slice(0,8).map((p,i)=><article className="product glass" key={p.img}><div className="product-img"><img src={p.img} alt={p.title}/><span className="price">{p.price}</span></div><div className="product-info"><div><h3>{p.title}</h3><p>Sizes {p.sizes}</p></div><a href={wa(`Hello FAA'S Closet, I'm interested in ${p.title} at ${p.price}. Is it available?`)} target="_blank" rel="noreferrer" className="mini-wa"><WhatsAppIcon/></a></div></article>)}</div>
    </section>

    <section id="new" className="editorial section-bg">
      <div className="editorial-copy glass"><p className="eyebrow">NEW IN</p><h2>Fresh styles.<br/><em>Fresh energy.</em></h2><p>Browse the latest footwear and fashion posted by FAA'S Closet, then enquire directly on WhatsApp.</p><a className="gold-btn" href={wa('Hello FAA\'S Closet, please send me your newest arrivals.')} target="_blank" rel="noreferrer"><WhatsAppIcon/> See New Arrivals</a></div>
      <div className="editorial-image"><img src="/assets/product-09.webp" alt="FAA'S Closet footwear"/></div>
    </section>

    <section id="about" className="about section-bg alt-bg">
      <div className="about-card glass"><p className="eyebrow">ABOUT FAA'S CLOSET</p><h2>Fashion you can <em>feel good in.</em></h2><p>FAA'S Closet is a clothing brand based at Construction House Mall in Harare. The page describes its offering as quality-guaranteed fashion, with products shared through Facebook and direct WhatsApp enquiries.</p><div className="pill-row"><span>Women's Fashion</span><span>Footwear</span><span>In-store Shopping</span></div></div>
    </section>

    <section id="visit" className="visit section-bg">
      <div className="visit-inner glass"><div><p className="eyebrow">VISIT THE STORE</p><h2>Find us in <em>Harare.</em></h2><p>Construction House Mall<br/>Shop 9, Mezzanine Floor<br/>Harare, Zimbabwe</p></div><div className="visit-actions"><a className="gold-btn" href={wa()} target="_blank" rel="noreferrer"><WhatsAppIcon/> WhatsApp 0713 478 012</a><a className="outline-btn" href="tel:+263713478012">Call 0713 478 012 →</a><a className="outline-btn" href="tel:+263772337928">Call 0772 337 928 →</a></div></div>
    </section>
   </main>

   <footer className="footer glass"><div><a className="brand" href="#home"><span className="brand-mark">FAA'S</span><span className="brand-sub">CLOSET</span></a><p>Women's fashion · Harare</p></div><div className="footer-links"><a href={ig} target="_blank" rel="noreferrer">Instagram</a><a href={wa()} target="_blank" rel="noreferrer">WhatsApp</a><a href="#visit">Visit Us</a></div></footer>
   <a className="floating-wa" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp FAA'S Closet"><WhatsAppIcon/></a>
 </div>
}

createRoot(document.getElementById('root')).render(<App/>);
