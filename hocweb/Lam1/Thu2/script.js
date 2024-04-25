// Thêm sinh viên
function addStudent() {
    var maSinhVien = document.getElementById('txtMaSinhVien').value;
    var hoTen = document.getElementById('txtHoTen').value;
    var ngaySinh = document.getElementById('txtNgaySinh').value;
    var gioiTinh = document.getElementById('selGioiTinh').value;
    var lop = document.getElementById('txtLop').value;
    
    var newStudent = {
        ID: generateID(),
        MaSinhVien: maSinhVien,
        HoTen: hoTen,
        NgaySinh: ngaySinh,
        GioiTinh: gioiTinh,
        Lop: lop
    };
    
    sinhVienList.push(newStudent);
    
    displayStudents();
    
    // Reset form
    document.getElementById('txtMaSinhVien').value = '';
    document.getElementById('txtHoTen').value = '';
    document.getElementById('txtNgaySinh').value = '';
    document.getElementById('selGioiTinh').value = 'Nam';
    document.getElementById('txtLop').value = '';
}


// Hiển thị danh sách sinh viên
function displayStudents() {
    var tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';
    
    for (var i = 0; i < sinhVienList.length; i++) {
        var student = sinhVienList[i];
        
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.MaSinhVien}</td>
            <td>${student.HoTen}</td>
            <td>${student.NgaySinh}</td>
            <td>${student.GioiTinh}</td>
            <td>${student.Lop}</td>
            <td>
                <button onclick="editStudent(${student.ID})">Sửa</button>
                <button onclick="deleteStudent(${student.ID})">Xóa</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    }
}

// Sửa sinh viên
function editStudent(id) {
    var student = sinhVienList.find(function(s) {
        return s.ID === id;
    });
    
    if (student) {
        document.getElementById('txtMaSinhVien').value = student.MaSinhVien;
        document.getElementById('txtHoTen').value = student.HoTen;
        document.getElementById('txtNgaySinh').value = student.NgaySinh;
        document.getElementById('selGioiTinh').value = student.GioiTinh;
        document.getElementById('txtLop').value = student.Lop;
        
        deleteStudent(id);
        displayStudents();
    }
}

// Xóa sinh viên
function deleteStudent(id) {
    sinhVienList = sinhVienList.filter(function(s) {
        return s.ID !== id;
    });
    
    displayStudents();
}

// Sinh ID duy nhất
function generateID() {
    return Math.floor(Math.random() * 10000);
}
