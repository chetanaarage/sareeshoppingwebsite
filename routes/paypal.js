const express=require('express');
var router=express.Router();
var paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'ATS0pyFKo4VlvjiJj5jXlEH6bL_QfCGKSkeJHCl3Htb8cmAWb0ouMF3BchWG8EWagoIQu3NHRwW_h41T',
  'client_secret': 'EM8xLI0RCgMhh90Pl-FZFEro11ETfYbU48wsKZNNg5UAQhJRIBIrTEZ_PBvoOZmQnlj4NzPp_5B5WFJi'
});



router.post('/buy',function(req,res){

	const amount=req.body.amount.amount;
    const Total=req.body.amount.Total;
    const discount=req.body.amount.discount;
    const shippingPrice=req.body.amount.shippingPrice;
	console.log("in buy route amount",Total,shippingPrice,discount);
    const items=req.body.items;
    var basketItems=[];

    for(let i=0;i<items.length;i++){
        let item={
            name:items[i].info.name,
            price:items[i].info.price,
            currency:"INR",
            quantity:items[i].qty
        }
        basketItems.push(item)
    }
    console.log(basketItems);


	var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/paypal/process",
        "cancel_url": "http://localhost:3000/paypal/cancel"
    },
    "transactions": [{
        "item_list": {
            "items":basketItems
        },
        "amount": {
            "currency": "INR",
            "total": amount,
            "details": {
                "discount":discount,
                "shipping":shippingPrice,
                "subtotal": Total
            }
        },
        "description": "This is the payment description."
    }]
   }


   console.log("inside buy route",create_payment_json);
   createPay( create_payment_json ) 
        .then( ( transaction ) => {
            var id = transaction.id; 
            var links = transaction.links;
            var counter = links.length; 
            while( counter -- ) {
                if ( links[counter].method == 'REDIRECT') {
					// redirect to paypal where user approves the transaction 
					//console.log("")
                    return  res.json({sucess:true,href:links[counter].href});
                    //return res.redirect( links[counter].href )
                }
            }
        })
        .catch( ( err ) => { 
            console.log( err ); 
            res.redirect('/err');
        });

});

var createPay = ( create_payment_json ) => {
    return new Promise( ( resolve , reject ) => {
        paypal.payment.create(create_payment_json, function (error, payment) {
        	console.log("inside create payment_method")
         if ( error ) {
             reject(error); 
         }
        else {
        	console.log("payment resolved",payment);
            resolve(payment); 
        }
        }); 
    });
}


router.get('/err' , (req , res) => {
    console.log(req.query); 
    // res.redirect('/'); 
});			
	
 
 
// paypal.payment.create(create_payment_json, function (error, payment) {
//     if (error) {
//        console.log(error);
//     } else {
//         console.log("Create Payment Response");
//         console.log(payment);
//     }
// });


router.get('/process', function(req, res) {
	console.log("inside process payment_method")
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


router.get('/cancel', function(req, res) {
   res.send("Cancelled")
});





module.exports=router;





							
			
