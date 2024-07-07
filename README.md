# Thanks for viewing my Project ✨

![Excursion Management System](./screen1.png) 
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

**6. Fetch API for Server Communication**:
Utilizes the fetch() method for API communication. A polyfill can be used for older browsers.

            async function fetchData() {
              try {
                const response = await fetch('http://localhost:3000/excursions');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                return data;
              } catch (error) {
                console.error('Fetch error:', error);
              }
            }
            
            // Using a polyfill for fetch
            import 'whatwg-fetch';
            
**7. HTML Prototypes for Simplified UI Development**:
Prototypes in the HTML are used to simplify the UI structure and development process. These prototypes can be hidden using CSS.

            <template class="excursions__item--prototype">
              <li class="excursions__item">
                <header>
                  <h2 class="excursions__title"></h2>
                  <p class="excursions__description"></p>
                </header>
                <form class="excursions__form">
                  <!-- Form fields here -->
                </form>
              </li>
            </template>
            
            <style>
              .excursions__item--prototype {
                display: none;
              }
            </style>
<br />
<br />

## 🛠️ Languages and Tools used: 

<img align="left" alt="JavaScript" width="50px" src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" />

<img align="left" alt="HTML5" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />

<img align="left" alt="CSS3" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />

<img align="left" alt="Git" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />

<img align="left" alt="GitHub" width="50px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />

<img align="left" alt="Terminal" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<img align="left" alt="Visual Studio Code" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />

<img align="left" alt="npm" width="50px" src="https://raw.githubusercontent.com/github/explore/main/topics/npm/npm.png" />

<img align="left" alt="API" width="50px" src="https://raw.githubusercontent.com/github/explore/main/topics/api/api.png" />

<img align="left" alt="Fetch" width="50px" src="https://raw.githubusercontent.com/github/explore/main/topics/fetch/fetch.png" />


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
