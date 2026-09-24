const WA = "6281223805900";

const products = [

/* ================= MAXI ================= */

{
  name: "TMAX TECH MAX",
  category: "maxi",
  price: "Rp 455.200.000",
  dp: "Rp 136.000.00",
  installment: "RP 11.522.000",
  tenor: "35",
  image: "2026012109464595907G85940.png"
},

{
  name: "XMAX 250",
  category: "maxi",
  price: "Rp 70.490.000",
  dp: "Rp 15.600.000",
  installment: "Rp 2.601.000"",
  tenor: "29",
  image: "2026011410411324315K95315.png"
},

{
  name: 'NMAX "TURBO"',
  category: "maxi",
  price: "Rp 39.460.000",
  dp: "Rp 2.500.000",
  installment: "Rp 1.623.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2025111019120360785H74074.png"
},

{
  name: "AEROX ALPHA",
  category: "maxi",
  price: "Rp 31.285.000",
  dp: "Rp 1.500.000",
  installment: "1300.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026020515031335833N50491.png"
},

{
  name: "LEXi LX 155",
  category: "maxi",
  price: "Rp 28.220.000",
  dp: "Rp 1.300.000",
  installment: "Rp 1.179.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012101353067003N34382.png"
},

{
  name: "NMAX NEO S",
  category: "maxi",
  price: "Rp 35.590.000",
  dp: "Rp 1.700.000",
  installment: "Rp 1.471.000",
  tenor: "35",
  image: "2025111019194058600Y79045.png"
},

{
  name: "AEROX 155",
  category: "maxi",
  price: "Rp 29.705.000",
  dp: "Rp 1.300.000",
  installment: "Rp 1.240.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023041415280563814D66821.png"
},

/* ================= CLASSY ================= */

{
  name: "GRAND FILANO",
  category: "classy",
  price: "Rp 28.960.000",
  dp: "Rp 1.200.000",
  installment: "Rp 1.211.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012314263490145D59534.png"
},

{
  name: "FAZZIO Neo",
  category: "classy",
  price: "Rp 24.650.000",
  dp: "Rp 1.000.000",
  installment: "Rp 1.040.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012315293027645K32651.png"
},

/* ================= MATIC ================= */

{
  name: "GEAR ULTIMA",
  category: "matic",
  price: "Rp 20.240.000",
  dp: "Rp 800.000",
  installment: "Rp 874.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/202604021124218894J.png"
},

{
  name: "GEAR ultima Solid",
  category: "matic",
  price: "Rp 20.870.000",
  dp: "Rp 1.000.000",
  installment: "Rp 892.000",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024031507431441417B35284.png"
},

{
  name: "FREEGO 125",
  category: "matic",
  price: "Rp 23.205.000",
  dp: "Rp 1.000.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/202506091443425485Y97917.png"
},

{
  name: "X-RIDE 125",
  category: "matic",
  price: "Rp 21.435.000",
  dp: "Rp 1.300.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025070409402252373C51406.png"
},

{
  name: "MIO M3 125",
  category: "matic",
  price: "Rp 19.200.000",
  dp: "Rp 1.000.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025051913533472814Q20921.png"
},

{
  name: "FINO 125",
  category: "matic",
  price: "Rp 20.900.000",
  dp: "Rp 1.300.000i",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/202302210939153521B87826.png"
},

/* ================= SPORT ================= */

{
  name: "XSR 155",
  category: "sport",
  price: "Rp 40.845.000",
  dp: "Rp 2.000.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015110954865E18335.png"
},

{
  name: "R15 CONNECT",
  category: "sport",
  price: "Rp 42.975.000",
  dp: "Rp 4.000.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2024072510414155568H76580.png"
},

{
  name: "R25",
  category: "sport",
  price: "Rp 76.750.000",
  dp: "Rp 14.600.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015411993760O36900.png"
},

{
  name: "MT-25",
  category: "sport",
  price: "Rp 67.150.000",
  dp: "Rp 14.100.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015192887371O6508.png"
},

{
  name: "MT-15",
  category: "sport",
  price: "Rp 41.445.000",
  dp: "Rp 7.900.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025012015144954158N49912.png"
},

{
  name: "VIXION 155",
  category: "sport",
  price: "Rp 31.965.000",
  dp: "Rp 3.300.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022011109442589529O58043.png"
},

/* ================= OFF ROAD ================= */

{
  name: "WR155R",
  category: "off-road",
  price: "Rp 41.675.000",
  dp: "Rp 4.000.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2026012216283431324H51389.png"
},

{
  name: "YZ125X",
  category: "off-road",
  price: "Rp 100.200.000",
  dp: "Rp 15.800.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/202606031052219193A.png"
},

{
  name: "YZ250X",
  category: "off-road",
  price: "Rp 132.500.000",
  dp: "Rp 20.300.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/202606031053343044T.png"
},

{
  name: "YZ250FX",
  category: "off-road",
  price: "Rp 140.500.000",
  dp: "Rp 21.300.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/202606031050479381F.png"
},

/* ================= MOPED ================= */

{
  name: "MX KING 150",
  category: "moped",
  price: "Rp 29.379.000",
  dp: "Rp 2.600.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/202606190939128383S.png"
},

{
  name: "JUPITER Z1",
  category: "moped",
  price: "Rp 22.771.000",
  dp: "Rp 1.850.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2025061108344332282O17129.png"
},

{
  name: "VEGA FORCE",
  category: "moped",
  price: "Rp 20.445.000",
  dp: "Rp 1.500.000",
  installment: "Hubungi Kami",
  tenor: "35",
  image: "https://www.yamaha-motor.co.id/uploads/products/featured_image/2023060510573539478H29934.png"
}

];


/* =====================================================
   ELEMENT WEBSITE
===================================================== */

const grid = document.getElementById("productGrid");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".cat");


/* =====================================================
   FORMAT HARGA
===================================================== */

function rupiah(text){
  return text || "Hubungi Kami";
}


/* =====================================================
   RENDER PRODUK
===================================================== */

function renderProducts(list){

  if(!grid) return;

  grid.innerHTML = "";

  if(list.length === 0){

    grid.innerHTML = `
      <div class="empty-product">
        <div>🔎</div>
        <h3>Unit tidak ditemukan</h3>
        <p>Coba cari nama motor Yamaha lainnya.</p>
      </div>
    `;

    return;
  }


  list.forEach((product,index)=>{

    const card = document.createElement("article");

    card.className = "product-card";

    card.style.animationDelay =
      `${index * 0.05}s`;


    /* ===============================
       WHATSAPP
    =============================== */

    const waText =
      `Halo Irawan Yamaha Official, saya tertarik dengan ${product.name}. Mohon info harga OTR Bandung, DP dan angsuran terbaru.`;

    const waLink =
      `https://wa.me/${WA}?text=${encodeURIComponent(waText)}`;


    /* ===============================
       CARD
    =============================== */

    card.innerHTML = `

      <div class="product-image">

        <span class="product-category">
          ${product.category
            .replace("-", " ")
            .toUpperCase()}
        </span>

        <img
          src="${product.image}"
          alt="Yamaha ${product.name}"
          loading="lazy"
        >

        <div class="image-glow"></div>

      </div>


      <div class="product-info">

        <div class="product-number">
          ${String(index + 1).padStart(2,"0")}
        </div>


        <h3>
          ${product.name}
        </h3>


        <div class="price-label">
          HARGA OTR BANDUNG
        </div>


        <div class="product-price">
          ${rupiah(product.price)}
        </div>


        <!-- DP -->

        <div class="credit-box">

          <div class="credit-item">

            <span class="credit-label">
              DP MULAI
            </span>

            <strong>
              ${product.dp || "Hubungi Kami"}
            </strong>

          </div>


          <!-- ANGSURAN -->

          <div class="credit-item">

            <span class="credit-label">
              ANGSURAN
            </span>

            <strong>
              ${product.installment || "Hubungi Kami"}
            </strong>

            <small>
              ${product.installment !== "Hubungi Kami"
                ? `× ${product.tenor} bulan`
                : "Tenor dapat dikonsultasikan"}
            </small>

          </div>

        </div>


        <div class="price-note">
          Harga & simulasi kredit dapat berubah.
        </div>


        <!-- BUTTON -->

        <div class="product-actions">

          <button
            class="detail-btn"
            onclick="showProduct(${products.indexOf(product)})">

            DETAIL

          </button>


          <a
            class="wa-btn"
            href="${waLink}"
            target="_blank"
            rel="noopener">

            WHATSAPP

          </a>

        </div>

      </div>

    `;


    grid.appendChild(card);

  });

}


/* =====================================================
   FILTER PRODUK
===================================================== */

let currentCategory = "semua";


function filterProducts(){

  const keyword =
    search
      ? search.value.toLowerCase().trim()
      : "";


  const result =
    products.filter(product => {

      const categoryMatch =
        currentCategory === "semua" ||
        product.category === currentCategory;


      const searchMatch =
        product.name
          .toLowerCase()
          .includes(keyword);


      return categoryMatch && searchMatch;

    });


  renderProducts(result);

}


/* =====================================================
   BUTTON CATEGORY
===================================================== */

buttons.forEach(button => {

  button.addEventListener("click",()=>{

    buttons.forEach(btn =>
      btn.classList.remove("active")
    );


    button.classList.add("active");


    currentCategory =
      button.dataset.category;


    filterProducts();

  });

});


/* =====================================================
   SEARCH
===================================================== */

if(search){

  search.addEventListener(
    "input",
    filterProducts
  );

}


/* =====================================================
   DETAIL POPUP
===================================================== */

function showProduct(index){

  const product =
    products[index];


  if(!product) return;


  /* ===============================
     WHATSAPP
  =============================== */

  const waText =
    `Halo Irawan Yamaha Official, saya ingin konsultasi ${product.name}. Mohon info harga OTR Bandung, DP dan angsuran terbaru.`;

  const waLink =
    `https://wa.me/${WA}?text=${encodeURIComponent(waText)}`;


  /* ===============================
     HAPUS MODAL LAMA
  =============================== */

  const oldModal =
    document.querySelector(".unit-modal");


  if(oldModal)
    oldModal.remove();


  /* ===============================
     BUAT MODAL
  =============================== */

  const modal =
    document.createElement("div");


  modal.className =
    "unit-modal";


  modal.innerHTML = `

    <div class="unit-modal-bg"></div>


    <div class="unit-modal-box">


      <button
        class="modal-close">

        ×

      </button>


      <!-- GAMBAR -->

      <div class="modal-image">

        <img
          src="${product.image}"
          alt="Yamaha ${product.name}"
        >

      </div>


      <!-- INFORMASI -->

      <div class="modal-content">


        <span class="modal-category">
          ${product.category.toUpperCase()}
        </span>


        <h2>
          ${product.name}
        </h2>


        <!-- HARGA -->

        <div class="modal-price-title">
          HARGA OTR BANDUNG
        </div>


        <p class="modal-price">
          ${product.price}
        </p>


        <!-- KREDIT -->

        <div class="modal-credit">


          <div class="modal-credit-item">

            <span>
              DP MULAI
            </span>

            <strong>
              ${product.dp || "Hubungi Kami"}
            </strong>

          </div>


          <div class="modal-credit-item">

            <span>
              ANGSURAN
            </span>

            <strong>
              ${product.installment || "Hubungi Kami"}
            </strong>

            <small>
              ${product.installment !== "Hubungi Kami"
                ? `× ${product.tenor} bulan`
                : "Tenor dapat dikonsultasikan"}
            </small>

          </div>


        </div>


        <p class="modal-note">

          Harga OTR Bandung dan simulasi kredit
          dapat berubah sesuai program promo,
          DP, tenor dan hasil pengajuan leasing.

        </p>


        <!-- BUTTON -->

        <div class="modal-actions">


          <a
            href="${waLink}"
            target="_blank"
            rel="noopener"
            class="modal-wa">

            CHAT WHATSAPP

          </a>


          <button
            class="modal-back">

            KEMBALI

          </button>


        </div>


      </div>

    </div>

  `;


  document.body.appendChild(modal);


  /* ===============================
     ANIMASI
  =============================== */

  setTimeout(()=>{

    modal.classList.add("show");

  },10);


  /* ===============================
     CLOSE
  =============================== */

  modal
    .querySelector(".modal-close")
    .onclick =
      () => closeModal(modal);


  modal
    .querySelector(".modal-back")
    .onclick =
      () => closeModal(modal);


  modal
    .querySelector(".unit-modal-bg")
    .onclick =
      () => closeModal(modal);

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal(modal){

  modal.classList.remove("show");


  setTimeout(()=>{

    modal.remove();

  },250);

}


/* =====================================================
   ANIMASI MOUSE PRODUCT CARD
===================================================== */

document.addEventListener(
  "mousemove",
  (e)=>{

    const cards =
      document.querySelectorAll(
        ".product-card"
      );


    cards.forEach(card => {

      const rect =
        card.getBoundingClientRect();


      if(
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ){

        const x =
          (e.clientX - rect.left) /
          rect.width - 0.5;


        const y =
          (e.clientY - rect.top) /
          rect.height - 0.5;


        card.style.setProperty(
          "--mx",
          `${x * 4}deg`
        );


        card.style.setProperty(
          "--my",
          `${y * -4}deg`
        );

      }

    });

  }
);


/* =====================================================
   START WEBSITE
===================================================== */

renderProducts(products);
