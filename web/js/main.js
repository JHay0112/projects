/*
    Author: Jordan Hay
    Date: 26/03/2019
    File: css/styles.css

    Todo/Further Notes:
*/

// Function for responsive nav, adds styles via changing class name on triple slab button click, this allows the nav to be usable on mobile
function changeNav() {
    var nav = document.getElementById("nav"); // Finding nav item in HTML and assigning it to a variable

    if (nav.className === "nav") { 
        // If the class names found is only nav then add the mobile class
        nav.className += " mobile";
    } else { 
        // Otherwise set the classname to "nav"
        nav.className = "nav";
    }
}

// Show book info when user clicks on book
// Param: book, the key of the book in the books object
function loadBook(book) {

    // Books sub-array Layout:
    // Title
    // Description
    // Author
    // Publish Year
    // Publisher
    // ISBN
    // Price
    // IMG

    // Dictionary of books
    var books = {
        "pawnProph": [
            "Pawn of Prophecy (The Belgariad, Book 1)",
            "Long ago, the Storyteller claimed, in this first book of THE BELGARIAD, the evil god Torak drove men and Gods to war. But Belgarath the Sorcerer led men to reclaim the Orb that protected men of the West. So long as it lay at Riva, the prophecy went, men would be safe.",
            "David Eddings",
            "1982",
            "The Random House Publishing Group",
            "0-345-33551-1",
            "7.95",
            "pawn_prophecy"
        ],
        "walWolf": [
            "The Walrus and the Warwolf (Chronicles of an Age of Darkness: Volume 4)",
            "This clever books series joins all the stories together, viewing events from different characters perspectives. Begins as the story of a young man named Drake who is thrown into the sea by the allegedly merciful King Tor. It goes on to include Drake's vengeance upon the king and sundry other adventures (in company with appropriate others) on land, and sea.",
            "Hugh Cook",
            "1990",
            "Colin Smythe",
            "0-86140-294-4",
            "12.95",
            "walrus_warwolf"
        ],
        "bloodMantis": [
            "Blood of the Mantis: (Shadows of the Apt Book 3)",
            "Driven by the ghosts of the Darakyon, Achaeos has tracked the stolen Shadow Box to the marsh-town of Jerez, but he has only days before the magical box is lost to him forever. Meanwhile, the forces of the Empire are mustering over winter for their great offensive, gathering their soldiers and perfecting their new weapons. Stenwold and his followers have only a short time to gather what allies they can before the Wasp armies march again, conquering everything in their path. If they cannot throw back the Wasps this spring then the imperial black-and-gold flag will fly over every city in the Lowlands before the year's end. In Jerez begins a fierce struggle over the Shadow Box, as lake creatures, secret police and renegade magicians compete to take possession. If it falls into the hands of the Wasp Emperor, however, then no amount of fighting will suffice to save the world from his relentless ambition.",
            "Adrian Tchaikovsky",
            "2009",
            "Pan MacMillan",
            "0-230-70416-6",
            "28.95",
            "blood_mantis"
        ],
        "wayShadow": [
            "The Way of Shadows: (The Night Angel Trilogy 1)",
            "Determined to escape the Warrens, Azoth seeks out Durzo Blint, the city's most ruthless assassin, to persuade him to take him on as an apprentice and to teach him the deadly Way of Shadows, in the first volume in a new fantasy trilogy.",
            "Brent Weeks",
            "2008",
            "Orbit",
            "0-316-03367-7",
            "9.50",
            "way_shadows"
        ],
        "livingWild": [
            "Bear Grylls Living Wild",
            "The ultimate guide to scouting and fieldcraft - In this essential guide to living wild, Bear Grylls reveals the secrets of his years of fieldcraft experience.",
            "Bear Grylls",
            "2009",
            "Transworld",
            "978-1-905-02665-4",
            "14.99",
            "living_wild"
        ]
    }

    // Array of element IDs, these IDs refer to elements where the data from the dict will be added to
    var bookElements = [
        "book-title",
        "book-desc",
        "book-author",
        "publish-date",
        "book-publisher",
        "isbn",
        "price",
        "book-img"
    ]

    // Get selected book info array from book dict using key passed in function param
    var bookInfo = books[book];

    // Insert book info into respective elements
    // Note: Does not insert book image, as it requires a different system to insert it
    for (var i = 0; i < bookInfo.length - 1; i++) {
        try {
            document.getElementById(bookElements[i]).textContent = bookInfo[i];
        } catch(err) {
            alert("Information may be incorrect or incomplete as an error occured while getting the required information"); // Warning the user something may be displaying incorrectly
            console.log("Error while retrieving book info, Loop Iteration: \"" + i + "\", Error message: \"" + err + "\""); // Send expanded info to console
            break; // Stop loop, do not want to repeat error multiple times
        }
    }

    // Inserting book image
    var bookImage = bookInfo[bookInfo.length - 1]; // Asign book image to variable
    document.getElementById("book-img").src = "img/book_" + bookImage + ".jpg"; // Insert book image

    // Show book section and lock background
    document.getElementById("book-info").className = "visible"; // Set the book-info section to be visible
    document.getElementsByTagName('body')[0].className = "locked"; // Cutting off the overflow of the body element, stops two scrollbars showing up when accessing book info
}

// Exit out from the book info section
function hideBook() {
    document.getElementById("book-info").className = "invisible"; // Make book section invisible
    document.getElementsByTagName('body')[0].className = ""; // Unlock body
}

// Setting up particles on background using particles.js
// JSON file generated using https://vincentgarreau.com/particles.js/ 
// This code runs when the page loads
particlesJS.load('particles-js', 'js/particlesjs-config.json',
function() {
    console.log('particles.json loaded...'); // Log particles loaded
})