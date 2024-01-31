function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.txtNgaySinh = "";
  this.chucvu = "";
  this.luongCB = "";
  this.datepicker = "";
  this.GioLam = "";
  this.tongLuong = 0;
  this.xepLoai = "";

  // phương thức
  this.tinhLuongCoBan = function () {
    var tongLuong = 0;
    if (this.ChucVu == "Sep") tongLuong = this.Luong * 3;
    else if (this.ChucVu == "TruongPhong") tongLuong = this.Luong * 2;
    else tongLuong = this.Luong * 1;
    return tongLuong;
  };
  this.tongLuong = tinhLuongCoBan();
}
