let consoles=document.getElementById('console')
let line=1

//Objeto para manipulación de la consola
let sys={
  logs:(args)=>{
    if(args){
      consoles.innerText+=`${typeof(args)}: ${args}\n`
    }
    line++
  },
  write:(args)=>{
    if(args){
      consoles.innerText+=`${args}\n`
    }
    line++
  }
}

//Objeto para el almacenamiento de Variables
let vars={
  
}

//Objeto para la manipulación de Variables
let mem={
  set:(name, value)=>{
    if(name){
      vars[name]=value
    }
    else{
      sys.error(`Name for variable can't be undefinded\tline:${line}`)
    }
    line++
  }
}