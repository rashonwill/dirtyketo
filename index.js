(function(){
  let spending = localStorage.getItem('cartItems')
  if (!spending){
  $('count').text(0);
  }else if (spending){
$('.count').text(spending);
  }
})();
