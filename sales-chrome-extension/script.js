let savedItems = [];
const lists = document.getElementById("list");
const input = document.getElementById("input");
const retrievedLists = JSON.parse(localStorage.getItem("savedLinks"));

// RETRIEVE LISTS
if (retrievedLists) {
    savedItems = retrievedLists
    render(savedItems);
}

// SAVE INPUT
function saveInput() {
    savedItems.push(input.value);
    input.value = "";
    localStorage.setItem("savedLinks", JSON.stringify(savedItems));
    

    render(savedItems);
};

function render(items) {
    let listedItems = "";
    for (let index = 0; index < items.length; index++) {
        // listedItems += "<li><a target='_blank' href=' " + savedItems + "'>" + savedItems[index] + "</a></li>";
        // writing the above in a template string/literals
        listedItems += `
            <li>
                <a target="_blank" href="${items[index]}">
                    ${items[index]}
                </a>
            </li>
        `
    }
    lists.innerHTML = listedItems;
};

// SAVE TAB

function saveTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        savedItems.push(tabs[0].url);
        localStorage.setItem("savedLinks", JSON.stringify(savedItems));
        
        render(savedItems);
    });
};

// DELETE ALL ITEMS
function deleteAll() {
    console.log("delete");
    localStorage.clear();
    savedItems = [];
    render(savedItems);
}

