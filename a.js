function khoahoc(ten, gia) {
    this.tenmh = ten;
    this.giamh = gia;
    this.them = 'khoa hoc online';
}

khoahoc.prototype.mota = function(){
    console.log(this.giamh +" " + this.tenmh +" " + this.them );
}

var a = new khoahoc("nodejs", 20000);

a.mota();