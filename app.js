const WA_NUMBER = "6281223805900";

const products = [

  /* ================= MAXI ================= */

  {
    name: "TMAX",
    category: "maxi",
    price: "Rp455.000.000",
    cc: "560 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20260121105207TMAX.png",
    official: "https://www.yamaha-motor.co.id/products/"
  },

  {
    name: "XMAX 250",
    category: "maxi",
    price: "Rp70.015.000",
    cc: "250 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025092412293259576G76761.png",
    official: "https://www.yamaha-motor.co.id/products/"
  },

  {
    name: "NMAX TURBO",
    category: "maxi",
    price: "Mulai Rp39.460.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240130102419NMAX.png",
    official: "https://www.yamaha-motor.co.id/product/all-new-nmax155-connected/"
  },

  {
    name: "NMAX TURBO",
    category: "maxi",
    price: "Mulai Rp32.175.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240130102419NMAX.png",
    official: "https://www.yamaha-motor.co.id/product/all-new-nmax155-connected/"
  },

  {
    name: "AEROX ALPHA",
    category: "maxi",
    price: "Mulai Rp31.285.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20241218120333AEROXALPHA.png",
    official: "https://www.yamaha-motor.co.id/product/aerox-alpha/"
  },

  {
    name: "LEXi LX 155",
    category: "maxi",
    price: "Mulai Rp28.220.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20260108110431LEXI.png",
    official: "https://www.yamaha-motor.co.id/product/lexi-lx-155/"
  },


  /* ================= CLASSY ================= */

  {
    name: "GRAND FILANO",
    category: "classy",
    price: "Mulai Rp28.960.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20230126102724FILANO.png",
    official: "https://www.yamaha-motor.co.id/products/"
  },

  {
    name: "FAZZIO",
    category: "classy",
    price: "Mulai Rp24.650.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20220119100630FAZZIO.png",
    official: "https://www.yamaha-motor.co.id/products/"
  },


  /* ================= MATIC ================= */

  {
    name: "GEAR ULTIMA",
    category: "matic",
    price: "Mulai Rp20.240.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20250211101232GEARULTIMA.png",
    official: "https://www.yamaha-motor.co.id/products/category/matic/"
  },

  {
    name: "GEAR 125",
    category: "matic",
    price: "Mulai Rp20.450.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116104022GEAR125.png",
    official: "https://www.yamaha-motor.co.id/products/category/matic/"
  },

  {
    name: "FREEGO 125",
    category: "matic",
    price: "Mulai Rp23.205.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116104333FREEGO.png",
    official: "https://www.yamaha-motor.co.id/products/category/matic/"
  },

  {
    name: "X-RIDE 125",
    category: "matic",
    price: "Mulai Rp21.135.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116104523XRIDE.png",
    official: "https://www.yamaha-motor.co.id/products/category/matic/"
  },

  {
    name: "MIO M3 125",
    category: "matic",
    price: "Mulai Rp19.200.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116104700MIOM3.png",
    official: "https://www.yamaha-motor.co.id/products/category/matic/"
  },


  /* ================= SPORT ================= */

  {
    name: "R15 CONNECTED",
    category: "sport",
    price: "Mulai Rp42.975.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116105525R15.png",
    official: "https://www.yamaha-motor.co.id/product/all-new-R15-connected/"
  },

  {
    name: "MT-15",
    category: "sport",
    price: "Rp41.445.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116105915MT15.png",
    official: "https://www.yamaha-motor.co.id/product/mt15/"
  },

  {
    name: "XSR 155",
    category: "sport",
    price: "Mulai Rp40.845.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116110134XSR155.png",
    official: "https://www.yamaha-motor.co.id/product/xsr-155/"
  },


  /* ================= OFF ROAD ================= */

  {
    name: "WR155R",
    category: "off-road",
    price: "Mulai Rp41.675.000",
    cc: "155 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116110425WR155R.png",
    official: "https://www.yamaha-motor.co.id/products/category/off-road/"
  },

  {
    name: "YZ125X",
    category: "off-road",
    price: "Rp100.800.000",
    cc: "125 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116110640YZ125X.png",
    official: "https://www.yamaha-motor.co.id/products/category/off-road/"
  },

  {
    name: "YZ250X",
    category: "off-road",
    price: "Rp132.500.000",
    cc: "250 cc",
    image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/20240116110840YZ250X.png",
    official: "https://www.yamaha-motor.co.id/products/category/off-road/"
  }

];


const productGrid =
  document.getElementById("productGrid");

const search =
  document.getElementById("search");

const catalogCount =
  document.getElementById("catalogCount");


let currentCategory = "semua";


/* =====================================================
 WHATSAPP
===================================================== */

function whatsappLink(name){

  const text =
    `Halo Irawan Yamaha Official,%0A%0A` +
    `Saya tertarik dengan motor ini:%0A` +
    `${name}%0A%0A` +
    `Mohon informasi harga, promo, DP dan angsuran terbaru.`;

  return `https://wa.me/${WA_NUMBER}?text=${text}`;

}


/* =====================================================
 RENDER PRODUCT
===================================================== */

function renderProducts(){

  const keyword =
    search.value.toLowerCase().trim();


  const filtered =
    products.filter(product => {

      const matchCategory =
        currentCategory === "semua" ||
        product.category === currentCategory;

      const matchSearch =
        product.name.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;

    });


  catalogCount.textContent =
    filtered.length;


  productGrid.innerHTML = "";


  if(filtered.length === 0){

    productGrid.innerHTML = `
      <div class="empty">
        <h3>Motor tidak ditemukan</h3>
        <p>Coba gunakan nama motor lain.</p>
      </div>
    `;

    return;

  }


  filtered.forEach((product,index) => {

    const card =
      document.createElement("article");

    card.className =
      "product-card reveal";

    card.style.animationDelay =
      `${index * 70}ms`;


    card.innerHTML = `

      <div class="product-image">

        <span class="product-category">
          ${product.category.toUpperCase()}
        </span>

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1200'"
        >

        <div class="image-glow"></div>

      </div>


      <div class="product-body">

        <div class="product-meta">
          <span>${product.cc}</span>
          <span>YAMAHA</span>
        </div>

        <h3>
          ${product.name}
        </h3>

        <div class="product-price">
          ${product.price}
        </div>

        <div class="product-actions">

          <a
            class="detail-btn"
            href="${product.official}"
            target="_blank"
            rel="noopener"
          >
            DETAIL
          </a>

          <a
            class="wa-small"
            href="${whatsappLink(product.name)}"
            target="_blank"
          >
            CHAT
          </a>

        </div>

      </div>

    `;


    productGrid.appendChild(card);

  });

}


/* =====================================================
 CATEGORY BUTTON
===================================================== */

document.querySelectorAll(".cat").forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".cat")
      .forEach(btn =>
        btn.classList.remove("active")
      );

    button.classList.add("active");

    currentCategory =
      button.dataset.category;

    renderProducts();

  });

});


/* =====================================================
 SEARCH
===================================================== */

search.addEventListener(
  "input",
  renderProducts
);


/* =====================================================
 HERO SLIDER
===================================================== */

const heroBike =
  document.getElementById("heroBike");

const heroName =
  document.getElementById("heroName");

const heroCategory =
  document.getElementById("heroCategory");

const heroDots =
  document.getElementById("heroDots");

const nextHero =
  document.getElementById("nextHero");


const heroProducts =
  products.slice(0,6);


let heroIndex = 0;


function updateHero(){

  const product =
    heroProducts[heroIndex];


  heroBike.classList.remove("bike-enter");


  setTimeout(() => {

    heroBike.src =
      product.image;

    heroBike.alt =
      product.name;

    heroName.textContent =
      product.name;

    heroCategory.textContent =
      product.category.toUpperCase();

    heroBike.classList.add("bike-enter");


  },150);


  heroDots.innerHTML =
    heroProducts.map((_,i) => `
      <span
        class="${i === heroIndex ? "active" : ""}"
      ></span>
    `).join("");

}


nextHero.addEventListener("click", () => {

  heroIndex++;

  if(heroIndex >= heroProducts.length){
    heroIndex = 0;
  }

  updateHero();

});


/* klik titik slider */

heroDots.addEventListener("click", e => {

  const dots =
    [...heroDots.children];

  const index =
    dots.indexOf(e.target);

  if(index >= 0){

    heroIndex = index;

    updateHero();

  }

});


/* AUTO SLIDER */

setInterval(() => {

  heroIndex++;

  if(heroIndex >= heroProducts.length){
    heroIndex = 0;
  }

  updateHero();

},6000);


/* =====================================================
 MOBILE MENU
===================================================== */

const menu =
  document.getElementById("menu");

const navlinks =
  document.querySelector(".navlinks");


menu.addEventListener("click", () => {

  navlinks.classList.toggle("show");

});


document
  .querySelectorAll(".navlinks a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navlinks.classList.remove("show");

    });

  });


/* =====================================================
 INITIAL
===================================================== */

renderProducts();
updateHero();
