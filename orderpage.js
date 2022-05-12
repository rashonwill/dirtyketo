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
	$('#inthebag tbody').append(cartItems) 
   })

  }else if(spending == 0){
  let cartTot = localStorage.setItem('cartTotal', cartTotal)
  $('.empty-cart').text('Your cart is empty') 
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
        <div class="course-price">${item.price} | ${item.carbs}</div>
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
	
let purchase = JSON.parse(localStorage.getItem('mealSelection'))
let newItem = {
productid: purchase.id,
image: purchase.image,	
name: purchase.title,	
quantity: 1,
price: purchase.price,
}	

console.log(purchase)
	
let myItems = JSON.parse(localStorage.getItem('MyItems'))		
if(!myItems){
myItems = [newItem]
localStorage.setItem('MyItems', JSON.stringify(myItems))	
}else if(myItems){
myItems = [...myItems, newItem]
localStorage.setItem('MyItems', JSON.stringify(myItems))
console.log(myItems);	
}
	

})


