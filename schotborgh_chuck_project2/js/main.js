//Activity 2
//Visual Frameworks
//Mobile Development
//Chuck Schotborgh

//Wait until the dom is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
	function $(x){
		var theElement = documnet.getElemantById(x);
		return theElement;
	}
	//Create a select field element and populate with options
	function makeCats(){
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
			//item.unknown	= ["Sex", sexValue];
			//item.level	= ["Level", levelValue];
		//Save data into Local Storage; Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.Strinify(item));
		alert("Contact Saved!");
		}
			item.group
		localStorage.setItem("test", "hello");
		alert(localStorage.length)
	}
	//Variable defaults
	var contactGroups = ["--Choose A Group--", "Frends", "Family" "Work"];
	makeCats();

	//Set Link & Submit Click Events
	var displaylink =$('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink =$('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
});



