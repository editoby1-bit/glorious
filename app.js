/*************************
  SCREEN HANDLING
**************************/
const screens = {
  birthday: document.getElementById("screen-birthday"),
  welcome: document.getElementById("screen-welcome"),
  feeling: document.getElementById("screen-feeling"),
  response: document.getElementById("screen-response"),
  notes: document.getElementById("screen-notes")
};

function show(screen) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screen].classList.add("active");
}

/*************************
  🎂 BIRTHDAY LOGIC
  FEBRUARY 6
**************************/
const today = new Date();
const isBirthday = (today.getMonth() === 1 && today.getDate() === 6);

/*************************
  🌸 GLORIOUS — EXTENDED LOVE + SPIRIT (≈100)
**************************/
const birthdayMessages = [

`When God wanted to look at Himself,
He made you.`,

`You are His reflection.
That is not poetry.
That is truth.`,

`You were created deliberately,
not casually.`,

`Heaven was careful
when it made you.`,

`Nothing about you is random.`,

`You carry God’s fingerprint
in your spirit.`,

`That is why your presence
changes rooms.`,

`You are familiar to Heaven
and recognized by grace.`,

`You are not ordinary.
You are intentional.`,

`God trusted the world with you.`,

`You were born with authority,
not fear.`,

`There is oil on your life,
not noise.`,

`You are guarded in ways
you cannot see.`,

`You are favored in ways
you cannot explain.`,

`Even when you are quiet,
Heaven speaks loudly about you.`,

`Your life has alignment.`,

`Your steps are ordered,
even when they feel slow.`,

`Grace goes ahead of you.`,

`Mercy walks beside you.`,

`You are deeply loved.`,

`Not managed.
Not tolerated.
Loved.`,

`Loving you is easy,
because your soul is gentle.`,

`You have a softness
that carries strength.`,

`You are rare.`,

`You are safe in God’s hands.`,

`Nothing assigned against you
can stay.`,

`You are watched over.`,

`You are protected.`,

`You are chosen.`,

`You are called.`,

`Your life is not late.`,

`Your timing is not off.`,

`Your season is valid.`,

`You carry peace within you.`,

`You carry wisdom beyond your years.`,

`You are growing beautifully.`,

`Heaven celebrates you quietly.`,

`Your obedience matters.`,

`Your prayers are heard.`,

`Your tears are counted.`,

`Your joy is coming in fullness.`,

`You are never alone.`,

`You are surrounded.`,

`You are upheld.`,

`Your name is known in Heaven.`,

`You are becoming
what you were designed to be.`,

`Nothing is wasted in your life.`,

`Every step is shaping you.`,

`You are held with care.`,

`You are led with intention.`,

`You matter.`,

`Your existence matters.`,

`The world is better
because you are in it.`,

`You are a gift —
today and always.`,

`Some people are answers.
You are one of them.`,

`Your light is steady.`,

`Your heart is pure.`,

`Your spirit is strong.`,

`You are allowed to shine.`,

`You are allowed to receive love.`,

`You deserve gentleness.`,

`You deserve honor.`,

`You deserve joy.`,

`You are seen.`,

`You are known.`,

`You are cherished.`,

`Heaven invested carefully in you.`,

`God delights in you.`,

`You are pleasing to Him.`,

`You bring joy to those who know you.`,

`You are a blessing without trying.`,

`Your life carries meaning.`,

`Your future is bright.`,

`Your path is covered.`,

`You are wrapped in grace.`,

`You are surrounded by favor.`,

`You are deeply, deeply loved.`,

`And today above all days:

I thank God for you.
I’m grateful you were born.
I’m grateful you exist.

Happy Birthday, GLORIOUS 🌸
— Edidiong`
];

/*************************
  ROTATION — NO LIMITS
**************************/
let birthdayIndex = 0;
const messageBox = document.getElementById("birthdayMessage");
const nextBtn = document.getElementById("nextBirthdayBtn");

function showBirthdayMessage() {
  messageBox.innerText = birthdayMessages[birthdayIndex];
}

nextBtn.onclick = () => {
  birthdayIndex++;
  if (birthdayIndex >= birthdayMessages.length) {
    birthdayIndex = 0; // rotate only after full list
  }
  showBirthdayMessage();
};

/*************************
  NORMAL APP (POST-BIRTHDAY)
**************************/
const responses = {
  okay: "You are steady. You are aligned.",
  stressed: "Peace is already within you.",
  overwhelmed: "You are held and guided."
};

document.getElementById("startBtn").onclick = () => show("feeling");

document.querySelectorAll("[data-feel]").forEach(btn => {
  btn.onclick = () => {
    document.getElementById("responseText").innerText =
      responses[btn.dataset.feel];
    show("response");
  };
});

document.getElementById("continueBtn").onclick = () => show("notes");

const notes = [
  "You are walking in purpose.\n\n— Edidiong",
  "Grace speaks louder over your life than doubt.",
  "You are becoming exactly who you were designed to be."
];

function randomNote() {
  return notes[Math.floor(Math.random() * notes.length)];
}

document.getElementById("noteText").innerText = randomNote();
document.getElementById("anotherNoteBtn").onclick = () =>
  document.getElementById("noteText").innerText = randomNote();

document.getElementById("enoughBtn").onclick = () => show("welcome");

/*************************
  🚀 LAUNCH
**************************/
if (isBirthday) {
  show("birthday");
  showBirthdayMessage();
} else {
  show("welcome");
}
