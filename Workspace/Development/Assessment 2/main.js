document.addEventListener("DOMContentLoaded", function(evt){
    console.log("Document was successfully loaded");
    setupButtons();
});

function setupButtons() {
    document.getElementById("retrieveBtn").addEventListener("click", evt => {
        console.log("button clicked");
        retrieveData();
    });
    document.getElementById("clearBtn").addEventListener("click", evt=>{
        console.log("button clicked");
        clearData();
    });
}

function retrieveData(){
    const url = "./twitter_sample.json";
    console.log("Attempting to retrieve data from: " + url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Received data");
            let data = JSON.parse(xhttp.responseText); // convert data to JSON
            console.log("Received %s records", data.length);
            // let str = buildListFromData(data);
            // document.getElementById("list").innerHTML = str;
            let str = buildTableFromData(data);
            document.getElementById("tbl").innerHTML = str;
        }
    };
    xhttp.open("GET", url, true);   // Initial Call, defines the URI being accessed
    xhttp.send();
}

function clearData(){
    const locations = ["tbl"];
    locations.forEach(function(el){
        document.getElementById(el).innerHTML = "";
    });
}

// function buildListFromData(data){
//     let str = "";
//     for (let i = 0; i < data.length; i += 1){
//         str += "<li>" + data[i].first_name +" "+ data[i]['first_name'] + "</li>";
//     }
//     return str;
// }

// File Structure
// Item []: Entities, 
//... text,
//... user>profile_background_image_url,
//... screen_name

function buildTableFromData(data){
    let str = "";
    str += "";
    data.forEach(el => {
        str += "<tr>"
        str += "<td>" + "<img src="+el.user.profile_background_image_url+"/>" + "</td><td>" + el.user.screen_name + "</td><td>" +  el.text +"</td>";
        str += "</tr>";
    })
    return str;
}