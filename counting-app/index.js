let count = 0;

function incrementCount() {
    count+=1;
    document.getElementById("countValue").innerHTML = count;
}


function saveCount() {
    if (count != 0) {
        document.getElementById("displaySave").style.display = "block";
        savedValue = count + " - ";
        document.getElementById("savedValue").innerHTML += savedValue;
        document.getElementById("countValue").innerHTML = 0;
        count = 0;
    }
}