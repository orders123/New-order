// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// var multer = require('multer');

var mongojs=require('mongojs');
// var db=mongojs('test',['loginDetails1']);
var db=mongojs('Orders',['itemTypes']);
"use strict";
// bodyParser={
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// };

// db.moduleName.insert({name:'opal'});

// Get our API routes
//const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/api', api);


app.get('/allItems',function(req,res){
	console.log("oooooooooooooooooooooooooooooooooooo")
 db.itemData.find(function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
})

app.delete('/onedelete:idd',function(req,res){
  console.log("ddddddddddddddddddddddddddddddddd")
  // var name=req.body.name
  // console.log(name)
  var id=req.params.idd;
  console.log(id)
  
  
  
 db.itemData.remove({_id: mongojs.ObjectId(id)},function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
})

app.get('/getitemtypes',function(req,res){
  console.log("00000000000000")
 
 db.itemType.find(function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
}) 




app.get('/getcategory',function(req,res){
  console.log("99999999999")
 
 db.category.find(function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
})

app.get('/getinvgrp',function(req,res){
  console.log("99999999999")
 
 db.inventoryGroupName.find(function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
})

app.get('/gettax',function(req,res){
  console.log("99999999999")
 
 db.tax.find(function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
})



// app.post('/api',function(req,res)
// {
//   console.log("ooooooooooooooooo")

//  db.moduleName.insert(req.body,function(err,doc)
//         {
//         res.json(doc);
//         console.log(doc)
//         })
        
//        });

  //////////////////// ALL SAVES///////////////////////////////


  
// app.post('/postDevicesName1234',function(req,res)
// {
//   console.log(" vvvvvvvvvvvv     oooooooooooooooojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
 
//   // db.itemData.insert(req.body,function(err,doc)
//   //       {
//   //       res.json(doc);
//   //       console.log(doc)
//   //       })
        
//        }); 

app.post('/postDevicesName',function(req,res)
{
  console.log("oooooooooooooooojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
 
  db.itemData.insert(req.body,function(err,doc)
        {
        res.json(doc);
        console.log(doc)
        })
        
       }); 

app.post('/1234',function(req,res)
{
  console.log(req.body.Name)
  console.log(req.body.Type)

  var name=req.body.Name;
  console.log(name+"kkklllllllllllllll");
  var type=req.body.Type;
  console.log(type+"''''''''''''''''''''''''''''");
  var salcategory=req.body.category;
  console.log(salcategory)

  var invgrp=req.body.invgroup;
  console.log(invgrp);
  var sku=req.body.sku;
  var brand=req.body.brand;
  var uom=req.body.uom;
  var tax=req.body.tax;
  var date=req.body.date;
  var description=req.body.desc;
  var imageUrl=req.body.Urlimage;
  
    



        db.itemType.find({"itemType":type},function(err,doc12){
          console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
         console.log(doc12[0]) ;
         var itemtypeid=doc12[0].itemTypeId;
         console.log(itemtypeid) ;

         db.category.find({"salecagory":salcategory},function(err,doc22){
          console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
         console.log(doc22[0]) ;
         var categoryid=doc22[0].salecategoryId;
         console.log(categoryid) ;


         db.inventoryGroupName.find({"InventoryGroupName":invgrp},function(err,doc32){
          console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
         console.log(doc32[0]) ;
         var invid=doc32[0].Invid;
         console.log(invid) ;

       

     
 
  db.itemData.insert({"discription":description,"date":date,"invGrpId":invid,"itemtypeId":itemtypeid,"itemName":name,"saleCatgoryId":categoryid
             ,"sku":sku,"brand":brand,"Uom":uom,"tax":tax,"invgrp":invgrp,"category":salcategory,"itemType":type,"Image":imageUrl},function(err,doc)
        {
        res.json(doc);
        console.log(doc)
        })
        
      });
      });
      });
  }); 

//        app.post('/1234',function(req,res)
// {
//   console.log(req.body.firstname)
//   console.log(req.body.lastname)

//   console.log("llllllllllllllllllllllllllllllllllll")
 
//   db.itemType.find({"itemType":"Traded"},function(err,doc12){
//       console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
//      console.log(doc[0]) ;
//      var itemtypeid=doc[0].itemTypeId;
//      console.log(itemtypeid) ;
//   db.itemData.insert({"itemName":req.body.firstname,"itemTypeId":itemtypeid},function(err,doc)
//   {
//   res.json(doc);
//   console.log(doc)
//   })
// })
//        }); 
 
// app.get('/gettypeid:ittype',function(req,res){

//   console.log("tyiididididididididdidi")
//   var type=req.params.ittype;
//   console.log(type);
 
//  db.itemType.find({"itemType":type},function(err,doc){
//       // res.json(doc);
//      console.log(doc) ;
//      var itemtypeid=doc[0].itemTypeId;

//      global.itemtypeid
//      console.log(itemtypeid+"kkkkkkkkkkkkkkkkkk");
//      if(itemtypeid.length!=0){
//         // delete itemtypeid._id;
//       console.log("vvvvvvvvvvvvvvvvvvvv")
//       db.itemData.insert({"itemTypeId":itemtypeid});
//      }
     
    
//   })
   
// })

app.get('/getcateid:salecagory',function(req,res){
  console.log("tyiididididididididdidi")
  var category=req.params.salecagory
  console.log(category);
 
 db.category.find({"salecagory":category},function(err,doc){
      // res.json(doc);
     console.log(doc) ;
     var catid=doc[0].salecagorytId;
  console.log(catid);
  })
  
  
})  

    
//postallIds

      //  app.post('/vijay:alldetails',function(req,res)
      //  {
      //    var str=req.params.alldetails;
      //    console.log(str)
      //   var details = str.split(","); 
      //   var itemName=details[0];

        


      //   console.log(itemName)
      //   var selitemType=details[1];
      //   console.log(selitemType)
      //    console.log("oooooooooooooooojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
      //    console.log(req.body.firstname)
      //    console.log(req.body.lastname)
           

      //    db.itemType.find({"itemType":selitemType},function(err,doc1){
      //     // res.json(doc);
      //    console.log(doc1) ;
      //    var itemtypeid=doc1[0].itemTypeId;
      //    console.log(itemtypeid) ;

        
        
         
      //    db.itemData.insert({"itemName":req.body.firstname,"itemTypeId":itemtypeid},function(err,doc)
      //          {
      //          res.json(doc);
      //          console.log(doc)
      //          })
               

      //         });
      //   });  
        
       

  
      
       
    

  app.get('/getSelType:type',function(req,res){
    var type=req.params.type
        console.log("ttttttttttttttt")
       
       db.itemType.find({"itemType":type},function(err,doc){
            res.json(doc);
           console.log(doc) ;
        })
      })



// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '2000';
app.set('port', port);

/**
 * Create HTTP server.
 */
//const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));