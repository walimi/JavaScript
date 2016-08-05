# browserify works only with CommonJS therefore i had to create a new branch from an older commit. 

# to install browserify, run the following in command line
npm install browserify --save-dev


# to run the browserify run the following command. this command will start at the app.js file and create the dependency chain. it will then bundle the files and put it in the bundle.js file.  
./node_modules/.bin/browserify js/app.js --outfile build/bundle.js