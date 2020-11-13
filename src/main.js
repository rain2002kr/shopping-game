//Fetch the items from the JSON file 
function loadItems(){
    return fetch('data/data.json')
    .then(response =>response.json() ) //
    .then(json=> json.items);
}
// Update the list with the given items 
function displayItems(items){
    const container = document.querySelector('.items');
    const html = container.innerHTML = items.map(item => createHTMLString(item)).join('');
    console.log(html);
}

// Create HTML list item from the given data item 
function createHTMLString(item) {
    return `
    <li class="item">
          <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
          <span class="item__description">${item.gender} ${item.size}</span>
    </li>
    `;
}

//핸들 onButtonClick
function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    
    if(key == null || value == null){
        return ;
    }
    const filtered = items.filter(item => item[key] === value);
    console.log(filtered);
    displayItems(filtered);
}
function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.btns');
    logo.addEventListener('click', ()=> displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items))
}

// main 
loadItems()
.then(items => {
    console.log(items);
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log());



//update 
//핸들 onButtonClick
function onButtonClicks(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if(key == null || value == null){
        return ;
    }
    console.log('button click start')
    updateItems(items, key, value)

}

//update ITEM 
function updateItems(items, key, value){
    console.log('updateItems start')
    items.forEach(item => {
        if(item[key] === value){
            item.classList.remove('invisible');
        }else{
            item.classList.add('invisible');
        }
    })
}

