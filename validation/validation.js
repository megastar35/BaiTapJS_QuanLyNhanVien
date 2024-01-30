function checkEmpty(value, idInput) {
  var input = document.getElementById(idInput);
  if (value == "") {
    input.innerHTML = "Vui lòng không bỏ trống";
    return false;
  } else {
    input.innerHTML = "";
    return true;
  }
}
function checkMinMaxValue(value, idInput, min, max) {
  var valueLenght = value.lenght;
  if (valueLenght >= min && valueLenght <= max) {
    document.getElementById(idInput).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      idInput
    ).innerHTML = `vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
    return false;
  }
}
