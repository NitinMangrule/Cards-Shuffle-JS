// Input array.
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function for sorting.
const sortData = () => {
    return inputArray.sort((a, b) => a - b);
};

// Function for shuffling.
const suffleData = () => {
    return inputArray.sort((a, b) => Math.random() - 0.5);
};

// Function for rendering cards.
const renderCards = (items) => {

    let container = document.getElementById('grid-container');
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    let grid = document.createElement('div');
    grid.className = 'grid';
    items.forEach((item) => {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add('grid-item-' + item);
        gridItem.innerText = item;
        grid.appendChild(gridItem);
    });
    container.appendChild(grid);

};

// On page load to display cards.
renderCards(inputArray);


