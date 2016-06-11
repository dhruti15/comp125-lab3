/**
 * FileName: app.js
 * 
 * @author Patel Dhruti
 * @date June 9, 2016
 * 
 * StudentID: 300857555
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    /**
     * This function uses the document.title to switch javascript function 
     * when the page switches
     * 
     * @function PageSwitcher
     * @returns {void}
     */
    function PageSwitcher() {
        switch (document.title) {
            case "Home":
                Home();
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }
    }
    
    /**
     * This function injects some text into the first paragraph of a page based on it's 
     * document.title property
     * 
     * @function InitialText
     * @returns {void}
     */
    function InitialText() {
        var paragraph = document.getElementsByTagName("p")[0];
        
        paragraph.textContent = "HELLO, welcome to comp125- client side web development.Web development is a broad term for the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications, electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development. Among web professionals, web development usually refers to the main non-design aspects of building web sites: writing markup and coding.";
    }
    
    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        InitialText();
        
        var firstPargraph = document.querySelectorAll("div.row p")[0];
        
       firstPargraph.style.color = "indigo";
    }
    
     /**
     * This function provides JavaScript code for the About page
     * 
     * @function About
     * @returns {void}
     */
    function About() {
        InitialText();
    }
    
     /**
     * This function provides JavaScript code for the Contact page
     * 
     * @function Contact
     * @returns {void}
     */
    function Contact() {
        
    }
    
     /**
     * This function provides JavaScript code for the Projects page
     * 
     * @function Projects
     * @returns {void}
     */
    function Projects() {
        InitialText();
    }

    
    window.addEventListener("load", PageSwitcher);
    
})();