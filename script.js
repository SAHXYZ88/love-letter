document.addEventListener("DOMContentLoaded", () => {

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

const bigLoveQuote = `You Came Into My Life When I Was At My Lowest, When I Was Broken And Lost...`;

document.querySelectorAll(".small").forEach(el => {
  el.addEventListener("click", () => {
    const id = parseInt(el.getAttribute("data-id")) - 1;
    openPopup(smallQuotes[id]);
  });
});

document.querySelector(".big").addEventListener("click", () => {
  openPopup(bigLoveQuote);
});

});

// POPUP
function openPopup(text){
  if (!text) return;

  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  const formatted = text.replace(/\n/g,"<br>");

  document.getElementById("quoteText").innerHTML = formatted;
  document.getElementById("bgText").innerHTML = formatted; // FIXED
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}

// MUSIC
function toggleMusic(){
  const music=document.getElementById("music");
  if(music.paused) music.play().catch(()=>{});
  else music.pause();
}

// PROPOSAL
function showProposal(){
  document.getElementById("proposalPopup").style.display="flex";
}
function closeProposal(){
  document.getElementById("proposalPopup").style.display="none";
}

// FLOWERS
const flowers=["🌸","🌹","🌷"];

setInterval(()=>{
  let f=document.createElement("div");
  f.className="flower";
  f.innerText=flowers[Math.floor(Math.random()*flowers.length)];
  f.style.left=Math.random()*100+"vw";
  f.style.animationDuration=(6+Math.random()*4)+"s";
  document.querySelector(".flowers").appendChild(f);
  setTimeout(()=>f.remove(),10000);
},700);
