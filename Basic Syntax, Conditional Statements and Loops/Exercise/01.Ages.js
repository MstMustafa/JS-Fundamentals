function determineAgeCategory(age) {
    let category;

    switch (true) {
        case age >= 0 && age <= 2:
            category = "baby";
            break;
        case age >= 3 && age <= 13:
            category = "child";
            break;
        case age >= 14 && age <= 19:
            category = "teenager";
            break;
        case age >= 20 && age <= 65:
            category = "adult";
            break;
        case age >= 66:
            category = "elder";
            break;
        default:
            category = "out of bounds";
            break;
    }

    console.log(category);
}
