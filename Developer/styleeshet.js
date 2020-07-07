function calc()
{
            let n1 = parseInt(document.getElementById("n1").value);

            let n2 =  parseInt(document.getElementById("n2").value);

            let n3 = parseInt(document.getElementById("n3").value);

            let n4 = parseInt(document.getElementById("n4").value);

            let total = document.getElementById("totalgrade").value;

if(plus === "+"){


let total = document.getElementById("totalgrade").value = n1 + n2 + n3 + n4;
}
if(
    totalgrade> 90 &&
    totalgrade < 100
){
    console.log("A")
}
else if(
totalgrade >=80
){
    console.log("B")

}else if(
    totalgrade>=70
){
    console.log("C")
}else if(
    totalgrade>=60
){
    console.log("D")
}else if(totalgrade < 60){
    console.log("F")
}

}

calc()

