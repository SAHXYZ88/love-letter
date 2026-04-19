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

const bigLoveQuote = `You Came Into My Life When I Was At My Lowest, When I Was Broken And Lost, And Even Though I Didn’t Treat You The Way You Deserved, You Still Stayed By My Side… Many Times I Shouted At You Out Of Anger, Ignored You, And When You Only Asked For A Little Time, I Failed To Give Even That…

I Told You I Would Come Back But Chose The World Over You, And Still You Never Left, Even When We Stopped Talking For Days, You Remembered Every Single Day And Forgave Me Every Time I Returned…

Alhamdulillah Allah Sent You As A Blessing I Didn’t Deserve, And Today You Are My Peace, My Happiness, My Dua, And InshaAllah One Day I Will Hold Your Hand Forever And Spend My Life Making Up For Every Moment I Made You Feel Alone.`;

document.querySelectorAll(".small").forEach(el=>{
  el.addEventListener("click",(e)=>{
    const id = parseInt(el.dataset.id)-1;
    opened.add(id);
    typeWriter(smallQuotes[id]);
    createHearts(e.clientX,e.clientY);
    checkUnlock();

    el.classList.add("focus");
    setTimeout(()=>el.classList.remove("focus"),500);
  });
});

document.querySelector(".big").addEventListener("click",(e)=>{
  typeWriter(bigLoveQuote);
  createHearts(e.clientX,e.clientY);
});

/* TYPEWRITER */
function typeWriter(text){
  document.getElementById("popup").style.display="flex";
  let i=0;
  let target=document.getElementById("quoteText");
  target.innerHTML="";

  function t(){
    if(i<text.length){
      target.innerHTML+=text[i]==="\n"?"<br>":text[i];
      i++;
      setTimeout(t,25);
    }
  }
  t();
}

/* UNLOCK */
function checkUnlock(){
  if(opened.size===14){
    let btn=document.querySelector(".proposal-btn");
    btn.innerText="💖 Open Your Forever 💖";
    btn.classList.add("unlocked");
  }
}

/* POPUP */
function closePopup(){
  document.getElementById("popup").style.display="none";
}

/* PROPOSAL */
function showProposal(){
  if(opened.size<14){
    alert("Open all love letters first 💌");
    return;
  }
  document.body.style.filter="brightness(0.7)";
  document.getElementById("proposalPopup").style.display="flex";
}

function closeProposal(){
  document.body.style.filter="none";
  document.getElementById("proposalPopup").style.display="none";
}

/* HEART BURST */
function createHearts(x,y){
  for(let i=0;i<6;i++){
    let h=document.createElement("div");
    h.className="heart";
    h.innerText="💖";
    h.style.left=x+"px";
    h.style.top=y+"px";
    h.style.setProperty("--x",(Math.random()*100-50)+"px");
    h.style.setProperty("--y",(Math.random()*-120)+"px");
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1000);
  }
}

/* MUSIC FADE */
function toggleMusic(){
  let m=document.getElementById("music");

  if(m.paused){
    m.volume=0;
    m.play();
    let v=0;
    let fade=setInterval(()=>{
      v+=0.05;
      m.volume=v;
      if(v>=1) clearInterval(fade);
    },100);
  } else {
    m.pause();
  }
}
