const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const output = document.getElementById("formMessage");

    if (name.length < 2 || email === "" || message.length < 10) {
      output.textContent =
        "Please check your details and write a message of at least 10 characters.";
      return;
    }

    output.textContent =
      "Thank you, " + name + ". Your form looks complete (demo only).";
    form.reset();
  });
}
