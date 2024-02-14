// categories

 const categories = [
  {
    id: 1,
    name: "All Menu",
  },
  {
    id: 2,
    name: "Meals",
  },
  {
    id: 3,
    name: "Soups",
  },
  {
    id: 4,
    name: "Side Dish",
  },
];

// meals
 const meals = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Biryani',
    type: 'nonVeg',
    price: '300',

    image: '/meals/biryani'
    // description: 'A fragrant rice dish cooked with spices',
    // often with meat (chicken, lamb, or goat)', 
    // fish, eggs, or vegetables.',
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Butter Chicken (Murgh Makhani)",
    type: "nonVeg",
    price: "400",
    image: '/meals/butterChiken'
    // description:
    //   "Grilled chicken cooked in a creamy tomato-based sauce, typically flavored with butter and various spices.",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Tandoori Chicken",
    type: "nonVeg",
    price: "220",
    image: '/meals/tandooriChicken'
    // description:
    //   "Chicken marinated in yogurt and spices, cooked in a tandoor (clay oven), resulting in a smoky flavor and tender texture.",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Paneer Tikka",
    type: "veg",
    price: "120",
    image: '/meals/pannerTikka'
    // description:
    //   "Cubes of paneer (Indian cottage cheese) marinated in spices and grilled or baked.",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Dal Makhani",
    type: "veg",
    price: "150",
    image: '/meals/dalmakani'
    // description:
    //   "A rich and creamy lentil dish made from black lentils (urad dal) and kidney beans (rajma), cooked with butter, cream, and spices.",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Dosa",
    type: "veg",
    price: "90",
    image: '/meals/dosa'
    // description:
    //   "A thin, crispy pancake made from fermented rice and lentil batter, typically served with chutneys and sambar (a lentil-based stew).",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Tandoori Roti",
    type: "veg",
    price: "110",
    image: '/meals/roti'
    // description:
    //   "Whole wheat flatbread cooked in a tandoor oven, often served with various dishes.",
  },
  {
    id:"126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Chicken Tikka Masala",
    type: "nonVeg",
    price: "140",
    image: '/meals/chickenTikkaMasala'
    // description:
    //   "Grilled chicken pieces cooked in a creamy, tomato-based sauce with spices.",
  },
];

// // soup

 const soup = [
  {
    id: 1,
    name: "Mulligatawny Soup",
    type: "nonVeg",
    price: "100",
    description:
      "A hearty Anglo-Indian soup made with lentils, vegetables, and sometimes chicken, flavored with a blend of spices like curry powder, turmeric, and cumin.",
  },
  {
    id: 2,
    name: "Tomato Shorba",
    type: "veg",
    price: "80",
    description:
      "A tangy and spicy tomato-based soup flavored with Indian spices like cumin, coriander, and ginger, often garnished with fresh coriander leaves.",
  },
  {
    id: 3,
    name: "Rasam",
    type: "veg",
    price: "60",
    description:
      "A South Indian soup made with tamarind juice, tomatoes, and spices like mustard seeds, cumin, and curry leaves, known for its tangy and peppery flavor.",
  },
  {
    id: 4,
    name: "Sweet Corn Soup",
    type: "veg",
    price: "100",
    description:
      "A creamy and comforting soup made with sweet corn kernels, vegetables, and sometimes chicken, flavored with garlic, ginger, and soy sauce.",
  },
];

// soup
 const sideDish = [
  {
    id: 1,
    name: "Raita",
    type: "veg",
    price: "50",
    description:
      "A yogurt-based side dish mixed with finely chopped vegetables (such as cucumber, onion, or tomato) and flavored with spices like cumin, coriander, and mint",
  },
  {
    id: 2,
    name: "Papad",
    type: "veg",
    price: "10",
    description:
      "Thin, crispy Indian crackers made from lentil or chickpea flour, often seasoned with spices and served as an appetizer or alongside main dishes.",
  },
  {
    id: 3,
    name: "Pickle Tray (Achaar Thali):",
    type: "veg",
    price: "20",
    description:
      "A selection of various pickles and chutneys served together on a platter, offering a range of flavors and textures to complement the main dishes.",
  },
  {
    id: 4,
    name: "Bhaji",
    type: "veg",
    price: "20",
    description:
      "Stir-fried or sautéed vegetables seasoned with spices and sometimes mixed with gram flour (besan) to create a thick, flavorful side dish.",
  },
];


module.exports={
  meals,
  soup,
  sideDish
}