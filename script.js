// Countdown timer script
// Set your wedding date here. The timer will count down to midnight on this date.
// Update the wedding date for the new celebration
const weddingDate = new Date('September 9, 2025 13:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in the respective elements
  document.getElementById('days').textContent = days >= 0 ? days : 0;
  document.getElementById('hours').textContent = hours >= 0 ? hours : 0;
  document.getElementById('minutes').textContent = minutes >= 0 ? minutes : 0;
  document.getElementById('seconds').textContent = seconds >= 0 ? seconds : 0;

  // If the countdown is finished, stop the timer
  if (distance < 0) {
    clearInterval(countdownInterval);
  }
}

// Update the countdown immediately and then every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// rsvp
document.getElementById('rsvpForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from redirecting

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbwtVWTH7bQATClcLyMcTRmyCviNCCvwMCUdLz_3kETgYi2HdKflUT33QVTRqMpEH0uM/exec", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById('thankYouMessage').style.display = 'block';
    } else {
      alert("Oops! Something went wrong.");
    }
  })
  .catch(error => {
    alert("Error submitting the form.");
  });
});
