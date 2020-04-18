function userTable() {
    var HTML = "<tr>";
    var str;
    axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getAllUserData")
    .then ((res => {
        str = res.data;
        console.log(str); 
        for(i=0;i<str.length;i++){
            HTML += "<td class=\"column1_std\">"+str[i].userId+"</td>";
            HTML += "<td class=\"column2_std\">"+str[i].handle+"</td>";
            HTML += "<td class=\"column3_std\">"+str[i].email+"</td>";
            HTML += "<td class=\"column4_std\">"+str[i].firstName+"</td>";
            HTML += "<td class=\"column5_std\">"+str[i].lastName+"</td>";
            HTML += "<td class=\"column6_std\">"+str[i].phone+"</td>";
            HTML += "<td class=\"column7_std\">"+str[i].deposit+"</td>";
            HTML += "<td class=\"column8_std\">"+str[i].point+"</td>";
            HTML += "<td class=\"column9_std\">"+str[i].createdAt+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("userTableClick").innerHTML = HTML;
    }))
    .catch(error => alert(error));
}

function merchantTable(){
    var HTML = "<tr>";
    var str;

    axios.get("######")
    .then ((res => {
        str = res.data;
        console.log(str); 
        for(i=0;i<str.length;i++){
            HTML += "<td class=\"column1_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column2_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column3_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column4_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column5_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column6_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column7_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column8_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column9_std\">"+str[i]+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("merchantTableClick").innerHTML = HTML;
    }))
    .catch(error => alert(error));
}

function requestTable(){
    var HTML = "<tr>";
    var str;

    axios.get("######")
    .then ((res => {
        str = res.data;
        console.log(str); 
        for(i=0;i<str.length;i++){
            HTML += "<td class=\"column1_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column2_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column3_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column4_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column5_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column6_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column7_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column8_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column9_std\">"+str[i]+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("requestTableClick").innerHTML = HTML;
    }))
    .catch(error => alert(error));
}

function transTable(){
    var HTML = "<tr>";
    var str;

    axios.get("######")
    .then ((res => {
        str = res.data;
        console.log(str); 
        for(i=0;i<str.length;i++){
            HTML += "<td class=\"column1_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column2_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column3_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column4_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column5_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column6_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column7_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column8_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column9_std\">"+str[i]+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("transTableClick").innerHTML = HTML;
    }))
    .catch(error => alert(error));
}