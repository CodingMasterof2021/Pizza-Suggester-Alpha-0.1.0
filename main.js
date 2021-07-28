//Global Vars
var orginsuggest = ["Cheesy Nuggets","Coke","Sprite","ChickenBrothPizza "];
var suggestionlist = [""];
var cload = suggestionlist;
var cload_successTEXT = "CLOAD processing done..."; 

function addSuggestion() {
    // Check for CLOAD
    if (cload = null) {
        displayCLOAD_null();
    } else {
        displayCLOAD_filled();
    }
  
    //List vars for loading into main array
    var suggestion1 = document.getElementById("suggestionBox1").value;
    var suggestion2 = document.getElementById("suggestionBox2").value;
    var suggestion3 = document.getElementById("suggestionBox3").value;
    var suggestion4 = document.getElementById("suggestionBox4").value;

    //Load previously declared varibles into main array
    suggestionlist.push(suggestion1);
    suggestionlist.push(suggestion2);
    suggestionlist.push(suggestion3);
    suggestionlist.push(suggestion4);

    //Display on log
    console.log(suggestionlist);

    //Display the list on webpage
    document.getElementById("list").innerHTML = suggestionlist;

    //Make submit btn invis
    document.getElementById("suggestbtn").style.display = "none";
    
    //Make sort btn visible
    document.getElementById("sortbtn").style.display = "inline-block";
}

//Function for CLOAD error
function displayCLOAD_null() {
    console.log("Data could not be pulled from inputs. CLOAD error.");
}

//Function for CLOAD success
function displayCLOAD_filled() {
    console.log("CLOAD processing done...");
    document.getElementById("cload_info").innerHTML = cload_successTEXT;
}

//Function to sort the suggestion list
function sortSuggestion() {
    
    //Function to sort
    suggestionlist.sort();

    //Display on log
    console.log(suggestionlist);

    //Display on webpage
    document.getElementById("list").innerHTML = suggestionlist;

    //Make sort btn invis
    document.getElementById("sortbtn").style.display = "none";
    
    //Make join btn visible
    document.getElementById("publishbtn").style.display = "inline-block";
    
}

//Function to join with orginlist
function joinSuggestion() {
    orginsuggest.push(suggestionlist);

    //Display on log
    console.log(orginsuggest);

    //Display on webpage
    document.getElementById("list").innerHTML = orginsuggest;
}