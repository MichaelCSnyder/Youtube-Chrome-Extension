chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //-----------------Remove Recommended Videos When On Youtube Homepage---------------
    if (request.message === 'youtubeHomeVisited') {
        console.log("message received that you are at home");
        function replaceHome() {
            // Clear and style old homepage videos div
            const contentDiv = document.querySelector("#contents");
            contentDiv.innerHTML = "";
            contentDiv.style.display = "inline";

            // Create, style, and append new div
            const newDiv = document.createElement("div");
            newDiv.style.backgroundImage = 'url("https://64.media.tumblr.com/adb90907b7715d55cc186ab17a5b7be4/tumblr_oiwyturZ9q1tf8vylo1_1280.png")';
            newDiv.style.backgroundSize = "100% 100%"
            newDiv.style.height = "475px";
            newDiv.style.padding = "3em";
            newDiv.style.fontFamily = "YouTube Sans";
            newDiv.style.fontSize = "1em";
            newDiv.style.display = "flex";  
            newDiv.style.flexDirection = "column";
            newDiv.style.justifyContent = "space-around";
            newDiv.style.alignItems = "center";
            contentDiv.append(newDiv);

            // Create, style, and append quote div
            const quoteDiv = document.createElement("div");
            newDiv.append(quoteDiv);
            
            // Create, style, and append icon rows
            const row1 = document.createElement("div");
            const row2 = document.createElement("div");
            row1.style.marginTop = "2em";
            row1.style.width = "80%";
            row1.style.display = "flex";
            row1.style.justifyContent = "space-around";
            row2.style.marginTop = "2em";
            row2.style.width = "80%";
            row2.style.display = "flex";
            row2.style.justifyContent = "space-around";

            newDiv.append(row1, row2);

            // Create, style, and append google calendar div
            const CalendarATag = document.createElement("a");
            const calendarImg = document.createElement("img");
            CalendarATag.href = "https://calendar.google.com/";
            calendarImg.src = "https://webstockreview.net/images/google-calendar-icon-png.png";
            calendarImg.style.height = "50px";
            CalendarATag.append(calendarImg);
            row1.append(CalendarATag);

            // Create, style, and append google tasks div
            const tasksATag = document.createElement("a");
            const tasksImg = document.createElement("img");
            tasksATag.href = "https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1";
            tasksImg.src = "https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2";
            tasksImg.style.height = "50px";
            tasksATag.append(tasksImg);
            row1.append(tasksATag);
            
            // Create, style, and append anki div
            const ankiATag = document.createElement("a");
            const ankiImg = document.createElement("img");
            ankiATag.href = "https://ankiweb.net/account/login";
            ankiImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Anki-icon.svg/2048px-Anki-icon.svg.png";
            ankiImg.style.height = "50px";
            ankiATag.append(ankiImg);
            row1.append(ankiATag);
            
            // Create, style, and append github div
            const gitATag = document.createElement("a");
            const gitImg = document.createElement("img");
            gitATag.href = "https://github.com/";
            gitImg.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
            gitImg.style.height = "50px";
            gitATag.append(gitImg);
            row2.append(gitATag);

            // Create, style, and append leetcode div
            const leetATag = document.createElement("a");
            const leetImg = document.createElement("img");
            leetATag.href = "https://leetcode.com/";
            leetImg.src = "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
            leetImg.style.height = "50px";
            leetATag.append(leetImg);
            row2.append(leetATag);

            // Create, style, and append MDN div
            const mdnATag = document.createElement("a");
            const mdnImg = document.createElement("img");
            mdnATag.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
            mdnImg.src = "http://assets.stickpng.com/images/58480eb3cef1014c0b5e492a.png";
            mdnImg.style.height = "50px";
            mdnATag.append(mdnImg);
            row2.append(mdnATag);
            
            // API call
            fetch("https://type.fit/api/quotes")
              .then((response) => response.json())
              .then((data) => randomQuoteGenerator(data));

            // Generate and append random quote and author
            function randomQuoteGenerator(data) {
                const randomQuoteIndex = Math.floor(Math.random() * data.length);
                const randomQuoteText = data[randomQuoteIndex].text;
                const randomQuoteAuthor = data[randomQuoteIndex].author;

                // Create, style, and append quote
                const quoteP = document.createElement("p");
                quoteP.innerHTML = `<center>${randomQuoteText}</center>`;
                quoteP.style.fontSize = "3em";
                quoteDiv.append(quoteP);

                // Create, style, and append author
                const authorP = document.createElement("p");
                authorP.innerHTML = `<center>- ${randomQuoteAuthor||"Anonymous"}</center>`
                authorP.style.fontSize = "1.5em";
                authorP.style.marginTop = "1.5em";
                quoteDiv.append(authorP);
            }
        }
        setTimeout(replaceHome, 1000);
    } 
    //------------------Remove Recommended Videos When Watching Videos-------------------------
    else if (request.message === "watchingVideo") {
        console.log("message received that you're watching a video");
            function replaceRecommended() {
                // Clear and style old recommended videos div
                const relatedDiv = document.querySelector("#related");
                relatedDiv.innerHTML = "";
                relatedDiv.style.display = "inline";
                
                // Create, style, and append new div
                const newDiv = document.createElement("div");
                newDiv.style.backgroundImage = 'url("https://64.media.tumblr.com/adb90907b7715d55cc186ab17a5b7be4/tumblr_oiwyturZ9q1tf8vylo1_1280.png")';
                newDiv.style.backgroundSize = "100% 100%"
                newDiv.style.height = "475px";
                newDiv.style.padding = "3em";
                newDiv.style.fontFamily = "YouTube Sans";
                newDiv.style.fontSize = "1em";
                newDiv.style.display = "flex";  
                newDiv.style.flexDirection = "column";
                newDiv.style.justifyContent = "space-between";
                newDiv.style.alignItems = "center";
                relatedDiv.append(newDiv);
    
                
                // Create, style, and append quote div
                const quoteDiv = document.createElement("div");
                newDiv.append(quoteDiv);
                
                // Create, style, and append icon rows
                const row1 = document.createElement("div");
                const row2 = document.createElement("div");
                row1.style.marginTop = "2em";
                row1.style.width = "80%";
                row1.style.display = "flex";
                row1.style.justifyContent = "space-around";
                row2.style.marginTop = "2em";
                row2.style.width = "80%";
                row2.style.display = "flex";
                row2.style.justifyContent = "space-around";
    
                newDiv.append(row1, row2);
    
                // Create, style, and append google calendar div
                const CalendarATag = document.createElement("a");
                const calendarImg = document.createElement("img");
                CalendarATag.href = "https://calendar.google.com/";
                calendarImg.src = "https://webstockreview.net/images/google-calendar-icon-png.png";
                calendarImg.style.height = "50px";
                CalendarATag.append(calendarImg);
                row1.append(CalendarATag);
    
                // Create, style, and append google tasks div
                const tasksATag = document.createElement("a");
                const tasksImg = document.createElement("img");
                tasksATag.href = "https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1";
                tasksImg.src = "https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2";
                tasksImg.style.height = "50px";
                tasksATag.append(tasksImg);
                row1.append(tasksATag);

                // Create, style, and append anki div
                const ankiATag = document.createElement("a");
                const ankiImg = document.createElement("img");
                ankiATag.href = "https://ankiweb.net/account/login";
                ankiImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Anki-icon.svg/2048px-Anki-icon.svg.png";
                ankiImg.style.height = "50px";
                ankiATag.append(ankiImg);
                row1.append(ankiATag);

                // Create, style, and append github div
                const gitATag = document.createElement("a");
                const gitImg = document.createElement("img");
                gitATag.href = "https://github.com/";
                gitImg.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
                gitImg.style.height = "50px";
                gitATag.append(gitImg);
                row2.append(gitATag);

                // Create, style, and append leetcode div
                const leetATag = document.createElement("a");
                const leetImg = document.createElement("img");
                leetATag.href = "https://leetcode.com/";
                leetImg.src = "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
                leetImg.style.height = "50px";
                leetATag.append(leetImg);
                row2.append(leetATag);

                // Create, style, and append MDN div
                const mdnATag = document.createElement("a");
                const mdnImg = document.createElement("img");
                mdnATag.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
                mdnImg.src = "http://assets.stickpng.com/images/58480eb3cef1014c0b5e492a.png";
                mdnImg.style.height = "50px";
                mdnATag.append(mdnImg);
                row2.append(mdnATag);
    
                // API Call
                fetch("https://type.fit/api/quotes")
                  .then((response) => response.json())
                  .then((data) => randomQuoteGenerator(data));
    
                // Generate and append random quote and author
                function randomQuoteGenerator(data) {
                    const randomQuoteIndex = Math.floor(Math.random() * data.length);
                    const randomQuoteText = data[randomQuoteIndex].text;
                    const randomQuoteAuthor = data[randomQuoteIndex].author;

                    // Create, style, and append quote
                    const quoteP = document.createElement("p");
                    quoteP.innerHTML = `<center>${randomQuoteText}</center>`;
                    quoteP.style.fontSize = "3em";
                    quoteDiv.append(quoteP);

                    // Create, style, and append author
                    const authorP = document.createElement("p");
                    authorP.innerHTML = `<center>- ${randomQuoteAuthor||"Anonymous"}</center>`
                    authorP.style.fontSize = "1.5em";
                    authorP.style.marginTop = "1.5em";
                    quoteDiv.append(authorP);
                }
            }


        if (document.querySelector("#related")) {
            }
            setTimeout(replaceRecommended, 1000);
    }
  })
  