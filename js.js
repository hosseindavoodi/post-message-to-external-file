var childhtml;
const chtmlN = "popup";
function openChild() {
	childhtml = window.open('HTMLchild.html', chtmlN, 'height=800px, width=600px');
}
	
	
function sendMessage(){
	var inputname = document.getElementById('inputname').value;
    let msg={Name : inputname};
   
    childhtml.postMessage(msg,'*')
    childhtml.focus();
}