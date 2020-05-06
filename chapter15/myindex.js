//  var lg = console.log;
//  // var a = ` ia am salman sakib
//  // .you are my brother
//  // . He is my another brother`

//  // console.log(a)

//  // var age = 3;
//  // var name = `salman sakib`

//  // lg(`my name is ${name} my age is ${age} I am${age < 18 ? ' not': ''} adult`)

//  // String Mehode in ES6

//  // lg(name.padStart(20, '+'))

//  // lg(name.padEnd(20, '*'))

//  // lg('p'.repeat(20))

//  // var vs let vs const
//  // let and const are same except const can not be reassingned.a
//  // The varaiable is decleared by var can be call from anywhere except fuction. But 'let' is defferent. If you decleared a varaible by 'let' In {} , there is no access in outside of {} for this variable as like IFE in es5.

//  //  {
//  //      let d = 12;
//  //     lg(d) 
//  //  }


//  // Arrow fuction


//  // you must use alwayse  function expresion in order to us e arrow function






//  //  let sum = (e,d) => {
//  //     lg( e +d)
//  // }

//  // sum(10,20)

//  // Morethan easy way

//  // let subs = (e,d ) => e -d

//  // lg(subs(20,10))

//  // // Morethan easy way

//  // let equ = x => x *x ;

//  // lg(equ(25));



//  // arrow function assinges always the value of 'this' with parent object and normal function with his object just like methode.


//  // arrow functon can not be applied by(call, apply,bind Mehtodes)


//  // let obj = {
//  //     name: 'salman',
//  //     stutus: function(){
//  //         lg(`my name is ${this.name}`)
//  //         let aboutMe = ()=>{
//  //           lg(  `my name isss ${this.name}`)
//  //         }
//  //         aboutMe()
//  //     }
//  // }

//  // lg(obj);
//  // obj.stutus()


//  // Defaul Prameter in ES6

//  // function sqr(n='salman' ){
//  //if(!n){
//  //    n=1
//  // }
//  //return n*n
//  //     lg(n.length)
//  //     return n
//  // }
//  // lg(sqr())
//  //lg(sqr(null)) // it throws error


//  // Rest and Spreed Operator 


//  // Rest Operator

//  // rest operator in array
//  // function addNumbers (a,v,...restOper){
//  //     lg(restOper )
//  // lg(arguments)
//  // lg(a,b)
//  //}

//  //addNumbers(2,3,4,5)

//  // rest operator in object
//  // let Studendt ={
//  //     name:'sakib',
//  //     Age : 23,
//  //     hobbies:['programing', 'learning']
//  // }
//  //let Age = Studendt.Age;
//  // let {Age, ...rostOp} = Studendt


//  // //Age = 24
//  // lg(Studendt)
//  // lg(Age)

//  // lg(rostOp)

//  // Spread Operator 
//  // spread operator in Array 
//  // function logNames (name1,name2,name3){
//  // lg(name1,name2,name3)
//  // }
//  //let names = [ 'salman', 'farsi', 'sakib'];

//  // logNames(names[0], names[1], names[2]);

//  //lg(...names)// exact same output like logNames()

//  // spread operator in object 

//  // var amisut ={
//  //     ...Studendt,
//  //     name:'muhammad'
//  // }
//  // lg(amisut)








//  // Enhance object

//  // let f = 12, l = 24;

//  // let obj2 = {

//  // a:a,
//  // b:b
//  // f,
//  // l,
//  // print:function (){
//  //     lg(this)
//  // }
//  //     print (){
//  //         lg(this)
//  //     }

//  // }
//  // obj2.print()
//  // lg(obj2)




//  /// Destructuring in Es6

//  var rashed = {
//      myName: 'salman',
//      Myage: 23,
//      status: {
//          a: 1,
//          b: 2
//      }
//  }

//  var myName = rashed.myName;
//  var Myage = rashed.Myage;


//  var {
//      myName,
//      Myage,
//      status: {
//          a,
//          b
//      }
//  } = rashed;
//  a = 20;
//  Myage = 22
//  lg(myName, Myage, a, b);

//  // Distructaring in array
//  // এটা বেশি ব্যবহার হয়না। কারণ সবসময় ইনডেস্ক নাম্বার মনে রাখতে হয়।
//  let arr = [2, 3, 4, 5];


//  let [first, second, third] = arr;

//  lg(first, second, third)





//  // Object fromEntreis mehthode in ES6

//  var obj3 = {
//      a: 2,
//      c: 3

//  }

//  lg(Object.entries(obj3));

//  var arr3 = [
//      ['a', 2],
//      ['c', 3]
//  ];

//  lg(Object.fromEntries(arr3));

//  // What is Symbole in Es6


//  let s1 = Symbol('salman');

//  let s2 = Symbol('salman');


//  lg(s1.valueOf(), s2);


//  lg(s1 === s2); // false;

//  let s4 = ' i am';
//  let s5 = ' i am';

//  lg(s4 === s5) // true;



//  //  Iterator Basice Idea
//  // Custom itarator 
//  let iteratore = [1, 3, 4, 5, 6, 7, 4];

//  let iterFunct = (valuArr) => {
//      let indexLa = 0;
//      return function () {
//          if (indexLa < valuArr.length) {
//              return {
//                  value: valuArr[indexLa++],
//                  done: false
//              }



//          } else {
//              return {
//                  done: true
//              }

//          }
//      }


//  }

//  let itarate = iterFunct(iteratore);
//  lg(typeof itarate)
//  lg(itarate())
//  lg(itarate())
//  lg(itarate())
//  lg(itarate())
//  lg(itarate())
//  lg(itarate())
//  lg(itarate())
//  lg(itarate())


//  // iterator object in es6 
//  // ****** for-in loop VS for of loop ************
//  const myIta = ['i', 'am', 'salman', 'sakib'];

//  const myObj = {
//      name: 'sakib',
//      lastName: 'Ahmed',
//      FatheName: 'yeakub'
//  }
//  // lg(...myIta)
//  // lg(myIta)

//  // lg(myIta[Symbol.iteratore].next()
//  // lg(myIta[Symbol.iteratore].next()

//  for (var i in myObj) {
//      //lg(myIta[vlue]);
//      lg(myObj[i])
//  }

//  // for of loop 
//  // for (var  i of myObj){ // Object is not itarable
//  //   //lg(myIta[vlue]);
//  //   lg(myObj[i])
//  // }


//  // for (var i = 0; i < myIta.length;i++){ // Same out put
//  //   lg(myIta[i])
//  // }


//  // lg(vlue)
//  // lg(vlue)












//  // const ami = 3;
//  // //const ami = 4 ;
//  // lg(ami,ami)

//  const myFavouriteAuthors = {
//      allAuthors: {
//          fiction: [
//              'Agatha Christie',
//              'J. K. Rowling',
//              'Dr. Seuss'
//          ],
//          scienceFiction: [
//              'Neal Stephenson',
//              'Arthur Clarke',
//              'Isaac Asimov',
//              'Robert Heinlein'
//          ],
//          fantasy: [
//              'J. R. R. Tolkien',
//              'J. K. Rowling',
//              'Terry Pratchett'
//          ],
//      },
//      [Symbol.iterator]() {
//          // Get all the authors in an array
//          const genres = Object.values(this.allAuthors);

//          // Store the current genre and author index
//          let currentAuthorIndex = 0;
//          let currentGenreIndex = 0;

//          return {
//              // Implementation of next()
//              next() {
//                  // authors according to current genre index
//                  const authors = genres[currentGenreIndex];

//                  // doNotHaveMoreAuthors is true when the authors array is exhausted.
//                  // That is, all items are consumed.
//                  const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
//                  if (doNothaveMoreAuthors) {
//                      // When that happens, we move the genre index to the next genre
//                      currentGenreIndex++;
//                      // and reset the author index to 0 again to get new set of authors
//                      currentAuthorIndex = 0;
//                  }

//                  // if all genres are over, then we need tell the iterator that we 
//                  // can not give more values.
//                  const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
//                  if (doNotHaveMoreGenres) {
//                      // Hence, we return done as true.
//                      return {
//                          value: undefined,
//                          done: true
//                      };
//                  }

//                  // if everything is correct, return the author from the 
//                  // current genre and incerement the currentAuthorindex
//                  // so next time, the next author can be returned.
//                  return {
//                      value: genres[currentGenreIndex][currentAuthorIndex++],
//                      done: false
//                  }
//              }
//          };
//      }
//  };

//  for (const author of myFavouriteAuthors) {
//      console.log(author);
//  }

//  //console.log(myFavouriteAuthors)




//  // My Custom Object litaral 

//  const YouObj = {
//      name: 'sakib',
//      age: '23',
//      status: ' student'
//  };
//  const YouArray = [12, '23', 'student'];

//  YouObj[Symbol.iterator] = () => {
//      let genar = Object.values(YouObj);
//      let indexMy = 0;
//      return {
//          next: () => {
//              if (indexMy < Object.values(YouObj).length) {
//                  return {
//                      value: genar[indexMy++],
//                      done: false
//                  }


//              } else {
//                  return {
//                      value: undefined,
//                      done: true
//                  }
//              }

//          }
//      }
//  }

//  for (let tumi of YouObj) {
//      lg(tumi)
//  }

//  //  let myitarator = YouObj[Symbol.iterator]();
//  // lg(myitarator.next())
//  // lg(myitarator.next())
//  // lg(myitarator.next())
//  // lg(myitarator.next())
//  let Myanitar = YouArray[Symbol.iterator]();
//  lg(Myanitar.next());

//  lg(Myanitar.next());
//  lg(Myanitar.next());
//  lg(Myanitar.next());

//  // lg(YouArray[Symbol.iterator]().next()) //  এভাবে কল করলে প্রত্যেকবার প্রথম ইলিমেন্টের আউটপুট দিবে। সুতরাং বেরিয়েবলের মধ্যেই এসাইন করতে হবে।
//  // lg(YouArray[Symbol.iterator]().next())
//  // lg(YouArray[Symbol.iterator]().next())
//  lg(Object.keys(YouObj));





//  // Genarator Function explanation

//  function* mygenarator() {
//      let myinex = 0;
//      yield 'i am genaraotor fucntion';
//      yield lg(' i am another funiton')

//      while (true) {
//          // yield myinex++
//          yield(myinex++).toString()
//      }

//  }

//  let genarator = mygenarator()
//  //lg(genarator.next())
//  lg(genarator.next())
//  lg(genarator.next())
//  lg(genarator.next())
//  lg(genarator.next().value)




//  //set () in ES6
// // It sets array like data structure
// const mySet = new Set()
// lg(mySet)
// let setArray = [ 'rafid', 'i', 'tumi']
// mySet.add('i')
// mySet.add('am')
// mySet.add('sakib')
// mySet.add('ahmed')
// mySet.add(setArray[2])
// mySet.add(23)
// mySet.add(true)
// mySet.add('i')
// lg(mySet)
// lg(mySet.size)

//  // You can add in set constructore

//  const mySet2 = new Set([1,'rakib',{a:1,b:2}, 2,'ahmed']);
//  lg(mySet2);

//  // Some methode releated to set

//  lg(mySet.has('you'));

//  lg(mySet2.delete('ahmed'));
//  // Itreating set

//  lg(mySet[Symbol.iterator]().next())
// for(let rahid of mySet){
//     lg(rahid)
// }

// // conver set into Array


// lg(Array.from(mySet))

// function suyib (){
//     return ' i am'
// }

// // Maps in javascript es6

// const myMap = new Map();

// myMap.set('name', suyib());
// myMap.set( let = mapFunct =function ()  {return 'i am function'},  mapFunct()

// );
// myMap.set(  myObj2 = {a: 3, 4: 6} , mySet);


// lg(myMap)


// // Geetting value from map

// let getVal = myMap.get (mapFunct);
// let getVal2 = myMap.get (myObj2);
// console.log(getVal, getVal2);

// console.log(myMap.size);

// // You can loop using for ..of loop to get keys and values

// for(let [key,value] of myMap){
//     console.log(key,value);
// }
// for(let key of myMap){
//     console.log(key);
// }
// // get only key
// for(let key of myMap.keys()){
//     console.log(key);
// }

// // get only values
// for(let key of myMap.values()){
//     console.log(key);
// }


// // You can loop through foreach loop 

// myMap.forEach((value,key) =>{
//     console.log('key is',key)
//     console.log('value is', value);

// })


// // converting to array
// let myMapArray = Array.from (myMap);
// console.log(myMapArray);

// // convert only key
// let mykeyArray = Array.from (myMap.keys());
// console.log(mykeyArray);


// // convert only values
// let mavaluearray = Array.from (myMap.values());
// console.log(mavaluearray);






// Es6 classes 


class Mobile {
    constructor(Name, price, status) {
        // Instance Member
        this.name = Name;
        this.price = price;
        this.stutus = status;
        this.releas = () => {
            console.log(` This ${this.name} is very fast phone . you can not get this ${this.name } phone on this ${this.price} price`);
        }


    }

    // Prototype Member

    add() {
        console.log(`If you buy two phone , you will be discounted 50% on ${this.price} that is ${this.price / 2}`);

    }
    // This a statick Methode
    static aboutPhone() {
        console.log(`I am statick Methode`);
    }

    Markett = `Jamuna Future Par`;
}

let Nokia = new Mobile(`nokia`, 8000, 'new');

console.log(Nokia);


// Inhereatance in javascript
// Computer will inherate all the instance member and prototype member of Mobile class
class Computer extends Mobile {
    constructor(Name, price, stutus, OASSystem, processor) {
        super(Name, price, stutus)
        this.OASSystem = OASSystem;
        this.processor = processor



    }
    get buyPro (){
        if(this.price < 5000){
return `I want to buy ${this.name} computer`
        }
        else{
            return ` I want to buy ${this.OASSystem}`
        }
    }

    set buyPro (value){
this.price = value;

    }

    myFavaorate() {
        console.log(`my favaorate oos is ${this.OASSystem}`);
    }

}

let myComputer = new Computer('samsung', 1000, 'used', 'LINAX', 'INTEL CORE -I 7');
myComputer.OASSystem = 'windows'

console.log(Computer.buyPro);// This property is now from Instance Member.
myComputer.buyPro = 500
console.log(myComputer);


// Getter and Setter

const exp = `foo`;


let myGet = {
    name: 'salman',
    age: 23,
    stutus: 'student',
    get AboutMe() {
        if (this.name === 'salman') {
            return ' He wants to be programmer'
        } else {
            return 'He is a devoloper'
        }
    },
    set AboutMe(value) {
        this.log.push(value)

    },
    log: []

}

// Another exampale to setter

const obj7 ={
    firsNam : ' sakib',
  get   fullName (){
       return  `${this.firsNam} ${this.lastName}`
    },
    lastName: 'ahmed',
    set fullName (value){
        const parts = value.split(" ");
        this.firsNam = parts[0];
        this.lastName = parts[1]

    }

}

obj7.fullName = 'rakib ahmed'

console.log(obj7);

myGet.AboutMe = 'programming'
myGet.AboutMe = 'devolopment'

// Delete getter and seter
// delete myGet.AboutMe

// Defining a getter on existing objects

Object.defineProperty(myGet, 'DateBirth', {
    get() {
        return 2020 - this.age;
    }
})

console.log(myGet);
console.log(myGet.AboutMe);
console.log(myGet.log);

// Using computed property name

// getter
const obj5 = {
    get [exp]() {
        return 'tomatto'
    }
}

console.log(obj5.foo); // tomatto

// setter
const obj6 ={
    baz : 'bar',
    set [exp] (v){
        this.baz = v
    }
}
console.log(obj6.baz);

obj6.foo = 'sakib';
console.log(obj6.baz);



// Hide private Data with Symbole
let mySym = Symbol()
const obj8 ={
a : 2,
b : 3,
[mySym]: 2333
}
obj7[mySym] = 2 // This property is private
console.log(obj8);
console.log(Object.getOwnPropertyDescriptor(obj8,'a'));
// made property by 'get' is read only .so you can not reassinged the value of get.
let product = {
    get id () { return 2340847; }
   };
product.id = 34;

   for(const value in product){
       console.log(product[value]); // it still gives 2340... .Because id proerty is read only
   }