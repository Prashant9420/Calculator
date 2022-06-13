function calcfunc(n)
{
   var a=document.getElementById("screen").innerText;
   document.getElementById("screen").innerText=a+n;
   a=a.replaceAll('x','*');
   if(n=='clr')
   {
        if(a=="Invalid Input"){        
             document.getElementById("screen").innerText="";
     }
        if(a.length!=0)
        {
            document.getElementById("screen").innerText=a.substring(0, a.length-1);
        }
   }
   if(n=='C')
   {
        document.getElementById("screen").innerText="";
   }
   if(n=='=')
   {
     
     try{
          var ans=eval(a);
          document.getElementById("screen").innerText=ans;
        }
        catch (e) {
          document.getElementById("screen").innerText="Invalid Input";
        }
   }
}
