// ================================
// AUDIO & VIDEO ELEMENTS (DECLARE ONCE)
// ================================
const bgMusic = document.getElementById("bgMusic");
const letterMusic = document.getElementById("letterMusic");
const video = document.querySelector(".video video");

// ================================
// PASSWORD PROTECTION
// ================================
const correctPassword = "My luzzz"; // change this

setTimeout(() => {
  let entered = prompt("💖 Enter the secret password:");

  if (entered === correctPassword) {
    document.getElementById("soundGate").classList.remove("hidden");
    document.getElementById("lockOverlay").remove();
  } else {
    alert("❌ Wrong password!");
    document.body.innerHTML = "";
  }
}, 100);

// ================================
// BASIC HELPERS
// ================================
function openMessage(message) {
  alert(message);
}

function revealSecret() {
  document.getElementById("secret").style.display = "block";
}

// ================================
// SCROLL REVEAL
// ================================
const elements = document.querySelectorAll("section, .event, .polaroid");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// ================================
// TYPEWRITER LOVE LETTER
// ================================
const letterText = `
My dearest bhoomi / luzzz 🤍

I still remember 7th November 2023 —
the first time we spoke through texts.
I don’t remember the exact words I typed, or how the conversation even began…
but I remember how, from that very moment, something quietly started changing inside me.
Simple messages slowly turned into memories I now hold close to my heart ✨.

On 24th April 2024, I asked you for a snap for the first time 📸.
I never knew that a small request would become such a beautiful habit.
I’ve asked you for more than a hundred snaps since then — and every single time you sent one, my heart smiled.
Seeing your face, again and again, became my comfort 🥹💖.

10th February 2025 is a day I’ll always remember with a heavy heart.
I spoke about my old school crush, and when you teased me about it, I took it seriously.
My mood went off, and I didn’t behave the way I should have.
But you… you called me 3–4 times, even when you were at home, even when your parents were there.
I didn’t pick up even once — and that’s something I regret.
The effort you made that day showed me how much I mattered to you, and I will always carry that feeling with me 🤍.

Then came 14th February 2025 — your birthday 🎂💫.
The first birthday you celebrated with me, Sev, and your bhava.
The time we spent together, the pictures we took, the smile I saw on your face —
that smile is still saved in my heart, untouched by time 🥰📸.

On 24th February 2025, our first PU college function 🎉.
I still remember how I said I wouldn’t come…
and the moment you saw me at college, the way your expression changed —
that reaction meant more to me than anything else in that entire function 🥹❤️.

24th September 2025 — I asked you to make a heart shape with your hair and send me a video 💕.
That day, I was travelling home from college, tired and drained, sitting in a bus.
The moment I saw that video, all my tiredness disappeared.
I smiled like an idiot and didn’t even know how to react 🚌💖.

On 29th October 2025, you sent me a Bestestttfriend reel and asked if we should do it together 😂💞.
We still haven’t done it…
and there are two such reels waiting for us, patiently, just like some moments do 🤣✨.

And then… 16th November 2025, a random Sunday that became unforgettable 🎶🥹.
You sent me Paravashanadenu in your own voice — after I had asked you for so long.
From that very day, your voice became my ringtone…
so every call could begin with you 💖.

These aren’t just dates or events.
They are pieces of my heart, scattered across time — all connected to you 🤍.

Happy Birthday, bhoomi 🎂✨
May your life always be filled with the same warmth, love, and light that you’ve brought into mine.
No matter where life takes us, a part of my heart will always smile when it thinks of you 💕.

— Yours nayiiiiiiiiiii🐶, always 🕊️`;

let index = 0;

function typeWriter() {
  const textElement = document.getElementById("typeText");
  if (index < letterText.length) {
    textElement.innerHTML += letterText.charAt(index);
    index++;
    setTimeout(typeWriter, 23);
  }
}

// ================================
// LOVE LETTER (AUDIO CONTROL)
// ================================
function openLetter() {
  document.getElementById("letterPopup").style.display = "flex";

  // STOP BACKGROUND MUSIC
  bgMusic.pause();

  // PLAY LETTER MUSIC
  letterMusic.currentTime = 0;
  letterMusic.volume = 0.3;
  letterMusic.loop = true;
  letterMusic.play().catch(() => {});

  document.getElementById("typeText").innerHTML = "";
  index = 0;
  typeWriter();
}

function closeLetter() {
  document.getElementById("letterPopup").style.display = "none";

  // STOP LETTER MUSIC
  letterMusic.pause();
  letterMusic.loop = false;

  // RESUME BACKGROUND MUSIC
  bgMusic.play().catch(() => {});
}

// ================================
// SOUND GATE (USER GESTURE)
// ================================
function startExperience() {
  bgMusic.volume = 0.9;
  bgMusic.currentTime = 0;
  bgMusic.play().catch(() => {});
  document.getElementById("soundGate").remove();
}

// ================================
// VIDEO & BACKGROUND MUSIC SYNC
// ================================
if (video && bgMusic) {

  // VIDEO PLAY → STOP BG MUSIC
  video.addEventListener("play", () => {
    bgMusic.pause();
  });

  // VIDEO PAUSE → PLAY BG MUSIC
  video.addEventListener("pause", () => {
    if (!video.ended) {
      bgMusic.play().catch(() => {});
    }
  });

  // VIDEO END → PLAY BG MUSIC
  video.addEventListener("ended", () => {
    bgMusic.currentTime = 0;
    bgMusic.play().catch(() => {});
  });
}

// ================================
// CONFETTI EFFECT
// ================================
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360},100%,70%)`
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    c.y += 2;
    if (c.y > canvas.height) c.y = -10;
  });
}

function startConfetti() {
  createConfetti();
  setInterval(drawConfetti, 20);
}

const ending = document.querySelector(".ending");

window.addEventListener("scroll", () => {
  const pos = ending.getBoundingClientRect().top;
  if (pos < window.innerHeight) {
    startConfetti();
  }
}, { once: true });

// ================================
// FLOATING HEARTS
// ================================
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerHTML = Math.random() > 0.5 ? "🕯️" : "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 1200);
