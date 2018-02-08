//var Tony = {
//    firstname:'Tony',
//    lastname:'Stark',
//    
//    address:{
//        street: '111 Main St.',
//        city: 'New York',
//        state: 'NY'
//    }
//
//};
//
//
//
//function greet(person){
//    
//    console.log('Hi ' + person.firstname);
//    
//}
//
//greet(Tony);
//
//
//
//greet({
//    firstname:'Mary', 
//    lastname:'Doe'
//
//});
//
//Tony.address2={
//    street:'333 Second St.'
//}

///////////////////////////////////////////////////



//FUNCTIONS ARE OBJECTS



//function greet(){
//    
//    console.log("Hello!");
//    
//}
//
//
//greet.language = 'english';
//console.log(greet.language);
//


///////////////////////////////////////////




//FUNCTION STATEMENTS AND FUNCTION EXPRESSIONS


//
//greet();
//
//function greet(){ //FUNCTION STATEMENT
//    
//    console.log("Hello!");
//    
//}
//
//
//
//
//var expressGreet = function(){ // FUNCTION EXPRESSION
//    
//    console.log("Hi! from expression!")
//    
//}
//
//
//expressGreet();






//FUNCTION STATEMENTS ARE HOISTED BUT EXPRESSIONS ARE NOT SO CANT CALL EXPRESSION BEFORE DEFINING IT

//
//function log(a){
//    
//  a();
//}
//
//log(function(){
//   
//    console.log('hi');
//    
//});
//
//

//////////////////////////////////////////////////




//BY VALUES vs BY REFERENCE

//var a=3;
//var b;
//
//b = a;
//console.log( "a is "+a +". "+"b is "+ b);
//
//
//
//
//var c ={ greeting:'hi' };
//var d;
//
//d=c;
//c.greeting='hello'; //mutate
//
//console.log( "c is "+c.greeting +". "+"d is "+ d.greeting);
//
//console.log(c);
//console.log(d);
//
//
//function changeGreeting(obj){
//    
//    obj.greeting ='Hola';
//    
//}
//
//
//
//changeGreeting(d);
//console.log(c);
//console.log(d);
//

/////////////////////////////////////////////////////




//THIS
//
//function a(){
//    
//    console.log(this);
//    this.newVariable = 'hello';
//}
//
//var b = function(){
//    
//  console.log(this);  
//    
//};
//
//
//a();
//
//console.log(newVariable);
//
//b();
//
//var c={
//    
//    name: 'The c object',
//    log: function(){ //bject method
//        var self = this; //poiting to c
//        this.name = 'update c object';
//        console.log(self);
//     
//        
//        var setName = function(newName){
//            
//            self.name = newName;
//            
//        }
//        setName('updated again the c object!')
//        console.log(self);
//    }
//    
//    
//};
//
//
//c.log();


///////////////////////////////////////////////////







//ARRAY



//var arr =[
//    1,
//    false,
//    {
//        name:'John',
//        address:'Main St.'
//        
//        
//    },
//    function(name){
//        var greet=name;
//        console.log(name);
//        
//        
//    },
//    
//    "hello"
//    
//    
//    
//];
//
//
//console.log(arr);
//arr[3](arr[2].name);  //arr[3] is the function with parentheses of arr[2].name
//
//

////////////////////////////////////////////







//ARGUMENTS AND SPREAD

//
//function greet(firstName, lastname='Dough', language, ...other){
//    
//    language = language || 'en'; //first true value assigned to language out of language or en
//    
//    
//    if(arguments.length==0){
//        
//        console.log('Missing parameters');
//          console.log('---------')
//
//        return; // kicks out of the function
//    }
//    
//    
//    
//  console.log(arguments[0]);  
//  console.log(firstName);  
//  console.log(lastname);  
//  console.log(language);
//  console.log(arguments);
//  console.log('---------')
//    
//    
//};
//
//greet();
//greet('John', 1, 21);
//greet('Alas');
//greet('Alas', false);
//greet('Alas', false, 'English');
//greet('Alas', false, 'English', 'New York', 'Cooliyo');
//
//


/////////////////////////////////////////////////







//IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS (IIFEs)

//function greet(name){//function statement
//    console.log('Hello! ' + name);
//}
//greet('from statement');
//
//var greetFunc=function(name){//function expression
//    
//    console.log('Hello! '+name);
//    
//}
//
//greetFunc('from expression');
//
//
////IIFE
//
//var greeting = function(name){
//    console.log('Hello! '+ name);
//    
//}('John');
//
//
//var firstName ='Shiv';
//
//
//(function(name){
//    console.log('Hello! '+ name);
//    
//}(firstName)); //IIFE
//
//


//////////////////////////////////////////////////////////////


//CLOSURES


//
//function greet(whattosay){
//    
//    return function(name){
//        console.log(whattosay+' '+ name);
//        
//    }
//    
//}
//
//
//var sayHi = greet('Hi');
//sayHi('John');
//


//
//function buildFunctions(){
//    
//    var arr=[];
//    
//    for(var i=0;i<3;i++){  
//        //let j =i;
//        
//        arr.push(
//          (function(j){
//              
//              return function(){
//                  
//                  console.log(j);
//              }
//              
//              
//          }(i))
//            
//            
//            
//        )
//    }
//
//    //console.log(arr);
//    
//    return arr;
//}
//
////buildFunctions();
//
//var fs = buildFunctions();
//
//
////console.log(fs[0]);
//
//fs[0]();
//fs[1]();
//fs[2]();
//
//
//
//
//console.log(fs);



//FUNCTION FACTORIES

//function makeGreeting(language){
//    
//    
//    
//    return function(firstname, lastname){
//        
//        
//        if(language==='en'){
//            console.log('Hello '+ firstname +' '+lastname);
//        }
//        if(language==='es'){
//            console.log('Hola '+ firstname +' '+lastname);
//        }
//        
//    }
//    
//    
//    
//    
//}
//
//
//var greetEnglish = makeGreeting('en');
//var greetSpanish = makeGreeting('es');
//greetEnglish('Balle', 'Challe');
//greetSpanish('Sen', 'Gen');






































































