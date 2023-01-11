/**
* Reducing callbacks
*/
var events = require('events');

//constructor function
var MyCart = function() {
    this.data = { item: 'thing' };
};

// make Mycart inherit from EventEmitter, and add methods that prototype so that all instances of Mycart can
// emmit events and have access to call the methods, 
MyCart.prototype = new events.EventEmitter();
MyCart.prototype.retrieveCart = function() {
    //Fetch Data then emit: send data through events
    this.emit('data', this.data);
};
MyCart.prototype.updateCart = function() {
    // Update data then emit
    this.emit('result', this.data);
};
MyCart.prototype.sendResults = function() {
    console.log(this.data);
    this.emit('complete');
};

var cart = new MyCart();
    cart.on('data', function(data) {
        cart.data['new'] = 'other thing';
        cart.updateCart();
    });
    cart.on('result', function(data) {
        cart.sendResults(data);
    });
    cart.on('complete', function() {
        console.log('Cart Updated');
    });
    cart.retrieveCart();