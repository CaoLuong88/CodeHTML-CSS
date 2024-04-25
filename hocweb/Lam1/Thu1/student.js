// Tạo một mảng chứa dữ liệu sinh viên
var students = [];

// Tạo hàm để thêm sinh viên vào mảng students
function addStudent(id, maSinhVien, hoTen, ngaySinh, gioiTinh, lop) {
    var student = {
        ID: id,
        MaSinhVien: maSinhVien,
        HoTen: hoTen,
        NgaySinh: ngaySinh,
        GioiTinh: gioiTinh,
        Lop: lop
    };
    students.push(student);
}

// Tạo dữ liệu với ít nhất 20 bản ghi
addStudent(1, 'SV001', 'Nguyễn Văn A', '01/01/1990', 'Nam', '12A');
addStudent(2, 'SV002', 'Trần Thị B', '02/02/1991', 'Nữ', '12B');
// Thêm các bản ghi khác...

// Các hàm chức năng khác để sửa, xóa, tìm kiếm sinh viên cũng có thể được thêm vào tệp JavaScript này
