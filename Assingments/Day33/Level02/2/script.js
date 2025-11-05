let count = 0
while (true) {
    const word = prompt("Enter any word")
    if (word === "stop" || word === "Stop") {
        break
    }
    if (word === "yes") {
        count += 1
    }
}

alert(`Number of time you typed yes is ${count}`)