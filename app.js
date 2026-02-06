const screens = {
  birthday: document.getElementById("screen-birthday"),
  welcome: document.getElementById("screen-welcome"),
  feeling: document.getElementById("screen-feeling"),
  response: document.getElementById("screen-response"),
  notes: document.getElementById("screen-notes")
};

function show(s) {
  Object.values(screens).forEach(sc => sc.classList.remove("active"));
  screens[s].classList.add("active");
}

/* 🎂 LOCKED TO FEBRUARY 5 */
const today = new Date();
const isBirthday = (today.getMonth() === 1 && today.getDate() === 5);

/* 💖 19 GLORIOUS PIECES — FULL HEART VERSION */
const birthdayMessages = [

`When God wanted to look at Himself,
He made you.

You are His reflection —
and that is real.`,

`You are not an accident.
You are intention.
You are design.
You are loved on purpose.`,

`Heaven was careful
when it made you.

Nothing about you is random.`,

`You are not fragile.
You are layered, reinforced,
and guarded by grace.`,

`The strength you are looking for
is already inside you.

It has always been there.`,

`You carry something rare:
a heart that feels deeply
and still chooses kindness.`,

`You are bigger than this moment.
You always have been.`,

`Nothing is wrong with you for feeling tired.
Even strong people rest.`,

`Your mind is safe.
Your heart is safe.
You are safe in ways you don’t even see.`,

`You are not behind in life.
You are becoming exactly
who you were meant to be.`,

`Worry has no authority over you.
The One in you is greater
than anything around you.`,

`You have a light
that situations cannot dim
and people cannot steal.`,

`Even on days you feel small,
Heaven still calls you chosen.`,

`You are allowed to go slowly
and still arrive exactly
where you're meant to be.`,

`You carry grace
in places others carry fear.

That is not normal.
That is God in you.`,

`You are deeply loved —
not for what you do,
not for what you achieve,
but simply for who you are.`,

`The world is better
because you are in it.
That is not poetry.
That is truth.`,

`You are one of Heaven’s
carefully placed answers
to someone’s prayer.`,

`Today, I just want you to know…

I’m grateful you were born.
I’m grateful you exist.
I’m grateful God made you.

Happy 19th Birthday, GLORIOUS 🌸
— Edidiong`
];

let birthdayIndex = 0;

function showBirthdayMessage() {
  document.getElementById("birthdayMessage").innerText =
    birthdayMessages[birthdayIndex];
}

document.getElementById("nextBirthdayBtn").onclick = () => {
  birthdayIndex++;
  if (birthdayIndex < birthdayMessages.length) {
    showBirthdayMessage();
  } else {
    document.getElementById("nextBirthdayBtn").innerText = "Close";
  }
};

/* NORMAL APP PART (for after today) */
const responses = {
  tired: "Nothing is wrong with you for feeling tired.\n\nEven strong people rest.",
  stressed: "Take a breath.\n\nPeace is not something you chase — it is something you return to.",
  overwhelmed: "Your mind is safe.\nYour heart is safe.\nYou are safe.",
  okay: "You are doing better than you think."
};

document.getElementById("startBtn").onclick = () => show("feeling");

document.querySelectorAll("[data-feel]").forEach(btn =>
  btn.onclick = () => {
    document.getElementById("responseText").innerText =
      responses[btn.dataset.feel];
    show("response");
  }
);

document.getElementById("continueBtn").onclick = () => show("notes");

const notes = [
  "You are allowed to go slowly and still arrive exactly where you're meant to be.",
  "You are doing better than you think.\n\n— Edidiong",
  "Even strong people rest."
];

function randomNote() {
  return notes[Math.floor(Math.random() * notes.length)];
}

document.getElementById("noteText").innerText = randomNote();
document.getElementById("anotherNoteBtn").onclick = () =>
  (document.getElementById("noteText").innerText = randomNote());

document.getElementById("enoughBtn").onclick = () => show("welcome");

/* LAUNCH MODE */
if (isBirthday) {
  show("birthday");
  showBirthdayMessage();
} else {
  show("welcome");
}
