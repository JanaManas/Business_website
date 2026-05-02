function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}