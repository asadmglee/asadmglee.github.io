function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  
  function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      document.getElementById("formResponse").textContent = `Thanks, ${name}! I’ll get back to you soon.`;
      document.querySelector("form").reset();
    } else {
      document.getElementById("formResponse").textContent = "Please fill out all fields.";
    }
  }
  