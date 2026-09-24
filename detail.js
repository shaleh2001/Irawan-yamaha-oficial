const PRODUCTS = [
  {
    "category": "maxi",
    "name": "XMAX 250",
    "slug": "XMAX",
    "price": 70460000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025092412293259576G76761.png",
    "desc": "Premium Maxi untuk touring dan perjalanan jauh."
  },
  {
    "category": "maxi",
    "name": "NMAX",
    "slug": "NMAX",
    "price": 39460000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025111019384188604L75511.png",
    "desc": "Maxi scooter nyaman untuk harian dan touring."
  },
  {
    "category": "maxi",
    "name": "AEROX ALPHA",
    "slug": "AEROX-ALPHA",
    "price": 31285000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026020516255618687C33585.png",
    "desc": "Super sport scooter dengan karakter agresif."
  },
  {
    "category": "maxi",
    "name": "LEXi LX 155",
    "slug": "LEXI",
    "price": 28220000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202601210138425928P94164.png",
    "desc": "Maxi scooter praktis dengan posisi berkendara nyaman."
  },
  {
    "category": "classy",
    "name": "Grand Filano",
    "slug": "GRAND-FILANO",
    "price": 28960000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012314263490145D59534.png",
    "desc": "Classy hybrid scooter dengan desain elegan."
  },
  {
    "category": "classy",
    "name": "Fazzio",
    "slug": "FAZZIO",
    "price": 24650000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012315293027645K32651.png",
    "desc": "Classy hybrid scooter yang stylish dan personal."
  },
  {
    "category": "matic",
    "name": "Gear Ultima",
    "slug": "GEAR-ULTIMA",
    "price": 20870000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202604021124218894J.png",
    "desc": "Matic tangguh dan serbaguna untuk aktivitas harian."
  },
  {
    "category": "matic",
    "name": "Gear 125",
    "slug": "GEAR-125",
    "price": 20450000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024031507431441417B35284.png",
    "desc": "Matic praktis untuk mobilitas sehari-hari."
  },
  {
    "category": "matic",
    "name": "FreeGo 125",
    "slug": "FREEGO",
    "price": 23205000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202506091443425485Y97917.png",
    "desc": "Matic praktis dengan ruang dan kenyamanan untuk keluarga."
  },
  {
    "category": "matic",
    "name": "X-Ride 125",
    "slug": "X-RIDE",
    "price": 21135000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025070409402252373C51406.png",
    "desc": "Matic bergaya adventure untuk aktivitas aktif."
  },
  {
    "category": "sport",
    "name": "XSR 155",
    "slug": "XSR-155",
    "price": 40845000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015110954865E18335.png",
    "desc": "Sport heritage dengan karakter klasik-modern."
  },
  {
    "category": "sport",
    "name": "R15",
    "slug": "R15",
    "price": 42200000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024072510414155568H76580.png",
    "desc": "Supersport berkarakter agresif dan sporty."
  },
  {
    "category": "sport",
    "name": "R25",
    "slug": "R25",
    "price": 76250000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015411993760O36900.png",
    "desc": "Sport bike 250 cc untuk sensasi berkendara sporty."
  },
  {
    "category": "sport",
    "name": "MT-15",
    "slug": "MT-15",
    "price": 42475000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015192887371O6508.png",
    "desc": "Hyper naked bike dengan karakter agresif."
  },
  {
    "category": "sport",
    "name": "Vixion 155",
    "slug": "VIXION-155",
    "price": 31765000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015144954158N49912.png",
    "desc": "Street sport untuk penggunaan harian."
  },
  {
    "category": "off-road",
    "name": "WR155R",
    "slug": "WR155R",
    "price": 41175000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023022109421344125G78257.png",
    "desc": "Dual purpose untuk jalan raya dan medan petualangan."
  },
  {
    "category": "off-road",
    "name": "YZ125X",
    "slug": "YZ125X",
    "price": 105900000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012216283431324H51389.png",
    "desc": "Off-road competition bike."
  },
  {
    "category": "off-road",
    "name": "YZ250X",
    "slug": "YZ250X",
    "price": 132000000,
    "image": "https://www.yamaha-motor.co.id/uploads/products/featured_image/202606031052219193A.png",
    "desc": "Enduro competition bike 2-stroke."
  }
];

const WA_NUMBER = "6281223805900";
const STORE_NAME = "Irawan Yamaha Official";
const SIMULATION = { dpPercent: 10, flatRateAnnual: 0.08, defaultTenor: 35 };

function rupiah(n){
  return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(Math.round(n));
}
function waLink(product, extra=""){
  const msg = `Halo ${STORE_NAME}, saya tertarik dengan Yamaha ${product.name}. Saya ingin tanya harga, DP, angsuran dan promo terbaru. ${extra}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function simulation(price, dpPercent=SIMULATION.dpPercent, tenor=SIMULATION.defaultTenor){
  const dp = Math.round(price * dpPercent/100/100000)*100000;
  const principal = Math.max(price-dp,0);
  const interest = principal * SIMULATION.flatRateAnnual * (tenor/12);
  const monthly = (principal + interest) / tenor;
  return {dp, monthly, tenor};
}
function productBySlug(slug){ return PRODUCTS.find(p=>p.slug===slug); }

const slug = document.body.dataset.slug;
const p = productBySlug(slug);
if(!p){ location.href="../index.html"; }
const img=document.querySelector("#detailImage");
const name=document.querySelector("#detailName");
const cat=document.querySelector("#detailCategory");
const desc=document.querySelector("#detailDesc");
const price=document.querySelector("#detailPrice");
const wa=document.querySelector("#detailWa");
const back=document.querySelector("#backHome");
img.src=p.image; img.alt="Yamaha "+p.name; name.textContent=p.name; cat.textContent=p.category; desc.textContent=p.desc;
price.textContent=rupiah(p.price); wa.href=waLink(p);
function updateCalc(){
  const dpP=Number(document.querySelector("#dpPercent").value);
  const tenor=Number(document.querySelector("#tenor").value);
  const s=simulation(p.price,dpP,tenor);
  document.querySelector("#dpValue").textContent=rupiah(s.dp);
  document.querySelector("#monthlyValue").textContent=rupiah(s.monthly);
  document.querySelector("#waCalc").href=waLink(p,`Simulasi saya: DP ${rupiah(s.dp)}, tenor ${tenor}x, estimasi angsuran ${rupiah(s.monthly)}.`);
}
document.querySelector("#dpPercent").addEventListener("input",updateCalc);
document.querySelector("#tenor").addEventListener("change",updateCalc);
updateCalc();
