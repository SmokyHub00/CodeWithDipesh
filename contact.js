// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init('qIT1MYltloPT28CBL');

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      emailjs.sendForm('service_ajr7hhn', 'template_wmacuvh', this)
        .then(() => {
          alert('Message sent successfully! Thank you.');
          contactForm.reset();
        }, (err) => {
          console.error('EmailJS Error:', err);
          alert('Failed to send message. Please try again.');
        });
    });
  }
});
