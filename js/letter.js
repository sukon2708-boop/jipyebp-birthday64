const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันวันเกิดน้าาา ขอให้แฟนเค้ามีฟามมสุขมากๆน้าาครับบคิดสิ่งใดก็ขอให้สมปราถนา   
ปีนี้เป็นปีแรกกที่ได้อวยพรวันเกิดให้น้องไบร์ท ก็จะตั้งตารอวันเกิดน้องไบร์ททุกๆปีนะครับ 
อยากจะอยู่ happy birthday ทุกๆปีเลย คิดถึง ถ้าขอได้ก็จะขอให้เรามีกันและกันอยู่ด้วยกันไปนานๆครับ 
ไม่เคยทำแบบบนี้ให้ ใครเลย วันที่ไม่มีใครยังมีแฟนนคนนี้เสมอนะรักน้องไบร์ทนะครับ ที่พูดคำว่ารักไม่ได้พูดเล่นๆนะครับ มาจากใจจริงๆ🤍🤍

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
