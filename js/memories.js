const gallery = document.getElementById("gallery");

const modalBackdrop = document.getElementById("modalBackdrop");
const bigImg = document.getElementById("bigImg");

const items = [
  { type: "video", src: "assets/memoriesm1.mp4" },
  { type: "image", src: "assets/memoriesm2.jpeg" },
  { type: "video", src: "assets/memoriesm3.mp4" },
  { type: "image", src: "assets/memoriesm4.jpeg" },
  { type: "image", src: "assets/memoriesm5.jpeg" },
  { type: "image", src: "assets/memoriesm6.jpeg" },
  { type: "image", src: "assets/memoriesm7.jpeg" },
  { type: "image", src: "assets/memoriesm8.jpeg" },
  { type: "image", src: "assets/memoriesm9.jpeg" },
];

items.forEach(item => {

  if (item.type === "image") {

    const img = document.createElement("img");

    img.className = "photo";
    img.src = item.src;
    img.alt = "memory";

    img.addEventListener("click", () => {
      bigImg.src = item.src;
      modalBackdrop.style.display = "flex";
    });

    gallery.appendChild(img);

  } else if (item.type === "video") {

    const video = document.createElement("video");

    video.className = "photo";
    video.src = item.src;
    video.controls = true;
    video.playsInline = true;

    gallery.appendChild(video);

  }

});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
  }
});