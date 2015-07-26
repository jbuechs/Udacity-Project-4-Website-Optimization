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

##Part 2: Optimize Frames per Second in pizza.html

The pizza.html webpage was rendering at < 30fps for scrolling. Also, resizing the pizza on the slider took an average of > 200 ms.

####Optimizing the Scrolling

I made the following changes in order to optimize the scrolling:

1. In main.js, there was a loop that created 200 small moving pizzas in the background, which was an overkill because not all were displayed. I was able to cut that down to 21.
2. The updatePositions function had calculations within a loop that were redundant and could be moved outside of the loop.
3. The updatePositions function used the CSS left property to move the pizzas. By changing this to the CSS transform property, it no longer triggered layout or paint in the timeline.

####Optimizing the Pizza Resizing

I made the following changes to optimize the pizza resizing:

1. The changePizzaSlices function was using an inefficient selector to get all of the pizza elements. I changed it to select by element type and saved the elements in an array.
2. The changePizzaSlices had a very inefficient for loop. I moved some calculations out of the for loop.

These changes resulted in the resizing going from ~200 ms to < 5 ms.
