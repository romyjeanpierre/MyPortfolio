# Live Portfolio


## About The Project
I have created a responsive React portfolio website using Tailwind CSS, Javascript, HTML and a few dependencies ( inspired by [Code Commerce](https://www.youtube.com/watch?v=2kg0z1qNrkw&t=283s) ). I used react smooth scroll to get a smooth scroll to the different sections of the page by simply clicking on the the navigation bar components. 


### Built With
* This project was bootstrapped with Create React App.
* [HTML] [index.html](https://github.com/romyjeanpierre/labs-HW/blob/main/Connect-4/index.html)
* [CSS] [style.css](https://github.com/romyjeanpierre/labs-HW/blob/main/Connect-4/style.css)
* [JavaScript] [script.js](https://github.com/romyjeanpierre/labs-HW/blob/main/Connect-4/script.js)
* [Visual Studio Code] [VS Code](https://code.visualstudio.com/)
* [Tailwind CSS] [Tailwind CSS](https://tailwindcss.com/)


### Prerequisites

* JavaScript, HTML and CSS
* knowledge of React, Fetch & UseEffect to make a request to an API 

## Implementation

### Create and Install  
* Create a React App using npx create-react-app 
* Install Tailwind CSS  - installation instructions can be found here 👉🏾 https://tailwindcss.com/docs/installation
* Install react-icons to import icons to the project. Installed using npm install react-icons. Installation instructions can be found  here 👉🏾 https://www.npmjs.com/package/react-icons
* Install react-scroll for smooth scrolling when clicking on a button in the Navigation bar and being instantly taken to a selected part of the same page. Installed using npm i -S react-scroll. Installation instructions can be found here 👉🏾 https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
* Install ES7+React/Redux/React-Native snippets extension 


### Set Up Structure of App 📁
* Add resume pdf file to public folder 
* Inside the scr folder, create: 
>      🔹assets folder 
>      🔹components folder 

🟣 Inside the assets folder add the following: 
>      🔹All images to be displayed in the Home and TechnicalSkills pages 

🟣 Inside the components folder, create the following files 📂: 
>      🔹About.js
>      🔹Contact.js
>      🔹Home.js
>      🔹NavBar.js
>      🔹Quotes.js
>      🔹SocialBar.js
>      🔹TechnicalSkills.js 

🟣 Inside the index.css file, import google fonts you want from the following site: https://fonts.google.com/. ---> @import url('url of font chosen'). Then Extend the tailwind.config.js with the font-family config so the font can be used throughout the app 



🟣 NavBar.js:
* Import the following:
>      🔹NavBar from components/NavBar in App.js 
>      🔹React {useState} from react 
>      🔹icons from icon libraries in React-icons page with specific pretext
>      🔹import react-scroll package  

* Add className to the div for NavBar - fixed so navBar will not move when scrolling; height and width; space in between items in the NavBar; color gradient from left to right. 

* Create a second div for the signature then an h1 with a className for the signature --> add some styling --> text size; font style that was imported from google fonts page; text color; shadow color when you hover on the signature. 
* create an array for links. Within the array, add 5 objects then add two properties to each object  --> id and link. Create an object for home, about, portfolio, technical skills and contact.
* use destructuring to map over the links 
* create a div for mobile menu bar with a className 
*add useState, import it and add an onclick to change the state. setNav to opposite of the  state and render element  - if the 




## Additional features to be added
    - Add more projects along with demo and code 
    - click on a langue that will take the user to a project that reflects my usage of the language selected

### Contact

[Romy Jean-Pierre](romyjeanpierre@yahoo.com) - romyjeanpierre@yahoo.com

Github Link: [My Portfolio](https://github.com/romyjeanpierre/MyPortfolio)



## Acknowledgments

* [create-react-app]( https://github.com/facebook/create-react-app) 
* [README Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md?plain=1)
* [Tailwind CSS](https://tailwindcss.com/docs/installation)
* [React-Icons](https://react-icons.github.io/react-icons/search)
* [How to use react-icons to install Font Awesome in a React app](https://www.freecodecamp.org/news/how-to-use-react-icons/)
* [React Dev](https://morioh.com/a/169b9b03adbe/build-a-react-js-portfolio-website-using-react-and-tailwind-css)
* [Social Network for Programmers and Developers](https://morioh.com/)
* [Google Fonts](https://fonts.google.com/?query=script)
* [React Scroll](https://www.npmjs.com/package/react-scroll)
* [Smart Form](https://getform.io/)
* [Rapid API Hub](https://rapidapi.com/ipworld/api/quotes-inspirational-quotes-motivational-quotes)
* [How to use the Fetch API with React?](https://rapidapi.com/guides/fetch-api-react)
* [Introduction to Tailwind CSS](https://www.geeksforgeeks.org/introduction-to-tailwind-css/)
* [How to Use Tailwind CSS to Rapidly Develop Snazzy Websites](https://kinsta.com/blog/tailwind-css/)
* [Tailwind CSS Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)
* [Tailwind CSS Animated](https://www.tailwindcss-animated.com/)
* [React.js Examples](https://reactjsexample.com/reayhs-portfolio-page-using-react-and-tailwind-css/)
* [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [JavaScript Array map()](https://www.w3schools.com/jsref/jsref_map.asp)
* [React JS Portfolio Website Using Tailwind CSS - Build & Deploy](https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=973s)
* [Build a React Portfolio Website With Tailwind Tutorial](https://www.youtube.com/watch?v=k-Pi5ZMxHWY&t=2964s)
* [🔥 Build a REACT JS Portfolio Website Using Tailwind CSS - Get Hired!](https://www.youtube.com/watch?v=2kg0z1qNrkw&t=283s)
* [React Image](https://javascript.plainenglish.io/6-best-resources-for-learning-react-eb14c10fe512)
* [Github Image](https://www.pngmart.com/image/625689)
* [How to Import Google Fonts in CSS File](https://www.w3docs.com/snippets/css/how-to-import-google-fonts-in-css-file.html)
* [HOW TO USE GOOGLE FONTS IN TAILWIND CSS](https://hatchet.com.au/blog/how-to-use-google-fonts-in-tailwind-css/)
* [Get Form](https://getform.io/)


