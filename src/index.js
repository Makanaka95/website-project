const form = document.querySelector("form");
const button = document.querySelector("button");

// Add an event listener to the button
button.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting (default behavior)

  // Get the values from the form fields
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Check if the fields are filled
  if (email && message) {
    alert(`Thank you for your message!\nEmail: ${email}\nMessage: ${message}`);
    form.reset(); // Clear the form fields
  } else {
    alert("Please fill in all fields before submitting.");
  }
});
