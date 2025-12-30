const text = document.getElementById("text");
const scene = document.getElementById("scene");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("music-btn");

let musicStarted = false;

/* 🚫 BAŞLANGIÇTA HER ŞEYİ GİZLE */
document.body.style.overflow = "hidden";
document.getElementById("top").style.display = "none";
document.getElementById("center").style.display = "none";
scene.style.display = "none";
musicBtn.style.display = "none";

/* ❤️ BAŞLAT OVERLAY */
const startOverlay = document.createElement("div");
startOverlay.style.position = "fixed";
startOverlay.style.inset = "0";
startOverlay.style.background = "rgba(0,0,0,0.85)";
startOverlay.style.display = "flex";
startOverlay.style.alignItems = "center";
startOverlay.style.justifyContent = "center";
startOverlay.style.zIndex = "9999";

/* 💖 ORTADAKİ ÇERÇEVE */
const startBox = document.createElement("div");
startBox.innerHTML = "💖 Başlat";
startBox.style.padding = "30px 60px";
startBox.style.border = "2px solid #ffd1dc";
startBox.style.borderRadius = "20px";
startBox.style.fontSize = "36px";
startBox.style.cursor = "pointer";
startBox.style.color = "#ffd1dc";
startBox.style.fontFamily = "Great Vibes, cursive";
startBox.style.background = "rgba(255,255,255,0.05)";
startBox.style.backdropFilter = "blur(6px)";
startBox.style.boxShadow = "0 0 25px rgba(255,182,193,0.4)";
startBox.style.transition = "transform 0.3s ease";

startBox.addEventListener("mouseenter", () => {
    startBox.style.transform = "scale(1.08)";
});
startBox.addEventListener("mouseleave", () => {
    startBox.style.transform = "scale(1)";
});

startOverlay.appendChild(startBox);
document.body.appendChild(startOverlay);

/* ▶️ BAŞLAT'A BASILINCA */
startBox.addEventListener("click", () => {

    startOverlay.remove();

    // 🔓 her şeyi geri aç
    document.body.style.overflow = "";
    document.getElementById("top").style.display = "";
    document.getElementById("center").style.display = "";
    musicBtn.style.display = "";

    startStory();
});

/* 🎬 ANA AKIŞ */
function startStory() {

    // 🎵 Müzik (kullanıcı etkileşimi sonrası garanti)
    bgMusic.volume = 0.4;
    bgMusic.play();
    musicStarted = true;

    // ❤️ isimler yavaş yavaş değişsin
    const words = ["EYLÜLÜM", "SEVGİLİM", "AŞKIM", "BİRTANEM"];
    let index = 0;

    const wordInterval = setInterval(() => {
        text.innerText = words[index];
        index++;

        if (index === words.length) {
            clearInterval(wordInterval);
            setTimeout(showScene, 2000);
        }
    }, 2500);
}

/* 🎥 SAHNEYİ GÖSTER */
function showScene() {

    document.getElementById("center").classList.add("hidden");

    scene.style.display = "flex";
    scene.classList.remove("hidden");
    scene.classList.add("fade-in");

    // ✍️ yazı efekti
    setTimeout(typeEffect, 3000);

    const letterEmoji = document.getElementById("letter-emoji");
    const letterText = document.getElementById("letter-text");

    // 💌 zarf gecikmeli gelsin
    setTimeout(() => {
        letterEmoji.style.display = "block";
    }, 7000);

    letterEmoji.addEventListener("click", () => {
        letterEmoji.style.display = "none";
        letterText.style.display = "block";
    });
}

/* 💖 KALP YAĞMURU */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart-fall";
    heart.innerText = ["❤️","💖","💘","💕"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.getElementById("hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 700);

/* ✍️ TYPEWRITER */
const message = "Bu site sadece sana ait… 💗";
let i = 0;

function typeEffect() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, 120);
    }
}

/* 🔊 SES BUTONU */
musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerText = "🔊";
    } else {
        bgMusic.pause();
        musicBtn.innerText = "🔈";
    }
});
