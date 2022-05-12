function renderItem(){
const meals = [
  {id: 1, image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" , title: "Taco Bites", description: "Keto Friendly Taco bites, crunchy taco shells made of chhese, filled with beef, our special taco seasoning, and cheese, topped off with a scoop of sour cream,fresh peppers and  bacon bits." , price: "$10.99" , carbs: "3 Carbs"},
  
  {id: 2, image: "https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg" , title: "Chilli Cheese Hot Dogs", description: "These Keto Chili Cheese Dogs have everything you love about this classic, without the carbs! Easy, low carb, gluten free pigs in a blanket are smothered with keto chili and shredded cheddar cheese!" , price: "$9.99" , carbs: "3.8 Carbs"},
  
  {id: 3, image: "https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg" , title: "Guacamole & Chips", description: "This Homemade Low Carb Keto Tortilla Chips Recipe will become your go-to tortilla chips recipe! It’s perfect when you’re craving crispy chips paired with salsa, guacamole, or queso." , price: "$8.99" , carbs: "2.6 Carbs"},
  
  {id: 4, image: "https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg" , title: "Bacon Cheese Burger Bites", description: "Low carb, bunless burger bites, that come with letteuce, cheese, pickles, bacon, tomato, and a juicy ground beef patty." , price: "$11.99" , carbs: "1 Carbs"}, 
	
	
 {id: 5, image: "https://kaseytrenum.com/wp-content/uploads/2020/05/keto-stuffed-burger.jpg" , title: "The Plain Jane", description: "Basic Keto, burger with all the flavor. Comes with lettuce, tomato, onion, and pickles." , price: "$11.99" , carbs: "3 Carbs"},
  
 {id: 6, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "The Big Boy", description: "For those with a monster appetite, the big boy. Double patty bunless burger topped with lettuce, grilled onions, mushroom, bacon, and cheese." , price: "$13.99" , carbs: "5 Carbs"}, 
  
 {id: 7, image: "https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg" , title: "The All You Need", description: "Keto friendly bun, topped with lettuce, fresh onions, and cheese." , price: "$13.99" , carbs: "5 Carbs"},  
  
 {id: 8, image: "https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg" , title: "Cheese Bruger Wraps", description: "Low carb tortilla wraps, grilled stuffed with burger meat, cheese, tomato, lettuce, and our special dipping sauce." , price: "$13.99" , carbs: "4 Carbs"},	
	
	
  {id: 9, image: "https://www.aymag.com/wp-content/uploads/2020/05/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg" , title: "Steak and Garlic Shrimp", description: "Our delicious marinated steak grilled over a flame, paired with our famount garlic butter shrimp." , price: "$21.99" , carbs: "10 Carbs"},
  
  {id: 10, image: "https://www.noshtastic.com/wp-content/uploads/2018/08/low-carb-beef-and-broccoli-sq-1-of-1.jpg" , title: "Steak and Broccoli", description: "Our delicious marinated steak grilled over a flame, paired with steam broccoli." , price: "$17.99" , carbs: "4 Carbs"},
  
  {id: 11, image: "https://www.justataste.com/wp-content/uploads/2016/06/skinny-shrimp-scampi-photo.jpg" , title: "Shrimp Scampi", description: "Well seasone, shrimped layed over a bed of zucchini noodles." , price: "$10.99" , carbs: "5 Carbs"},
  
  {id: 12, image: "https://dadwithapan.com/wp-content/uploads/2017/08/Steak-Shrimp-Paleo-Bowl-1-656x875.jpg" , title: "Shrimp and Steak Bowl with Veggies", description: "Our famously marinated steak and sauted shrimp paired with a vegetable melody." , price: "$13.99" , carbs: "4 Carbs"},
	
  
	
  {id: 13, image: "https://www.allchickenrecipes.com/wp-content/uploads/2019/12/keto-chicken-wings.jpg" , title: "Buffalo Wings", description: "Spicy Buffalo, wings tossed in our house sauce." , price: "$9.99" , carbs: "3 Carbs"},
  
 {id: 14, image: "https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2021/06/Air-Fryer-BBQ-Chicken-Wings-2.jpg-V2-vertical-1200-800x1200.jpg" , title: "BBQ Wings", description: "Wings tossed in a keto friendly bbq sauce." , price: "$9.99" , carbs: "3 Carbs"},
  
 {id: 15, image: "https://homemadehooplah.com/wp-content/uploads/2019/05/lemon-pepper-chicken-wings-1.jpg" , title: "Lemon Pepper Wings", description: "Crispy lemon pepper wings." , price: "$9.99" , carbs: "0 Carbs"},
  
 {id: 16, image: "https://theketocookbook.com/wp-content/uploads/2018/05/wings-1040x1300.jpg" , title: "Garlic Parmesan", description: "Cripsy Wings, tossed in garlic parmesan." , price: "$13.99" , carbs: "3 Carbs"},	
	
	
  {id: 17, image: "https://www.eatwell101.com/wp-content/uploads/2018/01/shrimp-avocado-tomato-salad.jpg" , title: "Shrimp Avocado Tomato Salad", description: "Avocados, cherry tomatoes, red onion, and cilantro tossed with freshly squeezed lime juice and a dash of olive oil. This shrimp avocado salad is a crazy healthy lunch!." , price: "$8.99" , carbs: "3 Carbs"},
  
  {id: 18, image: "https://simply-delicious-food.com/wp-content/uploads/2019/05/blt-chicken-salad-3.jpg" , title: "BLT Chicken Salad", description: "BLT Chicken Salad Delecious chicken salad, comes with a bed of lettuce, seasone grilled chicken, tomato, avacaod, and bacon bits.", price: "$13.99", carbs: "2 Carbs"},
  
  {id: 19, image: "https://www.saltandlavender.com/wp-content/uploads/2018/03/low-carb-taco-salad-recipe-1.jpg" , title: "Taco Salad", description: "All your taco needs in a salad! Lettuce, seasoned ground beef, tomato, cheese, and peppers." , price: "$10.99" , carbs: "5 Carbs"},
  
  {id: 20, image: "https://cdn.shopify.com/s/files/1/2364/6329/articles/primalkitchen_blog_kalesalad_03_2048x.jpg?v=1570834892" , title: "Avacado Kale Salad", description: "Bed of Kale, loaded with avacado, and chicken." , price: "$12.99" , carbs: "2 Carbs"},
 	
  
	
  {id: 21, image: "https://hip2keto.com/wp-content/uploads/sites/3/2019/10/Untitled-13.jpg?resize=1024%2C538&strip=all" , title: "Jicama fries", description: "Crispy Jicama fries." , price: "$3.99" , carbs: "3 Carbs"},
  
  {id: 22, image: "https://i.pinimg.com/originals/74/d4/dd/74d4dde19f0934d65c60da8a029f62a3.jpg" , title: "Loaded Cauliflower Mashed", description: "Mashed cauliflower, topped with cheese, and bacon.", price: "$2.99", carbs: "4 Carbs"},
  
  {id: 23, image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/224521.jpg" , title: "Cauliflower Mac n Cheese", description: "Cauliflower Mach n Cheese, loaded with a three cheese blend." , price: "$2.99" , carbs: "5 Carbs"},
  
  {id: 24, image: "https://static.wixstatic.com/media/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg/v1/fill/w_1000,h_725,al_c,q_90,usm_0.66_1.00_0.01/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg" , title: "Bacon Greenbeans", description: "Steamed greenbeans, filled with bacon bits." , price: "$2.99" , carbs: "4 Carbs"},	
	
    
   {id: 25, image: "https://www.lowcarbnomad.com/wp-content/uploads/2020/09/Keto-Breakfast-Charcuterie-Board-21-500x500.jpg" , title: "Breakfast Charcuterie", description: "Our breakfast charucterie board, filled with keto friendly pancakes, breakfast sausage, bacon, eggs, strawberries, blue berries, and rasberries!" , price: "$24.99" , carbs: "10 Carbs"},
  
  {id: 26, image: "https://thebigmansworld.com/wp-content/uploads/2021/07/keto-charcuterie-board-4-500x500.jpeg" , title: "The Fulfillment", description: "Fullfilment charcuterie board, comes with a variety of meat, cheese, nuts, fruit, and chocolate. Kiwi, tomato, dark chocolate, nuts, and more!", price: "$19.99", carbs: "8 Carbs"},
  
  {id: 27, image: "https://www.lowcarbingasian.com/wp-content/uploads/2019/05/Keto-Charcuterie-Board-LowCarbingAsian-Cover.jpg" , title: "The K.I.S.S", description: "A little, meat, cheese, nuts, and fruit." , price: "$18.99" , carbs: "5 Carbs"},
  
 {id: 28, image: "https://media1.popsugar-assets.com/files/thumbor/gfEQPn5K5DZkzH4Mg7fDJ47o1Ns/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/12/17/057/n/1922729/0c0499a85fdbf632d9de26.45494820_/i/fruit-charcuterie-board-ideas.jpg" , title: "The Very Berry", description: "Ultimate, low car fruit charcuterie. Watermelon, blueberries, rasberries, and strawberries." , price: "$15.99" , carbs: "12 Carbs"},
	
	
	
   {id: 29, image: "https://mamabearscookbook.com/wp-content/uploads/2019/10/low-carb-beef-stew-feature.jpg" , title: "Beef Stew and Keto Rolls", description: "Our hearty beef stew, paired with keto friendly rolls." , price: "$9.99" , carbs: "4 Carbs"},
  
  {id: 30, image: "https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2017/02/22121653/Kielbasa-Fried-Cabbage-Horizontal-5.jpg" , title: "Cabbage and Sasuage Bowl", description: "Our smothered cabbage, cooked with smoked sausage." , price: "$7.99" , carbs: "3 Carbs"},
  
  {id: 31, image: "https://ketopots.com/wp-content/uploads/2020/02/5a-keto-spaghetti.jpg" , title: "Meatballs with Egg Noodles", description: "Our house rolled meatballs covered in pasta sauce, over a bed of egg noodles.", price: "$11.99", carbs: "8 Carbs"},
  
  {id: 32, image: "https://i2.wp.com/homemadeinterest.com/wp-content/uploads/2018/01/Low-Carb-Meatloaf_featured-FB.jpg" , title: "Meatloaf", description: "Our slow cooked meatload, covered in brown gravy." , price: "$6.99" , carbs: "5 Carbs"},	
	
	
  {id: 33, image: "https://www.thedietchefs.com/wp-content/uploads/2019/04/Keto-Pizza-in-10-MINUTES-This-the-is-BEST-Pizza-for-keto-SO-MUCH-BETTER-than-Fat-head-Crust-Pizza.png" , title: "Pizza Slice", description: "Large slice of pepperoni pizza, with crust made of cheese." , price: "$5.99" , carbs: "2 Carbs"},
  
  {id: 34, image: "https://webknox.com/recipeImages/983213-556x370.jpg" , title: "Chicken Nuggets", description: "5pc Chicken Nuggets." , price: "$4.99" , carbs: "15 Carbs"},
  
  {id: 35, image: "https://www.tasteaholics.com/wp-content/uploads/2019/01/Crispy-Baked-Fish-Sticks-feature.jpg" , title: "Fishsticks", description: "6 Crunchy fishsticks.", price: "$4.99", carbs: "8 Carbs"},
  
  {id: 36, image: "https://www.officiallyglutenfree.com/wp-content/uploads/2020/03/Low-Carb-Chicken-Club-Sandwich-17.jpg" , title: "Club Sandwhiches", description: "4 lettuce wrap club sandwhiches, topped with cheese, turkey, ham, and bacon." , price: "$6.99" , carbs: "2 Carbs"},	
	

  {id: 37, image: "https://www.fittoservegroup.com/wp-content/uploads/2020/02/keto-blueberry-cheesecake-on-white-plate-2-2-720x720.jpg" , title: "Blueberry Cheesecake", description: "Slice of blueberry cheesecake." , price: "$5.99" , carbs: "9 Carbs"},
  
  {id: 38, image: "https://www.thespruceeats.com/thmb/hSpbo9r3zma8clXXd-mXeqzu7l4=/1332x1332/smart/filters:no_upscale()/keto-chocolate-cookies-4769153-hero-01-a4287551d0eb4d86a4bc3bb0afb6c6d8.jpg" , title: "Double ChocolateChip Cookies", description: "4 large double chocolate chip cookies." , price: "$4.99" , carbs: "4 Carbs"},
  
  {id: 39, image: "https://www.ketoconnect.net/wp-content/uploads/2020/12/close-up-pile-of-cookies-with-sea-salt.jpg" , title: "Classic Chocolate Chip Cookies", description: "4 large classic chocolate chip cookies.", price: "$4.99", carbs: "4 Carbs"},
  
  {id: 40, image: "https://joyfilledeats.com/wp-content/uploads/2017/10/keto-vanilla-ice-cream-1-500x375.jpg" , title: "Brownie and Vanilla Ice Cream", description: "Keto brownie, with a scoop of Halo Top, vanilla ice cream." , price: "$6.99" , carbs: "6 Carbs"},	
	
	

]










};

































// function renderTacoBites() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Taco Bites</div>
//         <div class="course-description">
//           <p> Keto Friendly Taco bites, crunchy taco shells made of chhese, filled with beef, our special taco seasoning, and cheese, topped off with a scoop of sour cream,fresh peppers and  bacon bits. </p>
//         </div>
//         <div class="course-price">$10.99 | 3 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// // renderTacoBites();

// function renderHotDogs() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Chilli Cheese Hot Dogs</div>
//         <div class="course-description">
//           <p> These Keto Chili Cheese Dogs have everything you love about this classic, without the carbs! Easy, low carb, gluten free pigs in a blanket are smothered with keto chili and shredded cheddar cheese! </p>
//         </div>
//         <div class="course-price">$9.99 | 3.8 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderGuacamole() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Guacamole & Chips</div>
//         <div class="course-description">
//           <p> This Homemade Low Carb Keto Tortilla Chips Recipe will become your go-to tortilla chips recipe! It’s perfect when you’re craving crispy chips paired with salsa, guacamole, or queso. </p>
//         </div>
//         <div class="course-price">$8.99 | 2.6 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderBurgerBites() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Bacon Cheese Burger Bites</div>
//         <div class="course-description">
//           <p> Low carb, bunless burger bites, that come with letteuce, cheese, pickles, bacon, tomato, and a juicy ground beef patty.  </p>
//         </div>
//         <div class="course-price">$11.99 | 1 carb</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// //Burgers

// function renderPlainJane() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://kaseytrenum.com/wp-content/uploads/2020/05/keto-stuffed-burger.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">The Plain Jane</div>
//         <div class="course-description">
//     <p> Low carb, bunless burger, that comes topped with letteuce, red onion, pickles, tomato, and a juicy ground beef patty.  </p>
//         </div>
//         <div class="course-price">$11.99 | 1 carb</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderBigBoy() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">The Big Boy</div>
//         <div class="course-description">
//     <p> Low carb, bunless burger, that comes topped with letteuce, grilled onions, bacon, melted feta cheese, mushrooms, and TWO juicy ground beef patties.  </p>
//         </div>
//         <div class="course-price">$13.99 | 3 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// // renderBigBoy();

// function renderAllYouNeed() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">The All You Need</div>
//         <div class="course-description">
//     <p> Low carb, veggie bun burger, that comes topped with letteuce, onions, melted cheese, a special sauce, and a juicy ground beef patty.  </p>
//         </div>
//         <div class="course-price">$13.99 | 5 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderBurgerWraps() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/03/cheeseburger-wraps-500x500.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Cheese Burger Wraps</div>
//         <div class="course-description">
//     <p> These low carb, burrito style burger wraps are stuffed with juicy ground beef, crispy bacon, double cheese and all your favourite classic burger salad!  </p>
//         </div>
//         <div class="course-price">$8.99 | 4 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// // renderBurgerWraps();

// //Steak and Shrimp

// function renderSteakandGarlicShrimp() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.aymag.com/wp-content/uploads/2020/05/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Steak and Garlic Shrimp</div>
//         <div class="course-description">
//     <p> Our special garlic buttered shrimp served with TWO 12oz beef steaks cooked to perfection!  </p>
//         </div>
//         <div class="course-price">$22.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderSteakBroccoli() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.noshtastic.com/wp-content/uploads/2018/08/low-carb-beef-and-broccoli-sq-1-of-1.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Steak and Broccoli Skillet</div>
//         <div class="course-description">
//   <p>Tasty, thin, tender steak strips served over a bowl of steamed broccolli. </p>
//         </div>
//         <div class="course-price">$12.99 | 1 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderScampi() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.justataste.com/wp-content/uploads/2016/06/skinny-shrimp-scampi-photo.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Shrimp Scampi</div>
//         <div class="course-description">
//   <p>Tasty shrimp served on top of our tasty zucchini squash </p>
//         </div>
//         <div class="course-price">$13.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderSteakShrimpBowl() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://dadwithapan.com/wp-content/uploads/2017/08/Steak-Shrimp-Paleo-Bowl-1-656x875.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Shrimp and Steak Bowl with Veggies</div>
//         <div class="course-description">
//   <p>Jumbo Shrimp and Steak searved over a bed of steamed veggies, including broccoli, mushrooms, and peppers </p>
//         </div>
//         <div class="course-price">$18.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// //Wings

// function renderBuffalo() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.allchickenrecipes.com/wp-content/uploads/2019/12/keto-chicken-wings.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Buffalo Wings</div>
//         <div class="course-description">
//   <p>Classic buffalo wings, made with our special in house buffalo sauce </p>
//         </div>
//         <div class="course-price">$10.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderBBQ() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2021/06/Air-Fryer-BBQ-Chicken-Wings-2.jpg-V2-vertical-1200-800x1200.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">BBQ Wings</div>
//         <div class="course-description">
//   <p>BBQ wings, made with our special in house bbq sauce </p>
//         </div>
//         <div class="course-price">$10.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderLemonPepper() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://homemadehooplah.com/wp-content/uploads/2019/05/lemon-pepper-chicken-wings-1.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Lemon Pepper Wings</div>
//         <div class="course-description">
//   <p>Crispy wings, tossed in our special lemon pepper seasoning.  </p>
//         </div>
//         <div class="course-price">$10.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderParmesan() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://theketocookbook.com/wp-content/uploads/2018/05/wings-1040x1300.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Garlic Parmesan</div>
//         <div class="course-description">
//   <p>Garlic Parmesan wings, made with our special in house seasoning </p>
//         </div>
//         <div class="course-price">$10.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// //Salads
// function renderShrimpAvacadoSalad() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.eatwell101.com/wp-content/uploads/2018/01/shrimp-avocado-tomato-salad.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Shrimp Avacoda and Tomato Salad</div>
//         <div class="course-description">
//   <p>Here’s a healthy and delicious shrimp avocado salad recipe for two that tastes crazy good and is also paleo, Whole30, low-carb, and gluten-free. Loaded with the freshest ingredients: Avocados, cherry tomatoes, red onion, and cilantro tossed with freshly squeezed lime juice and a dash of olive oil.  </p>
//         </div>
//         <div class="course-price">$12.99 | 2 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderBLTSalad() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://simply-delicious-food.com/wp-content/uploads/2019/05/blt-chicken-salad-3.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">BLT Chicken Salad</div>
//         <div class="course-description">
//   <p>Juicy grilled chicken BLT salad is everything you want from a salad and more. Crispy bacon, creamy avocado and punchy lemon-herb dressing? Yes please!  </p>
//         </div>
//         <div class="course-price">$15.99 | 6 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderTacoSalad() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.saltandlavender.com/wp-content/uploads/2018/03/low-carb-taco-salad-recipe-1.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Taco Salad</div>
//         <div class="course-description">
//   <p>Our delicious taco salads comes with everything you need to fulfill that taco craving. Loaded with meat cheese, sour cream, tomato, lettuce and avacado. It's definitely a fiesta!  </p>
//         </div>
//         <div class="course-price">$15.99 | 10 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderAvacadoKaleSalad() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://cdn.shopify.com/s/files/1/2364/6329/articles/primalkitchen_blog_kalesalad_03_2048x.jpg?v=1570834892"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Avacado Kale Salad</div>
//         <div class="course-description">
//   <p>Delicious Kale drowned in our vinagrette avacado oil topped with cucumber, seasoned tender chicken strips, and avacado. </p>
//         </div>
//         <div class="course-price">$13.99 | 8 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// //Sides

// function renderFries() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://hip2keto.com/wp-content/uploads/sites/3/2019/10/Untitled-13.jpg?resize=1024%2C538&strip=all"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Jicama Fries</div>
//         <div class="course-description">
//   <p>Crispy Jicama Fries </p>
//         </div>
//         <div class="course-price">$3.99 | 11 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderMash() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://i.pinimg.com/originals/74/d4/dd/74d4dde19f0934d65c60da8a029f62a3.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Loaded Cauliflower Mashed</div>
//         <div class="course-description">
//   <p>Loaded Cauliflower Mashed, with cheese and bacon </p>
//         </div>
//         <div class="course-price">$3.99 | 7.4 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderMac() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/224521.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Cauliflower Mac n Cheese</div>
//         <div class="course-description">
//   <p>Cauliflower Mac n Cheese </p>
//         </div>
//         <div class="course-price">$3.98 | 6 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderGreenbeans() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://static.wixstatic.com/media/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg/v1/fill/w_1000,h_725,al_c,q_90,usm_0.66_1.00_0.01/fed9c0_af0731135594433d879ec1e744bd49ea~mv2.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Bacon Greenbeans</div>
//         <div class="course-description">
//   <p>Bacon Greenbeans </p>
//         </div>
//         <div class="course-price">$3.98 | 10 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// //Chacuterie

// function renderBreakfastCharcuterie() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.lowcarbnomad.com/wp-content/uploads/2020/09/Keto-Breakfast-Charcuterie-Board-21-500x500.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">Breakfast Charcuterie</div>
//         <div class="course-description">
//   <p>Enjoy this delicious breakfast charcuterie board, with berries, pancakes, bacons, eggs, avacado, and sausage.</p>
//         </div>
//         <div class="course-price">$19.98 | 21 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderTheFullfillment() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://thebigmansworld.com/wp-content/uploads/2021/07/keto-charcuterie-board-4-500x500.jpeg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">The Fullfillment</div>
//         <div class="course-description">
//   <p>Delicious board comes with everything you need, tomato, peperonni, cheese, nuts, chocolate and more.</p>
//         </div>
//         <div class="course-price">$17.99 | 21 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderTheKISS() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://www.lowcarbingasian.com/wp-content/uploads/2019/05/Keto-Charcuterie-Board-LowCarbingAsian-Cover.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">K.I.S.S</div>
//         <div class="course-description">
//   <p>THE KEEP IT SIMPLE... BOARD! Loaded with sasuage, roastbeef, cucumbers, berries, nuts, cheese, and more. </p>
//         </div>
//         <div class="course-price">$17.99 | 21 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }

// function renderTheBerryBoard() {
//   $(".course").empty();
//   $(".course-opts").empty();
//   let course = `
//   <div class="dinner">
//     <img src="https://media1.popsugar-assets.com/files/thumbor/gfEQPn5K5DZkzH4Mg7fDJ47o1Ns/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/12/17/057/n/1922729/0c0499a85fdbf632d9de26.45494820_/i/fruit-charcuterie-board-ideas.jpg"/>  
//       </div> 
  
//   `;
//   $(".course").append(course);

//   let mealDetails = `
//   <div class="course-info">
//         <div class="course-name">The Very Bery</div>
//         <div class="course-description">
//   <p>Fruit Filled Chacuterie Board, loaded with strawberries, blueberries, rasberries, melon and more.  </p>
//         </div>
//         <div class="course-price">$17.99 | 21 carbs</div>
//       </div>
  
//   `;
//   $(".course-opts").prepend(mealDetails);
// }


// $('#addtocart').onClick(function(){
// let itemPurchase = $(this).closest('.course-info')
// console.log(itemPurchase)
	
// let newItem = {
// productid: products.id,
// name: products.prod_name,
// description: products.prod_description,	
// vendorid: products.vendorid,
// vendor: products.vendorname,	
// quantity: 1,
// color: products.prod_color1 ? products.prod_color1 : 'One Color',
// size:  products.prod_size1 ? products.prod_size1 : 'One Size',
// image: products.prod_img1,
// price: products.prod_price,
// total: products.prod_price,
// }

// let myItems = JSON.parse(localStorage.getItem('MyItems'))		
// if(!myItems){
// myItems = [newItem]
// localStorage.setItem('MyItems', JSON.stringify(myItems))	
// }else if(myItems){
// myItems = [...myItems, newItem]
// localStorage.setItem('MyItems', JSON.stringify(myItems))
// console.log(myItems);	
// }

}

//Lunches

//Kids

//Desserts

//Deals

//Beverages
