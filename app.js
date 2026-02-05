const screens={birthday:document.getElementById("screen-birthday"),welcome:document.getElementById("screen-welcome"),feeling:document.getElementById("screen-feeling"),response:document.getElementById("screen-response"),notes:document.getElementById("screen-notes")};
function show(s){Object.values(screens).forEach(sc=>sc.classList.remove("active"));screens[s].classList.add("active");}

const today=new Date();
// ⚠️ CHANGE TO HER REAL BIRTHDAY
const isBirthday=(today.getMonth()===1&&today.getDate()===5);

const birthdayMessages=[
"When God wanted to look at Himself,\nHe made you.\n\nYou are His reflection — and that is real.",
"You are not fragile.\nYou are layered, reinforced,\nand guarded by grace.",
"The strength you are looking for\nis already inside you.\n\nIt has always been there.",
"You are bigger than this moment.\nYou always have been.",
"Nothing is wrong with you for feeling tired.\nEven strong people rest.",
"Worry is an insult to the One in you\nthat is greater than the one in all the world.",
"Take a breath.\n\nPeace is not something you chase — it is something you return to.",
"You are not behind.\nYou are becoming.",
"Your mind is safe.\nYour heart is safe.\nYou are safe.",
"This season does not define you.\nIt is only shaping you.",
"What feels heavy now\nwill one day feel like proof of your strength.",
"You are allowed to go slowly\nand still arrive exactly where you're meant to be.",
"Even on quiet days,\nsomething good is happening within you.",
"You are doing better than you think.",
"You have a light that situations cannot dim.",
"You carry grace in places\nothers carry fear.",
"Heaven invested carefully\nwhen you were sent here.",
"You are deeply loved —\nnot for what you do,\nbut for who you are.",
"Today, I just want you to know…\n\nI’m grateful you were born.\n\nHappy 19th Birthday, GLORIOUS 🌸\n— Edidiong"
];

let birthdayIndex=0;
function showBirthdayMessage(){document.getElementById("birthdayMessage").innerText=birthdayMessages[birthdayIndex];}
document.getElementById("nextBirthdayBtn").onclick=()=>{birthdayIndex++;if(birthdayIndex<birthdayMessages.length){showBirthdayMessage()}else{document.getElementById("nextBirthdayBtn").innerText="Close"}};

const responses={tired:"Nothing is wrong with you for feeling tired.\n\nEven strong people rest.",stressed:"Take a breath.\n\nPeace is not something you chase — it is something you return to.",overwhelmed:"Your mind is safe.\nYour heart is safe.\nYou are safe.",okay:"You are doing better than you think."};

document.getElementById("startBtn").onclick=()=>show("feeling");
document.querySelectorAll("[data-feel]").forEach(btn=>btn.onclick=()=>{document.getElementById("responseText").innerText=responses[btn.dataset.feel];show("response");});
document.getElementById("continueBtn").onclick=()=>show("notes");

const notes=["You are allowed to go slowly and still arrive exactly where you're meant to be.","You are doing better than you think.\n\n— Edidiong","Even strong people rest."];
function randomNote(){return notes[Math.floor(Math.random()*notes.length)];}
document.getElementById("noteText").innerText=randomNote();
document.getElementById("anotherNoteBtn").onclick=()=>document.getElementById("noteText").innerText=randomNote();
document.getElementById("enoughBtn").onclick=()=>show("welcome");

if(isBirthday){show("birthday");showBirthdayMessage()}else{show("welcome")}
