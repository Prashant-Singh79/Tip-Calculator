
function calculate(){

    var bill1 = document.getElementById("money").value;
    var service = document.getElementById("qual").value;
    var people1 = document.getElementById("pep").value;

    if(bill1=="" || people1==""){
      alert("Enter valid input");
        return;

    }
    


   var bill=parseInt(bill1);

   var ans=people1-parseInt(people1);

   if(ans>0){

      alert("Enter valid input");
      return;

  }

   var people=parseInt(people1);
  


   if(isNaN(bill) || isNaN(people)){
      alert("Enter valid input");
        return;

    }

 

 

    if( service==0 || ans>0){

        alert("Enter valid input");
        return;

    }

 if(people<=1){

    document.getElementById("each").style.display="none";

 }else{

    document.getElementById("each").style.display="block"
 }

   
    var total = (bill * service) /people;
    

    total = total.toFixed(2);
 

    document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}



document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";