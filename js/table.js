function userTable() {
    var HTML = "<tr>";
    var str;
    tempToken = localStorage.getItem("token");
    console.log(tempToken);
    //axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getAllUserData")
    axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getUserData",{'headers':{'Authorization':'Bearer ' + tempToken}})
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
            HTML += "<td class=\"column9_std\"> <a href = \""+str[i].imageUrl+"\" target=\"_blank\">"+"Click"+"</td>";
            HTML += "<td class=\"column10_std\">"+str[i].createdAt+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("userTableClick").innerHTML = HTML;
    }))
    .catch(error => {
        console.log(error.response);
    });
}

function merchantTable(){
    var HTML = "<tr>";
    var str;
    tempToken = localStorage.getItem("token");
    console.log(tempToken);
    axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getAllMerchantData")
    //axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getMerchantData",{'headers':{'Authorization':'Bearer ' + tempToken}})
    .then ((res => {
        str = res.data;
        console.log(str); 
        for(i=0;i<str.length;i++){
            HTML += "<td class=\"column1_merc\">"+str[i].userId+"</td>";
            HTML += "<td class=\"column2_merc\">"+str[i].handle+"</td>";
            HTML += "<td class=\"column3_merc\">"+str[i].email+"</td>";
            HTML += "<td class=\"column4_merc\">"+str[i].storeName+"</td>";
            HTML += "<td class=\"column5_merc\">"+str[i].ownerName+" "+str[i].ownerLastname+"</td>";
            HTML += "<td class=\"column6_merc\">"+str[i].phone+"</td>";
            HTML += "<td class=\"column7_merc\">"+str[i].total+"</td>";
            HTML += "<td class=\"column8_merc\"> <a href = \""+str[i].imageUrl+"\" target=\"_blank\">"+"Click"+"</td>";
            HTML += "<td class=\"column9_merc\">"+str[i].createdAt+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("merchantTableClick").innerHTML = HTML;
    }))
    .catch(error => {
        alert(error);
        console.log(error.response.data);
    });
}

function requestTable(){
    var HTML = "<tr>";
    var str;
    tempToken = localStorage.getItem("token");
    //axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getAllRequestData")
    //axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getMerchantData",{'headers':{'Authorization':'Bearer ' + tempToken}})
    axios.get("######",{'headers':{'Authorization':'Bearer ' + tempToken}})
    .then ((res => {
        str = res.data;
        for(i=0;i<str.length;i++){
            HTML += "<td class=\"column1_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column2_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column3_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column4_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column5_std\">"+str[i]+"</td>";
            HTML += "<td class=\"column6_std\"  onclick = \"getConfirmation('"+str[i].asdasd+"');\">Confirm</td>";
            HTML += "<td class=\"column7_std\">"+str[i]+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("requestTableClick").innerHTML = HTML;
    }))
    .catch(error => alert(error));
}

function transTable(){
    var HTML = "<tr>";
    var str;

    axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getAllTransactions")
    //axios.get("https://asia-east2-k-cash-less.cloudfunctions.net/api/getAllTransactions",{'headers':{'Authorization':'Bearer ' + tempToken}})
    .then ((res => {
        str = res.data;
        console.log(str); 
        for(i=0;i<str.length;i++){
            HTML += "<td class=\"column1\">"+str[i].createdAt+"</td>";
            HTML += "<td class=\"column2\">"+i +"</td>";
            HTML += "<td class=\"column3\">"+str[i].from+"</td>";
            HTML += "<td class=\"column4\">"+str[i].to+"</td>";
            HTML += "<td class=\"column5\">"+str[i].amount+"</td>";
            HTML += "<td class=\"column6\">"+str[i].info+"</td>";
            HTML += "</tr>";
        }
        document.getElementById("transTableClick").innerHTML = HTML;
    }))
    .catch(error => alert(error));
}

function getConfirmation(id) {
    console.log(id);
    var retVal = confirm("Do you want to continue ?");
    if( retVal == true ) {
       //document.write ("User wants to continue!");
       axios.post("####");
       return true;
    } else {
       //document.write ("User does not want to continue!");
       return false;
    }
    //https://www.tutorialspoint.com/javascript/javascript_dialog_boxes.htm
 }