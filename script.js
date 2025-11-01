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
