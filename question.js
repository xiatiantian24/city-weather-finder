// Define an array of questions
const locationQuestions = [
    "What is your dream vacation destination?",
    "Which city would you love to explore?",
    "If you could live anywhere in the world, where would it be?",
    "What city do you associate with unforgettable memories?",
    "Which city has natural landscapes that you admire?",
    "What is the hottest city you have been recently?",
    "What is the coldest city you have visited?",
    "Which city could be very windy right now?",
    "Which city could have no wind right now?",
    "Which city could be very humid right now?",
    "What is the least humid city you have visited?",
    "What is a city that was raining all day when you visited?",
    "Which city had the heaviest snow when you visited?",
    "What is a city that never rains when you visit?",
    "What is a city that never snows when you visit?",
    "What city would you go to enjoy sunshine?",
    "What city would you go to enjoy hiking?",
  ];

  // Function to simulate typing effect
  function typeEffect(element, text, speed) {
    let i = 0;
    // console.log(speed)
    const typingInterval = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(typingInterval);
      }
    }, speed);
  }
  
  
  // Function to get a random question from the array
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * locationQuestions.length);
    console.log(locationQuestions.length)
    console.log(randomIndex)
    const randomQuestion = locationQuestions[randomIndex];
    console.log(randomQuestion)
    const questionElement = document.getElementById("question");
    questionElement.innerText = ""; // Clear existing text
    typeEffect(questionElement, randomQuestion, 40); // Typing speed: 50 milliseconds per character
  }

  // Event listener for the button click
  document.getElementById("question-btn").addEventListener("click", getRandomQuestion);
  