
//  function declaration
// function sayHello(){
// 	alert("hello");
// }




// var result = undefined; // global varibale


// function calculate(){
// 	result = 2 * 5;
// 	var a = 5; // loval varible
// 	return result;
// }

// function sum(){
// 	return result + 5;
// }


// console.log(res)
// console.log(sum())
// console.log(result)




 // console.log(result);

// var globalResult;

//  function calculate(first, second){ 
//  	var result =  first + second; 
//  	globalResult = result;
//  	return "local function result : " + result;
//  }



// console.log(calculate(2.50, 5))
// console.log("global result : " + globalResult);
// console.log(first);



// function expression

// named function expression
 /*var expressionFunc = function namedFunc(number){
	console.log(number);
	if(number > 0){
		number--;
		expressionFunc(number); 
	}else {
		return;
	}
}



expressionFunc(5); */




// --------------------------------declatative
// console.log(test());

// function test(){
// 	return 5;
// }

// console.log(test());


// //-----------------------------------expression

// console.log(testExpr())

// var testExpr = function testNamed(){
// 	return 15;
// }

var input = prompt();
 
var sayHello;


if(input>18){
	sayHello = function test(){
		alert("hi");
	}
}else if(false){
	sayHello = function test(){
		alert("hello");
	}
} 



sayHello();