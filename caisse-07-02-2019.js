//global variables
var TotalSum = 0;
var ItemList = new Array();
var newtab = new Array();
var yolo = 0;
//var TailleTableau = 0;
var test = 15;

var idcacherachat;

function addItem(button) {
	//alert(button.getAttribute("prix"));
	TotalSum = TotalSum + parseFloat(button.getAttribute("prix"));
	document.getElementById("Sum").innerHTML = "<h1>Total : " + TotalSum.toFixed(2) + " &euro;</h1>";
	document.getElementById("Sum2").innerHTML = "<h1>Total : " + TotalSum.toFixed(2) + " &euro;</h1>";
	TailleTableau = ItemList.push(button.getAttribute("nom"));
}



function afficher_cacher(id1, id2){

    if(document.getElementById(id1).style.visibility=="hidden") {
        document.getElementById(id1).style.visibility="visible";
        document.getElementById(id2).style.visibility="hidden";
        //document.getElementById(id3).style.visibility="hidden";
        document.getElementById('SessionSummary2').style.visibility="hidden";
        document.getElementById('SessionSummary').style.visibility="visible";
        document.getElementById('SessionBilling').innerHTML='<h1>Paiement</h1>';
        document.getElementById('Paiement').style.visibility="hidden";

        cacher_achat(idcacherachat);
    }

    else {
    	document.getElementById(id2).style.visibility="visible";
        document.getElementById(id1).style.visibility="hidden";
        document.getElementById('SessionSummary').style.visibility="hidden";
        document.getElementById('SessionSummary2').style.visibility="visible";
        document.getElementById('Paiement').style.visibility="visible";

        document.getElementById('test1').innerHTML = '<h1 style="color:white;">Nombre d\'articles : '+TailleTableau+'</h1>';
        //document.getElementById("test2").innerHTML = '<h1 style="color:white;">Liste de la commande : '+ ItemList +" </h1>";

        //document.getElementById("test2").innerHTML = test432();
        test432();

        document.getElementById('test2').innerHTML = '<h1 style="color:white;">Liste de la commande : '+ newtab +" </h1>";
       	
       	//for (i = 0; i < arrJour.length; i++){
      	//	document.getElementById("test").innerHTML = '<br /> <h3 style="color:white;">' + i + ' - ' + arrJour[i] + '</h3>';
   		//} 

        document.getElementById('SessionBilling').innerHTML='<h1>Retour</h1>';
        //document.getElementById('SessionCommande1').innerHTML='<h1>Retour</h1>';
        //document.getElementById('SessionCommande2').innerHTML='<h1>Retour</h1>';
    }
}

function test432(){
	newtab = new Array();
	var compt;
	var nope;
	var i;
	var j;
	var k;

	for (i = 0; i < ItemList.length; i++){
		comp = 1;
		for (j = i+1; j < ItemList.length; j++){
			if (ItemList[i] == ItemList[j]){
				comp++;
			}
		}
		nope = 0;
		for (k = 0; k < newtab.length; k++){
			if (ItemList[i] == newtab[k]){
				nope = 1;
			}
		}

		if (nope != 1){
			newtab.push(comp);
			newtab.push(ItemList[i]);
		}

	}

	//for (y = 0; y < newtab.length; y++){
	//	document.write(newtab[y]);
	//}
}


function commande_valide(){
	setTimeout(function() {alert('Commande validé'),document.location.reload(true);});
}
function commande_annule(){
	setTimeout(function() {alert('Commande annulé'),document.location.reload(true);});
}

function affichage_achat(idachat) {
	document.getElementById('SessionChoose').style.visibility="hidden";
	document.getElementById(idachat).style.visibility="visible";
	document.getElementById('SessionBilling').innerHTML='<h1>Retour</h1>';
	idcacherachat = idachat;
}

function cacher_achat(idcacher){
	document.getElementById(idcacher).style.visibility="hidden";
}

function afficher_cacher_button(idbutton1,idbutton2,info){
	document.getElementById(idbutton1).disabled = info;
	document.getElementById(idbutton2).disabled = info;
}

function changercouleur(idcouleur){
	var currentClass = document.getElementById(idcouleur).getAttribute("id");
	if(currentClass == 'Cheque'){
		document.getElementById(idcouleur).setAttribute("id", "Cheque2");
		afficher_cacher_button('CB','Especes',true);
	}
	else if (currentClass == 'Cheque2'){
	    document.getElementById(idcouleur).setAttribute("id", "Cheque");
	    afficher_cacher_button('CB','Especes',false);
	}
	else if(currentClass == 'CB'){
		document.getElementById(idcouleur).setAttribute("id", "CB2");
		afficher_cacher_button('Cheque','Especes',true);
	}
	else if (currentClass == 'CB2'){
	    document.getElementById(idcouleur).setAttribute("id", "CB");
	    afficher_cacher_button('Cheque','Especes',false);
	}
	else if(currentClass == 'Especes'){
		document.getElementById(idcouleur).setAttribute("id", "Especes2");
		afficher_cacher_button('Cheque','CB',true);		
	}
	else if (currentClass == 'Especes2'){
	    document.getElementById(idcouleur).setAttribute("id", "Especes");
	    afficher_cacher_button('Cheque','CB',false);
	}
}

function calculrendu(){
	var donnee = document.getElementById("montant").value; 
	var rendre = donnee - TotalSum;
	if (TotalSum == 0){
		document.getElementById("sommearendre").innerHTML = "<h1>Vous devez rendre : " + 0 + " &euro;</h1>";
	}
	else if(donnee == 0){
		document.getElementById("sommearendre").innerHTML = "<h1>ATTENTION Il manque : " + Math.abs(rendre.toFixed(2)) + " &euro;</h1>";
	}
	else if (rendre < 0){
		document.getElementById("sommearendre").innerHTML = "<h1>ATTENTION Il manque : " + Math.abs(rendre.toFixed(2)) + " &euro;</h1>";
	}
	else if (donnee == TotalSum){
		document.getElementById("sommearendre").innerHTML = "<h1>Le compte est bon</h1>";
	}
	else{
		document.getElementById("sommearendre").innerHTML = "<h1>Vous devez rendre : " + rendre.toFixed(2) + " &euro;</h1>";
	}
}

//bloqué validé si pas apuyer sur cb,cheque, espéce






var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  document.getElementById('test3').innerHTML ='test';
});