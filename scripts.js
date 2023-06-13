    // SignUp validation.
    function validation()
    {  
        var usernames = document.getElementById('userInp').value;
        var email = document.getElementById('emailInp').value;
        var pass = document.getElementById('passwordInp').value;

        // Validation For Username.
        if (usernames == "")
        {
            document.getElementById('usernamee').innerHTML="*Please Write Username.";
            return false;
        }
        if (usernames.search(" ")==0)
        {
            document.getElementById('usernamee').innerHTML="*Space Is Not Allowed.";
            return false;
        }
        if(usernames.length<2)
        {
            document.getElementById('usernamee').innerHTML="*Please Write More than One Character.";
            return false;
        }
        if(!isNaN(usernames))
        {
            document.getElementById('usernamee').innerHTML="*Please Write Alphabets Only.";
            return false;
        }
        else
        {
                document.getElementById('usernamee').innerHTML=""
        }

        
        // Validation For Eamil.
        if (email == "")
        {
            document.getElementById('emaill').innerHTML="*Please Enter Email.";
            return false;
        }
        if (email.indexOf('@') <=0)
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of @";
            return false;
        }
        if (email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.')
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of . ";
            return false;
        }
        else
        {
            document.getElementById('emaill').innerHTML="";
        }
         

        // Validation For Password. 
        if (pass == "")
        {
            document.getElementById('passwordd').innerHTML="*Please Enter the Password.";
            return false;
        }
        if (pass.length<8)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 8 Characters.";
            return false;
        }
        if (pass.search(/[0-9]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Numeric Characters.";
            return false;
        }
        if (pass.search(/[a-z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Lower Case Characters.";
            return false;
        }
        if (pass.search(/[A-Z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Upper Case Characters.";
            return false;
        }
        if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\,\>\[\]\?]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Special Symbol.";
            return false;
        }
        else
            {
                document.getElementById('passwordd').innerHTML="";
            }
    }

    //Login Validation.
    function loginValidation()
    {  
        var email = document.getElementById('emailInp').value;
        var pass = document.getElementById('passwordInp').value;

        // Validation For Eamil.
        if (email == "")
        {
            document.getElementById('emaill').innerHTML="*Please Enter Email.";
            return false;
        }
        if (email.indexOf('@') <=0)
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of @";
            return false;
        }
        if (email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.')
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of . ";
            return false;
        }
        else
        {
            document.getElementById('emaill').innerHTML="";
        }

        // Validation For Password. 
        if (pass == "")
        {
            document.getElementById('passwordd').innerHTML="*Please Enter the Password.";
            return false;
        }
        if (pass.length<8)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 8 Characters.";
            return false;
        }
        if (pass.search(/[0-9]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Numeric Characters.";
            return false;
        }
        if (pass.search(/[a-z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Lower Case Characters.";
            return false;
        }
        if (pass.search(/[A-Z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Upper Case Characters.";
            return false;
        }
        if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\,\>\[\]\?]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Special Symbol.";
            return false;
        }
        else
            {
                document.getElementById('passwordd').innerHTML=""
            }
    }

    // Local Storage of Data.
    function saveData()
    {
    let name,email,psw,dob;
    name=document.getElementById("userInp").value;
    email=document.getElementById("emailInp").value;
    psw=document.getElementById("passwordInp").value;
    dob=document.getElementById("dobInp").value;

    // Encryption Of Password
    var secretPass = "aasdfghjkllf@#$%T^Y"
    var encryptedPass = CryptoJS.AES.encrypt(psw, secretPass).toString();

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
      alert("duplicate data");
    }
    else
    {
      user_records.push({
      "Name":name,
      "Email":email,
      "Password":encryptedPass,
      "DOB":dob })
    localStorage.setItem("users",JSON.stringify(user_records));
    }
    }

    //Login Verification.
    function loginAuthentic()
    {
        let email,psw;
        email=document.getElementById("emailInp").value;
        psw=document.getElementById("passwordInp").value;

        var secretPass = "aasdfghjkllf@#$%T^Y"

        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

        for(var p in user_records){
            var encryptedPass=user_records[p].Password;
        }
        
        var decryptedPass = CryptoJS.AES.decrypt(encryptedPass, secretPass)
        var plaintext = decryptedPass.toString(CryptoJS.enc.Utf8);
        

        
        if(user_records.some((v)=>{return v.Email==email && plaintext==psw}))
        {
            document.getElementById('LoginPass').innerHTML="*Login Successful, Welcome Back!";
           // window.location.href="home.html";
        }
        else
        {
            document.getElementById('LoginFail').innerHTML="*Incorrect Email or Password, Please Enter Correct Email and Password!";
        }
    }
    
    //Date of Set to Current Date.
    function getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
       if(dd<10) {
            dd = '0'+ dd;
        } 
        if(mm<10) {
            mm = '0'+ mm;
        } 
       let maxDate =  yyyy + '-' + mm + '-' + dd;
        var maxValue=document.getElementById("dobInp").setAttribute('max',maxDate);
     }
      window.onload = function() {
        getDate();
      }

    // Fetch API Data.
    async function callAPI(){
        let result = await fetch('https://jsonplaceholder.typicode.com/posts');
        result = await result.json()
        console.warn(result)
        document.getElementById('userData').innerHTML=result.map((user)=>
        `<tr>
        <td>${user.id}</td>
        <td>${user.title}</td>
        <td>${user.body}</td>
        </tr>`
        ).join("")
    }
    callAPI()

    //Check New Password and Confirm Password Same.
    function passwordSame()
    {
        var newpass = document.getElementById('newpass').value;
        var conpass = document.getElementById('conpass').value
        if(newpass == conpass)
        {
            document.getElementById('LoginPass').innerHTML="Password Reset Successful!";
            window.location.href="login.html";
        }
        else
        {
            document.getElementById('LoginFail').innerHTML="*Passwords are not!";   
        }
    }
