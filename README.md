Live site:
deaddrop.herokuapp.com

Group members: Mills McIlroy & Jon Hammond

DEAD DROP
--------
***Leave anything, anywhere, for anybody.***

**Who uses it?**   
Anybody who wants to leave a physical item for someone else without meeting directly. Drop off the item anywhere to be picked up later by someone else. 

**How does it work?**  
The app features an interactive map that allows the user to place a pin at the item’s location and upload an image and optional description of the item.  

After the user clicks submit, the pin is publicly visible to all users of the app. When the pin is clicked, it expands to display the image and description of the item as well as the username of the user who placed it. When the item is picked up, the receiving user marks the pin as “picked-up” and is encouraged to upload an image of them in possession of the item. The picked-up pin then appears red on the map to indicate it is already picked up and when clicked will display the username of the user who picked it up as well as their uploaded photo. The first person to find the item gets it--the user has no control over who will find their pin first.

Our stretch goal is to add an option for the user to place a private pin that can only be viewed by inputting a secret code that is randomly generated at the time of pin placement. This private pin will only be visible to users who are given the code by the original user who placed the pin. We would also consider encrypting the item's coordinates so they are not visible to admins on the back end.

In order to see the interactive map and pick up and place pins, users will have to create an account and login. The user account will keep track of all pins the user has placed and picked up. The user will be able to edit or remove the pins that they have placed if they have not yet been picked up. There will be a hierarchical ranking system for users. The more pins a user places, the more ranking points he or she gets. Users that pick up pins will also be awarded ranking points for each verified pick up. A verified pick up requires uploaded photo proof at the time of pick up. Users will also have the option to flag a pin as "missing" if they are unable to find the item but it still shows up as active on the map. Admin users will have the additional ability to ban users and remove pins at will.

**Workflow**  
We followed the Agile methodology in our workflow. Mills handled database creation and most of the map, pin drop, and pick-up logic and Jon handled the front end styling, routes, views, and user authentication & authorization. We did not get to our goal of image upload using amazon s3 storage. We plan to get this implemented in the future.

**A list of technologies we use, or plan to use in the future as the app is further developed:**  
Google Maps API    
JavaScript 
Passport  
PostgreSQL  
Knex.js  
HTML5  
Javascript  
JQuery  
CSS  
Bootstrap  
Heroku  
AWS Simple Storage Service (future)
