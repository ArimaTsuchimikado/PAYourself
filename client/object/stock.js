// ------- //
//  Stock  //
// ------- //
function Stock() {
	this.products = [];
	this.quantities = [];
}

Stock.prototype.AddProduct = function(name, quantity) {
	var index = this.products.indexOf(name);
	
	if (index >= 0) {
		this.products.push(name);
		this.quantities.push(quantity);
	}
	else {
		this.quantities[index] = this.quantities[index] + quantity;
		if (this.quantities[index] < 0)
			this.quantities[index] = 0;
	}
}

Stock.prototype.GetQuantity = function(name) {
	var index = this.products.indexOf(name);
	
	if (index >= 0) {
		return this.quantities[index];
	}
	else {
		return -1;
	}
}