var tempToken;
function loginFunc() {
    document.getElementById("info").innerHTML = "Please Wait...";
    var info = {email:document.getElementById("email").value,password:document.getElementById("pass").value};
    console.log(info);
    axios.post('https://asia-east2-k-cash-less.cloudfunctions.net/api/login',info)
        .then(res => {
            tempToken = res.data.token;
            localStorage.setItem("token",tempToken);
            console.log(tempToken); 
            alert('SUCCESS');
            window.location.replace("main.html");
        })
        .catch(error => alert(error));
  }