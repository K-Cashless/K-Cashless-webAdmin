function addPromo() {
    var des = (document.getElementById("promoDescptn").value);
    var header = (document.getElementById("promoHeader").value);
    var duration = (document.getElementById("promoDura").value);
    console.log(header);
    console.log(duration);
    console.log(des);
    if ((des == "") || (duration == "") || (header == "") ) {
        alert('Please define a promotion header, duration and description.');
        return false;
      }
    var retVal = confirm("Do you want to continue ?");
    if (retVal == true) {
      axios.post("https://asia-east2-k-cash-less.cloudfunctions.net/api/admin/createPromotion", { header: header, description:des, duration:duration })
        .then((res => {
        console.log(res);
        document.getElementById("promoHeader").value = "";
        document.getElementById("promoDura").value = "";
        document.getElementById("promoDescptn").value = "";
        alert('Add promotion successfully.');
        }))
        .catch(error => {
            alert(error);
        });
      return true;
    } else {
      //document.write ("User does not want to continue!");
      return false;
    }
  }