# Udacity Nanodegree Project 4: Website Performance Optimization portfolio project

For this project, I had to optimize this online portfolio for speed by:
1. Optimizing the critical rendering path and making the homepage render as quickly as possible by applying techniques I learned in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).
2. Achieve a frame rate of 60fps for the pizza.html page using techniques I learned in the [Browser Rendering Optimization course](https://www.udacity.com/course/browser-rendering-optimization--ud860).

##How to Run the Application
You can access the application in a couple of ways:

1. Clone the GitHub repository at https://github.com/jbuechs/Udacity-Project-3-Frogger.git and open dist/index.html
2. Go to http://jbuechs.github.io/Udacity-Project-4-Website-Optimization/dist/

##Part 1: Optimizing PageSpeed Insights score for index.html

###Steps for optimizing

In order to optimize the speed for the homepage, I did the following:

1. Optimized the images by resizing and compressing
2. Made the non-critical JavaScript (js files, Google font script, Google analytics script) load asynchronously in order to not block the page rendering
3. Made the css inline in order to not block the page rendering
4. Created a gulp workflow that optimized the images and minified the HTML, CSS, JS files as well as the inline CSS and JavaScript. This output went to the distribution folder, dist

###Optimizing results

As a result of the changes I made, the webpage received a speed score of **94/100** for Mobile and **93/100** for desktop.

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
