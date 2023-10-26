let output= document.getElementById("CalcInput");
let ClearNum =document.getElementById("clear");
let DeleteNum =document.getElementById("del");
let equal = document.getElementById("equal")

function display(num) {
    output.value+= num;
    
}

    ClearNum.onclick = function()  {
        output.value="";
    }

    DeleteNum.onclick = function()  {
        output.value=output.value.slice(0,-1);
    }

    equal.onclick = function() {
        try {
            output.value = eval(output.value);
        }
        catch (err) {
            output.value="Error";
        }
        
    }

