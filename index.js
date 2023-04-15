for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
        switch(this.innerHTML)
        {
            case "w":
                var audio0= new Audio("sounds/crash.mp3"); 
                audio0.play();
                document.getElementById("wbtn").classList.add("pressed");
                setTimeout(()=>{
                    document.getElementById("wbtn").classList.remove("pressed");
                },500);
                break;

            case "a":
                var audio1= new Audio("sounds/tom-1.mp3");   	
                audio1.play();
                document.getElementById("abtn").classList.add("pressed");
                setTimeout(()=>{
                    document.getElementById("abtn").classList.remove("pressed");
                },500);
                break;
            
            case "s":
                var audio2= new Audio("sounds/tom-2.mp3");   	
                audio2.play();
                document.getElementById("sbtn").classList.add("pressed");
                setTimeout(()=>{
                    document.getElementById("sbtn").classList.remove("pressed");
                },500);
                break;

            case "d":
                var audio3= new Audio("sounds/tom-3.mp3");   	
                audio3.play();
                document.getElementById("dbtn").classList.add("pressed");
                setTimeout(()=>{
                    document.getElementById("dbtn").classList.remove("pressed");
                },500);
                break;
                
            case "j":
                var audio4= new Audio("sounds/tom-4.mp3");   	
                audio4.play();
                document.getElementById("jbtn").classList.add("pressed");
                setTimeout(()=>{
                    document.getElementById("jbtn").classList.remove("pressed");
                },500);
                break;
                
            case "k":
                var audio5= new Audio("sounds/snare.mp3");   	
                audio5.play();
                document.getElementById("kbtn").classList.add("pressed");
                setTimeout(()=>{
                    document.getElementById("kbtn").classList.remove("pressed");
                },500);
                break;

            case "l":
                var audio6= new Audio("sounds/kick-bass.mp3");   	
                audio6.play();
                document.getElementById("lbtn").classList.add("pressed");
                setTimeout(()=>{
                    document.getElementById("lbtn").classList.remove("pressed");
                },500);
                break;
        }
    }
    )
}
