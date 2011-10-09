/*Activity 2
 Visual frameworks (VFW)
 Mobile Development
 Full Sail University
ChuckSchotborgh*/

window.addEventListener("DOMContentLoaded", function(){

	
	/*getElementById Function*/
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	/*Create a select field element and populate with options*/
	function makeCats(){
		var formTag = document.getElementsByTagName("form");
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=contactGroups.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	/*Find value of selected radio button.*/
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}
	
	function getCheckboxValue(){
		if($('fav').checked){
			favoriteValue = $('fav').value;
		} else{
			favoriteValue = "No";
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "none";
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	function storeData(){
		var id 				= math.floor(math.random()*10000001);
		/*Gather up all form field values and store in an object.
		/*Object properties contain array with the from label input value.*/
		getSelectedRadio();
		getCheckboxValue();
		var item			= {};
			item.group		= ["Group:", $('groups').value];
			item.fname		= ["First Name:", $('fname').value];
			item.lname		= ["Last Name:", $('lname').value];
			item.email		= ["Email", $('email').value];
			item.sex		= ["Sex", sexValue];
			item.favorite		= ["Is a favorite", favoriteValue];
			item.date		= ["Date", $('date').value];
			item.notes		= ["Notes", $('notes').value];
		/*Save data into Local Storage; Use Stringify to convert our object to a string.*/
		localStorage.setItem(id, JSON.Stringify(item));
		alert("Contact Saved!");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in Local Storage.");
		}
		
		/*Write Data from Local Storage to the Browser.*/
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makelist.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			/*convert the string from local storage value back to an object by using JSON.parse*/
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
		}
	}
}

function clearLocal(){
	if(localStorage.length === 0){
		alert("There is no data to clear.")
	}else{
		localStorage.clear();
		alert("All contacts are deleted!");
		window.location.reload();
		return false;
	}
	/*Variable defaults*/
	var contactGroups = ["--Choose A Group--", "Frends", "Family", "Work"];
		sexValue,
		favoriteValue = "No"
	;
	/*Run makeCats();*/
	makeCats();

	/*Set Link & Submit Click Events*/
	var displaylink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);/*Changes to validate in week 3.*/
	var radios = document.form[0].sex;
	for (var i=0; i<radios.length; i++){
		radios[i].addEventListener("click", getSelectedRadio);
	}

});