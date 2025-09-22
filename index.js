// Remove the main element with id 'main'
const main = document.querySelector('main#main');
main.remove();

// Create a new h1 element and assign it to newHeader variable
const newHeader = document.createElement('h1');

// Give the h1 element an id of 'victory'
newHeader.id = 'victory';

// Set the innerHTML to contain "YOUR-NAME is the champion"
newHeader.innerHTML = 'Collins is the champion';

// Append the newHeader to the body
document.body.appendChild(newHeader);
