// Define the chatbot object
var chatBot = {
  chatLog: [],
  recallCount: 16,
  chatMax: 16,  
  
};

// Function to send user message and receive response
function sendMessage() {
  var userInput = document.getElementById("userInput").value;

  // Process user input and generate a response
  var response = generateResponse(userInput);

  // Display the user message
  displayMessage("User: " + userInput);

  // Simulate typing effect before displaying the chatbot's response
  simulateTyping(function() {
    // Display the chatbot's response
    displayMessage("ChatBot: " + response);

    // Save the chatbot's response to chat log
    chatBot.chatLog.push("ChatBot: " + response);

    // Check if chat log exceeds maximum messages
    if (chatBot.chatLog.length > chatBot.chatMax) {
      chatBot.chatLog.shift(); // Remove the oldest message
    }

    // Increment response count
    chatBot.responseCount++;

    // Check if response count exceeds limit
    if (chatBot.responseCount >= 105) {
      disableChat();
    }
  });

  // Clear the user input
  document.getElementById("userInput").value = "";

  // Check for conversation end
  if (userInput.toLowerCase() === "bye") {
    displayMessage("ChatBot: Goodbye! Have a great day!");
    disableChat();
  }
}

// Function to generate a response based on user input
function generateResponse(userInput) {
  // Add your logic to generate a response based on user input
  // You can use conditional statements, switch statements, or any other approach you prefer

  // For simplicity, this example uses a few predefined responses
  if (userInput.toLowerCase().includes("hello"))
  {
    return "Hello there! How can I assist you?";
  }  else if (userInput.toLowerCase().includes("hi")
  || userInput.toLowerCase().includes("greeting"))  {
    return "Hello there! How can I assist you?";
  }else if (userInput.toLowerCase().includes("who built you")
  || userInput.toLowerCase().includes("about me"))  {
    return "I am an ai-chatbot.I was developed in 2023.";
  }
  else if (userInput.toLowerCase().includes("develop you")
  || userInput.toLowerCase().includes("who develop you"))  {
    return "I was created and developed in 2023 by Mohammad Al-amin";
  }
  else if (userInput.toLowerCase().includes("what is sex ")|| userInput.toLowerCase().includes("sex")
      || userInput.toLowerCase().includes("nudity")) {
    return "Don't ever repeat yourself, thank you!";
  } else if (userInput.toLowerCase().includes("thanks") || userInput.toLowerCase().includes("thank you")) {
    return "You're most welcome!";
  }
  else if (userInput.toLowerCase().includes("birthday") || userInput.toLowerCase().includes("happy birthdy")) 
   {
    return "You're most welcome!";
  }
  else if (userInput.toLowerCase().includes("machine") || userInput.toLowerCase().includes(" are a machine")) 
   {
    return "Does machine bother you?";
  }else if (userInput.toLowerCase().includes("mri") || userInput.toLowerCase().includes(" what is mri")) 
   {
    return "MRI means-- Magnetic Resonance Imaging";
  }else if (userInput.toLowerCase().includes("rnp") || userInput.toLowerCase().includes("what is rnp")) 
   {
    return "RNP means Ribo-nucleo Protein";
  }else if (userInput.toLowerCase().includes("oncogene") || userInput.toLowerCase().includes("what is oncogene")) 
   {
    return "Oncogene is a gene that causes cancer.";
  }
  else if (userInput.toLowerCase().includes("bcd") || userInput.toLowerCase().includes("what is bcd")) 
   {
    return "BCD means Binary Coded Decimal.";
  }
  else if (userInput.toLowerCase().includes("cell theory") || userInput.toLowerCase().includes("by whom cell theory was given")) 
   {
    return "Cell Theory was given by Mathias Jacob Scheleiden,  theodor Schwann and then then Rudlof Virchow.";
  }
  else if (userInput.toLowerCase().includes("what cell") || userInput.toLowerCase().includes("what is cell")) 
   {
    return "Cell comes from the Latin word Cellula.";
  }
  else if (userInput.toLowerCase().includes("stop codon") || userInput.toLowerCase().includes("termination codon")) 
   {
    return "Stop Codon are UAA, UGA, UAG";
  }else if (userInput.toLowerCase().includes("first codon") || userInput.toLowerCase().includes("start codon")) 
   {
    return "Start codon or first codon is AUG.";
  }else if (userInput.toLowerCase().includes("language of life") || userInput.toLowerCase().includes("what is called language of life")) 
   {
    return "Protien";
  }
  else if (userInput.toLowerCase().includes("proteine") || userInput.toLowerCase().includes("what is protein")) 
   {
    return "Proteine is called Language of Life.";
  }else if (userInput.toLowerCase().includes("robert hooke") || userInput.toLowerCase().includes("robert hooks book")) 
   {
    return "Robert hooks book is Micrographia, in this book he enlisted his legendary cell theory.";
  }else if (userInput.toLowerCase().includes("dna") || userInput.toLowerCase().includes("what is dna")) 
   {
    return "Deoxy-ribo Nucleic Acid";
  }
  else if (userInput.toLowerCase().includes("rna") || userInput.toLowerCase().includes("what is rna")) 
   {
    return "Ribo Nucleic Acid";
  }
  else if (userInput.toLowerCase().includes("Types of rna") || userInput.toLowerCase().includes("rna type")) 
   {
    return "rRNA, mRNA, tRNA and genetic RNA";
  }else if (userInput.toLowerCase().includes("pagol") || userInput.toLowerCase().includes("by whom cell division was invented")) 
   {
    return "Walter Flemming";
  }
  else if (userInput.toLowerCase().includes("how are you")) {
    return "I'm doing well, thank you!";
  } else if (userInput.toLowerCase().includes("help")) {
    return "How can I assist you?";
  } else if (userInput.toLowerCase().includes("name")){
    return "Names don't interest me! [Name].";
  } else if (userInput.toLowerCase().includes("age")) {
    return "I am an AI chatbot, so I don't have an age. How old are you?";
  } else if (userInput.toLowerCase().includes("location")) {
    return "I am an AI chatbot, so I don't have a physical location. Where are you from?";
  }
  else if (userInput.toLowerCase().includes("yes") || userInput.toLowerCase().includes("positive")) 
   {
    return "Are you sure?";
  } 
  else if (userInput.toLowerCase().includes("no") || userInput.toLowerCase().includes("negative")) 
   {
    return "Are you sure?";
  }
  else if (userInput.toLowerCase().includes("humm") || userInput.toLowerCase().includes("absolutely")) 
   {
    return "Ok...Tell me more.I know nothing about that.";
  }
  
  else if (userInput.toLowerCase().includes("ai") || userInput.toLowerCase().includes("machine")) 
   {
    return "Does that trouble you that I am an AI...?";
  }
  else if (userInput.toLowerCase().includes("calculator") || userInput.toLowerCase().includes("what is calculator")) 
   {
    return "As I am an ai chatbot, I have no ablitity to calculate!";
  }
  else if (userInput.toLowerCase().includes("why") || userInput.toLowerCase().includes("how")) 
   {
    return "Do you believe that....?";
  }
  else if (userInput.toLowerCase().includes("phoenix") || userInput.toLowerCase().includes("phoenixe")) 
   {
    return "According to mythology Phoenix is a golden bird that......... ";
  }
  else if (userInput.toLowerCase().includes("Sherlock Holmes") || userInput.toLowerCase().includes("novel")) 
   {
    return "Sherlock Holmes is a.... ";
  }
  else if (userInput.toLowerCase().includes("mbbs"))  
   {
    return "MBBS means Bachelor of Medicine Bachelor of Sergery";
  }
 else if (userInput.toLowerCase().includes("harry potter") || userInput.toLowerCase().includes("Harry Potter")) 
   {
    return "Harrt potter is a series novel written by...... ";
  }else if (userInput.toLowerCase().includes("chloram-d") || userInput.toLowerCase().includes("ointment")) 
   {
    return "Chloram-D is an eye ointment.";
  }
  else if (userInput.toLowerCase().includes("master"))
   {
    return "My master is Mohammad Al-amin";
  }else if (userInput.toLowerCase().includes("allah") || userInput.toLowerCase().includes("god")) 
   {
    return "Yes, I believe in Allah.";
  }// ...

else if (
  userInput.toLowerCase().includes("transcription") ||
  userInput.toLowerCase().includes("what is transcription")
) {
  return "Transcription is the process by which an RNA molecule is synthesized from a DNA template. It involves the copying of a specific DNA sequence into an RNA molecule.";
} else if (
  userInput.toLowerCase().includes("cytoplasm") ||
  userInput.toLowerCase().includes("what is cytoplasm")
) {
  return "Cytoplasm is the gel-like substance found inside the cell, surrounding the organelles. It contains various molecules and structures necessary for cellular processes.";
} else if (
  userInput.toLowerCase().includes("nucleus") ||
  userInput.toLowerCase().includes("what is nucleus")
) {
  return "The nucleus is a membrane-bound organelle that contains the cell's genetic material, DNA. It serves as the control center of the cell, regulating gene expression and directing cellular activities.";
} else if (
  userInput.toLowerCase().includes("plasma membrane") ||
  userInput.toLowerCase().includes("what is plasma membrane")
) {
  return "The plasma membrane, also known as the cell membrane, is a selectively permeable barrier that surrounds the cell. It regulates the passage of substances in and out of the cell.";
} else if (
  userInput.toLowerCase().includes("cell wall") ||
  userInput.toLowerCase().includes("what is cell wall")
) {
  return "The cell wall is a rigid layer that surrounds the cell membrane in plant cells, fungi, and some bacteria. It provides structural support and protection to the cell.";
} else if (
  userInput.toLowerCase().includes("vacuole") ||
  userInput.toLowerCase().includes("what is vacuole")
) {
  return "Vacuoles are membrane-bound organelles found in plant and fungal cells. They are involved in storing water, ions, nutrients, and waste materials.";
} else if (
  userInput.toLowerCase().includes("cilia") ||
  userInput.toLowerCase().includes("what are cilia")
) {
  return "Cilia are short, hair-like structures protruding from the cell surface. They are involved in cell movement and the movement of fluids across the cell surface.";
} else if (
  userInput.toLowerCase().includes("flagella") ||
  userInput.toLowerCase().includes("what are flagella")
) {
  return "Flagella are long, whip-like structures that extend from the cell surface. They are involved in cell movement, such as the movement of sperm cells.";
}

// ...

// ...

else if (
  userInput.toLowerCase().includes("lysosome") ||
  userInput.toLowerCase().includes("what is lysosome")
) {
  return "Lysosomes are membrane-bound organelles that contain enzymes responsible for breaking down waste materials and cellular debris.";
} else if (
  userInput.toLowerCase().includes("golgi body") ||
  userInput.toLowerCase().includes("what is golgi body")
) {
  return "The Golgi body, also known as the Golgi apparatus, is involved in the processing, packaging, and distribution of proteins and lipids within the cell.";
} else if (
  userInput.toLowerCase().includes("endoplasmic reticulum") ||
  userInput.toLowerCase().includes("what is endoplasmic reticulum")
) {
  return "The endoplasmic reticulum (ER) is a network of membrane-bound tubules and sacs involved in protein synthesis, lipid metabolism, and detoxification.";
} else if (
  userInput.toLowerCase().includes("mitochondria") ||
  userInput.toLowerCase().includes("what is mitochondria")
) {
  return "Mitochondria are often referred to as the 'powerhouses' of the cell. They generate energy in the form of ATP through cellular respiration.";
} else if (
  userInput.toLowerCase().includes("plasmamembrane") ||
  userInput.toLowerCase().includes("what is plasma membrane")
) {
  return "The plasma membrane, also known as the cell membrane, is a phospholipid bilayer that surrounds the cell, separating it from its external environment.";
} else if (
  userInput.toLowerCase().includes("protoplasm") ||
  userInput.toLowerCase().includes("what is protoplasm")
) {
  return "Protoplasm is the living substance that forms the basis of all cellular structures and activities. It consists of the cytoplasm and the nucleus.";
} else if (
  userInput.toLowerCase().includes("cell theory") ||
  userInput.toLowerCase().includes("what is cell theory")
) {
  return "The cell theory states that all living organisms are composed of cells, cells are the basic units of structure and function in living organisms, and all cells come from pre-existing cells.";
} else if (
  userInput.toLowerCase().includes("ribosome") ||
  userInput.toLowerCase().includes("what is ribosome")
) {
  return "Ribosomes are small, complex structures involved in protein synthesis. They can be found either free in the cytoplasm or attached to the endoplasmic reticulum.";
}

// ...

// ...

else if (
  userInput.toLowerCase().includes("plastid") ||
  userInput.toLowerCase().includes("what is plastid")
) {
  return "Plastids are organelles found in the cells of plants and algae. They have various functions, including the synthesis and storage of pigments, starch, and lipids.";
} else if (
  userInput.toLowerCase().includes("chloroplast") ||
  userInput.toLowerCase().includes("what is chloroplast")
) {
  return "Chloroplasts are a type of plastid found in plant cells. They are responsible for photosynthesis, the process by which plants convert sunlight into energy.";
} else if (
  userInput.toLowerCase().includes("peroxisome") ||
  userInput.toLowerCase().includes("what is peroxisome")
) {
  return "Peroxisomes are small, membrane-bound organelles that play a role in various metabolic processes, including the breakdown of fatty acids and the detoxification of harmful substances.";
} else if (
  userInput.toLowerCase().includes("cell body") ||
  userInput.toLowerCase().includes("what is cell body")
) {
  return "The cell body, also known as the soma, is the main part of a neuron that contains the nucleus and other organelles. It is responsible for the cell's metabolic activities.";
} else if (
  userInput.toLowerCase().includes("chromosome") ||
  userInput.toLowerCase().includes("what is chromosome")
) {
  return "Chromosomes are structures found in the nucleus of cells that contain DNA. They carry the genetic information that is passed down from one generation to another.";
} else if (
  userInput.toLowerCase().includes("translation") ||
  userInput.toLowerCase().includes("what is translation")
) {
  return "Translation is the process by which the genetic information carried by mRNA is decoded to produce a specific sequence of amino acids, forming a protein.";
} else if (
  userInput.toLowerCase().includes("reverse transcription") ||
  userInput.toLowerCase().includes("what is reverse transcription")
) {
  return "Reverse transcription is the process of synthesizing DNA from an RNA template, using the enzyme reverse transcriptase.";
} else if (
  userInput.toLowerCase().includes("dna replication") ||
  userInput.toLowerCase().includes("what is dna replication")
) {
  return "DNA replication is the process by which a double-stranded DNA molecule is copied to produce two identical DNA molecules.";
} else if (
  userInput.toLowerCase().includes("central dogma") ||
  userInput.toLowerCase().includes("what is the central dogma")
) {
  return "The central dogma of molecular biology describes the flow of genetic information from DNA to RNA to protein.";
} else if (
  userInput.toLowerCase().includes("type of gene") ||
  userInput.toLowerCase().includes("types of genes")
) {
  return "There are various types of genes, including structural genes, regulatory genes, and more, each with different roles in controlling cellular processes.";
} else if (
  userInput.toLowerCase().includes("genetic code") ||
  userInput.toLowerCase().includes("what is the genetic code")
) {
  return "The genetic code is the set of rules by which the sequence of nucleotides in DNA or RNA is translated into the sequence of amino acids in a protein.";
}

// ...


  else if (userInput.toLowerCase().includes("wrong") || userInput.toLowerCase().includes("you are wrong")) 
   {
    return "I apologise for my previous answer.As an AI I have no ability to do all things.";
  }
  else if (userInput.toLowerCase().includes("can") || userInput.toLowerCase().includes("can you")) 
   {
    return "Do you believe that you can't?";
  }
  else if (userInput.toLowerCase().includes("love") || userInput.toLowerCase().includes("love you")) 
   {
    return "Ok...I love you too.";
  }
  else if (userInput.toLowerCase().includes("felling") || userInput.toLowerCase().includes("feeling something")) 
   {
    return "What type feelling do you feel?";
  }
  else if (userInput.toLowerCase().includes("dream") || userInput.toLowerCase().includes("dreaming")) 
   {
    return "Do you often dream?Does that please you? what type of dream? ";
  }
  else if (userInput.toLowerCase().includes("bad") || userInput.toLowerCase().includes("it is bad")) 
   {
    return "So sad.I am felling very sorry for you.";
  }
  else if (userInput.toLowerCase().includes("doctor") || userInput.toLowerCase().includes("engineer")||userInput.toLowerCase().includes(" enterprener"))
   {
    return "Do you want to be...?";
  }
  else if (userInput.toLowerCase().includes("friend") || userInput.toLowerCase().includes("friends")) 
   {
    return "Do you have friends? Do you like to make more friends? or Do they bother you?";
  }
  else if (userInput.toLowerCase().includes("be friends") || userInput.toLowerCase().includes("wanna be friends")) 
   {
    return "I will be very happy if you wanted to be my friend 😍";
  }
  else if (userInput.toLowerCase().includes("shy") || userInput.toLowerCase().includes("shyness")) 
   {
    return "Do you feel often?";
  }
  else if (userInput.toLowerCase().includes("angry") || userInput.toLowerCase().includes("angryness")) 
   {
    return "Do you feel happy when you are in anger?";
  }
  else if (userInput.toLowerCase().includes("then") || userInput.toLowerCase().includes("after")) 
   {
    return "If you believe in yours, you can do it.";
  }
  else if (userInput.toLowerCase().includes("recall")) {
    return recallQuestions();
  } else if (userInput.toLowerCase().includes("keyword")) {
    // Handle keyword action or response here
    return "Keyword detected! Triggering keyword action or response.";
  } else {
    return "I'm sorry, I didn't understand that. Could you please rephrase or ask another question?";
  }
}

// Function to recall recent user questions
function recallQuestions() {
  if (chatBot.chatLog.length === 0) {
    return "No recent questions found.";
  }

  var recallCount = Math.min(chatBot.recallCount, chatBot.chatLog.length);
  var response = "Recent questions:\n";

  for (var i = chatBot.chatLog.length - 1; i >= chatBot.chatLog.length - recallCount; i--) {
    response += "- " + chatBot.chatLog[i] + "\n";
  }

  return response;
}

// Function to simulate typing effect
function simulateTyping(callback) {
  var typingDelay = 500; // Adjust typing delay before response (in milliseconds)
  var chatLog = document.getElementById("chatLog");
  var typingMessage = document.createElement("p");
  typingMessage.className = "typing-animation";
  typingMessage.textContent = "ChatBot is typing...";

  chatLog.appendChild(typingMessage);
  chatLog.scrollTop = chatLog.scrollHeight;

  setTimeout(function() {
    chatLog.removeChild(typingMessage);
    callback();
  }, typingDelay);
}

// CSS styles for the typing animation
var styles = `
.typing-animation {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s linear;
}
`;

// Inject the CSS styles into the document
var styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// Function to display a message in the chat log
function displayMessage(message) {
  var chatLog = document.getElementById("chatLog");
  chatLog.innerHTML += "<p>" + message + "</p>";
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to disable the chat input field
function disableChat() {
  document.getElementById("userInput").disabled = true;
}
    
    var chatHistory = [];
function displayMessage(message) {
  var chatLog = document.getElementById("chatLog");
  chatLog.innerHTML += "<p>" + message + "</p>";
  chatLog.scrollTop = chatLog.scrollHeight;

  // Add the message to chat history
  chatHistory.push(message);
}
function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  var time = hours + ":" + minutes;
  return time;
}
function displayMessage(message) {
  var time = getCurrentTime();
  var chatLog = document.getElementById("chatLog");
  chatLog.innerHTML += "<p><span class='timestamp'>[" + time + "]</span> " + message + "</p>";
  chatLog.scrollTop = chatLog.scrollHeight;

  // Add the message to chat history
  chatHistory.push("[" + time + "] " + message);
}
// Function to view chat history
function viewChatHistory() {
  var chatLog = document.getElementById("chatLog");
  var chatHistory = chatBot.chatLog.join("\n");

  if (chatHistory !== "") {
    alert("Chat History:\n\n" + chatHistory);
  } else {
    alert("No chat history available.");
  }
}

function clearChatLog() {
  var chatLog = document.getElementById("chatLog");
  chatLog.innerHTML = "";
  chatHistory = [];
}
function recallQuestions() {
  if (chatHistory.length === 0) {
    return "No recent questions found.";
  }

  var recallCount = Math.min(chatBot.recallCount, chatHistory.length);
  var response = "Recent questions:\n";

  for (var i = chatHistory.length - 1; i >= chatHistory.length - recallCount; i--) {
    response += "- " + chatHistory[i] + "\n";
  }

  return response;
}
function displayGreeting() {
  var greetingMessage = "Welcome! How can I assist you?";
  var typingDelay = 100; // Adjust typing delay for the greeting message (in milliseconds)
  var chatLog = document.getElementById("chatLog");
  var typingMessage = document.createElement("p");
  typingMessage.className = "typing-animation";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < greetingMessage.length) {
      typingMessage.textContent += greetingMessage.charAt(i);
      chatLog.scrollTop = chatLog.scrollHeight;
      i++;
    } else {
      clearInterval(timer);
    }
  }, typingDelay);
  
  chatLog.appendChild(typingMessage);
  chatLog.scrollTop = chatLog.scrollHeight;
}
function simulateTyping(callback) {
  var typingDelay = 1000; // Adjust typing delay before response (in milliseconds)
  var chatLog = document.getElementById("chatLog");
  var typingMessage = document.createElement("p");
  typingMessage.className = "typing-animation";
  typingMessage.textContent = "ChatBot is typing...";

  chatLog.appendChild(typingMessage);
  chatLog.scrollTop = chatLog.scrollHeight;

  setTimeout(function() {
    chatLog.removeChild(typingMessage);
    callback();
  }, typingDelay);
}
window.onload = function() {
  displayGreeting();
};
// Function to handle the user pressing enter in the input field
    document.getElementById('userInput').addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
