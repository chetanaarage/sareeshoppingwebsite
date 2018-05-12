var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
    Total: String,
    quantity: String
});

var Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;