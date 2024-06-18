let button = document.querySelector(".button");
button.addEventListener("click",checkRelation);

function checkRelation() {
    // Prompt for user's name
    let userInput = document.querySelector("#userName").value;
    let user = userInput.toLowerCase().trim();
    // Prompt for partner's name
    let partnerInput = document.querySelector("#partnerName").value;
    let partner = partnerInput.toLowerCase().trim();
    // Remove spaces from names
    let letters_user = user.replace(/\s/g, '').split('');
    let letters_partner = partner.replace(/\s/g, '').split('');

    // Create sets of unique letters
    let user_set = new Set(letters_user);
    let partner_set = new Set(letters_partner);

    // Find common letters
    let similar_letters = new Set([...user_set].filter(letter => partner_set.has(letter)));

    // Find dissimilar letters
    let dissimilar_user = new Set([...user_set].filter(letter => !similar_letters.has(letter)));
    let dissimilar_partner = new Set([...partner_set].filter(letter => !similar_letters.has(letter)));

    // Combine dissimilar letters
    let letters = new Set([...dissimilar_user, ...dissimilar_partner]);
    let number = letters.size;

    // Flames game logic
    let flames = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
    let index = 0;

    while (flames.length > 1) {
      index = (index + (number - 1)) % flames.length;
      flames.splice(index, 1);
    }

    // Output the result
    console.log("Relation: " + flames[0]);
    document.querySelector(".rightBlock").innerText = flames[0];
}


