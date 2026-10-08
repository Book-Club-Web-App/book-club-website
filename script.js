function goToJoin() {
    document.getElementById("join").scrollIntoView({
        behavior: "smooth"
    });
}

function goToBookshelf() {
    document.getElementById("bookshelf").scrollIntoView({
        behavior: "smooth"
    });
}

function filterBooks(category) {

    let books = document.querySelectorAll(".book-card");

    books.forEach(function(book) {

        if (category === "all") {
            book.style.display = "block";
        }

        else if (book.classList.contains(category)) {
            book.style.display = "block";
        }

        else {
            book.style.display = "none";
        }

    });
}


let savedBooks = 0;

function saveBook(button) {

    if (button.innerText === "♡ Save") {

        button.innerText = "♥ Saved";

        savedBooks++;

    } else {

        button.innerText = "♡ Save";

        savedBooks--;

    }

    document.getElementById("savedCount").innerText =
        "Your reading list: " + savedBooks + " saved";
}


let completedChapters = 0;

function completeChapter(chapter) {

    completedChapters = chapter;

    let percentage = (completedChapters / 5) * 100;

    document.getElementById("progress").style.width =
        percentage + "%";

    document.getElementById("progressText").innerText =
        percentage + "% complete";
}

function searchBooks() {

    let searchText = document.getElementById("searchBox").value.toLowerCase();

    let books = document.querySelectorAll(".book-card");

    books.forEach(function(book) {

        let bookText = book.innerText.toLowerCase();

        if (bookText.includes(searchText)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });
}


function rsvp() {

    alert("✓ RSVP confirmed! See you at the meeting 📚");

}


function createAccount(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;


    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (password === "") {

        alert("Please enter a password.");

        return;
    }


    alert("Welcome to Page Turners, " + name + "! 📚");

}

let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});