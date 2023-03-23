function validateForm(){
    // This is a Single Line Comment

    /* This is a 
        Multiline
        Comment*/

    //Alert('Validate Function Called Successfully');
    

    var errors = "";

    // This line is getting a Value of Element and Storing it in Variable
    var FullName = document.getElementById('FullName').value;
    //Check if Full Name Variable is Empty
    if(FullName==""){
        //Block alert("Please enter Full Name."); 
        //Block Action from Getting Executed
        //Block return false;
        errors+= "<li>Please enter Full Name.</li>";
        document.getElementById('FullName').classList.add('inputError');
    }
    else{
        document.getElementById('FullName').classList.remove('inputError')
    }

    var Username = document.getElementById('Username').value;
    if(Username==""){
        //Block alert("Please enter Username.");
        //Block return false;
        errors+= "<li>Please enter Username.</li>";
        document.getElementById('Username').classList.add('inputError');
    }
    else{
        document.getElementById(Username).classList.remove('inputError')
    }

    var UserPassword = document.getElementById('UserPassword').value;
    if(UserPassword==""){
        //Block alert("Please enter Password.");
        //Block return false;
        errors+= "<li>Please enter Password.</li>";
        document.getElementById('UserPassword').classList.add('inputError');
    }
    else{
        document.getElementById(Password).classList.remove('inputError')
    }

    var Nationality = document.getElementById('Nationality').value;
    if(Nationality=="0"){
        //Block alert("Please Select Nationality.")
        //Block return false;
        errors+= "<li>Please enter Nationality.</li>";
        document.getElementById('Nationality').classList.add('inputError');
    }
    else{
        document.getElementById(Nationality).classList.remove('inputError')
    }
    if(errors!=""){
        document.getElementById("ErrorList").innerHTML = errors;
        return false;
    }
    else{
        document.getElementById("ErrorList").innerHTML = "";
        return true;
    }

}

function resetForm() {
    //Block alert('reset');
    document.getElementById('errorList').innerHTML = "";
    document.getElementById('FullName').classList.remove('inputError');
    document.getElementById('Username').classList.remove('inputError');
    document.getElementById('Password').classList.remove('inputError');
    document.getElementById('Nationality').classList.remove('inputError');
}