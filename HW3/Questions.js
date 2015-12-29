//Author: Jingbo Bai

//Questions Data
var mathQuestions = [
  {"question": "What is 5 + 5?", "answer": "10" },
  {"question": "What is 10 + 4?", "ch1":"12", "ch2": "14", "ch3":  "16", "answer": "B" },
	{"question": "What is 20 - 9?","ch1": "7",  "ch2": "13","ch3": "11",  "answer": "C" },
	{"question": "What is 7 x 3?","ch1": "21",  "ch2": "24","ch3": "25", "answer": "A" },
	{"question": "What is 8 / 2?", "ch1":"10",  "ch2": "2", "ch3":"4", "answer": "C" },
  {"question": "What is 7 x 3?","ch1": "21",  "ch2": "24","ch3": "25", "answer": "A" },
  {"question": "What is 4x 3?","ch1": "12",  "ch2": "24","ch3": "25", "answer": "A" },
  {"question": "What is 2 x 3?","ch1": "21",  "ch2": "24","ch3": "6", "answer": "C" },
  {"question": "What is 30x 3?","ch1": "21",  "ch2": "90","ch3": "25", "answer": "B" },
  {"question": "What is 17 x 3?","ch1": "51",  "ch2": "24","ch3": "25", "answer": "A" },
  {"question": "What is 8 + 7?", "answer": "15" }
];

var physicQuestions = [
  {"question": "When light bends as it enters a different medium the process is known as what?", "answer":"Refraction"},
  {"question": "A magnifying glass is what type of lens?", "answer":"Convex"},
  {"question": "Metals expand when heated and do what when cooled?","ch1":"expand","ch2":"contract","ch3":"nothing", "answer":"B"},
  {"question": "What is the first name of the famous scientist who gave us Newton’s three laws of motion?", "answer":"Isaac"},
  {"question": "Electric power is typically measured in what units?", "answer":"Watts"},
  {"question": "The most recognized model of how the universe begun is known as the?","ch1":"Big bang","ch2":"Black hole","ch3":"Jesus created","answer":"A"},
  {"question": "Who is the Hubble Space Telescope named after?","answer":"Edwin Hubble"},
  {"question": "The wire inside an electric bulb is known as the what?","answer":"Filament"},
  {"question": "Iron is attracted by magnets.(True or false)","ch1":"Ture","ch2":"False","ch3":"Depends on situation","answer":"A"},
  {"question": "Electric resistance is typically measured in what units?", "ch1":"Ohms", "ch2": "Ampere","ch3":"Watts", "answer":"A"}
];
var celebrityQuestions =[
  {"question": "Paul O'Grady was originally famous for his drag appearances as who?", "answer":"Lilly Savage"},
  {"question": "Which actor/writer presented the Crystal Maze and also wrote the Rocky Horror Picture Show?", "ch1":"Richard O’Brien","ch2":"John Connor","ch3":"George Michael","answer":"A"},
  {"question": "Who is Calvin Broadus better known as?","ch1":"Harry Jackson","ch2":"Mike Dogg","ch3":"Snoop Dogg", "answer":"C"},
  {"question": "Which pop star was arrested in 1998 for 'engaging in a lewd act' in a public toilet in California?", "answer":"George Michael"},
  {"question": "What was Uri Gellar famous for?", "answer":"Bending Spoons"},
  {"question": "Tom Cruise is an outspoken member of which religion?","answer":"Scientology"},
  {"question": "Which pop singer married British movie director Guy Ritchie?","answer":"Madonna"},
  {"question": "Who was David Beckham's alleged mistress?","answer":"Rebecca Loos"},
  {"question": "What is Brad Pitt's real full name?","ch1":"Williams Bradley Pitt","ch2":"William Bradley Pitt","ch3":"Henry Bradley Pitt","answer":"B"},
  {"question": "What was the name of magician Paul Daniels' assistant and wife?", "ch1":"Debbie McGee", "ch2": "Daisy McGee","ch3":"Danni McGee", "answer":"A"}
];

var presidentsQuestions =[
  {"question": "Who revealed that the U.S. had a hydrogen bomb in his last State of the Union speech?", "answer":"Harry S. Truman"},
  {"question": "What future anchor was the only female reporter to tag along with Richard Nixon on his historic trip to China?", "answer":"Barbara Walters"},
  {"question": "What First Lady of the 1980s was shocked to find 'a tremendous rat' swimming with her in the White House Pool?","ch1":"Barbara Bush","ch2":"Barbara Clinton","ch3":"Dianna Bush", "answer":"A"},
  {"question": "What U.S. president installed solar panels on the White House roof?", "answer":"Jimmy Carter"},
  {"question": "What card game did Dwight D. Eisenhower play fanatically while planning for D-Day?", "answer":"Bridge"},
  {"question": "What day does the U.S. president traditionally deliver a weekly radio address?","answer":"Saturday"},
  {"question": "What portly U.S. president was the first to be a golf nut?","answer":"William Howard Taft"},
  {"question": "How many U.S. states are named after a president?","ch1":" 1", "ch2": "2","ch3":"3","answer":"A"},
  {"question": "What U.S. president threw out the most Opening Day baseballs?","ch1":"Roosevelt","ch2":"Bush","ch3":"Regan","answer":"A"},
  {"question": "What date saw FDR sign the U.S. declaration of war against Japan?", "ch1":" Dec. 8, 1941", "ch2": "Dec. 8, 1946","ch3":"Dec. 18, 1941", "answer":"A"}
];
var geographyQuestions =[
  {"question": "How many Oceans border the United States?", "ch1":" 1", "ch2": "2","ch3":"3","answer":"C"},
  {"question": "Which country was previously called Abyssinia?", "answer":"Ethiopia"},
  {"question": "What language do the locals speak in Bogota?","ch1":"English","ch2":"Spanish","ch3":"Chinese", "answer":"B"},
  {"question": "What is the world's third largest sea?", "answer":"Mediterranean"},
  {"question": "Which country at the southern tip of the Arabian Peninsula was previously known as Aden?", "answer":"Yemen"},
  {"question": "Where are the North Yolla Bolly mountains?","answer":"California"},
  {"question": "What is the capital of Qatar?","answer":"What is the capital of Qatar"},
  {"question": "Which is the least populated state in the USA?","answer":"Wyoming"},
  {"question": "Which country has the internet domain .me?","ch1":"Montenegro","ch2":"Panama","ch3":"Montery","answer":"A"},
  {"question": "What's the most southerly city of below?", "ch1":"Toronto", "ch2": "Seattle","ch3":"Budapest", "answer":"A"}
];
