arrNhanVien = [];
function valiFormNhanVien() {
  // Thực hiện dom tới nhiều phần tử html cùng lúc
  // querySelectorAll giúp truy cập nhiều phần tử html cùng lúc
  // mấu chốt là đoạn selector phải gọi được nhiều phần tử cùng lúc
  var arrInput = document.querySelectorAll("form input, form select");
  var nhanVien = new NhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    var id = arrInput[i].id;
    nhanVien[id] = arrInput[i].value;
  }
  console.log(nhanVien);
  return nhanVien;
}
document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = valiFormNhanVien();

  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    setLocalStorage("arrNhanVien", arrNhanVien);
    renderNhanVien(arrNhanVien);
    document.getElementById("form").reset();
  }
};
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
        <td>${nhanVien.name}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.datepicker}</td>
        <td>${nhanVien.chucvu}</td>
        <td>${nhanVien.tongLuong}</td>
        <td>${nhanVien.xepLoai}</td>
    </tr>`;
    content += stringHtml;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
