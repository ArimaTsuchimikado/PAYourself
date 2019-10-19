// --------- //
//  Product  //
// --------- //
function Product(name, price, category) {
	this.name = name;
	this.price = price;
	this.category = category;
	this.description = "";
}

Product.prototype.PriceString = function() {
	return this.price;
}