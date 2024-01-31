function checkEmpty(value, idInput) {
  var errorMessageId =
    "tb" + idInput.charAt(0).toUpperCase() + idInput.slice(1);
  var input = document.getElementById(errorMessageId);
  if (value == "") {
    input.style.display = "block";
    input.innerText = "Vui lòng không bỏ trống";
  } else {
    input.style.display = "none";
    input.innerHTML = "";
  }
}
function checkMinMaxValue(value, idInput, min, max) {
  console.log({ idInput });
  var errorMessageId =
    "tb" + idInput.charAt(0).toUpperCase() + idInput.slice(1);
  var input = document.getElementById(errorMessageId);
  var valueLength = value.length;
  console.log(valueLength);
  if (valueLength >= min && valueLength <= max) {
    input.style.display = "none";
    input.innerHTML = "";
    return true;
  } else {
    input.style.display = "block";
    input.innerHTML = `vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
    return false;
  }
}

function checkEmail(value, idInput) {
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var errorMessageId =
    "tb" + idInput.charAt(0).toUpperCase() + idInput.slice(1);
  var input = document.getElementById(errorMessageId);
  if (value.match(pattern)) {
    input.style.display = "none";
    input.innerHTML = "";
    return true;
  }
  input.style.display = "block";
  input.innerHTML = "Email sai định dạng";
  return false;
}
