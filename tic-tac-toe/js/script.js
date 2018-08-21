//  "Выберите сложность!"
function complexity() {
    alert('Выберите уровень сложности, перед началом игры!');
}

var
	field1       = false,
	field2       = false,
	field3       = false,
	field4       = false,
	field5       = false,
	field6       = false,
	field7       = false,
	field8       = false,
	field9       = false,
	fieldCross1  = false,
	fieldCross2  = false,
	fieldCross3  = false,
	fieldCross4  = false,
	fieldCross5  = false,
	fieldCross6  = false,
	fieldCross7  = false,
	fieldCross8  = false,
	fieldCross9  = false,
	fieldCircle1 = false,
	fieldCircle2 = false,
	fieldCircle3 = false,
	fieldCircle4 = false,
	fieldCircle5 = false,
	fieldCircle6 = false,
	fieldCircle7 = false,
	fieldCircle8 = false,
	fieldCircle9 = false,
	fieldCross   = 0,
	fieldCircle  = 0,
	strokeCross1, strokeCross2, strokeCross3,
	strokeCircle1, strokeCircle1;

// ****  circles ****

function circle1(y) {
	document.getElementById('field-1').innerHTML = '<img src="img/circle.png">';
	field1 = true;
	fieldCircle1 = true;
	fieldCircle++; 
	if (y != 1){
		circle(1);
	} else {
		lossCross();
	}
}

function circle2(y) {
	document.getElementById('field-2').innerHTML = '<img src="img/circle.png">';
	field2 = true;
	fieldCircle2 = true;
	fieldCircle++; 
	if (y != 1){
		circle(2);
	} else {
		lossCross();
	}
}

function circle3(y) {
	document.getElementById('field-3').innerHTML = '<img src="img/circle.png">';
	field3 = true;
	fieldCircle3 = true;
	fieldCircle++; 
	if (y != 1){
		circle(3);
	} else {
		lossCross();
	}
}

function circle4(y) {
	document.getElementById('field-4').innerHTML = '<img src="img/circle.png">';
	field4 = true;
	fieldCircle4 = true;
	fieldCircle++; 
	if (y != 1){
		circle(4);
	} else {
		lossCross();
	}
}

function circle5(y) {
	document.getElementById('field-5').innerHTML = '<img src="img/circle.png">';
	field5 = true;
	fieldCircle5 = true;
	fieldCircle++; 
	if (y != 1){
		circle(5);
	} else {
		lossCross();
	}
}

function circle6(y) {
	document.getElementById('field-6').innerHTML = '<img src="img/circle.png">';
	field6 = true;
	fieldCircle6 = true;
	fieldCircle++; 
	if (y != 1){
		circle(6);
	} else {
		lossCross();
	}
}

function circle7(y) {
	document.getElementById('field-7').innerHTML = '<img src="img/circle.png">';
	field7 = true;
	fieldCircle7 = true;
	fieldCircle++; 
	if (y != 1){
		circle(7);
	} else {
		lossCross();
	}
}

function circle8(y) {
	document.getElementById('field-8').innerHTML = '<img src="img/circle.png">';
	field8 = true;
	fieldCircle8 = true;
	fieldCircle++; 
	if (y != 1){
		circle(8);
	} else {
		lossCross();
	}
}

function circle9(y) {
	document.getElementById('field-9').innerHTML = '<img src="img/circle.png">';
	field9 = true;
	fieldCircle9 = true;
	fieldCircle++; 
	if (y != 1){
		circle(9);
	} else {
		lossCross();
	}
}

//**** cross ****

function cross1(y) {
	document.getElementById('field-1').innerHTML = '<img src="img/cross.png">';
	field1 = true;
	fieldCross1 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '1';
		} else if (fieldCross == 2){
			strokeCross2 = '1';
		}
		cross(1);
	} else {
		lossCircle();
		draw();
	}
}

function cross2(y) {
	document.getElementById('field-2').innerHTML = '<img src="img/cross.png">';
	field2 = true;
	fieldCross2 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '2';
		} else if (fieldCross == 2){
			strokeCross2 = '2';
		}
		cross(2);
	} else {
		lossCircle();
		draw();
	}
}

function cross3(y) {
	document.getElementById('field-3').innerHTML = '<img src="img/cross.png">';
	field3 = true;
	fieldCross3 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '3';
		} else if (fieldCross == 2){
			strokeCross2 = '3';
		}
		cross(3);
	} else {
		lossCircle();
		draw();
	}
}

function cross4(y) {
	document.getElementById('field-4').innerHTML = '<img src="img/cross.png">';
	field4 = true;
	fieldCross4 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '4';
		} else if (fieldCross == 2){
			strokeCross2 = '4';
		}
		cross(4);
	} else {
		lossCircle();
		draw();
	}
}

function cross5(y) {
	document.getElementById('field-5').innerHTML = '<img src="img/cross.png">';
	field5 = true;
	fieldCross5 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '5';
		} else if (fieldCross == 2){
			strokeCross2 = '5';
		}
		cross(5);
	} else {
		lossCircle();
		draw();
	}
}

function cross6(y) {
	document.getElementById('field-6').innerHTML = '<img src="img/cross.png">';
	field6 = true;
	fieldCross6 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '6';
		} else if (fieldCross == 2){
			strokeCross2 = '6';
		}
		cross(6);
	} else {
		lossCircle();
		draw();
	}
}

function cross7(y) {
	document.getElementById('field-7').innerHTML = '<img src="img/cross.png">';
	field7 = true;
	fieldCross7 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '7';
		} else if (fieldCross == 2){
			strokeCross2 = '7';
		}
		cross(7);
	} else {
		lossCircle();
		draw();
	}
}

function cross8(y) {
	document.getElementById('field-8').innerHTML = '<img src="img/cross.png">';
	field8 = true;
	fieldCross8  = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '8';
		} else if (fieldCross == 2){
			strokeCross2 = '8';
		}
		cross(8);
	} else {
		lossCircle();
		draw();
	}
}

function cross9(y) {
	document.getElementById('field-9').innerHTML = '<img src="img/cross.png">';
	field9 = true;
	fieldCross9 = true;
	fieldCross++;
	if (y != 1){
		if (fieldCross == 1){
			strokeCross1 = '9';
		} else if (fieldCross == 2){
			strokeCross2 = '9';
		}
		cross(9);
	} else {
		lossCircle();
		draw();
	}
}

var
	timeSign1,
	timeSign2,
	timeSign3,
	timeSign4,
	timeSign5,
	timeSign6,
	timeSign7,
	timeSign8,
	timeSign9;

function form1(){

// очищение
	document.getElementById('field-1').innerHTML = '',
	document.getElementById('field-2').innerHTML = '',
	document.getElementById('field-3').innerHTML = '',
	document.getElementById('field-4').innerHTML = '',
	document.getElementById('field-5').innerHTML = '',
	document.getElementById('field-6').innerHTML = '',
	document.getElementById('field-7').innerHTML = '',
	document.getElementById('field-8').innerHTML = '',
	document.getElementById('field-9').innerHTML = '',
	field1 = false;
	field2 = false;
	field3 = false;
	field4 = false;
	field5 = false;
	field6 = false;
	field7 = false;
	field8 = false;
	field9 = false;
	fieldCross1  = false,
	fieldCross2  = false,
	fieldCross3  = false,
	fieldCross4  = false,
	fieldCross5  = false,
	fieldCross6  = false,
	fieldCross7  = false,
	fieldCross8  = false,
	fieldCross9  = false,
	fieldCircle1 = false,
	fieldCircle2 = false,
	fieldCircle3 = false,
	fieldCircle4 = false,
	fieldCircle5 = false,
	fieldCircle6 = false,
	fieldCircle7 = false,
	fieldCircle8 = false,
	fieldCircle9 = false,
	fieldCross   = 0,
	fieldCircle  = 0,
	strokeCross1 = '',
	strokeCross2 = '',
	strokeCross3 = '',
	loss_circle  = 0;
	
	
// выбор сложности и хода
	var 
		complex = document.getElementById('complexity').selectedIndex,
   		optionsComplex = document.getElementById('complexity').options,
   		sign = document.getElementById('sign').selectedIndex,
   		optionsSign = document.getElementById('sign').options;
	
	if (optionsSign[sign].value == 'cross' && optionsComplex[complex].value != 'sel-compl'){
		document.getElementById('field-1').onclick = cross1;
		document.getElementById('field-2').onclick = cross2;
		document.getElementById('field-3').onclick = cross3;
		document.getElementById('field-4').onclick = cross4;
		document.getElementById('field-5').onclick = cross5;
		document.getElementById('field-6').onclick = cross6;
		document.getElementById('field-7').onclick = cross7;
		document.getElementById('field-8').onclick = cross8;
		document.getElementById('field-9').onclick = cross9;
	} else if (optionsSign[sign].value == 'circle' && optionsComplex[complex].value != 'sel-compl'){
		document.getElementById('field-1').onclick = circle1;
		document.getElementById('field-2').onclick = circle2;
		document.getElementById('field-3').onclick = circle3;
		document.getElementById('field-4').onclick = circle4;
		document.getElementById('field-5').onclick = circle5;
		document.getElementById('field-6').onclick = circle6;
		document.getElementById('field-7').onclick = circle7;
		document.getElementById('field-8').onclick = circle8;
		document.getElementById('field-9').onclick = circle9;
		circle();
	} else if (optionsComplex[complex].value == 'sel-compl'){
		document.getElementById('field-1').onclick = complexity,
		document.getElementById('field-2').onclick = complexity,
		document.getElementById('field-3').onclick = complexity,
		document.getElementById('field-4').onclick = complexity,
		document.getElementById('field-5').onclick = complexity,
		document.getElementById('field-6').onclick = complexity,
		document.getElementById('field-7').onclick = complexity,
		document.getElementById('field-8').onclick = complexity,
		document.getElementById('field-9').onclick = complexity;
	}
}

//********** cross ***********

function cross(x){
	var 
		complex = document.getElementById('complexity').selectedIndex,
   	optionsComplex = document.getElementById('complexity').options,
   	sign = document.getElementById('sign').selectedIndex,
   	optionsSign = document.getElementById('sign').options;

	if (x == 1){
		document.getElementById('field-1').onclick = '';
	} else if (x == 2){
		document.getElementById('field-2').onclick = '';
	} else if (x == 3){
		document.getElementById('field-3').onclick = '';
	} else if (x == 4){
		document.getElementById('field-4').onclick = '';
	} else if (x == 5){
		document.getElementById('field-5').onclick = '';
	} else if (x == 6){
		document.getElementById('field-6').onclick = '';
	} else if (x == 7){
		document.getElementById('field-7').onclick = '';
	} else if (x == 8){
		document.getElementById('field-8').onclick = '';
	} else if (x == 9){
		document.getElementById('field-9').onclick = '';
	}

	if (fieldCross1 == true && fieldCross2 == true && fieldCross3 == true ||
		 fieldCross4 == true && fieldCross5 == true && fieldCross6 == true ||
		 fieldCross7 == true && fieldCross8 == true && fieldCross9 == true ||
		 fieldCross1 == true && fieldCross4 == true && fieldCross7 == true ||
		 fieldCross2 == true && fieldCross5 == true && fieldCross8 == true ||
		 fieldCross3 == true && fieldCross6 == true && fieldCross9 == true ||
		 fieldCross1 == true && fieldCross5 == true && fieldCross9 == true ||
		 fieldCross3 == true && fieldCross5 == true && fieldCross7 == true){
		setTimeout(function(){
			var win = confirm('Вы выиграли!!!  =)\n\nСыграть ещё раз?');
			if (win == true){
				form1();
			}
		}, 100)
	} else {

//**** easy ****		
			if (optionsComplex[complex].value == 'easy' && optionsSign[sign].value == 'cross'){
				
				easyCross();
				
//**** normal ****
			} else if (optionsComplex[complex].value == 'normal' && optionsSign[sign].value == 'cross'){
				
				normalCross();

//**** hard ****
			} else if (optionsComplex[complex].value == 'hard' && optionsSign[sign].value == 'cross'){
				
				hardCross();
			}
	}
}

//********** circle ***********

function circle(x){

	var 
		complex = document.getElementById('complexity').selectedIndex,
   	optionsComplex = document.getElementById('complexity').options,
   	sign = document.getElementById('sign').selectedIndex,
   	optionsSign = document.getElementById('sign').options;

	if (x == 1){
		document.getElementById('field-1').onclick = '';
	} else if (x == 2){
		document.getElementById('field-2').onclick = '';
	} else if (x == 3){
		document.getElementById('field-3').onclick = '';
	} else if (x == 4){
		document.getElementById('field-4').onclick = '';
	} else if (x == 5){
		document.getElementById('field-5').onclick = '';
	} else if (x == 6){
		document.getElementById('field-6').onclick = '';
	} else if (x == 7){
		document.getElementById('field-7').onclick = '';
	} else if (x == 8){
		document.getElementById('field-8').onclick = '';
	} else if (x == 9){
		document.getElementById('field-9').onclick = '';
	}

	if (fieldCircle1 == true && fieldCircle2 == true && fieldCircle3 == true ||
		fieldCircle4 == true && fieldCircle5 == true && fieldCircle6 == true ||
		fieldCircle7 == true && fieldCircle8 == true && fieldCircle9 == true ||
		fieldCircle1 == true && fieldCircle4 == true && fieldCircle7 == true ||
		fieldCircle2 == true && fieldCircle5 == true && fieldCircle8 == true ||
		fieldCircle3 == true && fieldCircle6 == true && fieldCircle9 == true ||
		fieldCircle1 == true && fieldCircle5 == true && fieldCircle9 == true ||
		fieldCircle3 == true && fieldCircle5 == true && fieldCircle7 == true){
		setTimeout(function(){
			var win = confirm('Вы выиграли!!!  =)\n\nСыграть ещё раз?');
			if (win == true){
				form1();
			}
		}, 100)
	} else {

//**** easy ****	
		if (optionsComplex[complex].value == 'easy' && optionsSign[sign].value == 'circle'){
			
			easyCircle();

//**** normal ****
		} else if (optionsComplex[complex].value == 'normal' && optionsSign[sign].value == 'circle'){
			
			normalCircle();

//**** hard ****
		} else if (optionsComplex[complex].value == 'hard' && optionsSign[sign].value == 'circle'){
			
			hardCircle();
		}
	}
}




//****************************** easy cross ****************************

function easyCross(){
	var randNum = (Math.floor(Math.random() * (9 - 1 + 1)) + 1);

	if (randNum == 1 && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} else if(randNum == 2 && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (randNum == 3 && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if(randNum == 4 && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if(randNum == 5 && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (randNum == 6 && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if(randNum == 7 && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (randNum == 8 && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (randNum == 9 && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (field1 == true && field2 == true 
				&& field3 == true && field4 == true 
				&& field5 == true && field6 == true 
				&& field7 == true && field8 == true 
				&& field9 == true){
		setTimeout(function(){
			var draw = confirm('Ничья!\n\nХочешь сыграть сначала?');
			if (draw == true){
				form1();
			}
		}, 100)
	} else {
		cross();
	}
}
//**************************** easy circle ****************************

function easyCircle(){
	var randNum = (Math.floor(Math.random() * (9 - 1 + 1)) + 1);

	if (randNum == 1 && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} else if(randNum == 2 && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (randNum == 3 && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if(randNum == 4 && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if(randNum == 5 && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (randNum == 6 && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if(randNum == 7 && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (randNum == 8 && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (randNum == 9 && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else {
		circle();
	}
}

//**************************** normal cross ****************************

function normalCross(){

//горизонталь 1 проигрышь
	if (fieldCircle1 == true && fieldCircle2 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle3 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle3 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 проигрышь	
	else if (fieldCircle4 == true && fieldCircle5 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle6 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle6 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 проигрышь	
	else if (fieldCircle7 == true && fieldCircle8 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle7 == true && fieldCircle9 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle8 == true && fieldCircle9 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 проигрышь
	else if (fieldCircle1 == true && fieldCircle4 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle7 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle7 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 проигрышь
	else if (fieldCircle2 == true && fieldCircle5 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle8 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle8 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 проигрышь
	else if (fieldCircle3 == true && fieldCircle6 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle9 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle6 == true && fieldCircle9 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 проигрышь
	else if (fieldCircle1 == true && fieldCircle5 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle9 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle9 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 проигрышь
	else if (fieldCircle3 == true && fieldCircle5 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle7 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle7 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//горизонталь 1 выигрышь
	else if (fieldCross1 == true && fieldCross2 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCross1 == true && fieldCross3 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCross2 == true && fieldCross3 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 выигрышь	
	else if (fieldCross4 == true && fieldCross5 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross4 == true && fieldCross6 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross6 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 выигрышь	
	else if (fieldCross7 == true && fieldCross8 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross7 == true && fieldCross9 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross8 == true && fieldCross9 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 выигрышь
	else if (fieldCross1 == true && fieldCross4 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross1 == true && fieldCross7 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCross4 == true && fieldCross7 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 выигрышь
	else if (fieldCross2 == true && fieldCross5 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross2 == true && fieldCross8 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross8 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 выигрышь
	else if (fieldCross3 == true && fieldCross6 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross3 == true && fieldCross9 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross6 == true && fieldCross9 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 выигрышь
	else if (fieldCross1 == true && fieldCross5 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross1 == true && fieldCross9 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross9 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 выигрышь
	else if (fieldCross3 == true && fieldCross5 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross3 == true && fieldCross7 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross7 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//обычный ход
	else {
		easyCross();
	}
}

//**************************** normal circle ****************************

function normalCircle(){

//горизонталь 1 проигрышь
	if (fieldCross1 == true && fieldCross2 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCross1 == true && fieldCross3 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCross2 == true && fieldCross3 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 проигрышь	
	else if (fieldCross4 == true && fieldCross5 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross4 == true && fieldCross6 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross6 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 проигрышь	
	else if (fieldCross7 == true && fieldCross8 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross7 == true && fieldCross9 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross8 == true && fieldCross9 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 проигрышь
	else if (fieldCross1 == true && fieldCross4 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross1 == true && fieldCross7 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCross4 == true && fieldCross7 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 проигрышь
	else if (fieldCross2 == true && fieldCross5 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross2 == true && fieldCross8 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross8 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 проигрышь
	else if (fieldCross3 == true && fieldCross6 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross3 == true && fieldCross9 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross6 == true && fieldCross9 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 проигрышь
	else if (fieldCross1 == true && fieldCross5 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross1 == true && fieldCross9 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross9 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 проигрышь
	else if (fieldCross3 == true && fieldCross5 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross3 == true && fieldCross7 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross7 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//горизонталь 1 выигрышь
	else if (fieldCircle1 == true && fieldCircle2 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle3 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle3 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 выигрышь	
	else if (fieldCircle4 == true && fieldCircle5 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle6 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle6 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 выигрышь	
	else if (fieldCircle7 == true && fieldCircle8 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle7 == true && fieldCircle9 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle8 == true && fieldCircle9 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 выигрышь
	else if (fieldCircle1 == true && fieldCircle4 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle7 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle7 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 выигрышь
	else if (fieldCircle2 == true && fieldCircle5 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle8 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle8 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 выигрышь
	else if (fieldCircle3 == true && fieldCircle6 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle9 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle6 == true && fieldCircle9 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 выигрышь
	else if (fieldCircle1 == true && fieldCircle5 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle9 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle9 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 выигрышь
	else if (fieldCircle3 == true && fieldCircle5 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle7 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle7 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//обычный ход
	else {
		easyCircle();
	}
}

//**************************** hard cross ****************************

function hardCross(){

//горизонталь 1 проигрышь
	if (fieldCircle1 == true && fieldCircle2 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle3 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle3 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 проигрышь	
	else if (fieldCircle4 == true && fieldCircle5 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle6 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle6 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 проигрышь	
	else if (fieldCircle7 == true && fieldCircle8 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle7 == true && fieldCircle9 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle8 == true && fieldCircle9 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 проигрышь
	else if (fieldCircle1 == true && fieldCircle4 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle7 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle7 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 проигрышь
	else if (fieldCircle2 == true && fieldCircle5 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle8 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle8 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 проигрышь
	else if (fieldCircle3 == true && fieldCircle6 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle9 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle6 == true && fieldCircle9 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 проигрышь
	else if (fieldCircle1 == true && fieldCircle5 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle9 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle9 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 проигрышь
	else if (fieldCircle3 == true && fieldCircle5 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle7 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle7 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//горизонталь 1 выигрышь
	else if (fieldCross1 == true && fieldCross2 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCross1 == true && fieldCross3 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCross2 == true && fieldCross3 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 выигрышь	
	else if (fieldCross4 == true && fieldCross5 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross4 == true && fieldCross6 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross6 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 выигрышь	
	else if (fieldCross7 == true && fieldCross8 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross7 == true && fieldCross9 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross8 == true && fieldCross9 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 выигрышь
	else if (fieldCross1 == true && fieldCross4 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross1 == true && fieldCross7 == true && field4 == false){
		setTimeout(function(){
			circle4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCross4 == true && fieldCross7 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 выигрышь
	else if (fieldCross2 == true && fieldCross5 == true && field8 == false){
		setTimeout(function(){
			circle8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross2 == true && fieldCross8 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross8 == true && field2 == false){
		setTimeout(function(){
			circle2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 выигрышь
	else if (fieldCross3 == true && fieldCross6 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross3 == true && fieldCross9 == true && field6 == false){
		setTimeout(function(){
			circle6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross6 == true && fieldCross9 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 выигрышь
	else if (fieldCross1 == true && fieldCross5 == true && field9 == false){
		setTimeout(function(){
			circle9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross1 == true && fieldCross9 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross9 == true && field1 == false){
		setTimeout(function(){
			circle1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 выигрышь
	else if (fieldCross3 == true && fieldCross5 == true && field7 == false){
		setTimeout(function(){
			circle7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross3 == true && fieldCross7 == true && field5 == false){
		setTimeout(function(){
			circle5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross7 == true && field3 == false){
		setTimeout(function(){
			circle3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//обычный ход
	else {
		if (fieldCircle == 0){// первый ход
			if (fieldCross1 == true || fieldCross3 == true ||
				fieldCross7 == true || fieldCross9 == true){
				setTimeout(function(){
					circle5(1);
				}, 200);
				document.getElementById('field-5').onclick = '';
				strokeCircle1 == '5';
			} else if (fieldCross2 == true){
				var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
				if (randNum == 1){
					setTimeout(function(){
						circle1(1);
					}, 200);
					document.getElementById('field-1').onclick = '';
					strokeCircle1 = '1';
				} else if (randNum == 2){
					setTimeout(function(){
						circle3(1);
					}, 200);
					document.getElementById('field-3').onclick = '';
					strokeCircle1 = '3';
				}
			} else if (fieldCross6 == true){
				var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
				if (randNum == 1){
					setTimeout(function(){
						circle9(1);
					}, 200);
					document.getElementById('field-9').onclick = '';
					strokeCircle1 = '9';
				} else if (randNum == 2){
					setTimeout(function(){
						circle3(1);
					}, 200);
					document.getElementById('field-3').onclick = '';
					strokeCircle1 = '3';
				}
			} else if (fieldCross8 == true){
				var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
				if (randNum == 1){
					setTimeout(function(){
						circle7(1);
					}, 200);
					document.getElementById('field-7').onclick = '';
					strokeCircle1 = '7';
				} else if (randNum == 2){
					setTimeout(function(){
						circle9(1);
					}, 200);
					document.getElementById('field-9').onclick = '';
					strokeCircle1 = '9';
				}
			} else if (fieldCross4 == true){
				var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
				if (randNum == 1){
					setTimeout(function(){
						circle1(1);
					}, 200);
					document.getElementById('field-1').onclick = '';
					strokeCircle1 = '1';
				} else if (randNum == 2){
					setTimeout(function(){
						circle7(1);
					}, 200);
					document.getElementById('field-7').onclick = '';
					strokeCircle1 = '7';
				}
			} else if (fieldCross5 == true){
				var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
				if (randNum == 1){
					setTimeout(function(){
						circle1(1);
					}, 200);
					document.getElementById('field-1').onclick = '';
					strokeCircle1 = '1';
				} else if (randNum == 2){
					setTimeout(function(){
						circle3(1);
					}, 200);
					document.getElementById('field-3').onclick = '';
					strokeCircle1 = '3';
				} else if (randNum == 3){
					setTimeout(function(){
						circle7(1);
					}, 200);
					document.getElementById('field-7').onclick = '';
					strokeCircle1 = '7';
				} else if (randNum == 4){
					setTimeout(function(){
						circle9(1);
					}, 200);
					document.getElementById('field-9').onclick = '';
					strokeCircle1 = '9';
				}
			}
		} else if (fieldCircle == 1){//второй ход
			if (strokeCross1 == '1'){
				if (strokeCross2 == '6'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
						strokeCircle2 = '3';
					} else if (randNum == 3){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					} else if (randNum == 4){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
						strokeCircle2 = '9';
					}
				} else if (strokeCross2 == '8'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 2){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 3){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
						strokeCircle2 = '7';
					} else if (randNum == 4){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
						strokeCircle2 = '9';
					}
				} else if (strokeCross2 == '9'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 3){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 4){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					}
				}
			} else if (strokeCross1 == '3'){
				if (strokeCross2 == '4'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
						strokeCircle2 = '1';
					} else if (randNum == 3){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					} else if (randNum == 4){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
						strokeCircle2 = '7';
					}
				} else if (strokeCross2 == '8'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 2){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 3){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
						strokeCircle2 = '7';
					} else if (randNum == 4){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
						strokeCircle2 = '9';
					}
				} else if (strokeCross2 == '7'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 3){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 4){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					}
				}
			} else if (strokeCross1 == '7'){
				if (strokeCross2 == '6'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
						strokeCircle2 = '3';
					} else if (randNum == 3){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					} else if (randNum == 4){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
						strokeCircle2 = '9';
					}
				} else if (strokeCross2 == '2'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 2){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 3){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
						strokeCircle2 = '1';
					} else if (randNum == 4){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
						strokeCircle2 = '3';
					}
				} else if (strokeCross2 == '3'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 3){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 4){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					}
				}
			} else if (strokeCross1 == '9'){
				if (strokeCross2 == '1'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 3){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 4){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					}
				} else if (strokeCross2 == '2'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle6(1);
						}, 200);
						document.getElementById('field-6').onclick = '';
						strokeCircle2 = '6';
					} else if (randNum == 2){
						setTimeout(function(){
							circle4(1);
						}, 200);
						document.getElementById('field-4').onclick = '';
						strokeCircle2 = '4';
					} else if (randNum == 3){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
						strokeCircle2 = '1';
					} else if (randNum == 4){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
						strokeCircle2 = '3';
					}
				} else if (strokeCross2 == '4'){
					var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
						strokeCircle2 = '7';
					} else if (randNum == 2){
						setTimeout(function(){
							circle8(1);
						}, 200);
						document.getElementById('field-8').onclick = '';
						strokeCircle2 = '8';
					} else if (randNum == 3){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
						strokeCircle2 = '1';
					} else if (randNum == 4){
						setTimeout(function(){
							circle2(1);
						}, 200);
						document.getElementById('field-2').onclick = '';
						strokeCircle2 = '2';
					}
				}
			} else if (strokeCross1 == '2'){
				if (strokeCircle1 == '1'){
					if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
							strokeCircle2 = '4';
						} else if (randNum == 2){
							setTimeout(function(){
								circle7(1);
							}, 200);
							document.getElementById('field-7').onclick = '';
							strokeCircle2 = '7';
						}
					} else if (strokeCross2 == '4'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
							strokeCircle2 = '8';
						} else if (randNum == 2){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
							strokeCircle2 = '6';
						}
					} else if (strokeCross2 == '6'){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
							strokeCircle2 = '7';
					} else if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
							strokeCircle2 = '8';
						} else if (randNum == 2){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						}
					} else if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle7(1);
							}, 200);
							document.getElementById('field-7').onclick = '';
							strokeCircle2 = '7';
						} else if (randNum == 2){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						}
					}
				} else if (strokeCircle1 == '3'){
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
							strokeCircle2 = '6';
						} else if (randNum == 2){
							setTimeout(function(){
								circle9(1);
							}, 200);
							document.getElementById('field-9').onclick = '';
							strokeCircle2 = '9';
						}
					} else if (strokeCross2 == '4'){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
						strokeCircle2 = '9';
					} else if (strokeCross2 == '6'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
							strokeCircle2 = '4';
						} else if (randNum == 2){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
							strokeCircle2 = '8';
						}
					} else if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						} else if (randNum == 2){
							setTimeout(function(){
								circle9(1);
							}, 200);
							document.getElementById('field-9').onclick = '';
							strokeCircle2 = '9';
						}
					} else if (strokeCross2 == '9'){
						setTimeout(function(){
							circle5(1);
						}, 200);
						document.getElementById('field-5').onclick = '';
						strokeCircle2 = '5';
					}
				}
			} else if (strokeCross1 == '6'){
				if (strokeCircle1 == '3'){
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						} else if (randNum == 2){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
							strokeCircle2 = '4';
						}
					} else if (strokeCross2 == '2'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
							strokeCircle2 = '4';
						} else if (randNum == 2){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
							strokeCircle2 = '8';
						}
					} else if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						} else if (randNum == 2){
							setTimeout(function(){
								circle1(1);
							}, 200);
							document.getElementById('field-1').onclick = '';
							strokeCircle2 = '1';
						}
					} else if (strokeCross2 == '8'){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
						strokeCircle2 = '1';
					} else if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle1(1);
							}, 200);
							document.getElementById('field-1').onclick = '';
							strokeCircle2 = '1';
						} else if (randNum == 2){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
							strokeCircle2 = '2';
						}
					}
				} else if (strokeCircle1 == '9'){
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						} else if (randNum == 2){
							setTimeout(function(){
								circle7(1);
							}, 200);
							document.getElementById('field-7').onclick = '';
							strokeCircle2 = '7';
						}
					} else if (strokeCross2 == '2'){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
						strokeCircle2 = '7';
					} else if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle7(1);
							}, 200);
							document.getElementById('field-7').onclick = '';
							strokeCircle2 = '7';
						} else if (randNum == 2){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
							strokeCircle2 = '8';
						}
					} else if (strokeCross2 == '7'){
						setTimeout(function(){
								circle5(1);
						}, 200);
						document.getElementById('field-5').onclick = '';
						strokeCircle2 = '5';
					} else if (strokeCross2 == '8'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
							strokeCircle2 = '2';
						} else if (randNum == 2){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
							strokeCircle2 = '4';
						}
					}
				}
			} else if (strokeCross1 == '8'){
				if (strokeCircle1 == '9'){
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle3(1);
							}, 200);
							document.getElementById('field-3').onclick = '';
							strokeCircle2 = '3';
						} else if (randNum == 2){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						}
					} else if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
							strokeCircle2 = '2';
						} else if (randNum == 2){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						}
					} else if (strokeCross2 == '4'){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
						strokeCircle2 = '3';
					} else if (strokeCross2 == '6'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
							strokeCircle2 = '2';
						} else if (randNum == 2){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
							strokeCircle2 = '4';
						}
					} else if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle3(1);
							}, 200);
							document.getElementById('field-3').onclick = '';
							strokeCircle2 = '3';
						} else if (randNum == 2){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
							strokeCircle2 = '6';
						}
					}
				} else if (strokeCircle1 == '7'){
					if (strokeCross2 == '1'){
						setTimeout(function(){
							circle5(1);
						}, 200);
						document.getElementById('field-5').onclick = '';
						strokeCircle2 = '5';
					} else if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle1(1);
							}, 200);
							document.getElementById('field-1').onclick = '';
							strokeCircle2 = '1';
						} else if (randNum == 2){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						}
					} else if (strokeCross2 == '4'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
							strokeCircle2 = '2';
						} else if (randNum == 2){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
							strokeCircle2 = '6';
						}
					} else if (strokeCross2 == '6'){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
						strokeCircle2 = '1';
					} else if (strokeCross2 == '8'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle1(1);
							}, 200);
							document.getElementById('field-1').onclick = '';
							strokeCircle2 = '1';
						} else if (randNum == 2){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
							strokeCircle2 = '4';
						}
					}
				}
			} else if (strokeCross1 == '4'){
				if (strokeCircle1 == '7'){
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
							strokeCircle2 = '8';
						} else if (randNum == 2){
							setTimeout(function(){
								circle9(1);
							}, 200);
							document.getElementById('field-9').onclick = '';
							strokeCircle2 = '9';
						}
					} else if (strokeCross2 == '2'){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
						strokeCircle2 = '9';
					} else if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						} else if (randNum == 2){
							setTimeout(function(){
								circle9(1);
							}, 200);
							document.getElementById('field-9').onclick = '';
							strokeCircle2 = '9';
						}
					} else if (strokeCross2 == '8'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
							strokeCircle2 = '2';
						} else if (randNum == 2){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
							strokeCircle2 = '6';
						}
					} else if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						} else if (randNum == 2){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
							strokeCircle2 = '6';
						}
					}
				} else if (strokeCircle1 == '1'){
					if (strokeCross2 == '2'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
							strokeCircle2 = '6';
						} else if (randNum == 2){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
							strokeCircle2 = '8';
						}
					} else if (strokeCross2 == '3'){
						setTimeout(function(){
							circle5(1);
						}, 200);
						document.getElementById('field-5').onclick = '';
						strokeCircle2 = '5';
					} else if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
							strokeCircle2 = '2';
						} else if (randNum == 2){
							setTimeout(function(){
								circle3(1);
							}, 200);
							document.getElementById('field-3').onclick = '';
							strokeCircle2 = '3';
						}
					} else if (strokeCross2 == '8'){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
						strokeCircle2 = '3';
					} else if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle3(1);
							}, 200);
							document.getElementById('field-3').onclick = '';
							strokeCircle2 = '3';
						} else if (randNum == 2){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
							strokeCircle2 = '5';
						}
					}
				}
			} else if (strokeCross1 == '5'){
				if (strokeCircle1 == '1'){
					if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle3(1);
							}, 200);
							document.getElementById('field-3').onclick = '';
							strokeCircle2 = '3';
						} else if (randNum == 2){
							setTimeout(function(){
								circle7(1);
							}, 200);
							document.getElementById('field-7').onclick = '';
							strokeCircle2 = '7';
						}
					}
				} else if (strokeCircle1 == '3'){
					if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle1(1);
							}, 200);
							document.getElementById('field-1').onclick = '';
							strokeCircle2 = '1';
						} else if (randNum == 2){
							setTimeout(function(){
								circle9(1);
							}, 200);
							document.getElementById('field-9').onclick = '';
							strokeCircle2 = '9';
						}
					}
				} else if (strokeCircle1 == '7'){
					if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle1(1);
							}, 200);
							document.getElementById('field-1').onclick = '';
							strokeCircle2 = '1';
						} else if (randNum == 2){
							setTimeout(function(){
								circle9(1);
							}, 200);
							document.getElementById('field-9').onclick = '';
							strokeCircle2 = '9';
						}
					}
				} else if (strokeCircle1 == '9'){
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle3(1);
							}, 200);
							document.getElementById('field-3').onclick = '';
							strokeCircle2 = '3';
						} else if (randNum == 2){
							setTimeout(function(){
								circle7(1);
							}, 200);
							document.getElementById('field-7').onclick = '';
							strokeCircle2 = '7';
						}
					}
				}
			}
		} else if (fieldCircle == 2){//третий ход
			if (strokeCross1 == '1'){
				if (strokeCross2 == '6' && strokeCircle2 == '2' || strokeCross2 == '8' && strokeCircle2 == '4'){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
					} else if (randNum == 2){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
					} else if (randNum == 3){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
					}
				} else {
					easyCross();
				}
			} else if (strokeCross1 == '3'){
				if (strokeCross2 == '4' && strokeCircle2 == '2' || strokeCross2 == '8' && strokeCircle2 == '6'){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
					} else if (randNum == 2){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
					} else if (randNum == 3){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
					}
				} else {
					easyCross();
				}
			} else if (strokeCross1 == '7'){
				if (strokeCross2 == '2' && strokeCircle2 == '4' || strokeCross2 == '6' && strokeCircle2 == '8'){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
					} else if (randNum == 2){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
					} else if (randNum == 3){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
					}
				} else {
					easyCross();
				}
			} else if (strokeCross1 == '9'){
				if (strokeCross2 == '2' && strokeCircle2 == '6' || strokeCross2 == '4' && strokeCircle2 == '8'){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
					} else if (randNum == 2){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
					} else if (randNum == 3){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
					}
				} else {
					easyCross();
				}
			} else if (strokeCross1 == '2'){
				if (strokeCircle1 == '1'){
					if (strokeCross2 == '9' && strokeCircle2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
						}
					} else if (strokeCross2 == '3' && strokeCircle2 == '7'){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
					}
				} else if (strokeCircle1 =='3'){
					if (strokeCross2 == '7' && strokeCircle2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
						}
					} else if (strokeCross2 == '1' && strokeCircle2 == '9'){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
					}
				} else {
					easyCross();
				}
			} else if (strokeCross1 == '6'){
				if (strokeCircle1 == '3'){
					if (strokeCross2 == '7' && strokeCircle2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
						}
					} else if (strokeCross2 == '9' && strokeCircle2 == '1'){
						setTimeout(function(){
							circle7(1);
						}, 200);
						document.getElementById('field-7').onclick = '';
					}
				} else if (strokeCircle1 =='9'){
					if (strokeCross2 == '3' && strokeCircle2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
						}
					} else if (strokeCross2 == '3' && strokeCircle2 == '7'){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
					}
				} else {
					easyCross();
				}
			} else if (strokeCross1 == '8'){
				if (strokeCircle1 == '9'){
					if (strokeCross2 == '1' && strokeCircle2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle4(1);
							}, 200);
							document.getElementById('field-4').onclick = '';
						}
					} else if (strokeCross2 == '7' && strokeCircle2 == '3'){
						setTimeout(function(){
							circle1(1);
						}, 200);
						document.getElementById('field-1').onclick = '';
					}
				} else if (strokeCircle1 =='7'){
					if (strokeCross2 == '3' && strokeCircle2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle6(1);
							}, 200);
							document.getElementById('field-6').onclick = '';
						}
					} else if (strokeCross2 == '9' && strokeCircle2 == '1'){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
					}
				} else {
					easyCross();
				}
			} else if (strokeCross1 == '4'){
				if (strokeCircle1 == '7'){
					if (strokeCross2 == '3' && strokeCircle2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle2(1);
							}, 200);
							document.getElementById('field-2').onclick = '';
						}
					} else if (strokeCross2 == '1' && strokeCircle2 == '9'){
						setTimeout(function(){
							circle3(1);
						}, 200);
						document.getElementById('field-3').onclick = '';
					}
				} else if (strokeCircle1 =='1'){
					if (strokeCross2 == '3' && strokeCircle2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								circle5(1);
							}, 200);
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								circle8(1);
							}, 200);
							document.getElementById('field-8').onclick = '';
						}
					} else if (strokeCross2 == '7' && strokeCircle2 == '3'){
						setTimeout(function(){
							circle9(1);
						}, 200);
						document.getElementById('field-9').onclick = '';
					}
				} else {
					easyCross();
				}
			} else {
				easyCross();
			}
		} else {
			easyCross();
		}
	}
}

//**************************** hard circle ****************************

function hardCircle(){
//горизонталь 1 проигрышь
	if (fieldCross1 == true && fieldCross2 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCross1 == true && fieldCross3 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCross2 == true && fieldCross3 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 проигрышь	
	else if (fieldCross4 == true && fieldCross5 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross4 == true && fieldCross6 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross6 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 проигрышь	
	else if (fieldCross7 == true && fieldCross8 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross7 == true && fieldCross9 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross8 == true && fieldCross9 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 проигрышь
	else if (fieldCross1 == true && fieldCross4 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross1 == true && fieldCross7 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCross4 == true && fieldCross7 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 проигрышь
	else if (fieldCross2 == true && fieldCross5 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCross2 == true && fieldCross8 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross8 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 проигрышь
	else if (fieldCross3 == true && fieldCross6 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross3 == true && fieldCross9 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCross6 == true && fieldCross9 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 проигрышь
	else if (fieldCross1 == true && fieldCross5 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCross1 == true && fieldCross9 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross9 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 проигрышь
	else if (fieldCross3 == true && fieldCross5 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCross3 == true && fieldCross7 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCross5 == true && fieldCross7 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//горизонталь 1 выигрышь
	else if (fieldCircle1 == true && fieldCircle2 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle3 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle3 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//горизонталь 2 выигрышь	
	else if (fieldCircle4 == true && fieldCircle5 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle6 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle6 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	}
//горизонталь 3 выигрышь	
	else if (fieldCircle7 == true && fieldCircle8 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle7 == true && fieldCircle9 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle8 == true && fieldCircle9 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} 
//вертикаль 1 выигрышь
	else if (fieldCircle1 == true && fieldCircle4 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle7 == true && field4 == false){
		setTimeout(function(){
			cross4(1);
		}, 200);
		document.getElementById('field-4').onclick = '';
	} else if (fieldCircle4 == true && fieldCircle7 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	} 
//вертикаль 2 выигрышь
	else if (fieldCircle2 == true && fieldCircle5 == true && field8 == false){
		setTimeout(function(){
			cross8(1);
		}, 200);
		document.getElementById('field-8').onclick = '';
	} else if (fieldCircle2 == true && fieldCircle8 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle8 == true && field2 == false){
		setTimeout(function(){
			cross2(1);
		}, 200);
		document.getElementById('field-2').onclick = '';
	} 
//вертикаль 3 выигрышь
	else if (fieldCircle3 == true && fieldCircle6 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle9 == true && field6 == false){
		setTimeout(function(){
			cross6(1);
		}, 200);
		document.getElementById('field-6').onclick = '';
	} else if (fieldCircle6 == true && fieldCircle9 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//диоганаль 1 выигрышь
	else if (fieldCircle1 == true && fieldCircle5 == true && field9 == false){
		setTimeout(function(){
			cross9(1);
		}, 200);
		document.getElementById('field-9').onclick = '';
	} else if (fieldCircle1 == true && fieldCircle9 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle9 == true && field1 == false){
		setTimeout(function(){
			cross1(1);
		}, 200);
		document.getElementById('field-1').onclick = '';
	}
//диоганаль 2 выигрышь
	else if (fieldCircle3 == true && fieldCircle5 == true && field7 == false){
		setTimeout(function(){
			cross7(1);
		}, 200);
		document.getElementById('field-7').onclick = '';
	} else if (fieldCircle3 == true && fieldCircle7 == true && field5 == false){
		setTimeout(function(){
			cross5(1);
		}, 200);
		document.getElementById('field-5').onclick = '';
	} else if (fieldCircle5 == true && fieldCircle7 == true && field3 == false){
		setTimeout(function(){
			cross3(1);
		}, 200);
		document.getElementById('field-3').onclick = '';
	}
//обычный ход
	else {

		if (fieldCross == 0){//************ первый ход
			var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
			if (randNum == 1){
				setTimeout(function(){
					cross1(1);
				}, 200);
				document.getElementById('field-1').onclick = '';
				strokeCross1 = '1';
			} else if (randNum == 2){
				setTimeout(function(){
					cross3(1);
				}, 200);
				document.getElementById('field-3').onclick = '';
				strokeCross1 = '3';
			} else if (randNum == 3){
				setTimeout(function(){
					cross7(1);
				}, 200);
				document.getElementById('field-7').onclick = '';
				strokeCross1 = '7';
			} else if (randNum == 4){
				setTimeout(function(){
					cross9(1);
				}, 200);
				document.getElementById('field-9').onclick = '';
				strokeCross1 = '9';
			}
		} else if (fieldCross == 1){//************* второй ход
			if (fieldCross1 == true){//************* если крест на 1
				if (fieldCircle2 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross4(1);
						}, 200)
						document.getElementById('field-4').onclick = '';
						strokeCross2 = '4';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '2';
				} else if (fieldCircle3 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross4(1);
						}, 200)
						document.getElementById('field-4').onclick = '';
						strokeCross2 = '4';
					} else if (randNum == 2){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					} else if (randNum == 3){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '3';
				} else if (fieldCircle4 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross2(1);
						}, 200)
						document.getElementById('field-2').onclick = '';
						strokeCross2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					}
					strokeCircle1 = '4';
				} else if (fieldCircle5 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross6(1);
						}, 200)
						document.getElementById('field-6').onclick = '';
						strokeCross2 = '6';
					} else if (randNum == 2){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					} else if (randNum == 3){
						setTimeout(function(){
							cross8(1);
						}, 200)
						document.getElementById('field-8').onclick = '';
						strokeCross2 = '8';
					}
					strokeCircle1 = '5';
				} else if (fieldCircle6 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '6';
				} else if (fieldCircle7 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 2){
						setTimeout(function(){
							cross2(1);
						}, 200)
						document.getElementById('field-2').onclick = '';
						strokeCross2 = '2';
					} else if (randNum == 3){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					}
					strokeCircle1 = '7';
				} else if (fieldCircle8 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '8';
				} else if (fieldCircle9 == true){
					var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					} else if (randNum == 2){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					}
					strokeCircle1 = '9';
				}
			} else if (fieldCross3 == true){//************* если крест на 3
				if (fieldCircle1 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross6(1);
						}, 200)
						document.getElementById('field-6').onclick = '';
						strokeCross2 = '6';
					} else if (randNum == 2){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					} else if (randNum == 3){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '1';
				} else if (fieldCircle2 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross6(1);
						}, 200)
						document.getElementById('field-6').onclick = '';
						strokeCross2 = '6';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					}
					strokeCircle1 = '2';
				} else if (fieldCircle4 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					}
					strokeCircle1 = '4';
				} else if (fieldCircle5 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross4(1);
						}, 200)
						document.getElementById('field-4').onclick = '';
						strokeCross2 = '4';
					} else if (randNum == 2){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					} else if (randNum == 3){
						setTimeout(function(){
							cross8(1);
						}, 200)
						document.getElementById('field-8').onclick = '';
						strokeCross2 = '8';
					}
					strokeCircle1 = '5';
				} else if (fieldCircle6 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross2(1);
						}, 200)
						document.getElementById('field-2').onclick = '';
						strokeCross2 = '2';
					}
					strokeCircle1 = '6';
				} else if (fieldCircle7 == true){
					var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					} else if (randNum == 2){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					}
					strokeCircle1 = '7';
				} else if (fieldCircle8 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					}
					strokeCircle1 = '8';
				} else if (fieldCircle9 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					} else if (randNum == 2){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 3){
						setTimeout(function(){
							cross2(1);
						}, 200)
						document.getElementById('field-2').onclick = '';
						strokeCross2 = '2';
					}
					strokeCircle1 = '9';
				}
			} else if (fieldCross7 == true){//************* если крест на 7
				if (fieldCircle1 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 2){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					} else if (randNum == 3){
						setTimeout(function(){
							cross8(1);
						}, 200)
						document.getElementById('field-8').onclick = '';
						strokeCross2 = '8';
					}
					strokeCircle1 = '1';
				} else if (fieldCircle2 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					}
					strokeCircle1 = '2';
				} else if (fieldCircle3 == true){
					var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					}
					strokeCircle1 = '3';
				} else if (fieldCircle4 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 2){
						setTimeout(function(){
							cross8(1);
						}, 200)
						document.getElementById('field-8').onclick = '';
						strokeCross2 = '8';
					} else if (randNum == 3){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					}
					strokeCircle1 = '4';
				} else if (fieldCircle5 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross2(1);
						}, 200)
						document.getElementById('field-2').onclick = '';
						strokeCross2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 3){
						setTimeout(function(){
							cross6(1);
						}, 200)
						document.getElementById('field-6').onclick = '';
						strokeCross2 = '6';
					}
					strokeCircle1 = '5';
				} else if (fieldCircle6 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
						strokeCross2 = '9';
					} else if (randNum == 2){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 3){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					}
					strokeCircle1 = '6';
				} else if (fieldCircle8 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross4(1);
						}, 200)
						document.getElementById('field-4').onclick = '';
						strokeCross2 = '4';
					}
					strokeCircle1 = '8';
				} else if (fieldCircle9 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross4(1);
						}, 200)
						document.getElementById('field-4').onclick = '';
						strokeCross2 = '4';
					} else if (randNum == 2){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 3){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					}
					strokeCircle1 = '9';
				}
			} else if (fieldCross9 == true){//****************** если крест на 9
				if (fieldCircle1 == true){
					var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 2){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '1';
				} else if (fieldCircle2 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 2){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 3){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '2';
				} else if (fieldCircle3 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					} else if (randNum == 3){
						setTimeout(function(){
							cross8(1);
						}, 200)
						document.getElementById('field-8').onclick = '';
						strokeCross2 = '8';
					}
					strokeCircle1 = '3';
				} else if (fieldCircle4 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 2){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 3){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					}
					strokeCircle1 = '4';
				} else if (fieldCircle5 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross2(1);
						}, 200)
						document.getElementById('field-2').onclick = '';
						strokeCross2 = '2';
					} else if (randNum == 2){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 3){
						setTimeout(function(){
							cross4(1);
						}, 200)
						document.getElementById('field-4').onclick = '';
						strokeCross2 = '4';
					}
					strokeCircle1 = '5';
				} else if (fieldCircle6 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
						strokeCross2 = '7';
					} else if (randNum == 2){
						setTimeout(function(){
							cross8(1);
						}, 200)
						document.getElementById('field-8').onclick = '';
						strokeCross2 = '8';
					} else if (randNum == 3){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					}
					strokeCircle1 = '6';
				} else if (fieldCircle7 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
						strokeCross2 = '1';
					} else if (randNum == 2){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					} else if (randNum == 3){
						setTimeout(function(){
							cross6(1);
						}, 200)
						document.getElementById('field-6').onclick = '';
						strokeCross2 = '6';
					}
					strokeCircle1 = '7';
				} else if (fieldCircle8 == true){
					var randNum = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
					if (randNum == 1){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
						strokeCross2 = '5';
					} else if (randNum == 2){
						setTimeout(function(){
							cross6(1);
						}, 200)
						document.getElementById('field-6').onclick = '';
						strokeCross2 = '6';
					} else if (randNum == 3){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
						strokeCross2 = '3';
					}
					strokeCircle1 = '8';
				}
			}
		} else if (fieldCross == 2){//************** третий ход
			if (strokeCross1 == 1){//********** крест на 1
				if (strokeCircle1 == '2'){//********** ноль на 2
					if (strokeCross2 == '4'){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
					} else if (strokeCross2 == '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross4(1);
							}, 200)
							document.getElementById('field-4').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7').onclick = '';
						}
					} else if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross9(1);
							}, 200)
							document.getElementById('field-9').onclick = '';
						}
					}
				} else if (strokeCircle1 == '3'){//********** ноль на 3
					if (strokeCross2 == '7'){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
					}
				} else if (strokeCircle1 == '4'){//********** ноль на 4
					if (strokeCross2 == '2'){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
					} else if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross9(1);
							}, 200)
							document.getElementById('field-9').onclick = '';
						}
					} else if (strokeCross2 == '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross2(1);
							}, 200)
							document.getElementById('field-2').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross3(1);
							}, 200)
							document.getElementById('field-3').onclick = '';
						}
					}
				} else if (strokeCircle1 == '5'){//********** ноль на 5
					if (strokeCross2 == '6'){
						if (fieldCircle4 == true){
							setTimeout(function(){
								cross3(1);
							}, 200)
							document.getElementById('field-3').onclick = '';
						} else if (fieldCircle9 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
							if (randNum == 1){
								setTimeout(function(){
									cross2(1);
								}, 200)
								document.getElementById('field-2').onclick = '';
							} else if (randNum == 2){
								setTimeout(function(){
									cross3(1);
								}, 200)
								document.getElementById('field-3').onclick = '';
								strokeCross3 = '3';
							} else if (randNum == 3){
								setTimeout(function(){
									cross7(1);
								}, 200)
								document.getElementById('field-7').onclick = '';
								strokeCross3 = '7';
							} else if (randNum == 4){
								setTimeout(function(){
									cross8(1);
								}, 200)
								document.getElementById('field-8').onclick = '';
								strokeCross3 = '8';
							}
						}
					} else if (strokeCross2 == '8'){
						if (fieldCircle2 == true){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7').onclick = '';
						} else if (fieldCircle9 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
							if (randNum == 1){
								setTimeout(function(){
									cross3(1);
								}, 200)
								document.getElementById('field-3').onclick = '';
							} else if (randNum == 2){
								setTimeout(function(){
									cross4(1);
								}, 200)
								document.getElementById('field-4').onclick = '';
							} else if (randNum == 3){
								setTimeout(function(){
									cross7(1);
								}, 200)
								document.getElementById('field-7').onclick = '';
								strokeCross3 = '7';
							} else if (randNum == 4){
								setTimeout(function(){
									cross6(1);
								}, 200)
								document.getElementById('field-6').onclick = '';
								strokeCross3 = '8';
							}
						}
					}
				} else if (strokeCircle1 == '6'){//********** ноль на 6
					if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7').onclick = '';
						}
					}
				} else if (strokeCircle1 == '7'){//********** ноль на 7
					if (strokeCross2 == '3'){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
					}
				} else if (strokeCircle1 == '8'){//********** ноль на 8
					if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross3(1);
							}, 200)
							document.getElementById('field-3').onclick = '';
						}
					}
				} else if (strokeCircle1 == '9'){//********** ноль на 9
					if (strokeCross2 == '3'){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7').onclick = '';
					} else if (strokeCross2 == '7'){
						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3').onclick = '';
					}
				}
			} else if (strokeCross1 == 3){//******** крест на 3
				if (strokeCircle1 == '1'){//********** ноль на 1
					if (strokeCross2 == '9'){
						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7');
					}
				} else if (strokeCircle1 == '2'){//********** ноль на 2
					if (strokeCross2 == '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross6(1);
							}, 200)
							document.getElementById('field-6').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross9(1);
							}, 200)
							document.getElementById('field-9').onclick = '';
						}
					} else if (strokeCross2 == '6' || strokeCross2 == '9'){
						setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
					}
				} else if (strokeCircle1 == '4'){//********** ноль на 4
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross9(1);
							}, 200)
							document.getElementById('field-9').onclick = '';
						}
					}
				} else if (strokeCircle1 == '5'){//********** ноль на 5
					if (strokeCross2 == '8'){
						if (fieldCircle2 == true){
							setTimeout(function(){
								cross9(1);
							}, 200)
							document.getElementById('field-9').onclick = '';
						} else if (fieldCircle7 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
							if (randNum == 1){
								setTimeout(function(){
									cross1(1);
								}, 200)
								document.getElementById('field-1').onclick = '';
							} else if (randNum == 2){
								setTimeout(function(){
									cross4(1);
								}, 200)
								document.getElementById('field-4').onclick = '';
							} else if (randNum == 3){
								setTimeout(function(){
									cross6(1);
								}, 200)
								document.getElementById('field-6').onclick = '';
							} else if (randNum == 4){
								setTimeout(function(){
									cross9(1);
								}, 200)
								document.getElementById('field-9').onclick = '';
							}
						}
					} else if (strokeCross2 == '4'){
						if (fieldCircle6 == true){
							setTimeout(function(){
								cross1(1);
							}, 200)
							document.getElementById('field-1').onclick = '';
						} else if (fieldCircle7 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
							if (randNum == 1){
								setTimeout(function(){
									cross1(1);
								}, 200)
								document.getElementById('field-1').onclick = '';
							} else if (randNum == 2){
								setTimeout(function(){
									cross2(1);
								}, 200)
								document.getElementById('field-2').onclick = '';
							} else if (randNum == 3){
								setTimeout(function(){
									cross8(1);
								}, 200)
								document.getElementById('field-8').onclick = '';
							} else if (randNum == 4){
								setTimeout(function(){
									cross9(1);
								}, 200)
								document.getElementById('field-9').onclick = '';
							}
						}
					}
				} else if (strokeCircle1 == '6'){//********** ноль на 6
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7').onclick = '';
						}
					} else if (strokeCross2 == '2'){
						setTimeout(function(){
							cross5(1);
						}, 200)
						document.getElementById('field-5').onclick = '';
					} else if (strokeCross2 == '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross1(1);
							}, 200)
							document.getElementById('field-1').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross2(1);
							}, 200)
							document.getElementById('field-2').onclick = '';
						}
					}
				} else if (strokeCircle1 == '7'){//********** ноль на 7
					if (strokeCross2 == '1'){
						setTimeout(function(){
							cross9(1);
						}, 200)
						document.getElementById('field-9').onclick = '';
					} else if (strokeCross2 == '9'){
						setTimeout(function(){
							cross1(1);
						}, 200)
						document.getElementById('field-1').onclick = '';
					}
				} else if (strokeCircle1 == '8'){//********** ноль на 8
					if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross1(1);
							}, 200)
							document.getElementById('field-1').onclick = '';
						}
					}
				} else if (strokeCircle1 == '9'){//********** ноль на 9
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5').onclick = '';
						} else if (randNum == 2){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7').onclick = '';
						}
					}
				}
			} else if (strokeCross1 == 7){//******** крест на 7
				  if (strokeCircle1 == '1'){//********** ноль на 1
 					if (strokeCross2 == '9'){
 						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
 						if (randNum == 1){
 							setTimeout(function(){
 								cross3(1);
 							}, 200)
 							document.getElementById('field-3');
 						} else if (randNum == 2){
 							setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
 						}
 					}
				} else if (strokeCircle1 == '2'){//********** ноль на 2
					if (strokeCross2 == '1'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
 						if (randNum == 1){
 							setTimeout(function(){
 								cross9(1);
 							}, 200)
 							document.getElementById('field-9');
 						} else if (randNum == 2){
 							setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
 						}
					}
				} else if (strokeCircle1 == '3'){//********** ноль на 3
					if (strokeCross2 == '1'){
						setTimeout(function(){
 								cross9(1);
 							}, 200)
 							document.getElementById('field-9');
 						} else if (strokeCross2 == '9'){
 							setTimeout(function(){
 								cross3(1);
 							}, 200)
 							document.getElementById('field-3');
 						}
				} else if (strokeCircle1 == '4'){//********** ноль на 4
					if (strokeCross2 == '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
 						if (randNum == 1){
 							setTimeout(function(){
 								cross9(1);
 							}, 200)
 							document.getElementById('field-9');
 						} else if (randNum == 2){
 							setTimeout(function(){
 								cross8(1);
 							}, 200)
 							document.getElementById('field-8');
 						}
					} else if (strokeCross2 == '8'){
						setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
					} else if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
 						if (randNum == 1){
 							setTimeout(function(){
 								cross3(1);
 							}, 200)
 							document.getElementById('field-3');
 						} else if (randNum == 2){
 							setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
 						}
					}
				} else if (strokeCircle1 == '5'){//********** ноль на 5
					if (strokeCross2 == '2'){
						if (fieldCircle8 == true){
							setTimeout(function(){
 								cross1(1);
 							}, 200)
 							document.getElementById('field-1');
						} else if (fieldCircle3 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
	 						if (randNum == 1){
	 							setTimeout(function(){
	 								cross4(1);
	 							}, 200)
	 							document.getElementById('field-4');
	 						} else if (randNum == 2){
	 							setTimeout(function(){
	 								cross1(1);
	 							}, 200)
	 							document.getElementById('field-1');
	 						} else if (randNum == 3){
	 							setTimeout(function(){
	 								cross9(1);
	 							}, 200)
	 							document.getElementById('field-9');
	 						} else if (randNum == 4){
	 							setTimeout(function(){
	 								cross6(1);
	 							}, 200)
	 							document.getElementById('field-6');
	 						}
						}
					} else if (strokeCross2 == '6'){
						if (fieldCircle4 == true){
							setTimeout(function(){
 								cross9(1);
 							}, 200)
 							document.getElementById('field-9');
						} else if (fieldCircle3 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
	 						if (randNum == 1){
	 							setTimeout(function(){
	 								cross8(1);
	 							}, 200)
	 							document.getElementById('field-8');
	 						} else if (randNum == 2){
	 							setTimeout(function(){
	 								cross1(1);
	 							}, 200)
	 							document.getElementById('field-1');
	 						} else if (randNum == 3){
	 							setTimeout(function(){
	 								cross9(1);
	 							}, 200)
	 							document.getElementById('field-9');
	 						} else if (randNum == 4){
	 							setTimeout(function(){
	 								cross2(1);
	 							}, 200)
	 							document.getElementById('field-2');
	 						}
						}
					}
				} else if (strokeCircle1 == '6'){//********** ноль на 6
					if (strokeCross2 == '9'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
 						if (randNum == 1){
 							setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
 						} else if (randNum == 2){
 							setTimeout(function(){
 								cross1(1);
 							}, 200)
 							document.getElementById('field-1');
 						}
					}
				} else if (strokeCircle1 == '8'){//********** ноль на 8
					if (strokeCross2 == 1){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
 						if (randNum == 1){
 							setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
 						} else if (randNum == 2){
 							setTimeout(function(){
 								cross3(1);
 							}, 200)
 							document.getElementById('field-3');
 						}
					} else if (strokeCross2 == '4'){
						setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
					} else if (strokeCross2 = '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
 						if (randNum == 1){
 							setTimeout(function(){
 								cross4(1);
 							}, 200)
 							document.getElementById('field-4');
 						} else if (randNum == 2){
 							setTimeout(function(){
 								cross1(1);
 							}, 200)
 							document.getElementById('field-1');
 						}
					}
				} else if (strokeCircle1 == '9'){//********** ноль на 9
					if (strokeCross2 == '1'){
						setTimeout(function(){
 								cross5(1);
 							}, 200)
 							document.getElementById('field-5');
					}
				}
			} else if (strokeCross1 == 9){//******** крест на 9
				 if (strokeCircle1 == '1'){//********** ноль на 1
 					if (strokeCross2 == '3'){
 						setTimeout(function(){
							cross7(1);
						}, 200)
						document.getElementById('field-7');
 					} else if (strokeCross2 == '7'){
 						setTimeout(function(){
							cross3(1);
						}, 200)
						document.getElementById('field-3');
 					}
				} else if (strokeCircle1 == '2'){//********** ноль на 2
					if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
						} else if (randNum == 2){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7');
						}
					}
				} else if (strokeCircle1 == '3'){//********** ноль на 3
					if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
						} else if (randNum == 2){
							setTimeout(function(){
								cross1(1);
							}, 200)
							document.getElementById('field-1');
						}
					}
				} else if (strokeCircle1 == '4'){//********** ноль на 4
					if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
						} else if (randNum == 2){
							setTimeout(function(){
								cross3(1);
							}, 200)
							document.getElementById('field-3');
						}
					}
				} else if (strokeCircle1 == '5'){//********** ноль на 5
					if (strokeCross2 == '4'){
						if (fieldCircle6 == true){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7');
						} else if (fieldCircle1 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
							if (randNum == 1){
								setTimeout(function(){
									cross2(1);
								}, 200)
								document.getElementById('field-2');
							} else if (randNum == 2){
								setTimeout(function(){
									cross3(1);
								}, 200)
								document.getElementById('field-3');
							} else if (randNum == 3){
								setTimeout(function(){
									cross7(1);
								}, 200)
								document.getElementById('field-7');
							} else if (randNum == 4){
								setTimeout(function(){
									cross8(1);
								}, 200)
								document.getElementById('field-8');
							}
						}
					} else if (strokeCross2 == '2'){
						if (fieldCircle8 == true){
							setTimeout(function(){
								cross3(1);
							}, 200)
							document.getElementById('field-3');
						} else if (fieldCircle1 == true){
							var randNum = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
							if (randNum == 1){
								setTimeout(function(){
									cross4(1);
								}, 200)
								document.getElementById('field-4');
							} else if (randNum == 2){
								setTimeout(function(){
									cross3(1);
								}, 200)
								document.getElementById('field-3');
							} else if (randNum == 3){
								setTimeout(function(){
									cross7(1);
								}, 200)
								document.getElementById('field-7');
							} else if (randNum == 4){
								setTimeout(function(){
									cross6(1);
								}, 200)
								document.getElementById('field-6');
							}
						}
					}
				} else if (strokeCircle1 == '6'){//********** ноль на 6
					if (strokeCross2 == '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross7(1);
							}, 200)
							document.getElementById('field-7');
						} else if (randNum == 2){
							setTimeout(function(){
								cross8(1);
							}, 200)
							document.getElementById('field-8');
						}
					} else if (strokeCross2 == '7'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
						} else if (randNum == 2){
							setTimeout(function(){
								cross1(1);
							}, 200)
							document.getElementById('field-1');
						}
					} else if (strokeCross2 == '8'){
						setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
					}
				} else if (strokeCircle1 == '7'){//********** ноль на 7
					if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
						} else if (randNum == 2){
							setTimeout(function(){
								cross1(1);
							}, 200)
							document.getElementById('field-1');
						}
					}
				} else if (strokeCircle1 == '8'){//********** ноль на 8
					if (strokeCross2 == '5'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross3(1);
							}, 200)
							document.getElementById('field-3');
						} else if (randNum == 2){
							setTimeout(function(){
								cross6(1);
							}, 200)
							document.getElementById('field-6');
						}
					} else if (strokeCross2 == '3'){
						var randNum = (Math.floor(Math.random() * (2 - 1 + 1)) + 1);
						if (randNum == 1){
							setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
						} else if (randNum == 2){
							setTimeout(function(){
								cross1(1);
							}, 200)
							document.getElementById('field-1');
						}
					} else if (strokeCross2 == '6'){
						setTimeout(function(){
								cross5(1);
							}, 200)
							document.getElementById('field-5');
					}
				}
			}
		} else if(fieldCross == 3){//четвёртый ход
			if (strokeCircle1 == '5'){
				if (fieldCircle2 == true && fieldCircle4 == true){
					setTimeout(function(){
						cross9(1);
					}, 200)
					document.getElementById('field-9').onclick = '';
				} else if (fieldCircle2 == true && fieldCircle6 == true){
					setTimeout(function(){
						cross7(1);
					}, 200)
					document.getElementById('field-7').onclick = '';
				} else if (fieldCircle4 == true && fieldCircle8 == true){
					setTimeout(function(){
						cross3(1);
					}, 200)
					document.getElementById('field-3').onclick = '';
				} else if (fieldCircle6 == true && fieldCircle8 == true){
					setTimeout(function(){
						cross1(1);
					}, 200)
					document.getElementById('field-1').onclick = '';
				} else {
					easyCircle();
				}
			}
		} else {
			easyCircle()
		}
	}
}


function lossCross(){
	if (fieldCircle1 == true && fieldCircle2 == true && fieldCircle3 == true ||
		fieldCircle4 == true && fieldCircle5 == true && fieldCircle6 == true ||
		fieldCircle7 == true && fieldCircle8 == true && fieldCircle9 == true ||
		fieldCircle1 == true && fieldCircle4 == true && fieldCircle7 == true ||
		fieldCircle2 == true && fieldCircle5 == true && fieldCircle8 == true ||
		fieldCircle3 == true && fieldCircle6 == true && fieldCircle9 == true ||
		fieldCircle1 == true && fieldCircle5 == true && fieldCircle9 == true ||
		fieldCircle3 == true && fieldCircle5 == true && fieldCircle7 == true){
		setTimeout(function(){
			var loss = confirm('Вы проиграли  =(\n\nПопробывать ещё раз?');
			if (loss == true){
				form1();
			}
		}, 100)
	}
}
var loss_circle = 0;
function lossCircle(){
	if (fieldCross1 == true && fieldCross2 == true && fieldCross3 == true ||
		 fieldCross4 == true && fieldCross5 == true && fieldCross6 == true ||
		 fieldCross7 == true && fieldCross8 == true && fieldCross9 == true ||
		 fieldCross1 == true && fieldCross4 == true && fieldCross7 == true ||
		 fieldCross2 == true && fieldCross5 == true && fieldCross8 == true ||
		 fieldCross3 == true && fieldCross6 == true && fieldCross9 == true ||
		 fieldCross1 == true && fieldCross5 == true && fieldCross9 == true ||
		 fieldCross3 == true && fieldCross5 == true && fieldCross7 == true){
		setTimeout(function(){
			var loss = confirm('Вы проиграли  =(\n\nПопробывать ещё раз?');
			if (loss == true){
				form1();
			}
		}, 100)
		loss_circle = 1;
	}
}

function draw(){
	if (field1 == true && field2 == true 
		&& field3 == true && field4 == true 
		&& field5 == true && field6 == true 
		&& field7 == true && field8 == true 
		&& field9 == true){
		if (loss_circle == 0){
			setTimeout(function(){
				var draw = confirm('Ничья!\n\nХочешь сыграть сначала?');
				if (draw == true){
					form1();
				}
			}, 100)
		}
	}
}