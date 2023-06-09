// Variables emailjs - DOCS: https://www.emailjs.com/docs/sdk/send-form/
const PUBLIC_KEY = "kv5EVWsEGCYLkjBvy";
const SERVICE_ID = "service_8vfyhzv";
const TEMPLATE_ID = "template_zhqodp7";

emailjs.init(PUBLIC_KEY);

window.onload = function() {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(function() {
        alert('Tu mensaje fue enviado con éxito');
        contactForm.reset();
      }, function(error) {
        alert("Hubo un error al enviar el mensaje, por favor intentá nuevamente");
        console.log('emailjs error:', error);
      });
  });
}
