const giftImages = [
  "https://i.ibb.co/b5F85gSb/images-4.jpg",
  "https://i.ibb.co/Qv7p1qC0/2e418c7123034dd903e80aaae9b03735.jpg",
  "https://i.ibb.co/DfRNmtXs/images-3.jpg",
  "https://i.ibb.co/Fq6dMB1T/images.jpg",
  "https://i.ibb.co/Vcqvjn5n/images-1.jpg"
];

function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  document.getElementById("inputBox").style.display = "none";

  const msg = `Thank you, ${name}, for making my birthday even more special with your wishes! 🎉🎂`;
  const messageDiv = document.getElementById("message");
  messageDiv.innerText = msg;
  messageDiv.style.display = "block";

  document.getElementById("giftBox").style.display = "block";
}

function revealGift() {
  triggerConfetti();

  // Hide thank you message
  document.getElementById("message").style.display = "none";

  // Show message above gift
  const giftDiv = document.getElementById("giftImage");
  const imageUrl = giftImages[Math.floor(Math.random() * giftImages.length)];

  giftDiv.innerHTML = `
    <h3>Here’s a small gift from me to you! 🎁</h3>
    <img src="${imageUrl}" alt="Gift" />
  `;

  giftDiv.style.display = "block";
  document.getElementById("giftBox").style.display = "none";
}

function triggerConfetti() {
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.background = getRandomColor();
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 5000);
  }
}

function getRandomColor() {
  const colors = ["red", "blue", "yellow", "green", "orange", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}
