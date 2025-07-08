// console.log("Script Start");


// // setTimeout(()=>{
// //     console.log("I am going to market");
// // },2000);

// // setTimeout(()=>{
// //     console.log("I am going to restaurant");
// // },4000);

// // setTimeout(()=>{
// //     console.log("I am eating");
// // },3000);

// function walkinRestaurant(cb){
//     console.log("I am going to restaurant");
//     setTimeout(cb, 3000);
// }

// function menucheck(cb){
//     console.log("I am Checking menu");
//     setTimeout(cb,8000);
// }

// function foodOrder(cb){
//     console.log("I am ordering food");
//     setTimeout(cb, 6000);
// }

// function havinglunch(cb){
//     console.log("I am having the food");
//     setTimeout(cb, 4000);
// }

// function billpay(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb, 2000);
// }

// function walkawayfromres(){
//     console.log("I am leaving the restaurant");
// }

// walkinRestaurant(()=>{
//     menucheck(()=>{
//         foodOrder(()=>{
//             havinglunch(()=>{
//                 billpay(()=>{
//                     walkawayfromres();
//                 })
//             })
//         })
//     })
// });


// console.log("Script End");




let arr = [2,3,4,5,6];


// function doubleArray(arr){
//     let newarr = [];
//     for(let i=0;i<arr.length;i++){
//         newarr.push(arr[i]*2);
//     }
//     return newarr;
// }

// console.log(doubleArray(arr));



// Array.prototype.doubleArray = function(){
//     let output = [];
//     for(var i=0;i<this.length;i++){
//         output.push(this[i]*2);
//     }
//     return output;
// }

// const output = arr.doubleArray();
// console.log(output);




Array.prototype.calculate = function(logic){
    let output = [];
    for(var i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

function logic(x){
    return x*x*x;
}

const output = arr.calculate(logic);
console.log(output);