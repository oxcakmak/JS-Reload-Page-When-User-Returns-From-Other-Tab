/*
Author: Osman Çakmak
Skype: oxcakmak
Email: oxcakmak@hotmail.com
Website: http://oxcakmak.com/
Country: Turkey [TR]
*/

var reLoad = 0;
document.addEventListener("visibilitychange", function() {
	if (document.hidden){
		setInterval(function(){
		if(reLoad == 1){ location.reload(); }
		}, 500);
	} else {
		reLoad += 1;
		console.log(reLoad); 
	}
});
