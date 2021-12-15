var heading = document.createElement('p')
var boldtext = document.createElement('b')
boldtext.innerHTML = "Fill the Form";
heading.append(boldtext);
heading.style.backgroundColor = "yellow"
heading.style.width = "200px"
document.body.append(heading);

var form =  document.createElement('form');
form.setAttribute('class', 'form')

var label1 = createLabelelement('First Name');
var input1 = createInputelement('text','first_name', 'Enter First Name');

var label2 = createLabelelement('Middle Name');
var input2 = createInputelement('text','middle_name', 'Enter Middle Name');

var label3 = createLabelelement('Last Name');
var input3 = createInputelement('text','last_name', 'Enter Last Name');

var label4 = createLabelelement('Email');
var input4 = createInputelement('text','email', 'Enter Email address');


var input5 = createInputelement('submit','submit','');



form.append(label1,input1,label2,input2,label3,input3,label4,input4,input5);
document.body.append(form);



function createLabelelement(value){
    let element = document.createElement('label');
    element.innerHTML = value;
    element.setAttribute('class', 'label');
    element.style.marginTop = "20px";
    return element;
}
function createInputelement(type,id,placeholder){
    let element = document.createElement('input');
    element.setAttribute('type',type);
    element.setAttribute('id',id);
    if(placeholder != ""){
        element.setAttribute('placeholder',placeholder);
    }
    if(type === "submit"){
        element.setAttribute('onclick', 'myFunction()')
        element.style.marginTop = "20px";
    }
    element.setAttribute('class', 'input');
    return element;
}

function myFunction(){
    let First = document.getElementById("first_name").value;
    console.log("First Name:"+First);
    let Middle = document.getElementById("middle_name").value;
    console.log("Middle Name:" +Middle);
    let Last = document.getElementById("last_name").value;
    console.log("Last Name:"+Last);
    let address = document.getElementById("email").value;
    console.log("Email-address: "+address);
    
}