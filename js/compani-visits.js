// -----------------set filter :}}} -----------
var FactorFilter = document.getElementById("factor-filter");
var over = document.getElementById("over");
var Open = document.getElementById("open");
var HalfOpen = document.getElementById("half-open");
var backed = document.getElementById("backed");
var DontNeed = document.getElementById("dont-need");
var LastYear = document.getElementById("LastYear");
var ThisYear = document.getElementById("ThisYear");

FactorFilter.addEventListener('change', function () {

    var x = FactorFilter.value;

    if (FactorFilter.value == 1) {
        over.classList.remove("hide1")
        document.getElementById("op1").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 2) {
        Open.classList.remove("hide2")
        document.getElementById("op2").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 3) {
        HalfOpen.classList.remove("hide3")
        document.getElementById("op3").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 4) {
        DontNeed.classList.remove("hide4")
        document.getElementById("op4").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 5) {
        backed.classList.remove("hide5")
        document.getElementById("op5").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 6) {
        LastYear.classList.remove("hide6")
        document.getElementById("op6").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 7) {
        ThisYear.classList.remove("hide7")
        document.getElementById("op7").setAttribute('disabled', true)
    }

})
over.addEventListener('click', function () {
    over.classList.add("hide1")
    document.getElementById("op1").removeAttribute('disabled', true)

})
Open.addEventListener('click', function () {
    Open.classList.add("hide2")
    document.getElementById("op2").removeAttribute('disabled', true)
})
HalfOpen.addEventListener('click', function () {
    HalfOpen.classList.add("hide3")
    document.getElementById("op3").removeAttribute('disabled', true)
})
DontNeed.addEventListener('click', function () {

    DontNeed.classList.add("hide4")
    document.getElementById("op4").removeAttribute('disabled', true)
})
backed.addEventListener('click', function () {
    backed.classList.add("hide5")
    document.getElementById("op5").removeAttribute('disabled', true)
})
LastYear.addEventListener('click', function () {
    LastYear.classList.add("hide6")
    document.getElementById("op6").removeAttribute('disabled', true)
})
ThisYear.addEventListener('click', function () {
    ThisYear.classList.add("hide7")
    document.getElementById("op7").removeAttribute('disabled', true)
})

document.getElementById("Create").addEventListener('click', function () {
    window.location.assign("./get-visit.html");
})

// let BuyerCodeFilter = document.getElementById("buyer-code-filter")

class PersianDate extends Date {
    constructor(...args) {
        super(...args);
    }

    toLocaleDateString = () => super.toLocaleDateString('fa-IR-u-nu-latn');
    getParts = () => this.toLocaleDateString().split("/")
    getDay = () => super.getDay() === 6 ? 0 : super.getDay() + 1
    getDate = () => this.getParts()[2];
    getMonth = () => this.getParts()[1] - 1;
    getFullYear = () => this.getParts()[0];
    getMonthName = () => this.toLocaleDateString("fa-IR", { month: 'long' });
    getDayName = () => this.toLocaleDateString("fa-IR", { weekday: 'long' });
}
let date = new PersianDate();
const zeroFill = n => ('0' + n).slice(-2);

let currentDate = `${date.getFullYear()}/${zeroFill(date.getMonth()+1)}/${zeroFill(date.getDate())}`;
document.getElementById("date").value = currentDate;
