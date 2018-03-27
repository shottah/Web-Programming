function buildListFromData(data){
    let str = "";
    for (let i = 0; i < data.length; i += 1){
        str += "<li>" + data[i].first_name +" "+ data[i]['first_name'] + "</li>";
    }
    return str;
}

function buildTableFromData(data){
    let str = "";
    str += "";
    data.forEach(el => {
        str += "<tr>"
        str += "<td>" + el.first_name + "</td><td>" + el.last_name + "</td><td>" + el.email + "</td><td>" + el.gender +"</td>";
        str += "</tr>";
    })
    return str;
}