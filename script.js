document.addEventListener("DOMContentLoaded", () => {
  const messageLines = [
    "Anh yêu em",
    "Cảm ơn em đã đến bên anh",
    "Quan tâm chăm sóc và làm một ngày của anh thật đẹp",
    "Yêu Phanh ❤️"
  ];

  const messageContainer = document.getElementById('message');

  messageLines.forEach((line, index) => {
    const p = document.createElement('p');
    p.textContent = line;
    p.style.animationDelay = `${index * 1}s`;
    messageContainer.appendChild(p);
  });

  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

  setInterval(createHeart, 300);

  const fallingMessages = [
    "Chúc em ngày mới so lucky 🍀",
    "Em yêu anhhhh ❤️❤️❤️",
    "Cảm ơn em đã đến bên anh 💗",
    "Yêu em nhiều lắm 💘",
    "Em là món quà tuyệt vời nhất 🎁"
  ];

  function createFallingText() {
    const text = document.createElement("div");
    text.className = "falling-text";
    text.textContent = fallingMessages[Math.floor(Math.random() * fallingMessages.length)];
    text.style.left = Math.random() * 100 + "vw";
    text.style.animationDuration = (Math.random() * 3 + 4) + "s";
    text.style.fontSize = (Math.random() * 8 + 16) + "px";
    text.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 8000);
  }

  setInterval(createFallingText, 200);

  const imageSources = [
    "images/Love1.jpg",
    "images/Love2.jpg",
    "images/Love3.jpg"
  ];

  function createFallingImage() {
    const img = document.createElement('img');
    img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
    img.className = 'gallery-image';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.animationDuration = (Math.random() * 4 + 4) + 's';
    img.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 10000);
  }

  setInterval(() => {
    const count = Math.floor(Math.random() * 2) + 2;
    for (let i = 0; i < count; i++) {
      setTimeout(createFallingImage, i * 300);
    }
  }, 1200);
});
