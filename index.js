let cartTotal = 0.00;

(function(){
  let spending = localStorage.getItem('cartCount')
  if (!spending){
  localStorage.setItem('cartItems', 0)
  }else if (spending){
$('.count').text(spending);
  }
})();


(function(){
  let spending = parseInt(localStorage.getItem('cartCount'))
  if (spending >= 1){
  $('.modal-body').text('Total Due: $32.76') 
  }else if(spending == 0){
  let cartTot = localStorage.setItem('cartTotal', cartTotal)
  $('.modal-body').text('Your cart is empty') 
  }
})();
