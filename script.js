'use strict' 

class GeneratorRandomStr {
     
    constructor( form ){
       
       this.form  = document.querySelector(form)
       this.inputLength = this.form[0]
       this.inputTypeNum  = this.form[1]
       this.inputLowerCase = this.form[3]
       this.inputUpperCase = this.form[2]
       this.button = this.form[4] 
       this.randomStrLength = null 
       this.numbers = '0123456789'
       this.strLow = 'abcdefghijklmnopqrstuvwxz'
       this.strUp  = 'ABCDEFGHIJKLMNOPQRSTUVWXZ' 
       this.arrRandom = [] 
       this.result = this.form[5]
    }     
     

      checkNum(){
          if(this.inputTypeNum.checked == true){
              this.arrRandom.push(this.numbers)
          }  

          if(this.inputTypeNum.checked == false) {
             this.arrRandom = this.arrRandom.filter(elem => elem !== this.numbers)
          }
        
      } 

      checkLowerCase(){
        if(this.inputLowerCase.checked == true){
            this.arrRandom.push(this.strLow)
        }  

        if(this.inputLowerCase.checked == false) {
           this.arrRandom = this.arrRandom.filter(elem => elem !== this.strLow)
        }
      
    }

    checkUpperCase(){

        if(this.inputUpperCase.checked == true){
            this.arrRandom.push(this.strUp)
        }  

        if(this.inputUpperCase.checked == false) {
           this.arrRandom = this.arrRandom.filter(elem => elem !== this.strUp)
        }
       
    }   

    
       
     
     

     
    generateRandom(e){ 
        e.preventDefault()
         let randomSymvols = ''
         this.arrRandom.forEach(element => {
             randomSymvols += element
         });
      
    
        let str = ''
        for(let i = 0 ; i < this.inputLength.value ; i ++){
            str += randomSymvols[ Math.floor( Math.random() * randomSymvols.length ) ]
        } 

         this.result.value = str
        
    }
  

    init(){
        this.inputTypeNum.addEventListener('click' ,  this.checkNum.bind(this))
        this.inputLowerCase.addEventListener('click' , this.checkLowerCase.bind(this))
        this.inputUpperCase.addEventListener('click' , this.checkUpperCase.bind(this))
        this.button.addEventListener('click' , this.generateRandom.bind(this))
        console.dir(this)
    }

} 


new GeneratorRandomStr('form').init()