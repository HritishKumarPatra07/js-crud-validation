let students = [];


let firstName = document.getElementById("firstName");
let age = document.getElementById("age");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let dob = document.getElementById("dob");
let gender = document.getElementById("gender");
let course = document.getElementById("course");
let state = document.getElementById("state");
let city = document.getElementById("city");
let pincode = document.getElementById("pincode");
let submitbtn = document.getElementById("submitbtn")

let form = document.getElementById("registrationForm");
let tableBody = document.getElementById("tableBody");




let firstNameError = document.getElementById("firstNameError");
let ageError = document.getElementById("ageError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let dobError = document.getElementById("dobError");
let genderError = document.getElementById("genderError");
let courseError = document.getElementById("courseError");
let stateError = document.getElementById("stateError");
let cityError = document.getElementById("cityError");
let pincodeError = document.getElementById("pincodeError");


function firstNameValidation() {
    const value = firstName.value.trim();

    if (value === "") {
        firstNameError.textContent = "Please Enter Your Name";
        firstName.classList.add("input-error");
        firstName.classList.remove("input-success");

        return false
    }

    if (value.length <= 3) {
        firstNameError.textContent = "Name Must Be Grethar Then 3 Character"
        firstName.classList.add("input-error");
        firstName.classList.remove("input-success");

        return false
    }
    firstNameError.textContent = "";
    firstName.classList.remove("input-error");
    firstName.classList.add("input-success");

    return true

}

function ageValidation() {
    const value = age.value.trim();

    if (value === "") {
        ageError.textContent = "Please Enter Your Age"
        age.classList.add("input-error")
        age.classList.remove("input-success");

        return false
    }

    if (value <= 0 || value > 100) {
        ageError.textContent = "Please Enter Your Valid Age (1 To 100)";
        age.classList.add("input-error")
        age.classList.remove("input-success");

        return false
    }
    ageError.textContent = "";
    age.classList.remove("input-error")
    age.classList.add("input-success");

    return true
}

function emailValidation() {
    const value = email.value.trim();
    const EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (value === "") {
        emailError.textContent = "Please Enter Your Email";
        email.classList.add("input-error");
        email.classList.remove("input-success");

        return false

    }

    if (!EmailPattern.test(value)) {
        emailError.textContent = "Enter Your Valid Email";
        email.classList.add("input-error");
        email.classList.remove("input-success");
        return false
    }
    emailError.textContent = "";
    email.classList.remove("input-error");
    email.classList.add("input-success");
    return true


}


function phoneValidation() {
    const value = phone.value.trim();
    const phonePattern = /^[0-9]+$/;

    if (value === "") {
        phoneError.textContent = "Please Enter Your Phone Number";
        phone.classList.add("input-error");
        phone.classList.remove("input-success");

        return false

    }

    if (value.length !== 10 || !phonePattern.test(value)) {
        phoneError.textContent = "Enter Your 10 Digit Valid Number";
        phone.classList.add("input-error");
        phone.classList.remove("input-success");

        return false
    }
    phoneError.textContent = "";
    phone.classList.remove("input-error");
    phone.classList.add("input-success");

    return true

}

function dobvalidation() {
    const value = dob.value.trim();

    if (value === "") {
        dobError.textContent = "Please Enter Your Date-Of-Birth"
        dob.classList.add("input-error")
        dob.classList.remove("input-success")

        return false
    }
    dobError.textContent = "";
    dob.classList.remove("input-error");
    dob.classList.add("input-success");

    return true
}

function gendervalidation() {
    const value = gender.value.trim();

    if (value === "") {
        genderError.textContent = "Please Enter Your Gender"
        gender.classList.add("input-error")
        gender.classList.remove("input-success")

        return false
    }
    genderError.textContent = "";
    gender.classList.remove("input-error");
    gender.classList.add("input-success");

    return true
}

function coursevalidation() {
    const value = course.value.trim();

    if (value === "") {
        courseError.textContent = "Please Enter Your Course"
        course.classList.add("input-error")
        course.classList.remove("input-success")

        return false
    }
    courseError.textContent = "";
    course.classList.remove("input-error");
    course.classList.add("input-success");

    return true
}

function statevalidation() {
    const value = state.value.trim();

    if (value === "") {
        stateError.textContent = "Please Enter Your state"
        state.classList.add("input-error")
        state.classList.remove("input-success")

        return false
    }
    stateError.textContent = "";
    state.classList.remove("input-error");
    state.classList.add("input-success");

    return true
}

function cityvalidation() {
    const value = city.value.trim();

    if (value === "") {
        cityError.textContent = "Please Enter Your city"
        city.classList.add("input-error")
        city.classList.remove("input-success")

        return false
    }
    cityError.textContent = "";
    city.classList.remove("input-error");
    city.classList.add("input-success");

    return true
}


function pincodeValidation() {
    const value = pincode.value.trim();
    const PincodePattern = /^[0-9]{6}$/;

    if (value === "") {
        pincodeError.textContent = "Please Enter Your Pincode";
        pincode.classList.add("input-error");
        pincode.classList.remove("input-success");

        return false

    }

    if (value.length !== 6 || !PincodePattern.test(value)) {
        pincodeError.textContent = "Enter Your 6 Digit Valid pincode";
        pincode.classList.add("input-error");
        pincode.classList.remove("input-success");

        return false
    }
    pincodeError.textContent = "";
    pincode.classList.remove("input-error");
    pincode.classList.add("input-success");

    return true

}


function checkDuplicate() {
    for (item of students) {
        if (item.email === email.value) {
            emailError.textContent = "Email Already Exists";
            email.classList.add("input-error");
            email.classList.remove("input-success");

            return false
        }

        if (item.phone === phone.value) {
            phoneError.textContent = "Number Already Exists";
            phone.classList.add("input-error");
            phone.classList.remove("input-success");

            return false

        }
        emailError.textContent = "";
        email.classList.remove("input-error");
        email.classList.add("input-success");

        phoneError.textContent = "";
        phone.classList.remove("input-error");
        phone.classList.add("input-success");

        return true


    }
}


function DisplayData() {
    tableBody.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        const item = students[ i ];

        let tr = document.createElement("tr");

        let td0 = document.createElement("td");
        td0.textContent = i + 1;
        tr.appendChild(td0)

        let td1 = document.createElement("td");
        td1.textContent = item.firstName;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = item.age;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = item.email;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = item.phone;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = item.dob;
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = item.gender;
        tr.appendChild(td6);

        let td7 = document.createElement("td");
        td7.textContent = item.course;
        tr.appendChild(td7);

        let td8 = document.createElement("td");
        td8.textContent = item.state;
        tr.appendChild(td8);

        let td9 = document.createElement("td");
        td9.textContent = item.city;
        tr.appendChild(td9);

        let td10 = document.createElement("td");
        td10.textContent = item.pincode;
        tr.appendChild(td10);

        let td11 = document.createElement("td");


        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.dataset.id = item.id;
        editBtn.dataset.action = "edit";
        editBtn.classList.add("edit-btn");


        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.dataset.id = item.id;
        deleteBtn.dataset.action = "delete";
        deleteBtn.classList.add("delete-btn");


        td11.appendChild(editBtn);
        td11.appendChild(deleteBtn);


        tr.appendChild(td11);

        tableBody.appendChild(tr);



    }


}

function displayReset() {
    firstName.value = "";
    age.value = "";
    email.value = "";
    phone.value = "";
    dob.value = "";
    gender.value = "";
    course.value = "";
    state.value = "";
    city.value = "";
    city.innerHTML = "<option value=''>Select City</option>";
    city.disabled = true;
    pincode.value = "";

    firstName.classList.remove("input-success")
    age.classList.remove("input-success")
    email.classList.remove("input-success")
    phone.classList.remove("input-success")
    dob.classList.remove("input-success")
    gender.classList.remove("input-success")
    course.classList.remove("input-success")
    state.classList.remove("input-success")
    city.classList.remove("input-success")
    pincode.classList.remove("input-success")

}


const cityNames = {
    "Odisha": [ "Baripada", "Puri", "Bhubanswer" ],
    "West Bengal": [ "Kolkata", "Jhadgram" ],
    "Bihar": [ "Patna" ,"Gaya" ]
};


state.addEventListener("change", function () {
    cityload();

});


function cityload() {
    const statename = state.value;

    city.innerHTML = "<option value=''>Select City</option>";

    if (!statename) {
        city.disabled = true;
        return
    }

    const cities = cityNames[ statename ];

    for (const i of cities) {

        const cityName = document.createElement("option");
        cityName.value = i;
        cityName.textContent = i.toUpperCase();
        city.appendChild(cityName)
    }
    city.disabled = false
}




firstName.addEventListener("input", firstNameValidation);
age.addEventListener("input", ageValidation);
email.addEventListener("input", emailValidation);
phone.addEventListener("input", phoneValidation);
dob.addEventListener("input", dobvalidation);
gender.addEventListener("input", gendervalidation);
course.addEventListener("input", coursevalidation);
state.addEventListener("input", statevalidation);
city.addEventListener("input", cityvalidation);
pincode.addEventListener("input", pincodeValidation);

tableBody.addEventListener("click", function (e) {

    // ================= EDIT =================
    const editbtn = e.target.closest(".edit-btn");

    if (editbtn) {

        const id = Number(editbtn.dataset.id);

        for (let item of students) {

            if (item.id === id) {

                firstName.value = item.firstName;
                age.value = item.age;
                email.value = item.email;
                phone.value = item.phone;
                dob.value = item.dob;
                gender.value = item.gender;
                course.value = item.course;
                state.value = item.state;

                cityload();
                city.value = item.city;

                pincode.value = item.pincode;

                submitbtn.textContent = "Update Student";
                submitbtn.dataset.action = "edit";
                submitbtn.dataset.id = id;

                return;
            }
        }
    }

    // ================= DELETE =================
    const deletebtn = e.target.closest(".delete-btn");

    if (deletebtn) {

        const id = Number(deletebtn.dataset.id);

        for (let i = 0; i < students.length; i++) {

            if (students[ i ].id === id) {
                students.splice(i, 1);
                break;
            }

        }

        // Table Refresh
        DisplayData();

        // Form Reset
        displayReset();

        // Button Reset
        submitbtn.textContent = "Add Student";
        submitbtn.dataset.action = "";
        submitbtn.dataset.id = "";

        return;
    }

});

let id = 1;
submitbtn.addEventListener("click", function (event) {
    // debugger;
    const action = event.target.dataset.action;

    if (action == "edit") {

        event.preventDefault();

        const id = event.target.dataset.id;

        for (let i = 0; i < students.length; i++) {

            if (students[ i ].id == id) {

                students[ i ].firstName = firstName.value;
                students[ i ].age = age.value;
                students[ i ].email = email.value;
                students[ i ].phone = phone.value;
                students[ i ].dob = dob.value;
                students[ i ].gender = gender.value;
                students[ i ].course = course.value;
                students[ i ].state = state.value;
                students[ i ].city = city.value;
                students[ i ].pincode = pincode.value;

                break;
            }
        }

        DisplayData();
        displayReset();

        submitbtn.textContent = "Submit";
        submitbtn.dataset.action = "";
        submitbtn.dataset.id = "";

        alert("Updated Successfully");
    } else {

        event.preventDefault();
        const isfirstNameValid = firstNameValidation();
        const isageValid = ageValidation();
        const isemailValid = emailValidation();
        const isphoneValid = phoneValidation();
        const isdobValid = dobvalidation();
        const isgenderValid = gendervalidation();
        const iscourseValid = coursevalidation();
        const isstateValid = statevalidation();
        const iscityValid = cityvalidation();
        const ispincodeValid = pincodeValidation();


        if (isfirstNameValid === false ||
            isageValid === false ||
            isemailValid === false ||
            isphoneValid === false ||
            isdobValid === false ||
            isgenderValid === false ||
            iscourseValid === false ||
            isstateValid === false ||
            iscityValid === false ||
            ispincodeValid === false
        ) {
            event.preventDefault();
        }

        else {

            let student = {
                id: id++,
                firstName: firstName.value,
                age: age.value,
                email: email.value,
                phone: phone.value,
                dob: dob.value,
                gender: gender.value,
                course: course.value,
                state: state.value,
                city: city.value,
                pincode: pincode.value
            };

            let check = checkDuplicate(student);

            if (check === false) {
                event.preventDefault();
                return
            }
            students.push(student);
            DisplayData();
            displayReset();
            alert("submit succseefully")
        }
    }
})