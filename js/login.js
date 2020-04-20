function loginFunc() {
    var tempToken;
    document.getElementById("info").innerHTML = "Please Wait...";
    var info = {email:document.getElementById("email").value,password:document.getElementById("pass").value};
    console.log(info);
    axios.post('https://asia-east2-k-cash-less.cloudfunctions.net/api/login',info)
        .then(value => {
            tempToken = res.data.token;
            alert('SUCCESS')
            window.location.replace("main.html");
        })
        .catch(error => alert(error));
    export { tempToken };
  }