/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropClick(abc) {
  document.getElementById("amt").innerHTML = abc;

}

function getPinConfirmation() {
  var idP = (document.getElementById("amt").innerHTML);
  var num = (document.getElementById("num").value);
  console.log(idP);
  console.log(num);
  if ((idP == "Value") || (num == "")) {
    alert('Please define a value and number.');
    return false;
  }
  var retVal = confirm("Do you want to continue ?");
  if (retVal == true) {
    tempToken = localStorage.getItem("token");
    //document.write ("User wants to continue!");
    //axios.post("https://asia-east2-k-cash-less.cloudfunctions.net/api/merchant/")",{handle:idP})
    axios.post("https://asia-east2-k-cash-less.cloudfunctions.net/api/admin/generatePrepaidCard",{value:idP,number:num},{ 'headers': { 'Authorization': 'Admin ' + tempToken } })
      .then((res => {
        console.log(res);
      }))
      .catch(error => {
        console.log(error.response);
        alert(error);
      });
    return true;
  } else {
    //document.write ("User does not want to continue!");
    return false;
  }
}