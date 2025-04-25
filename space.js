const canvas = document.getElementById("space-bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const stars = [];
const starCount = 1000;

for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width - canvas.width / 2,
    y: Math.random() * canvas.height - canvas.height / 2,
    z: Math.random() * canvas.width,
    radius: Math.random() * 1.2 + 0.1
  });
}


function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let star of stars) {
    star.z -= 2;
    if (star.z <= 0) {
      star.x = Math.random() * canvas.width - canvas.width / 2;
      star.y = Math.random() * canvas.height - canvas.height / 2;
      star.z = canvas.width;
    }

    const k = 600 / star.z;
    const x = star.x * k + centerX;
    const y = star.y * k + centerY;

    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) continue;

    ctx.beginPath();
    ctx.arc(x, y, star.radius * k, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();
