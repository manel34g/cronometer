var data = new Date(2018, 11, 24, 10, 33, 0, 0);
function fontChange () {
	var elmnt = document.getElementsByClassName('letter')[rndNum(12,0)];
	elmnt.style.transform = "skew(" + rndNum(30,0)+"deg, "+ rndNum(30,0)+"deg)";
	elmnt.style.backgroundColor = "rgb("+ rndNum(255,0) + "," + rndNum(255,0) + "," + rndNum(255,0)+ ")"
}
function rndNum (Max,Min){
	var Num = Math.floor((Max - Min)*Math.random())
	return Num
}

function crm (){
	var uls = document.getElementsByTagName("ul")[0]
	var ulds = document.getElementsByTagName("ul")[1]
	if ( data.getSeconds() >= 10) {
		ulds.style.top = (Math.floor(data.getSeconds()/10)*121*(-1)) + "px";
		uls.style.top = (parseInt(data.getSeconds().toString()[1])*121*(-1)) + "px" ;
	}else{
		ulds.style.top = (Math.floor(data.getSeconds()/10)*121*(-1)) + "px";
		uls.style.top = (parseInt(data.getSeconds().toString()[0])*121*(-1)) + "px" ;
	}
}
function dataPlus1 (){
	data.setSeconds(data.getSeconds() + 1)
}
setInterval(dataPlus1,1000)