# to run the site using the http-server run the following in command line
npm start

# to stop the server Ctrl + C

# for using Babel you need to run the following in the command line

npm install babel-cli --save-dev

npm install babel-preset-es2015 --save-dev

# to run babel run the following from command line. this will grab anything in js directory and output transpiled files to the build directory.

./node_modules/.bin/babel js --presets es2015 --out-dir build 