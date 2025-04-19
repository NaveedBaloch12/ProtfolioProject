// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    e.preventDefault();
  } else {
    alert("Message sent successfully!");
  }
});

// Dynamic greeting based on time
const hour = new Date().getHours();
let greeting;
if (hour < 12) greeting = "Good Morning!";
else if (hour < 18) greeting = "Good Afternoon!";
else greeting = "Good Evening!";

const aboutSection = document.getElementById("about");
const greetElem = document.createElement("p");
greetElem.textContent = greeting;
aboutSection.appendChild(greetElem);
