const content = document.getElementById("content")
const title_content = document.getElementById("title-content");
const desc_text = document.getElementById("desc-text");
const box = document.getElementById("box")
const desc_img = document.getElementById("desc-img");
const button_group = document.getElementById("button-group");
const button_true = document.getElementById("button-true");
const button_false = document.getElementById("button-false");

button_true.addEventListener('click', ()=> {
  desc_text.innerHTML = "Anda adalah seorang Teknisi";
  title_content.innerHTML = "Anda Berbohong!";
  box.style.backgroundColor = "#E12E2E";
  desc_img.src = "assets/teknisi.svg";
  button_group.style.display = 'none';
});

button_false.addEventListener('click', ()=> {
  desc_text.innerHTML = "Anda adalah seorang Mahasiswa";
  title_content.innerHTML = "Anda Benar!";
  box.style.backgroundColor = "#6FD240"
  desc_img.src = "assets/mahasiswa.svg";
  button_group.style.display = 'none';
});
