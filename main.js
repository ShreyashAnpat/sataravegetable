// let tomatos_id = document.getElementById("table");

let tot;

var tomatos1 = 40;
var Lady_fingerss = 30;
var carrotsss = 40;
var bitter_ground_Rs = 50;
var lady_finge_Rs = 80;
var Cucumbers = 60;
var Cauliflowers = 50;
var ginger_roots = 50;
var Gavars = 40;
var Bringals = 30;
// function m() {
//     window.vaalue = 100; //declaring global variable by window object  
// }



// function n() {
//     alert(window.vaalue); //accessing global variable from other function  
// }
// m();
// n();

// var value = 50;

// function a() {
//     alert(window.value); //accessing global variable   
// }

// a();

function tomato_add() {
    var prose = document.getElementById("reu").value;



    var name = document.getElementById("tomatoname").innerHTML;

    var selectedvalue = document.getElementById("inputGroupSelect01").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = tomatos1 + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;
    tut();


}


let s = 0;

function tut() {
    s = s + parseInt(window.vaalue);
    alert(s);

    document.getElementById("totseee").innerHTML = s;
    return s;

}




// end tomato


function Lady_finger() {
    var prose = document.getElementById("potato_total").value;

    var name = document.getElementById("lady").innerHTML;

    var selectedvalue = document.getElementById("potato").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = Lady_fingerss + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}


// end lady_finher 

// start ginger-root 

function ginger_rootfind() {
    var prose = document.getElementById("total_lady_finger").value;

    var name = document.getElementById("ginger_root_name").innerHTML;

    var selectedvalue = document.getElementById("lady_finger").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = ginger_roots + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}
// end.............................


function carrotadd() {
    var prose = document.getElementById("carrot_carrot").value;

    var name = document.getElementById("carr").innerHTML;

    var selectedvalue = document.getElementById("carrot").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = carrotsss + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}




function bitter_groundadd() {
    var prose = document.getElementById("total_bitter_ground").value;

    var name = document.getElementById("bitter").innerHTML;

    var selectedvalue = document.getElementById("bitter_ground").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = bitter_ground_Rs + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}


// end Bitter-ground 



function Cucumberfin() {
    var prose = document.getElementById("total_Cucumber").value;

    var name = document.getElementById("name_cucumber").innerHTML;

    var selectedvalue = document.getElementById("Cucumber").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = Cucumbers + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}


// end Cucumberfin




function Cauliflowerfin() {
    var prose = document.getElementById("total_Cauliflower").value;

    var name = document.getElementById("Cauliflower_name").innerHTML;

    var selectedvalue = document.getElementById("Cauliflower").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = Cauliflowers + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}



//end  Cauliflowerfin() 







function Bringalfin() {
    var prose = document.getElementById("total_Bringal").value;

    var name = document.getElementById("Bringal_name").innerHTML;

    var selectedvalue = document.getElementById("Bringal").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = Bringals + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}

//end Bringals()











function Gavarfin() {
    var prose = document.getElementById("total_Gavar").value;

    var name = document.getElementById("Gavar_name").innerHTML;

    var selectedvalue = document.getElementById("Gavar").value;



    var weight = selectedvalue * 1000;

    if (weight > 999) {
        weight = weight / 1000 + " kg";
    } else {
        weight = weight + " gms."
    }

    var table = document.getElementById("adds");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = tomatos1 + " Rs.";
    cell3.innerHTML = weight;
    cell4.innerHTML = prose + " Rs.";


    window.vaalue = prose;

    tut()

}

function ddcelecter() {
    var selectedvalue = document.getElementById("inputGroupSelect01").value;

    var total = selectedvalue * tomatos1;
    document.getElementById("reu").value = total + " Rs.";

}
ddcelecter();

function potato() {
    var selectedvalue = document.getElementById("potato").value;
    var total = Lady_fingerss * selectedvalue;
    document.getElementById("potato_total").value = total + " Rs.";

}
potato();


function carrot() {
    var selectedvalue = document.getElementById("carrot").value;
    var total = carrotsss * selectedvalue;
    document.getElementById("carrot_carrot").value = total + " Rs.";

}
carrot();



function bitter_ground() {
    var selectedvalue = document.getElementById("bitter_ground").value;
    var totalss = bitter_ground_Rs * selectedvalue;
    document.getElementById("total_bitter_ground").value = totalss + " Rs.";

}
bitter_ground();




function lady_finger() {
    var selectedvalue = document.getElementById("lady_finger").value;
    var totalss = ginger_roots * selectedvalue;
    document.getElementById("total_lady_finger").value = totalss + " Rs.";

}
lady_finger();


function Cucumber() {
    var selectedvalue = document.getElementById("Cucumber").value;
    var totalss = Cucumbers * selectedvalue;
    document.getElementById("total_Cucumber").value = totalss + " Rs.";

}
Cucumber();


function Cauliflower() {
    var selectedvalue = document.getElementById("Cauliflower").value;
    var totalss = Cauliflowers * selectedvalue;
    document.getElementById("total_Cauliflower").value = totalss + " Rs.";

}
Cauliflower();

function Gavar() {
    var selectedvalue = document.getElementById("Gavar").value;
    var totalss = Gavars * selectedvalue;
    document.getElementById("total_Gavar").value = totalss + " Rs.";

}
Gavar();


function Bringal() {
    var selectedvalue = document.getElementById("Bringal").value;
    var totalss = Bringals * selectedvalue;
    document.getElementById("total_Bringal").value = totalss + " Rs.";

}
Bringal();


a