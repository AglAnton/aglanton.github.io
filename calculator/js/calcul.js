
//************************** начало калькулятора **********************************

var p1 = false, p2 = false, p3 = false, p4 = false, p5 = false, 
p_sign = false, p6 = false, p7 = false, p8 = false, p9 = false, p10 = false;


//****** отклик на клавиши ****************
function even(event){
	var x = event.keyCode;
	if (x == 49 || x == 97){
		num('1');
	} else if (x == 50 || x == 98){
		num('2');
	} else if (x == 51 || x == 99){
		num('3');
	} else if (x == 52 || x == 100){
		num('4');
	} else if (x == 53 || x == 101){
		num('5');
	} else if (x == 54 || x == 102){
		num('6');
	} else if (x == 55 || x == 103){
		num('7');
	} else if (x == 56 || x == 104){
		num('8');
	} else if (x == 57 || x == 105){
		num('9');
	} else if (x == 48 || x == 96){
		num('0');
	} else if (x == 107){
		sign('+');
	} else if (x == 109 || x == 189){
		sign('-');
	} else if (x == 106){
		sign('x');
	} else if (x == 111){
		sign(':');
	} else if (x == 8) {
		erase();
	} else if (x == 187){
		equally();
	}
}

//*************************** цифры *********************************************

var r1 = '', r2 = '', r3 = '', r4 = '', r5 = '',
 r6 = '', r7 = '', r8 = '', r9 = '', r10 = '';

 var nol_2 = false, nol_3 = false, nol_4 = false, nol_5 = false, nol_6 = false,
  nol_7 = false, nol_8 = false, nol_9 = false, nol_10 = false;

function num(numb){
	nol();
	if (p1 == false) {
		document.getElementById('screen_1').innerHTML = numb;
		p1 = true;
		r1 = numb;
	} else if (p2 == false && nol_2 == false){
		document.getElementById('screen_2').innerHTML = numb;
		p2 = true;
		r2 = numb;
	} else if (p3 == false && nol_3 == false) {
		document.getElementById('screen_3').innerHTML = numb;
		p3 = true;
		r3 = numb;
	} else if (p4 == false && nol_4 == false) {
		document.getElementById('screen_4').innerHTML = numb;
		p4 = true;
		r4 = numb;
	} else if (p5 == false && nol_5 == false) {
		document.getElementById('screen_5').innerHTML = numb;
		p5 = true;
		r5 = numb;
	} else if (p6 == false && nol_6 == false) {
		document.getElementById('screen_6').innerHTML = numb;
		p6 = true;
		r6 = numb;
	} else if (p7 == false && nol_7 == false) {
		document.getElementById('screen_7').innerHTML = numb;
		p7 = true;
		r7 = numb;
	} else if (p8 == false && nol_8 == false) {
		document.getElementById('screen_8').innerHTML = numb;
		p8 = true;
		r8 = numb;
	} else if (p9 == false && nol_9 == false) {
			document.getElementById('screen_9').innerHTML = numb;
			p9 = true;
			r9 = numb;
	} else if (p10 == false && nol_10 == false) {
			document.getElementById('screen_10').innerHTML = numb;
			p10 = true;
			r10 = numb;
	}
}

//*************************** знаки *********************************************

var p_sign_1 = false, p_sign_2 = false, p_sign_3 = false, p_sign_4 = false, p_sign_5 = false, 
p_sign_6 = false, p_sign_7 = false, p_sign_8 = false, p_sign_9 = false;

var s1, s2, s3, s4, s5, s6, s7, s8, s9;

function sign(sig){
	if (p_sign == false && p1 == true && p10 == false && p2 == false) {
		document.getElementById('screen_sign_1').innerHTML = sig;
		p_sign = true;
		p_sign_1 = true;
		s = sig;
		nol_2 = false;
		nol_3 = false;
		nol_4 = false;
		nol_5 = false;
		nol_6 = false;
		nol_7 = false;
		nol_8 = false;
		nol_9 = false;
		nol_10 = false;
	} else if (p_sign == false && p1 == true && p10 == false && p3 == false) {
		document.getElementById('screen_sign_2').innerHTML = sig;
		p_sign = true;
		p_sign_2 = true;
		s = sig;
	} else if (p_sign == false && p1 == true && p10 == false && p4 == false) {
		document.getElementById('screen_sign_3').innerHTML = sig;
		p_sign = true;
		p_sign_3 = true;
		s = sig;
	} else if (p_sign == false && p1 == true && p10 == false && p5 == false) {
		document.getElementById('screen_sign_4').innerHTML = sig;
		p_sign = true;
		p_sign_4 = true;
		s = sig;
	} else if (p_sign == false && p1 == true && p10 == false && p6 == false) {
		document.getElementById('screen_sign_5').innerHTML = sig;
		p_sign = true;
		p_sign_5 = true;
		s = sig;
	} else if (p_sign == false && p1 == true && p10 == false && p7 == false) {
		document.getElementById('screen_sign_6').innerHTML = sig;
		p_sign = true;
		p_sign_6 = true;
		s = sig;
	} else if (p_sign == false && p1 == true && p10 == false && p8 == false) {
		document.getElementById('screen_sign_7').innerHTML = sig;
		p_sign = true;
		p_sign_7 = true;
		s = sig;
	} else if (p_sign == false && p1 == true && p10 == false && p9 == false) {
		document.getElementById('screen_sign_8').innerHTML = sig;
		p_sign = true;
		p_sign_8 = true;
		s = sig;
	} else if (p_sign == false && p1 == true && p10 == false) {
		document.getElementById('screen_sign_9').innerHTML = sig;
		p_sign = true;
		p_sign_9 = true;
		s = sig;
	} 
}

//*************************** стереть ******************************************

var res = false;

function erase(){
	if (r10 != '') {//**************************************number
		document.getElementById('screen_10').innerHTML = '';
		p10 = false;
		r10 = '';
	} else if (p_sign_9 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_9').innerHTML = '';
		p_sign = false;
		p_sign_9 = false;
		s = '';
	} else if (r9 != '') {//**************************************number
		if (r9 == '0'){
			nol_10 = false;
		};
		document.getElementById('screen_9').innerHTML = '';
		p9 = false;
		r9 = '';
	} else if (p_sign_8 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_8').innerHTML = '';
		p_sign = false;
		p_sign_8 = false;
		s = '';
	} else if (r8 != '') {//**************************************number
		if (r8 == '0'){
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_8').innerHTML = '';
		p8 = false;
		r8 = '';
	} else if (p_sign_7 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_7').innerHTML = '';
		p_sign = false;
		p_sign_7 = false;
		s = '';
	} else if (r7 != '') {//**************************************number
		if (r7 == '0'){
			nol_8 = false;
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_7').innerHTML = '';
		p7 = false;
		r7 = '';
	} else if (p_sign_6 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_6').innerHTML = '';
		p_sign = false;
		p_sign_6 = false;
		s = '';
	} else if (r6 != '') {//**************************************number
		if (r6 == '0'){
			nol_7 = false;
			nol_8 = false;
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_6').innerHTML = '';
		p6 = false;
		r6 = '';
	}  else if (p_sign_5 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_5').innerHTML = '';
		p_sign = false;
		p_sign_5 = false;
		s = '';
	} else if (r5 != '') {//**************************************number
		if (r5 == '0'){
			nol_6 = false;
			nol_7 = false;
			nol_8 = false;
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_5').innerHTML = '';
		p5 = false;
		r5 = '';
	} else if (p_sign_4 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_4').innerHTML = '';
		p_sign = false;
		p_sign_4 = false;
		s = '';
	} else if (r4 != '') {//**************************************number
		if (r4 == '0'){
			nol_5 = false;
			nol_6 = false;
			nol_7 = false;
			nol_8 = false;
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_4').innerHTML = '';
		p4 = false;
		r4 = '';
	} else if (p_sign_3 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_3').innerHTML = '';
		p_sign = false;
		p_sign_3 = false;
		s = '';
	} else if (r3 != '') {//**************************************number
		if (r3 == '0'){
			nol_4 = false;
			nol_5 = false;
			nol_6 = false;
			nol_7 = false;
			nol_8 = false;
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_3').innerHTML = '';
		p3 = false;
		r3 = '';
	} else if (p_sign_2 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_2').innerHTML = '';
		p_sign = false;
		p_sign_2 = false;
		s = '';
	} else if (r2 != '') {//**************************************number
		if (r2 == '0'){
			nol_3 = false;
			nol_4 = false;
			nol_5 = false;
			nol_6 = false;
			nol_7 = false;
			nol_8 = false;
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_2').innerHTML = '';
		p2 = false;
		r2 = '';
		
	} else if (p_sign_1 == true && s != '') {//**************************************sign
		document.getElementById('screen_sign_1').innerHTML = '';
		p_sign = false;
		p_sign_1 = false;
		s = '';
		if (r1 == '0'){
			nol_2 = true;
			nol_3 = true;
			nol_4 = true;
			nol_5 = true;
			nol_6 = true;
			nol_7 = true;
			nol_8 = true;
			nol_9 = true;
			nol_10 = true;
		};
	} else if (r1 != '') {//**************************************number
		if (r2 == '0'){
			nol_2 = false;
			nol_3 = false;
			nol_4 = false;
			nol_5 = false;
			nol_6 = false;
			nol_7 = false;
			nol_8 = false;
			nol_9 = false;
			nol_10 = false;
		};
		document.getElementById('screen_1').innerHTML = '';
		p1 = false;
		r1 = '';
	} else if (res == true) {
		document.getElementById('screen_result').innerHTML = '';
		res = false;
		p1 = false;
		p2 = false;
		p3 = false;
		p4 = false;
		p5 = false;
		p6 = false;
		p7 = false;
		p8 = false;
		p9 = false;
		p10 = false;
		nol_2 = false;
		nol_3 = false;
		nol_4 = false;
		nol_5 = false;
		nol_6 = false;
		nol_7 = false;
		nol_8 = false;
		nol_9 = false;
		nol_10 = false;
		s = '';
		resul = '';
		result = '';
	}
}

//***************************** равно ******************************************

var result = '', result_1, result_2, resul = '';

function equally(){
	
	if (res == true){
		if (resul.length == 8 +1){  //********************************************* result.length == 8
			if (p_sign_9 == true && p10 == true){//**** sign == 9

				resul_1 = result+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else {
				count();
			}
		} else if (resul.length == 7 +1){  //***************************************** resul.length == 7 
			if (p_sign_9 == true && p10 == true){  //**** sign == 9
				resul_1 = result+r8+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_8 == true && p9 == true){ //**** sign == 8
				resul_1 = result+r8;
				resul_1 = parseInt(resul_1);

				resul_2 = r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					result = resul_1/resul_2;
				} else if (s == 'x'){
					result = resul_1*resul_2;
				} 
			} else {
				count();
			} 
		} else if (resul.length == 6 +1){  //*************************************** result.length == 6
			if (p_sign_9 == true && p10 == true){//**** sign == 9

				resul_1 = result+r7+r8+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_8 == true && p9 == true){//**** sign == 8

				resul_1 = result+r7+r8;
				resul_1 = parseInt(resul_1);

				resul_2 = r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_7 == true && p8 == true){//**** sign == 7

				resul_1 = result+r7;
				resul_1 = parseInt(resul_1);

				resul_2 = r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else {
				count();
			}
		} else if (resul.length == 5 +1){//****************************************** result.length == 5
			if (p_sign_9 == true && p10 == true){//***** sign == 9

				resul_1 = result+r6+r7+r8+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_8 == true && p9 == true){//***** sign == 8

				resul_1 = result+r6+r7+r8;
				resul_1 = parseInt(resul_1);

				resul_2 = r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_7 == true && p8 == true){//***** sign == 7
				
				resul_1 = result+r6+r7;
				resul_1 = parseInt(resul_1);

				resul_2 = r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_6 == true && p7 == true){//***** sign == 6

				resul_1 = result+r6;
				resul_1 = parseInt(resul_1);

				resul_2 = r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else {
				count();
			}
		} else if (resul.length == 4 +1){//****************************************** result.length == 4
			if (p_sign_9 == true && p10 == true){//***** sign == 9

				resul_1 = result+r5+r6+r7+r8+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_8 == true && p9 == true){//***** sign == 8

				resul_1 = result+r5+r6+r7+r8;
				resul_1 = parseInt(resul_1);

				resul_2 = r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_7 == true && p8 == true){//***** sign == 7
				
				resul_1 = result+r5+r6+r7;
				resul_1 = parseInt(resul_1);

				resul_2 = r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_6 == true && p7 == true){//***** sign == 6

				resul_1 = result+r5+r6;
				resul_1 = parseInt(resul_1);

				resul_2 = r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_5 == true && p6 == true){//***** sign == 5

				resul_1 = result+r5;
				resul_1 = parseInt(resul_1);

				resul_2 = r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else {
				count();
			}
		} else if (resul.length == 3 +1){//****************************************** result.length == 3
			if (p_sign_9 == true && p10 == true){//***** sign == 9

				resul_1 = result+r4+r5+r6+r7+r8+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_8 == true && p9 == true){//***** sign == 8

				resul_1 = result+r4+r5+r6+r7+r8;
				resul_1 = parseInt(resul_1);

				resul_2 = r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_7 == true && p8 == true){//***** sign == 7
				
				resul_1 = result+r4+r5+r6+r7;
				resul_1 = parseInt(resul_1);

				resul_2 = r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_6 == true && p7 == true){//***** sign == 6

				resul_1 = result+r4+r5+r6;
				resul_1 = parseInt(resul_1);

				resul_2 = r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_5 == true && p6 == true){//***** sign == 5

				resul_1 = result+r4+r5;
				resul_1 = parseInt(resul_1);

				resul_2 = r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_4 == true && p5 == true){//***** sign == 4

				resul_1 = result+r4;
				resul_1 = parseInt(resul_1);

				resul_2 = r5+r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else {
				count();
			}
		} else if (resul.length == 2 +1){//****************************************** result.length == 2
			if (p_sign_9 == true && p10 == true){//***** sign == 9

				resul_1 = result+r3+r4+r5+r6+r7+r8+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_8 == true && p9 == true){//***** sign == 8

				resul_1 = result+r3+r4+r5+r6+r7+r8;
				resul_1 = parseInt(resul_1);

				resul_2 = r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_7 == true && p8 == true){//***** sign == 7
				
				resul_1 = result+r3+r4+r5+r6+r7;
				resul_1 = parseInt(resul_1);

				resul_2 = r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_6 == true && p7 == true){//***** sign == 6

				resul_1 = result+r3+r4+r5+r6;
				resul_1 = parseInt(resul_1);

				resul_2 = r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_5 == true && p6 == true){//***** sign == 5

				resul_1 = result+r3+r4+r5;
				resul_1 = parseInt(resul_1);

				resul_2 = r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_4 == true && p5 == true){//***** sign == 4

				resul_1 = result+r3+r4;
				resul_1 = parseInt(resul_1);

				resul_2 = r5+r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_3 == true && p4 == true){//***** sign == 3

				resul_1 = result+r3;
				resul_1 = parseInt(resul_1);

				resul_2 = r4+r5+r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else {
				count();
			}
		} else if (resul.length == 1 +1){//****************************************** result.length == 1
			if (p_sign_9 == true && p10 == true){//***** sign == 9

				resul_1 = result+r2+r3+r4+r5+r6+r7+r8+r9;
				resul_1 = parseInt(resul_1);

				resul_2 = r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_8 == true && p9 == true){//***** sign == 8

				resul_1 = result+r2+r3+r4+r5+r6+r7+r8;
				resul_1 = parseInt(resul_1);

				resul_2 = r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_7 == true && p8 == true){//***** sign == 7
				
				resul_1 = result+r2+r3+r4+r5+r6+r7;
				resul_1 = parseInt(resul_1);

				resul_2 = r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_6 == true && p7 == true){//***** sign == 6

				resul_1 = result+r2+r3+r4+r5+r6;
				resul_1 = parseInt(resul_1);

				resul_2 = r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_5 == true && p6 == true){//***** sign == 5

				resul_1 = result+r2+r3+r4+r5;
				resul_1 = parseInt(resul_1);

				resul_2 = r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_4 == true && p5 == true){//***** sign == 4

				resul_1 = result+r2+r3+r4;
				resul_1 = parseInt(resul_1);

				resul_2 = r5+r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else if (p_sign_3 == true && p4 == true){//***** sign == 3

				resul_1 = result+r2+r3;
				resul_1 = parseInt(resul_1);

				resul_2 = r4+r5+r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			}  else if (p_sign_2 == true && p3 == true){//***** sign == 2

				resul_1 = result+r2;
				resul_1 = parseInt(resul_1);

				resul_2 = r3+r4+r5+r6+r7+r8+r9+r10;
				resul_2 = parseInt(resul_2);

				if (s == '+'){
					result = resul_1+resul_2;
				} else if (s == '-'){
					result = resul_1-resul_2;
				} else if (s == ':'){
					if (result_2 == 0) {
						result = 'Ошибка';
					} else {
						result = result_1/result_2;
					}
				} else if (s == 'x'){
					result = resul_1*resul_2;
				}
			} else {
				count();
			} 
		} else {
			count();
		}
	} else {
		count();
	}

	p1 = false;
	p2 = false;
	p3 = false;
	p4 = false;
	p5 = false;
	p6 = false;
	p7 = false;
	p8 = false;
	p9 = false;
	p10 = false;
	p_sign = false;
	p_sign_1 = false;
	p_sign_2 = false;
	p_sign_3 = false;
	p_sign_4 = false;
	p_sign_5 = false;
	p_sign_6 = false;
	p_sign_7 = false;
	p_sign_8 = false;
	p_sign_9 = false;
	r1 = '';
	r2 = '';
	r3 = '';
	r4 = '';
	r5 = '';
	r6 = '';
	r7 = '';
	r8 = '';
	r9 = '';
	r10 = '';
	s = '';

	document.getElementById('screen_1').innerHTML = '';
	document.getElementById('screen_2').innerHTML = '';
	document.getElementById('screen_3').innerHTML = '';
	document.getElementById('screen_4').innerHTML = '';
	document.getElementById('screen_5').innerHTML = '';
	document.getElementById('screen_6').innerHTML = '';
	document.getElementById('screen_7').innerHTML = '';
	document.getElementById('screen_8').innerHTML = '';
	document.getElementById('screen_9').innerHTML = '';
	document.getElementById('screen_10').innerHTML = '';
	document.getElementById('screen_sign_1').innerHTML = '';
	document.getElementById('screen_sign_2').innerHTML = '';
	document.getElementById('screen_sign_3').innerHTML = '';
	document.getElementById('screen_sign_4').innerHTML = '';
	document.getElementById('screen_sign_5').innerHTML = '';
	document.getElementById('screen_sign_6').innerHTML = '';
	document.getElementById('screen_sign_7').innerHTML = '';
	document.getElementById('screen_sign_8').innerHTML = '';
	document.getElementById('screen_sign_9').innerHTML = '';

	if (result != 'Ошибка' && result != ''){
		 result = Math.round(result);
	};

	document.getElementById('screen_result').innerHTML = result;
	res = true;
	resul = result;
	resul = parseInt(resul);
	length();
	if (result == 'Ошибка'){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
		p5 = true;
		p6 = true;
		p7 = true;
		p8 = true;
		p9 = true;
		p10 = true;
	};
}

function length(){
	resul = resul+"e";
	if (resul.length == 10+1){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
		p5 = true;
		p6 = true;
		p7 = true;
		p8 = true;
		p9 = true;
		p10 = true;
	} else if (resul.length == 9+1){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
		p5 = true;
		p6 = true;
		p7 = true;
		p8 = true;
		p9 = true;
	} else if (resul.length == 8+1){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
		p5 = true;
		p6 = true;
		p7 = true;
		p8 = true;
	} else if (resul.length == 7+1){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
		p5 = true;
		p6 = true;
		p7 = true;
	} else if (resul.length == 6+1){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
		p5 = true;
		p6 = true;
	} else if (resul.length == 5+1){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
		p5 = true;
	} else if (resul.length == 4+1){
		p1 = true;
		p2 = true;
		p3 = true;
		p4 = true;
	} else if (resul.length == 3+1){
		p1 = true;
		p2 = true;
		p3 = true;
	} else if (resul.length == 2+1){
		p1 = true;
		p2 = true;
	} else if (resul.length == 1+1){
		p1 = true;
	} else if (resul.length == 0+1){
		p1 = false;
		p2 = false;
		p3 = false;
		p4 = false;
		p5 = false;
		p6 = false;
		p7 = false;
		p8 = false;
		p9 = false;
		p10 = false;
	}
}

//*************************************** ноль ***************************************

function nol(){
	if (result == '0' && p_sign_1 == false){
		nol_2 = true;
		nol_3 = true;
		nol_4 = true;
		nol_5 = true;
		nol_6 = true;
		nol_7 = true;
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (r1 == '0' && p_sign_1 == false){
		nol_2 = true;
		nol_3 = true;
		nol_4 = true;
		nol_5 = true;
		nol_6 = true;
		nol_7 = true;
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_1 == true && r2 == '0'){
		nol_3 = true;
		nol_4 = true;
		nol_5 = true;
		nol_6 = true;
		nol_7 = true;
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_2 == true && r3 == '0'){
		nol_4 = true;
		nol_5 = true;
		nol_6 = true;
		nol_7 = true;
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_3 == true && r4 == '0'){
		nol_5 = true;
		nol_6 = true;
		nol_7 = true;
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_4 == true && r5 == '0'){
		nol_6 = true;
		nol_7 = true;
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_5 == true && r6 == '0'){
		nol_7 = true;
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_6 == true && r7 == '0'){
		nol_8 = true;
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_7 == true && r8 == '0'){
		nol_9 = true;
		nol_10 = true;
	} else if (p_sign_8 == true && r9 == '0'){
		nol_10 = true;
	}
}

function count(){

//***************************** 9 *******************************

	if (p_sign_9 == true && s == '+' && p10 == true){
		
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8+r9;
			result_1 = parseInt(result_1);
		
			result_2 = r10;
			result_2 = parseInt(result_2);

			result = result_1+result_2;
		} else if (p_sign_9 == true && s == '-' && p10 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8+r9;
			result_1 = parseInt(result_1);
		
			result_2 = r10;
			result_2 = parseInt(result_2);

			result = result_1-result_2;
		} else if (p_sign_9 == true && s == 'x' && p10 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8+r9;
			result_1 = parseInt(result_1);
		
			result_2 = r10;
			result_2 = parseInt(result_2);

			result = result_1*result_2;
		} else if (p_sign_9 == true && s == ':' && p10 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8+r9;
			result_1 = parseInt(result_1);
		
			result_2 = r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		} 

	//***************************** 8 ****************************

		else if (p_sign_8 == true && s == '+' && p9 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8;
			result_1 = parseInt(result_1);
		
			result_2 = r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_8 == true && s == '-' && p9 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8;
			result_1 = parseInt(result_1);
		
			result_2 = r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_8 == true && s == 'x' && p9 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8;
			result_1 = parseInt(result_1);
		
			result_2 = r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_8 == true && s == ':' && p9 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7+r8;
			result_1 = parseInt(result_1);
		
			result_2 = r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		}

	//****************************** 7 ******************************
		 
		 else if (p_sign_7 == true && s == '+' && p8 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7;
			result_1 = parseInt(result_1);
		
			result_2 = r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_7 == true && s == '-' && p8 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7;
			result_1 = parseInt(result_1);
		
			result_2 = r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_7 == true && s == 'x' && p8 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7;
			result_1 = parseInt(result_1);
		
			result_2 = r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_7 == true && s == ':' && p8 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6+r7;
			result_1 = parseInt(result_1);
		
			result_2 = r8+r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		}

	//****************************** 6 ***********************************

		 else if (p_sign_6 == true && s == '+'  && p7 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6;
			result_1 = parseInt(result_1);
		
			result_2 = r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_6 == true && s == '-'  && p7 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6;
			result_1 = parseInt(result_1);
		
			result_2 = r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_6 == true && s == 'x'  && p7 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6;
			result_1 = parseInt(result_1);
		
			result_2 = r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_6 == true && s == ':' && p7 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5+r6;
			result_1 = parseInt(result_1);
		
			result_2 = r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		} 

	//******************************* 5 ************************************

		else if (p_sign_5 == true && s == '+'  && p6 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5;
			result_1 = parseInt(result_1);
		
			result_2 = r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_5 == true && s == '-'  && p6 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5;
			result_1 = parseInt(result_1);
		
			result_2 = r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_5 == true && s == 'x'  && p6 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5;
			result_1 = parseInt(result_1);
		
			result_2 = r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_5 == true && s == ':'  && p6 == true){
			
			result_1 = resul+r1+r2+r3+r4+r5;
			result_1 = parseInt(result_1);
		
			result_2 = r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		} 

	//***************************** 4 ****************************

		else if (p_sign_4 == true && s == '+' && p5 == true){
			
			result_1 = resul+r1+r2+r3+r4;
			result_1 = parseInt(result_1);
		
			result_2 = r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_4 == true && s == '-' && p5 == true){
			
			result_1 = resul+r1+r2+r3+r4;
			result_1 = parseInt(result_1);
		
			result_2 = r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_4 == true && s == 'x' && p5 == true){
			
			result_1 = resul+r1+r2+r3+r4;
			result_1 = parseInt(result_1);
		
			result_2 = r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_4 == true && s == ':' && p5 == true){
			
			result_1 = resul+r1+r2+r3+r4;
			result_1 = parseInt(result_1);
		
			result_2 = r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		}

	//****************************** 3 ******************************
		 
		 else if (p_sign_3 == true && s == '+' && p4 == true){
			
			result_1 = resul+r1+r2+r3;
			result_1 = parseInt(result_1);
		
			result_2 = r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_3 == true && s == '-' && p4 == true){
			
			result_1 = resul+r1+r2+r3;
			result_1 = parseInt(result_1);
		
			result_2 = r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_3 == true && s == 'x' && p4 == true){
			
			result_1 = resul+r1+r2+r3;
			result_1 = parseInt(result_1);
		
			result_2 = r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_3 == true && s == ':' && p4 == true){
			
			result_1 = resul+r1+r2+r3;
			result_1 = parseInt(result_1);
		
			result_2 = r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		}

	//****************************** 2 ********************************

		 else if (p_sign_2 == true && s == '+' && p3 == true){
			
			result_1 = resul+r1+r2;
			result_1 = parseInt(result_1);
		
			result_2 = r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_2 == true && s == '-' && p3 == true){
			
			result_1 = resul+r1+r2;
			result_1 = parseInt(result_1);
		
			result_2 = r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_2 == true && s == 'x' && p3 == true){
			
			result_1 = resul+r1+r2;
			result_1 = parseInt(result_1);
		
			result_2 = r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_2 == true && s == ':' && p3 == true){
			
			result_1 = resul+r1+r2;
			result_1 = parseInt(result_1);
		
			result_2 = r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		} 

	//****************************** 1 ********************************

		 else if (p_sign_1 == true && s == '+' && p2 == true){
			
			result_1 = resul+r1;
			result_1 = parseInt(result_1);
		
			result_2 = r2+r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1+result_2;
		} else if (p_sign_1 == true && s == '-'  && p2 == true){
			
			result_1 = resul+r1;
			result_1 = parseInt(result_1);
		
			result_2 =r2+r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1-result_2;
		} else if (p_sign_1 == true && s == 'x'  && p2 == true){
			
			result_1 = resul+r1;
			result_1 = parseInt(result_1);
		
			result_2 = r2+r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			result = result_1*result_2;
		} else if (p_sign_1 == true && s == ':'  && p2 == true){
			
			result_1 = resul+r1;
			result_1 = parseInt(result_1);
		
			result_2 = r2+r3+r4+r5+r6+r7+r8+r9+r10;
			result_2 = parseInt(result_2);
			
			if (result_2 == 0) {
				result = 'Ошибка';
			} else {
				result = result_1/result_2;
			}
		} else if (p_sign_1 == false && p_sign_2 == false && p_sign_3 == false 
			&& p_sign_4 == false && p_sign_5 == false && p_sign_6 == false && p_sign_7 == false 
			&& p_sign_8 == false && p_sign_9 == false && r1 != '') {
			result = resul+r1+r2+r3+r4+r5+r6+r7+r8+r9+r10;
			result = parseInt(result);
		} else if (p1 == true && p_sign == true){
			hfhfhfh;
		}
}