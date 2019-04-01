var list1 = [{
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna',
        lastName: 'R.',
        country: 'Liechtenstein',
        continent: 'Europe',
        age: 52,
        language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona',
        lastName: 'R.',
        country: 'Paraguay',
        continent: 'Americas',
        age: 29,
        language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George',
        lastName: 'B.',
        country: 'England',
        continent: 'Europe',
        age: 81,
        language: 'C',
        meal: 'vegetarian'
    },
];



function orderFood(list) {
    let tabMeal = {};
    let vegetarian = 0;
    let vegan = 0;
    let standard = 0;
    let diabetic = 0;
    let gluten = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].meal === "vegetarian") {
            vegetarian += 1;
        } else if (list[i].meal === "vegan") {
            vegan += 1;
        } else if (list[i].meal === "standard") {
            standard += 1;
        } else if (list[i].meal === "diabetic") {
            diabetic += 1;
        } else if (list[i].meal === "gluten-intolerant") {
            gluten += 1;
        }
    }

    if (vegetarian > 0) {
        tabMeal.vegetarian = vegetarian;
    }
    if (standard > 0) {
        tabMeal.standard = standard;
    }
    if (vegan > 0) {
        tabMeal.vegan = vegan;
    }
    if (gluten > 0) {
        tabMeal['gluten-intolerant'] = gluten;
    }
    if (diabetic > 0) {
        tabMeal.diabetic = diabetic;
    }

    return tabMeal)
}

orderFood(list1)