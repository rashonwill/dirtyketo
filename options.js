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



(function() {
  $('.food-options').empty();
  $('.title').empty();
  let selected = JSON.parse(localStorage.getItem('optionID'))
  
  if(selected === 1){
  renderApps();
  }
  
  if(selected === 2){
  renderBurgers();
  }
  
  if(selected === 3){
  renderSteak();
  }
  
  if(selected === 4){
  renderWings();
  }
  
  if(selected === 5){
  renderSalads();
  }
  
  if(selected === 6){
  renderSides();
  }
  
  if(selected === 7){
  renderCharcuterie();
  } 
  
  if(selected === 8){
  renderLunches();
  } 
  
  if(selected === 9){
  renderKids();
  }   
  
  if(selected === 10){
  renderDesserts();
  }   
  
  
})();



function renderApps(){
  $('.title').append("<h1>Appetizers</h1>")
  const menuItemsApp = [
  {id: 1, image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" , title: "Taco Bites", description: "Keto Friendly Taco bites, crunchy taco shells made of chhese, filled with beef, our special taco seasoning, and cheese, topped off with a scoop of sour cream,fresh peppers and  bacon bits." , price: 10.99 , carbs: "3 Carbs"},
  
  {id: 2, image: "https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg" , title: "Chilli Cheese Hot Dogs", description: "These Keto Chili Cheese Dogs have everything you love about this classic, without the carbs! Easy, low carb, gluten free pigs in a blanket are smothered with keto chili and shredded cheddar cheese!" , price: 9.99 , carbs: "3.8 Carbs"},
  
  {id: 3, image: "https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg" , title: "Guacamole & Chips", description: "This Homemade Low Carb Keto Tortilla Chips Recipe will become your go-to tortilla chips recipe! It’s perfect when you’re craving crispy chips paired with salsa, guacamole, or queso." , price: 8.99 , carbs: "2.6 Carbs"},
  
  {id: 4, image: "https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg" , title: "Bacon Cheese Burger Bites", description: "Low carb, bunless burger bites, that come with letteuce, cheese, pickles, bacon, tomato, and a juicy ground beef patty." , price: 11.99, carbs: "1 Carbs"}, 
  
]

  menuItemsApp.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});


}


function renderBurgers(){
  $('.title').append("<h1>Burgers</h1>")
const menuItemsBurgers = [
  {id: 5, image: "https://kaseytrenum.com/wp-content/uploads/2020/05/keto-stuffed-burger.jpg" , title: "The Plain Jane", description: "Basic Keto, burger with all the flavor. Comes with lettuce, tomato, onion, and pickles." , price: 11.99 , carbs: "3 Carbs"},
  
 {id: 6, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "The Big Boy", description: "For those with a monster appetite, the big boy. Double patty bunless burger topped with lettuce, grilled onions, mushroom, bacon, and cheese." , price: 13.99, carbs: "5 Carbs"}, 
  
 {id: 7, image: "https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg" , title: "The All You Need", description: "Keto friendly bun, topped with lettuce, fresh onions, and cheese." , price: 13.99 , carbs: "5 Carbs"},  
  
 {id: 8, image: "https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg" , title: "Cheese Bruger Wraps", description: "Low carb tortilla wraps, grilled stuffed with burger meat, cheese, tomato, lettuce, and our special dipping sauce." , price: 13.99 , carbs: "4 Carbs"},   
  
]

  menuItemsBurgers.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});



}


function renderSteak(){
  $('.title').append("<h1>Steak & Shrimp</h1>")
const menuItemsSteakShrimp = [
  {id: 9, image: "https://www.aymag.com/wp-content/uploads/2020/05/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg" , title: "Steak and Garlic Shrimp", description: "Our delicious marinated steak grilled over a flame, paired with our famount garlic butter shrimp." , price: 21.99 , carbs: "10 Carbs"},
  
  {id: 10, image: "https://www.noshtastic.com/wp-content/uploads/2018/08/low-carb-beef-and-broccoli-sq-1-of-1.jpg" , title: "Steak and Broccoli", description: "Our delicious marinated steak grilled over a flame, paired with steam broccoli." , price: 17.99 , carbs: "4 Carbs"},
  
  {id: 11, image: "https://www.justataste.com/wp-content/uploads/2016/06/skinny-shrimp-scampi-photo.jpg" , title: "Shrimp Scampi", description: "Well seasone, shrimped layed over a bed of zucchini noodles." , price: 10.99 , carbs: "5 Carbs"},
  
  {id: 12, image: "https://dadwithapan.com/wp-content/uploads/2017/08/Steak-Shrimp-Paleo-Bowl-1-656x875.jpg" , title: "Shrimp and Steak Bowl with Veggies", description: "Our famously marinated steak and sauted shrimp paired with a vegetable melody." , price: 13.99 , carbs: "4 Carbs"},
  
]

  menuItemsSteakShrimp.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});

}

function renderWings(){
  $('.title').append("<h1>Wings</h1>")
const menuItemsWings = [
 {id: 13, image: "https://www.allchickenrecipes.com/wp-content/uploads/2019/12/keto-chicken-wings.jpg" , title: "Buffalo Wings", description: "Spicy Buffalo, wings tossed in our house sauce." , price: 9.99 , carbs: "3 Carbs"},
  
 {id: 14, image: "https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2021/06/Air-Fryer-BBQ-Chicken-Wings-2.jpg-V2-vertical-1200-800x1200.jpg" , title: "BBQ Wings", description: "Wings tossed in a keto friendly bbq sauce." , price: 9.99 , carbs: "3 Carbs"},
  
 {id: 15, image: "https://homemadehooplah.com/wp-content/uploads/2019/05/lemon-pepper-chicken-wings-1.jpg" , title: "Lemon Pepper Wings", description: "Crispy lemon pepper wings." , price: 9.99 , carbs: "0 Carbs"},
  
 {id: 16, image: "https://theketocookbook.com/wp-content/uploads/2018/05/wings-1040x1300.jpg" , title: "Garlic Parmesan", description: "Cripsy Wings, tossed in garlic parmesan." , price: 13.99 , carbs: "3 Carbs"},
  
]

  menuItemsWings.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});


}

function renderSalads(){
  $('.title').append("<h1>Salads</h1>")
const menuItemsSalads = [
  {id: 17, image: "https://www.eatwell101.com/wp-content/uploads/2018/01/shrimp-avocado-tomato-salad.jpg" , title: "Shrimp Avocado Tomato Salad", description: "Avocados, cherry tomatoes, red onion, and cilantro tossed with freshly squeezed lime juice and a dash of olive oil. This shrimp avocado salad is a crazy healthy lunch!." , price: 8.99 , carbs: "3 Carbs"},
  
  {id: 18, image: "https://simply-delicious-food.com/wp-content/uploads/2019/05/blt-chicken-salad-3.jpg" , title: "BLT Chicken Salad", description: "BLT Chicken Salad Delecious chicken salad, comes with a bed of lettuce, seasone grilled chicken, tomato, avacaod, and bacon bits.", price: 13.99, carbs: "2 Carbs"},
  
  {id: 19, image: "https://www.saltandlavender.com/wp-content/uploads/2018/03/low-carb-taco-salad-recipe-1.jpg" , title: "Taco Salad", description: "All your taco needs in a salad! Lettuce, seasoned ground beef, tomato, cheese, and peppers." , price: 10.99 , carbs: "5 Carbs"},
  
 {id: 20, image: "https://cdn.shopify.com/s/files/1/2364/6329/articles/primalkitchen_blog_kalesalad_03_2048x.jpg?v=1570834892" , title: "Avacado Kale Salad", description: "Bed of Kale, loaded with avacado, and chicken." , price: 12.99 , carbs: "2 Carbs"},
  
]

 menuItemsSalads.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});


}

function renderSides(){
  $('.title').append("<h1>Sides</h1>")
const menuItemsSides = [
  {id: 21, image: "https://hip2keto.com/wp-content/uploads/sites/3/2019/10/Untitled-13.jpg?resize=1024%2C538&strip=all" , title: "Jicama fries", description: "Crispy Jicama fries." , price: 3.99 , carbs: "3 Carbs"},
  
  {id: 22, image: "https://i.pinimg.com/originals/74/d4/dd/74d4dde19f0934d65c60da8a029f62a3.jpg" , title: "Loaded Cauliflower Mashed", description: "Mashed cauliflower, topped with cheese, and bacon.", price: 2.99, carbs: "4 Carbs"},
  
  {id: 23, image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/224521.jpg" , title: "Cauliflower Mac n Cheese", description: "Cauliflower Mach n Cheese, loaded with a three cheese blend." , price: 2.99 , carbs: "5 Carbs"},
  
 {id: 24, image: "https://static.wixstatic.com/media/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg/v1/fill/w_1000,h_725,al_c,q_90,usm_0.66_1.00_0.01/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg" , title: "Bacon Greenbeans", description: "Steamed greenbeans, filled with bacon bits." , price: 2.99 , carbs: "4 Carbs"},
  
]

 menuItemsSides.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});



}


function renderCharcuterie(){
  $('.title').append("<h1>Charcuterie</h1>")
const menuItemsCharcuterie = [
  {id: 25, image: "https://www.lowcarbnomad.com/wp-content/uploads/2020/09/Keto-Breakfast-Charcuterie-Board-21-500x500.jpg" , title: "Breakfast Charcuterie", description: "Our breakfast charucterie board, filled with keto friendly pancakes, breakfast sausage, bacon, eggs, strawberries, blue berries, and rasberries!" , price: 24.99, carbs: "10 Carbs"},
  
  {id: 26, image: "https://thebigmansworld.com/wp-content/uploads/2021/07/keto-charcuterie-board-4-500x500.jpeg" , title: "The Fulfillment", description: "Fullfilment charcuterie board, comes with a variety of meat, cheese, nuts, fruit, and chocolate. Kiwi, tomato, dark chocolate, nuts, and more!", price: 19.99, carbs: "8 Carbs"},
  
  {id: 27, image: "https://www.lowcarbingasian.com/wp-content/uploads/2019/05/Keto-Charcuterie-Board-LowCarbingAsian-Cover.jpg" , title: "The K.I.S.S", description: "A little, meat, cheese, nuts, and fruit." , price: 18.99 , carbs: "5 Carbs"},
  
 {id: 28, image: "https://media1.popsugar-assets.com/files/thumbor/gfEQPn5K5DZkzH4Mg7fDJ47o1Ns/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/12/17/057/n/1922729/0c0499a85fdbf632d9de26.45494820_/i/fruit-charcuterie-board-ideas.jpg" , title: "The Very Berry", description: "Ultimate, low car fruit charcuterie. Watermelon, blueberries, rasberries, and strawberries." , price: 15.99 , carbs: "12 Carbs"},
  
]

 menuItemsCharcuterie.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});



}

function renderLunches(){
  $('.title').append("<h1>Lunch Menu</h1>")
const menuItemsLunches = [
   {id: 29, image: "https://mamabearscookbook.com/wp-content/uploads/2019/10/low-carb-beef-stew-feature.jpg" , title: "Beef Stew and Keto Rolls", description: "Our hearty beef stew, paired with keto friendly rolls." , price: 9.99, carbs: "4 Carbs"},
  
  {id: 30, image: "https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2017/02/22121653/Kielbasa-Fried-Cabbage-Horizontal-5.jpg" , title: "Cabbage and Sasuage Bowl", description: "Our smothered cabbage, cooked with smoked sausage." , price: 7.99 , carbs: "3 Carbs"},
  
  {id: 31, image: "https://ketopots.com/wp-content/uploads/2020/02/5a-keto-spaghetti.jpg" , title: "Meatballs with Egg Noodles", description: "Our house rolled meatballs covered in pasta sauce, over a bed of egg noodles.", price: 11.99, carbs: "8 Carbs"},
  
  {id: 32, image: "https://i2.wp.com/homemadeinterest.com/wp-content/uploads/2018/01/Low-Carb-Meatloaf_featured-FB.jpg" , title: "Meatloaf", description: "Our slow cooked meatload, covered in brown gravy." , price: 6.99 , carbs: "5 Carbs"},
  
]

 menuItemsLunches.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});;



}


function renderKids(){
  $('.title').append("<h1>Kids Menu</h1>")
const menuItemsKidsMenu = [
   {id: 33, image: "https://www.thedietchefs.com/wp-content/uploads/2019/04/Keto-Pizza-in-10-MINUTES-This-the-is-BEST-Pizza-for-keto-SO-MUCH-BETTER-than-Fat-head-Crust-Pizza.png" , title: "Pizza Slice", description: "Large slice of pepperoni pizza, with crust made of cheese." , price: 5.99 , carbs: "2 Carbs"},
  
  {id: 34, image: "https://webknox.com/recipeImages/983213-556x370.jpg" , title: "Chicken Nuggets", description: "5pc Chicken Nuggets." , price: 4.99 , carbs: "15 Carbs"},
  
  {id: 35, image: "https://www.tasteaholics.com/wp-content/uploads/2019/01/Crispy-Baked-Fish-Sticks-feature.jpg" , title: "Fishsticks", description: "6 Crunchy fishsticks.", price: 4.99, carbs: "8 Carbs"},
  
  {id: 36, image: "https://www.officiallyglutenfree.com/wp-content/uploads/2020/03/Low-Carb-Chicken-Club-Sandwich-17.jpg" , title: "Club Sandwhiches", description: "4 lettuce wrap club sandwhiches, topped with cheese, turkey, ham, and bacon." , price: 6.99 , carbs: "2 Carbs"},
  
]

 menuItemsKidsMenu.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});


}

function renderDesserts(){
  $('.title').append("<h1>Desserts</h1>")
const menuItemsDesserts = [
   {id: 37, image: "https://www.fittoservegroup.com/wp-content/uploads/2020/02/keto-blueberry-cheesecake-on-white-plate-2-2-720x720.jpg" , title: "Blueberry Cheesecake", description: "Slice of blueberry cheesecake." , price: 5.99 , carbs: "9 Carbs"},
  
  {id: 38, image: "https://www.thespruceeats.com/thmb/hSpbo9r3zma8clXXd-mXeqzu7l4=/1332x1332/smart/filters:no_upscale()/keto-chocolate-cookies-4769153-hero-01-a4287551d0eb4d86a4bc3bb0afb6c6d8.jpg" , title: "Double ChocolateChip Cookies", description: "4 large double chocolate chip cookies." , price: 4.99, carbs: "4 Carbs"},
  
  {id: 39, image: "https://www.ketoconnect.net/wp-content/uploads/2020/12/close-up-pile-of-cookies-with-sea-salt.jpg" , title: "Classic Chocolate Chip Cookies", description: "4 large classic chocolate chip cookies.", price: 4.99, carbs: "4 Carbs"},
  
  {id: 40, image: "https://joyfilledeats.com/wp-content/uploads/2017/10/keto-vanilla-ice-cream-1-500x375.jpg" , title: "Brownie and Vanilla Ice Cream", description: "Keto brownie, with a scoop of Halo Top, vanilla ice cream." , price: 6.99 , carbs: "6 Carbs"},
]

 menuItemsDesserts.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `).data('item', item)
    
   $('.food-options').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(event){
   event.preventDefault();
   let selected = $(this).closest('.card').data('item')
   localStorage.setItem('mealSelection', JSON.stringify(selected))
     window.location = "/orderpage";    
});



}

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






