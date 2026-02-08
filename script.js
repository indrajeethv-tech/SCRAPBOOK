// ================================
// AUDIO & VIDEO ELEMENTS (DECLARE ONCE)
// ================================
const bgMusic = document.getElementById("bgMusic");
const letterMusic = document.getElementById("letterMusic");
const video = document.querySelector(".video video");

// ================================
// PASSWORD PROTECTION
// ================================
const correctPassword = "Bhoomima@2007"; // change this

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
My dearest maa… luzzzz… Bhoomi 💗

I don’t know how to begin this letter…because some stories don’t start with words, they start with feelings 🌙

I still remember 7th November 2023 — 
the first time we spoke through texts.I don’t remember the exact words I typed, or how the conversation even began…
but I remember how, from that very moment, something quietly started changing inside me.
Simple messages slowly turned into memories I now hold close to my heart ✨.

On 24th April 2024, I asked you for a snap for the first time 📸.
I never knew that a small request would become such a beautiful habit.
I’ve asked you for more than a hundred snaps since then — and every single time you sent one, my heart smiled.
Seeing Myy luzzz face always made my day feel lighter. 🥹✨💖

10th February 2025 — is a day I’ll always remember with a heavy heart.
I told you about seeing my old school crush, and you teased me playfully 😅
But I took it the wrong way… my mood fell, my heart closed, and I went silent.
What I’ll never forget is you calling me again and again 📞🥺
Even when you were at home… even when your parents were there… you still tried.
I didn’t pick up even once — yet your effort that day made me realize how much I mattered to you 🤍
That meant more to me than you’ll ever know.

14th February 2025 — your birthday 🎂🌸
The first birthday of yours that I celebrated with you, Sev, and your Bhava.
That day lives rent-free in my heart 🥹
The time we spent, the photo we took 📷,
and that smile on your face —
That smile is still one of my favorite memories.
I swear, I’ve never forgotten it for even a second 💕

On 24th February 2025, our first PU college function 🎉.
I still remember how I said I wouldn’t come…
and the moment you saw me at college, the way your expression changed —
that reaction meant more to me than anything else in that entire function 🥹❤️.

24th September 2025 — I asked you to make a heart shape with your hair and send me a video 💕.
That day, I was travelling home from college, tired and drained, sitting in a bus.
The moment I saw that video, all my tiredness disappeared.
I smiled like an idiot and didn’t even know how to react 🚌💖.

26th October 2025 — after my cousin’s wedding 👰, and we didn’t talk properly for two days.
I was busy, exhausted, surrounded by people…
That night when I messaged you, you were angry and said, “Don’t talk to me.”
When I asked what I should do, you told me to do 100 buski and send a video immediately, or else you wouldn’t talk 😭
Even though I was with my cousins, I tried my best, did it, sent the video… 
Seeing you happy after that…
it made me realise every second worth it 💖
I still remember that moment clearly 🤍

On 29th October 2025, you sent me a Bestestttfriend reel and asked if we should do it together 😂💞.
We still haven’t done it…
and there are two such reels waiting for us, patiently, just like some moments do 🤣✨.

And then… 16th November 2025, a random Sunday that became unforgettable 🎶🥹.
You sent me Paravashanadenu in your own voice — after I had asked you for so long.
From that very day, your voice became my ringtone…
so every call could begin with you 💖.

I still smile when I think about how I used to scold you for academics—
not out of anger, but care 🥺
I took ma’am’s help, collected question papers before exam, and even asked her to give you marks…
and you just said, “Leave it, I know.”
That was so you 🤍

Those PU College breaks standing near the bio block during break time, just to see you,
our groups teasing us while we spoke in stolen moments 🤭

And those bus rides—me waiting to go in the same bus, travelling together, yet never talking 🤣
Silence, smiles, and feelings we never said out loud.

I still remember those days when you were excited just to talk to me.
Those days mean everything to me now 💭
I still remember how you used to get angry when I didn’t text or reply.
At that time, I didn’t understand it completely…
but now I do.
And maa… I really miss that bond 🫶

These aren’t just dates or events.
They are pieces of my heart, scattered across time — all connected to you 🤍.

Whenever I read our old texts or remember how we used to be,
my heart feels both happy and heavy at the same time.
I smile… and I miss that version of us more than I can say 🤍

I don’t know how you saw me,
but I know how my heart saw you.
You were never ordinary—
just a little too special to ever be just a friend 🤍

And now… here we are.
Not talking. Not sharing. Not laughing like before 😔
You promised so many times that you’d be with me…
and yet, somehow, we drifted apart again.
I don’t want to lose you, Bhoomi 🥺
If nothing else…
Please be with me at least as my best friend 🫶
I’m truly sorry if I’ve hurt you in any way 🙏
That was never my intention.

Okay… let’s keep all this aside now.
Please enjoy your day 🌸
Just know that somewhere with some hopes your nayiiii🐶, is waiting for you—quietly.

And before I end this letter…

Now you’ve chosen the harder path—taking a drop to chase your dream 🩺✨
I truly believe in you, maa.
You will achieve your goal 🤍

Happiest Birthday, maa 🎂💖
May your smile always stay the same, your heart always stay soft, and your life be filled with happiness, peace, and love 🌸💫
No matter where life takes us, a part of my heart will always smile when it thinks of you 💕, you’ll always be special to me, luzzzz 🤍🫶

Always yours 🫶,
— nayiiiiiiiiiii🐶`;

let index = 0;

function typeWriter() {
  const textElement = document.getElementById("typeText");
  if (index < letterText.length) {
    textElement.innerHTML += letterText.charAt(index);
    index++;
    setTimeout(typeWriter, 12); // Adjust typing speed here (10ms per character)
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

