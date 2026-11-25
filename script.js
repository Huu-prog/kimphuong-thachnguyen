document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        vi: {
            language_switch: "Chuyển đổi ngôn ngữ",
            music_toggle: "Phát/Tạm dừng nhạc",
            cover_date: "17 tháng 1, 2027",
            hero_date: "17 . 1 . 2027",
            subtitle_date: "17. 1 . 2027",
            guest: "Quý Khách",
            earth_brown: "Nâu đất",
            wine_red: "Đỏ rượu vang",
            deep_red: "Đỏ trầm",
            footer_label: "Trân trọng cảm ơn",
            footer_thanks: "Xin chân thành cảm ơn sự hiện diện và những lời chúc phúc của quý khách.",
            thankyou_script: "Thank you",
            thankyou_title: "Xin chân thành cảm ơn",
            thankyou_text: "Chúng tôi rất mong được đón tiếp sự hiện diện quý báu của toàn thể quý vị khách quý trong ngày trọng đại và đặc biệt nhất này. Sự có mặt của quý vị là niềm vinh dự lớn lao, là minh chứng cho tình yêu thương cũng như sự chung vui, chia sẻ niềm hạnh phúc trong khoảnh khắc ý nghĩa nhất của cuộc đời chúng tôi.",
            calendar_month: "Tháng 1 / 2027",
            mon: "T2", tue: "T3", wed: "T4", thu: "T5", fri: "T6", sat: "T7", sun: "CN",
            event_time: " THỨ TƯ",
            month_1: "Tháng 1",
            year_2027: "Năm 2027",
            lunar_date: "(Tức ngày 10 tháng 12 năm Bính Ngọ)",
            directions: "Chỉ đường",
            from_bride_family: "Bên em",
            once_again: "Vẹn tròn yêu thương",
            // full_love: "Trọn yêu thương",
            cover_invite: "Thân mời",
            open_invite: "Mở thiệp",
            story: "Chúng tôi đã cùng nhau viết nên<br>câu chuyện tình yêu suốt những năm qua...<br>Và chương tiếp theo sẽ bắt đầu sau",
            wedding_day: "Ngày chung đôi",
            invite_intro: "Trân trọng kính mời tham dự buổi tiệc cưới<br>cùng gia đình chúng tôi",
            at_venue: "Tại địa điểm:",
            venue_title: " Tư Gia",
            venue_address: "Khóm 4, Phường Nguyệt Hóa, Vĩnh Long",
            countdown: "Đếm ngược",
            days: "Ngày", hours: "Giờ", minutes: "Phút", seconds: "Giây",
            moments: "Những khoảnh khắc",
            moments_sub: "Đong đầy yêu dấu",
            guestbook: "Sổ lưu bút",
            suggest_wish: "Gợi ý lời chúc",
            send_wish: "GỬI LỜI CHÚC",
            name_placeholder: "Nhập tên*",
            wish_placeholder: "Nhập lời chúc*",
            previous: "TRƯỚC",
            next: "SAU",
            today: "Hôm nay",
            wish_1: "Chúc hai bạn trăm năm hạnh phúc, mãi yêu thương nhau như ngày đầu nhé!",
            wish_2: "Chúc hai cháu xây dựng một mái ấm thật đầm ấm, sớm có tin vui.",
            close: "ĐÓNG"
        },
        km: {
            language_switch: "ប្តូរភាសា",
            music_toggle: "ចាក់/ផ្អាកតន្ត្រី",
            cover_date: "17 ខែ 1, 2027",
            hero_date: "17 . 1 . 2027",
            subtitle_date: "17 . 1 . 2027",
            guest: "ភ្ញៀវរួម",
            earth_brown: "ពណ៌តែន",
            wine_red: "ពណ៌ស្រាក្រហម",
            deep_red: "ពណ៌ក្រហមចាស់",
            footer_label: "សូមថ្លែងអំណរគុណ",
            footer_thanks: "សូមអរគុណសម្រាប់វត្តមាន និងពាក្យសិរីសួស្តី!",
            thankyou_script: "អរគុណ",
            thankyou_title: "សូមថ្លែងអំណរគុណ",
            thankyou_text: "យើងខ្ញុំសង្ឃឹមយ៉ាងមុតមាំថានឹងបានទទួលស្វាគមន៍វត្តមានដ៏ឧត្តុង្គឧត្តមរបស់ភ្ញៀវកិត្តិយសទាំងអស់ក្នុងថ្ងៃដ៏ពិសេសបំផុតនេះ។ វត្តមានរបស់លោក លោកស្រី អ្នកនាង កញ្ញា គឺជាកិត្តិយសដ៏ធំធេង និងជាសក្ខីភាពនៃសេចក្តីស្រឡាញ់ ព្រមទាំងការចូលរួមចែករំលែកនូវសុភមង្គលក្នុងពេលវេលាដ៏មានអត្ថន័យបំផុតរបស់យើងខ្ញុំ។",
            calendar_month: "ខែ 1 / 2027",
            mon: "ច័ន", tue: "អង្គារ", wed: "ពុធ", thu: "ព្រហស្បត៌", fri: "សុក្រ", sat: "សៅវ៍", sun: "អាទិត្យ",
            event_time: " ថ្ងៃអាទិត្យ",
            month_1: "ខែ មករា",
            year_2027: "ឆ្នាំ 2027",
            lunar_date: "(ថ្ងៃអាទិត្យ ១០កើត ខែបុស្ស ឆ្នាំ មមី អដ្ឋស័ក ព.ស ២០៧០)",
            directions: "មើលផ្លូវ",
            from_bride_family: "ក្បែរអូន",
            once_again: "ស្នេហាដ៏ពេញលេញ",
            // full_love: "",
            cover_invite: "សូមអញ្ជើញ",
            open_invite: "បើកសំបុត្រ",
            story: "យើងខ្ញុំបានសរសេររឿងរ៉ាវស្នេហារជាមួយគ្នាជាច្រើនឆ្នាំ<br>ហើយជំពូកបន្ទាប់នឹងចាប់ផ្តើម",
            wedding_day: "ថ្ងៃរៀបអាពាហ៍ពិពាហ៍",
            invite_intro: "ដោយស្មោះស្មើ សូមគោរពអញ្ជើញមកចូលរួមពិធីមង្គលការជាមួយគ្រួសារយើងខ្ញុំ",
            at_venue: "នៅ:",
            venue_title: "គេហដ្ឋាន",
            venue_address: " មហាវិថី ហ្ងៀងដាង,សង្កាត់ ហ្វៀតហ្វា ,<br>ខេត្ត វិញឡុង",
            countdown: "រាប់ថយក្រោយ",
            days: "ថ្ងៃ", hours: "ម៉ោង", minutes: "នាទី", seconds: "វិនាទី",
            moments: "ពេលវេលាស្នេហា",
            moments_sub: "ស្មារតីមើលទៅជាស្នេហា",
            guestbook: "សៀវភៅអំណរទាន",
            suggest_wish: "យោបល់ពិធី",
            send_wish: "ផ្ញើពាក្យសម្ដី",
            name_placeholder: "បញ្ចូលឈ្មោះ*",
            wish_placeholder: "បញ្ចូលពាក្យជូនពរ*",
            previous: "មុន",
            next: "បន្ទាប់",
            today: "ថ្ងៃនេះ",
            wish_1: "សូមជូនពរ​ទៅ​កូន​ទាំង​ពីរ សុខភាព និងស្នេហាអស់កល្បជានិច្ច!",
            wish_2: "សូមជូនពរឲ្យកូនទាំងពីរបង្កើតគ្រួសារដ៏រីករាយ និងបានសំណាងល្អ!",
            close: "បិទ"
        }
    };

    let currentLanguage = "vi";

    const latinDigits = "0123456789";
    const khmerDigits = "០១២៣៤៥៦៧៨៩";

    function convertDigits(root, isKhmer) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue || !/[0-9០-៩]/.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
                const parent = node.parentElement;
                if (parent && parent.closest("script, style")) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach((node) => {
            if (isKhmer) {
                if (node._latinDigitText === undefined) node._latinDigitText = node.nodeValue;
                node.nodeValue = node.nodeValue.replace(/[0-9]/g, (digit) => khmerDigits[latinDigits.indexOf(digit)]);
            } else if (node._latinDigitText !== undefined) {
                node.nodeValue = node.nodeValue.replace(/[០-៩]/g, (digit) => latinDigits[khmerDigits.indexOf(digit)]);
                node._latinDigitText = undefined;
            }
        });
    }

    function setLanguage(language) {
        currentLanguage = language;
        const isKhmer = language === "km";
        document.documentElement.lang = isKhmer ? "km" : "vi";
        document.title = isKhmer
            ? "សំបុត្រមង្គលការ - ថាច់ ង្វៀន និង សឺន ធី គីម ភឿង"
            : "Thiệp Cưới -Kim Phượng  &  Thạch Nguyên";

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (key === "guest" && element.dataset.guestName) return;
            element.innerHTML = translations[language][key];
            element.classList.toggle("is-khmer", isKhmer);
            if (isKhmer) {
                element.setAttribute("lang", "km");
            } else {
                element.removeAttribute("lang");
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            element.placeholder = translations[language][element.dataset.i18nPlaceholder];
            element.classList.toggle("is-khmer", isKhmer);
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
            element.setAttribute("aria-label", translations[language][element.dataset.i18nAria]);
        });

        document.querySelectorAll("[data-i18n-title]").forEach((element) => {
            element.title = translations[language][element.dataset.i18nTitle];
        });

        document.querySelectorAll(".language-vi").forEach((element) => {
            element.hidden = isKhmer;
        });
        document.querySelectorAll(".language-km").forEach((element) => {
            element.hidden = !isKhmer;
        });

        document.querySelectorAll(".language-option").forEach((button) => {
            const active = button.dataset.language === language;
            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        convertDigits(document.querySelector(".pnr-root") || document.body, isKhmer);
        convertDigits(document.querySelector(".pnr-cover") || document.body, isKhmer);
    }

    document.querySelectorAll(".language-option").forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.language));
    });

    // 0. Màn hình bìa phủ & tên khách mời qua URL (?to=...)
    const coverOverlay = document.getElementById("cover-overlay");
    const openInviteBtn = document.getElementById("open-invite-btn");
    const bgMusic = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");
    const musicBars = document.getElementById("music-bars");
    let isPlaying = false;

    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to") || params.get("khach");
    if (guestName && document.getElementById("cover-guest-name")) {
        const coverGuestName = document.getElementById("cover-guest-name");
        coverGuestName.dataset.guestName = "true";
        coverGuestName.textContent = guestName;
    }

    openInviteBtn.addEventListener("click", () => {
        coverOverlay.classList.add("hide");
        document.body.classList.remove("locked");

        // Phát nhạc nền khi bấm Mở thiệp
        bgMusic.play().then(() => {
            musicBars.classList.add("playing");
            isPlaying = true;
        }).catch(() => {});

        setTimeout(() => {
            coverOverlay.style.display = "none";
            const root = document.documentElement;
            const page = document.scrollingElement || document.documentElement;
            const startPosition = page.scrollTop;
            const endPosition = Math.max(0, page.scrollHeight - window.innerHeight);
            const distance = endPosition - startPosition;
            const duration = Math.abs(distance) / (window.innerHeight * 0.2) * 1000;

            if (distance > 0) {
                const originalScrollBehavior = root.style.scrollBehavior;
                root.style.scrollBehavior = "auto";
                const startTime = performance.now();
                let frameId;
                const stopAutoScroll = () => {
                    cancelAnimationFrame(frameId);
                    root.style.scrollBehavior = originalScrollBehavior;
                    window.removeEventListener("touchstart", stopAutoScroll);
                    window.removeEventListener("wheel", stopAutoScroll);
                    window.removeEventListener("pointerdown", stopAutoScroll);
                    window.removeEventListener("keydown", stopAutoScroll);
                };
                const scrollDown = (currentTime) => {
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    page.scrollTop = startPosition + distance * progress;
                    if (progress < 1) {
                        frameId = requestAnimationFrame(scrollDown);
                    } else {
                        stopAutoScroll();
                    }
                };
                window.addEventListener("touchstart", stopAutoScroll, { passive: true });
                window.addEventListener("wheel", stopAutoScroll, { passive: true });
                window.addEventListener("pointerdown", stopAutoScroll, { passive: true });
                window.addEventListener("keydown", stopAutoScroll);
                frameId = requestAnimationFrame(scrollDown);
            }
        }, 760);
    });

    // 1. Điều khiển nhạc nền
    musicBtn.addEventListener("click", () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBars.classList.remove("playing");
            isPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicBars.classList.add("playing");
                isPlaying = true;
            }).catch(() => {});
        }
    });

    // 2. Scroll Reveal
    const revealEls = document.querySelectorAll(".pnr-reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("shown");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach((el) => observer.observe(el));

 // 3. Đồng hồ đếm ngược đến 17/01/2027 07:00 (GMT+7)
const targetTime = new Date("2027-01-17T07:00:00+07:00").getTime();

function updateCountdown() {
    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const diff = Math.max(0, targetTime - Date.now());

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(d).padStart(2, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minsEl.textContent = String(m).padStart(2, "0");
    secsEl.textContent = String(s).padStart(2, "0");

    const lang = typeof currentLanguage !== "undefined" ? currentLanguage : "vi";
    const container = secsEl.parentElement?.parentElement;
    if (lang === "km" && container && typeof convertDigits === "function") {
        convertDigits(container, true);
    }

    if (diff === 0 && typeof countdownTimer !== "undefined") {
        clearInterval(countdownTimer);
    }
}

updateCountdown();
const countdownTimer = setInterval(updateCountdown, 1000);

    // 4. 3D Perspective Carousel (Xoay 3D 9 ảnh mượt mà, không giật scroll trang)
    const stage = document.getElementById("carousel-stage");
    const slides = Array.from(document.querySelectorAll(".c3d-slide"));
    const counterEl = document.getElementById("c3d-counter");
    const prevBtn = document.getElementById("c3d-prev");
    const nextBtn = document.getElementById("c3d-next");

    if (stage && slides.length > 0) {
        let currentIndex = 0;
        const total = slides.length;
        let autoInterval;

        function renderCarousel() {
            slides.forEach((slide, i) => {
                let offset = i - currentIndex;
                if (offset > Math.floor(total / 2)) offset -= total;
                if (offset < -Math.floor(total / 2)) offset += total;

                const absOffset = Math.abs(offset);
                const translateX = offset * 58;
                const translateZ = -absOffset * 140;
                const rotateY = offset * 40;
                const scale = offset === 0 ? 1 : Math.max(0.7, 0.88 - absOffset * 0.08);
                const opacity = offset === 0 ? 1 : Math.max(0.25, 0.8 - absOffset * 0.22);
                const zIndex = 100 - absOffset;

                slide.style.transform = `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
                slide.style.opacity = opacity;
                slide.style.zIndex = zIndex;
            });

            counterEl.textContent = `${currentIndex + 1} / ${total}`;
            if (currentLanguage === "km") convertDigits(counterEl, true);
        }

        function goNext() {
            currentIndex = (currentIndex + 1) % total;
            renderCarousel();
        }

        function goPrev() {
            currentIndex = (currentIndex - 1 + total) % total;
            renderCarousel();
        }

        slides.forEach((slide, idx) => {
            slide.addEventListener("click", () => {
                if (idx === currentIndex) {
                    openLightbox(slide.querySelector("img").src);
                } else {
                    currentIndex = idx;
                    renderCarousel();
                    resetAuto();
                }
            });
        });

        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            goPrev();
            resetAuto();
        });

        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            goNext();
            resetAuto();
        });

        let startX = 0;
        stage.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            clearInterval(autoInterval);
        }, { passive: true });

        stage.addEventListener("touchend", (e) => {
            const diffX = startX - e.changedTouches[0].clientX;
            if (Math.abs(diffX) > 35) {
                diffX > 0 ? goNext() : goPrev();
            }
            resetAuto();
        });

        function startAuto() {
            autoInterval = setInterval(goNext, 3800);
        }

        function resetAuto() {
            clearInterval(autoInterval);
            startAuto();
        }

        renderCarousel();
        startAuto();
    }

    // 5. Sổ lưu bút & Nút gợi ý lời chúc nhanh
const GUESTBOOK_API_URL = "https://script.google.com/macros/s/AKfycbxZnQTOfIyOvS4sAp3ZEOHVKwkVWGPlHECjiunPqDTZTPeERIPXLuMgyJpgDN3h1wJhFA/exec";

const sampleWishes = {
    vi: [
        "Chúc hai bạn trăm năm hạnh phúc, bạc đầu nghĩa phu thê!",
        "Chúc mừng hạnh phúc tân lang tân nương, sớm sinh quý tử nhé!",
        "Chúc hai bạn mãi nắm tay nhau đi qua mọi chặng đường bình an và viên mãn!"
    ],
    km: [
        "សូមជូនពរឲ្យទាំងពីរសប្បាយចិត្ត និងស្នេហាអស់កល្បជានិច្ច!",
        "សូមមង្គលការមានសុភមង្គល និងបានសំណាងល្អ!",
        "សូមជូនពរឲ្យទាំងពីរដើរជាមួយគ្នាតลอดទីលានជីវិត!"
    ]
};

function escapeHTML(str) {
    return String(str ?? "").replace(/[&<>'"]/g, t => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    }[t]));
}

function createWishCardElement(name, message) {
    const card = document.createElement("div");
    card.className = "gb-card";
    card.style.borderRadius = "0";
    card.innerHTML = `
        <div class="gb-card-top">
            <strong>${escapeHTML(name)}</strong>
        </div>
        <p>${escapeHTML(message)}</p>
    `;
    return card;
}

function isGuestbookConfigured() {
    return Boolean(GUESTBOOK_API_URL) && !GUESTBOOK_API_URL.includes("DAN_LINK_WEB_APP");
}

async function loadSavedWishes() {
    const list = document.getElementById("gb-list");
    if (!list || !isGuestbookConfigured()) return;

    try {
        const res = await fetch(GUESTBOOK_API_URL, { method: "GET" });
        const data = await res.json();
        if (data && data.ok && Array.isArray(data.items) && data.items.length > 0) {
            list.innerHTML = "";
            data.items.forEach((item) => {
                if (!item || !item.name || !item.message) return;
                list.appendChild(createWishCardElement(item.name, item.message));
            });
        }
    } catch (err) {
        // Giữ nguyên danh sách đang hiển thị nếu gặp sự cố mạng
    }
}

document.getElementById("wish-suggest-btn")?.addEventListener("click", () => {
    const lang = typeof currentLanguage !== "undefined" ? currentLanguage : "vi";
    const wishes = sampleWishes[lang] || sampleWishes.vi;
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    const msgEl = document.getElementById("gb-msg");
    if (msgEl) msgEl.value = randomWish;
});

document.getElementById("wish-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = document.getElementById("gb-name");
    const msgInput = document.getElementById("gb-msg");
    const list = document.getElementById("gb-list");
    const submitBtn = form.querySelector('button[type="submit"]');

    const cleanName = nameInput ? nameInput.value.trim() : "";
    const cleanMsg = msgInput ? msgInput.value.trim() : "";
    if (!cleanName || !cleanMsg || !list) return;

    if (!isGuestbookConfigured()) {
        list.prepend(createWishCardElement(cleanName, cleanMsg));
        nameInput.value = "";
        msgInput.value = "";
        return;
    }

    const oldBtnText = submitBtn ? submitBtn.textContent : "";
    const lang = typeof currentLanguage !== "undefined" ? currentLanguage : "vi";
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = lang === "km" ? "កំពុងផ្ញើ..." : "ĐANG GỬI...";
    }

    try {
        const res = await fetch(GUESTBOOK_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
                name: cleanName,
                message: cleanMsg
            })
        });
        const data = await res.json();

        if (data && data.ok) {
            list.prepend(createWishCardElement(cleanName, cleanMsg));
            nameInput.value = "";
            msgInput.value = "";
        }
    } catch (err) {
        // Có thể hiển thị thông báo lỗi riêng nếu bạn có thẻ báo trạng thái
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = oldBtnText;
        }
    }
});

// Tự động tải lời chúc đã lưu khi mở trang
loadSavedWishes();

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t]));
    }
});


function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}