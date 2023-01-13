var obj = function(){
    this.name = 'hello!'
    this.printName = function(){
         console.log(this.name)
    }
}

obj();