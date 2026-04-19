document.addEventListener("DOMContentLoaded", () => {

let opened = new Set();
  
const smallQuotes = [
"You Came Into My Life When I Was At My Lowest…\nAnd Still You Chose To Stay.",
"I Hurt You With My Words…\nAnd Broke You Many Times…\nBut You Still Loved Me.",
"I Ignored You When You Needed Me…\nYou Waited Without Complaints…\nAnd Still Stayed By Me.",
"I Made You Wait For Me…\nWhile I Was Busy With The World…\nYet You Never Left.",
"Jab Main Toot Raha Tha…\nTab Tum Mujhe Sambhal Rahi Thi…\nAur Khud Chup Thi.",
"Tumne Sirf Thoda Sa Waqt Maanga…\nAur Main Woh Bhi Nahi De Paaya…\nPhir Bhi Tum Ruk Gayi.",
"Main Sabke Liye Online Tha…\nPar Tumhare Liye Hamesha Late…\nPhir Bhi Tumne Kuch Nahi Kaha.",
"Tumne Kabhi Shikayat Nahi Ki…\nBas Chup Chap Pyaar Kiya…\nAur Saath Nibhaya.",
"তুমি আমার জীবনে এসেছিলে তখন…\nযখন আমি একদম হারিয়ে গিয়েছিলাম…\nতবুও তুমি থেকে গেছো।",
"আমি তোমাকে কষ্ট দিয়েছি…\nতবুও তুমি আমাকে ভালোবেসে গেছো…\nএটাই সত্যিকারের ভালোবাসা।",
"তুমি শুধু একটু সময় চেয়েছিলে…\nআর আমি সেটাও দিতে পারিনি…\nতবুও তুমি রয়ে গেছো।",
"তবুও তুমি কখনো আমাকে ছেড়ে যাওনি…\nনীরবে পাশে থেকেছো…\nআমার সব ভুল সয়ে।",
"Alhamdulillah…\nAllah Sent You Into My Life…\nAs My Peace.",
"InshaAllah…\nOne Day I’ll Hold You Close…Forever."
];

const bigLoveQuote = `You Came Into My Life When I Was At My Lowest, When I Was Broken And Lost, And Even Though I Didn’t Treat You The Way You Deserved, You Still Stayed By My Side…

I Told You I Would Come Back But Chose The World Over You, And Still You Never Left…

Alhamdulillah Allah Sent You As A Blessing I Didn’t Deserve, And Today You Are My Peace, My Happiness, My Dua…`;

/* SAFE OPEN FUNCTION */
function handleOpen(el) {
  const id = parseInt(el.dataset.id) - 1;
  if (!smallQuotes[id]) return;

  opened.add(id);
  openPopup(smallQuotes[id]);
}

/* SMALL LETTERS */
document.querySelectorAll(".small").forEach(el => {

  /* CLICK (PC) */
  el.addEventListener("click", () => handleOpen(el));

  /* TOUCH (MOBILE) */
  el.addEventListener("touchstart", (e) => {
    e.preventDefault();   // prevents ghost click
    handleOpen(el);
  }, { passive: false });

});

/* BIG LETTER */
const big = document.querySelector(".big");

if (big) {

  big.addEventListener("click", () => {
    openPopup(bigQuote);
  });

  big.addEventListener("touchstart", (e) => {
    e.preventDefault();
    openPopup(bigQuote);
  }, { passive: false });

}

});

/* POPUP */
function openPopup(text){
  const popup = document.getElementById("popup");
  const quote = document.getElementById("quoteText");

  popup.style.display = "flex";
  quote.innerText = text;
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}

/* PROPOSAL */
function showProposal(){
  document.getElementById("proposalPopup").style.display="flex";
}

function closeProposal(){
  document.getElementById("proposalPopup").style.display="none";
}

/* MUSIC */
function toggleMusic(){
  const m = document.getElementById("music");
  m.paused ? m.play() : m.pause();
}
