const express=require('express');
var router=express.Router();
const config=require('../config/database');
const Saree=require('../models/saree');
const Payment = require('../models/payment');
const SelectedSarees = require('../models/selectedsarees');

//const User=require('./models/user');

var calculatePaybleAmount=function(sareeId,mode,newQty,oldQty){
	console.log("in calculatePaybleAmount",newQty,oldQty);

	var price=0;
	Saree.findOne({_id:sareeId},function(err,saree){
		var oldQuantity=0;
		var quantity=parseInt(newQty);
		var Total=0;
		if(!err){
			if(saree){
				console.log("if product available",saree);
				price =parseFloat(saree.price);
				Payment.findOne({},function(err,obj){
					if(!err){
						if(!obj && mode== "ADD"){
							console.log("in ADD method if loop")
							Total=((parseFloat(price)*quantity)).toString();
							var net_quantity=parseInt(quantity);
							obj=new Payment({Total:Total,quantity:net_quantity});
							console.log("obj",obj);
							obj.save(function (err) { console.log(' saved successfully'); });
						}
						else{
							var oldQuantity=(parseInt(obj.quantity) - 0);
							//var oldQuantity = parseInt(obj.quantity);//(parseInt(obj.quantity) - 0);
                            var q_old = parseInt(oldQty);
                            var q_new = parseInt(newQty);
                            if (mode == "ADD") {
                                quantity = parseInt(quantity);
                                Total = (parseFloat(obj.Total) + (parseFloat(price) * quantity)).toString();
                                quantity = quantity + oldQuantity;
                            }
                            else if (mode == "EDIT") {
                                quantity = oldQuantity + q_new - q_old;
                                console.log('quant-calcu: oldquanitity' + oldQuantity + ' q_new:' + q_new + '  q_old:' +q_old);
                                Total = (parseFloat(obj.Total) + (parseFloat(price) * q_new)- (parseFloat(price) * q_old)).toString();
                            }
                            else {
                                Total = (parseFloat(obj.Total) - (parseFloat(price) * quantity)).toString();
                                quantity = parseInt(obj.quantity)  - quantity;

                            }
                            Payment.findOneAndUpdate({ quantity: oldQuantity }, { $set: { quantity: quantity, Total: Total } }, { upsert: true, new: true }, function (err, doc) {
                                if (err) {
                                    console.log("Something wrong when updating data!");
                                }

                                console.log("updated" + JSON.stringify(doc));
                                console.log('payment  updated successfully');

                            });
						}
					}
				});
			}
		}

	});
}


router.get('/selectedsarees',function(req,res){
	var sareesArr = [];
    var sareesList = [];
	Saree.find({}).lean().exec(function (err, sareeInfo) {
		sareesArr = sareeInfo;
		SelectedSarees.find({}).lean().exec(function (err, sarees) {
			console.log("selectedproducts",sarees);
			for (var i = 0; i < sarees.length; i++) {
				//console.log("productsArr",productsArr);
                    for (var j in sareesArr) {
                        if (sareesArr[j]._id == sarees[i].id) {
                            sarees[i].info = sareesArr[j];
                        }
                    }
                }
                sareesList = sarees;
                //console.log("productsList",productsList);
                return res.end(JSON.stringify(sareesList));
		});
	});
});


//add the product into cart bt calling selectedProducts db

router.post('/selectedsarees',function(req,res){
	var sareeId=req.body.id;
	var quantity=req.body.qty;

	SelectedSarees.findOne({id:sareeId},function(err,saree){
		if(!err){
			if(!saree){
				saree=new SelectedSarees({id:sareeId,qty:quantity});
				console.log('product2:' + JSON.stringify(saree));
				saree.save(function (err) {
                            if (!err) {
                                calculatePaybleAmount(sareeId, "ADD", quantity);
                                console.log('Saree  saved successfully');
                            }
                        });
			}
		
		else{
			console.log('product2:' + JSON.stringify(saree));

			var quant = parseInt(quantity);
			//var quant_th=qty;
			console.log("saree.qty",saree.qty);
            var old_quant = parseInt(saree.qty);
            var totalqty=saree.qty + quant;

            //console.log("var quant_th=qty;",quant_th)
            console.log('quantity:' + quant);
            SelectedSarees.findOneAndUpdate({ id: sareeId},{ $set: { qty: totalqty }},{ upsert: true, new: true }, function (err, doc) {
            	if (err) {
                                console.log("Something wrong when updating data!");
                         }
                calculatePaybleAmount(sareeId, "EDIT", quant, old_quant);
                console.log("updated" + JSON.stringify(doc));
                console.log('saree  updated successfully');
            });
		}
	}
	});
	res.sendStatus(200);
});



router.post('/deleteselectedsarees',function(req,res){
	console.log("inside deleteselectedsarees");
	var sareeId=req.body.id;
	var qty=req.body.qty;
	console.log("deleteselectedsarees productId",sareeId);
	console.log("deleteselectedsarees qty",qty);
	SelectedSarees.findOneAndRemove({id:sareeId},function(err){
		if(err) throw err;
		calculatePaybleAmount(sareeId,"REMOVE",qty);
		res.sendStatus(200);
	});
});

router.post('/updateselectedsarees',function(req,res){
	console.log("inside updateselectedsarees");

	var sareeId=req.body.id;
	console.log("productId in updateselectedsarees",sareeId);
	var oldQty=req.body.oldqty;
	var newQty=req.body.newqty;
	console.log("productId,oldqty,newqty",sareeId,oldQty,newQty);
	SelectedSarees.findOneAndUpdate({id:sareeId},{ $set: { qty: newQty }},{ upsert: true, new: true },function(err,doc){
		if(err) throw err;
		calculatePaybleAmount(sareeId,"EDIT",newQty,oldQty);
		console.log("updated" + JSON.stringify(doc));
        console.log('saree  updated successfully');
		
	});
	res.sendStatus(200);

});


router.get('/guidePrice',function(req,res){
	console.log("inside guidePrice method");
	var Total=0;
	var discount=0;
	var amount=0;
	var qty=0;
	var enableFreeDelivery = false;
    var enableDiscount = false;
    var shippingPrice = 100;
    shippingPrice = parseFloat(shippingPrice).toFixed(2);

    Payment.findOne({},function(err,obj){
    	console.log("doc in inside",obj)
    	if(!err){
    		if(obj){
    			Total=parseFloat(obj.Total);
    			qty=parseFloat(obj.quantity);
    			if(Total> 2000){
    				enableFreeDelivery=true;
    				shippingPrice=0;
    			}
    			if(qty>10){
    				enableDiscount=true;
    				discount=0.50*parseFloat(Total)
    			}
    			amount=parseFloat(Total)-parseFloat(discount) +parseFloat(shippingPrice);
    			Total=parseFloat(Total).toFixed(2);
    			discount = parseFloat(discount).toFixed(2);
                amount= parseFloat(amount).toFixed(2);
                res.status(200).json({Total:Total.toString(),discount:discount.toString(),amount:amount.toString(),enableFreeDelivery:enableFreeDelivery,enableDiscount:enableDiscount,shippingPrice:shippingPrice});

    		}
    	}

    });
    res.status(200);
});

module.exports=router;