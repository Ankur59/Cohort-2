const password = 1234
const totalAttempt = 3
let message = ""

for (let attempts = 0; attempts < totalAttempt; attempts++) {
    const guess = Number(prompt("Enter a password"))
    console.log(guess)
    if (guess === password) {
        message = "Welcome back"
        break
    }
    else if (guess !== password) {

        alert(
            `Wrong password ${t~otalAttempt - attempts - 1} attempt left`
        )
    }

}

if (message !== "Welcome back") {
    message = "Account blocked"
}

alert(message)