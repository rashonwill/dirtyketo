let count = 0;
let cartTotal = 0.00;
(function(){
$('.modal-footer .carttotal h1').empty();
  let spending = localStorage.getItem('cartCount')
  if (!spending || spending == 0){
  localStorage.setItem('cartCount', count)
  localStorage.setItem('cartTotal', cartTotal)	  
  $('.modal-footer .carttotal h1').append('Cart Total: $0.00')
	  $('.count').text(spending);
  }else if (spending && spending > 0){
$('.count').text(spending);
 getTotal();	  
  }
})();


(function(){
  let items =[]
  let spending = parseInt(localStorage.getItem('cartCount'))
  if (spending >= 1){
    let cartItems = JSON.parse(localStorage.getItem('MyItems'))
    items.push(cartItems)
    cartItems.forEach(async function(items){
        let food = $(`
       <tr class="myPurchase">
       <td></td>
      <td id="image"><img class="pic" src="${items.image}"></td>
      <td>${items.name}</td>
      <td></td>
      <td class="increase"><input type="text" value="1" class="item-qty" readonly></td>
      <td></td>
      <td class="item-price">$${items.price}</td>
      <td><i class="fa fa-times-circle-o" aria-hidden="true"></i></td>
      <td></td>
      
    </tr> 
`).data('cartItems', cartItems)
  $('#inthebag tbody').append(food)
getTotal();	    
   })

  }else if(spending == 0){
  let cartTot = localStorage.setItem('cartTotal', cartTotal)
  $('.empty-cart').text('Your cart is empty').css('color', ' #a9a9b0').css('text-align', 'center').css('margin-top', '150px') 
	  
  }
})()



function renderSelection(){
  $(".course").empty();
  $(".details").empty();
 let item = JSON.parse(localStorage.getItem('mealSelection'))
 
 let itemPicture = $(`
  <div class="dinner">
    <img src="${item.image}"/>  
      </div> 
  </div>`).data('item', item)
 
 $(".course").append(itemPicture);
 
 let itemDetails = $(`
  <div class="course-info">
        <div class="course-name">${item.title}</div>
        <div class="course-description">
          <p>${item.description}</p>
        </div>
        <div class="course-price">$${item.price} | ${item.carbs}</div>
      </div>
      </div>

 
 `).data('item', item)
 $(".details").append(itemDetails);

}


renderSelection();

$('#addtocart').on('click', function(){
let count = JSON.parse(localStorage.getItem('cartCount'))
let bagCount = count + 1 
localStorage.setItem('cartCount', bagCount);
let newCartCount = localStorage.getItem('cartCount');                      
$('.count').text(newCartCount);	
$('#addtocart').text('')
$('#addtocart').text('Added to Cart!')	
	
	
$('.empty-cart').empty();	
let purchase = JSON.parse(localStorage.getItem('mealSelection'))
let newItem = {
productid: purchase.id,
image: purchase.image,	
name: purchase.title,	
quantity: 1,
price: purchase.price,
}	
	
let myItems = JSON.parse(localStorage.getItem('MyItems'))		
if(!myItems){
myItems = [newItem]
localStorage.setItem('MyItems', JSON.stringify(myItems))	
}else if(myItems){
myItems = [...myItems, newItem]
localStorage.setItem('MyItems', JSON.stringify(myItems))
console.log(myItems);	
}
	
   let food = $(`
       <tr class="myPurchase">
       <td></td>
      <td id="image"><img class="pic" src="${newItem.image}"></td>
      <td>${newItem.name}</td>
      <td></td>
      <td class="increase"><input type="text" value="1" class="item-qty" readonly></td>
      <td></td>
      <td class="item-price">$${newItem.price}</td>
      <td><i class="fa fa-times-circle-o" aria-hidden="true"></i></td>
      <td></td>
      
    </tr> 
`).data('newItem', newItem)
  $('#inthebag tbody').append(food) 
getTotal();	
	  
$(food).on('click','.fa-times-circle-o', async function(){	
let newCart = [];	
let producttoRemove = $(this).closest('.myPurchase').data('newItem');
console.log(producttoRemove)
let theCart = JSON.parse(localStorage.getItem('MyItems'));

let removingPurchase = theCart.findIndex(items => items.productid === producttoRemove.id)
	
 theCart.splice(removingPurchase, 1);
 newCart = theCart 
 console.log(newCart)
 $(this).closest('.myPurchase').remove();	
 localStorage.setItem('MyItems', JSON.stringify(newCart))
	
let cartItem = localStorage.getItem('cartCount')
count = cartItem - 1;
localStorage.setItem('cartCount', count)	
$('.count').text(count);

getTotal();	

})	

})

$('.myPurchase').on('click','.fa-times-circle-o', async function(){	
let newCart = [];	
let producttoRemove = $(this).closest('.myPurchase').data()
console.log(producttoRemove)
let theCart = JSON.parse(localStorage.getItem('MyItems'));

let removingPurchase = theCart.findIndex(items => items.productid === producttoRemove.productid)
	
 theCart.splice(removingPurchase, 1);
 newCart = theCart 
 console.log(newCart)
 $(this).closest('.myPurchase').remove();	
 localStorage.setItem('MyItems', JSON.stringify(newCart))
	
let cartItem = localStorage.getItem('cartCount')
count = cartItem - 1;
localStorage.setItem('cartCount', count)	
$('.count').text(count);
getTotal();	

})

 async function getTotal(){
	 $('.modal-footer .carttotal h1').empty();
      let myItems = JSON.parse(localStorage.getItem('MyItems'))
      let totalCart = myItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0).toFixed(2)
      
      console.log(totalCart)
      localStorage.setItem('cartTotal', JSON.stringify(totalCart))
     $('.modal-footer .carttotal h1').append('Cart Total: $' + totalCart)	 
    }


function cleanUp(){
$('#inthebag tbody').empty();
$('.modal-footer .carttotal h1').empty();
$('.empty-cart').empty();
$('.empty-cart').text('Your cart is empty').css('color', ' #a9a9b0').css('text-align', 'center').css('margin-top', '150px') 	
let cartItem = localStorage.getItem('cartCount')
count = 0;
localStorage.setItem('cartCount', count)	
$('.count').text(count);
$('.modal-footer .carttotal h1').append('Cart Total: $0.00');	
  localStorage.removeItem('cartTotal');
  localStorage.removeItem('MyItems');
}

paypal.Buttons({
  createOrder: function(data, actions) {
    // This function sets up the details of the transaction, including the amount and line item details.
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: JSON.parse(localStorage.getItem('cartTotal'))
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function(details) {
      // This function shows a transaction success message to your buyer.
      alert('Transaction completed by ' + details.payer.name.given_name);
      cleanUp();	    
    });
  }
}).render('.paypal');


