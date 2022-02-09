(function(){
  let spending = localStorage.getItem('cartItems')
  if (!spending){
  localStorage.setItem('cartItems', 0)
  }else if (spending){
$('.count').text(spending);
  }
})();


(function(){
  let cartTot = localStorage.getItem('cartTotal')
  if (!cartTot){
  localStorage.setItem('cartTotal', 0.00)
  $('.modal-body').text('Your cart is empty')  
  }else if (cartTot){
localStorage.getItem('cartTotal')
  }
})();
