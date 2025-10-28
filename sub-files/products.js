const products = [
  {
    title: "Pizza Margherita",
    description: "Classic Pizza with Mozzarella and tomato sauce",
    ingredients: ["Mozzarella", "Tomato Sauce", "Basil"],
    prices: {
      small: 6.99,
      medium: 8.99,
      large: 10.59,
    },
    category: "Pizza",
    id: 1,
  },
  {
    title: "Pizza Funghi",
    description:
      "Pizza with mozzarella, tomato sauce, basil, and extra mushrooms",
    ingredients: ["Mozzarella", "Tomato Sauce", "Basil", "Mushrooms"],
    prices: {
      small: 7.59,
      medium: 9.59,
      large: 10.99,
    },
    category: "Pizza",
    id: 2,
  },
  {
    title: "Pizza Regina",
    description:
      "Pizza with mozzarella, tomato sauce, basil, ham and extra mushrooms",
    ingredients: [
      "Mozzarella",
      "Tomato Sauce",
      "Basil",
      "Mushrooms",
      "Ham (Pig)",
    ],
    prices: {
      small: 7.99,
      medium: 9.99,
      large: 11.99,
    },
    category: "Pizza",
    id: 3,
  },
  {
    title: "Pizza Quattro Stagioni",
    description:
      "Four seasons pizza with a variety of ingredients on each quarter: ham, mushrooms, artichokes, and olives",
    ingredients: [
      "Mozzarella",
      "Tomato Sauce",
      "Ham",
      "Mushrooms",
      "Artichokes",
      "Olives",
    ],
    prices: {
      small: 8.99,
      medium: 10.99,
      large: 12.99,
    },
    category: "Pizza",
    id: 4,
  },
  {
    title: "Pizza Diavola",
    description: "Spicy pizza with salami, mozzarella, and chili peppers",
    ingredients: ["Mozzarella", "Tomato Sauce", "Salami", "Chili Peppers"],
    prices: {
      small: 7.99,
      medium: 9.99,
      large: 11.49,
    },
    category: "Pizza",
    id: 5,
  },
  {
    title: "Pizza Capricciosa",
    description:
      "A pizza topped with ham, mushrooms, olives, artichokes, and a boiled egg",
    ingredients: [
      "Mozzarella",
      "Tomato Sauce",
      "Ham",
      "Mushrooms",
      "Olives",
      "Artichokes",
      "Boiled Egg",
    ],
    prices: {
      small: 8.49,
      medium: 10.49,
      large: 12.49,
    },
    category: "Pizza",
    id: 6,
  },
  {
    title: "Pizza Vegetariana",
    description:
      "A fresh pizza with a variety of grilled vegetables, including bell peppers, zucchini, and eggplant",
    ingredients: [
      "Mozzarella",
      "Tomato Sauce",
      "Bell Peppers",
      "Zucchini",
      "Eggplant",
      "Olives",
      "Basil",
    ],
    prices: {
      small: 7.49,
      medium: 9.49,
      large: 11.49,
    },
    category: "Pizza",
    id: 7,
  },
  {
    title: "Pizza Hawaiian",
    description: "Pizza with mozzarella, tomato sauce, ham, and pineapple",
    ingredients: ["Mozzarella", "Tomato Sauce", "Ham", "Pineapple"],
    prices: {
      small: 7.99,
      medium: 9.59,
      large: 11.19,
    },
    category: "Pizza",
    id: 8,
  },
  {
    title: "Pizza Prosciutto e Rucola",
    description: "Delicate Parma ham on a bed of mozzarella and arugula",
    ingredients: [
      "Mozzarella",
      "Tomato Sauce",
      "Parma Ham",
      "Arugula",
      "Parmesan",
    ],
    prices: {
      small: 8.49,
      medium: 10.49,
      large: 12.49,
    },
    category: "Pizza",
    id: 9,
  },
  {
    title: "Pizza BBQ Chicken",
    description:
      "Tangy BBQ sauce with grilled chicken, red onions, and mozzarella",
    ingredients: [
      "Mozzarella",
      "BBQ Sauce",
      "Grilled Chicken",
      "Red Onions",
      "Cilantro",
    ],
    prices: {
      small: 8.99,
      medium: 10.99,
      large: 13.49,
    },
    category: "Pizza",
    id: 10,
  },
  {
    title: "Pizza Quattro Formaggi",
    description:
      "A rich blend of four cheeses: mozzarella, gorgonzola, parmesan, and ricotta",
    ingredients: ["Mozzarella", "Gorgonzola", "Parmesan", "Ricotta"],
    prices: {
      small: 8.59,
      medium: 10.59,
      large: 12.99,
    },
    category: "Pizza",
    id: 11,
  },
  {
    title: "Pizza Napoletana",
    description:
      "Traditional Neapolitan pizza with anchovies, capers, and olives",
    ingredients: [
      "Mozzarella",
      "Tomato Sauce",
      "Anchovies",
      "Capers",
      "Olives",
      "Oregano",
    ],
    prices: {
      small: 7.99,
      medium: 9.99,
      large: 11.99,
    },
    category: "Pizza",
    id: 12,
  },
  {
    title: "Pizza Truffle Delight",
    description: "Gourmet pizza with truffle oil, mushrooms, and creamy cheese",
    ingredients: [
      "Mozzarella",
      "Truffle Oil",
      "Mushrooms",
      "Fontina",
      "Parmesan",
    ],
    prices: {
      small: 9.49,
      medium: 11.49,
      large: 13.99,
    },
    category: "Pizza",
    id: 13,
  },
  {
    title: "Pizza Mediterranean",
    description:
      "A fresh mix of Mediterranean flavors with mozzarella, feta, sun-dried tomatoes, olives, and spinach.",
    ingredients: [
      "Mozzarella",
      "feta cheese",
      "sun-dried tomatoes",
      "black olives",
      "baby spinach",
      "red onions",
      "olive oil",
      "tomato sauce",
      "oregano",
    ],
    prices: {
      small: 8.99,
      medium: 10.99,
      large: 12.79,
    },
    category: "Pizza",
    id: 14,
  },
  {
    title: "Classic Beef Lasagna",
    description:
      "Traditional lasagna with layers of pasta, seasoned beef, rich tomato sauce, and creamy béchamel",
    ingredients: [
      "Pasta Sheets",
      "Ground Beef",
      "Tomato Sauce",
      "Béchamel Sauce",
      "Mozzarella",
      "Parmesan",
    ],
    prices: {
      regular: 9.99,
      large: 12.99,
    },
    category: "Pasta & Lasagna",
    id: 15,
  },
  {
    title: "Vegetarian Lasagna",
    description:
      "A hearty lasagna layered with grilled vegetables, ricotta, tomato sauce, and mozzarella",
    ingredients: [
      "Pasta Sheets",
      "Zucchini",
      "Eggplant",
      "Bell Peppers",
      "Tomato Sauce",
      "Ricotta",
      "Mozzarella",
    ],
    prices: {
      regular: 9.49,
      large: 12.49,
    },
    category: "Pasta & Lasagna",
    id: 16,
  },
  {
    title: "Spaghetti Bolognese",
    description:
      "Classic Italian pasta with a rich ground beef and tomato sauce",
    ingredients: [
      "Spaghetti",
      "Ground Beef",
      "Tomato Sauce",
      "Onion",
      "Garlic",
      "Parmesan",
    ],
    prices: {
      regular: 8.99,
      large: 11.99,
    },
    category: "Pasta & Lasagna",
    id: 17,
  },
  {
    title: "Penne Arrabbiata",
    description:
      "Spicy tomato sauce with garlic and chili, served over penne pasta",
    ingredients: [
      "Penne",
      "Tomato Sauce",
      "Garlic",
      "Chili Flakes",
      "Olive Oil",
      "Parsley",
    ],
    prices: {
      regular: 7.99,
      large: 10.99,
    },
    category: "Pasta & Lasagna",
    id: 18,
  },
  {
    title: "Fettuccine Alfredo",
    description:
      "Creamy Alfredo sauce with fettuccine pasta and parmesan cheese",
    ingredients: ["Fettuccine", "Butter", "Cream", "Parmesan", "Black Pepper"],
    prices: {
      regular: 9.49,
      large: 12.49,
    },
    category: "Pasta & Lasagna",
    id: 19,
  },
  {
    title: "Pasta Carbonara",
    description: "Creamy carbonara with pancetta, eggs, and parmesan",
    ingredients: ["Spaghetti", "Pancetta", "Eggs", "Parmesan", "Black Pepper"],
    prices: {
      regular: 9.99,
      large: 12.99,
    },
    category: "Pasta & Lasagna",
    id: 20,
  },
  {
    title: "Pesto Linguine",
    description: "Fresh basil pesto tossed with linguine and parmesan",
    ingredients: [
      "Linguine",
      "Basil Pesto",
      "Parmesan",
      "Olive Oil",
      "Pine Nuts",
    ],
    prices: {
      regular: 8.49,
      large: 11.49,
    },
    category: "Pasta & Lasagna",
    id: 21,
  },
  {
    title: "Seafood Linguine",
    description:
      "Linguine with shrimp, mussels, and calamari in a light tomato sauce",
    ingredients: [
      "Linguine",
      "Shrimp",
      "Mussels",
      "Calamari",
      "Tomato Sauce",
      "Garlic",
      "Parsley",
    ],
    prices: {
      regular: 10.99,
      large: 13.99,
    },
    category: "Pasta & Lasagna",
    id: 22,
  },
  {
    title: "Mac & Cheese",
    description: "Creamy macaroni and cheese baked to golden perfection",
    ingredients: ["Macaroni", "Cheddar", "Milk", "Butter", "Breadcrumbs"],
    prices: {
      regular: 7.49,
      large: 9.99,
    },
    category: "Pasta & Lasagna",
    id: 23,
  },
  {
    title: "Spinach & Ricotta Ravioli",
    description:
      "Stuffed ravioli with spinach and ricotta in a creamy tomato sauce",
    ingredients: [
      "Ravioli",
      "Spinach",
      "Ricotta",
      "Tomato Cream Sauce",
      "Parmesan",
    ],
    prices: {
      regular: 9.49,
      large: 12.49,
    },
    category: "Pasta & Lasagna",
    id: 24,
  },
  {
    title: "Garlic Bread",
    description:
      "Cheesy Golden-baked baguette slices brushed with garlic butter, parsley, and a touch of olive oil.",
    ingredients: ["Dough", "Parsley", "Garlic", "Mozzarella"],
    prices: {
      regular: 4.99,
    },
    category: "Sides",
    id: 25,
  },
  {
    title: "Mozzarella Sticks",
    description:
      "Cheesy Golden-baked baguette slices brushed with garlic butter, parsley, and a touch of olive oil.",
    ingredients: ["Mozzarella", "Breadcrumbs", "Seasoning", "Marinara Sauce"],
    prices: {
      regular: 5.49,
    },
    category: "Sides",
    id: 26,
  },
  {
    title: "Fries",
    description: "Classic golden fries, perfectly crisp and lightly salted.",
    ingredients: ["Potatoes"],
    prices: {
      regular: 3.99,
    },
    category: "Sides",
    id: 27,
  },
  {
    title: "Sweet Potato Fries",
    description: "Sweet and crispy fries with a touch of sea salt and paprika.",
    ingredients: ["Sweet Potatoes", "Paprika"],
    prices: {
      regular: 4.49,
    },
    category: "Sides",
    id: 28,
  },
  {
    title: "Brushetta",
    description:
      "Toasted bread topped with a fresh mix of tomato, basil, and garlic.",
    ingredients: ["Italian bread", "Tomatoes", "Basil", "Garlic"],
    prices: {
      regular: 4.49,
    },
    category: "Sides",
    id: 29,
  },
  {
    title: "Cappuccino",
    description:
      "A rich espresso topped with steamed milk and a layer of velvety foam.",
    ingredients: ["Espresso", "Milk"],
    prices: { small: 3.49, medium: 3.99, large: 4.49 },
    category: "Warm-Drinks",
    id: 30,
  },
  {
    title: "Latte",
    description:
      "Smooth espresso blended with creamy steamed milk and a light foam top.",
    ingredients: ["Espresso", "Milk"],
    prices: { small: 3.79, medium: 4.29, large: 4.79 },
    category: "Warm-Drinks",
    id: 31,
  },
  {
    title: "Hot Chocolate",
    description:
      "Rich and creamy hot cocoa topped with whipped cream and a dusting of cocoa powder.",
    ingredients: ["Milk", "Cocoa Powder", "Sugar", "Whipped Cream"],
    prices: { small: 3.29, medium: 3.79, large: 4.29 },
    category: "Warm-Drinks",
    id: 32,
  },
  {
    title: "Americano",
    description:
      "A smooth espresso diluted with hot water for a rich, full-bodied flavor.",
    ingredients: ["Espresso", "Hot Water"],
    prices: { small: 2.79, medium: 3.29, large: 3.79 },
    category: "Warm-Drinks",
    id: 33,
  },
  {
    title: "Espresso",
    description:
      "A strong, concentrated shot of pure coffee flavor for a quick energy boost.",
    ingredients: ["Espresso"],
    prices: { regular: 2.19, large: 2.69 },
    category: "Warm-Drinks",
    id: 34,
  },
  {
    title: "Chai Latte",
    description:
      "A spiced tea blend with steamed milk and a touch of sweetness.",
    ingredients: ["Black tea", "Spices", "Milk", "Sugar"],
    prices: { small: 3.59, medium: 4.09, large: 4.59 },
    category: "Warm-Drinks",
    id: 35,
  },
  {
    title: "Coke",
    description: "Classic Coca-Cola fizzy softdrink",
    ingredients: [],
    prices: { small: 2.89, medium: 3.69, large: 4.29 },
    category: "Cold-Drinks",
    id: 36
  },
  {
    title: "Fanta",
    description: "Classic Orange flavoured fizzy softdrink",
    ingredients: [],
    prices: { small: 2.59, medium: 3.49, large: 3.99 },
    category: "Cold-Drinks",
    id: 37
  },
  {
    title: "Coke Zero",
    description: "Classic Coca-Cola fizzy softdrink without Sugar",
    ingredients: [],
    prices: { small: 2.99, medium: 3.79, large: 4.29 },
    category: "Cold-Drinks",
    id: 38
  },
  {
    title: "Still Water",
    description: "Refreshing water straight from the springs",
    ingredients: [],
    prices: { regular: 5.29 },
    category: "Cold-Drinks",
    id: 39
  }
];

export default products;
