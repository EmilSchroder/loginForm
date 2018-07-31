var profile = {
    username1: "test1",
    password1: "asdf"
};



function read(){
    let uName = document.getElementsByName('username')[0].value;
    let pWord = document.getElementsByName('password')[0].value;

    document.getElementById('testerText').innerHTML = verify(uName,pWord);

    
}

function verify(uName,pWord){
    if (uName===""){
        return("<strong>Please enter a username<strong>");
    } else if (pWord===""){
        return("<strong>Please enter a password<strong>");
    }
}