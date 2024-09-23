
//   document.getElementById("blog").addEventListener("click", function() {
//     window.location.href = "./blog.html"; 
//   });

document.addEventListener("DOMContentLoaded", function() {


    // Blog button starts here

    const blogButton = document.getElementById("blog");
    if (blogButton) {
      blogButton.addEventListener("click", function() {
        window.location.href = "./blog.html";
      });
    }
  
    const homeButton = document.getElementById("home");
    if (homeButton) {
      homeButton.addEventListener("click", function() {
        window.location.href = "./index.html";
      });
    }
    // Blog button ends here

    // Page Header button starts here

    const donationButton = document.getElementById("donationBtninBlog");
    if (donationButton) {
      donationButton.addEventListener("click", function() {
        window.location.href = "./index.html";
      });
    }

    const historyButton = document.getElementById("historyBtninBlog");
    if (historyButton) {
      historyButton.addEventListener("click", function() {
        window.location.href = "./index.html";
      });
    }

  });

    // Page Header button ends here


// FAQ Toggler starts here
function toggle(id) {
    const answers = document.querySelectorAll('div[id^="answer"]');
    answers.forEach(answer => {
        if (answer.id !== id) {
            answer.classList.add('hidden');
        }
    });

    const answerToToggle = document.getElementById(id);
    answerToToggle.classList.toggle('hidden');
}

    // Faq Toggler ends here
