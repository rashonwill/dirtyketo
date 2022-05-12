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
  let spending = parseInt(localStorage.getItem('cartCount'))
  if (spending >= 1){
    let cartItems = JSON.parse(localStorage.getItem('MyItems'))
    let food = $(`
       <tr class="myPurchase">
      <td id="image"><img class="pic" src="${cartItems.image}"></td>
      <td>${cartItems.name}</td>
      <td></td>
      <td class="increase"><input type="text" value="1" class="item-qty"></td>
      <td class="item-price">${cartItems.price}</td>
      <td><i class="fa fa-times-circle-o" aria-hidden="true"></i></td>
    </tr> 
`).data('cartItems', cartItems)
  $('.modal-body').append(cartItems) 
  }else if(spending == 0){
  let cartTot = localStorage.setItem('cartTotal', cartTotal)
  $('.empty-cart').text('Your cart is empty') 
  }
})()
