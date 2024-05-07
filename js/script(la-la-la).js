// document.addEventListener('DOMContentLoaded', function() {
// const mainForm = document.forms.main;
// console.log(mainForm.elements);
// });

// ..............................................

// const mainForm = document.forms.main;

// const mainFormInput = mainForm.email;
// console.log(mainFormInput);

// .................................................

// const mainForm = document.buttons;

// const mainFormLabel = mainForm.options;
// console.log(mainFormLabel);

//  ...................................................

// const mainForm = document.forms.main;
// const mainFormInput = mainForm.email;
// console.log(mainFormInput.form);

// //////////...................................

// const mainForm = document.forms.nameS;
// const mainFormName = mainForm.nameTxt;
// const mainFormMessage = document.getElementById('messageR');

//buttons
// console.log(mainFormName.value);
// console.log(mainFormMessage);

// mainFormName.value = "Я это НЕ я";
// console.log(mainFormName.value);

// .........................................................

// const buttons = document.forms.buttons;
// const options = buttons.options;

// console.log(buttons[0].checked);
// console.log(buttons[1].checked);
// console.log(options);

//..............................................................

// const major = document.forms.major;
// const check = major.nameCheck;
// console.log(major);
// console.log(check.value);
// console.log(check.checked);

// check.checked = true;

// check.value = "sve";
// console.log(check.value);
// ..........................................................

// const major = document.forms.major;
// const textarea = major.message;

// const placeholder = textarea.placeholder;

// textarea.addEventListener('focus', function(e){
//     textarea.placeholder = '';
// });

// textarea.addEventListener('blur', function(e){
//     textarea.placeholder = placeholder;
// });

// console.log(placeholder);

// console.log(textarea);
// const options = major.options;

// console.log(major);
// console.log(options);

//  .................................................

// const numbers = major.numbers;

// let newItem = new Option("100", "4", true, false);
// numbers.append(newItem);
// console.log(newItem);

// console.log(numbers);
// console.log(numbers.options);

// const index = numbers.selectedIndex;
// console.log(index);

// const value = numbers.value;
// console.log(value);

// const texti = numbers.options[index].text;
// console.log(texti);

// numbers.value = 1;
// numbers.selectedIndex = 3;
// ................................................

// const major = document.forms.major;
// const email = major.email;

// email.addEventListener("submit", function(e){
//   console.log('Форма отправляется...');

//   if(!email.value) {
//     console.log('Поле не заполнено');
//     e.preventDefault();
//   }
// });

// const numbers = major.numbers;

// message.addEventListener("change", function(e){
//   console.log('Сработало change в textarea');
// });

// message.addEventListener("copy", function(e){
//   console.log(`Копируем`);
// });

// message.addEventListener("paste", function(e){
//   console.log(`Вставляем`);
// });

// message.addEventListener("cut", function(e){
//   console.log(`Вырезаем`);
// });

// message.addEventListener("input", function(e){
//   console.log(`value ${message.value}`);
// });

// numbers.addEventListener("change", function(e){
//   console.log('Сработало change в numbers');
// });

// message.addEventListener("focusin", function(e) {
//     message.classList.add('_active');
// });

// message.addEventListener("focusout", function(e) {
//     message.classList.remove('_active');
// });

// console.log(document.activeElement);

// const email = major.email;
// email.focus();

// setTimeout(() => {
//     email.blur();
// }, 3000);

// console.log(major);
// console.log(email);

// ......................................................

// Валидация формы (дз)

function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains("error")) {
      parent.querySelector(".error-label").remove();
      parent.classList.remove("error");
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement("label");
    errorLabel.classList.add(`error-label`);
    errorLabel.textContent = text;

    parent.classList.add("error");
    parent.append(errorLabel);
  }

  let result = true;

  const allInput = form.querySelectorAll("input");

  for (const input of allInput) {
    removeError(input);
    // Если мф хотим чтобы проверялось одно конкретное поле
    // if(input.dataset.required=='true'){
    if (input.value == "") {
      console.log("ошибка поля");
      createError(input, "Поле не заполнено");
      result = false;
    }
    // }
  }
  return result;
}

// Вставка текста запрещена

document.getElementById("add-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validation(this) === true) {
    alert("форма проверена успешно!");
  }
});

// Получаем все элементы input в форме
const inputs = document.querySelectorAll("#add-form input");

// Добавляем обработчик события paste ко всем элементам input
inputs.forEach((input) => {
  input.addEventListener("paste", function (e) {
    // Предотвращаем стандартное действие браузера по вставке текста
    e.preventDefault();
    // Показываем сообщение об ошибке или выполняем другие действия
    alert("Вставка текста запрещена!");
  });
});

// Обработчик события submit формы
document.getElementById("add-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Ваш код валидации или другие действия при отправке формы
  console.log("Форма отправлена!");
});

//  .....................................................

// счетчик символов

function validateTextarea() {
  const textarea = document.querySelector(".information");
  const result = document.querySelector(".result");
  const button2 = document.querySelector(".button-2");

  const limit = 100;

  result.textContent = 0 + "/" + limit;

  textarea.addEventListener("input", () => {
    const textLength = textarea.value.length;
    result.textContent = textLength + "/" + limit;
    if (textLength > limit) {
      textarea.classList.add("red");
      result.style.color = "#ff2851";
      button2.disabled = true;
    } else {
      textarea.classList.remove("red");
      result.style.color = "";
      button2.disabled = false;
    }
  });
}

validateTextarea();
