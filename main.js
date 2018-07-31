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
    } else{
        return(crossCheck(uName,pWord));
    }
}

function crossCheck(uName,pWord){
    if(uName != profile.username1){
        return('<strong>Username not on record</strong>');
    } else if(uName == profile.username1){
        if(pWord == profile.password1){
            document.getElementById('testerText').style.color = 'green';
            return('<strong>LOGIN SUCCESSFUL</strong>');
        } else if(pWord != profile.password1){
            return('<strong>Password does not match username</strong>');
        }
    }
}