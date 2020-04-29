function logout(){
    document.getElementById("logout").innerHTML = "Please Wait...";
    localStorage.setItem("token","");
    console.log("logout success"); 

    alert('LOGOUT SUCCESS');
    window.location.replace("index.html");
}