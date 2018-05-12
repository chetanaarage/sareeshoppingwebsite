


app.get('/success', function(req, res) {
    var paymentId = req.query.paymentId;
    var payerId = { 'payer_id': req.query.PayerID };

    paypal.payment.execute(paymentId, payerId, function(error, payment){
        if(error){
            console.error(error);
        } else {
            if (payment.state === 'approved'){ 
                res.send('payment completed successfully');
                console.log(payment);
            } else {
                res.send('payment not successful');
            }
        }
    });
});