# Simple 3-Page Website
m-leatherman.github.io

## Project Overview
This is a simple, multi-page website using HTML, CSS, and JavaScript. I built this project to understand how websites are put together under the hood.

## How It Is Organized
I kept the setup as simple as possible. All of the files live in the exact same folder. Because they sit right next to each other, they can link together easily and the website runs very fast.

## How The Pieces Work Together

### 1. HTML (The Structure)
I built three pages (`index.html`, `about.html`, and `contact.html`) to act as the skeleton of the site. 
* I included a mock contact form and a clickable button.
* I programmed the contact form so it won't accidentally try to send real data anywhere. It just acts as a placeholder to practice with.

### 2. CSS (The Design)
Instead of styling each page one by one, I created one master design file called `style.css`. All three of my web pages look at this single file for their colors and layout. This means if I ever want to change the background color of the whole website, I only have to update it in one place.

### 3. JavaScript (The Interactivity)
The JavaScript (`script.js`) makes the buttons actually work. The most important part of my script is that it tells the browser to wait until the web page is 100% finished loading before it turns on. This prevents the code from breaking, and allows my pop-up alerts to work smoothly when someone clicks a button.
