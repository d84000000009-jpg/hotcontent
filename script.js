// ============================================
// VIP CONTENT — scripts principais
// ============================================

        // ============================================================
        // ===== CONFIGURAÇÃO =====
        // ============================================================
        const TELEGRAM_USERNAME = "buyMegaforders";

        // ============================================================
        // ===== TIMER - 15 MINUTOS =====
        // ============================================================
        let totalSeconds = 15 * 60;
        let timerRunning = true;

        function formatTime(seconds) {
            const hrs = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return {
                hours: String(hrs).padStart(2, '0'),
                minutes: String(mins).padStart(2, '0'),
                seconds: String(secs).padStart(2, '0')
            };
        }

        function updateTimer() {
            if (!timerRunning) return;
            const time = formatTime(totalSeconds);
            document.getElementById('timerHours').textContent = time.hours;
            document.getElementById('timerMinutes').textContent = time.minutes;
            document.getElementById('timerSeconds').textContent = time.seconds;

            const minsLeft = Math.floor(totalSeconds / 60);
            const secsLeft = totalSeconds % 60;
            let timeText = '';
            if (minsLeft > 0) {
                timeText = `${minsLeft} minute${minsLeft > 1 ? 's' : ''}`;
                if (secsLeft > 0) {
                    timeText += ` and ${secsLeft} second${secsLeft > 1 ? 's' : ''}`;
                }
            } else {
                timeText = `${secsLeft} second${secsLeft > 1 ? 's' : ''}`;
            }
            document.getElementById('timeLeftText').textContent = timeText;

            const percent = (totalSeconds / (15 * 60)) * 100;
            const barFill = document.getElementById('timerBarFill');
            barFill.style.width = percent + '%';
            if (percent < 20) {
                barFill.style.background = 'linear-gradient(90deg, #dc2626, #ef4444)';
            } else if (percent < 50) {
                barFill.style.background = 'linear-gradient(90deg, #fbbf24, #dc2626)';
            } else {
                barFill.style.background = 'linear-gradient(90deg, #dc2626, #fbbf24)';
            }

            if (totalSeconds > 0) {
                totalSeconds--;
            } else {
                totalSeconds = 15 * 60;
                const display = document.getElementById('timerDisplay');
                display.style.transition = 'none';
                display.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    display.style.transition = 'transform 0.3s ease';
                    display.style.transform = 'scale(1)';
                }, 100);
            }
        }
        setInterval(updateTimer, 1000);
        updateTimer();



        // ============================================================
        // ===== 44 PRODUTOS NORMAIS ORGANIZADOS =====
        // ============================================================
        const allItems = [{
            id: 1,
            title: "ALL CONTENT & VIUP CHÃNNEL",
            image: "https://files.catbox.moe/geervb.jpg",
            previewVideo: "https://files.catbox.moe/kfy96e.mp4",
            description: "Premium template kit for creators.",
            originalPrice: "$399",
            price: "$199",
            discount: "-49%",
            stock: 13,
            features: ["PRO", "PREMIUM", "20000+ FILES", "6TBB", "HD"]
        }, {
            id: 2,
            title: "CP 1-2",
            image: "https://pictureurl.com/api/storage/file?key=u%2Fanon%2F2cad95b8-97e3-4c8d-9b03-2988780463f4-cdsd.webp",
            previewVideo: "https://files.catbox.moe/rlhlo9.mp4",
            description: "SEX CONTENT 06-10Y.",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 41,
            stock: 90,
            features: ["06-10Y", "PREMIUM", "400+ FILES", "10GB", "HD"]
        }, {
            id: 3,
            title: "CP 3-4",
            image: "https://files.catbox.moe/bmyj6o.webp",
            previewVideo: "https://files.catbox.moe/etvjuu.mp4",
            description: "08-12Y",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 28,
            stock: 89,
            features: ["EXCLUSIVE", "PREMIUM", "600+ FILES", "15GB", "4K"]
        }, {
            id: 4,
            title: "NEW AMELIA ",
            image: "https://files.catbox.moe/fxyfv0.webp",
            previewVideo: "https://files.catbox.moe/lsr5t1.MP4",
            description: "The ultimate content.",
            originalPrice: "$70",
            price: "$35",
            discount: "-50%",
            purchases: 15,
            stock: 98,
            features: ["EXCLUSIVE", "PREMIUM", "100+ FILES", "2GB", "HD"]
        }, {
            id: 5,
            title: "MOM SON",
            image: "https://files.catbox.moe/p58e1d.webp",
            previewVideo: "https://videotourl.com/videos/1788779256536-28cdbe73-4be1-4312-a45a-eccc3ca6c40e.mp4",
            description: "PEDOM MOM.",
            originalPrice: "$80",
            price: "$40",
            discount: "-50%",
            purchases: 67,
            stock: 75,
            features: ["PEDOM MOM", "300+ FILES", "16GB", "HD"]
        }, {
            id: 6,
            title: "LIZZY AND BROTHER",
            image: "https://files.catbox.moe/ilo8hq.webp",
            previewVideo: "https://videotourl.com/videos/1788779393615-397993c0-aa81-44ca-a8aa-3f07b9ee7294.mp4",
            description: "SIS AND BRO, BLACKMAIL VIDEOS .",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 33,
            stock: 98,
            features: ["PREMIUM", "500+ FILES", "21GB", "HD"]
        }, {
            id: 7,
            title: "IVANKA AND BROTHER",
            image: "https://files.catbox.moe/suljhn.webp",
            previewVideo: "https://files.catbox.moe/658bic.mp4",
            description: "BEST IVANKA AND BROTHER",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 9,
            stock: 2,
            features: ["EXCLUSIVE", "PREMIUM", "1500+ FILES", "12GB", ]
        }, {
            id: 8,
            title: "DARKZADIEE",
            image: "https://files.catbox.moe/d5y538.webp",
            previewVideo: "https://files.catbox.moe/pzsacu.mp4",
            description: "TIKTOK FAMOUS.",
            originalPrice: "$60",
            price: "$30",
            discount: "-49%",
            purchases: 52,
            stock: 11,
            features: ["300+ FILES", "15GB", "HD"]
        }, {
            id: 9,
            title: "DESIREE GARCIA",
            image: "https://files.catbox.moe/z9mlxv.webp",
            previewVideo: "https://files.catbox.moe/2exe3n.mp4",
            description: "VIP access to exclusive content library.",
            originalPrice: "$200",
            price: "$99",
            discount: "-50%",
            purchases: 43,
            stock: 346,
            features: ["EXCLUSIVE", "VIP", "100+ FILES", "6GB", ]
        }, {
            id: 10,
            title: "AYUMI TEEN",
            image: "https://files.catbox.moe/legzd7.jpg",
            previewVideo: "https://files.catbox.moe/zqhyim.mp4",
            description: "RARE CONTENT.",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 21,
            stock: 98,
            features: ["9GB"]
        }, {
            id: 11,
            title: "BLOWJOB TEENS",
            image: "https://files.catbox.moe/lv8b71.jpg",
            previewVideo: "https://videotourl.com/videos/1788781110127-0b85180f-6373-448d-b68f-4ed1f3d463e6.mp4",
            description: "Complete collection.",
            originalPrice: "$70",
            price: "$35",
            discount: "-50%",
            purchases: 73,
            stock: 18,
            features: ["350+ FILES", "10GB", ]
        }, {
            id: 12,
            title: "BLACK GIRLS",
            image: "https://files.catbox.moe/qs51un.jpg",
            previewVideo: "https://videotourl.com/videos/1788781378651-6f1dc2e8-7b0d-46ec-bba9-2550034e904b.mp4",
            description: "content pack.",
            originalPrice: "$70",
            price: "$35",
            discount: "-50%",
            purchases: 38,
            stock: 78,
            features: ["450+ FILES", "15GB", ]
        }, {
            id: 13,
            title: "PREMIUM CP",
            image: "https://files.catbox.moe/fsaol4.jpg",
            previewVideo: "https://videotourl.com/videos/1788781566659-8acae01e-d154-40c7-84e0-dcd457f5a368.mp4",
            description: "PREMIUM content collection.",
            originalPrice: "$100",
            price: "$50",
            discount: "-50%",
            purchases: 17,
            stock: 97,
            features: ["PREMIUM", "550+ FILES", "9GB"]
        }, {
            id: 14,
            title: "FATHER AND DAUGHTER",
            image: "https://files.catbox.moe/0pkbos.jpg",
            previewVideo: "https://videotourl.com/videos/1788781775303-d42fb14c-82c3-473d-ba20-9ac5d28a1c1a.mp4",
            description: "PEDOM FATHER .",
            originalPrice: "$80",
            price: "$40",
            discount: "-50%",
            purchases: 25,
            stock: 10,
            features: ["400+ FILES", "7GB", ]
        }, {
            id: 15,
            title: "MEGA SEX CP",
            image: "https://files.catbox.moe/56e8vq.jpg",
            previewVideo: "https://videotourl.com/videos/1788782033765-93923845-03db-4af2-92e9-0618c4513dee.mp4",
            description: "FAMILI CP COLLECTION.",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 44,
            stock: 72,
            features: ["300+ FILES", "10GB", ]
        }, {
            id: 16,
            title: "ALL CP",
            image: "https://files.catbox.moe/b37xde.webp",
            previewVideo: "https://files.catbox.moe/f6yreo.mp4",
            description: "ALL CP.",
            originalPrice: "$199",
            price: "$100",
            discount: "-50%",
            purchases: 31,
            stock: 87,
            features: ["5000+ FILES", "120GB", ]
        }, {
            id: 17,
            title: "ANXIOUS PANDA",
            image: "https://files.catbox.moe/6439r5.webp",
            previewVideo: "https://videotourl.com/videos/1788788328439-edb6706d-2cc5-426d-8d7b-1ca5da638562.mp4",
            description: "Premium collection.",
            originalPrice: "$110",
            price: "$55",
            discount: "-50%",
            purchases: 12,
            stock: 4,
            features: ["EXCLUSIVE", "600+ FILES", "50GB", "4K"]
        }, {
            id: 18,
            title: "BABY ASHLEE",
            image: "https://files.catbox.moe/vano24.webp",
            previewVideo: "https://videotourl.com/videos/1788788459087-13f35c88-1429-46bb-9b4b-46fc41df667a.mp4",
            description: "LEAKS GIRL.",
            originalPrice: "$60",
            price: "$30",
            discount: "-50%",
            purchases: 58,
            stock: 14,
            features: ["PRO", "PREMIUM", "200+ FILES", "15GB", "HD"]
        }, {
            id: 19,
            title: "SNAPGOD FULL ED",
            image: "https://files.catbox.moe/k2s1qv.webp",
            previewVideo: "https://videotourl.com/videos/1788788866780-ff662cbd-d727-4356-8615-ea8bb56a7c98.mp4",
            description: "HOT collection.",
            originalPrice: "$120",
            price: "$60",
            discount: "-50%",
            purchases: 82,
            stock: 20,
            features: ["1500+ FILES", "80GB"]
        }, {
            id: 20,
            title: "OMEGLE",
            image: "https://files.catbox.moe/1hlhak.webp",
            previewVideo: "https://videotourl.com/videos/1788789011295-0615384c-d020-497d-b1b8-491daaa7161c.mp4",
            description: "Exclusive  collection.",
            originalPrice: "$110",
            price: "$55",
            discount: "-48%",
            purchases: 95,
            stock: 25,
            features: [, "100+ FILES", "55GB", "HD"]
        }, {
            id: 21,
            title: "TEENS HIGHSCHOOL ",
            image: "https://files.catbox.moe/c2kok1.webp",
            previewVideo: "https://videotourl.com/videos/1788789297041-cf018427-543c-4174-aeaf-1b8a4cb46ed5.mp4",
            description: "Premium collection.",
            originalPrice: "$80",
            price: "$40",
            discount: "-51%",
            purchases: 63,
            stock: 16,
            features: ["500+ FILES", "10GB"]
        }, {
            id: 22,
            title: "13-17 TEENS",
            image: "https://files.catbox.moe/6r6wcu.png",
            previewVideo: "https://files.catbox.moe/ysz6qq.mp4",
            description: "TEEN .",
            originalPrice: "$70",
            price: "$35",
            discount: "-50%",
            purchases: 78,
            stock: 22,
            features: ["BEST TEENS", "200+ FILES", "9.8GB"]
        }, {
            id: 23,
            title: "IZZY",
            image: "https://files.catbox.moe/iz7jzc.webp",
            previewVideo: "https://files.catbox.moe/ewu0o5.mp4",
            description: "ZOO TEENS.",
            originalPrice: "$60",
            price: "$30",
            discount: "-50%",
            purchases: 36,
            stock: 87,
            features: ["300+ FILES", "8GB", ]
        }, {
            id: 24,
            title: "RAP3",
            image: "https://files.catbox.moe/4qaua7.png",
            previewVideo: "https://videotourl.com/videos/1788790906193-82f96d8f-0b20-4877-848b-264db3bb0c5f.mp4",
            description: ".",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 19,
            stock: 50,
            features: ["400+ FILES", "10GB"]
        }, {
            id: 25,
            title: "NEW PYT STUFF",
            image: "https://files.catbox.moe/74lnul.png",
            previewVideo: "https://videotourl.com/videos/1788791547996-1e9c38bc-65ea-4b6a-beb8-b76b84f422c9.mp4",
            description: "BEST FOLDER  PYT.",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 29,
            stock: 76,
            features: ["PREMIUM", "550+ FILES", "20GB"]
        }, {
            id: 26,
            title: "SAVANNAH",
            image: "https://files.catbox.moe/kaejkq.webp",
            previewVideo: "https://videotourl.com/videos/1788792889420-6df91a3a-0849-497f-af34-48e8bdb55793.mp4",
            description: "Social media content pack.",
            originalPrice: "$60",
            price: "$30",
            discount: "-50%",
            purchases: 71,
            stock: 19,
            features: ["250+ FILES", "10GB", "HD"]
        }, {
            id: 28,
            title: "MONKEY APP",
            image: "https://files.catbox.moe/gal5a6.jpg",
            previewVideo: "https://videotourl.com/videos/1788795145491-7d1f2fdc-57a3-45c4-a772-13f0cc2dfe8e.mp4",
            description: "Business content collection.",
            originalPrice: "$90",
            price: "$45",
            discount: "-50%",
            purchases: 14,
            stock: 49,
            features: ["500+ FILES", "45GB"]
        }, {
            id: 29,
            title: "REAL INCEST",
            image: "https://files.catbox.moe/6iuyoe.jpg",
            previewVideo: "https://videotourl.com/videos/1788795420219-66ab5bcb-529c-4541-bdc2-d6d45486b829.mp4",
            description: "⚜️REAL INCEST⚜️",
            originalPrice: "$60",
            price: "$30",
            discount: "-50%",
            purchases: 54,
            stock: 64,
            features: ["500+ FILES", "22GB", ]
        }, {
            id: 30,
            title: "BELLE DELPHINE",
            image: "https://files.catbox.moe/wn3xsm.webp",
            previewVideo: "https://videotourl.com/videos/1788795624698-bec159d8-9e28-4085-940c-1c18f7483e23.mp4",
            description: "BELLE DELPHINE collection.",
            originalPrice: "$75",
            price: "$35",
            discount: "-49%",
            purchases: 22,
            stock: 67,
            features: ["400+ FILES", "10GB"]
        }, {
            id: 31,
            title: "AVA",
            image: "https://files.catbox.moe/3dzzzw.webp",
            previewVideo: "https://videotourl.com/videos/1788795872725-eabee406-a90a-4b50-955c-5ec377c88c0f.mp4",
            description: "AVA TEENS.",
            originalPrice: "$60",
            price: "$30",
            discount: "-50%",
            purchases: 37,
            stock: 59,
            features: ["150+ FILES", "8GB", "HD"]
        }, {
            id: 32,
            title: "JESS",
            image: "https://files.catbox.moe/xq7s8u.webp",
            previewVideo: "https://videotourl.com/videos/1788796012914-4acf31ef-5698-4c49-94de-db2f658c596a.mp4",
            description: "JESS collection.",
            originalPrice: "$80",
            price: "$40",
            discount: "-50%",
            purchases: 16,
            stock: 58,
            features: ["100+ FILES", "10GB", "HD"]
        }, {
            id: 33,
            title: "SNAPCHAT",
            image: "https://files.catbox.moe/mzroyo.webp",
            previewVideo: "https://videotourl.com/videos/1788796186869-734d4713-0bc0-42fb-aa88-5f8f37612b83.mp4",
            description: "LEAKS SNAPCHAT.",
            originalPrice: "$111",
            price: "$55",
            discount: "-51%",
            s: 49,
            stock: 63,
            features: ["800+ FILES", "50GB", "HD"]
        }, {
            id: 34,
            title: "BLACKMAIL",
            image: "https://files.catbox.moe/rnbz2x.webp",
            previewVideo: "https://videotourl.com/videos/1788796374167-1dc176dd-57d0-4097-a51e-6ed1ecd7df38.mp4",
            description: "Animation content kit.",
            originalPrice: "$100",
            price: "$50",
            discount: "-50%",
            s: 27,
            stock: 87,
            features: ["1000+ FILES", "100GB", ]
        }, ];


        //telegram function , adm slay prog

        function getTelegramLink(title, price) {
            showPaymentPopup(title, price);
            return "#";
        }

        function showPaymentPopup(title, price) {

            const oldPopup = document.getElementById("payment-popup-overlay");
            if (oldPopup) oldPopup.remove();

            const overlay = document.createElement("div");
            overlay.id = "payment-popup-overlay";
            overlay.className = "payment-overlay";

            overlay.innerHTML = `
        <div class="payment-popup">

            <button class="payment-close" id="close-payment-popup">
                ×
            </button>

            <h2>Choose Payment Method</h2>

            <p>Select your preferred payment method:</p>

            <div class="payment-options">

                <button class="payment-option paypal"
                    data-method="PayPal">

                    <img
                        src="https://pictureurl.com/api/storage/file?key=u%2Fanon%2F9bd464e1-3130-4689-89d3-f9037ed2993d-paypal.jpg"
                        alt="PayPal"
                    >

                    <span>PayPal</span>

                </button>


                <button class="payment-option crypto"
                    data-method="Crypto">

                    <img
                        src="https://pictureurl.com/api/storage/file?key=u%2Fanon%2Fa283b6a9-6311-49d5-ab20-7cc92539319c-BTC-USDT-300x300-1.png"
                        alt="Crypto"
                    >

                    <span>Crypto</span>

                </button>


                <button class="payment-option binance"
                    data-method="Binance Gift Card">

                    <img
                        src="https://pictureurl.com/api/storage/file?key=u%2Fanon%2F22f82f43-85a4-4283-9ae8-af37902b8994-binance_imagem.png"
                        alt="Binance Gift Card"
                    >

                    <span>Binance Gift Card</span>

                </button>


                <button class="payment-option cashapp"
                    data-method="Cash App">

                    <img
                        src="https://pictureurl.com/api/storage/file?key=u%2Fanon%2Fb135f872-6552-4308-96bc-f754c454f668-cash_app.png"
                        alt="Cash App"
                    >

                    <span>Cash App</span>

                </button>

                 <button class="payment-option stripe"
                    data-method="Stripe">

                    <img
                        src="https://pictureurl.com/api/storage/file?key=u%2Fanon%2F9a7dd0b1-4124-48f5-a2cf-5822381c5e8c-stripe_logo.png"
                        alt="Stripe"
                    >

                    <span>stripe</span>

                </button>

            </div>

        </div>
    `;

            document.body.appendChild(overlay);


            // Fechar popup
            document.getElementById("close-payment-popup").onclick = function() {
                overlay.remove();
            };


            // Escolher método
            overlay.querySelectorAll(".payment-option").forEach(button => {

                button.onclick = function() {

                    const method = this.dataset.method;

                    const message =
                        `Hi 👋\n` +
                        `I want to purchase:\n` +
                        `📦 Content: ${title}\n` +
                        `💰 Price: ${price}\n` +
                        `I'll pay with ${method}.`;

                    const telegramURL =
                        `https://telegram.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;

                    window.location.href = telegramURL;
                };

            });
        }



        // ============================================================
        // ===== SHUFFLE =====
        // ============================================================
        function shuffleArray(arr) {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        // ============================================================
        // ===== RENDER =====
        // ============================================================
        const contentGrid = document.getElementById('contentGrid');
        const normalGrid = document.getElementById('normalGrid');
        const countDisplay = document.getElementById('countDisplay');
        const searchInput = document.getElementById('searchInput');

        const highlightItem = allItems.find(item => item.id === 1);
        const normalItems = allItems.filter(item => item.id !== 1);

        function renderHighlightCard() {
            if (!highlightItem) return;
            contentGrid.innerHTML = `
        <div class="card-highlight">
          <div class="card-media" data-id="${highlightItem.id}">
            <img src="${highlightItem.image}" alt="${highlightItem.title}" loading="lazy" />
            <div class="play-overlay">
              <i class="fa-solid fa-play-circle"></i>
            </div>
            <span class="badge-discount">${highlightItem.discount}</span>
            <span class="badge-stock"><i class="fa-solid fa-circle" style="color:#fbbf24;font-size:6px;margin-right:4px;"></i> ${highlightItem.stock} left</span>
            <span class="highlight-badge">⭐ DESTAQUE</span>
          </div>
          <div class="card-body">
            <div class="title-row">
              <h3>${highlightItem.title}</h3>
              <span class="discount-text">${highlightItem.discount}</span>
            </div>
            <div class="stats">
              <span><i class="fa-solid fa-shopping-bag"></i> ${highlightItem.purchases} purchases</span>
            </div>
            <p class="description">${highlightItem.description}</p>
            <div class="features">
              ${highlightItem.features.map(f => `<span><i class="fa-solid fa-circle"></i> ${f}</span>`).join('')}
            </div>
            <div class="price-row">
              <span class="original">${highlightItem.originalPrice}</span>
              <span class="current">${highlightItem.price}</span>
            </div>
            <div class="actions">
              <button class="btn btn-preview" data-id="${highlightItem.id}">
                <i class="fa-solid fa-play"></i> PREVIEW
              </button>
              <button class="btn btn-buy" data-id="${highlightItem.id}">
                <i class="fa-brands fa-telegram"></i> BUY NOW ${highlightItem.price}
              </button>
            </div>
          </div>
        </div>
      `;
        }

        const shuffledNormals = shuffleArray([...normalItems]);

        function renderNormalCards(filter = '') {
            let filtered = shuffledNormals.filter(item =>
                item.title.toLowerCase().includes(filter.toLowerCase())
            );

            normalGrid.innerHTML = filtered.map((item, index) => `
          <div class="card" style="animation-delay:${(index % 12) * 0.03}s" data-title="${item.title.toLowerCase()}">
            <div class="card-media" data-id="${item.id}">
              <img src="${item.image}" alt="${item.title}" loading="lazy" />
              <div class="play-overlay">
                <i class="fa-solid fa-play-circle"></i>
              </div>
              <span class="badge-discount">${item.discount}</span>
              <span class="badge-stock"><i class="fa-solid fa-circle" style="color:#fbbf24;font-size:6px;margin-right:4px;"></i> ${item.stock} left</span>
            </div>
            <div class="card-body">
              <div class="title-row">
                <h3>${item.title}</h3>
                <span class="discount-text">${item.discount}</span>
              </div>
              <div class="stats">
                <span><i class="fa-solid fa-shopping-bag"></i> ${item.purchases} purchases</span>
              </div>
              <p class="description">${item.description}</p>
              <div class="features">
                ${item.features.map(f => `<span><i class="fa-solid fa-circle"></i> ${f}</span>`).join('')}
              </div>
              <div class="price-row">
                <span class="original">${item.originalPrice}</span>
                <span class="current">${item.price}</span>
              </div>
              <div class="actions">
                <button class="btn btn-preview" data-id="${item.id}">
                  <i class="fa-solid fa-play"></i> PREVIEW
                </button>
                <button class="btn btn-buy" data-id="${item.id}">
                  <i class="fa-brands fa-telegram"></i> BUY NOW ${item.price}
                </button>
              </div>
            </div>
          </div>
        `).join('');

            const totalFiltered = filtered.length;
            countDisplay.textContent = `${totalFiltered} ${totalFiltered === 1 ? 'title' : 'titles'}`;
        }

        // ============================================================
        // ===== SEARCH =====
        // ============================================================
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                renderNormalCards(e.target.value);
            });
        }

        // ============================================================
        // ===== MODAL CORRIGIDO - SEM ERROS =====
        // ============================================================
        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modalClose');
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalOriginal = document.getElementById('modalOriginal');
        const modalDesc = document.getElementById('modalDesc');
        const modalVideo = document.getElementById('modalVideo');
        const modalBuy = document.getElementById('modalBuy');
        let currentItem = null;
        let isVideoLoaded = false;

        function openModal(item) {
            currentItem = item;

            // Atualiza informações
            modalTitle.textContent = item.title;
            modalPrice.textContent = item.price;
            modalOriginal.textContent = item.originalPrice || item.originalPrice;
            modalDesc.textContent = item.description;

            // ===== RECARREGA O VÍDEO CORRETAMENTE =====
            // Pausa o vídeo atual
            modalVideo.pause();

            // Remove todas as fontes antigas
            while (modalVideo.firstChild) {
                modalVideo.removeChild(modalVideo.firstChild);
            }

            // Cria nova fonte
            const source = document.createElement('source');
            source.src = item.previewVideo || '';
            source.type = 'video/mp4';
            modalVideo.appendChild(source);

            // Recarrega o vídeo com um pequeno delay
            modalVideo.load();

            // Abre o modal
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';

            // Tenta dar play após carregar
            setTimeout(() => {
                modalVideo.play().catch(() => {
                    // Se não conseguir dar play, deixa o usuário clicar no play
                    console.log('Clique no play para reproduzir.');
                });
            }, 500);
        }

        function closeModal() {
            modal.classList.remove('open');
            modalVideo.pause();
            modalVideo.currentTime = 0;
            // Limpa a fonte para liberar memória
            while (modalVideo.firstChild) {
                modalVideo.removeChild(modalVideo.firstChild);
            }
            const source = document.createElement('source');
            source.src = '';
            source.type = 'video/mp4';
            modalVideo.appendChild(source);
            modalVideo.load();
            document.body.style.overflow = '';
            currentItem = null;
        }

        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
        });

        modalBuy.addEventListener('click', () => {
            if (currentItem) {
                getTelegramLink(currentItem.title, currentItem.price);
            }
        });

        // ============================================================
        // ===== EVENTOS =====
        // ============================================================
        function handleCardClick(e, gridElement) {
            const previewBtn = e.target.closest('.btn-preview');
            const buyBtn = e.target.closest('.btn-buy');
            const media = e.target.closest('.card-media');

            if (media && !e.target.closest('.btn')) {
                const id = parseInt(media.dataset.id);
                const item = allItems.find(i => i.id === id);
                if (item) openModal(item);
                return;
            }

            if (previewBtn) {
                const id = parseInt(previewBtn.dataset.id);
                const item = allItems.find(i => i.id === id);
                if (item) openModal(item);
                return;
            }

            if (buyBtn) {
                const id = parseInt(buyBtn.dataset.id);
                const item = allItems.find(i => i.id === id);
                if (item) {
                    (getTelegramLink(item.title, item.price));
                }
                return;
            }
        }

        contentGrid.addEventListener('click', (e) => handleCardClick(e, contentGrid));
        normalGrid.addEventListener('click', (e) => handleCardClick(e, normalGrid));

        // ============================================================
        // ===== INIT =====
        // ============================================================
        renderHighlightCard();
        renderNormalCards('');

// ============================================
// Botao flutuante do Telegram
// ============================================

        window.addEventListener("scroll", function() {

            const telegramBtn = document.getElementById("telegramBtn");

            if (window.scrollY > 150) {
                telegramBtn.classList.add("scrolled");
            } else {
                telegramBtn.classList.remove("scrolled");
            }

        });
