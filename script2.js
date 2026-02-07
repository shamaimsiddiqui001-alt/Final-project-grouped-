// Set your exam date (YYYY-MM-DD)
let examDate = new Date("2026-02-10").getTime();

let timer = setInterval(function () {
  let now = new Date().getTime();
  let difference = examDate - now;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds = Math.floor(
    (difference % (1000 * 60)) / 1000
  );

  console.log("Days:", days);
  console.log("Hours:", hours);
  console.log("Minutes:", minutes);
  console.log("Seconds:", seconds);

  if (difference < 0) {
    clearInterval(timer);
    console.log("⏰ Exam Time Reached!");
  }
}, 1000);
