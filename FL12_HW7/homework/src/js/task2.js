let total_attempts = 3,
    guess_result, continue_game,
    two = 2, four = 4, eight = 8, one_hundred = 100;
let new_game = confirm('Do you want to play a game?')

let min_range = 0,
    max_range = eight,
    total_prize = 0,
    possible_prize = one_hundred;

if (!new_game) {
    alert('You did not become a billionaire, but can.')
} else {



    do {
        continue_game = false
        let number = parseInt(Math.round(Math.random() * max_range + min_range))
        console.log(number)
        console.log(max_range, possible_prize)

        for (let i = 0; i < total_attempts; i++) {
            let user_num = parseInt(prompt('Choose a roulette pocket number from ' + min_range + ' to ' +
                max_range + '\n' +
                'Attempts left: ' + (total_attempts - i) + '\n' + 'Total prize: ' + total_prize + '$\n' +
                'possible prize on current attempt: ' + possible_prize / Math.pow(two, i) + '$'))
            if (isNaN(user_num)) {
                alert('incorrect input'); break
            }
            if (user_num === number) {
                total_prize += possible_prize / Math.pow(two, i);
                guess_result = true;

                break
            } else {
                guess_result = false;
            }
        }
        if (!guess_result) {
            alert('Thank you for your participation. Your prize is: ' + total_prize + '$')
            new_game = confirm('Do you want to play again?'); 
            min_range = 0
            max_range = eight
            total_prize = 0
            possible_prize = one_hundred
            continue
        } else {
            continue_game = confirm('Thank you for your participation. Your prize is: ' + total_prize + '$\n' +
                'Do you want to continue?');
        }
        if (!continue_game) {
            alert('Thank you for your participation. Your prize is: ' + total_prize + '$')
            new_game = confirm('Do you want to play again?')
        } else {
            max_range += four
            possible_prize *= two
            continue
        }
        console.log(max_range, possible_prize)
        if (new_game) {
            min_range = 0
            max_range = eight
            total_prize = 0
            possible_prize = one_hundred
            continue
        } else {
            //alert('Thank you for your participation. Your prize is: ' + total_prize + '$')
            break
        }
    }
    while (continue_game || new_game)
    console.log(guess_result, continue_game, new_game)

}