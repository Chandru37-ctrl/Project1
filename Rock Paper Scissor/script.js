let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");
let choice_object = {
    "rock": { "rock": "tie", "paper": "lose", "scissor": "win" },
    "paper": { "rock": "win", "paper": "tie", "scissor": "lose" },
    "scissor": { "rock": "lose", "paper": "win", "scissor": "tie" }
};

function checker(input){
    var choice = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() * 3);
    var computer_choice = choice[num];
    document.getElementById("comp_choice").innerHTML = `Computer choice: <span>${computer_choice.toUpperCase()}</span>`;
    document.getElementById("user_choice").innerHTML = `Your choice: <span>${input.toUpperCase()}</span>`;
    
    switch (choice_object[input][computer_choice]) {
        case "win":
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38;";
            result_ref.innerHTML = "You Win!";
            user_score += 1;
            break;
        case "lose":
            result_ref.style.cssText = "background-color: #ffcccc; color: #d32f2f;";
            result_ref.innerHTML = "You Lose!";
            computer_score += 1;
            break;
        case "tie":
            result_ref.style.cssText = "background-color: #fff3e0; color: #f57c00;";
            result_ref.innerHTML = "It's a Tie!";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}

document.querySelectorAll('.weapons button').forEach(button => {
    button.addEventListener('click', () => {
        checker(button.dataset.choice);
    });
});