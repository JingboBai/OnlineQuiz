Author: Jingbo Bai

How I realize my Application Quiz:

1.For the style of this application, I try to use the different backgrounds  to different subject. And opaque the background to make the works looks more clear.

2.The timer is realized by SetInterval.

3.There are counters for total ,correct and incorrect answers and the results will shown as “Question #” ,”correct” and   “Incorrect”.

4.There are 5 subjects of question and the questions are stored in Question.js and I use JSON to differentiate  answer and question.

5.In terms of tracking date. I store the date to local storage of HTML, which is a very useful feature  that can store data in web browser.  Each time I open this page, it will get the old date from local storage and compare it with the new date. If the date is different, the subject will change randomly.

6.The randomsort function is a function to shuffle the question and subject we put into it.  This method can make sure that the same question and subject won’t  appear more than once in a cycle.

7.When we stop the quiz, the content will hidden and timer will stop. It will show when we resume.

8.There are multiple questions and type-in questions. I store them in same way(JSON) and the way to distinguish them is check whether there is an “choice” content in the question.