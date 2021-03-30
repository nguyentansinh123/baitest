function paladinrome (str){
    var sp_p =/[\W_]/g;
    var x = str.toLowerCase().replace(sp_p , '')
    var y = x.split('').reverse().join('')
    if(x===y){
        return true
    }
    else{
        return false
    }
}
paladinrome("eye")

// bai 2
const roman_string = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    DM: 900,
    M: 1000
  }
  
  roman = " "
  function convertToRoman(num) {
    for (var x in roman_string) {
      while (num >= roman_string[x]) {
        roman = roman + x
        num = num - roman_string[x]
  
      }
    }
    return num
  }
  
  convertToRoman(3);

  // bai cuoi
  class employee {
    name ; 
    tasklist ;

    constructor(name , tasklist){
        this.name = name ;
        this.tasklist = tasklist;
    }
    displayinfo(){
        console.log(this.name)
    }
}
class developer extends employee {
    constructor(name , tasklist){
        super(name,tasklist)
    }
}

class tester extends employee {
    constructor(name , tasklist){
        super(name,tasklist)
    }
}

class manager extends employee {
    constructor(name , tasklist){
        super(name,tasklist)
        this.employees =[]
    }
    addemployee(employ){
        if(employ instanceof employee){
            this.employees.push(employ)
        }

    }
}