// for getting the 'x','o' as text for player;
let choice = ['x','o'];
var placeValue ;
var computerValue ;
var myArr = [[0,0,0],[0,0,0],[0,0,0]];
var row, column;
var count =0;
var won = false;
//  Alloting these two for displaying none and showing the as the block;
var battleField = document.getElementById('fieldId');
var chooseField = document.getElementById('queryButton');
var divCollect=document.querySelectorAll('.tile');


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
	document.querySelector('.resetBtn').style.display = 'block';
	row = Number((e.target.id).split('')[0]);
 	column = Number((e.target.id).split('')[1]);
 	if(e.target.innerHTML == 0){
		e.target.innerHTML = placeValue;
		myArr[row][column] = e.target.innerText;
 		count++;
 		if (!won){
				winningCondition();
			}
			if (count < 9){
 				count++
				setTimeout(compArray,700);
			}
 	}

});

var compArray = ()=>{
		var rndm1 = Math.floor(Math.random() * 3);
		var rndm2 = Math.floor(Math.random()* 3);

 		if(myArr[1][1] == 0){
 			myArr[1][1] = computerValue;
 			// count++
 			document.getElementById('11').innerHTML = computerValue;
 			// document.getElementsById('11').prop('contenteditable', false);
 		} 
 		else if (myArr[rndm1][rndm2] == 0){
 			myArr[rndm1][rndm2]= computerValue;
 			// count++
 			let numJoin = `${rndm1}${rndm2}`;
 			document.getElementById(numJoin).innerHTML = computerValue;
 			// document.getElementsById(numJoin).style.pointerEvents = 'none';
 		}
 		else{
 			compArray();
 		}
 		if (!won){
				winningCondition();
			}
 	};

var winningCondition = ()=>{
	for(var i = 0; i<3;i++){
		var winningCount = 0;
		for(var j=0;j<3;j++){
			if(myArr[i][j] === placeValue){
				winningCount +=1;
			}
			else if(myArr[i][j] === computerValue){
				winningCount -=1;
			}
		}
		winningAlert(winningCount);
	}
	for(var j = 0; j<3;j++){
		var winningCount = 0;
		for(var i=0;i<3;i++){
			if(myArr[i][j] === placeValue){
				winningCount +=1;
			}
			else if(myArr[i][j] === computerValue){
				winningCount -=1;
			}
		}
		winningAlert(winningCount);
	}

	var winningCount = 0;
	for(var i = 0; i<3;i++){
					if(myArr[i][i] === placeValue){
				winningCount +=1;
			}
			else if(myArr[i][i] === computerValue){
				winningCount -=1;
			}
		winningAlert(winningCount);
	}
	var winningCount = 0;
	for(var i = 0,j=2; i<3;i++,j--){
					if(myArr[i][j] === placeValue){
				winningCount +=1;
			}
			else if(myArr[i][j] === computerValue){
				winningCount -=1;
			}
		winningAlert(winningCount);
	}
};

var winningAlert = (winningCount)=>{
	if(winningCount == 3){
			alert("you win");
			won = true;
			document.getElementById('fieldId').style.pointerEvents = 'none';
		}
		else if(winningCount == -3){
			alert("computer win")
			won = true;
			document.getElementById('fieldId').style.pointerEvents = 'none';
		}
		// else if (count === 9){
		// 	alert("It's a tie")
		// }
	};

	var resetBtn = document.querySelector('.resetBtn');
	resetBtn.addEventListener("click",function(){
	location.reload();
	});