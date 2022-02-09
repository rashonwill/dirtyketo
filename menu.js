let count = 0;

(function(){
  let spending = localStorage.getItem('cartItems')
  if (!spending){
  localStorage.setItem('cartItems', count)
  }else if (spending){
$('.count').text(spending);
  }
})();




$('#appetizers').click(function renderAppetizers(){ 
  $('.main').empty();
let apps =  (`<div class="title"> Appetizers</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Taco Bites</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Chilli Cheese Hot Dogs</p>
    <a href="#" class="btn" id="hotdogs">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Guacamole & Chips</p>
    <a href="#" class="btn" id="guaca">Order</a>
  </div>
</div>  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Bacon Cheese Burger Bites</p>
    <a href="#" class="btn" id="burgerbites">Order</a>
  </div>
</div>     
       
  </div>`);
  $('.main').append(apps);
  
$('#tacos').on('click', function(){
  $('.main').empty();
  let tacoDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Taco Bites</div>
        <div class="course-description">
          <p> Keto Friendly Taco bites, crunchy taco shells made of chhese, filled with beef, our special taco seasoning, and cheese, topped off with a scoop of sour cream,fresh peppers and  bacon bits. </p>
        </div>
        <div class="course-price">$10.99 | 3 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(tacoDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});



$('#hotdogs').on('click', function(){
  $('.main').empty();  
  let hotDogDetails = (`
  
    <div class="selected-order">
  <div class="course">
    <div class="dinner">
    <img src="https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg"/>  
      </div> 
  </div>
  <div class="course-opts">
  <div class="course-info">
        <div class="course-name">Chilli Cheese Hot Dogs</div>
        <div class="course-description">
          <p> These Keto Chili Cheese Dogs have everything you love about this classic, without the carbs! Easy, low carb, gluten free pigs in a blanket are smothered with keto chili and shredded cheddar cheese! </p>
        </div>
        <div class="course-price">$9.99 | 3.8 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  </div>
  </div>
  `);
  $('.main').append(hotDogDetails);
  
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
    console.log(count)
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');           
           
$('.count').text(newCart);
   count = cartNow;
  console.log(count)
  })

});

$('#guaca').on('click', function(){

  $('.main').empty();
  let mealDetails = (`
  <div class="selected-order">
  <div class="course">
    <div class="dinner">
    <img src="https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg"/>  
      </div> 
  </div>
  
  <div class="course-opts">
  <div class="course-info">
        <div class="course-name">Guacamole & Chips</div>
        <div class="course-description">
          <p> This Homemade Low Carb Keto Tortilla Chips Recipe will become your go-to tortilla chips recipe! It’s perfect when you’re craving crispy chips paired with salsa, guacamole, or queso. </p>
        </div>
        <div class="course-price">$8.99 | 2.6 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  </div>
  </div>
  `);
  $('.main').append(mealDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');           
           
$('.count').text(newCart);
       count = cartNow;
  console.log(count)
  })
 
  
});

$('#burgerbites').on('click', function(){
  $('.main').empty();
  
  
  let mealDetails = (`
  <div class="selected-order">
  
  <div class="course">
   <div class="dinner">
    <img src="https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg"/>  
      </div> 
  </div>
  <div class="course-opts">
  <div class="course-info">
        <div class="course-name">Bacon Cheese Burger Bites</div>
        <div class="course-description">
          <p> Low carb, bunless burger bites, that come with letteuce, cheese, pickles, bacon, tomato, and a juicy ground beef patty.  </p>
        </div>
        <div class="course-price">$11.99 | 1 carb</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  </div>
  </div>
  `);
  $('.main').append(mealDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');           
           
$('.count').text(newCart);
       count = cartNow;
  console.log(count)
  })
  
})
  
  
});
  
  $('#burgers').click(function renderBurgers(){
   $('.main').empty();
 let burgers =  (`<div class="title"> Burgers</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://kaseytrenum.com/wp-content/uploads/2020/05/keto-stuffed-burger.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">The Plain Jane</p>
    <a href="#" class="btn" id="plain">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">The Big Boy</p>
    <a href="#" class="btn" id="bigboy">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg">
  <div class="card-body">
    <p class="card-text">The All You Need</p>
    <a href="#" class="btn" id="allyouneed">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/03/cheeseburger-wraps-500x500.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Cheese Burger Wraps</p>
    <a href="#" class="btn" id="wraps">Order</a>
  </div>
</div>     
       
  </div>`);
  $('.main').append(burgers);
    
  $('#plain').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://kaseytrenum.com/wp-content/uploads/2020/05/keto-stuffed-burger.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">The Plain Jane</div>
        <div class="course-description">
          <p> Basic Keto, burger with all the flavor. Comes with lettuce, tomato, onion, and pickles. </p>
        </div>
        <div class="course-price">$11.99 | 3 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});

$('#bigboy').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">The Big Boy</div>
        <div class="course-description">
          <p> For those with a monster appetite, the big boy. Double patty bunless burger topped with lettuce, grilled onions, mushroom, bacon, and cheese. </p>
        </div>
        <div class="course-price">$13.99 | 5 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});


$('#allyouneed').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">The All You Need</div>
        <div class="course-description">
          <p>  Keto friendly bun, topped with lettuce, fresh onions, and cheese. </p>
        </div>
        <div class="course-price">$13.99 | 5 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});


$('#wraps').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/03/cheeseburger-wraps-500x500.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Cheese Bruger Wraps</div>
        <div class="course-description">
          <p> Low carb tortilla wraps, grilled stuffed with burger meat, cheese, tomato, lettuce, and our special dipping sauce. </p>
        </div>
        <div class="course-price">$13.99 | 4 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

})
   });
 });
   

 
$('#steak').click(function renderSteakAndShrimp(){
   $('.main').empty();
  let steakShrimp =  (`<div class="title"> Steak And Shrimp</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.aymag.com/wp-content/uploads/2020/05/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Steak and Garlic Shrimp</p>
    <a href="#" class="btn" id="garlicshrimp">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.noshtastic.com/wp-content/uploads/2018/08/low-carb-beef-and-broccoli-sq-1-of-1.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Steak and Broccoli Skillet</p>
    <a href="#" class="btn" id="broccoli">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.justataste.com/wp-content/uploads/2016/06/skinny-shrimp-scampi-photo.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Shrimp Scampi</p>
    <a href="#" class="btn" id="scampi">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://dadwithapan.com/wp-content/uploads/2017/08/Steak-Shrimp-Paleo-Bowl-1-656x875.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Shrimp and Steak Bowl with Veggies</p>
    <a href="#" class="btn" id="steakbowl">Order</a>
  </div>
</div>     
       
  </div>`);
      $('.main').append(steakShrimp);
  $('#garlicshrimp').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://www.aymag.com/wp-content/uploads/2020/05/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Steak and Garlic Shrimp</div>
        <div class="course-description">
          <p> Our delicious marinated steak grilled over a flame, paired with our famount garlic butter shrimp. </p>
        </div>
        <div class="course-price">$21.99 | 10 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});

$('#broccoli').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://www.noshtastic.com/wp-content/uploads/2018/08/low-carb-beef-and-broccoli-sq-1-of-1.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Steak and Broccoli</div>
        <div class="course-description">
          <p> Our delicious marinated steak grilled over a flame, paired with steam broccoli. </p>
        </div>
        <div class="course-price">$17.99 | 4 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});


$('#scampi').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://www.justataste.com/wp-content/uploads/2016/06/skinny-shrimp-scampi-photo.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Shrimp Scampi</div>
        <div class="course-description">
          <p>  Well seasone, shrimped layed over a bed of zucchini noodles.</p>
        </div>
        <div class="course-price">$10.99 | 5 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});


$('#steakbowl').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://dadwithapan.com/wp-content/uploads/2017/08/Steak-Shrimp-Paleo-Bowl-1-656x875.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Shrimp and Steak Bowl with Veggies</div>
        <div class="course-description">
          <p> Our famously marinated steak and sauted shrimp paired with a vegetable melody. </p>
        </div>
        <div class="course-price">$13.99 | 4 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

})
   });
  
});


$('#wings').click(function renderWings(){
   $('.main').empty();
  let wings =  (`<div class="title"> Wings</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.allchickenrecipes.com/wp-content/uploads/2019/12/keto-chicken-wings.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Buffalo Wings</p>
    <a href="#" class="btn" id="buffalo">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2021/06/Air-Fryer-BBQ-Chicken-Wings-2.jpg-V2-vertical-1200-800x1200.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">BBQ Wings</p>
    <a href="#" class="btn" id="bbq">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://homemadehooplah.com/wp-content/uploads/2019/05/lemon-pepper-chicken-wings-1.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Lemon Pepper Wings</p>
    <a href="#" class="btn" id="lemon">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://theketocookbook.com/wp-content/uploads/2018/05/wings-1040x1300.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Garlic Parmesan</p>
    <a href="#" class="btn" id="parmesan">Order</a>
  </div>
</div>     
       
  </div>`);
   $('.main').append(wings);
  
  $('#buffalo').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://www.allchickenrecipes.com/wp-content/uploads/2019/12/keto-chicken-wings.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Buffalo Wings</div>
        <div class="course-description">
          <p> Spicy Buffalo, wings tossed in our house sauce. </p>
        </div>
        <div class="course-price">$9.99 | 5 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});

$('#bbq').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2021/06/Air-Fryer-BBQ-Chicken-Wings-2.jpg-V2-vertical-1200-800x1200.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">BBQ Wings</div>
        <div class="course-description">
          <p> Wings tossed in a keto friendly bbq sauce. </p>
        </div>
        <div class="course-price">$9.99 | 3 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});


$('#lemon').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://homemadehooplah.com/wp-content/uploads/2019/05/lemon-pepper-chicken-wings-1.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Lemon Pepper Wings</div>
        <div class="course-description">
          <p>  Crispy lemon pepper wings. </p>
        </div>
        <div class="course-price">$9.99 | 0 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

  })

});


$('#parmesan').on('click', function(){
  $('.main').empty();
  let burgerDetails = (`
  
   <div class="selected-order">
   
     <div class="course">
  <div class="dinner">
    <img src="https://theketocookbook.com/wp-content/uploads/2018/05/wings-1040x1300.jpg"/>  
      </div> 
  </div>

    <div class="course-opts">


  <div class="course-info">
        <div class="course-name">Garlic Parmesan</div>
        <div class="course-description">
          <p> Cripsy Wings, tossed in garlic parmesan. </p>
        </div>
        <div class="course-price">$13.99 | 1 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
    </div>
    
      </div>
  `);
  $('.main').append(burgerDetails);
  $('.btn').on('click', function(){
  $('.btn').text('Added to Cart!');	
  $('.count').empty();
let updateCart = count + 1;
let totalBag = localStorage.setItem('cartItems', updateCart);
let newCart = localStorage.getItem('cartItems');                      
$('.count').text(newCart);
       count = cartNow;
  console.log(count)

})
   });
  
});

$('#salads').click(function renderSalads(){
   $('.main').empty();
  let salads =  (`<div class="title"> Salads</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.eatwell101.com/wp-content/uploads/2018/01/shrimp-avocado-tomato-salad.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Shrimp Avocado and Tomato Salad</p>
    <a href="#" class="btn" id="shrimpavocado">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://simply-delicious-food.com/wp-content/uploads/2019/05/blt-chicken-salad-3.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">BLT Chicken Salad</p>
    <a href="#" class="btn" id="blt">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.saltandlavender.com/wp-content/uploads/2018/03/low-carb-taco-salad-recipe-1.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Taco Salad</p>
    <a href="#" class="btn" id="tacosalad">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/2364/6329/articles/primalkitchen_blog_kalesalad_03_2048x.jpg?v=1570834892" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Avacado Kale Salad</p>
    <a href="#" class="btn" id="kalesalad">Order</a>
  </div>
</div>     
       
  </div>`);
      $('.main').append(salads);
  return salads;
  
});


$('#sides').click(function renderSides(){
   $('.main').empty();
  let sides =  (`<div class="title"> Sides</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://hip2keto.com/wp-content/uploads/sites/3/2019/10/Untitled-13.jpg?resize=1024%2C538&strip=all" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Jicama Fries</p>
    <a href="#" class="btn" id="fries">Order</a>
  </div>
</div>  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://i.pinimg.com/originals/74/d4/dd/74d4dde19f0934d65c60da8a029f62a3.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Loaded Cauliflower Mashed</p>
    <a href="#" class="btn" id="mash">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/224521.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Cauliflower Mac n Cheese</p>
    <a href="#" class="btn" id="mac">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://static.wixstatic.com/media/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg/v1/fill/w_1000,h_725,al_c,q_90,usm_0.66_1.00_0.01/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Bacon Greenbeans</p>
    <a href="#" class="btn" id="greenbeans">Order</a>
  </div>
</div>     
       
  </div>`);
      $('.main').append(sides);
  return sides;
  
});

$('#charcuterie').click(function renderChacuterie(){
   $('.main').empty();
  let platters =  (`<div class="title">Chacuterie</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.lowcarbnomad.com/wp-content/uploads/2020/09/Keto-Breakfast-Charcuterie-Board-21-500x500.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Breakfast Charcuterie</p>
    <a href="#" class="btn" id="breakfast">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://thebigmansworld.com/wp-content/uploads/2021/07/keto-charcuterie-board-4-500x500.jpeg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">The Fulfillment</p>
    <a href="#" class="btn" id="fulfillment">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.lowcarbingasian.com/wp-content/uploads/2019/05/Keto-Charcuterie-Board-LowCarbingAsian-Cover.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">K.I.S.S</p>
    <a href="#" class="btn" id="kiss">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://media1.popsugar-assets.com/files/thumbor/gfEQPn5K5DZkzH4Mg7fDJ47o1Ns/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/12/17/057/n/1922729/0c0499a85fdbf632d9de26.45494820_/i/fruit-charcuterie-board-ideas.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">The Very Berry</p>
    <a href="#" class="btn" id="berry">Order</a>
  </div>
</div>     
       
  </div>`);
      $('.main').append(platters);
  return platters;
});

//NEXT

$('#lunches').click(function renderLunches(){
   $('.main').empty();
  let lunches =  (`<div class="title">Daily Lunches</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://mamabearscookbook.com/wp-content/uploads/2019/10/low-carb-beef-stew-feature.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Beef Stew and Keto Rolls</p>
    <a href="#" class="btn" id="stew">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2017/02/22121653/Kielbasa-Fried-Cabbage-Horizontal-5.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Cabbage and Sausage Bowl</p>
    <a href="#" class="btn" id="cabbage">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://ketopots.com/wp-content/uploads/2020/02/5a-keto-spaghetti.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Meatballs with Egg Noodles</p>
    <a href="#" class="btn" id="meatballs">Order</a>
  </div>
</div>  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://i2.wp.com/homemadeinterest.com/wp-content/uploads/2018/01/Low-Carb-Meatloaf_featured-FB.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Meatloaf</p>
    <a href="#" class="btn" id="meatloaf">Order</a>
  </div>
</div>     
       
  </div>`);
      $('.main').append(lunches);
  return lunches;
  
});

$('#kids').click(function renderKids(){
   $('.main').empty();
  let kids=  (`<div class="title">Kids Menu</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.thedietchefs.com/wp-content/uploads/2019/04/Keto-Pizza-in-10-MINUTES-This-the-is-BEST-Pizza-for-keto-SO-MUCH-BETTER-than-Fat-head-Crust-Pizza.png" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Pizza Slice</p>
    <a href="#" class="btn" id="pizza">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://webknox.com/recipeImages/983213-556x370.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Chicken Nuggets</p>
    <a href="#" class="btn" id="nuggets">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.tasteaholics.com/wp-content/uploads/2019/01/Crispy-Baked-Fish-Sticks-feature.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Fish Sticks</p>
    <a href="#" class="btn" id="fishsticks">Order</a>
  </div>
</div>  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.officiallyglutenfree.com/wp-content/uploads/2020/03/Low-Carb-Chicken-Club-Sandwich-17.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Club Sandwiches</p>
    <a href="#" class="btn" id="sandwich">Order</a>
  </div>
</div>     
       
  </div>`);
      $('.main').append(kids);
  return kids;
});

$('#desserts').click(function renderDesserts(){
   $('.main').empty();
  let desserts =  (`<div class="title">Desserts</div>
  <div class="food-options">
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.fittoservegroup.com/wp-content/uploads/2020/02/keto-blueberry-cheesecake-on-white-plate-2-2-720x720.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Blueberry Cheesecake</p>
    <a href="#" class="btn" id="cheesecake">Order</a>
  </div>
</div>  

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.thespruceeats.com/thmb/hSpbo9r3zma8clXXd-mXeqzu7l4=/1332x1332/smart/filters:no_upscale()/keto-chocolate-cookies-4769153-hero-01-a4287551d0eb4d86a4bc3bb0afb6c6d8.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Double Chocolate Chip Cookes</p>
    <a href="#" class="btn" id="doublechocolate">Order</a>
  </div>
</div>  
    
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.ketoconnect.net/wp-content/uploads/2020/12/close-up-pile-of-cookies-with-sea-salt.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Classic Chocolate Chip</p>
    <a href="#" class="btn" id="classic">Order</a>
  </div>
</div>  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://joyfilledeats.com/wp-content/uploads/2017/10/keto-vanilla-ice-cream-1-500x375.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Brownie and Vanilla Ice Cream</p>
    <a href="#" class="btn" id="brownie">Order</a>
  </div>
</div>     
       
  </div>`) 
    $('.main').append(desserts);
  return desserts;
  
});

//TO DO 
// $('#beverages').click(function renderBeverages(){
//    $('.main').empty();
//   let drinks =  (`<div class="title"> Beverages</div>
//   <div class="food-options">
    
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Taco Bites</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>  
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Chilli Cheese Hot Dogs</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>  
    
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Guacamole & Chips</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>  
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Bacon Cheese Burger Bites</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>     
       
//   </div>`);
//       $('.main').append(drinks);
//   return drinks;
  
// });

//TO DO
// $('#deals').click(function renderDeals(){
//    $('.main').empty();
//   let deals =  (`<div class="title"> Meal Deals</div>
//   <div class="food-options">
    
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Taco Bites</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>  
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Chilli Cheese Hot Dogs</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>  
    
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Guacamole & Chips</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>  
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Bacon Cheese Burger Bites</p>
//     <a href="#" class="btn">Order</a>
//   </div>
// </div>     
       
//   </div>`);
//       $('.main').append(deals);
//   return deals;
  
// });


//Menu Selection








//Burgers

function renderPlainJane(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
  let course = (`
  <div class="dinner">
    <img src="https://kaseytrenum.com/wp-content/uploads/2020/05/keto-stuffed-burger.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">The Plain Jane</div>
        <div class="course-description">
    <p> Low carb, bunless burger, that comes topped with letteuce, red onion, pickles, tomato, and a juicy ground beef patty.  </p>
        </div>
        <div class="course-price">$11.99 | 1 carb</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);
  
};

function renderBigBoy(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
  let course = (`
  <div class="dinner">
    <img src="https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">The Big Boy</div>
        <div class="course-description">
    <p> Low carb, bunless burger, that comes topped with letteuce, grilled onions, bacon, melted feta cheese, mushrooms, and TWO juicy ground beef patties.  </p>
        </div>
        <div class="course-price">$13.99 | 3 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails); 
  
};

// renderBigBoy();

function renderAllYouNeed(){
    $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
  let course = (`
  <div class="dinner">
    <img src="https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">The All You Need</div>
        <div class="course-description">
    <p> Low carb, veggie bun burger, that comes topped with letteuce, onions, melted cheese, a special sauce, and a juicy ground beef patty.  </p>
        </div>
        <div class="course-price">$13.99 | 5 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
  
  
};

function renderBurgerWraps(){
    $('.course').empty();
  $('.course-opts').empty(); 
  $('.main').empty();
  let course = (`
  <div class="dinner">
    <img src="https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/03/cheeseburger-wraps-500x500.jpg"/>  
      </div>
      
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Cheese Burger Wraps</div>
        <div class="course-description">
    <p> These low carb, burrito style burger wraps are stuffed with juicy ground beef, crispy bacon, double cheese and all your favourite classic burger salad!  </p>
        </div>
        <div class="course-price">$8.99 | 4 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);    
  
  
};

// renderBurgerWraps();


//Steak and Shrimp

function renderSteakandGarlicShrimp(){
   $('.course').empty();
  $('.course-opts').empty(); 
  $('.main').empty();
let course = (`
  <div class="dinner">
    <img src="https://www.aymag.com/wp-content/uploads/2020/05/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Steak and Garlic Shrimp</div>
        <div class="course-description">
    <p> Our special garlic buttered shrimp served with TWO 12oz beef steaks cooked to perfection!  </p>
        </div>
        <div class="course-price">$22.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);    
    
  
};

function renderSteakBroccoli(){
   $('.course').empty();
  $('.course-opts').empty(); 
  $('.main').empty();
let course = (`
  <div class="dinner">
    <img src="https://www.noshtastic.com/wp-content/uploads/2018/08/low-carb-beef-and-broccoli-sq-1-of-1.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Steak and Broccoli Skillet</div>
        <div class="course-description">
  <p>Tasty, thin, tender steak strips served over a bowl of steamed broccolli. </p>
        </div>
        <div class="course-price">$12.99 | 1 carbs</div>
      </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  `);
  $('.course-opts').append(mealDetails);     
  
  
};

function renderScampi(){
    $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
  let course = (`
  <div class="dinner">
    <img src="https://www.justataste.com/wp-content/uploads/2016/06/skinny-shrimp-scampi-photo.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Shrimp Scampi</div>
        <div class="course-description">
  <p>Tasty shrimp served on top of our tasty zucchini squash </p>
        </div>
        <div class="course-price">$13.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderSteakShrimpBowl(){
   $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
  let course = (`
  <div class="dinner">
    <img src="https://dadwithapan.com/wp-content/uploads/2017/08/Steak-Shrimp-Paleo-Bowl-1-656x875.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Shrimp and Steak Bowl with Veggies</div>
        <div class="course-description">
  <p>Jumbo Shrimp and Steak searved over a bed of steamed veggies, including broccoli, mushrooms, and peppers </p>
        </div>
        <div class="course-price">$18.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);     
  
  
  
};


//Wings

function renderBuffalo(){
    $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
 let course = (`
  <div class="dinner">
    <img src="https://www.allchickenrecipes.com/wp-content/uploads/2019/12/keto-chicken-wings.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Buffalo Wings</div>
        <div class="course-description">
  <p>Classic buffalo wings, made with our special in house buffalo sauce </p>
        </div>
        <div class="course-price">$10.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);     
  
    
  
};

function renderBBQ(){
   $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2021/06/Air-Fryer-BBQ-Chicken-Wings-2.jpg-V2-vertical-1200-800x1200.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">BBQ Wings</div>
        <div class="course-description">
  <p>BBQ wings, made with our special in house bbq sauce </p>
        </div>
        <div class="course-price">$10.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);     
  
  
};

function renderLemonPepper(){
    $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://homemadehooplah.com/wp-content/uploads/2019/05/lemon-pepper-chicken-wings-1.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Lemon Pepper Wings</div>
        <div class="course-description">
  <p>Crispy wings, tossed in our special lemon pepper seasoning.  </p>
        </div>
        <div class="course-price">$10.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderParmesan(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://theketocookbook.com/wp-content/uploads/2018/05/wings-1040x1300.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Garlic Parmesan</div>
        <div class="course-description">
  <p>Garlic Parmesan wings, made with our special in house seasoning </p>
        </div>
        <div class="course-price">$10.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};


//Salads
function renderShrimpAvacadoSalad(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://www.eatwell101.com/wp-content/uploads/2018/01/shrimp-avocado-tomato-salad.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Shrimp Avacoda and Tomato Salad</div>
        <div class="course-description">
  <p>Here’s a healthy and delicious shrimp avocado salad recipe for two that tastes crazy good and is also paleo, Whole30, low-carb, and gluten-free. Loaded with the freshest ingredients: Avocados, cherry tomatoes, red onion, and cilantro tossed with freshly squeezed lime juice and a dash of olive oil.  </p>
        </div>
        <div class="course-price">$12.99 | 2 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderBLTSalad(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://simply-delicious-food.com/wp-content/uploads/2019/05/blt-chicken-salad-3.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">BLT Chicken Salad</div>
        <div class="course-description">
  <p>Juicy grilled chicken BLT salad is everything you want from a salad and more. Crispy bacon, creamy avocado and punchy lemon-herb dressing? Yes please!  </p>
        </div>
        <div class="course-price">$15.99 | 6 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderTacoSalad(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://www.saltandlavender.com/wp-content/uploads/2018/03/low-carb-taco-salad-recipe-1.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Taco Salad</div>
        <div class="course-description">
  <p>Our delicious taco salads comes with everything you need to fulfill that taco craving. Loaded with meat cheese, sour cream, tomato, lettuce and avacado. It's definitely a fiesta!  </p>
        </div>
        <div class="course-price">$15.99 | 10 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderAvacadoKaleSalad(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://cdn.shopify.com/s/files/1/2364/6329/articles/primalkitchen_blog_kalesalad_03_2048x.jpg?v=1570834892"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Avacado Kale Salad</div>
        <div class="course-description">
  <p>Delicious Kale drowned in our vinagrette avacado oil topped with cucumber, seasoned tender chicken strips, and avacado. </p>
        </div>
        <div class="course-price">$13.99 | 8 carbs</div>
      </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  `);
  $('.course-opts').append(mealDetails);  
  
}




//Sides


function renderFries(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://hip2keto.com/wp-content/uploads/sites/3/2019/10/Untitled-13.jpg?resize=1024%2C538&strip=all"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Jicama Fries</div>
        <div class="course-description">
  <p>Crispy Jicama Fries </p>
        </div>
        <div class="course-price">$3.99 | 11 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderMash(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://i.pinimg.com/originals/74/d4/dd/74d4dde19f0934d65c60da8a029f62a3.jpg"/>  
      </div> 
      
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Loaded Cauliflower Mashed</div>
        <div class="course-description">
  <p>Loaded Cauliflower Mashed, with cheese and bacon </p>
        </div>
        <div class="course-price">$3.99 | 7.4 carbs</div>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderMac(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/224521.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Cauliflower Mac n Cheese</div>
        <div class="course-description">
  <p>Cauliflower Mac n Cheese </p>
        </div>
        <div class="course-price">$3.98 | 6 carbs</div>
      </div>
            <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderGreenbeans(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://static.wixstatic.com/media/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg/v1/fill/w_1000,h_725,al_c,q_90,usm_0.66_1.00_0.01/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Bacon Greenbeans</div>
        <div class="course-description">
  <p>Bacon Greenbeans </p>
        </div>
        <div class="course-price">$3.98 | 10 carbs</div>
      </div>
      
            <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};


//Chacuterie

function renderBreakfastCharcuterie(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://www.lowcarbnomad.com/wp-content/uploads/2020/09/Keto-Breakfast-Charcuterie-Board-21-500x500.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">Breakfast Charcuterie</div>
        <div class="course-description">
  <p>Enjoy this delicious breakfast charcuterie board, with berries, pancakes, bacons, eggs, avacado, and sausage.</p>
        </div>
        <div class="course-price">$19.98 | 21 carbs</div>
      </div>
            <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderTheFullfillment(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://thebigmansworld.com/wp-content/uploads/2021/07/keto-charcuterie-board-4-500x500.jpeg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">The Fullfillment</div>
        <div class="course-description">
  <p>Delicious board comes with everything you need, tomato, peperonni, cheese, nuts, chocolate and more.</p>
        </div>
        <div class="course-price">$17.99 | 21 carbs</div>
      </div>
            <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderTheKISS(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://www.lowcarbingasian.com/wp-content/uploads/2019/05/Keto-Charcuterie-Board-LowCarbingAsian-Cover.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">K.I.S.S</div>
        <div class="course-description">
  <p>THE KEEP IT SIMPLE... BOARD! Loaded with sasuage, roastbeef, cucumbers, berries, nuts, cheese, and more. </p>
        </div>
        <div class="course-price">$17.99 | 21 carbs</div>
      </div>
         <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  `);
  $('.course-opts').append(mealDetails);  
  
};

function renderTheBerryBoard(){
  $('.course').empty();
  $('.course-opts').empty();
  $('.main').empty();
   let course = (`
  <div class="dinner">
    <img src="https://media1.popsugar-assets.com/files/thumbor/gfEQPn5K5DZkzH4Mg7fDJ47o1Ns/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/12/17/057/n/1922729/0c0499a85fdbf632d9de26.45494820_/i/fruit-charcuterie-board-ideas.jpg"/>  
      </div> 
  
  `);
  $('.course').append(course);
  
  
  let mealDetails = (`
  <div class="course-info">
        <div class="course-name">The Very Bery</div>
        <div class="course-description">
  <p>Fruit Filled Chacuterie Board, loaded with strawberries, blueberries, rasberreis, melon and more.  </p>
        </div>
        <div class="course-price">$17.99 | 21 carbs</div>
      </div>
            <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Side</label>
    <select style="width: 45vw" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Jimca Fries</option>
       <option>Cauliflower Mac n Cheese</option>
      <option>Loaded Cauliflower Mashed</option>
      <option>Bacon Greenbeans</option>
    </select>
  </div>
      
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select A Beverage</label>
    <select style="width: 45vw; color:#343a40" class="form-control" id="exampleFormControlSelect1">
      <option>No Thanks</option>
      <option>Coke Zero</option>
      <option>Diet Coke</option>
      <option>Dr.Pepper Zero</option>
      <option>Unsweetend Tea</option>
      <option>Bottled Water</option>
      <option>House Lemondade</option>
      <option>Keto Coffee</option>
    </select>
  </div>
  
    <button type="button" class="btn btn-primary btn-lg btn-block" style="width: 45vw; background: red; margin-top: 60px;">Add to Cart</button>
  
  `);
  $('.course-opts').append(mealDetails);  
  
};


//Lunches



//Kids



//Desserts




//Deals



//Beverages


