let petSalon = {
    name: "The Fashion Pet",
    address: {
        street:  "Wagalong st",
        zip:  "48484"
    },
    hours:{
        open:"9:00am",
        close: "8:00pm"
    },
    pets:[]
}

function Pet(name, age, gender, breed, service, oname, cphone){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.serviceRequested=service;
    this.ownerName=oname;
    this.contactPhone=cphone;

}

//get info from inputs and store the information (store it where?)

let inputName=document.getElementById("textName");
let inputeAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtTel");

function isValid(aPet){
    //return false when the pet is not valid
    //return true what the pet is valid
    let valid=true;
    if(aPet.petName.length==0){
       //if we get here, it means that the name is not valid
        valid=false;
        console.error("Invalid Name");
    }
    if(aPet.service.length==0){
        valid=false;
        console.error("Invalid Name");
    }
    if(aPet.phone.length==0){
        valid=false;
        console.error("Invalid Name");
    }

    return valid; //could be true or false
}

function register(){
    //create pet
    let thePet = new Pet (inputName.value,inputAge.value,inputGender.value, inputBreed.value, inputOwner.value, inputService.value, inputPhone.value); 
    if(isValid(thePet));
    petSalon.pets.push(thePet);
    //displayPet();
    displayCards();
    clearInputs();
    
    //push pet into array
    //clear inputs

}

function clearInputs(){

}

let pet1= new Pet("Louise", "female", "pitbull-mix", "full-groom", "Jason", "781-864-5555");
let pet2= new Pet("Coco","female", "Shepherd-Mix", "nail-clipping", "Jen", "647-563-46474");
let pet3= new Pet("Django","female", "Mutt", "Poofing", "Dion", "647-563-46474");

petSalon.pets.push(pet1, pet2);
displayCards();