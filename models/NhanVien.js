function NhanVien(
  tknv,
  ten,
  email,
  password,
  txtNgaySinh,
  chucvu,
  luongCB,
  ngay,
  GioLam
) {
  this.tknv = tknv;
  this.ten = ten;
  this.email = email;
  this.matkhau = password;
  this.txtNgaySinh = txtNgaySinh;
  this.chucvu = chucvu;
  this.luongCB = luongCB;
  this.ngay = ngay;
  this.gioLam = GioLam;

  // phương thức
  this.tinhLuongCoBan = function () {
    console.log(this.luongCB);
    if (this.chucvu == "Sep") this.tongLuong = Number(this.luongCB) * 3;
    else if (this.chucvu == "TruongPhong")
      this.tongLuong = Number(this.luongCB) * 2;
    else this.tongLuong = Number(this.luongCB) * 1;
    return this.tongLuong;
  };

  this.xeploai = function () {
    if (Number(this.gioLam) >= 192) this.xeploai = "nhân viên xuất sắc";
    else if (Number(this.gioLam) >= 176 && Number(this.gioLam) < 192)
      this.xeploai = "nhân viên giỏi";
    else if (Number(this.gioLam) >= 160 && Number(this.gioLam) < 176)
      this.xeploai = "nhân viên khá";
    else this.xeploai = "nhân viên trung bình";
    return this.xeploai;
  };
}
