favouritMeovieGenre("military")
favouritfrit("banana")
favouritMode("light")
favouritEdgeStyle("sharp")

// The first function. 
function setProp(prop,value){
  document.documentElement.style.setProperty(prop,value)  
}
//The second function. 
function favouritEdgeStyle(style){
   setProp("--image","var(--",style+")"); 
}
// The third function. 
function favouritMeovieGenre(font){
   if(font){
    setProp("--font","var(--"+font+")");
   } 
   
}
// The fourth function. 
function favouritMode(moode){
   if(moode=="light"||!mode){
    setProp('--background',"var(--light)");
    setProp('--text',"var(--dark)");

   }else if (moode=="dark"){
    setProp('--background',"var(--dark)");
    setProp('--text',"var(--light)");
   } 
}
function favouritfrit(them){
    if(them=="pastal"){
      setProp('--light',"#f2f6c3")
      setProp('--dark',"#68c4af")  
    }else if (them==="muted"){
      setProp('--light','#4c5b64')
      setProp('--dark',"45241c")  
    }else if(them==="love"){
       setProp('--light',"#f06839")
       setProp('--dark',"#ba0001") 
    }else if (them=="sky"){
       setProp('--light',"#99ccff")
       setProp('--dark',"#3366ff") 
    }else if (them==="forrest"){
      setProp('--light',"#91B247")
      setProp('--dark',"#597c2B")  
    }else if (them==="shiny"){
      setProp('--light',"#2e9afe")
      setProp('--dark',"#02197c")  
    }else if (them==="banana"){
     setProp('light',"fbec5d")
     setProp('--dark',"#6b3e26")
    }else if(them=="watermelon"){
      setProp('light',"#75b855")
      setProp('--dark',"ad3838")  
    }else if(them==="tomato"){
      setProp('--light',"#d62e2e2")
      setProp('--dark',"#600000")  
    }else if (them=="avocado"){
     setProp('--light',"#6b8c21")
     setProp('--dark',"704012")   
    } else if (them=="orange"){
      setProp('--light',"#ffca16")
      setProp('--dark',"#f97300")  
    }else if (them==="blueberry"){
      setProp('--light',"#41a8f9")
      setProp('--dark',"#064490")  
    }else{
        setProp('--light',"#f5f5f5")
        setProp('--dark',"#222222")
    }
}