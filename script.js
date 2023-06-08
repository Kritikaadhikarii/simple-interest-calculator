function updateRate(){
    
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}

function compute(){

    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseInt(document.getElementById('years').value);

    var interest = ((principal*rate*years)/100);
    var amount = (principal + interest);

    var currentYear =  new Date().getFullYear();
    var futureYear = (currentYear + years);

    var result =  document.getElementById("result");
    result.innerHTML = "If you deposit $" + principal + ", at an interest rate of " + rate + "%, you will receive an amout of $" + amount + ", in the year " + futureYear + " ." ;


}