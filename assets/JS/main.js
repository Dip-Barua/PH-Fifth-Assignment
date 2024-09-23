document.addEventListener("DOMContentLoaded", function() {

//Page Header Toggling Button starts here

    const historyBtn = document.getElementById('historyBtn');
    const donationBtn = document.getElementById('donationBtn');
    const donationSection = document.getElementById('donation');
    const historySection = document.getElementById('history');

    historyBtn.addEventListener('click', function() {
        if (historySection.classList.contains('hidden')) {
            donationSection.classList.add('hidden');
            historySection.classList.remove('hidden');
            historyBtn.classList.add('bg-primary');
            donationBtn.classList.remove('bg-primary');
            donationBtn.classList.add('border-2');
        }
    });

    donationBtn.addEventListener('click', function() {
        if (donationSection.classList.contains('hidden')) {
            historySection.classList.add('hidden');
            donationSection.classList.remove('hidden');
            donationBtn.classList.add('bg-primary');
            historyBtn.classList.remove('bg-primary');
            donationBtn.classList.remove('border-2');
        }
    });
    
});

//Page Header Toggling Button Ends here
