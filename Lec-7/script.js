// const grandParent = document.getElementById('grandParent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');


// grandParent.addEventListener("click",()=>{
//     console.log("This is Red clicked");
// })

// parent.addEventListener("click",()=>{
//     console.log("This is green clicked");
// })

// child.addEventListener("click",()=>{
//     console.log("This is black clicked");
// })



// grandParent.addEventListener("click",(e)=>{
//     console.log("This is Red clicked");
//     e.stopPropagation();
// },false)

// parent.addEventListener("click",(e)=>{
//     console.log("This is green clicked");
//     e.stopPropagation();
// },false)

// child.addEventListener("click",(e)=>{
//     console.log("This is black clicked");
//     e.stopPropagation();
// },false);


// behaviour change while applying true in addEventListener
// grandParent.addEventListener("click",()=>{
//     console.log("This is Red");
// },true)

// parent.addEventListener("click",()=>{
//     console.log("This is green");
// },true)

// child.addEventListener("click",()=>{
//     console.log("This is black");
// },true)


//event deligation

// const productList = document.getElementById('productList');
// productList.addEventListener("click", (event)=>{
//     // console.log("products");
//     if(event.target.tagName === "LI"){
//         console.log("Clicked On :", event.target.textContext);
//     }
// })


// If i want to add new Element

// const newElement = document.createElement('li');
// newElement.textContent = "Bottle";
// productList.addpendChild(newElement);



/////////////////////////////////////////////////////////////////////////


// let debounceTimer;
// const textbox = document.getElementById("textbox");
// textbox.addEventListener("input",(event)=>{
//     clearTimeout(debounceTimer);
//     debounceTimer = setTimeout(()=>{
//         console.log("Typed: ", event.target.value);
//     },2000);
// })



function debounceInputLogger(element, delay = 2000) {
    let debounceTimer;

    element.addEventListener("input", (event) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            console.log("Typed:", event.target.value);
        }, delay);
    });
}

const textbox = document.getElementById("textbox");
debounceInputLogger(textbox, 2000);
