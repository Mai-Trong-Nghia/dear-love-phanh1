const messages = [
  "Gửi đến emm Phanh ❤️",
  "Cảm ơn em đã đến bên anh 💖",
  "quan tâm và chăm sóc anh 💍",
  "emm là món quà tuyệt vời nhất ❤️",
  "Anh yêu emm❤️"
  "❤️❤️❤️❤️❤️❤️❤️❤️"
];

const colors = [
  "neon-red",
  "neon-green",
  "neon-blue",
  "neon-purple",
  "neon-yellow"
];

function createFallingText() {
  const text = document.createElement("p");
  text.textContent = messages[Math.floor(Math.random() * messages.length)];
  text.classList.add("falling-text");
  text.classList.add(colors[Math.floor(Math.random() * colors.length)]);
  text.style.left = Math.random() * 100 + "vw";
  document.getElementById("message").appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 6000);
}

function createFallingImage() {
  const imageNames = ["Love1.jpg", "Love2.jpg", "Love3.jpg"];
  const img = document.createElement("img");
  img.src = `images/${imageNames[Math.floor(Math.random() * imageNames.length)]}`;
  img.className = "gallery-image";
  img.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 6000);
}

function spawnAnimal() {
  const animal = document.createElement("img");
  animal.src = "images/cat.png"; // You can replace this with any image
  animal.classList.add("animal");
  document.getElementById("animal-container").appendChild(animal);

  setTimeout(() => {
    animal.remove();
  }, 20000);
}

setInterval(createFallingText, 500);
setInterval(createFallingImage, 800);
setInterval(spawnAnimal, 15000);
