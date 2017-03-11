var falafels = prompt("How Many Falafels do we have?");

var playLottery = function() {




    while (falafels > 0) {

        var numberOfCandidates = 4;


        // generate a random number between 1 and nr of candidates.
        var randomNumber = Math.floor(Math.random() * numberOfCandidates + 1);

        var chosenStudent;

        if (randomNumber == 1) {
            chosenStudent = student1;
        } else if (randomNumber == 2) {
            chosenStudent = student2;
        } else if (randomNumber == 3) {
            chosenStudent = student3;
        } else {
            chosenStudent = student4;
        }

        falafels--;

        var message = chosenStudent + " gets a Falafel. Yummieh! There are " + falafels + " left";
        document.getElementById("lotteryResult").innerHTML += "<br>" + message;
    }





}
