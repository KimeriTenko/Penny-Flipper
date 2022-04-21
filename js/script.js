//Track global variables
let headsFlips = 0
let tailsFlips = 0

//Listen for DOMContentLoaded to ensure that all HTML and resources have been loaded before attepting to run code

document.addEventListener('DOMContentLoaded', function () {
    //Add event listeners and handlers for both buttons
    document.getElementById('flip').addEventListener('click'), () => {
        //Calculate Probablities
        //Coin animation
        function toss() {
            const coin = document.getElementById('coinImage');
            coin.style.animation = "none";
            if (Math.random() <= 0.5) {
                coin.style.animation = "flip-heads 3s forwards";
            } else {
                coin.style.animation = "flip-tails 3s forwards";
            }
        }
        //Take different actions dependent on result
        if (flippedHeads) {
            //display image and message as heads
            document.getElementById('coinImage').src = 'assets/images/belizeCoinHeads.png';
            document.getElementById('message').textContent = "You Flipped Heads!";

            //Add count to tally
            headsFlips += 1;
        }
        else {
            //Display image and message as tails
            document.getElementById('coinImage').src = 'assets/images/belizeCoinTails.png';
            document.getElementById('message').textContent = "You Flipped Tails!";

            //Add count to tally
            tailsFlips += 1;
        }
        //Update the scoreboard
        //Calculate total number of rolls
        let total = headsFlips + tailsFlips;

        //Create variables to track percent heads and tails
        let percentHeads = 0;
        let percentTails = 0;

        //Before trying to divide, make sure the total is not zero
        if (total > 0) {
            //Calculate percentage of heads and tails
            percentsHeads = Math.round((headsFlips / total) * 100);
            percentTails = Math.round((tailsFlips / total) * 100);

        }
        //Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsFlips;
        document.getElementById('tails').textContent = tailsFlips;
        document.getElementById('heads-percent').textContent = percentHeads + '%';
        document.getElementById('tails-percent').textContent = percentTails + '%';

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
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsFlips
        document.getElementById('tails-percent').textContent = percentTails + '%'   
    })
})
