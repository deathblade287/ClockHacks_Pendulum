function setCookie(cname, cvalue, exmins) {
  const d = new Date();
  d.setTime(d.getTime() + (exmins*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

setCookie("test12345","yes",1) // this cookie is set to detect whether or not a webpage deletes cookies.




if (getCookie("active54321") === "true") { // if previous cookie was not deleted and user is allowed to use site
  //console.log()
  setTimeout(function(){
    alert("time is up! please go back to studying.")
    document.cookie = "active54321=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // deletes coookie
    location.reload();
  }, 1000*60*5+1000); // five minutes plus a second of padding, thats likely when cookie expires.
  
} else { // new check first if cookie will be deleted
  setTimeout(function(){
    if (getCookie("test12345") == "") { // if cookie was deleted, dont do anything for 1.3 mins and then popup
      setTimeout(function(){
        const generateSTYLES = () => {
          return `
          <style>
          body {
              background: #00BFFF;
              font-family: 'Comfortaa', cursive;
              color: #fff;
              user-select: none;
              margin: 50;
              padding: 50;
              counter-reset: points;
          }

          .align_txt {
            text-align: center;
          }

          h1 {
            font-size: 50px;
          }

          #instructions {
            font-size: 13px;
            font-style: italic;
          }

          p {
            font-size: 20px
          }

          input {
            width: 10%;
            padding: 12px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 50px;
          }
          input:focus {
            outline: none;
          }
    
          button {
            background-color: #FFFFFF;
            border-radius: 50px;
            border-width: 0;
            color: black;
            cursor: pointer;
            display: inline-block;
            font-size: 13px;
            font-weight: 500;
            line-height: 20px;
            list-style: none;
            margin: 0;
            padding: 10px 12px;
            text-align: center;
            white-space: nowrap;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }
          </style>
            `
        };
        
        
        const generateHTML = (pageName, question) => {
          return `
          <!DOCTYPE html>
            <html>
              <head>
                <!-- Add icon library -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              </head>
              <body>
                <div class="align_txt">
                    <h1> Pendulum </h1>
                    <p id="instructions">Answer the question to have access to the distracting website for the next 2-5 minutes</p>
                    <p>What is ${question}?</p>
                  
                    <input type="text" id="answer" placeholder="Type Here...">
                    <button type="button" id="submit">Submit</button>
                    <p id="blank_space"></p>
                </div>
              </body>
            </html>
        
          `;
        };
        
        function puzzle() {
          function rand_choice(choices) {
            let index = Math.floor(Math.random() * choices.length);
            return choices[index];
          }
          const method = rand_choice(['+', '-', '*']);
          const num1 = Math.floor(Math.random() * 141);
          num2 = Math.floor(Math.random() * 131);
          num3 = Math.floor(Math.random() * 11);
          if (method === '+') {
            var answer = num1 + num2;
          } else if (method === '-') {
            var answer = num1 - num2;
          }
          else if (method === '*') {
            var answer = num1 * num3;
          }
          const question = num1.toString() + method + num2.toString();
          if (method === '*') {
            const question = num1.toString() + method + num3.toString();
            const final = [question, answer.toString()]
            return(final)
          }
          const final = [question, answer.toString()]
          return(final)
        }
        
        function DOM(website_name) {
          const arr = puzzle();
          const question = arr[0];
          const answer = arr[1];
          console.log(question)
          console.log(answer)
        
          document.head.innerHTML = generateSTYLES();
          document.body.innerHTML = generateHTML(website_name, question);
        
          document.querySelector('#submit').addEventListener('click', 
          function() {
          var x = document.getElementById("answer").value;
          if (x === answer) {
            document.getElementById("blank_space").innerHTML = 'Correct';
            // document = initDocument
            // chrome.tab.create({url : 'www.google.com'})
            //alert(1)
            location.reload();
        
        
          } else {
            document.getElementById("blank_space").innerHTML = 'Wrong';
          }
          });
        }
        
        
        switch (window.location.hostname) {
          case "www.facebook.com" :
            DOM("Facebook")
          case "www.discord.com": 
            DOM("Discord")
          case "www.netflix.com": 
            DOM("Netflix")
          case "www.instagram.com":  
            DOM("Instagram") 
          case "www.reddit.com":  
            DOM("Reddit")
          case "www.youtube.com":  
            DOM("Youtube") 
          case "www.twitch.com":  
            DOM("Twitch")
          case "www.twitter.com":  
            DOM("Twitter")
          case "www.lichess.org":  
            DOM("Lichess")
          case "www.chess.com":  
            DOM("Chess")
          case "www.tumblr.com":  
            DOM("Tumblr")
          case "www.chess.com":  
            DOM("Chess")
        }
      }, 1000*60*2);
    } 
    else { // if cookie wasnt deleted, just carry on.
      const generateSTYLES = () => {
          return `
          <style>
          body {
              background: #00BFFF;
              font-family: 'Comfortaa', cursive;
              color: #fff;
              user-select: none;
              margin: 50;
              padding: 50;
              counter-reset: points;
          }

          .align_txt {
            text-align: center;
          }

          h1 {
            font-size: 50px;
          }

          #instructions {
            font-size: 13px;
            font-style: italic;
          }

          p {
            font-size: 20px
          }

          input {
            width: 10%;
            padding: 12px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 50px;
          }
          input:focus {
            outline: none;
          }
    
          button {
            background-color: #FFFFFF;
            border-radius: 50px;
            border-width: 0;
            color: black;
            cursor: pointer;
            display: inline-block;
            font-size: 13px;
            font-weight: 500;
            line-height: 20px;
            list-style: none;
            margin: 0;
            padding: 10px 12px;
            text-align: center;
            white-space: nowrap;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }
          </style>
            `
        };
        
        
        const generateHTML = (pageName, question) => {
          return `
          <!DOCTYPE html>
            <html>
              <head>
                <!-- Add icon library -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              </head>
              <body>
                <div class="align_txt">
                    <h1> Pendulum </h1>
                    <p id="instructions">Answer the question to have access to the distracting website for the next 5 minutes</p>
                    <p>What is ${question}?</p>
                  
                    <input type="text" id="answer" placeholder="Type Here...">
                    <button type="button" id="submit">Submit</button>
                    <p id="blank_space"></p>
                </div>
              </body>
            </html>
        
          `;
        };
    
      
      function puzzle() {
        function rand_choice(choices) {
          let index = Math.floor(Math.random() * choices.length);
          return choices[index];
        }
        const method = rand_choice(['+', '-', '*']);
        const num1 = Math.floor(Math.random() * 141);
        num2 = Math.floor(Math.random() * 131);
        num3 = Math.floor(Math.random() * 11);
        if (method === '+') {
          var answer = num1 + num2;
        } else if (method === '-') {
          var answer = num1 - num2;
        }
        else if (method === '*') {
          var answer = num1 * num3;
        }
        const question = num1.toString() + method + num2.toString();
        if (method === '*') {
          const question = num1.toString() + method + num3.toString();
          const final = [question, answer.toString()]
          return(final)
        }
        const final = [question, answer.toString()]
        return(final)
      }
      
      function DOM(website_name) {
        const arr = puzzle();
        const question = arr[0];
        const answer = arr[1];
        console.log(question)
        console.log(answer)
      
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML(website_name, question);
      
        document.querySelector('#submit').addEventListener('click', 
        function() {
        var x = document.getElementById("answer").value;
        if ((x === answer) && (getCookie("active54321") == "")) {
          document.getElementById("blank_space").innerHTML = 'Correct';
          // document = initDocument
          // chrome.tab.create({url : 'www.google.com'})
          setCookie("active54321","true",5)
          //alert(1)
          location.reload();
      
      
        } else {
          document.getElementById("blank_space").innerHTML = 'Wrong';
        }
        });
      }
      
      
      switch (window.location.hostname) {
        case "www.facebook.com" :
          DOM("Facebook")
        case "www.discord.com": 
          DOM("Discord")
        case "www.netflix.com": 
          DOM("Netflix")
        case "www.instagram.com":  
          DOM("Instagram") 
        case "www.reddit.com":  
          DOM("Reddit")
        case "www.youtube.com":  
          DOM("Youtube") 
        case "www.twitch.com":  
          DOM("Twitch")
        case "www.twitter.com":  
          DOM("Twitter")
        case "www.lichess.org":  
          DOM("Lichess")
        case "www.chess.com":  
          DOM("Chess")
        case "www.tumblr.com":  
          DOM("Tumblr")
        case "www.chess.com":  
          DOM("Chess")
      }
    }
  }, 1000); // one second to see if cookie deleted


}
