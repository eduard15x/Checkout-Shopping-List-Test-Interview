const array = [ 2, 21, 5, -4, -6, 222, -222]
console.log(array.sort((a,b)=>a-b));

const productsArray = [
    {
        "id": 123456,
        "name" : "Antivirus program",
        "price" : 35.95,
        "description": "The best antivirus program recommended by almost every single company."
    },
    {
        "id": 123457,
        "name" : "Paint program",
        "price" : 15.95,
        "description": "The newest paint program where you can edit/color/resize/cut anything."
    },
    {
        "id": 123458,
        "name" : "Delete program",
        "price" : 55.95,
        "description": "A good automatic software program and easy to use. Can be set to delete any inactivity from the server."
    },
    {
        "id": 123459,
        "name" : "Clean program",
        "price" : 99.95,
        "description": "New and very useful program. Can detect mistakes and remove any wrong line of code."
    }
]


// Creating a new array where products are sorted by price descendig
const arraySortByPrice = productsArray.sort((a,b)=>b.price-a.price)
console.log(arraySortByPrice)


const shoppingProductsCol = document.querySelector('.shopping-products-div')

// Create the list products
// Create the ul -
const productsList = document.createElement('ul')
productsList.classList.add('shopping-products')
shoppingProductsCol.append(productsList);

let sumTotalPrice = 0;


let arrayProductsAdded = [];




const shoppingCart = document.querySelector('.shopping-cart');
shoppingCart.innerHTML = `<p id="pentry"></p>`
let pentry = document.getElementById('pentry')
pentry.textContent = 'No products in your shopping list'

const pTitle = document.createElement('p');
const productsSubtitle = document.createElement('div');
productsSubtitle.classList.add('products-added-description');

const hr = document.createElement('hr');
hr.id = 'product-border'

const productsCartList = document.createElement('ul');
productsCartList.classList.add('products-from-cart');

const totalPrice = document.createElement('p');
totalPrice.id = 'total-price'

const buttonBuy = document.createElement('button')
buttonBuy.id ='button-buy';







// const btnAddProduct = document.querySelectorAll('.button-add-product');

// for ( let i = 0; i < arraySortByPrice.length; i++) {
//     btnAddProduct[i].addEventListener('click', () => {
//         if( arrayProductsAdded.includes(arraySortByPrice[i])) {
//             return;
//         } else {
//             arrayProductsAdded.push(arraySortByPrice[i])
        
//             shoppingCart.innerHTML = ''
//             // Create the shopping cart with products added
//             pTitle.textContent = 'Products in your shopping cart';

//             productsSubtitle.innerHTML = 
//             `
//             <p class="product-added-name">Product</p>
//             <p class="product-added-quantity">Quantity</p>
//             <p class="product-added-price">Value</p>
//             `
//             const productLiAdded = document.createElement('li');
//             productLiAdded.classList.add('lili')
//             productsCartList.append(productLiAdded);

//             productLiAdded.innerHTML = 
//             `
//             <p class="product-added-name">${arraySortByPrice[i].name}<span class="product-p-description" title="${arraySortByPrice[i].description}">ℹ</span></p>
//             <input type="number" class="product-added-quantity" value="1">
//             <p class="product-added-price">$${arraySortByPrice[i].price}</p>
//             <p class="remove-product">X</p>
//             `   
//             sumTotalPrice += arraySortByPrice[i].price
//             totalPrice.textContent = `Total price: $${sumTotalPrice.toFixed(2)}`;
//             buttonBuy.textContent = 'Continue';
//             shoppingCart.append(pTitle, productsSubtitle, hr, productsCartList, totalPrice, buttonBuy)
//         }
//         const btnRemoveElement = document.querySelectorAll('.remove-product')
//         for ( let i = 0; i < arrayProductsAdded.length; i++) {
//             btnRemoveElement[i].addEventListener('click', ()=> {
//                 btnRemoveElement[i].parentElement.remove()
//                 arrayProductsAdded.splice([i], 1)
//             })
//         }
       
//     })
    
// }

// Create the li - items
for ( let i = 0; i < arraySortByPrice.length; i++) {
    const productLi = document.createElement('li')
    productLi.innerHTML = 
    `
    <p class="product-p">${arraySortByPrice[i].name}<span title="${arraySortByPrice[i].description}" class="product-p-description">ℹ</span></p>
    <p class="price-p">Price: <span class="price-p-span">$${arraySortByPrice[i].price}</span></p>
    <button class="button-add-product">Add to cart</button>
    `
    productsList.append(productLi)

}
const btnAddProduct = document.querySelectorAll('.button-add-product');







for ( let i = 0; i < arraySortByPrice.length; i++) {
    btnAddProduct[i].addEventListener('click', () => {
        if( arrayProductsAdded.includes(arraySortByPrice[i])) {
            return;
        } else {
            arrayProductsAdded.push(arraySortByPrice[i])
        
            pentry.textContent = "Hey, this are your products"
            // Create the shopping cart with products added
            pTitle.textContent = 'Products in your shopping cart';
            productsSubtitle.innerHTML = 
            `
            <p class="product-added-name">Product</p>
            <p class="product-added-quantity">Quantity</p>
            <p class="product-added-price">Value</p>
            `
            const productLiAdded = document.createElement('li');
            productLiAdded.classList.add('lili')
            productsCartList.append(productLiAdded);
            productLiAdded.innerHTML = 
            `
            <p class="product-added-name">${arraySortByPrice[i].name}<span class="product-p-description" title="${arraySortByPrice[i].description}">ℹ</span></p>
            <input type="number" class="product-added-quantity" value="1">
            <p class="product-added-price">$${arraySortByPrice[i].price}</p>
            <p class="remove-product">X</p>
            `   
            sumTotalPrice += arraySortByPrice[i].price
            totalPrice.textContent = `Total price: $${sumTotalPrice.toFixed(2)}`;
            buttonBuy.textContent = 'Continue';
            shoppingCart.append(pTitle, productsSubtitle, hr, productsCartList, totalPrice, buttonBuy)
        }
        const btnRemoveElement = document.querySelectorAll('.remove-product')
        for ( let i = 0; i < arrayProductsAdded.length; i++) {
            btnRemoveElement[i].addEventListener('click', ()=> {
                btnRemoveElement[i].parentElement.remove()
                arraySortByPrice.splice(i, 1)
            })
        }
    })
}







// <p>No products in shopping cart</p>

// <div class="products-added-description">
//     <p class="product-added-name">Product</p>
//     <p class="product-added-quantity">Quantity</p>
//     <p class="product-added-price">Value</p>
// </div>
// <hr id="product-name-border">
// <ul class="products-from-cart">
//     <li>
//         <p class="product-added-name">Product number 1<span class="product-added-info" title="the-description-for-p">&#8505;</span></p>
//         <input type="number" class="product-added-quantity" value="1">
//         <p class="product-added-price">$120.00</p>
//     </li>
//     <li>
//         <p class="product-added-name">Product number 1<span>i</span></p>
//         <input type="number" class="product-added-quantity" value="1">
//         <p class="product-added-price">$120.00</p>
//     </li>
// </ul>
// <p id="total-price">Total: $120.00</p>
// <button id="button-buy">Continue</button>












// // This is from for let 


// let newButtonAdd = document.querySelectorAll('.button-add-product');
    
// newButtonAdd[i].addEventListener('click', ()=> {
//     const productLiAdded = document.createElement('li');
//     productsCartList.append(productLiAdded);

//     productLiAdded.innerHTML = 
//     `
//     <p class="product-added-name">${arraySortByPrice[i].name}<span class="product-p-description" title="${arraySortByPrice[i].description}">ℹ</span></p>
//     <input type="number" class="product-added-quantity" value="1">
//     <p class="product-added-price">$${arraySortByPrice[i].price}</p>
//     `   
//     // Create 
//     // let newProductAddedName = document.createElement('p')
//     // newProductAddedName.classList.add('product-added-name')
//     // newProductAddedName.textContent = `${array[i].name}`

//     // let newProductAddedDescription = document.createElement('span')
//     // newProductAddedDescription.classList.add('product-p-description')
//     // newProductAddedDescription.setAttribute('title', `${array[i].description}`)
//     // newProductAddedDescription.textContent = 'ℹ'

//     // let newProductAddedInput = document.createElement('input');
//     // newProductAddedInput.classList.add('product-added-quantity');
//     // newProductAddedInput.setAttribute('type', 'number')
//     // newProductAddedInput.setAttribute('value', '1')

//     // let newProductAddedPrice = document.createElement('p');
//     // newProductAddedPrice.classList.add('product-added-price')
//     // newProductAddedPrice.textContent = `$${array[i].price}`

//     // newProductAddedName.append(newProductAddedDescription)
//     // productLiAdded.append(newProductAddedName, newProductAddedInput, newProductAddedPrice)
//     sumTotalPrice += arraySortByPrice[i].price;
//     totalPrice.textContent = `Total price: $${sumTotalPrice.toFixed(2)}`;
// })
