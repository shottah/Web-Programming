document.addEventListener("DOMContentLoaded", function(evt){
    console.log("Document was successfully loaded");
    setupButtons();
});


function setupButtons(){
    document.getElementById("retrieveBtn").addEventListener("click", evt => {
        console.log("button clicked");
        retrieveData();
    });
    document.getElementById("clearBtn").addEventListener("click", evt=>{
        clearData();
    });
}

function retrieveData(){
    const url = "/data/names.json";
    console.log("Attempting to retrieve data from: " + url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Received data");
            let data = JSON.parse(xhttp.responseText); // convert data to JSON
            console.log("Received %s records", data.length);
            let str = buildListFromData(data);
            document.getElementById("list").innerHTML = str;
            str = buildTableFromData(data);
            document.getElementById("tbl").innerHTML = str;
        }
    };
    xhttp.open("GET", url, true);   // Initial Call, defines the URI being accessed
    xhttp.send();
}

function clearData(){
    const locations = ["list", "tbl"];
    locations.forEach(function(el){
        document.getElementById(el).innerHTML = "";
    });
}