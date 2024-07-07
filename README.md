# Thanks for viewing my Project ✨

![ADD SCREEN](./screen.png) 
<br />

## :star: **Implementation:**
In this project, I used Webpack and JSON Server. It has additional configuration.

To install Webpack, run:


            npm install

After that, you can start the project by running:

            npm start

At the end write down in the terminal: 

            json-server --watch ./data/excursions.json


<br />
<br />

## Main goal of my work was to:
**1. Admin Panel for Excursions**: create a user-friendly admin interface for managing excursion details, including adding, editing, and deleting excursions.

**2. Client-side Excursion Display**: implement a client-side interface for users to view available excursions, add them to their basket, and place orders.

**3. Order Management**: develop functionalities for users to submit their excursion orders and for admins to manage these orders efficiently.

**4. Data Validation and Error Handling**: ensure robust validation for both excursion management and order placement, with clear error messages to guide users.
<br />

## Solutions provided in the project
**1. Admin Interface for Excursions:**
The admin panel allows admins to manage excursions dynamically.

         async function builtExcursionsAdminUi() {
           document.querySelector(".excursions").innerHTML = "";
           const excursionsApi = new ExcursionsAPI();
           const excursions = await excursionsApi.getExcursions();
           excursions.forEach((excursion) => {
             const li = document.createElement("li");
             li.className = "excursions__item";
             const header = document.createElement("header");
             const title = document.createElement("h2");
             title.className = "excursions__title";
             title.textContent = excursion.Title;
             const description = document.createElement("p");
             description.className = "excursions__description";
             description.textContent = excursion.Description;
             header.appendChild(title);
             header.appendChild(description);
             li.appendChild(header);
             document.querySelector(".excursions").appendChild(li);
           });
         }

**2. Form Handling for Excursions:**
Provides form handling to add new excursions and edit existing ones.

         document.querySelector("form").addEventListener("submit", (e) => {
           e.preventDefault();
           addNewExcursionAdmin(e);
         });
         
         document.querySelector(".edit").addEventListener("submit", (e) => {
           e.preventDefault();
           editExcursionAdmin(e);
         });

**3. Client-side Excursion Display and Basket Management:**
Users can view excursions, add them to a basket, and place orders.

         async function buildExcursionsUi() {
           const excursionsApi = new ExcursionsAPI();
           const excursions = await excursionsApi.getExcursions();
           excursions.forEach(excursion => {
             const li = document.createElement('li');
             li.className = 'excursions__item';
             const header = document.createElement('header');
             const title = document.createElement('h2');
             title.className = 'excursions__title';
             title.textContent = excursion.Title;
             const description = document.createElement('p');
             description.className = 'excursions__description';
             description.textContent = excursion.Description;
             header.appendChild(title);
             header.appendChild(description);
             li.appendChild(header);
             document.querySelector('.excursions').appendChild(li);
           });
         }
         
**4. Order Placement and Error Handling:**
Validates customer data and handles order placement with error feedback.

         async function attachOrderHandler() {
           const orderForm = document.querySelector(".panel__order");
           orderForm.addEventListener("submit", async (event) => {
             event.preventDefault();
             const nameInput = document.querySelector('input[name="name"]');
             const emailInput = document.querySelector('input[name="email"]');
             const name = nameInput.value.trim();
             const email = emailInput.value.trim();
             if (!isCustomerDataValid(name, email)) {
               displayError(orderForm, "Please fill in the required fields correctly.");
               return;
             }
             await orderBasketItems(name, email, orderForm);
             nameInput.value = "";
             emailInput.value = "";
           });
         }

**6. Fetch API for Data Communication**: utilize the fetch() method for communicating with the backend API, ensuring modern and efficient data handling.

            export class ExcursionsAPI {
              async getExcursions() {
                const response = await fetch("http://localhost:3000/excursions");
                return await response.json();
              }
            
              async addExcursion(excursion) {
                const response = await

### Fetch

Nasza komunikacja z uruchomionym API będzie się odbywać przy pomocy `fetch()`, który został opisany w materiałach tego modułu.

Choć `fetch()` jest [wspierany przez najnowsze przeglądarki](https://caniuse.com/#feat=fetch), to nie powinniśmy zapominać o wsparciu dla tych starszych.

W takim przypadku możemy wykorzystać tzw. [polyfill](https://pl.wikipedia.org/wiki/Polyfill), który doda niewspieraną przez przeglądarkę funkcjonalność.

Możesz do tego wykorzystać [whatwg-fetch](https://github.com/github/fetch).

### Prototypy

Zauważ, że w kodzie występują prototypy (`.*--prototype`). Są one używane tylko po to, aby ułatwić prezentację danych.

Docelowo mają być one niewidoczne – możesz je ukryć przy pomocy CSS (`display: none`). Warto je jednak wykorzystać do skopiowania struktury kodu HTML, aby nie musieć budować jej od podstaw w kodzie JS.


<br />
<br />

## 🛠️ Languages and Tools used: 

<img align="left" alt="JavaScript" width="50px" src="https://raw.githubusercontent.com/github/explore/379d8d145b878a5b7a1c2a5b5800b1d82d5c8c8f/topics/javascript/javascript.png" />

<img align="left" alt="HTML5" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />

<img align="left" alt="CSS3" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />

<img align="left" alt="Git" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />

<img align="left" alt="GitHub" width="50px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />

<img align="left" alt="Terminal" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<img align="left" alt="Visual Studio Code" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />

<br />
<br />
<br />
<br />

## :blue_heart:  You can find me on:
<br/>

[<img align="left" alt="Katarzyna Dworak LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />](https://www.linkedin.com/in/katarzynadworakk/)

 
<br />

### Thanks
To my Mentor - devmentor.pl – for creating the task and for the code review.
