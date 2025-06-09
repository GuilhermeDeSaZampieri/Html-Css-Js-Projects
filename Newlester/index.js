(function () {
  emailjs.init("l0lEFBR5jMmdmjikT");
})();

const enterEmail = document.getElementById("enterEmail");
const enterName = document.getElementById("enterName");

const form = document.getElementById("form");

form.addEventListener("submit", sendEmail);

function sendEmail(e) {
  e.preventDefault();
  const params = {
    email: enterEmail.value,
    name: enterName.value,
  };

  emailjs
    .send("service_7w30clo", "template_5g3y3na", params)
    .then(() => {
      alert("e-mail Enviado com sucesso");
      (enterEmail.value = ""), (enterName.value = "");
    })
    .catch((error) => {
      alert("Erro ao enviar: " + error);
    });
}
