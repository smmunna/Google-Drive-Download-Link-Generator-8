   
   //For Replacing the code
   function myfun()
    {
        var cpylink = (document.getElementById('link').value);

        
        document.getElementById('demo').innerHTML = cpylink;
        document.getElementById("demo").innerHTML = cpylink.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
    }

    //For copy the Link

    function copylink()
    {
        var copytext = document.getElementById('demo');
        copytext.select();
        copytext.setSelectionRange(0, 99999)
        document.execCommand("copy");
   
        document.getElementById('alrtbox').style.display= "block";


        var close = document.getElementsByClassName("closebtn");
        var i;
        
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function(){
            var div = this.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; }, 600);
          }
        }

    }


