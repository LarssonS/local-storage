const localStorageKey = "Text";
var getText = function(){
	var savedValue = localStorage.getItem(localStorageKey);
	if(savedValue == null){
		savedValue = "";
	}
	return savedValue;
}
var setText = function(text){
	var value = getText() + " " + text;
	localStorage.setItem(localStorageKey, value);	
}
var clearLocalStorage = function(){
	localStorage.removeItem(localStorageKey);
}
clearLocalStorage();
setText("Javascript");
setText("is");
setText("cool");
alert(getText());
