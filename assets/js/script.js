//Global Variables Needed
let headsFlips = 0
let tailsFlips = 0

//Listen for DOMContentLoaded to ensure that all HTML and resources have been loaded before attepting to run code

document.addEventListener('DOMContentLoaded', function () {
    //Add event listeners and handlers for both buttons
    document.getElementById('flip').addEventListener('click'), () => {
        //Calculate Probablities
        let flippedHeads = Math.random() < 0.5
        //Take different actions dependent on result
        if (flippedHeads) {
            //display image and message as heads
            document.getElementById('coinImage').src = 'assets/images/belizeCoinHeads.png'
            document.getElementById('message').textContent = "You Flipped Heads!"

            //Add count to tally
            headsFlips += 1
        }
        else {
            //Display image and message as tails
            document.getElementById('coinImage').src = 'assets/images/belizeCoinTails.png'
            document.getElementById('message').textContent = "You Flipped Tails!"

            //Add count to tally
            tailsFlips += 1
        }
        //Update the scoreboard
            //Calculate total number of rolls
            let total = headsFlips + tailsFlips

            //Create variables to track percent heads and tails
            let percentHeads = 0
            let percentTails = 0

            //Befgore trying to divide, make sure the total is not zero
            if (total > 0) {
                //Calculate percentage of heads and tails
                percentsHeads = Math.round((headsFlips / total) * 100)
                percentTails =  Math.round((tailsFlips / total) * 100)

            }
            //Update the values in the scoreboard table
            document.getElementById('heads').textContent = headsFlips
            document.getElementById('tails').textContent = tailsFlips
            document.getElementById('heads-percent').textContent = percentHeads + '%'
            document.getElementById('tails-percent').textContent = percentTails + '%'

    };

    document.getElementById('clear').addEventListener('click', function() {
        //Reset the heads and tails value to zero
        headsFlips = 0
        tailsFlips = 0

        //Update the message to the user
        document.getElementById('message').textContent = "Let's Get Started!"

        //Update the scoreboard

            //Calculate total number of rolls
            let total = headsFlips + tailsFlips

        //Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        //Befgore trying to divide, make sure the total is not zero
        if (total > 0) {
            //Calculate percentage of heads and tails
            percentsHeads = Math.round((headsFlips / total) * 100)
            percentTails =  Math.round((tailsFlips / total) * 100)

        }
        //Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsFlips
        document.getElementById('tails').textContent = tailsFlips
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails-percent').textContent = percentTails + '%'   
    })


    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
