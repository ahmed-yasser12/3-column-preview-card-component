


// var productName=document.getElementById("productName");
// var productPrice=document.getElementById("productPrice");
// var productCategory=document.getElementById("productCategory");
// var productDesc=document.getElementById("productDesc");
// var mainBtn=document.getElementById("mainBtn");
// var products;
// if(localStorage.getItem("container")==null)
// {
//   products=[];
// }
// else
// {
//   products=JSON.parse(localStorage.getItem("container"));
//   displayproduct(products);
// }

// function addproduct()
// { 
//   if(validateProductName())
//   {
    
//       var product={name:productName.value,price:productPrice.value,category:productCategory.value,desc:productDesc.value};
//   // console.log(product);
//   // var products=[];
//       products.push(product);
//       localStorage.setItem("container",JSON.stringify(products));
//   // console.log(products);
//       displayproduct(products);
//       clear();
//     updateProduct(index);
    
//   }
//   else
//   {
//   alert(`product name is valide`);
//   }
  
// }

// function clear()
// {
//   productName.value="";
//   productPrice.value="";
//   productCategory.value="";
//   productDesc.value="";
// };

// function displayproduct(productlist)
// {
//   cartoona=``;
//   for(var i=0; i<productlist.length;i+=1)
//   {
//     cartoona+=` <tr>
//     <td>${i}</td>
//     <td>${productlist[i].name}</td>
//     <td>${productlist[i].price}</td>
//     <td>${productlist[i].category}</td>
//     <td>${productlist[i].desc}</td>
//     <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
//     <td><button onclick="deleteProduct(${i})" class="btn btn-success">delete</button></td>
//     </tr>`;
//   }
//   document.getElementById("tableRow").innerHTML=cartoona;
// };

// function deleteProduct(x)
// {
//   products.splice(x,1);
//   localStorage.setItem("container",JSON.stringify(products));
//   displayproduct(products);

// }

// function searchProduct(term)
// {
//   // var term="sam";
//   var searchProduct=[];
//   for(var i=0;i<products.length;i++)
//   {
//     if(products[i].name.toLowerCase().includes(term.toLowerCase())==true)
//     {
//       searchProduct.push(products[i])
//     }
//   }
//   displayproduct(searchProduct);
// }

// function updateProduct(index)
// {
//   productName.value=products[index].name;
//   productPrice.value=products[index].price;
//   productCategory.value=products[index].category;
//   productDesc.value=products[index].desc;
//   mainBtn.innerHTML="update product";
// }

// function validateProductName()
// {
//   var regex=/^[A-Z][a-z]{3,8}$/;
//   if(regex.test(productName.value))
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// }

// var x =document.getElementById("demo");

// document.addEventListener("mousemove",function(e){
//     x.style.left= e.clientX;
//     x.style.top= e.clientY;
//     // console.log(imges);
// })


// document.body.addEventListener("click",function(){
//   var r=Math.floor(Math.random()*255);
//   // var g=Math.floor(Math.random()*255);
//   // var b=Math.floor(Math.random()*255);
//   document.body.style.backgroundColor=`rgb(${r},0,0)`;
//   // alert("ksksksk")
// })


// document.body.addEventListener("click",function(kanba)
// {
//   console.log(kanba)
// });


// document.body.addEventListener('click',function(){
//   document.body.style.backgroundColor="rgb(255,223,55)"
// })

// var elememts=Array.from (document.querySelectorAll(".item img"));
// // console.log(elememts);
// var indexImge;
// var nextbtn=document.getElementById("next");
// var prevbtn=document.getElementById("prev");
// var closebtn=document.getElementById("times");
// // console.log(closebtn);

// for(var i=0; i<elememts.length;i++)
// {
//   elememts[i].addEventListener("click",function(e){
//     var x=document.querySelector(".captaion");
//     x.style.display="flex";
//     var imgSrc=e.target.getAttribute("src");
//     indexImge= elememts.indexOf(e.target);
//     // console.log(indexImge);
//     lightBox.style.back= `url(${imgSrc})`;
//   })
// }
// var lightBox=document.querySelector(".caption-img");
// // console.log(lightBox);
// // var x=document.querySelector(".captaion");
// // console.log(x);

// // document.style.bac
// function nextSlid()
// {
//   indexImge+=1;
//   if(indexImge==elememts.length)
//   {
//     indexImge=0;
//   }
//   // console.log(indexImge);
//   var imgSrc= elememts[indexImge].getAttribute("src");
//   lightBox.style.back= `url(${imgSrc})`;
// }
// function prevSlid()
// {
//   indexImge-=1;
//   if(indexImge<0)
//   {
//     indexImge=elememts.length-1;
//   }
//   // console.log(indexImge);
//   var imgSrc= elememts[indexImge].getAttribute("src");
//   lightBox.style.back= `url(${imgSrc})`;
// }
// nextbtn.addEventListener("click",function(){nextSlid();});
// prevbtn.addEventListener("click",function(){prevSlid();});


// var x=new XMLHttpRequest();
// var posts=[];
// x.open("Get","https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=fca791b46e6e48ca9b593024352bd312");
// x.send();
// x.addEventListener("readystatechange",function(){
//   if(x.readyState==4 &&x.status==200)
//   {
//     posts=JSON.parse(x.response).articles;
//     // console.log(posts);
//     display();
//   }
// })

// function display(){
//   cartonna=``;
//   for (var i = 0; i < posts.length; i++) {
//     cartonna+=`   <div class="col-md-6">
//   <div class="item">
//       <img class="w-100" src="${posts[i].urlToImage}">
//       <h2>${posts[i].title}</h2>
//       <i>${posts[i].url}</i>
//       <p>${posts[i].description}</p>
//       <p>${posts[i].content}</p>
//   </div>
// </div>`;
    
//   }
//   document.getElementById("rowDate").innerHTML=cartonna;
// }

// function one()
// {
//   return new Promise(function(callback)
//     {
//       console.log("one");
//       callback();
//     }
//   )
  
// }

// function two()
// {
//   return new Promise(function(callback)
//     {
//       console.log("two");
//       callback();
//     }
//   )
  
// }
// function three()
// {
//   return new Promise(function(callback)
//     {
//       console.log("three");
//       callback();
//     }
//   )
  
// }

// one().
// then(function(){return two();}).then(function(){three();})



// "use strict";
// var x=10;
// delete x;
// console.log(x);


// let x={
//     name:"ahmed",
//     age:    23,
//     salary:7000,
//     calcsalary:function()
//     {   
//     let taxes =()=>{
//             return (this.salary * 30)/100;
//         }
//     return this.salary - taxes();
//     }
// }
// console.log(x.calcsalary()) ;

// let x={title:"aggsh",price:233,onsale:true};

// //destructing => let {}=name of object;

// let {onsale,price}=x;
// console.log(onsale);



// function sum(...nums)
// {   
//     let sum=0
//     for (const num of nums) 
//     {
//         sum+=num;
//     }
//     console.log(sum);
// }

// sum(1,2,3,459,6,5);
// sum(22,44,55,34,4);



// let ages=new Object('ahmed');
// let adult=[1,5,67];
// let x={age:22,islive:true};
// Object.setPrototypeOf(adult,ages);
// Object.setPrototypeOf(x,adult)
// console.log(x);

// adult=ages.filter(function (x){return x>20;})
// console.log(adult);
// adult=ages.reduce((sum,x) => sum+=x);
// console.log(adult);

// contstructor function
// de func betamal object besatad this we new 
// bas lazam aol harv capital 

// function User(name,age ,gender){
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
// }
// User.prototype.login=function() {
//     console.log('hello.................');
// }
// let u1=new User('ahmed',34,'male');
// u1.login()
// let u2=new User('ali',22,'male');
// console.log(u2);


// class User
// {
//     constructor(name,age ,gender)
//     {
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//     login(){console.log('hello')};
// }
// let u1=new User('ahmed',22,'male')
// console.log(u1)
// u1.login();

// var x=['ahmed','mohamed','taher','osamaa','hassan','ahmed']
// console.log ([1,22,44,5,0].sort());
// x.reverse(); refect the array
// x.push('hazam'); add to the last
// x.unshift('mahmoud');add to the frist
// x.pop(); remove from the last
// x.shift(); //remove from the frist
// console.log (x.slice(1,4)); take spice from array
// x.splice(1,3,'yasser')
// x.toString() trun array to string
// x.join();
//x.lastIndexOf(); taken a the last thing which you are take it; 
//x.indexOf('ahmedee') response alast number
// console.log(x.indexOf('ahmedee'));
// var x1=['aya','mai'];
// x1.concat(x)
// console.log(x.concat(x1))

// var productName= document.getElementById('productName');
// var productPrice= document.getElementById('productPrice');
// var productCategory= document.getElementById('productCategory');
// var productDesc= document.getElementById('productDesc');
// var productcount= document.getElementById('productcount');
// var searchProduct=document.getElementById("searchproduct");
// var mainBtn=document.getElementById('btn1');
// console.log(mainBtn);
// // console.log(productName,productPrice,productCategory,productDesc);
// var productContainer;
// if(localStorage.getItem('products')==null)
// {
//     productContainer=[];
// }
// else
// {
//     productContainer=JSON.parse(localStorage.getItem('products'));
//     displayproduct(productContainer);
// }
// function addproduct()
// {
//     if(mainBtn.innerHTML='add product')
//     {
//         var product=
//     {
//         name:productName.value,
//         count:productcount.value,
//         price:productPrice.value,
//         category:productCategory.value,
//         Desc:productDesc.value,
//     }
//     productContainer.push(product);
//     localStorage.setItem('products',JSON.stringify(productContainer));
//     displayproduct(productContainer);
//     clear();
//     }
    

// }
// function displayproduct(productlist)
// {
//     cartoona=``;
//     for(var i=0;i<productlist.length;i++)
//     {
//         cartoona+=`<tr> 
//         <td>${i}</td> 
//         <td>${productlist[i].name} </td> 
//         <td> ${productlist[i].count}</td>
//         <td>${productlist[i].price}</td> 
//         <td>${productlist[i].category}</td>
//         <td>${productlist[i].Desc}</td>
//         <td> <button onclick='increseCount(${i})' class="btn btn-success"> <i class="fas fa-plus-circle"></i> </button></td>
//         <td> <button onclick='decreseCount(${i})' class="btn btn-success"> <i class="fas fa-minus-circle"></i> </button></td>
//         <td>
//             <button onclick='update(${i});' class="btn btn-warning">update</button>
//         </td>
//         <td>
//             <button onclick='deleteProduct(${i})' class="btn btn-info">delete</button>
//         </td>
//     </tr>`
//     }
//     document.getElementById('table').innerHTML=cartoona;
// }
// function searchProducts(term)
// {
//     var searchProduct=[];
//     for(var i=0;i<productContainer.length;i++)
//     {
//         if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true)
//         {
//             searchProduct.push(productContainer[i]);
//         }
//     }
//     displayproduct(searchProduct);
// }
// // searchProducts();

// function clear()
// {
//     productName.value='';
//     productPrice.value='';
//     productcount.value='';
//     productCategory.value='';
//     productDesc.value='';
// }
// function deleteProduct(x)
// {
//     productContainer.splice(x,1);
//     localStorage.setItem('products',JSON.stringify(productContainer));
//     displayproduct(productContainer);
// }
// function increseCount(index)
// {
//     productContainer[index].count++;
//     displayproduct(productContainer);
// }
// function decreseCount(index)
// {
//     productContainer[index].count--;
//     displayproduct(productContainer);
// }

// function update(num)
// {
//     productName.value=productContainer[num].name;
//     productPrice.value=productContainer[num].price;
//     productcount.value=productContainer[num].count;
//     productCategory.value=productContainer  [num].category;
//     productDesc.value=productContainer[num].Desc;
//     mainBtn.innerHTML='update Product';
// }


// document.body.addEventListener('keyup',function (e) 
// {
//     if (e.key=='a') {
//         console.log('heloo')
//     }
//     else
//     {
//         console.log('kfkl')
//     }
// })

// var x=document.querySelector('.test');
// // console.log(x);
// x.addEventListener('mousedown',function()
// {
//     console.log('hello');
// })


// var x=document.querySelector('input');
// // console.log(x);#
// x.style.backgroundColor='red';


// var imge=document.querySelector('img');
// console.log(imge);
// document.addEventListener('mousemove',function (e) 
// {
//     // console.log(e.clientX,e.clientY)
//     imge.style.top=e.clientY;
//     // imge.style.left=e.clientX;
// })

// var x=document.querySelector('h2');
// document.addEventListener('click',function()
// {
//     x.classList.add('mx-auto');
// })

















