# StockPrice-App
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
Minimal configuration of .travis.yml for this app:<br>
![](assets/yml.jpg){:height="60%" width="60%"}<br>
Travis also looks for a package.json file, downloads all the modules listed in devDependencies and runs specified scripts.<br>
The package.json tells Travis to run jshint on our script.js file. 
jshint is a program that analysis code quality<br>
This is the example of Travis CI log after failed test and build<br>
![](assets/travis-log-failed.jpg){:height="60%" width="60%"}<br>
Travis deploys the app to gh-pages only after a successfull test and build.<br>


https://tatianaazulay.github.io/StockPrice-App/<br>
<br>
![](assets/Untitled.png)
