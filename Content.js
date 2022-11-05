const generateSTYLES = () => {
  return `<style>
  @import url('https://fonts.googleapis.com/css?family=opensans:500');
  
  ._404 {
    font-size: 220px;
    text-align: center;
  }
  .question {
    font-size: 25px;
    text-align: center;
  }
  </style>
    `
};

const getQuestions = () => {
  return NaN // Rui's function will come here
}

const generateHTML = (pageName, question) => {
  return `
  <!DOCTYPE html>
  <html>
  <body style="text-align:center;">
      <h1 style="color:green;">  
              Clock Hacks
      </h1>
      <h2>Stop Procrastinating</h2>
      <p>What is ${question}?</p>
    
      Answer : <input type="text" id="answer">
      <button type="button" id="submit">Try it</button>
      <p id="blank_space"></p>
    
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
  const num1 = Math.floor(Math.random() * 101);
  num2 = Math.floor(Math.random() * 101);
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
  const final = [question, answer.toString()]
  
  return(final)
}

switch (window.location.hostname) {
  case "www.facebook.com" :
    // const initDocument = structuredClone(document);
    const arr = puzzle();
    const question = arr[0];
    const answer = arr[1];
    console.log(question)
    console.log(answer)

    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("Facebook", question);
    
    document.querySelector('#submit').addEventListener('click', 
    function() {
    var x = document.getElementById("answer").value;
    if (x === answer) {
      document.getElementById("blank_space").innerHTML = 'Correct';
      alert('Correct Answer! Reload Website');
      // document = initDocument
      // chrome.tab.create({url : 'www.google.com'})
    } else {
      document.getElementById("blank_space").innerHTML = 'Wrong';
    }
    });
}


