
const productsArray = [
    {
        "id": 1,
        "name" : "Antivirus program",
        "price" : 35.95,
        "description": "The best antivirus program recommended by almost every single company."
    },
    {
        "id": 2,
        "name" : "Paint program",
        "price" : 15.95,
        "description": "The newest paint program where you can edit/color/resize/cut anything."
    },
    {
        "id": 3,
        "name" : "Delete program",
        "price" : 55.95,
        "description": "A good automatic software program and easy to use. Can be set to delete any inactivity from the server."
    },
    {
        "id": 4,
        "name" : "Clean program",
        "price" : 99.95,
        "description": "New and very useful program. Can detect mistakes and remove any wrong line of code."
    }
]


// Creating a new array where products are sorted by price descendig
let arraySortByPrice = []
console.log(arraySortByPrice)

const productsList = document.querySelector('.all-products')
const cartTitle = document.getElementById('cart-title')
const cartProductDescription = document.querySelector('.cart-product-description')
const cartProductsAdded = document.querySelector('.cart-products-added')
const cartTotalPrice = document.getElementById('total-price-cart')
const cartButtonBuy = document.getElementById('cart-button-buy')
let newArrayCart = [];
let defaultCurrency = 'USD'

function loadProduct() {
    for ( let i = 0 ; i < productsArray.length; i++) {
        arraySortByPrice.push({id : productsArray[i].id, name : productsArray[i].name, price : productsArray[i].price, description : productsArray[i].description })
    }
    arraySortByPrice.sort((a,b)=>b.price-a.price)
}
loadProduct()









displayProductsList()

function displayProductsList() {
    arraySortByPrice.sort((a,b)=>b.price-a.price)
    productsList.innerHTML = ''
    
    for(let i = 0; i < arraySortByPrice.length; i++) {
        productsList.innerHTML += 
        `<li class="the-product">
            <p class="the-product-name">${arraySortByPrice[i].name}</p>
            <p class="the-product-price">Price: <span class="color-price">${arraySortByPrice[i].price + " " + defaultCurrency}</span></p>
            <button class="add-button">Add product</button>
        </li>
        `
    } 

    addProductToCart()
    
}



function addProductToCart() {
    const addButton = document.querySelectorAll('.add-button')
    
    for(let i = 0; i < arraySortByPrice.length; i++) {
        addButton[i].addEventListener('click', ()=> {

            if ( newArrayCart.includes(arraySortByPrice[i]) === false ) {
                newArrayCart.push(arraySortByPrice[i])

                console.log(i)
                let index = arraySortByPrice.indexOf(arraySortByPrice[i])
                // var li = document.querySelectorAll('#products-list li')[i]

                // li.parentNode.removeChild(li)

                // var ulElem = document.getElementById('products-list');
                // console.log(ulElem.childNodes[i])

                // ulElem.removeChild(ulElem.childNodes[i]1
                arraySortByPrice.splice(index, 1)
                console.log(arraySortByPrice)
                console.log(index)
                displayProductsList()
                updateCart()
            }
            return
        })
    }
}






function updateCart() {
    let price = 0
    cartProductsAdded.innerHTML = ''
    
    for ( let i = 0; i < newArrayCart.length; i++) {
        cartTitle.textContent = 'Your products from the cart';
        

        cartProductsAdded.innerHTML +=
        `
        <div class="the-product-added">
                <p class="the-product-added-name">${newArrayCart[i].name}</p>
                <p class="decrement-quantity btn-change-quantity">-</p>
                <input type="number" class="the-product-added-quantity" value="1">
                <p class="increment-quantity btn-change-quantity">+</p>
                <p class="the-product-added-price">${newArrayCart[i].price + " " + defaultCurrency}</p>
                <p class="remove-product">X</p>
        </div>
        `
        

        price += newArrayCart[i].price 
        
    }changeQuantityPrice()
    
    removeProductFromCart()

    cartTitle.textContent = 'Your products from the cart'; 
    cartProductDescription.innerHTML = 
    `
        <p class="product-name-title">Product</p>
        <p class="product-name-quantity">Quantity</p>
        <p class="product-name-price">Value</p>
    `
    cartTotalPrice.textContent =  price.toFixed(2) + " " + defaultCurrency
    cartButtonBuy.style.display = 'flex'
}


function changeQuantityPrice() {
    const productQuantity = document.querySelectorAll('.the-product-added-quantity')
    const decrement = document.querySelectorAll('.decrement-quantity')
    const increment = document.querySelectorAll('.increment-quantity')

    for ( let i = 0; i < newArrayCart.length; i++) {
        decrement[i].addEventListener('click', ()=> {
            if(productQuantity[i].value > 1) {
                productQuantity[i].value--
                let price = parseFloat(cartTotalPrice.textContent) - newArrayCart[i].price
                cartTotalPrice.textContent = price.toFixed(2)
            }
        })
    
        increment[i].addEventListener('click', ()=> {

            productQuantity[i].value++
            let price = parseFloat(cartTotalPrice.textContent) + newArrayCart[i].price
            cartTotalPrice.textContent = price.toFixed(2)
        })
    }

}


function removeProductFromCart() {
    const btnRemoveFromCart = document.querySelectorAll('.remove-product')
    for ( let i = 0; i < newArrayCart.length; i++) {

        btnRemoveFromCart[i].addEventListener('click', (e)=> {

            arraySortByPrice.push(newArrayCart[i])

            e.target.parentElement.remove()
            let index = newArrayCart.indexOf(newArrayCart[i])
            newArrayCart.splice(index, 1)
            
            
            updateCart()
            displayProductsList()

        })
    }

}











function changeCurrency(c) {
    console.log(c)
    switch(c.value) {
        case '1': 
            defaultCurrency = 'USD'
            break;
        case '1.1':
            defaultCurrency = 'EUR'
            console.log('sal')
            break;
        case '1.3':
            defaultCurrency = 'GBP'
            break;
        default:
            defaultCurrency = 'USD'
    }

    for (let i = 0; i < arraySortByPrice.length; i++) {
        arraySortByPrice[i].price = productsArray.filter(x => x.id === arraySortByPrice[i].id)[0].price * c.value 
        arraySortByPrice[i].price = Math.round(arraySortByPrice[i].price * 100) / 100
        
    }

    for (let j = 0; j < newArrayCart.length; j++) {
        newArrayCart[j].price = productsArray.filter(x => x.id == newArrayCart[j].id)[0].price * c.value 
        newArrayCart[j].price = Math.round(newArrayCart[j].price * 100) / 100

        
    }
    displayProductsList()
    updateCart()

    console.log(productsArray)
}

































// displayProductsList()

// function displayProductsList() {
//     let listProducts = `<ul id="products-list">`
    
//     for(let i = 0; i < arraySortByPrice.length; i++) {
//         listProducts += 
//         `<li class="the-product">
//             <p class="the-product-name">${arraySortByPrice[i].name}</p>
//             <p class="the-product-price">Price: <span class="color-price">${arraySortByPrice[i].price}</span></p>
//             <button class="add-button">Add product</button>
//         </li>
//         `
//     } 
//     listProducts += `</ul>`
//     productsList.innerHTML = listProducts

//     addProductToCart()
    
// }



// function addProductToCart() {
//     const addButton = document.querySelectorAll('.add-button')
    
//     for(let i = 0; i < arraySortByPrice.length; i++) {
//         addButton[i].addEventListener('click', ()=> {

//             if ( newArrayCart.includes(arraySortByPrice[i]) === false ) {
//                 newArrayCart.push(arraySortByPrice[i])

//                 console.log(i)
//                 var index = arraySortByPrice.indexOf(arraySortByPrice[i])
//                 var li = document.querySelectorAll('#products-list li')[i]

//                 li.parentNode.removeChild(li)

//                 // var ulElem = document.getElementById('products-list');
//                 // console.log(ulElem.childNodes[i])

//                 // ulElem.removeChild(ulElem.childNodes[i])
//                 // arraySortByPrice.splice(index, 1)
//                 console.log(arraySortByPrice)
//                 console.log(index)
//                 // displayProductsList()
//                 updateCart()
//             }
//             return
//         })
//     }
// }




















































// const shoppingProductsCol = document.querySelector('.shopping-products-div')

// // Create the list products
// // Create the ul -
// const productsList = document.createElement('ul')
// productsList.classList.add('shopping-products')
// shoppingProductsCol.append(productsList);

// let sumTotalPrice = 0;


// let arrayProductsAdded = [];




// const shoppingCart = document.querySelector('.shopping-cart');
// shoppingCart.innerHTML = `<p id="pentry"></p>`
// let pentry = document.getElementById('pentry')
// pentry.textContent = 'No products in your shopping list'

// const pTitle = document.createElement('p');
// const productsSubtitle = document.createElement('div');
// productsSubtitle.classList.add('products-added-description');

// const hr = document.createElement('hr');
// hr.id = 'product-border'

// const productsCartList = document.createElement('ul');
// productsCartList.classList.add('products-from-cart');

// const totalPrice = document.createElement('p');
// totalPrice.id = 'total-price'

// const buttonBuy = document.createElement('button')
// buttonBuy.id ='button-buy';







// // const btnAddProduct = document.querySelectorAll('.button-add-product');

// // for ( let i = 0; i < arraySortByPrice.length; i++) {
// //     btnAddProduct[i].addEventListener('click', () => {
// //         if( arrayProductsAdded.includes(arraySortByPrice[i])) {
// //             return;
// //         } else {
// //             arrayProductsAdded.push(arraySortByPrice[i])
        
// //             shoppingCart.innerHTML = ''
// //             // Create the shopping cart with products added
// //             pTitle.textContent = 'Products in your shopping cart';

// //             productsSubtitle.innerHTML = 
// //             `
// //             <p class="product-added-name">Product</p>
// //             <p class="product-added-quantity">Quantity</p>
// //             <p class="product-added-price">Value</p>
// //             `
// //             const productLiAdded = document.createElement('li');
// //             productLiAdded.classList.add('lili')
// //             productsCartList.append(productLiAdded);

// //             productLiAdded.innerHTML = 
// //             `
// //             <p class="product-added-name">${arraySortByPrice[i].name}<span class="product-p-description" title="${arraySortByPrice[i].description}">ℹ</span></p>
// //             <input type="number" class="product-added-quantity" value="1">
// //             <p class="product-added-price">$${arraySortByPrice[i].price}</p>
// //             <p class="remove-product">X</p>
// //             `   
// //             sumTotalPrice += arraySortByPrice[i].price
// //             totalPrice.textContent = `Total price: $${sumTotalPrice.toFixed(2)}`;
// //             buttonBuy.textContent = 'Continue';
// //             shoppingCart.append(pTitle, productsSubtitle, hr, productsCartList, totalPrice, buttonBuy)
// //         }
// //         const btnRemoveElement = document.querySelectorAll('.remove-product')
// //         for ( let i = 0; i < arrayProductsAdded.length; i++) {
// //             btnRemoveElement[i].addEventListener('click', ()=> {
// //                 btnRemoveElement[i].parentElement.remove()
// //                 arrayProductsAdded.splice([i], 1)
// //             })
// //         }
       
// //     })
    
// // }

// // Create the li - items
// for ( let i = 0; i < arraySortByPrice.length; i++) {
//     const productLi = document.createElement('li')
//     productLi.innerHTML = 
//     `
//     <p class="product-p">${arraySortByPrice[i].name}<span title="${arraySortByPrice[i].description}" class="product-p-description">ℹ</span></p>
//     <p class="price-p">Price: <span class="price-p-span">$${arraySortByPrice[i].price}</span></p>
//     <button class="button-add-product">Add to cart</button>
//     `
//     productsList.append(productLi)

// }
// const btnAddProduct = document.querySelectorAll('.button-add-product');







// for ( let i = 0; i < arraySortByPrice.length; i++) {
//     btnAddProduct[i].addEventListener('click', () => {
//         if( arrayProductsAdded.includes(arraySortByPrice[i])) {
//             return;
//         } else {
//             arrayProductsAdded.push(arraySortByPrice[i])
        
//             pentry.textContent = "Hey, this are your products"
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
//             `price.toFixed
//             sumTotalPrice += arraySortByPrice[i].price
//             totalPrice.textContent = `Total price: $${sumTotalPrice.toFixed(2)}`;
//             buttonBuy.textContent = 'Continue';
//             shoppingCart.append(pTitle, productsSubtitle, hr, productsCartList, totalPrice, buttonBuy)
//         }
//         const btnRemoveElement = document.querySelectorAll('.remove-product')
//         for ( let i = 0; i < arrayProductsAdded.length; i++) {
//             btnRemoveElement[i].addEventListener('click', ()=> {
//                 btnRemoveElement[i].parentElement.remove()
//                 arraySortByPrice.splice(i, 1)
//             })
//         }
//     })
// }







// // <p>No products in shopping cart</p>

// // <div class="products-added-description">
// //     <p class="product-added-name">Product</p>
// //     <p class="product-added-quantity">Quantity</p>
// //     <p class="product-added-price">Value</p>
// // </div>
// // <hr id="product-name-border">
// // <ul class="products-from-cart">
// //     <li>
// //         <p class="product-added-name">Product number 1<span class="product-added-info" title="the-description-for-p">&#8505;</span></p>
// //         <input type="number" class="product-added-quantity" value="1">
// //         <p class="product-added-price">$120.00</p>
// //     </li>
// //     <li>
// //         <p class="product-added-name">Product number 1<span>i</span></p>
// //         <input type="number" class="product-added-quantity" value="1">
// //         <p class="product-added-price">$120.00</p>
// //     </li>
// // </ul>
// // <p id="total-price">Total: $120.00</p>
// // <button id="button-buy">Continue</button>












// // // This is from for let 


// // let newButtonAdd = document.querySelectorAll('.button-add-product');
    
// // newButtonAdd[i].addEventListener('click', ()=> {
// //     const productLiAdded = document.createElement('li');
// //     productsCartList.append(productLiAdded);

// //     productLiAdded.innerHTML = 
// //     `
// //     <p class="product-added-name">${arraySortByPrice[i].name}<span class="product-p-description" title="${arraySortByPrice[i].description}">ℹ</span></p>
// //     <input type="number" class="product-added-quantity" value="1">
// //     <p class="product-added-price">$${arraySortByPrice[i].price}</p>
// //     `   
// //     // Create 
// //     // let newProductAddedName = document.createElement('p')
// //     // newProductAddedName.classList.add('product-added-name')
// //     // newProductAddedName.textContent = `${array[i].name}`

// //     // let newProductAddedDescription = document.createElement('span')
// //     // newProductAddedDescription.classList.add('product-p-description')
// //     // newProductAddedDescription.setAttribute('title', `${array[i].description}`)
// //     // newProductAddedDescription.textContent = 'ℹ'

// //     // let newProductAddedInput = document.createElement('input');
// //     // newProductAddedInput.classList.add('product-added-quantity');
// //     // newProductAddedInput.setAttribute('type', 'number')
// //     // newProductAddedInput.setAttribute('value', '1')

// //     // let newProductAddedPrice = document.createElement('p');
// //     // newProductAddedPrice.classList.add('product-added-price')
// //     // newProductAddedPrice.textContent = `$${array[i].price}`

// //     // newProductAddedName.append(newProductAddedDescription)
// //     // productLiAdded.append(newProductAddedName, newProductAddedInput, newProductAddedPrice)
// //     sumTotalPrice += arraySortByPrice[i].price;
// //     totalPrice.textContent = `Total price: $${sumTotalPrice.toFixed(2)}`;
// // })
