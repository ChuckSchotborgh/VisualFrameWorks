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
    
    function storeData(){
    var id        = Math.floor(Math.random()*100000001);
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

        function editItem(){
            var value = localStorage.getItem(this.key);
            var item = JSON.parse(value);
            
            toggleControls("off");
            
            $('groups').value = item.group[1];
            $('fname').value = item.fname[1];
            $('lname').value = item.lname[1];
            $('email').value = item.email[1];
            var radios = document.forms[0].sex;
            for (var i=0; i<radios.length; i++){
                if(radios[i].value == "Male" && item.sex[1] == "Male"){
                    radios[i].setAttribute("checked", "checked");
                }else if(radios[i].value == "Female" && item.sex[1] == "Female"){
                    radios[i].setAttribute("checked", "checked");
                }
            }
            if(item.favorite[1] == "Yes"){
                $('fav').setAttribute("checked", "checked");
            }
            $('iq').value = item.iq[1];
            $('date').value = item.date[1];
            $('notes').value = item.notes[1];
        
        save.removeEventListener("click", storeData);
        $('submit').value ="Edit Contact";
        var editSubmit = $('submit');
        editSubmit.addEventListener("click", validate);
        editSubmit.key =this.key;
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

    function validate(e){
        var getGroup = $('groups');
        var getFname = $('fname');
        var getLname = $('lname');
        var getEmail= $('email');
        
        //Reset e messages
        errMsg.innerHTML = "";
             getGroup.style.border = "1px solid black";
             getFname.style.border = "1px solid black";
             getLname.style.border = "1px solid black";
             getEmail.style.border = "1px solid black";
        
        //Get Error Messages
        var messageAry = [];
        //Group Validation
        if(getGroup.value ==="--Choose A Group--"){
            var groupError = "Please choose a group.";
            getGroup.style.border = "1px solid red";
            messageAry.push(groupError);
        }
        
        //First Name Validation
        if(getFname.value === ""){
            var fNameError = "Please enter a first name.";
            getFname.style.border = "1px solid red";
            messageAry.push(fNameError);
        }
        
        //Last Name Validation
        if(getLname.value === ""){
            var lNameError = "Please enter a last name.";
            getLname.style.border = "1px solid red";
            messageAry.push(lNameError);
        }
        
        //Email Validation
        var re = /^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(re.exec(getEmail.value))) {
            var emailError = "Please enter a valid email address.";
            getEmail.style.border = "1px solid red";
            messageAry.push(emailError);
        }
        
        if(messageAry.length >= 1){
            for(var i=0, j=messageAry.length; i < j; i++){
                var txt = document.createElement('li');
                txt.innerHTML = messageAry[i];
                errMsg.appendChild(txt);
        }
        
        e.preventDefault();
        return false;
        }else{
            //if all is ok save the data!
            storeData();
        }

    }
    
    /*Variable defaults*/
    var contactGroups = ["--Choose A Group--", "Friends", "Family", "Work"],
        sexValue,
        favoriteValue = "No",
        errMsg = $('errors')
    ;
    makeCats();
     
    var displaylink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", validate);
});