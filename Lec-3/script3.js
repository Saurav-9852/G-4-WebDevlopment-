// let cart = ["Shoes", "Shirts", "Wallets"];

// function orderDetail(cart, cb){
    
//     // 1. Total no. of products
//     let totalproduct  = cart.length;
//     let totalprice = totalproduct*1000; 
    
//     // 2. total amount of products nos*1000
//     setTimeout(()=>{
//         console.log(`Total Product: ${totalproduct} and Total price: ${totalprice}`);
//         cb(totalproduct, totalprice);
//     },2000);

    
// }

// function orderSummary(totalproduct, totalprice,cb){
//     // total price and total products
//     // generate orderId
//     let orderId = Math.random()*100;
//     setTimeout(() => {
//         console.log(`OrderSummary-> TotalPrice:${totalprice} and Total product: ${totalproduct} and orderId : ${orderId}`);
//         cb(orderId);
//     },2000);

// }

// function paymentGateWay(orderId,cb){
//     // order id, product details and price, .. Payment is Successful
//     setTimeout(() => {
//         console.log(`PaymentGateway -> OrderId:  ${orderId}`);
//         cb();
//     }, 2000);
// }

// function Successful(){
//     // it will all the details about payment and product
//     setTimeout(() => {
//         console.log(`Payment is SuccessFul`);
//     }, 2000);
// }

// orderDetail(cart, (totalproduct,totalprice)=>{
//     orderSummary(totalproduct,totalprice,(orderId)=>{
//         paymentGateWay(orderId,()=>{
//             Successful();
//         })
//     })
// })




// let arr = [10,2,4,8,9,3];
// // let output = arr.filter(ele => ele>8);
// // console.log(output);

// Array.prototype.filterkaUse = function(logic){
    //     let output = []
    //     for(let i=0;i<this.length;i++){
        //         if(logic(this[i])){
            //             output.push(this[i]);
            //         }
            //     }
//     return output;
// }
8   
// let res = arr.filterkaUse(logic => logic>8);
// console.log(res)


let arr = [10,2,4,8,9,3];
const initialValue = 0;

