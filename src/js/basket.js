import { displayError } from "./errors";
import { OrdersApi } from './OrdersApi';

let basket = [];
let totalCostNumber = 0;

export async function addToBasket(basketItem) {
    basket.push(basketItem);

    const li = document.createElement('li');
    li.className = 'summary__item';

    const h3 = document.createElement('h3');
    h3.className = 'summary__title';

    const spanName = document.createElement('span');
    spanName.className = 'summary__name';
    spanName.textContent = basketItem.excursion.Title;

    const strongTotalPrice = document.createElement('strong');
    strongTotalPrice.className = 'summary__total-price';

    const basketItemCost = basketItem.excursion.Adult_cost * basketItem.Adult_Number + basketItem.excursion.Child_cost * basketItem.Child_Number;
    strongTotalPrice.textContent = `${basketItemCost}  PLN`;
    totalCostNumber += basketItemCost;

    const removeLink = document.createElement('a');
    removeLink.className = 'summary__btn-remove';
    removeLink.title = 'usuń';
    removeLink.textContent = 'X';

    removeLink.onclick = (e) => {
        e.preventDefault();
        removeItemFromBasket(basketItem, li);
    };

    const pPrices = document.createElement('p');
    pPrices.className = 'summary__prices';
    pPrices.textContent = `dorośli: ${basketItem.Adult_Number} x ${basketItem.excursion.Adult_cost}  PLN, dzieci: ${basketItem.Child_Number} x ${basketItem.excursion.Child_cost}  PLN`;

    h3.appendChild(spanName);
    h3.appendChild(strongTotalPrice);
    h3.appendChild(removeLink);

    li.appendChild(h3);
    li.appendChild(pPrices);

    document.querySelector('.panel__summary').appendChild(li);

    displayTotalPrice();
}

function removeItemFromBasket(basketItem, li) {
    const index = basket.indexOf(basketItem);
    if (index > -1) {
        basket.splice(index, 1);

    
        const itemCost = basketItem.excursion.Adult_cost * basketItem.Adult_Number + basketItem.excursion.Child_cost * basketItem.Child_Number;
        totalCostNumber -= itemCost;

    
        li.remove();

    
        displayTotalPrice();
    }
}

function displayTotalPrice() {
    document.querySelector('.order__total-price-value').innerHTML = `${totalCostNumber} PLN`;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export async function orderBasketItems(name, email, form) {
    if (basket.length === 0) {
        displayError(form, 'Koszyk jest pusty');
        return;
    }

    const ordersApi = new OrdersApi();
    await ordersApi.createOrder({
        name,
        email,
        basket
    });

    alert(
        `Dziękujemy za złożenie zamówienia o wartości ${totalCostNumber} PLN. Szczegóły zamówienia zostały wysłane na adres e-mail: ${email}.`
    );

    basket = [];
    totalCostNumber = 0;

    removeAllChildNodes(document.querySelector('.panel__summary'));
    displayTotalPrice();
}
