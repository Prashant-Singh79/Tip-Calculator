
function calculate(){

    var bill = document.getElementById("money").value;
    var service = document.getElementById("qual").value;
    var people = document.getElementById("pep").value;

    if(bill=="" || service===0){

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