/*Activity 4
 Visual frameworks (VFW)
 Mobile Development
 Full Sail University
ChuckSchotborgh*/

window.addEventListener("DOMContentLoaded", function(){

	function $(x){
	    var theElement = document.getElementById(x);
	    return theElement;
	}
	function makeCats(){
	    var formTag = document.getElementsByTagName("form"),
		selectLi = $("select"),
		makeSelect = document.createElement("select");
		makeSelect.setAttribute("id", "groups");
	    for(var i=0, j=contactGroups.length; i < j; i++ ){
		var makeOption = document.createElement("option");
		var optText = contactGroups[i];
		makeOption.setAttribute("value", contactGroups [i]);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
	    }
	    selectLi.appendChild(makeSelect);
	}
	function getSelectedRadio(){
	    var radios = document.forms[0].sex;
	    for(var i=0; i<radios.length; i++){
		if(radios[i].checked){
		    sexValue = radios[i].value;
		}
	    }
	}
	
	function setCheckboxValue(){
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
                $('addNew').style.display = "inline";
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
	var id        =Math.floor(Math.random()*100000001);
	getSelectedRadio();
	getSelectedRadio();
	    var item        = {};
	    item.group         = ["Group:", $('groups').value];
	    item.fname        = ["First Name:", $('fname').value];
	    item.lname        = ["Last Name:", $('lname').value];
	    item.sex        = ["Sex:", sexValue];
	    item.favorite   = ["Is a Favorite:", favoriteValue];
	    item.iq            = ["IQ", $('iq').value];
	    item.date        = ["Date", $('date').value];
	    item.notes        = ["Notes", $('notes').value];
	    localStorage.setItem(id, JSON.stringify(item));
	    alert("Contact Saved!");
	}
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in the Local Storage.");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
		    var makeli = document.createElement('li');
		    var linksLi = document.createElement('li');
		    makeList.appendChild(makeli);
		    var key = localStorage.key(i);
		    var value = localStorage.getItem(key);
			
		    var obj = JSON.parse(value);
		    var makeSubList = document.createElement('ul');
		    makeli.appendChild(makeSubList);
		    for(var n in obj){
			var makeSubli = document.createElement('li');
			makeSubList.appendChild(makeSubli);
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubli.innerHTML = optSubText;
			makeSubList.appendChild(linksLi);
		    }
		    makeItemLinks(localStorage.key(i), linksLi);
		}
	}
	function makeItemLinks(key, linksLi){
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Contact";
		//editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var breakTag =document.createElement('br');
		linksLi.appendChild(breakTag);
		
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Contact";
		//deleteLink.addEventListener("click", editItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	function clearLocal(){
		if (localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert ("all contacts are deleted");
			window.location.reload();
			return false;
		}
	}
    
    /*Variable defaults*/
    var contactGroups = ["--Choose A Group--", "Friends", "Family", "Work"],
    sexValue,
    favoriteValue = "No"
    ;
    makeCats();
     
    var displaylink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", storeData);
});