# Financely (Work In Progress)

## A financial tool for connecting all banking accounts to one dashboard for easy tracking and monitoring of funds.

### Project Goals:
-
-
-

### Project Details:
- I am currently working on creating the main pages prior to a user signing in. Its mostly Frontend work. I plan to work onbackend services for the user signin and registration soon.
<br><sub>Last updated: 27May2024</sub>

### Use Instructions:
- Install all dependencies by running: `npm install`
- To run the project, type the following command: `npm run start`
- The Project will open on http://localhost:3000/

### Repository Outline:
<pre>
<b>FINANCELY/<b>
├── .vscode/
│   └── launch.json         # For debugging in a chrome browser using node.js
├── public/
│   ├── favicon.jpg
│   └── index.html          # Creates the base html file that the js files build from
├── src/
│   ├── components/         # Reusable components for pages
│   │   ├── feature-card.css
│   │   ├── feature-card.js
│   │   ├── page-footer.js
│   │   ├── page-header-footer.css
│   │   ├── page-header.js
│   │   ├── question-container.css
│   │   └── question-card.js
│   ├── views/              # Pages and their corresponding style files
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
│   ├── index.js            # Renders the project
│   └── style.css           # Main styling file
├── .gitignore
├── .env                    # Contains special information like the db password and secret keys
├── craco.config.js         # Turns off webpack url processing
├── package-lock.json
├── package.json            # Specifies the program dependencies
└── README.md
<pre>
