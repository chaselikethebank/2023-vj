(function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  })();

  function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Compose email parameters
    var params = {
      to_name: "Your Name", // Replace with your name or recipient's name
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params).then(
      function (response) {
        console.log("Email sent successfully", response);
        alert("Email sent successfully!");
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        console.error("Email sending failed", error);
        alert("Failed to send email. Please try again later.");
      }
    );
  }

  