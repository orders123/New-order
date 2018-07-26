// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var mongojs=require('mongojs');
// var db=mongojs('test',['loginDetails1']);
var db=mongojs('Orders',['itemTypes']);

var db=mongojs('Orders',['salesCategory']);
var ObjectID = require('mongodb').ObjectID;

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


app.get('/kkkk',function(req,res){
	console.log("qqqqqqqqqqqqqqq")
 db.itemType.find(function(err,doc){
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


app.get('/CategoryDetail',function(req,res){

  // console.log("rahul")
  //  var mysort = { salecategory: -1 };
 
 db.salesCategory.find().sort({_id:-1},function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
}) 




app.get('/inventoryGroupDetails',function(req,res){

  // console.log("rahul")
  //  var mysort = { salecategory: -1 };
 
 db.inventoryGroup.find().sort({_id:-1},function(err,doc){
      res.json(doc);
     console.log(doc) ;
  })
}) 
 



 






// app.get('/CategoryDetail:categoryDetails',function(req,res){
//   console.log("rahul")
//   var category=req.params.categoryDetails
//   console.log(category);
 
//  db.salesCategory.find({"categoryDetails":category},function(err,doc){
//       // res.json(doc);
//      console.log(doc) ;
//   //    var catid=doc[0].salecagorytId;
//   // console.log(catid);
//   })
  
  
// })  


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
             ,"sku":sku,"brand":brand,"Uom":uom,"tax":tax,"invgrp":invgrp,"category":salcategory,"itemType":type},function(err,doc)
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





app.delete('/salCategory:delete',function(req,res){
   
  console.log("tyiididididididididdidi")
  var deletes=req.params.delete
  console.log(deletes);
 



db.salesCategory.remove({_id: mongojs.ObjectId(deletes)},function(err,doc){
  res.json(doc);
 console.log(doc) ;
})
})

  


app.delete('/invsGroup:edit',function(req,res){
   
  console.log("gggggggggggggg")
  var edid=req.params.edit
  console.log(edid);
 



db.inventoryGroup.remove({_id: mongojs.ObjectId(edid)},function(err,doc){
  res.json(doc);
 console.log(doc) ;
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
        
       

    
      //        app.post(function(req,res)
      //       {
      //         console.log("oooooooooooooooojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
 
      //       db.salesCategory.insert({"SalesCategoryNo":"SalesCategoryNo","SalesCategoryType":"SalesCategoryType"}, function(err,doc)
      //   {
      //   res.json(doc);
      //   console.log(doc)
      //   })
        
      //  });
      



            //  app.post('/',function(req,res)
            //  {
             
             
             
             
            //      db.salesCategory.insert({
            //         "moduleName":moduleName
            //      },function(err,doc)
            //          {
            //          res.json(doc);
            //          console.log(doc)
            //         });
             
             
            //  })
  

             app.post('/myCategoryDetail:details',function(req,res)
             {
                //var moduleName=req.params.moduleName;
                console.log("ooooooooooooooooooooooooooooooooooooooooooo")
                var details=req.params.details;
                console.log(details)
                var detail=details.split(',')
                var number=detail[0];
                var type=detail[1];
                var order=detail[2];
                
                
                console.log(number)

                
                 //var moduleName = str_array[1];
             //console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
             
                 db.salesCategory.insert({
                   "salecategory":number,
                   "SalesCategoryType" :type,
                   "SortedOrderNo":order
                  

                  } ,function(err,doc)
                     {
                     res.json(doc);
                     //console.log(doc)
                    });
                  })


                  


                  app.post('/inventoryGroup:groups',function(req,res)
                  {
                     //var moduleName=req.params.moduleName;
                     console.log("ooooooooooooooooooooooooooooooooooooooooooo")
                     var groups=req.params.groups;
                     console.log(groups)
                     var group=groups.split(',')
                     var number=group[0];
                     var groups=group[1];
                     var alias=group[2];
                     var order=group[3];

                     
                     console.log(number)
     
                     
                      //var moduleName = str_array[1];
                  //console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
                  
                      db.inventoryGroup.insert({
                        "InvGroupId":number,
                        "InvGroupName" :groups,
                      
                        "Alias":alias,
                        "SortOrder": order
                        
                       
     
                       } ,function(err,doc)
                          {
                          res.json(doc);
                          //console.log(doc)
                         });
                       })




 app.post('/editsalescategory:saledit',function(req,res){
   
 console.log("gggggggggggggg")
   var saledit=req.params.saledit
   console.log(saledit);
  
   

  
   
   var group=saledit.split(',')
   var number=group[0];
   console.log(number)
   console.log( typeof number);
   var groups=group[1];
   var alias=group[2];
   var id=group[3];
   console.log(id)

   
  
db.salesCategory.update({"_id":ObjectID(id)},{$set:{"salecategory": number,"SalesCategoryType":groups,"SortedOrderNo": alias }},function(err,doc){

   
      res.json(doc);
})

   
});




app.post('/editinventory:invedit',function(req,res){
   
  console.log("gggggggggggggg")
    var invedit=req.params.invedit
    console.log(invedit);
   
    
 
   
    
    var groups=invedit.split(',')
    var group=groups[0];
    console.log(group)
    console.log( typeof group);
    var name=groups[1];
    var alias=groups[2];
    var order=groups[3];
    var id=groups[4];
    console.log(id)
 
    
   
 db.inventoryGroup.update({"_id":ObjectID(id)},{$set:{"InvGroupId": group,"InvGroupName":name,"Alias": alias,"SortOrder":order }},function(err,doc){
 
    
       res.json(doc);
 })
 
    
 });
                       


























                      



  //  app.post('/editsalescategory:saledit',function(req,res)
  //  {
  //        //var moduleName=req.params.moduleName;
  //       console.log("ooooooooooooooooooooooooooooooooooooooooooo")
  //         var saledit=req.params.saledit;
  //        console.log(saledit)
  //          var saledit=saledit.split(',')
  //          var number=saledit[0];
  //          var type=saledit[1];
  //          var order=saledit[2];
                          
                          
  //           console.log(number)
          
                          
  //            //var moduleName = str_array[1];
  //        //console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
                       
  //                          db.salesCategory.update({
  //                            "salecategory":number,
  //                            "SalesCategoryType" :type,
  //                            "SortedOrderNo":order
                            
          
  //                           } ,function(err,doc)
  //                              {
  //                              res.json(doc);
  //                              //console.log(doc)
  //                             });
  //                           })
          
          
                            












    

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
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
//const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));