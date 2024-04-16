export function displayError(parent, message) {
    const errorElement = document.createElement("p");
    errorElement.innerText = message;
    errorElement.style.color = 'red';
    parent.appendChild(errorElement);

    setTimeout(() => {
        errorElement.remove();
    }, 3000);
}