// for getting the 'x','o' as text for player;
let choice = ['x','o'];
var placeValue ;
var computerValue ;
//  Alloting these two for displaying none and showing the as the block;
var battleField = document.getElementById('fieldId');
var chooseField = document.getElementById('queryButton');
var myArr=[];
var compArr=[];
let condition1 = [0,0,0,0,0,0,0,0,0];	
var divCollect=document.querySelectorAll('.tile');
var x = Math.floor((Math.random() * 9));
console.log (x);

// choosing the value of our player; 
document.getElementById('choice').addEventListener('click', function(e){
	if(e.path[0].title == 'x'){
		console.log("x");
		placeValue = choice[0];
		computerValue = choice[1];
		battleField.style.display = 'block';
		chooseField.style.display = 'none';
	}else 
	{
		placeValue = choice[1];
		computerValue = choice[0];
		battleField.style.display = 'block';
		chooseField.style.display = 'none';
	}
	});
// Alloting the value to the div;
document.getElementById('fieldId').addEventListener('click', function(e){
	var y = Number(e.path[0].title);

	myArr.push(y);
	e.target.innerHTML = placeValue;
	condition1[y] = 1;
	checkpost();
		// smartMove();
	// conditionCheck();
	console.log (compArr,myArr);

});
checkpost = ()=>{
	if(myArr.length>2 || compArr.length>2){
		declareWinner();
		smartMove();
	}
	// else if(myArr.length>1 || compArr.length>1){
	// 	smartMove();
	// }
	else {
		conditionCheck();
	}
};

declareWinner = ()=> {
	var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		winningCombinations.sort();
		myArr.sort();
		compArr.sort();
		
		winningCombinations.filter((val)=>{
		for (let i = 0; i<3;i++){
			if(myArr[i] === val[i]){
				return(document.getElementById('winAnounce').innerText= 'You win');
			}
			 else if(compArr[i] === val[i]){
					return(document.getElementById('winAnounce').innerText= 'Computer win');
				}
			}
		}
	
	)
}

conditionCheck = ()=>{
		if(condition1[4] == 0) {
			condition1[4]=1;
			compArr.push(4);
			return (divCollect[4].innerHTML = computerValue);
}else if (condition1[0] == 0){
	condition1[0]=1;
	console.log (condition1);
	compArr.push(0);
	return(divCollect[0].innerText = computerValue)
}
else if (condition1[8] == 0){
	condition1[8]=1;
	console.log (condition1);
	compArr.push(8);
	return(divCollect[8].innerText = computerValue)
}else if (condition1[5] == 0){
	condition1[5]=1;
	console.log (condition1);
	compArr.push(5);
	return(divCollect[5].innerText = computerValue)
}else if (condition1[7] == 0){
	condition1[7]=1;
	console.log (condition1);
	compArr.push(7);
	return(divCollect[7].innerText = computerValue)
}else if (condition1[1] == 0){
	condition1[1]=1;
	console.log (condition1);
	compArr.push(1);
	return(divCollect[1].innerText = computerValue)
}else if (condition1[6] == 0){
	condition1[6]=1;
	console.log (condition1);
	compArr.push(6);
	return(divCollect[6].innerText = computerValue)
}else if (condition1[3] == 0){
	condition1[3]=1;
	console.log (condition1);
	compArr.push(3);
	return(divCollect[3].innerText = computerValue)
}else if (condition1[2] == 0){
	condition1[2]=1;
	console.log (condition1);
	compArr.push(2);
	return(divCollect[2].innerText = computerValue)
}
};

smartMove = ()=>{
	var element = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	for (var j = 0; j<element.length; j++){
		for(var k =0; k<3;k++){
			var smartVar = element[j][k];
				console.log (smartVar);
			if(myArr[smartVar] == 0 || compArr[smartMove] == 0){
				condition1[smartVar]=1;
				console.log (condition1);
				compArr.push(smartVar);
				return(divCollect[smartVar].innerText = computerValue)
			}
		}
	}
};
// winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];