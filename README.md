#lastfm-angular

Angular POC with last.fm's APIs.

To run this project, you need to have the following installed globally:

* Ruby & Compass
* Node & NPM
* Grunt & Grunt CLI (Command Line Interface)
* Bower

## Global Installs

###Ruby Installation

If you are on Mac OS X, Ruby is already installed. If you are on Windows, go here:
[RubyInstaller for Windows](http://rubyinstaller.org/)

### Compass Installation
[Compass Install](http://compass-style.org/install/)
```bash
sudo gem update --system
sudo gem install compass
```
###Node Installation
[How to install Node](http://howtonode.org/how-to-install-nodejs)

###NPM Installation
[Intro to NPM](http://howtonode.org/introduction-to-npm)
```bash
curl http://npmjs.org/install.sh | sh
```
###Grunt & Grunt CLI Installation
```bash
sudo npm install -g grunt
```
```bash
sudo npm install -g grunt-cli
```

###Bower Installation
```bash
sudo npm install -g bower
```

##Local Installs
Before running the project you need to install the local npm and bower packages.
To do this run the following:
```bash
npm install
```
```bash
bower install
```

## Run Project
```bash
grunt serve
```

## Run Tests
```bash
grunt test
```

*There are other tasks you can do with Grunt. Refer to `Gruntfile.js`.*
