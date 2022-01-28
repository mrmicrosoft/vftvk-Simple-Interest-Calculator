window.onload = function(){
    document.getElementById("rate").onchange = function(e){
       updateRate();
    };
    updateRate();
};

function updateRate(){
    var target = document.getElementById("rate");
    var counter = document.getElementById("rate_val");
    counter.innerHTML = target.value + "%";
}

function compute(){
    event.preventDefault();
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    if (!principal || principal == 0){
        alert("Enter a positive number");
        document.getElementById("result").innerHTML = "";
        document.getElementById("principal").focus();
        return;
    }

    document.getElementById("result").innerHTML =  "If you deposit <mark>" + principal + "</mark>,<br />at an interest rate of <mark>" + rate + 
        "%</mark><br />You will receive an amount of <mark>" + interest + "</mark>,<br /> in the year <mark>" + year + "</mark>";

}
        