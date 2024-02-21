// ham generate random information 
function generateRandomInformation(id) {
    var randomInformation = {
        "id": id,
        "name": "Trần Đức",
        "age": 20,
        "class": "KTPM",
        "GPA": 3.5,
    }
    return randomInformation;
}

function generateRandomStudent() {
    var number = document.getElementById("number").value;
    console.log("number: " + number);
    for (var i = 0; i < number; i++) {
        var student = generateRandomInformation(i);
        localStorage.setItem(i, JSON.stringify(student));
    }
    document.getElementById("number").value = "";
}

function showEditForm() {
    var id = document.getElementById("number").value;
    console.log("id: " + id);
    if (id == "") {
        window.alert("Please enter student id");
        return;
    }
    document.getElementById("number").value = "";
    editStudentProfile(id);
}

function editStudentProfile(id) {
    var student = localStorage.getItem(id);
    if (student != null) {
        var form = document.getElementById("form2");
        form.style.display = "block";

        console.log(JSON.parse(student));
        student = JSON.parse(student);

        document.getElementById("msv").value = parseInt(student.id);
        document.getElementById("name").value = String(student.name);
        document.getElementById("age").value = parseInt(student.age);
        document.getElementById("class").value = String(student.class);
        document.getElementById("GPA").value = parseFloat(student.GPA);
    } else {
        console.log(localStorage.getItem(document.getElementById("number").value));
        console.log("Student not found");
        alert("Student not found");
        document.getElementById("form2").style.display = "none";
    }
    return student;
}

function saveStudentProfile() {
    var newStudent = {
        "id": parseInt(document.getElementById("msv").value),
        "name": String(document.getElementById("name").value),
        "age": parseInt(document.getElementById("age").value),
        "class": String(document.getElementById("class").value),
        "GPA": parseFloat(document.getElementById("GPA").value),
    }
    localStorage.setItem(document.getElementById("msv").value, JSON.stringify(newStudent));
    document.getElementById("form2").style.display = "none";
}