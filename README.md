Project Title - The name of the project
# Project Atelier - Team Manchego


**Overview - A brief description outlining what the project is**

This project is a shopping website simulation such as popular sites like Amazon. Users will be able to interact with the UI and view products or services for sale. Feature highlights include adding user questions, reviews, uploading photos using a restful API.

*Table of Contents*
* Description
* Installation
* Usage
* Team Members
* Contributing
* Roadmap
* License


***Description* - A more detailed outline of the project. What does it do? Is there a high level list of features? If describing a project that has visual features, consider adding pictures or animations of the features and functionality in this section. See Adding Screen Captures below.**

Our application allows the user to click through products and styles to add to their shopping carts. In addition, users can see the current questions asked for the selected product as well as add their own questions & answers. At the very bottom, users can view reviews written by other customers. There is a star rating for each product. The user can add their own rating and review to the products. Overall, there is a click tracker that logs the users’ click interactions into an API.

![alt text](https://github.com/FEC-Manchego/Atelier/blob/main/screenshots/ProductOverview.png?raw=true)
![alt text](https://github.com/FEC-Manchego/Atelier/blob/main/screenshots/RelatedProducts.png?raw=true)
![alt text](https://github.com/FEC-Manchego/Atelier/blob/main/screenshots/QuestionsAnswers.png?raw=true)
![alt text](https://github.com/FEC-Manchego/Atelier/blob/main/screenshots/RatingsReviews.png?raw=true)

***Installation* - How can another developer get your project up and running on their own? What dependencies are required? Are there environmental requirements? Be specific, and outline steps to take in order to get the project running.**

Our application uses Express, Axios, jQuery,  webpack, and babelrc mainly. The developer needs node installed and would just need to run an npm install and then run the npm commands to start webpack and the server. The developer would also need their own config files with a imgBB key in order to use the image upload function.

1) Install all packages by running the following commands in your terminal.
`npm install`

2) Start the server.
`npm run server`

3) On a separate terminal, run webpack.
`npm run webpack`

4) Open the project in your web browser.
http://localhost:3000/

***Usage* - Further details on how the project is meant to be used may be helpful. For a library or framework, this section would outline how to use the library within another project (see socket.io  ). For a service that is meant to be used within a larger project architecture, instructions on how to integrate may be necessary (see node-statsD  ).**
*
This could be used with a database of products for sale, and it would be able to render the page and all related info for the specific product, given a product ID and relevant API keys.


***Team Members* - Add the names of your team members. Describe roles on the team such as "Product Owner", "Scrum Master" and more.**
* Isaac Kim
* Helena Tanubrata
* Louis La



***Contributing* - If you'd like others to be able to contribute to your work, outline a process through which they can submit a request for changes to be incorporated. More specifically, outline the Git workflow for these contributors. Should they use a feature branching workflow? Should they rebase or merge? Should the fork the repository? What is the review process?**

They should clone the main branch, and make their changes, then push that to a new branch and commit that new branch. Then we would review the changes and proceed from there.



***Roadmap* - What future enhancements are planned? What is the current status of the project? Is it being actively maintained?**

Feature enhancements
SearchBar will be able to have more filter options available to user
Login/User creation - Store user data associated to a certain user
Database integration with user data via MongoDB
      Adding security certificate to allow for ‘https’ access

*License - If open source, state how the project is licensed.*

*Copyright (c) 2021, FEC Manchego*
*All rights reserved.*

*This source code is licensed under the BSD-style license found in the*
*LICENSE file in the root directory of this source tree.*