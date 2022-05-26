let massige='';

function show(id) {
    
    document.getElementById(id).style.display="block";
}    
function err() {
    document.getElementById("error").innerText=massige;
}

function passChick(){
let pass =document.getElementById('pass').value;    
var upperCaseLetters = /[A-Z]/g;

let numbers= /[0-9]/g;
let special = /^(?=.*[-+_!@#$%^&*., ?]).+$/;
let x=0;

if (!pass.charAt(0).match(upperCaseLetters)) {
    massige+='for pasword:\nmake first letter to be upper case\n';
   err(); 
   ++x;
}   
if (!numbers.test(pass)) {
    massige+= 'add a number\n';
   err(); 
   ++x;
}  
if (pass.length!=8) {
    massige+="password sholed by 8 characters no more no less.\n";
   err();     ++x;

}   
if (!special.test(pass)) {
    massige+='add special character.\n';
   err();     ++x;

}   
if (/[ ]/.test(pass)) {
    massige+='remove white spaces\n';
    err();     ++x;

} 
// -------------------
mail = document.getElementById('uname').value;
if(!/[@]/.test(mail)){
    massige+="\nfor email:\nemail should have one ( @ )\n"; err();
    ++x;
}

// --------------
let phone,i,counter5=0;
phone = document.getElementById('num').value;
//    console.log(phonne[10]));
if(phone.length != 11){
    massige+= "\nfor phone number:\nphone number must contain (11) numbers \n";err();
}
for(i=0;i<11;++i){
    if(phone[i]>=0){
        ;
    }else{
        ++counter5;
    }
}
if(counter5 != 0){
    massige+= "All input must be Numbers\n";err();}
// --------

massige='';
if (x==0) {err();}

}
