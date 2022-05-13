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
	  console.log(items)
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
   })

  }else if(spending == 0){
  let cartTot = localStorage.setItem('cartTotal', cartTotal)
  $('.empty-cart').text('Your cart is empty').css('color', ' #a9a9b0').css('text-align', 'center').css('margin-top', '150px') 
  }
})();



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
