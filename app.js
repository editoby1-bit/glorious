/***********************
  SCREEN HANDLING
************************/
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

/***********************
  🎂 BIRTHDAY LOGIC
  FEBRUARY 6
************************/
const today = new Date();
const isBirthday = (today.getMonth() === 1 && today.getDate() === 6);

/***********************
  🌸 19 GLORIOUS PIECES
  SPIRITUAL + LOVE (NO CENSORING)
************************/
const birthdayMessages = [

`When God wanted to look at Himself,
He made you.

You are His reflection.
That is not metaphor.
That is truth.`,

`You were not created casually.
You were formed deliberately,
with attention, intention,
and love.`,

`Heaven did not rush
when it made you.

Every part of you
was chosen.`,

`You carry God’s fingerprint
in your spirit.

That is why your presence
changes rooms.`,

`You are not ordinary.
You are familiar to Heaven
and recognized by grace.`,

`You have a depth
that cannot be taught,
and a light
that cannot be copied.`,

`God trusted the world with you.

That alone should tell you
how valuable you are.`,

`You were born with authority,
not fear.

And nothing assigned against you
has permission to stay.`,

`There is oil on your life.
Not noise.
Not struggle.
Oil.`,

`You are guarded in ways
you cannot see,
and favored in ways
you cannot explain.`,

`Even when you are quiet,
Heaven is loud about you.`,

`Your life is not random.
Your timing is not late.
Your path is not confused.`,

`You are walking in alignment,
even when it doesn’t feel like it.`,

`You are deeply loved.
Not tolerated.
Not managed.
Loved.`,

`Loving you is easy,
because your soul
is gentle and rare.`,

`You are a gift.
Not just today.
Every day.`,

`Some people are answers.
You are one of them.`,

`If the world knew
how carefully you were made,
it would treat you with more honor.`,

`Today I just want you to know this:

I thank God for you.
I am grateful you were born.
I am grateful you exist.

Happy 19th Birthday, GLORIOUS 🌸
— Edidiong`
];

let birthdayIndex = 0;
const messageBox = document.getElementById("birthdayMessage");
const nextBtn = document.getElementById("nextBirthdayBtn");

function showBirthdayMessage() {
  messageBox.innerText = birthdayMessages[birthdayIndex];
}

/* NO FAST CYCLING — ONE WAY ONLY */
nextBtn.onclick = () => {
  birthdayIndex++;

  if (birthdayIndex < birthdayMessages.length) {
    showBirthdayMessage();
  } else {
    nextBtn.disabled = true;
    nextBtn.innerText = "💛";
  }
};

/***********************
  NORMAL APP (AFTER BIRTHDAY)
  CLEAN + LIGHT
************************/
const responses = {
  okay: "You are steady. You are aligned. You are doing well.",
  stressed: "Peace is already within you. Return to it.",
  overwhelmed: "You are held. You are not alone. You are guided."
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

/***********************
  NOTES (POST-BIRTHDAY)
************************/
const notes = [
  "You are walking in purpose, even when the steps feel quiet.",
  "Grace speaks louder over your life than doubt ever could.",
  "You are becoming exactly who you were designed to be.\n\n— Edidiong"
];

function randomNote() {
  return notes[Math.floor(Math.random() * notes.length)];
}

document.getElementById("noteText").innerText = randomNote();
document.getElementById("anotherNoteBtn").onclick = () =>
  document.getElementById("noteText").innerText = randomNote();

document.getElementById("enoughBtn").onclick = () => show("welcome");

/***********************
  🚀 LAUNCH
************************/
if (isBirthday) {
  show("birthday");
  showBirthdayMessage();
} else {
  show("welcome");
}
