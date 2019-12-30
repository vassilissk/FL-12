let users = { 'user@gmail.com': 'UserPass', 'admin@gmail.com': 'AdminPass' }
const min_email_length = 5;
const min_new_pass_length = 6;
let email = prompt('Input your email');
let result = true;
if (email === null || email === '') {
    alert('Canceled.')
} else {
    for (let i = 0; i < email.length; i++) {
        if (email[i] !== ' ') {
            result = true;
            break;
        } else {
            result = false
        }
    } if (result === false) {
        alert('Canceled.')
    } else {
        if (email.length < min_email_length) {
            alert("I don't know any emails having name length less than 5 symbols")
        } else {

            if (!(email in users)) {
                alert('I don’t know you')
            }
        }
    }
}




let password = prompt('Input password');
if (password === null || password === '') {
    alert('Canceled.')
} else {
    for (let i = 0; i < password.length; i++) {
        if (password[i] !== ' ') {
            result = true;
            break;
        } else {
            result = false
        }
    } if (result === false) {
        alert('Canceled.')
    } else {
        if (password === users[email]) {
            alert('Ok')
        } else {
            alert('Wrong password')
        }
    }
}



let changepass = confirm('Do you want to change your password?')
if (!changepass) {
    alert('You have failed the change.')
} else {
    let old_pass = prompt('Enter an old password');
    if (old_pass === null || old_pass === '') {
        alert('Canceled.')
    } else {
        for (let i = 0; i < old_pass.length; i++) {
            if (old_pass[i] !== ' ') {
                result = true;
                break;
            } else {
                result = false
            }
        } if (result === false) {
            alert('Canceled.')
        } else {
            if (old_pass !== users[email]) {
                alert('Wrong password')
            } else {
                let new_pass = prompt('Enter a new password');
                if (new_pass === null || new_pass === '') {
                    alert('Canceled.')
                } else {
                    for (let i = 0; i < new_pass.length; i++) {
                        if (new_pass[i] !== ' ') {
                            result = true;
                            break;
                        } else {
                            result = false
                        }
                    } if (result === false) {
                        alert('Canceled.')
                    } else {
                        if (new_pass.length < min_new_pass_length) {
                            alert('It’s too short password. Sorry.')
                        } else {
                            let new_pass_confirm = prompt('Enter a new password again');
                            if (new_pass_confirm !== new_pass) {
                                alert('You wrote the wrong password.')
                            } else {
                                users[email] = new_pass;
                                alert('You have successfully changed your password.')
                            }
                        }
                    }
                }
            }
        }
    }
}
