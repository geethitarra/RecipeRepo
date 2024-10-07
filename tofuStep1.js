const videoArray = [
    {
        title: "Cut into medium thick discs",
        src: "cucumbercut.mov",
    },
    {
        title: "Chop all cucumbers",
        src: "cucumbercutspedup.mov",
    },
    {
        title: "Sprinkle salt, distribute evenly",
        src: "cucSalt.mov",
    },
    {
        title: "Refridgerate your salted cucumbers for 30 mins using the below timer",
        src: "fridge.mov",
    },
    {
        title: "Wash the salt off the cucumber slices",
        src: "rinseCuc.mov",
    },
    {
        title: "Prepare the marinade",
        src: "sauceCuc.mov",
    },
    {
        title: "Add cucumber to your marination mix",
        src: "marinateCuc.mov",
    },
    {
        title: "Plate and enjoy!",
        src: "end.mov",
    },
    {
        title: "Slice your tofu into thick vertical slabs",
        src: "tofucut.mov",
    },
    {
        title: "Chop bell peppers into medium sized squares",
        src: "bellCut.mov",
    },
    {
        title: "Finely chop green onions",
        src: "chiveCut.mov",
    },
    {
        title: "Create a marinade using all your wet ingredients",
        src: "tofuSeason.mov",
    },
    {
        title: "Add in your rice flour",
        src: "riceFlour.mov",
    },
    {
        title: "Marinate your mixture and set it aside for three hours",
        src: "marinateTofu.mov",
    },
    {
        title: "Oil your frying pan and set to medium/high heat",
        src: "pan.mov",
    },
    {
        title: "Saute for 10 minutes, flipping once halfway. Use the timer below",
        src: "saute.mov",
    },
    {
        title: "Plate your dish and enjoy!",
        src: "finalTofu.mov",
    },
    {
        title: "Dice tomatoes",
        src: "tomatoCut.mov",
    },
    {
        title: "Dice onion",
        src: "onionCut.mov",
    },
    {
        title: "Dice jalapeño",
        src: "jalapenoCut.mov",
    },
    {
        title: "Chop cilantro bunch",
        src: "cilantroCut.mov",
    },
    {
        title: "Transfer all chopped ingredients into a bowl",
        src: "transfer.mov",
    },
    {
        title: "Add salt and pepper",
        src: "season.mov",
    },
    {
        title: "Mix the salsa together",
        src: "mixSalsa.mov",
    },
    {
        title: "Cut the tortilla into triangles",
        src: "tortillaCut.mov",
    },
    {
        title: "Drop the tortilla triangles into a hot oil",
        src: "tortillaFry.mov",
    },
    {
        title: "Let the chips fry in the oil",
        src: "simmer.mov",
    },
    {
        title: "Remove the chips from the frying pan",
        src: "removeChips.mov",
    },
    {
        title: "Plate and enjoy!",
        src: "plateSalsa.mov",
    },
    {
        title: "Peel and mash bananas",
        src: "bananaMash.mov",
    },
    {
        title: "Add in sugar",
        src: "sugarAdd.mov",
    },
    {
        title: "Add in an egg",
        src: "eggCrack.mov",
    },
    {
        title: "Add in butter, blueberries, and salt",
        src: "otherAdd.mov",
    },
    {
        title: "Add in baking soda",
        src: "sodaAdd.mov",
    },
    {
        title: "Add in baking powder",
        src: "powderAdd.mov",
    },
    {
        title: "Add in flour",
        src: "flourAdd.mov",
    },
    {
        title: "Mix together",
        src: "ingredientsMix.mov",
    },
    {
        title: "Pour batter into molds",
        src: "moldsPour.mov",
    },
    {
        title: "Bake in the oven for 20 minutes using the timer below",
        src: "bake.mov",
    },


];

let currentVideoIndex = 8;

        function playVideo() {
        if (currentVideoIndex >= 17) {
            document.getElementsByClassName("button2")[0].innerHTML = "REVIEW YOUR DISH";
            document.getElementsByClassName("button2")[0].setAttribute("onclick", "location.href='comments.html'");
            return;
        }
        

        const videoElement = document.createElement("video");
        videoElement.setAttribute("controls", "");
        videoElement.setAttribute("autoplay", "");
        const sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", videoArray[currentVideoIndex].src);
        sourceElement.setAttribute("type", "video/mp4");
        videoElement.appendChild(sourceElement);

        const videoContainer = document.getElementById("video-container");
        videoContainer.innerHTML = "";
        videoContainer.appendChild(videoElement);

        const headerElement = document.getElementsByTagName("h1")[0];
        headerElement.innerHTML = `Tofu Stir Fry: ${videoArray[currentVideoIndex].title}`;

        currentVideoIndex++;
        clearTimeout(timerIntervalId);
    }


    function startTimer(durationInMinutes) 
    {
        let remainingDuration = durationInMinutes * 60;

        const timerElement = document.getElementById("timer");
        timerElement.textContent = formatTime(remainingDuration);
        timerIntervalId = setInterval(() => {
            remainingDuration--;
            timerElement.textContent = formatTime (remainingDuration);

            if (remainingDuration <= 0) 
            {
                clearTimeout(timerIntervalId);
                timerElement.textContent = "Time is up!";
            }
        }, 1000);
    }
    
    
  function formatTime(durationInSeconds) 
  {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes.toString().padStart(2, "0") + " minutes"} ${seconds.toString().padStart(2, "0")+" seconds"}`;
  }
