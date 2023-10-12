function validateForm(event) {
    const firstName = document.forms["contactForm"]["First-Name"].value;
    const lastName = document.forms["contactForm"]["Last-Name"].value;
    const yourEmail = document.forms["contactForm"]["your-email"].value;
    const yourMessage = document.forms["contactForm"]["your-message"].value;
    

    if (firstName.trim() == "") {
      alert("First Name must be filled out");
      return false;
    } else if (lastName.trim() == "") {
        alert("Last Name must be filled out");
        return false;
    } else if (yourEmail.trim() == "") {
        alert("Email must be filled out");
        return false;
    } else if (yourMessage.trim() == "") {
        alert("Message must be filled out");
        return false;
    } 

    alert('Successfully Sign In')
    event.preventDefault();
  }

