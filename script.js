// এলিমেন্টগুলো একবার সিলেক্ট করে রাখা (Caching DOM Elements)
const body = document.body;
const themeIcon = document.querySelector('#theme-btn span');
const langBtn = document.getElementById('langSwitch');
const navLinks = document.getElementById('navLinks');

// ১. থিম টগল লজিক (Simplified with Ternary Operator)
function toggleTheme() {
    const isLight = body.classList.toggle('light-mode');
    const theme = isLight ? 'light' : 'dark';
    
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
        themeIcon.innerText = isLight ? 'dark_mode' : 'light_mode';
    }
}

// ২. ল্যাঙ্গুয়েজ সুইচ (Using Class for display instead of inline style)
function switchLanguage() {
    const isBN = langBtn.innerText === "BN";
    const enNodes = document.querySelectorAll('.lang-en');
    const bnNodes = document.querySelectorAll('.lang-bn');

    enNodes.forEach(el => el.style.display = isBN ? 'none' : 'block');
    bnNodes.forEach(el => el.style.display = isBN ? 'block' : 'none');
    
    langBtn.innerText = isBN ? "EN" : "BN";
}

// ৩. মোবাইল মেনু টগল
const toggleMenu = () => navLinks?.classList.toggle('mobile-active');

// ৪. পেজ লোড হওয়ার পর ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', () => {
    // থিম রিকভারি
    if (localStorage.getItem('portfolio-theme') === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.innerText = 'dark_mode';
    }

    // প্রগ্রেস বার অ্যানিমেশন
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) bar.style.width = width;
    });
});

function startThreeImageSlider() {
    const images = document.querySelectorAll('.profile-slider .profile-pic');
    let currentIndex = 0;

    if (images.length === 0) return;

    setInterval(() => {
        // বর্তমান ছবি থেকে active ক্লাস সরিয়ে ফেলা
        images[currentIndex].classList.remove('active');

        // পরের ইনডেক্স সেট করা (৩টি শেষ হলে আবার ০ থেকে শুরু হবে)
        currentIndex = (currentIndex + 1) % images.length;

        // পরের ছবিতে active ক্লাস যোগ করা
        images[currentIndex].classList.add('active');
    }, 3000); // প্রতি ৩ সেকেন্ড পর পর ছবি পরিবর্তন
}

// পেজ লোড হলে ফাংশনটি রান করবে
document.addEventListener('DOMContentLoaded', startThreeImageSlider);

