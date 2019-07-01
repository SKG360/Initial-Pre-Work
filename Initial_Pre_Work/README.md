# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The first step that occurs when the website is reached is that an HTTP GET request is received by the domain name server (DNS). The DNS maps https://www.techtonic.com/ to an IP address.  The request is used to seek HTML, and other assets, such as images, music, video, Word documents, and PDFs. This message, and all other data sent between the client and the server, is sent across the internet connection using TCP/IP.
Further, the request has a header that has key information that lists properties like the version of HTTP, the exact page that is being sought, and other browser based information. The server will reply with an HTTP response that contains a similar header. This one will have information like the status code, server type, and the software running on the server itself.  Lastly, the browser receives packets in response and decrypts them into a website.

Reference:
How the Web Works
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works

## From start to finish, how does data reach you to be rendered in the browser?

When a universal resource locator (URL) is entered into the address bar, the computer will translate into a local file system path and check local host files to see if it can resolve the domain name. If this isn’t successful, the computer will reach out to a domain name system (DNS) to find the IP address associated with the domain name.

If the original DNS does not have the correct record, it will seek out another DNS to reference. When the client has the IP address, it sends an HTTP request to the server. The server will then respond with an HTTP response that is used by the browser to render the HTML.

If the requested page exists and no errors are encountered, the browser will send subsequent requests for objects embedded in HTML, like images, JavaScript, and CSS3. The responses from the server will allow the browser to load client-side assets. After rendering is complete, the server logs requests made by the client and the browser may send additional requests as it needs.

References:
How Web Browsers Work
https://www.webopedia.com/quick_ref/internet_browsers.asp
How browser rendering works — behind the scenes
https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/


## What code is rendered in the browser?

HTML, CSS, JavaScript, images, and videos are rendered by the browser.

Reference:
How browser rendering works — behind the scenes
https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10

## What is the server-side code’s main function?

The main function of the server-side code is to hold specific responses based on the request from the client side.

Reference: 
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is the client-side code’s main function?

Client-side code’s main function is to display dynamic web content and interface with the server. Client-side code can contain elements that allow for API requests as well as elements that structure and present a web page to the user.

Reference:
Client-side vs. Server-side
https://www.seguetech.com/client-server-side-code/

## What is runtime?

Runtime is when a program is running, or the execution of instructions as a program is running.

References: 
Runtime Definition
https://searchsoftwarequality.techtarget.com/definition/runtime
What is Runtime
https://stackoverflow.com/questions/3900549/what-is-runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance of each asset is created and cached. According to this Mozilla page, it is possible to store a copy of the HTML, CSS, and JavaScript files of a webpage at the client browser.  Accordingly, there is potential to create numerous instances of client side assets.

Reference:
Offline Asset Storage
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#Offline_asset_storage

## How many instances of the server-side code are available at any given time?

If there is a single server that is not getting much traffic, a single instance of server-side code may exist. For example, low traffic static page might only have one copy of the code it delivers, but multiple clients can access it.

In contrast, larger websites like Facebook or Amazon likely utilize multiple copies of the same code across many servers.   Additionally, servers usually store multiple versions in HTTP caches that exist between the clients and servers to reduce latency due to high traffic.  These high traffic sites may have numerous servers behind a load balancer.

References:
What is Load Balancing?  
https://www.nginx.com/resources/glossary/load-balancing/


## How many instances of the databases connected to the server application are created?

At least one instance of a database must be connected to the server application. Additionally,  a new instance can be created every time a CRUD (create, read, update, delete) function is implemented on the database.  Typically, only one instance of the database may be connected to a server, the database can have multiple concurrent connections. This can mean that simultaneous reads and writes may be occurring.

References:
Oracle Database Instance
https://docs.oracle.com/cd/E11882_01/server.112/e40540/startup.htm#CNCPT005
