# Mac (OsX) installation instructions
Note: anytime you see the $, that means we are referring to something to type in your terminal.

## Code Editor
Visual Studio Code There are many editors out there we can use. Sublime is one, TextMate is another, but our editor of choice for this course is Visual Studio Code. It is brought to us by the good people of Microsoft and comes with over 3000 extension packages - all open sourced.

1. [Download](https://code.visualstudio.com/download) Visual Studio Code for Mac.
2. Double-click on the downloaded archive to expand the contents.
3. Drag Visual Studio Code.app to the Applications folder, making it available in the Launchpad.
4. Add VS Code to your Dock by right-clicking on the icon and choosing Options Keep in Doc.

After installing the VS Code, we can also configure the code to open from a command line, and it is pretty darn easy for us to do that. 1. Launch VS Code. 2. Open the Command Palette (⇧⌘P) and type ‘shell command‘ to find the Shell Command: Install ‘code’ command in PATH command.

## Node
Node.js is a JavaScript runtime environment for executing JavaScript code server-side. We will make use of a number of packages throughout the camp that rely on Node.js. To install those packages, we will need npm (Node Package Manager) which is distributed with Node.js installation. 

Execute the following command in your terminal to install Node.js:

```
$ brew install node
```

Check that you have node and npm installed To check if you have Node.js installed, run this command in your terminal:

```
$ node -v
v11.6.0  # <== You should get an output similar to this
```

To confirm that you have npm installed you can run this command in your terminal:

```
$ npm -v
6.5.0 # <== You should get an output similar to this
```

## Vue CLI
Vue CLI will set up the project for you. Install it by running this in your command:

```
$ npm install -g @vue/cli
```

## GIT
Git is a version control system that we'll be using extensively during the course. Version Control lets you track your files, changes and avoid general chaos over time.

With Homebrew, installing Git is easy:

```
$ brew install git
```
And verify your installation:

```
$ git --version
git version 2.13.2
```

Next, let's tell git who we are. your_name should be replaced with your name.

```
$ git config --global user.name "Your name"
    # Sets the default name for git to use when you commit
$ git config --global user.email "your@email.com"
    # Sets the default email for git to use when you commit
```
Now, you are ready to use Git.

## GIT AUTOCOMPLETE
Install bash-completion:

```
$ brew install bash-completion
```
Add bash-completion to the file: ~/.bash_profile.

```
$ code ~/.bash_profile
```
Inside of the file that opens up inside of VS code, put:

```
# ~/.bash_profile
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
```

* Note that when we use a # we are referring to the file where we want to put code. You will _not_ type # ~/.bash_profile into your command line.*

The code you just added allows us to tab-complete folders and commands inside of git. This will be a huge time-saver later.

## TERMINAL PROMPT
When you work with git and version control it is a good idea to set up your prompt that displays some useful information such as:

What branch are you currently on What is your current status compared to your GitHub repository (origin) There is a very nice modification made available on GitHub called Bash Git Prompt. You an install it using Homebrew with these steps:

```
$ brew install bash-git-prompt
```
Once the installation is complete, you need to open the .bash_profile file:

```
$ code ~/.bash_profile
```
Now add the following configuration at the bottom of the file (do not delete the lines we added above) and save.

```
# ~/.bash_profile
if [ -f "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh" ]; then
    export __GIT_PROMPT_DIR="$(brew --prefix bash-git-prompt)/share/"
    source "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh"
fi
```
Once you save and close .bash_profile, you can close the text editor and go back to your terminal and reload the file to make the changes you've made visible.:

```
$ source ~/.bash_profile
```
Your terminal prompt will now show a lot more useful information that will help you in your coding.

That's it!
