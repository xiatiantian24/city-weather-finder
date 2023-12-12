// Define an array of questions
const locationQuestions = [
    "What is your favorite country to visit?",
    "What city do you associate with home?",
    "Which city would you love to explore?",
    "If you could live anywhere in the world, where would it be?",
    "What city do you associate with unforgettable memories?",
    "Is there a specific city of the world you find most intriguing?",
    "Which country's natural landscapes do you admire the most?",
    "Which country's festivals would you like to attend?",
    "What city is known as the 'Big Apple'?",
    "In which city is the Eiffel Tower located?",
    "What is the capital city of Japan?",
    "In what city is the famous Red Square situated?",
    "What is the capital city of Australia?",
    "Which city is often referred to as the 'City of Angels'?",
    "In what city would you find the iconic Golden Gate Bridge?",
    "In which city is the Taj Mahal, one of the Seven Wonders of the World?",
    "Which city is renowned for its ancient ruins, including the Acropolis?",
    "What is the capital city of Canada?",
    "What is the capital city of South Korea?",
    "What's the hottest city you have been recently?",
    "What's the coldest city you have visited?",
    "Which city could be very windy right now?",
    "Which city could have no wind right now?",
    "Which city could be very humid right now?",
    "What's the least humid city you have visited?",
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
  