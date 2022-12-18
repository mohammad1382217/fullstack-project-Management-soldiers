const LoginID = '{"employees":[' +
    '{"users":"03712345678","pass":"09207062003","id":"مهدی صیادی"}]}';

let user = document.getElementById("Email");
let loginpass = document.getElementById("password")

document.getElementById("arrival").addEventListener("click", function () {

    const obj = JSON.parse(LoginID);

    for (let i = 0; i < LoginID.length; i++) {

        if (obj.employees[i].users === user.value && obj.employees[i].pass === loginpass.value) {
            alert(obj.employees[i].id + "  " + "شما با موفقیت وارد شدید");
            window.location.assign("./visitor-panel.html");
        }
    }
})

document.getElementById('see').addEventListener('click', function () {

    if (this.getAttribute('class') == 'fa-sharp fa-solid fa-eye') {
        this.setAttribute('class', 'fa-sharp fa-solid fa-eye-slash');
        document.getElementById('password').setAttribute('type', 'password');
    }

    else {
        this.setAttribute('class', 'fa-sharp fa-solid fa-eye');
        document.getElementById('password').setAttribute('type', 'text');
    }
})




