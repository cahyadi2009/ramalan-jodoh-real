<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peramal Jodoh</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🔮 Peramal Jodoh 🔮</h1>
    <p>Masukkan nama kalian berdua untuk melihat ramalan cinta!</p>

    <div class="form">
      <input type="text" id="nama1" placeholder="Nama kamu">
      <input type="text" id="nama2" placeholder="Nama dia">
      <button onclick="ramalJodoh()">Ramal Sekarang 💘</button>
    </div>

    <div id="hasil" class="hasil"></div>
  </div>

  <footer>
    <p>❤️ Dibuat dengan cinta oleh Kamu ❤️</p>

    <a href="https://www.youtube.com/@NAMA_CHANNEL_KAMU" target="_blank" class="youtube-link">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo">
      <span>Dukung saya di YouTube!</span>
    </a>
  </footer>

  <script src="script.js"></script>
</body>
</html>


style.css
body {
  background: linear-gradient(135deg, #ff80bf, #ffb3d9);
  font-family: "Poppins", sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  width: 100%;
  max-width: 400px;
}

h1 {
  font-size: 1.8em;
  margin-bottom: 10px;
}

input {
  display: block;
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 1em;
  box-sizing: border-box;
}

button {
  background-color: #ff4da6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1em;
  width: 100%;
}

button:hover {
  background-color: #ff3385;
}

.hasil {
  margin-top: 20px;
  font-size: 1.1em;
  font-weight: bold;
  background: rgba(255,255,255,0.3);
  padding: 15px;
  border-radius: 10px;
}

footer {
  margin-top: 25px;
  text-align: center;
  font-size: 0.9em;
  opacity: 0.9;
}

.youtube-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 15px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

.youtube-link:hover {
  background: rgba(255, 255, 255, 0.35);
}

.youtube-link img {
  width: 70px;
  height: auto;
}

/* 📱 Responsif */
@media (max-width: 480px) {
  h1 {
    font-size: 1.5em;
  }

  .container {
    padding: 20px;
  }

  button, input {
    font-size: 0.95em;
  }

  .hasil {
    font-size: 1em;
  }

  .youtube-link img {
    width: 60px;
  }
}

script.js

function ramalJodoh() {
  const nama1 = document.getElementById("nama1").value.trim();
  const nama2 = document.getElementById("nama2").value.trim();
  const hasil = document.getElementById("hasil");

  if (!nama1 || !nama2) {
    hasil.textContent = "Masukkan kedua nama dulu ya 😘";
    return;
  }

  const persentase = Math.floor(Math.random() * 51) + 50;
  const pesan = [
    "Kalian ditakdirkan bersama! 💞",
    "Cinta kalian seperti kopi dan gula — manis tapi bikin deg-degan ☕💘",
    "Jodoh itu rahasia Tuhan, tapi kalian kelihatan cocok 😍",
    "Sepertinya kalian butuh lebih banyak quality time 💬",
    "Kalian pasangan sempurna di semesta paralel 🌌",
  ];

  const acakPesan = pesan[Math.floor(Math.random() * pesan.length)];

  hasil.innerHTML = `
    <p>❤️ ${nama1} & ${nama2} ❤️</p>
    <p>Kecocokan: ${persentase}%</p>
    <p>${acakPesan}</p>
  `;
}
