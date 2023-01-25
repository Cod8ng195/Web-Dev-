if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) 
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged) 
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
        
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function fn1()
{
    var Copper1 = document.getElementById("Copper1");
    var Silver1 = document.getElementById("Silver1");
    var Gold1 = document.getElementById("Gold1");

    if(Copper1.checked==true)
        alert("Material selected is "+Copper1.value);
    else if(Silver1.checked==true)
        alert("Material selected is "+Silver1.value);
    else if(Gold1.checked==true)
        alert("Material selected is "+Gold1.value);
    else 
        alert("NO");
}

function fn2()
{
    var Copper2 = document.getElementById("Copper2");
    var Silver2 = document.getElementById("Silver2");
    var Gold2 = document.getElementById("Gold2");

    if(Copper2.checked==true)
        alert("Material selected is "+Copper2.value);
    else if(Silver2.checked==true)
        alert("Material selected is "+Silver2.value);
    else if(Gold2.checked==true)
        alert("Material selected is "+Gold2.value);
    else 
        alert("NO");
}

function fn3()
{
    var Copper3 = document.getElementById("Copper3");
    var Silver3 = document.getElementById("Silver3");
    var Gold3 = document.getElementById("Gold3");

    if(Copper3.checked==true)
        alert("Material selected is "+Copper3.value);
    else if(Silver3.checked==true)
        alert("Material selected is "+Silver3.value);
    else if(Gold3.checked==true)
        alert("Material selected is "+Gold3.value);
    else 
        alert("NO");
}

function fn4()
{
    var Copper4 = document.getElementById("Copper4");
    var Silver4 = document.getElementById("Silver4");
    var Gold4 = document.getElementById("Gold4");

    if(Copper4.checked==true)
        alert("Material selected is "+Copper4.value);
    else if(Silver4.checked==true)
        alert("Material selected is "+Silver4.value);
    else if(Gold4.checked==true)
        alert("Material selected is "+Gold4.value);
    else 
        alert("NO");
}

function fn5()
{
    var Copper5 = document.getElementById("Copper5");
    var Silver5 = document.getElementById("Silver5");
    var Gold5 = document.getElementById("Gold5");

    if(Copper5.checked==true)
        alert("Material selected is "+Copper5.value);
    else if(Silver5.checked==true)
        alert("Material selected is "+Silver5.value);
    else if(Gold5.checked==true)
        alert("Material selected is "+Gold5.value);
    else 
        alert("NO");
}

function fn6()
{
    var Copper6 = document.getElementById("Copper6");
    var Silver6 = document.getElementById("Silver6");
    var Gold6 = document.getElementById("Gold6");

    if(Copper6.checked==true)
        alert("Material selected is "+Copper6.value);
    else if(Silver6.checked==true)
        alert("Material selected is "+Silver6.value);
    else if(Gold6.checked==true)
        alert("Material selected is "+Gold6.value);
    else 
        alert("NO");
}


function purchaseClicked() {
    alert('Thank you for purchasing from JB Jewellers :)')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonCicked = event.target
            buttonCicked.parentElement.parentElement.remove()
            updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

    function addItemToCart(title, price, imageSrc) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('Item has already been added to the cart.')
                return 
            }
        }
        var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quatityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quatityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
