// import createExcursion from "./createExcursion";
// import createExcursionAdmin from "./createExcursionAdmin";
// import createSummary from "./createSummary";
// import inputFormValidation from "./inputFormValidation";
// import openEditPanel from "./openEditPanel";

//DO ZROBIENIA:
// CLIENT
// 1. BŁĄD */ walidacja formularzy Client - waliduje tylko field1, do ustawienia dla wszystkich `field${id}`
// 2. zamienić tak, aby komunikacja z api w ExcursionsAPI oraz utworzyć 
//    inny plik/inne pliki na wszystkie funkcje
class ExcursionsAPI {
    async getExcursionClient(){
        try {
            const response = await fetch('http://localhost:3000/excursions');
            const data = await response.json();
            data.forEach(element => {

                // createExcursion(element); // NIE WYKONUJE SIĘ addToOrder
                // tutaj wstawiam funkcję zapisaną w osobnym pliku (wszystko ponizej to w osobnej funkcji)
                const li = document.createElement('li');
                li.className = 'excursions__item  ';

                const header = document.createElement('header');
                const title = document.createElement('h2');
                title.className = 'excursions__title';
                title.textContent = element.Title;
                const description = document.createElement('p');
                description.className ='excursions__description';
                description.textContent = element.Description;
                header.appendChild(title);
                header.appendChild(description);

                //TWORZYMY INPUT'Y I OPISY W WYCIECZKACH
                const form = document.createElement('form');
                form.className = `excursions__form field${element.id}`; //DODANIE KLASY field1
                form.addEventListener("submit",(e)=>{this.addToOrder(e, element.id)})

                const adultField = document.createElement('div');
                adultField.className = 'excursions__field';
                adultField.innerHTML = `
                    <label class="excursions__field-name">
                        Dorosły: <b>${element.Adult_cost}</b>PLN x <input class="excursions__field-input" name="adults" />
                    </label>
                `;

                const childField = document.createElement('div');
                childField.className = 'excursions__field';
                childField.innerHTML = `
                    <label class="excursions__field-name">
                        Dziecko: <b>${element.Child_cost}</b>PLN x <input class="excursions__field-input" name="children" />
                    </label>
                `;

                const submitField = document.createElement('div');
                submitField.className = `excursions__field excursions__field--submit`;

                //DODAJEMY WYCIECZKĘ DO ZAMÓWIENIA
                const submitInput = document.createElement('input');
                submitInput.className = 'excursions__field-input excursions__field-input--submit';
                submitInput.value = 'dodaj do zamówienia';
                submitInput.type = 'submit';
                submitInput.addEventListener('click', (e) => this.addToOrder(
                    e,
                    element.id,
                    element.Title,
                    element.Description,
                    element.Adult_cost,
                    element.Child_cost));

                //walidacja inputów
                // if(this.inputFormValidation()) {

                // };

                submitField.appendChild(submitInput)

                form.appendChild(adultField);
                form.appendChild(childField);
                form.appendChild(submitField);

                li.appendChild(header);
                li.appendChild(form);

                document.querySelector('.excursions').appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching excursions:', error);
        }
    }

    async getExcursionAdmin(){
        try {
            const response = await fetch('http://localhost:3000/excursions');
            const data = await response.json();
            data.forEach(element => {

                // createExcursionAdmin(element);

                const li = document.createElement('li');
                li.className = 'excursions__item';

                const header = document.createElement('header');
                const title = document.createElement('h2');
                title.className = 'excursions__title';
                title.textContent = element.Title;
                const description = document.createElement('p');
                description.className = 'excursions__description';
                description.textContent = element.Description;
                header.appendChild(title);
                header.appendChild(description);

                const form = document.createElement('form');
                form.className = 'excursions__form';

                const adultField = document.createElement('div');
                adultField.className = 'excursions__field';
                adultField.innerHTML = `
                    <label class="excursions__field-name">
                        Dorosły: <b>${element.Adult_cost}</b>PLN
                    </label>
                `;

                const childField = document.createElement('div');
                childField.className = 'excursions__field';
                childField.innerHTML = `
                    <label class="excursions__field-name">
                        Dziecko: <b>${element.Child_cost}</b>PLN
                    </label>
                `;

                const submitField = document.createElement('div');
                submitField.className = 'excursions__field excursions__field--submit';

                const editButton = document.createElement('input');
                editButton.className = 'excursions__field-input excursions__field-input--edit';
                editButton.value = 'edytuj';
                editButton.type = 'button';
                editButton.addEventListener('click', (e) => this.openEditPanel(e, element.id));
    
                submitField.appendChild(editButton);
    
                const deleteButton = document.createElement('input');
                deleteButton.className = 'excursions__field-input excursions__field-input--remove';
                deleteButton.value = 'usuń';
                deleteButton.type = 'button';
                deleteButton.onclick =() => this.deleteExcursion(element.id);
    
                submitField.appendChild(deleteButton);

                form.appendChild(adultField);
                form.appendChild(childField);
                form.appendChild(submitField);

                li.appendChild(header);
                li.appendChild(form);

                document.querySelector('.excursions').appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching excursions:', error);
        }
    }

    async getOrders(){
        try {
            const response = await fetch('http://localhost:3000/orders');
            const data = await response.json();
            let totalCostNumber=0
            data.forEach(element => {

            // createSummary(element);
                const li = document.createElement('li');
                li.className = 'summary__item ';
    
                const h3 = document.createElement('h3');
                h3.className = 'summary__title';
    
                const spanName = document.createElement('span');
                spanName.className = 'summary__name';
                spanName.textContent = element.Title;
    
                const strongTotalPrice = document.createElement('strong');
                strongTotalPrice.className = 'summary__total-price';
                strongTotalPrice.textContent = element.Adult_cost * element.Adult_number + element.Child_cost * element.Child_number;
                 totalCostNumber += element.Adult_cost * element.Adult_number + element.Child_cost * element.Child_number
                const removeLink = document.createElement('a');
                removeLink.onclick=()=>this.deleteOrder(element.id);
                removeLink.className = 'summary__btn-remove';
                removeLink.title = 'usuń';
                removeLink.textContent = '   X';
    
                const pPrices = document.createElement('p');
                pPrices.className = 'summary__prices';
                pPrices.textContent = `dorośli: ${element.Adult_number} x ${element.Adult_cost}PLN, dzieci: ${element.Child_number} x ${element.Child_cost}PLN`;
    
                h3.appendChild(spanName);
                h3.appendChild(strongTotalPrice);
                h3.appendChild(removeLink);
    
                li.appendChild(h3);
                li.appendChild(pPrices);
    
                document.querySelector('.panel__summary').appendChild(li);
             document.querySelector('.order__total-price-value').innerHTML= `${totalCostNumber}PLN`

            });
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }

    async addToOrder(e, id, title, description, adult_cost, child_cost){
        e.preventDefault();
        console.log('działa');

        // inputFormValidation();
        function inputFormValidation() {
            console.log('działa validate.js');
            const inputForm = document.querySelector('.field1');
            
            //USTAWIENIE DLA WSZYSTKICH INPUTÓW
            // let inputForm = document.querySelectorAll(`.field${id}`)
            
            const inputChildrenNumber = inputForm.querySelector('input[name="children"]');
            const inputAdultsNumber = inputForm.querySelector('input[name="adults"]');

            //ustawiam wartości domyślne inputów na 0
            inputAdultsNumber.defaultValue = '0';
            inputChildrenNumber.defaultValue = '0';

            const adults = inputAdultsNumber.value.trim();
            const children = inputChildrenNumber.value.trim();
            const regex = /^\d+$/; // sprawdzamy czy input zawiera wyłącznie liczby
            console.log(adults, children);
        
            if (adults === '' || children === '' || !regex.test(adults) || !regex.test(children)) {
            const errorElement = document.createElement('p');
            errorElement.style.color = 'red';
            errorElement.innerText = 'Proszę uzupełnić poprawnie wymagane pola';
            console.log(inputForm);
            inputForm.appendChild(errorElement);
            return false;

            } else {
            // let totalPrice = document.querySelector('.order__total-price-value');
            // const formattedTotalPrice = totalPrice.innerText.replace('PLN', '');
            // alert(`Dziękujemy za złożenie zamówienia o wartości ${formattedTotalPrice} PLN. Szczegóły zamówienia zostały wysłane na adres e-mail: ${email}.`);
            
            // nameInput.value = '';
            // emailInput.value = '';
            // //create there readOrders() and getOrders()
            // await this.readOrders();
            // await this.getOrders();
            // totalPrice.innerHTML="0PLN"
            return true;
            }
            };

            if(!inputFormValidation()) {
                return;
            }


        let content = document.querySelectorAll(`.field${id}`)
        const formData = {
            "Title": title,
            "Description": description,
            "Adult_cost": adult_cost,
            "Child_cost":child_cost,
            "Adult_number":content[0][0].value,
            "Child_number":content[0][1].value,
        };
        
        // to uruchamiamy (wysyłamy do bazy) dopiero przy zamówieniu
        console.log(formData);
          try {
              const response = await fetch("http://localhost:3000/orders", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
              });
      
              if (!response.ok) {
                  throw new Error("Failed to add new order");
              }
      
              const newExcursion = await response.json();
              console.log("New order added:", newExcursion);
              document.querySelector('.panel__summary').innerHTML = '';
              this.getOrders()
          } catch (error) {
              console.error("Error adding new orders:", error);
      }
    }

    async deleteOrder(orderId){
        try {
            const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            // console.log('Order deleted:', data);
            document.querySelector('.panel__summary').innerHTML=''
            this.getOrders();
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    }

    async deleteExcursion(excursionId) {
        try {
            const response = await fetch(`http://localhost:3000/excursions/${excursionId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log('Excursion deleted:', data);

            document.querySelector('.excursions').innerHTML=''
            this.getExcursionAdmin();
        } catch (error) {
            console.error('Error deleting excursion:', error);
        }
    }

    // openEditPanel(e, id);

        openEditPanel(e, id) {
        e.preventDefault();
        const panel = document.querySelector(".panel"); 
        panel.classList.add("disabledPanel")

        const edit_panel = document.querySelector(".edit_panel")
        edit_panel.style.display="block";
        edit_panel.setAttribute("id", id);   
    }

    async editExcursion(e) {
        e.preventDefault();
        const edit_panel=document.querySelector(".edit_panel");
        let id = edit_panel.id
        console.log(id,edit_panel);

        let content = document.querySelectorAll(`.edit`)
        console.log(content);

        const formData ={
            "Title":content[0][0].value ,
            "Description": content[0][1].value,
            "Adult_cost": content[0][2].value,
            "Child_cost":content[0][3].value 
        }

        try {
            const response = await fetch(`http://localhost:3000/excursions/${id}`, {
                method: "Put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error("Failed to edit excursion");
            }
    
            const newExcursion = await response.json();
            console.log("excursion edited:", newExcursion);
            document.querySelector('.excursions').innerHTML = '';
            this.getExcursionAdmin()
        } catch (error) {
            console.error("Error editing excursion:", error);
        }
        const panel = document.querySelector(".panel"); 
        panel.classList.remove("disabledPanel")
        document.querySelector(".edit_panel").style.display="none";
    }
    
    async addNewExcursion(e) {
        e.preventDefault();
      let content = document.querySelectorAll('.form__field')
      console.log(content);
      const formData = {
        "Title":content[0].value,
        "Description":content[1].value,
        "Adult_cost":content[2].value,
        "Child_cost":content[3].value,

      };

      console.log(formData);
        try {
            const response = await fetch("http://localhost:3000/excursions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error("Failed to add new excursion");
            }
    
            const newExcursion = await response.json();
            console.log("New excursion added:", newExcursion);
            document.querySelector('.excursions').innerHTML=''
            this.getExcursionAdmin()
        } catch (error) {
            console.error("Error adding new excursion:", error);
        }
    }
    
    calculateTotalPrice() {
        console.log('działa')
        const totalElement = document.querySelector('.order__total-price-value');
        totalElement.innerText = totalSum + 'PLN';
    }

    async readOrders(){
        try {
            const response = await fetch('http://localhost:3000/orders');
            const data = await response.json();
            let totalCostNumber = 0;
            data.forEach(element => {
                this.deleteOrder(element.id);
            })
        } catch(error) {
            console.log(error);
        }
    }
    // async clearSummary(){
    //     const summaryPanel = document.querySelector('.panel__summary');
    //     summaryPanel.innerHTML = '';
    // }

    //WALIDACJA FORMULARZA 'ORDER'
    async orderFormSubmit() {
    // console.log('działa ten!');
    const orderForm = document.querySelector('.panel__order');
    console.log(orderForm);
    
    orderForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    const summaryPanel = document.querySelector('.panel__summary');
    const summaryItem = document.querySelector('.summary__item');
    // console.log(summaryPanel.innerText);
    
    if (name === '' || email === '' || !email.includes('@')) {
    const errorElement = document.createElement('p');
    errorElement.innerText = 'Proszę uzupełnić poprawnie wymagane pola';
    // console.log(orderForm)
    orderForm.appendChild(errorElement);
    } else {
    let totalPrice = document.querySelector('.order__total-price-value');
    const formattedTotalPrice = totalPrice.innerText.replace('PLN', '');
    alert(`Dziękujemy za złożenie zamówienia o wartości ${formattedTotalPrice} PLN. Szczegóły zamówienia zostały wysłane na adres e-mail: ${email}.`);
    
    nameInput.value = '';
    emailInput.value = '';
    summaryPanel.remove();
    // console.log(summaryPanel);
    // while(summaryItem.firstChild) {
    //     summaryItem.removeChild(summaryItem.firstChild);
    // }; 
    // summaryItem.removeChild(summaryItem.firstChild);
    //usuwam wszystkie dzieci
    // while(summaryPanel.firstChild) {
    //     summaryPanel.removeChild(summaryPanel.firstChild);
    // }; 

    // summaryPanel.innerHTML = ''; //NIE DZIAŁA
    //create there readOrders() and getOrders()
    // await this.readOrders();
    // await this.clearSummary(); // czyści summary, czyści orders nawet jak jest zakomittowana
    await this.getOrders();
    totalPrice.innerHTML="0 PLN"
    
    }
    }.bind(this)); // Binding 'this' context to access class methods
    };

    // //WALIDACJA FORMULARZY 'INPUT'
    // async inputFormValidation() {
    // // console.log('działa');
    // const inputForm = document.querySelector('.excursions__form');
    
    // inputForm.addEventListener('submit', async function(event) {
    // event.preventDefault();
    
    // const inputChildrenNumber = document.querySelector('input[name="children"]');
    // const inputAdultsNumber = document.querySelector('input[name="adults"]');
    // const adults = inputAdultsNumber.value.trim();
    // const children = inputChildrenNumber.value.trim();
    // const regex = /^\d+$/; // sprawdzamy czy input zawiera wyłącznie liczby
    // console.log(adults, children);

    // if (adults === '' || children === '' || !regex.test(adults) || !regex.test(children)) {
    // const errorElement = document.createElement('p');
    // errorElement.innerText = 'Proszę uzupełnić poprawnie wymagane pola';
    // orderForm.appendChild(errorElement);
    
    // } else {
    // // let totalPrice = document.querySelector('.order__total-price-value');
    // // const formattedTotalPrice = totalPrice.innerText.replace('PLN', '');
    // // alert(`Dziękujemy za złożenie zamówienia o wartości ${formattedTotalPrice} PLN. Szczegóły zamówienia zostały wysłane na adres e-mail: ${email}.`);
    
    // // nameInput.value = '';
    // // emailInput.value = '';
    // // //create there readOrders() and getOrders()
    // // await this.readOrders();
    // // await this.getOrders();
    // // totalPrice.innerHTML="0PLN"
    
    // }
    // }.bind(this)); // Binding 'this' context to access class methods
    // };
    
    Init(){

    document.querySelector("form").addEventListener("submit",(e)=>{this.addNewExcursion(e)})
    document.querySelector(".edit").addEventListener("submit",(e)=>{this.editExcursion(e)})
    
    }
}
export default ExcursionsAPI;


