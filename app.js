// // getting dom ekements

// const gameContainer =  document.querySelector('.container');
// const userResult  =  document.querySelector('.user_result img');
// const cpuResult  =  document.querySelector('.cpu_result img');
// const result = document.querySelector('.result');
// const optionImages = document.querySelectorAll('.option-image');


// optionImages.forEach((image,index)=>{
//     image.addEventListener("click",(e)=>{
//        image.classList.add("active"); 

//        userResult.src = cpuResult.src = "Rock Paper Scissors/images/rock.png";
//        result.innerHTML = "Wait...";

//        //loop again
//        optionImages.forEach((image2,index2)=>{
//         console.log(index,index2)
// // if the current index doesn't match the clicked index
// // remove the active class from the other images
//        index!== index2 && image2.classList.remove("active");
//     });

//    gameContainer.classList.add("start")


//     // set timeout to delay result calculation
//     let time = setInterval (()=>{
//         gameContainer.classList.remove("start")    
//       // get the source of the clicked option images
//      let imageSrc = e.target.querySelector("img").src; 
//      // set the user image to the clicked option image
//      userResult.src = imageSrc;
//        console.log(imageSrc) 

//        //genrate a random number between 0& 2;
//       let randomnumber = Math.floor(Math.random()*3);
     
//       // create An array of cpu images
//       let cpuImages = ["Rock Paper Scissors/images/rock.png" ,"Rock Paper Scissors/images/paper.png", "Rock Paper Scissors/images/scissors.png"];
//       cpuResult.src = cpuImages[randomnumber];
//       //Assign aletter value to the cpu option (r for rock,p for paper , s for scissors)
//       let cpuValue  = ["R" , "P" , "S"][randomnumber]
//       //Assign a letter value to clicked image based on index
//       let userValue = ["R" , "P", "S" ][index]
//       //create an object of all possible outcomes 
//       let outcomes = {
//         RR : "Draw" ,
//         RP: 'Cpu Wins',
//         RS:'User wins',
//         PP:"Draw"   ,
//         PS :"Cpu wins",
//         PR : "User wins" ,        
//         SS:"Draw" ,
//         SP: "User wins ",
//         SR: "Cpu wins"
//         };
      
//       // look up the outcome based  on user and cpu options
//       let outcomevalue = outcomes[userValue+cpuValue]
//       console.log(outcomevalue);

//       //Diusplay the result
//       result.innerHTML = outcomevalue;
        
//     },2500)
      
//     });
// });


// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option-image");

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "Rock Paper Scissors/images/rock.png";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image optionsng
      let cpuImages = ["Rock Paper Scissors/images/rock.png" , "Rock Paper Scissors/images/paper.png" , "Rock Paper Scissors/images/scissors.png"];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});