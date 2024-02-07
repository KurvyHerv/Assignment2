# Animal Crossing

Our project, Animal Crossing, provides an immersive and delightful gaming experience inspired by the all time addictive mechanisms of "Candy Crush". Dive into a world filled with gentle creatures where players ranging from casual to competitive are able to journey through vibrant landscapes filleed with challenges. 

Whether you are a casual player for a quick pick-me-up to kill time or a seasoned puzzle enthusiast seeking a satistfying challenge. "Animal Crossing" offers a delectable blend of fun and excitement that will keep you coming back for more. 
 
## Design Process

The site's users include players of all ages and can range from casual and competive, that enjoy solving puzzles and strategically match their creatures to earn points and be part of the top 10 in the leaderboard. Some of the User Stories we thought of were;

- As a casual player, I want to be able to play a simple game that allows me to kill some time without any heavy commitments to the game.
- As a casual player, I want to play a game that allows me to think strategically and solve puzzles, so that I can have some fun.
- As a competive player, I want to play a game that allows me to take up a challenge, so that I can find satisfaction in solving puzzles.
- As a competitive player, I want to climb up the ranks, so that I have a sense of accomplishment.

During the design processs, we took into consideration of these aspects, that allows users of different ages and users of different competitive levels to enjoy the game. 

This is the link to the wireframe that aided us during our design process, a pdf version of our wireframe is available; 
https://www.figma.com/file/dqUgrKoYk9B6MAlqAfmQlg/FED-assignment-wireframe?type=design&node-id=0%3A1&mode=design&t=VdCgSXcjnasuS8Ei-1

## Features

In our project, some of the main features we included was;
1. A login page for players to log in.

2. A homepage which included the main menu for users to play the game, a leaderboard and lastly a section for players to find out more about us.

3. An account page for players to view their account details.

4. The game that requires players to clear lanes to earn points.
 
### Existing Features

- The login page allows users to create a new account if they do not have an existing account
- Players are able to use the search bar to find information of other players such as their username, rank and score
- The account page allows players to view their account information and change the available information such as their username and password.\
- The game requires players to just switch adjacent "creatures" to form rows or columns of three,four and five of the same colour, which gets disappeared from the board, allowing players to earn 10, 50 and 100 points respectively when these "creatures" are cleared
- For the game, there are 2 different game modes; Zen and Time trial. 
    - For Zen, this game mode is mostly for casual players. Using this game mode, there is no timer for players to play against. 
    - For Time trial, players are given 3 minutes to gain the most number of points. The points are then added to their current points and players are able to climb the ranks.

### Features Left to Implement

- Power ups to be made available when a certain criteria is met such as when four tiles in a row row or column is cleared. 
- Obstacles to make the game more challenging. 

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Firebase](https://firebase.google.com)
    - The project uses **Firebase** to host the database that this project uses
- [Bootstrap](https://getbootstrap.com)
    - The project uses **Bootstrap** to simplify website creation


## Testing

1. Account:
    1. Go to the "Account" page that is under the dropdown menu in the navigation bar under the username.
    2. View the available information.
    3. Change the necessary fields.
    4. The new information will be changed.

2. Login/Register:
    1. Click on "Log in"
    2. Enter username and password of existing account.
    3. If you do not have an existing account, you can create a new account by clicking on "Register".
    4. Enter a new username and password.
    5. If an existing username already exists, error message will be displayed. 
    6. After creating a new account, you are required to log in again.

3. Game (Time Trial):
    1. Go to the "Home" page.
    2. Click on "Time Trial" to enter game.
    3. Clear as many lanes as you can under the 3 minute limit.
    4. If you were to click on "Back" or leave the page while playing the game, a notification will appear to indicate that your progress and score will not be saved.
    5. If you used up all time given, an animation will appear to show that the game is over, and you will be redirected to the home page
    6. Check to see if your score has been added to your most recent score.

4. Game (Zen):
    1. Go to the "Home" page.
    2. Click on "Time Trial" to enter game.
    3. Clear as many lanes as you can with zero restrictions and no limitations.
    4. If you want to end game, you can simply click on the "Back" button to leave the game.
    5. None of the game progress, such as score, will be added to your current score.

5. Changes to navigation bar for mobile view:
    1. The links in the navigation bar will be moved into the hamburger menu.
    2. To access the "Account" page, click on the hamburger menu.
    3. Under the dropdown menu, with your username labeled on it, click on the dropdown menu.
    4. You are able to access the "Account" page.


You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

## Credits

### Content
- All the texts we made were original

### Media

- The photos I used for the game icons are from; 
    - https://lovesoup.gumroad.com/l/xtgvJQ

- The photos I used for the About-us icons;
    - https://play.google.com/store/apps/details?id=com.figma.mirror&hl=en_US&pli=1
    - https://www.flaticon.com/free-icon/github-logo_25231

- The photos I used for the background and button is from;
    - https://www.spoonflower.com/en/fabric/14383072-animal-crossing-inspired-leafes-small-by-grafikdesign-radler
    - https://froggychairr.tumblr.com/post/611575749045059584/acnh-desktop-wallpapers-requested-by-anon-feel

- The videos I used for the background is from;
    - https://mylivewallpapers.com/games/animal-crossing-live-wallpaper/
    - https://moewalls.com/landscape/sea-of-stars-live-wallpaper/


### Acknowledgements

- I received inspiration for this project from "Candy Crush" and "Animal Crossing New Horizons"