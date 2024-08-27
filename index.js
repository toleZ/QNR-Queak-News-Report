const alert = document.querySelector("#alert");
const button = document.querySelector("#close-alert");
const suscribeForm = document.querySelector("#suscribe-form");

const checkEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

const handleOpenAlert = () => {
  alert.setAttribute("open", true);

  setTimeout(() => {
    alert.setAttribute("open", false);
  }, 3000);
};

const handleCloseAlert = () => {
  alert.setAttribute("open", false);
};

suscribeForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const isValidEmail = checkEmail(email);

  if (isValidEmail) {
    handleOpenAlert();
    emailInput.value = "";
  }
});

button.addEventListener("click", () => {
  handleCloseAlert();
});
