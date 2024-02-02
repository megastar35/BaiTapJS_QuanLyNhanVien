var arrNhanVien = [];
function valiFormNhanVien() {
  // Thực hiện dom tới nhiều phần tử html cùng lúc
  // querySelectorAll giúp truy cập nhiều phần tử html cùng lúc
  // mấu chốt là đoạn selector phải gọi được nhiều phần tử cùng lúc
  var arrInput = document.querySelectorAll("form input, form select");
  var nhanVien = new NhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    var id = arrInput[i].id;
    nhanVien[id] = arrInput[i].value;
    // formValidation(arrInput[i].value, id);
  }
  nhanVien.tongLuong = nhanVien.tinhLuongCoBan();
  nhanVien.xeploai = nhanVien.xeploai();
  // console.log(nhanVien);
  return nhanVien;
}
document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = valiFormNhanVien();

  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    setLocalStorage("arrNhanVien", arrNhanVien);
    renderNhanVien(arrNhanVien);
    resetFormAndErrors();
  }
};
// handle validation onblur
// function handleBlur(event) {
//   var isValidForm = formValidation(event.target.value, event.target.id);
//   if (isValidForm) {
//     document.getElementById("btnThemNV").disabled = false;
//   } else {
//     document.getElementById("btnThemNV").disabled = true;
//   }
// }
// document.querySelectorAll("form input").forEach((input) => {
//   input.onblur = handleBlur;
// });
function setLocalStorage(key, value) {
  // chuyển đổi dữ liệu về thành chuỗi JSON
  // var stringJSON = JSON.stringify(value);
  // localStorage.setItem(key,stringJSON)
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  var dataLocal = localStorage.getItem(key);
  // kiểm tra dữ liệu xem có hay không, vì nếu localStorage.getItem gọi lấy dữ liệu không có sẽ trả về null
  if (dataLocal) {
    var newData = JSON.parse(dataLocal);
    arrNhanVien = newData;
    renderNhanVien();
  }
}
getLocalStorage("arrNhanVien");
function renderNhanVien(arr) {
  if (!arr) {
    arr = arrNhanVien;
  }
  var content = "";
  for (let i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    var newNhanVien = new NhanVien();
    var stringHtml = `
    <tr>
        <td>${nhanVien.tknv}</td>
        <td>${nhanVien.ten}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.ngay}</td>
        <td>${nhanVien.chucvu}</td>
        <td>${nhanVien.tongLuong}</td>
        <td>${nhanVien.xeploai}</td>
        <td class="d-flex">
        <button onclick="xoaNhanVien('${nhanVien.tknv}')" class="btn btn-danger">Xóa</button>
        <button class="btn btn-primary" >Sửa</button>
        </td>
        </tr>`;
    content += stringHtml;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

function timViTriIndex(tknv) {
  var nhanVien;
  for (let i = 0; i < arrNhanVien.length; i++) {
    if (tknv == arrNhanVien[i].tknv) {
      nhanVien = arrNhanVien[i].tknv;
      console.log(nhanVien);
      return nhanVien;
    }
  }
}
function xoaNhanVien(tknv) {
  // var index = timViTriIndex(tknv);
  for (let i = 0; i < arrNhanVien.length; i++) {
    if (tknv == arrNhanVien[i].tknv) {
      arrNhanVien.splice(i, 1);
    }
  }
  renderNhanVien();
  setLocalStorage("arrNhanVien", arrNhanVien);
}
function getInfoNhanVien(tknv) {
  var nhanVien = timViTriIndex(tknv);
  var arrInput = document.querySelectorAll("form input, form select");
  for (let j = 0; j < arrInput.length; j++) {
    var id = arrInput[j].id;
    arrInput[j].value = nhanVien[id];
  }
}
document.getElementById("btnDong").onclick = function () {
  resetFormAndErrors();
};
console.log(arrNhanVien);
