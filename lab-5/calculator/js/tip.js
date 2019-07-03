
//alert("hi");
function calcTip() {
	var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	var totalElem = document.getElementById('total');
    var subtotal = subtotalElem.value;
    //alert("subtotal is" + subtotal);
    var tip = tipElem.value;
    //alert("subtotal is" + tip);
    var total = parseInt(subtotal) + (subtotal *( tip/100));
    //alert("tip/100 is" + (subtotal*( tip/100)));
    //alert("subtotal is" + total);
	totalElem.innerHTML = '$' + total;
}
