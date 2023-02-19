# **The Anime Quiz**

The Anime Quiz is a basic quiz website that tests users on their understanding of anime by asking more unconventional questions about a variety of anime shows not touched on in other similar anime quizes online. The site aims to provide an environment in which users can challenge themselves on their knowledge in a fun and simple way.

The Anime Quiz will test users on 10 different anime, provide four possible answers and be awarded 10 points for each correct answer, marked out of a possible 100. 

From one anime lover to another, welcome to <a href="https://github.com/Bunkit18/The-Anime-Quiz-Javascript-Milestone-Project-2">**The Anime Quiz**</a>.

![Tielbible-responsivity](assets/images/tielbible-responsive.png)

# Table of Contents

* [**User Experience (UX)**](<#user-experience-ux>)
    * [**Design**](<#design>)
        * [**Site Structure**](<#site-structure>)
        * [**Colour Scheme**](<#colour-scheme>)
        * [**Typography**](<#typography>)
        * [**Imagery**](<#imagery>)
        * [**Wireframes**](<#wireframes>)
    * [**Features**](<#features>)
        * [**Current Features**](<#current-features>)
        * [**Future Features**](<#future-features>)
    * [**Technologies Used**](<#technologies-used>)
    * [**Testing**](<#testing>)
        * [**W3C Validation**](<#w3c-validation>)
        * [**User Experience Testing**](<#user-experience-testing>)
        * [**Known Bugs or Issues**](<#known-bugs-or-issues>)
    * [**Deployment**](<#deployment>)
    * [**Credits**](<#credits>)


# User Experience (UX)

* ## User Stories

    * As a user I want to be able to navigate through the whole site smoothly.
    * As a user I want to understand the purpose of the site upon loading it.
    * As a user, I want to be able to take a quiz on anime.
    * As a user, I want to be able to choose an answer and be marked on correctness.
    * As a user, I want to be able to challenge myself on anime knowledge.
    * As a user, I want to be able to interact with a simple website design without complications.
    * As a user, I want to be able to be provided example images of the anime i'm questioned on.
    * As a user, I want to visually gauge if my answers are correct.
    * As a user, I want to be able to exit the quiz at any time and return to the home page.

[Return to top](<#table-of-contents>)

# Design

* ## Site Structure 

    The Anime Quiz is a single webpage, with [The Anime Quiz](index.html) being the default loading page. The webpage is separated into sections which are toggled in response to user interaction using Javascript.

    The sections are as follows: 
    - Home - The initial welcoming screen loaded; 
    - Instructions - A help screen that informs the user how to play; 
    - Quiz - The section loaded that contains the main quiz content and interactivity which includes: a logo that returns the user to the home screen, a score area that keeps track of the user score, a header providing a question, an image related to the question being asked, four possible answers; 
    - End-of-Quiz Section - A screen that is toggleld upon completion of the quiz and marks the users final score.

    [Return to top](<#table-of-contents>)

* ## Colour Scheme

    The colour scheme was determined based on the initial background image found on Google by the artist [SeerLight](https://www.deviantart.com/seerlight) using [Colour Picker online](https://imagecolorpicker.com/en), which extracted the following chosen palette.

    ![Background Image](assets/images/bgcopy.jpg)

    Palette :

    ![Anime Quiz Palette](assets/images/ReadMe%20Images/colourpalette.png)

    This palette was chosen due to the fantasy style the colour palette portrayed and how the colours were playful and bright, which suited the aim of the quiz. White or black font were chosen as required to ensure readability for all users.

    [Return to top](<#table-of-contents>)

* ## Typography

    Using [Google Fonts](https://fonts.google.com/), I matched up my preferred font style for The Anime Quiz and decided on Orbitron in regular 400 as a header font, and Trebuchet MS for lesser headers and paragraphs. This had a clean and condensed look, with the Trebuchet font being a popular choice for subtitle fonts in anime. 
    
    Both used sans serif as a fallback font in the event that either chosen font doesn't load.  

    [Return to top](<#table-of-contents>)

* ## Imagery

    My background image is a digital art piece by artist [SeerLight](https://www.deviantart.com/seerlight), which depicts a male anime character riding a bicycle against a saturated pink and blue skyline. The image was found on [Google](https://www.google.com/), where a lot of The Anime Quiz images were sourced from. It was the ideal image for the quiz as the palette was playful and vibrant yet relaxing.

    Other images in The Anime Quiz are the ownership of the creators of the anime themselves, however, had been sourced by the following websites, through the use of Google:

    *[Deviant Art - Superheroarts](https://www.deviantart.com/superheroarts)

    *[Pinterest](https://www.pinterest.co.uk/pin/774830310863531564/)

    *[Fandom](https://characters.fandom.com/wiki/Kazuto_Kirigaya)

    The direct sources of some of the images used could not be traced due to extensive use among a large variety of sites. 

    [Return to top](<#table-of-contents>)

* ## Wireframes

    Initial Wireframe template was sourced from [Balsamiq](https://balsamiq.com/) and supplemented in Adobe Photoshop.

    Home page wireframe - There were three initial designs for the home page and all three, including the final design are below:

    ![Home page mock-up 1](assets/images/ReadMe%20Images/Home%20-%20mock%201.png)

    ![Home page mock-up 2](assets/images/ReadMe%20Images/Home%20-%20mock%202.png)

    ![Home page Final](assets/images/ReadMe%20Images/Home%20-%20mock%203.png)

    Instructions page:

    ![Instructions page](assets/images/ReadMe%20Images/instructs.png)

    Quiz Page:

    ![Quiz page](assets/images/ReadMe%20Images/quiz.png)

    Congratulations Page:

    ![Congratulations page](assets/images/ReadMe%20Images/congrats.png)

    These are not individual html pages. The website was designned to maximise the use of Javascript, therefore only one html page is used and the different sections are toggled using javascript.
    
    There may be differentation in the final site due to responsiveness.

    [Return to top](<#table-of-contents>)

# Features

The Anime Quiz was created with ease of navigation in mind. A navigation bar is included in the home page, headed by a h1 header element and containing the two buttons for navigation. Each section has a linked connection to each section for easy site navigation. Each section is designed to be simple and have a simplistic structure to ensure the site is easy to use and navigate and that the User Interface isn't too cluttered or hard to navigate.
    
All pages are responsive for other viewports, such as tablets and mobiles. The structure of the page may differ in different viewports.

[Return to top](<#table-of-contents>)

* ## Current Features

    ### Title page and Navigation

    * The front page upon loading the site. The page includes the Anime Quiz header and logo, introductory greeting, brief hint to users where to navigate for the quiz or for instructions, two buttons in a nav section that leads to instructions on how to play or the quiz and a small footer.

    * The Home page section is the only html section that is visible on-load. The home page can be toggled based on user interaction (buttons).

    * The instructions button cursor changes to the help cursor to assist in conveying to the user the location for help.

    ![Title Page](assets/images/ReadMe%20Images/home-page.png)

    ![Help Cursor](assets/images/ReadMe%20Images/help-cursor.png)

    ### Instructions Page

    * The instructions page contains a simple header, paragraph element and button on a coloured div backdrop to assist with font accessibility.

    * The button returns the user to the main home page after confirming they had read the instructions, which toggled the visibility of the instructions and home pages.  

    ![Instructions Page](assets/images/ReadMe%20Images/Instructions-Page.png)

    ### Quiz Page

    * The quiz page is included in the main section of content for the site, which includes: 

        - An interactable Anime Quiz Logo, that will underline on hover of the mouse to inform the user of the link effect.
        - A score area that keeps track of the users correct answers in a series of 10 points, populated by javascript. 
        - A header in which the question will be shown using javascript.
        - An image in which javascript will display an image related to the question.
        - Four buttons containing four possible answers, populated by javascript, which the user can interact with and will change colour according to whether the answer chosen is correct or incorrect.
        - An arrowed button that directs the user to the next question.
        - A coloured div backdrop to assist in font contrast for accesibility purposes. 

    ![Title and Nav bar](assets/images/Features-imgs/Screenshot%202022-03-28%20172357.png)

    ### Specialised Embedded Google Map

    * A specialised self-created map of the UK with verified exotic and avian treating veterinarians has been created and embedded solely for the use of users of TielBible. The map can be zoomed in on and details about the veterinary service can be accessed through clicking on the location.

    ![Title and Nav bar](assets/images/Features-imgs/Screenshot%202022-03-28%20172248.png)

    ### Contact Form for all Occasions

    * The contact form can be filled in and submitted by users for a variety of different reasons and have the ability to customise their preferences for contact (e.g. phone) 

    * A cute picture of a cockatiel (Owned by Corbyn the Cockatiel) resides nearby the form for aesthetic presentation.

    ![Title and Nav bar](assets/images/Features-imgs/Screenshot%202022-03-28%20172311.png)


[Return to top](<#table-of-contents>)

* ## Future Features

This section contains ideas for potential upgrades to the site in the near future.

* A page dedicated to health and injury / sickness concerns that may be commonly or rarely known, for users to better understand the potential concerns they have for their tiels.

* A forum discussion where likeminded tiel owners can come together and discuss a variety of topics, including bt not limited to: chop recipes, DIY toy making or wholesome introduction pages for their feathered friends.

* A breeder / pet store review and rating system for stores, pet hotels and breeders in the UK, to improve solidarity between users, prevent scams and keep all Tiels safe.

[Return to top](<#table-of-contents>)

# Technologies Used 

Languages used in this project:

* HTML5
* CSS3

Frameworks, Libraries and Programs used:

* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - responsive media queries.
* [Hover.css](https://ianlunn.github.io/Hover/) - for :hover instances for links.
* [Balsamiq](https://balsamiq.com/) - wireframes.
* [Google Fonts](https://fonts.google.com/) - Fonts.
* [Font Awesome](https://fontawesome.com/) - Icons.
* [Github](https://github.com/) - repository storage.
* [Gitpod](https://gitpod.io/) - compiler and Git code storage.

[Return to top](<#table-of-contents>)

# Testing 

Testing was involved in every stage of the creation of TielBible's creation, in an ongoing process with Google's Developer Tools, as well as WC3's validation services for HTML markup and CSS. 

Upon finalisation of TielBible, the site passed its responsiveness tests though Chromes developer tools responsiveness checker.

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues. It was also peer code reviewed by other students at Code Institute.

[Return to top](<#table-of-contents>)

* ## W3C Validation

    All pages of TielBible have been validated by these services, which ensure that the syntax for the site is clear and error-free.

    ![Validation](assets/images/validation.png)

    [Return to top](<#table-of-contents>)

* ## User Experience Testing

* As a user I want to be able to navigate through the whole site smoothly.

    1. All pages have the same header and footer links, including the navigation bar that is a part of the header, which allows the user to navigate through the site at any time, leaving no potential for the user to be trapped.

    2. On longer pages of large content, a 'return to top' button is fixed on the right-hand-side, allowing the user to quickly and painlessly return to the navigation pane and redirect themselves elsewhere through the site.

    3. When submitting information through a form via the mailing list popup or contact page, the user is taken to a page thanking them for their contact and a link that allows them to return to the home page.

    4. Each page has a flowing method behind its structure, with each sub-header having the posibility to be jumped to via a link at the top of the page. Headers are semantically created, with the h1 element leading to one or multiple h2 elements, which may progress to further h3 elements. 

* As a user I want to understand the purpose of the site upon loading it.
    
    1. Upon entering the site, users are automatically greeted with a clean and easily readable title bar and a navigation bar, to go to the page of their choice. Underneath the navigation bar is the Cockatiel Hero Image, with a short summaried text that alerts the user as to the main content that can be found on the site.

    2. The Hero Image is of a cockatiel, which, combined with the feather icon in the h1 header, clearly delineates the main points of the page.

    3. From the home (index) page, the user has two choices, click on a navigation pane for information on one of TielBible's pages or click on the links provided in the footer, to either visit a social media page or to join the mailing list for more personalised information to be sent to the users inbox.

* As a user, I want to be able to learn more about cockatiels.

    1. The pages in the navigation bar provides the user with all basic, necessary information about cockatiels and what an owner needs to know. Each page can be navigated in order if preferred, but can also be easily understood if navigated randomly.

    2. Each page clearly outlines necessary details about cockatiels, alongside pictures, videos and video controls. All pictures include an alt attribute for accessiblity for users who require screens readers, and are usually nested in a figure element alongside a caption outlining basic details of the image or video.

    3. The user can easily initiate contact via a contact form and enquire about aspects of a cockatiel that they may not understand or require further advice on. There is also the option for users to provide and share information to TielBible, which can be added to the page and provided freely to other users which may have encountered the same circumstances. 

* As a user, I want to be able to find relevant information on owning a cockatiel regardless of prior experience.


    1. All information on the TielBible site is provided in a flowing manner, starting from basic to advanced knowledge, which makes it suitable for all users of all experience and knowledge levels. Visuals and audio are also provided to further supplement knowledge, ensuring clarity of the topic at hand.

* As a user, I want to be able to learn the visual differences between different genders and colour variations of cockatiels.

    1. There is a full page on TielBible that clearly details the visual differences between cockatiels, from colour mutation to gender determination, which are usually the most asked questions in the cockatiel community. This is the first page the user can navvigate to through the navigation bar, detailed 'Variation'.

* As a user, I want to be able to view examples of different defining features of a cockatiel.

    1. Images and videos with video controls are provided in the relevant pages to assist the user in their comprehension and to ensure lack of confusion about a topic.

* As a user, I want to be able to understand the behaviours and emotions of a cockatiel with clear image or video examples.

    1. Detail provided to the user on the behaviour page goes in depth using common english, the factors involved in understanding the behaviour of a cockatiel as much as possible, which were provided from experience of other cockatiel owners or veterinarians with studious knowledge of the topic. This is further supplemented with photographic or video based evidence of what had been discussed.

* As a user, I want to clearly understand the dietary needs of cockatiels and what food is considered toxic to them.

    1. The 'diet' page goes into above and beyond detail on the diet of a cockatiel in heirarchical format for all users to understand. Images are provided to usrs throughout the page, with multiple external navigation options for further information or purchase of the item in question.

    2. Toxic foods that a cockatiel cannot have in their diet is clearly stated to the used in an easy to comprehend table

    3. An image provided to the user has further image area navigation links for a product that has similar forms 'pellets', which changes the layout slightly and keeps the user more interested and engaged. 
    
    4. The user can navigate to the contact page when unsure, for further personalised information and assistance.

* As a user, I want to be able to view a live map of the United Kindom, that advises me on veterinary services for my cockatiel.

    1. The 'vet locations' page includes a self created google map that the user and members of the public can access and review or add to. All veterinary practices included on the map have been reviewed and deemed appropriate for user needs, in providing locations of vets in the United Kingdom that examine and treat avians/birds. 

* As a user, I want to be able to provide feedback to TielBible based on my own experience of Cockatiels, that may be able to help others.

    1. Users can volunteer up their own experiences for collaborative use on TielBible for the benefit of other users after them. They can do this by filling out the contact page form and ticking 'add to page' checkbox, alongside adding the details of their addition to the text area provided. 

    2. Users can access social media links to access platforms in which they can talk to and discuss with other users, which may build upon the information provided on the TielBible site.

* As a user, I want to be able to connect with fellow users of TielBible through social media.

    1. Links for Facebook, Twitter, Instagram and Reddit are included in the footer of every page on the TielBible site, which immediately redirects them to their link of choice. They can then interact with other users or interested parties regarding cockatiels as required.

[Return to top](<#table-of-contents>)

* ## Known Bugs or Issues

    * ### Currently known bugs (CURRENT)

        None.

    * ### Past existing bugs (PAST)

        **Issue #1**

        - Issue with responsiveness of the site using chrome dev tools. 
        
        Status: **FIXED**

        Solution: Changes to CSS code units from px to % / rem where possible which auto-corrects own responsiveness to viewport width of device viewing the site. 

        **Issue #2**

        - Issue with the submit button of the forms for mailing list and contact page. Deviated to an error page.

        Status: **FIXED**

        Solution: Removed '#' action and replaced with local 'thankyou.html' page. Removed POST method. 

        [Return to top](<#table-of-contents>)

## Deployment

* ### GitHub Pages

    The TieBible project was deployed to GitHub Pages using the following steps:

    1. Log in to GitHub and locate the GitHub Repository
    2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
    4. Under "Source", click the dropdown called "None" and select "Master Branch".
    5. The page will automatically refresh.
    6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

<br>
    
* ### Forking the GitHub Repository

    By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

    1. Log in to GitHub and locate the GitHub Repository
    2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
    3. You should now have a copy of the original repository in your GitHub account.

<br>
    
* ### Making a Local Clone

    1. Log in to GitHub and locate the GitHub Repository
    2. Under the repository name, click "Clone or download".
    3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
    4. Open Git Bash
    5. Change the current working directory to the location where you want the cloned directory to be made.
    6. Type git clone, and then paste the URL you copied in Step 3.
    
            $ git clone https://github.com/bunkit18/TielBible-Project-1-HTML-and-CSS/

    7. Press Enter. Your local clone will be created.

            $ git clone https://github.com/bunkit18/TielBible-Project-1-HTML-and-CSS/

            > Cloning into `CI-Clone`...
            > remote: Counting objects: 10, done.
            > remote: Compressing objects: 100% (8/8), done.
            > remove: Total 10 (delta 1), reused 10 (delta 1)
            > Unpacking objects: 100% (10/10), done.

    
    Click [Here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

[Return to top](<#table-of-contents>)

## Credits

Credits for all imagery used in TielBible are in the [Imagery](<#imagery>) section.

Further credits are due to:

* [Stack Overflow](https://stackoverflow.com/) and [W3Schools](https://www.w3schools.com/) for constant reference and assistance on html and css code posibilities.

* Fellow Code Institute peers on the Slack channel, who peer reviewed my code and provided feedback on how to better my project.

* Users and creators of [YouTube](www.youtube.com), of which informational videos I have used in the making of my project (which have been credited in the live deployment beneath each video)

* Any other user of the internet or website from which evaluating their source code and processes aided me in creating and fleshing out my own. 

[Return to top](<#table-of-contents>)






    
    








