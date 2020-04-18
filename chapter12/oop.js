

/// This Key word 

// The value of 'this' key word is not assined in creational passe but it is assigned in executional context. ' this' key word is will be assinged with 'undefined' in creational passe like varaible. It means that where you wirte this key word it will be assinged with of this property or window object . So if you call a methode in another object , 'this' key word associate with that methode is will not be with his own object but 'this' is will be assinged with the property you call the methode one. 

// example

var ami ={
    Date:2020,
    birthDay:1997,
    calcaAge: function(){
         
console.log ( this.Date - this.birthDay )
    }
}
//ami.calcaAge()

var tumi={
    Date:2020,
    birthDay:2000,
    print:ami.calcaAge
}

tumi.print()