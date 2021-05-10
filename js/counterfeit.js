//buttons
let printerBtn = document.getElementById("printMoney")
let buyBtn = document.getElementById("buy")

//accountTotals
let wallet = document.getElementById("wallet")

let bank = {
    "wallet": 5000,
    "bankAcct": 0,
    "offshore": 0,
    "businessEarnings": {
        "counterfeit": 0,
        "nightclub": 0,
        "drugLord": 0
    }
}

function loadBank() {
    wallet.innerHTML = `$${bank.wallet}`
}

loadBank()

buyBtn.addEventListener("click", e => {
    bank.wallet -= 250
    loadBank()
    console.log(bank.wallet)

})

printerBtn.addEventListener("click", e => {
    let businessEarnings = bank.businessEarnings 
    
    businessEarnings.counterfeit++
    document.getElementById("cfMoney").innerHTML = `$${businessEarnings.counterfeit}`;
    console.log(businessEarnings.counterfeit)
})
