var formValidationResult = {
  isValidAccount: true,
  isValidName: true,
  isValidSalary: true,
  isValidWorkHour: true,
  isValidEmail: true,
  isValidPassword: true,
  isValidDate: true,
};

function checkEmpty(value, idInput) {
  if (value == "") {
    idInput.style.display = "block";
    idInput.innerText = "Vui lòng không bỏ trống";
    return false;
  } else {
    idInput.style.display = "none";
    idInput.innerHTML = "";
    return true;
  }
}
function checkMinMaxValue(value, idInput, min, max) {
  var valueLength;
  if (isNaN(value)) {
    valueLength = value.length;
  } else {
    valueLength = value;
  }
  if (valueLength >= min && valueLength <= max) {
    idInput.style.display = "none";
    idInput.innerHTML = "";
    return true;
  } else {
    idInput.style.display = "block";
    idInput.innerHTML = `vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
    return false;
  }
}

function checkEmail(value, idInput) {
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (value.match(pattern)) {
    idInput.style.display = "none";
    idInput.innerHTML = "";
    return true;
  }
  idInput.style.display = "block";
  idInput.innerHTML = "Email sai định dạng";
  return false;
}

function checkNaN(value, idInput) {
  var pattern = /^[A-Za-z-'. ]+$/;

  if (value.match(pattern)) {
    idInput.style.display = "none";
    idInput.innerHTML = "";
    return true;
  }
  idInput.style.display = "block";
  idInput.innerHTML = "Tên chỉ được phép là chữ";
  return false;
}

function checkPassword(value, idInput) {
  var digitalPattern = /\d/;
  var upperCaseLetter = /[A-Z]/;
  var specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (value.length < 6 || value.length > 10) {
    idInput.style.display = "block";
    idInput.innerHTML = "Mật khẩu phải từ 6 đến 10 ký tự";
    return false;
  }

  if (!digitalPattern.test(value)) {
    idInput.style.display = "block";
    idInput.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự số";
    return false;
  }

  if (!upperCaseLetter.test(value)) {
    idInput.style.display = "block";
    idInput.innerHTML = "Mật khẩu phải có 1 chữ cái viết hoa";
    return false;
  }

  if (!specialChar.test(value)) {
    idInput.style.display = "block";
    idInput.innerHTML = "Mật khẩu phải chứa 1 ký tự đặc biệt";
    return false;
  }

  idInput.style.display = "none";
  idInput.innerHTML = "";
  return true;
}

function checkDate(value, idInput) {
  var datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
  if (value.match(datePattern)) {
    idInput.style.display = "none";
    idInput.innerHTML = "";
    return true;
  }
  idInput.style.display = "block";
  idInput.innerHTML = "Ngày phải theo định dạng mm/dd/yyyy";
  return false;
}

function formValidation(value, idInput) {
  var errorMessageId =
    "tb" + idInput.charAt(0).toUpperCase() + idInput.slice(1);
  var input = document.getElementById(errorMessageId);
  if (value == "") {
    return checkEmpty(value, input);
  }
  switch (idInput) {
    case "tknv":
      formValidationResult.isValidAccount = checkMinMaxValue(
        value,
        input,
        4,
        6
      );
      break;
    case "ten":
      formValidationResult.isValidName = checkNaN(value, input);
      break;
    case "luongCB":
      formValidationResult.isValidSalary = checkMinMaxValue(
        value,
        input,
        1000000,
        20000000
      );
      break;
    case "gioLam":
      formValidationResult.isValidWorkHour = checkMinMaxValue(
        value,
        input,
        80,
        200
      );
      break;
    case "email":
      formValidationResult.isValidEmail = checkEmail(value, input);
      break;
    case "matkhau":
      formValidationResult.isValidPassword = checkPassword(value, input);
      break;
    case "ngay":
      formValidationResult.isValidDate = checkDate(value, input);
      break;
    default:
      break;
  }
  return Object.values(formValidationResult).every((result) => result);
}

function resetFormAndErrors() {
  var form = document.querySelector("form");
  document.getElementById("tknv").disabled = false;
  form.reset();

  var errorMessages = document.querySelectorAll(".sp-thongbao");

  errorMessages.forEach(function (errorMessage) {
    errorMessage.textContent = "";
  });
}
