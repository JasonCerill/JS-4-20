//display pets in list items

function displayPet(){
    
    
    let tmp="";  //clear the field
    for(let i=0;i<petSalon.pets.length;i++);{
          //get each pet
        tmp+=`<li>${pet.petName} --- ${pet.age}</li>`; //concatenation\
     
    }
document.getElementById("pets").innerHTML=tmp;

}


//display pets in cards

function displayCards(){
    let tmp="";  
    for(let i=0;i<petSalon.pets.length;i++);
    let pet = petSalon.pets[i];
    tmp=`
    <div class="pet">
        <h4>${pet.petName}</h4>
        <label>${pet.age}</label>

    </div>
    `;
    document.getElementById("pets").innerHTML=tmp;
}

//display pets in table