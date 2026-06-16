# m-leatherman.github.io
# Simple Static Web Application

## Project Overview
This is a static, multi-page web application built entirely with HTML, CSS, and vanilla JavaScript. I designed this as a practice environment for vulnerability scanning and to demonstrate a clear understanding of secure file linking and client-side web interactions.

## Architecture & File Structure
I kept the architecture intentionally simple. All of the files live in the same root directory. Because of this, I was able to use **relative paths** to link them all together natively, which makes the site incredibly fast and easy to maintain.

## Technology Stack & Implementation

### 1. HTML (Structure)
I built three static HTML pages (`index.html`, `about.html`, `contact.html`) to act as the skeleton of the site. 
* I utilized semantic tags like `<nav>` and `<main>` to ensure the code is highly readable. 
* To give vulnerability scanners tangible input areas to test, I integrated user-input elements, specifically a clickable `<button>` and a mock `<form>`.
* *Note:* The form utilizes `onsubmit="return false;"` to prevent the page from refreshing and attempting to send data to a non-existent backend, handing control safely to the JavaScript instead.

### 2. CSS (Styling)
Instead of relying on inline styling, I utilized a single **external stylesheet** (`style.css`). All three HTML pages link back to this centralized file. This ensures design consistency across the application and means global visual changes only require editing one line of code.

### 3. JavaScript (Interactivity)
The JavaScript (`script.js`) handles all client-side interactivity. The core of the script relies on a `DOMContentLoaded` event listener. This ensures the browser waits until the HTML DOM is fully constructed before executing any scripts, preventing load errors. Once loaded, it successfully captures user clicks and executes simulated actions via browser alerts.
