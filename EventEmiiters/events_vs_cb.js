/**
 * Imagine a shopping application that has to access data from a database, manipulate that data,
 *  then refresh the database and send the status back to the client. This could be fetching 
 * a shopping cart, adding an item, and letting the customer know that the cart has been updated.
 *  The first example of this is written using callbacks.
 */

var initialize = function() {
    retrieveCart(function(err, data) {
        if (err) console.log(err);
        data['new'] = 'other thing';
        updateCart(data, function(err, result) {
            if (err) console.log(err);
            sendResults(result, function(err, status) {
                if (err) console.log(err);
                console.log(status);
            });
        });
    });
};

// simulated call to a database
var retrieveCart = function(callback) {
    var data = { item: 'thing' };
    return callback(null, data );
};

// simulated call to a database
var updateCart = function(data, callback) {
    return callback(null, data);
};

var sendResults = function(data, callback) {
    console.log(data);
    return callback(null, 'Cart Updated');
};

initialize();