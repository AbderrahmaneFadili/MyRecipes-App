//get categories
const categoriesUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const addCategoriesImages = (categories) => {
  return categories.map((c) => {
    switch (c.strCategory) {
      case "Beef":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
        };
      case "Breakfast":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        };
      case "Chicken":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80",
        };
      case "Dessert":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1506095619733-3c3ea98fb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        };
      case "Goat":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1600713482093-125089e947ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        };
      case "Lamb":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1502038683567-85dc225345c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
        };
      case "Miscellaneous":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        };
      case "Pasta":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        };
      case "Pork":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1592501163544-adeb63c1855f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        };
      case "Seafood":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1541058718861-4eea8bb410c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        };
      case "Side":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1598679253597-adfd54b86fba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        };
      case "Starter":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        };
      case "Vegan":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
        };
      case "Vegetarian":
        return {
          category: c.strCategory,
          imageUrl:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        };
    }
  });
};

//get categories
const get_categories = async () => {
  try {
    const { meals } = await fetch(categoriesUrl)
      .then((r) => r.json())
      .then((data) => data);

    return addCategoriesImages(meals);
  } catch (error) {
    return error;
  }
};

//get recipes by category
const get_recipes_by_category = async (category) => {
  try {
    const { meals } = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    )
      .then((r) => r.json())
      .then((data) => data);
    return meals;
  } catch (error) {
    return error;
  }
};

//get recipe by id
const get_recipe_by_id = async (id) => {
  try {
    const { meals } = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((r) => r.json())
      .then((data) => data);

    const [meal] = meals;
    return meal;
  } catch (error) {
    return error;
  }
};

//get  recipes by ingredient
const get_recipes_by_ingredient = async (ingredient) => {
  try {
    const { meals } = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    )
      .then((r) => r.json())
      .then((data) => data);

    return meals;
  } catch (error) {
    return error;
  }
};

//get recipes by name
const get_recipes_by_recipeName = async (recipeName) => {
  try {
    const { meals } = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
    )
      .then((r) => r.json())
      .then((data) => data);

    return meals;
  } catch (error) {
    return error;
  }
};

export {
  get_categories,
  get_recipes_by_ingredient,
  get_recipes_by_category,
  get_recipe_by_id,
  get_recipes_by_recipeName,
};
