const express=require('express');
var router=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');
const Saree=require('../models/saree');
const Category=require('../models/category');
const fs=require("fs");


router.post('/addSaree',function(req,res,next){
	var newSaree= new Saree({
		name:req.body.name,
		description:req.body.description,
		category:req.body.category,
		image:req.body.image,
		price:req.body.price
	});

	Saree.addSaree(newSaree,function(err,saree){
		if(err){
			res.json({success:false,msg:'adding saree failed'});
		}
		else
		{
			res.json({success:true,msg:'saree added..!!'});
		}
	});
});

router.post('/addnewCategory',function(req,res,next){
	var newCategory= new Category({
		name:req.body.name
	});

	Category.addnewCategory(newCategory,function(err,category){
		if(err){
			res.json({success:false,msg:'adding Category failed'});
		}
		else
		{
			res.json({success:true,msg:'category added..!!'});
		}
	});
});


router.get('/getSarees',function(req,res,next){
	
	Saree.getSarees(function(err,saree){
		if(err){
			res.json({success:false,msg:'no sarees'});
		}else{
			//console.log(product);
			//var base64 = (saree.image.toString('base64'));
            //res.send(base64)
            //(new Buffer(result)).toString('base64')
			res.json({success:true,saree:saree});
			// let buff = fs.readFileSync(saree.image);  
			// let base64data = buff.toString('base64');

			// console.log('Image converted to base 64 is:\n\n' + base64data); 

			//console.log('"' + data + '" converted to Base64 is "' + base64data + '"');  
		}
	})
});


router.get('/getCategories',function(req,res,next){
	Category.getCategories(function(err,category){
		if(err){
			res.json({success:false,mss:"no categories"});
		}else{
			res.json({success:true,category:category});
		}
	})

});

module.exports=router;