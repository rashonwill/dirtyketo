let cartTotal = 0.00;

(function(){
  let spending = localStorage.getItem('cartItems')
  if (!spending){
  localStorage.setItem('cartItems', 0)
  }else if (spending){
$('.count').text(spending);
  }
})();


(function(){
  let cartTot = localStorage.setItem('cartTotal', cartTotal)
  $('.modal-body').text('Your cart is empty') 
})();
