import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (savedData.email) form.elements.email.value = savedData.email;
if (savedData.message) form.elements.message.value = savedData.message;

form.addEventListener(
  "input",
  throttle(() => {
    const data = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, 500)
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const submittedData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  console.log("Submitted:", submittedData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
