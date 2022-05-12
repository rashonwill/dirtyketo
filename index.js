let count = 0;
let cartTotal = 0.00;
(function(){
  let spending = localStorage.getItem('cartCount')
  if (!spending){
  localStorage.setItem('cartCount', count)
  }else if (spending){
$('.count').text(spending);
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
      <td id="image"><img class="pic" src="${items.image}"></td>
      <td>${items.name}</td>
      <td></td>
      <td class="increase"><input type="text" value="1" class="item-qty"></td>
      <td class="item-price">${items.price}</td>
      <td><i class="fa fa-times-circle-o" aria-hidden="true"></i></td>
    </tr> 
`).data('cartItems', cartItems)
  $('#inthebag tbody').append(food) 
   })

  }else if(spending == 0){
  let cartTot = localStorage.setItem('cartTotal', cartTotal)
  $('.empty-cart').text('Your cart is empty') 
  }
})()
