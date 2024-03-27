# Financely

## A financial tool for monitoring and tracking spending/saving trends across all connected accounts.

### Project Details:
- 
-
-

### Use Instructions:
- Install all dependencies by running `npm install`
- 

### Repository Outline:
<pre>
<b>FINANCELY/<b>
├── .vscode/
│   └── launch.json         #For debugging in a chrome browser using node.js
├── public/
│   ├── favicon.jpg
│   └── index.html          #Creates the base html file that the js files build from
├── src/
│   ├── components/         #Reusable components for pages
│   │   ├── feature-card.css
│   │   ├── feature-card.js
│   │   ├── question-container.css
│   │   └── question-card.js
│   ├── views/              #Pages and their corresponding style files
│   │   ├── about.css
│   │   ├── about.js
│   │   ├── contact.css
│   │   ├── contact.js
│   │   ├── features.css
│   │   ├── features.js
│   │   ├── home.css
│   │   ├── home.js
│   │   ├── login.css
│   │   ├── login.js
│   │   ├── not-found.css
│   │   ├── not-found.js
│   │   ├── register.css
│   │   └── register.js
│   ├── index.js            #Renders the project
│   └── style.css           #Main styling file
├── .gitignore
├── .env                    #Contains special information like the db password and secret keys
├── craco.config.js         #Turns off webpack url processing
├── package-lock.json
├── package.json            #Specifies the program dependencies
└── README.md
<pre>