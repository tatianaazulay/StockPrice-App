# StockPrice-App-Auto-deploying-to-gh-pages-with-Travis-CI
This is a small application that prompts you to "Enter Stock Symbol". 
The app retrieves and displays the stock price and some company info for that stock. <br>
This includes short company description, stock score, and the logo of the company.<br>
API used <br>
https://financialmodelingprep.com/developer/docs/<br>
Examples of Stock Symbols are displayed on the html page, they are retrieved from this API end point https://financialmodelingprep.com/api/v3/company/stock/list .<br>
The Web app is split into HTML, CSS and JavaScript +jQuery<br>
<br>
<strong>Continuous integration with Travis CI</strong><br>
Travis automatically scans the repo and looks for the .travis.yml file which informs travis this is a node.js app.<br>
Minimal configuration of .travis.yml for StockPrice-App:<br>
<a href="url"><img src="https://github.com/tatianaazulay/StockPrice-App/blob/master/assets/yml.jpg" width="60%" ></a><br>
Travis also looks for a package.json file, downloads all the modules listed in devDependencies and runs specified scripts.<br>
The package.json tells Travis to run jshint on our script.js file.<br>
jshint is a tool to analyze js code quality.<br>
This is an example of Travis CI log after the test has failed (js code errors were inserted intentionally):<br>
![](assets/travis-log-failed.jpg)<br>
This is an example of Travis CI log after the test and build have completed successfully:<br>
![](assets/travis-log-success.jpg)<br>
Travis CI automatically deploys the app to gh-pages only after the test and build have completed successfully.<br>
<bold>Deployed@:</bold><br>
https://tatianaazulay.github.io/StockPrice-App/<br>
<br>
![](assets/Untitled.png)
