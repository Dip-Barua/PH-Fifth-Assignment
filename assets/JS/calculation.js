// Checkin if the donation input is valid
function isValidDonation(amount, balance) {
    return amount > 0 && balance >= amount;
}


// using regx to approve numbers only 
function getAmount(inputId) {
    const inputValue = document.getElementById(inputId).value;
    const match = inputValue.match(/^(\d+)(\.\d+)?$/); 
    return match ? parseFloat(match[0]) : NaN;
}




// Re-usable functions starts here

// the calculation part from here
function handleDonation(inputId, event, spanId) {
    const donationAmount = getAmount(inputId);
    const balanceElement = document.getElementById('currentBalance');
    let balance = parseInt(balanceElement.innerText);


      // Check if the input is a valid number before processing
      if (isNaN(donationAmount)) {
        alert('Please enter a valid donation amount (numbers only)!');
        return;
    }

    if (isValidDonation(donationAmount, balance)) {
        balance -= donationAmount;
        balanceElement.innerText = balance;

        previousCollection(spanId, donationAmount);

        updateHistory(event, donationAmount);
        clearInput(inputId);
        document.getElementById('my_modal_4').showModal();
    } else {
        alert('Invalid Donation or Insufficient Balance');
    }
}



function previousCollection(spanId, donationAmount) {
    const spanElement = document.querySelector(`#${spanId}`);
    const currentAmount = parseInt(spanElement.innerText);
    spanElement.innerText = currentAmount + donationAmount;
}




// Re-usable funtion for donation process starts here
// donation for Nowakhali

document.getElementById('donation1').onclick = function() {
    handleDonation('donationForNoakhali', 'Flood at Noakhali', 'balance1');
};



// donatoion for Feni


document.getElementById('donation2').onclick = function() {
    handleDonation('donationForFeni', 'Flood Relief in Feni', 'balance2');
};


// Aid For Injured

document.getElementById('donation3').onclick = function() {
    handleDonation('aidForInjured', 'Aid for Quota Injured', 'balance3');
};






// Clear inputfield after any submission

function clearInput(inputId) {
    document.getElementById(inputId).value = '';
}







// Add donation history to history section
function updateHistory(event, amount) {
    const historyDiv = document.getElementById('history');
    const historyEntry = document.createElement('div');
    historyEntry.className = 'border-2 p-5 rounded-xl mt-4 space-y-4';
    historyEntry.innerHTML = `<h1 class="text-2xl bold">${amount} BDT Donated for ${event}</h1>
                              <p class="text-md bold">Date: ${new Date().toLocaleString()}</p>`;
    historyDiv.appendChild(historyEntry);
}
