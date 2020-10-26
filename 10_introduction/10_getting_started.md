# Getting started

Vue is a progressive javascript framework that is mostly used for building user interfaces. It enables easy creation of powerful single page applications. Vue features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library focus on the view layer only. Advanced features required for complex applications such as routing, state management and build tools offered via officially maintained supporting libraries and packages.

Vue was created by Evan You after working for Google using AngularJS in a number of projects. He later summed up his thought process: "I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight.".

Vue combined with its tooling forms a framework that changes how we write code for the web. Vue is a library that provides functionality, while tooling such as [Webpack](https://webpack.js.org/) enables us to component based code to make it easier for us to interact with the Vue library. Babel is a transpiler tool that works together with Webpack. Babel takes this altered code and transpiles it to native javascript code that the browser understand.

During this course we'll be creating a Vue project using the Vue CLI tool to generate the boilerplate for our Vue app. This will save us a lot of time that we would need to spend on setting up Webpack configuration.

We will set up our application using three tools - a package manager, a bundler and a compiler.
* A package manager lets you install or update third-party packages and dependencies.
* A bundler lets you write modular code and bundle it together into small packages to optimize load time.
* A compiler lets you write modern JavaScript code that will still work in older browsers.

## Practicals

The only prerequisites for following along with this course, is that you need to know relatively basic JavaScript (ES6), HTML and CSS and feel comfortable in your terminal as well as in the Developer Tools of your browser. We recommend that you use Chrome, as most of the screenshots we have included in these materials are from that browser.

This is NOT a read-only kind of course. As with everything else related to programming, you need to actually DO all the exercises and write code. Writing code on your own is the only way you will learn to code.

Read the text sections and follow along with the pre-recorded coding demos carefully. Each section will have a coach-led session where we will be doing some coding, solving issues and do Q&A's.

The prime objective of this course is to get a basic understanding of the Vue library and secondly to finish the coding challenge and produce a quiz app.

A word of caution, do not get too caught up in the styling of your quiz. It's a slippery slope and can lead to many hours of hunting for that pixel-perfect solution. I'm talking from my own experience. I've bitten off more than I could chew on many occasions in my career and if anything, working on CSS has cost me hundreds of hours of my life. I am not saying that you should ignore the look and feel of your application. Not at all. What I'm saying is that it's a matter of priorities - you are taking this course to learn the basics of React. Not to build a killer-app.

All code that we're going to write will be in a GitHub repo that we created for this course, so you can easily follow along. Please check the course notes for a link.

## The setup

Start by opening your terminal and go to the folder that you want to put your project folder in. This folder could be `/workspace` for example. Create your Vue app by running the following command:

```
$ vue create quiz
```

Select to create with manually selected features
```
Vue CLI v4.5.6
┌─────────────────────────────────────────────┐
│                                             │
│     New version available 4.5.6 → 4.5.8     │
│   Run yarn global add @vue/cli to update!   │
│                                             │
└─────────────────────────────────────────────┘

? Please pick a preset:
  Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
❯ Manually select features
```

Add Router and Vuex to the selection
```
? Please pick a preset: Manually select features
? Check the features needed for your project: 
 ◉ Choose Vue version
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

Select 3.x (Preview) for Vue version
```
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 
  2.x
❯ 3.x (Preview)
```

Click enter for history mode (Y)
```
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
```

Select ESLint with error prevention only. If you want a more strict code formatting you can select ESLint + Airbnb config
Then the 
```
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config:
❯ ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
```

Pick Lint on Save. This means that if we have invalid formatting in our code, it will autocorrect the mistakes when we save the file. 
```
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Basic
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
```

Dedicated config files. This will separate webpack and vue configuration away from your package.json. It's good to have 
separation of concerns. package.json file will get huge with configuration and could be hard to understand.
```
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json
```

Now the project will be setup in the folder `/workspace/quiz`. Once it's complete you should enter your quiz folder and run the command

```
$ npm run serve
```

The `npm run serve` will start a web server with [Hot reloading](https://vue-loader.vuejs.org/guide/hot-reload.html#hot-reload) enabled. Hot reloading listen to file changes and update the app live when a file changes. It's very handy for fast live development in the browser.

If you enter the URL `http://localhost:8080` into your browser you should be presented with the Vue standard app!

![Standard Vue App](XX_assets/10_standard_vue_app.PNG?raw=true "Standard Vue App")

The possible commands you can run in the projects are.

| Command | Description |
|---|---|
| `npm run serve` | Starts a development server with hot reloading enabled, and serves the files in runtime |
| `npm run build` | Transpiles and builds the files into `/dist` folder. These files should be served from a webserver when the app is going into production |
| `npm run lint` | Looks for lint errors |

