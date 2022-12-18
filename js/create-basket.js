var tBody = document.getElementById("tbody");
var tblData = document.getElementById("tblData");

var companyNameValue;
document.getElementById("company-name").addEventListener("change", function () {
    if (this.value == "Avandfar") {
        companyNameValue = "آوندفر";
    } else if (this.value == "Clatos") {
        companyNameValue = "کلاتوس";
    } else if (this.value == "Ariiana") {
        companyNameValue = "آرییانا";
    } else if (this.value == "Shilra") {
        companyNameValue = "شیلرا";
    }
});

var giftNameValue;
document.getElementById("gift-name").addEventListener("change", function () {
    if (this.value == "ansolin") {
        giftNameValue = "پک ده تایی انسولین";
    } else if (this.value == "pomad") {
        giftNameValue = "پوماد ضد افتاب صد تایی";
    } else if (this.value == "bandazh") {
        giftNameValue = "بانداژ سوختگی";
    } else if (this.value == "sorang") {
        giftNameValue = "سرنگ 10 cc";
    }
});

var tierTable = 1;
var rowCount = 0;
document.getElementById("addProduct").addEventListener("click", function () {
    let cellCount = tblData.rows[0].cells.length;
    let row = tBody.insertRow(rowCount);
    for (let j = 0; j < cellCount; j++) {
        let cell = row.insertCell(j);
    }
    tBody.rows[rowCount].cells[0].innerHTML = tierTable;
    tBody.rows[rowCount].cells[1].innerHTML = companyNameValue;
    tBody.rows[rowCount].cells[2].innerHTML = document.getElementById("product-name").value;
    tBody.rows[rowCount].cells[3].innerHTML = document.getElementById("product-desc").value;
    tBody.rows[rowCount].cells[4].innerHTML = document.getElementById("product-code").value;
    tBody.rows[rowCount].cells[5].innerHTML = document.getElementById("product-count").value;
    tBody.rows[rowCount].cells[6].innerHTML = document.getElementById("product-price").value;
    tBody.rows[rowCount].cells[7].innerHTML = document.getElementById("product-totalprice").value;
    tBody.rows[rowCount].cells[8].innerHTML = giftNameValue;
    tBody.rows[rowCount].cells[9].innerHTML = document.getElementById("gift-count").value;
    tBody.rows[rowCount].cells[10].innerHTML = document.getElementById("product-discount").value;
    tBody.rows[rowCount].cells[11].innerHTML = ((document.getElementById("product-totalprice").value) -(document.getElementById("product-discount").value));

    rowCount++;
    tierTable++;
})
