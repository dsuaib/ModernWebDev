# Chapter 3: Practice with Basics of HTML 

## Objectives
* Use assets (files) in the same directory as this README
* Copy files between folders in VS Code
* Create a new HTML file
* Practice with a HTML `<head>` child elements
* Practice Commenting / Un-commenting code

### Estimated Completion Time 
15 minutes

## Create a new page

1. In your WIP folder create a folder called `html`.

1. To this new **html** folder, add an HTML file called `index.html` by right-clicking the html folder and choosing `new file`.

1. In this new blank file start typing `html` - and choose the template with html:5 
    
   ![Open in preview mode to see image](./choose-template.png)


    ## Practice with character encoding 

2. Copy this code and paste it into the `<body>` element.
    ```html
    <h1>Welcome to the home page in multiple languages!</h1>
    <ul>
        <li>Czech - Vítej</li> 
        <li>Greek - Καλώς ορίσατε</li>
        <li>Bosnian - Dobrodošli</li>
        <li>Italian - Benvenuto</li>
        <li>Chinese (Mandarin) - 欢迎</li>
        <li>German - herzlich willkommen</li>
        <li>French - Bienvenue</li>
        <li>Turkish - Hoşgeldiniz</li>
        <li>Russian - Здра́вствуйте! </li>
    </ul>
    ```

3. Load the page in Chrome and view the characters. They should look okay.

4. Find this line in the `<head>` element of your `index.html` 
    ```html
    <meta charset="UTF-8">
    ```

    * Comment out this line by clicking anywhere on that line, and using the VS Code keyboard shortcut of control-/  (forward slash)
    

5. Copy the following line (highlight, then control-c), and then paste it after the line you just commented out. (control-c):
    ```html
    <meta charset="ISO-8859-1">
    ```

6. Reload the page and view the differences.

7. Go back and un-comment the UTF-8 version and remove the ISO version.

    ## Add a favicon
8. In your html directory, create a new directory called `favicon`.

9. In the Explorer sidebar of VS Code look in the same folder as this readme file `\Labs\Ch03-HTML5\basics` and find the file `favicon.ico`.

10. Add this file to your project by
    * clicking on this file in explorer menu
    * hit control-c to copy
    * click on your new `/html/favicon` directory
    * hit control-v to paste

11. In your `index.html` file:
    * Add this line in `<head>`
    
    ```html
    <link rel="icon" href="favicon/favicon.ico" />
    ```

12. `Notice` the usage of the subdirectory to specify the location relative to the current location.

13. Reload the browser and you should see the favicon in the browser tab.

    ## View usage of meta description

14. In Chrome, use Google or Bing to search for `Mozilla Developer Network` and read the search results description.

15. Right-click on the result link to open the site in a new window.  

16. While viewing the MDN website, right click in displayed browser window and choose `View Source`.  Scroll or use control-F to find the meta description - you should see the same text as what was displayed in the search results. 

17. Mark your work as complete and help others or work on the bonus. We retain more by helping others!

## Bonus

1. Create your own favicon by following these steps.

1. Comment out the line you added during the exercise.
    ```html
    <link rel="icon" href="favicon/favicon.ico" />
    ```
    
1. Search for a PNG image you like using Google image search, specifying a custom size of 260x260. Download the file into your `/html` directory.

1. Visit the website: https://realfavicongenerator.net/ and upload your image into tool. 

1. `Notice`: it generates icons for usage not just in a desktop browser, but also for various mobile environments. Choose to keep in same folder, and generate the code and icons.

1. Copy the generated code into the `<head>` element of your html file. 

1. Download the zip file and use Windows Explorer to extract the files into your `\html\favicon`. (Right-click to extract files from context menu)

## adjust relative paths

1. If you open the browser now, you can see an error in the browser console. 
    * The generated code is assuming you are working on a server, and the / before the name of the file indicates to look in the root directory. ex. locahost:3000/ 
    * When using file:/ the root is c:\ !  

1. Fix this error by removing the slash from the `href` attribute value and pointing to the favicon directory.
