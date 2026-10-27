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

                    <svg class="pay-icon" viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
                        <circle cx="12" cy="12" r="12" fill="#ffffff"/>
                        <path fill="#003087" d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.739-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                    </svg>

                    <span>PayPal</span>

                </button>


                <button class="payment-option crypto"
                    data-method="Crypto">

                    <svg class="pay-icon" viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
                        <circle cx="12" cy="12" r="12" fill="#F7931A"/>
                        <path fill="#ffffff" d="M15.9 10.3c-.2-1.3-1.3-2-2.7-2.4l.6-2.3-1.4-.35-.55 2.2c-.36-.09-.73-.17-1.1-.26l.56-2.22-1.4-.35-.6 2.3c-.3-.07-.6-.14-.9-.21v-.01l-1.93-.48-.37 1.48s1.03.24 1 .25c.56.14.66.51.65.8l-.65 2.6c.04.01.09.02.14.04l-.14-.04-.9 3.6c-.07.17-.24.42-.63.33.01.02-1-.25-1-.25L5.3 16.98l1.83.46c.34.09.68.18 1 .26l-.6 2.4 1.4.35.6-2.3c.38.1.76.2 1.13.29l-.6 2.36 1.4.35.6-2.4c2.4.45 4.2.27 4.95-1.9.6-1.73-.03-2.73-1.3-3.38.93-.22 1.63-.83 1.82-2.08zm-3.24 4.53c-.43 1.73-3.35.79-4.3.56l.76-3.06c.95.24 4.02.7 3.54 2.5zm.43-4.56c-.4 1.57-2.83.77-3.62.57l.7-2.79c.79.2 3.34.56 2.92 2.22z"/>
                    </svg>

                    <span>Crypto</span>

                </button>


                <button class="payment-option binance"
                    data-method="Binance Gift Card">

                    <svg class="pay-icon" viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
                        <circle cx="12" cy="12" r="12" fill="#ffffff"/>
                        <g fill="#F3BA2F">
                            <path d="M12 5.6l2.4 2.42-2.4 2.42L9.6 8.02z"/>
                            <path d="M7.06 10.14L9.46 12.56 7.06 14.98 4.66 12.56z"/>
                            <path d="M16.94 10.14l2.4 2.42-2.4 2.42-2.4-2.42z"/>
                            <path d="M12 14.68l2.4 2.42L12 19.52l-2.4-2.42z"/>
                            <path d="M9.66 10.22l2.34-2.36 2.34 2.36-2.34 2.36z"/>
                        </g>
                    </svg>

                    <span>Binance Gift Card</span>

                </button>


                <button class="payment-option cashapp"
                    data-method="Cash App">

                    <svg class="pay-icon" viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
                        <circle cx="12" cy="12" r="12" fill="#ffffff"/>
                        <path fill="#00D632" d="M15.1 13.9c-.16.2-.4.36-.72.44l-.24.06c-.18.04-.26.08-.26.17 0 .12.14.24.44.24.42 0 .8-.14 1.1-.4.1-.1.2-.06.26.04l.4.58c.06.08.02.2-.06.3-.42.4-.94.6-1.58.6-.7 0-1.2-.36-1.2-.92 0-.3.14-.56.44-.72l.3-.16c.2-.1.28-.16.28-.25 0-.12-.12-.2-.32-.2-.26 0-.54.1-.78.3-.08.08-.18.04-.24-.04l-.4-.56c-.06-.1-.02-.2.06-.3.4-.4.9-.6 1.5-.6.64 0 1.06.34 1.06.86 0 .26-.12.48-.4.64l-.2.1zM9.3 9.2H7.6c-.14 0-.24.1-.26.24L6.2 14.6c-.02.1.06.2.16.2h.66c.1 0 .2-.08.22-.18l.3-1.5c.02-.12.12-.2.22-.2h.9c1.1 0 1.9-.44 2.14-1.7.02-.06.02-.12.02-.18 0-.7-.36-1.02-.9-1.02-.56 0-.94.24-1.02.96zm.16 1.7c-.08.56-.46.72-.98.72h-.4l.28-1.36c.02-.1.1-.16.2-.16h.2c.42 0 .66.16.7.6 0 .02 0 .1 0 .2z"/>
                    </svg>

                    <span>Cash App</span>

                </button>

                 <button class="payment-option stripe"
                    data-method="Stripe">

                    <svg class="pay-icon" viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
                        <circle cx="12" cy="12" r="12" fill="#ffffff"/>
                        <path fill="#635BFF" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>

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
                        `📦 Content/product: ${title}\n` +
                        `💰 Price: ${price}\n` +
                        `I'll pay with ${method}.`;

                    const telegramURL =
                        `https://telegram.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;

                    // escolher o método já conduz ao Telegram (nova aba, dentro do gesto do utilizador)
                    window.open(telegramURL, "_blank", "noopener");
                    overlay.remove();
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
