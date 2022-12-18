// connection
window.addEventListener("offline", function () {
    this.alert("اتصال به اینترنت را چک کنید")
})
window.addEventListener("online", function () {
    this.alert("اتصال اینترنت بر قرار است")
})
// menu
var menu = document.getElementById("menu");
var menuClose = document.getElementById("menuClose");
document.getElementById("addMenu").addEventListener("click", function () {
    menu.classList.toggle("show");
    menuClose.classList.toggle("visibaled")
})
menuClose.addEventListener("click", function () {
    menu.classList.toggle("show");
    menuClose.classList.toggle("visibaled")
})