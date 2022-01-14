chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.message === 'youtubeVisited') {
        //------------------Remove Recommended Videos When Watching Videos-------------------------
        if (document.querySelector("#related")) {
            // Clear and style old div
            const relatedDiv = document.querySelector("#related");
            relatedDiv.innerHTML = "";
            relatedDiv.style.display = "inline";

            // Create, style, and append new div
            const newDiv = document.createElement("div");
            newDiv.style.backgroundColor = "#edf5e1";
            newDiv.style.height = "475px";
            newDiv.style.padding = "3em";
            newDiv.style.fontFamily = "YouTube Sans";
            newDiv.style.fontSize = "1em";
            relatedDiv.append(newDiv);

            // Create, style, and append quote div
            const quoteDiv = document.createElement("div");
            newDiv.append(quoteDiv);

            // Create, style, and append google calendar div
            const CalendarATag = document.createElement("a");
            const calendarImg = document.createElement("img");
            CalendarATag.href = "https://calendar.google.com/";
            calendarImg.src = "https://www.apsrc.net/wp-content/uploads/2020/07/google-calendar-icon-png-7.png";
            calendarImg.style.height = "100px";
            calendarImg.style.float = "left";
            CalendarATag.append(calendarImg);
            newDiv.append(CalendarATag);

            // Create, style, and append google tasks div
            const tasksATag = document.createElement("a");
            const tasksImg = document.createElement("img");
            tasksATag.href = "https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1";
            tasksImg.src = "https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2";
            tasksImg.style.height = "100px";
            tasksImg.style.float = "left";
            tasksATag.append(tasksImg);
            newDiv.append(tasksATag);

            // API Call
            fetch("https://type.fit/api/quotes")
              .then((response) => response.json())
              .then((data) => randomQuoteGenerator(data));

            // Generate Random Quote
            function randomQuoteGenerator(data) {
                const randomQuoteIndex = Math.floor(Math.random() * data.length);
                const randomQuoteText = data[randomQuoteIndex].text;
                const randomQuoteAuthor = data[randomQuoteIndex].author;
                quoteDiv.innerHTML = `<center><h1>${randomQuoteText}</h1></center></br><center>- ${randomQuoteAuthor||"Anonymous"}</center>`;
            }
        }

        //-----------------Remove Recommended Videos When On Youtube Homepage---------------
        if (!location.href.includes("search")) {
            fetch("https://type.fit/api/quotes")
              .then((response) => response.json())
              .then((data) => randomQuoteGenerator(data));

            function randomQuoteGenerator(data) {
                const randomQuoteIndex = Math.floor(Math.random() * data.length);
                const randomQuoteText = data[randomQuoteIndex].text;
                const randomQuoteAuthor = data[randomQuoteIndex].author;
                document.querySelector("#contents").style.display = "inline";
                document.querySelector("#contents").innerHTML = `<center><h1>${randomQuoteText}</h1></center></br><center>- ${randomQuoteAuthor||"Anonymous"}</center>`;
            }

            // document.querySelector("#contents").remove();

        }

    }
  })