//Activity 2
//Visual Frameworks
//Mobile Development
//Chuck Schotborgh

//Wait until the dom is ready.
window.addEventListener("DOMContentLoaded", function(){
	alert(localStorage.value(0))
	//getElementById Function
	function $(x){
		var theElement = documnet.getElemantById(x);
		return theElement;
	}
	//Create a select field element and populate with options
	function makeCats(){c
		var fromTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttrbute("id", "groups");
		for(var i=0, j=contactGroups.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText =contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText);
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	//Find value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked]{
				sexValue = radios[i].value;
			}
		}
	}
	function getCheckboxValue(){
		if($('fav').checked){
			favoriteValue = $('fav').value;
		} else{
			favoriteValue = "No"
		}
	}
	
	function storeData(){
		var id = math.floor(math.random()*10000001);
		//Gather up all form field values and store in an object.
		//Object properties contain array with the from label input value.
		var item			= {};
			item.uname		= ["UserName", $('uname').value];
			item.pword		= ["Password", $('pword').value];
			item.email		= ["Email", $('email').value];
			item.url		= ["Post to My Blog or Website", $('url').value];
			item.date		= ["Date", $('date').value];
			item.notes		= ["Notes", $('notes').value];
			item.group		= ["Group", $('groups').value];
			item.loep		= ["Range", $('loep').value];
			item.sex		= ["Sex", sexValue];
			item.fav		= ["Panic", favoriteValue];
		//Save data into Local Storage; Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.Strinify(item));
		alert("Contact Saved!");
	}

	//Variable defaults
	var contactGroups = ["--Choose A Group--", "Frends", "Family" "Work"],
		sexValue,
		favoriteValue = "No"
	;
	makeCats();

	//Set Link & Submit Click Events
	/*
	var displaylink =$('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink =$('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("click", storeData);
});




