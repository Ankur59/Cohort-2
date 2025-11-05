let balance = 1000

function withdraw() {
    const amount = prompt("Enter Amount to withdraw")

    if (amount <= 0 || amount > balance) {
        alert("This amount cannot be withdrawn")
    }

    else {
        for (let i = 0; i < 2; i++) {
            const confirm = prompt("Confirm your amount")
            if (confirm !== amount) {
                alert("Amount Don't match")
                return
            }

        }
        const inNum = Number(amount)
        if (typeof amount === "number" && !isNaN(amount)) {
            balance = balance - inNum
            alert(`Withdrawal successfull for ${inNum} remaining balance ${balance}`)
        }
        else {
            alert(`Withdrawal failed Balance: ${balance}`)
        }


    }
}


document.addEventListener("keydown", (e) => {
    if (e.key === "w") {
        withdraw()
    }
    else {
        alert("Invalid operation")
    }
})