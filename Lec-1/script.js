// console.log("Hello World");

// console.log(a);

// var a = 123;

// console.log(a);

// function abc(){
//     console.log("This is function abc");
//     function hgf(){
//         console.log("This is hgf");
//     }
//     hgf();
// }

// abc();

// arrow function
// var a = 200;
// console.log(a);

// xyz();
// var xyz=()=>{
//     console.log("Xyz function calling");
// }

// var b=300;

// console.log(b);


// {
//     // Compound Statement
//     let a = 100;
//     let b = 200;
//     let c = 300;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     // console.log(d);
//     {
//         //Parent
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         {
//             //child
//             let d = 2000;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }


// function grandparent(){
//     var a = 100;
//     var b = 200;
//     var c = 300;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
    

//     function parent(){
//         var d = 400;
//         function child(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//         child();
//     }
//     parent();
// }
// grandparent();


// for(var i=0;i<=5;i++){
//     function closure(){
//         setTimeout(()=>{
//             console.log(i);
//         },2000);
//     }
//     closure();
// }

// HOF:
// function xyz(cb){
//     console.log("I am xyz function");
//     cb();
// }


// function cb(){
//     console.log("Hi I am Cb function");
// }
// xyz(cb);

function abc(def){
    def(10,20);
    console.log("Return values");
}
function def(){
    console.log(a+b);
}
abc(def);
