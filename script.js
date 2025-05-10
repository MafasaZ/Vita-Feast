const meals = [
  {
    id: 1,
    name: "Rainbow Quinoa Bowl",
    image: "https://static.wixstatic.com/media/1ff5f8_43e75ef0336e4d5ebcfbf4d28baa75ad~mv2.jpg/v1/fill/w_980,h_1224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1ff5f8_43e75ef0336e4d5ebcfbf4d28baa75ad~mv2.jpg",
    rating: 4.5,
    time: 20,
    price: 2.22,
    category: "Vegetarian / Gluten-Free / High-Fiber",
    description: "A colorful bowl of quinoa and roasted veggies bursting with nutrients and flavor."
  },
  {
    id: 2,
    name: "Lean Green Power Bowl",
    image: "https://th.bing.com/th/id/OIP.PCWioKuZufPmfotaPq048gHaE8?cb=iwc1&rs=1&pid=ImgDetMain",
    rating: 4.8,
    time: 15,
    price: 1.8,
    category: "Vegan / High-Protein / Clean Eating",
    description: "A detox-friendly mix of greens and plant protein for clean, energizing fuel."
  },
  {
    id: 3,
    name: "Avocado Bliss Wrap", // Fixed typo here
    image: "https://thriftyjinxy.com/wp-content/uploads/2013/07/avocado-wrap-with-cheees-lettuce-tomato-735x490.jpg",
    rating: 4.6,
    time: 25,
    price: 1.1,
    category: "Vegan / Heart-Healthy / On-the-Go",
    description: "A heart-healthy wrap packed with creamy avocado, crisp veggies, and hummus."
  },
  {
    id: 4,
    name: "Roasted Veggie Fuel Pasta",
    image: "https://th.bing.com/th/id/OIP.E1b05paMyrNxXRBZJjjtgQHaLI?cb=iwc1&rs=1&pid=ImgDetMain",
    rating: 4.6,
    time: 25,
    price: 2.1,
    category: "Vegetarian / High-Fiber / Energy-Boosting",
    description: "A hearty whole grain pasta tossed with roasted seasonal veggies and a light herb sauce for lasting energy."
  },
  {
    id: 5,
    name: "Green Goddess Pesto Pasta", // Fixed typo here
    image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/147286/images/3Qip43ZTLmJFpTlc7a28_green_goddess_pasta.jpg",
    rating: 4.6,
    time: 25,
    price: 1.8,
    category: "Vegetarian / Mediterranean / Comfort Healthy",
    description: "A wholesome pasta tossed in vibrant green pesto with roasted veggies and nuts."
  }
];

const searchInput = document.getElementById("searchInput");

if (searchInput) {
searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filteredMeals = meals.filter(meal =>
    meal.name.toLowerCase().includes(keyword) ||
    meal.category.toLowerCase().includes(keyword)
  );

  renderMealCards(filteredMeals);
});
}

function renderMealCards(data = meals) {
const mealList = document.getElementById("mealList");
if (!mealList) return;

mealList.innerHTML = '';
data.forEach(meal => {
  const card = document.createElement("div");
  card.className = "meal-card";
  card.innerHTML = `
    <img src="${meal.image}" alt="${meal.name}">
    <div class="meal-card-content">
      <h3>${meal.name}</h3>
      <p>⭐ ${meal.rating} | ${meal.category}</p>
      <p>🕒 ${meal.time} mins</p>
      <p>$${meal.price.toFixed(2)}</p>
      <a href="meal.html?id=${meal.id}">View</a>
    </div>
  `;
  mealList.appendChild(card);
});

const cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").innerText = cart.length;
}

renderMealCards();


  
  