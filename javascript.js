const lista=[];
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("Hozzaad").addEventListener("click",function(){
        const input1=document.getElementById("input1").value;
        lista.push(input1)
    });
    document.getElementById("kiIr").addEventListener("click",function(){
        const min=input1=document.getElementById("input1").value;
        const max=input1=document.getElementById("input1").value;
        document.getElementById("visszajelzes").innerHTML="A legnagyobb szám a felsorolásból: "+melyiknagyobb(lista,max)+"A legkisebb szám a felsorolásból: "+melyikkisebb(lista,min)
    });
});

function melyiknagyobb(lista,max) {
    for (let index = 0; index<lista.length;index++){
        const element=lista[index];
        if (element>max){
            max=element
        }
    }
    return max
}
function melyikkisebb(lista,min) {
    for (let index =0; index<lista.length; index++){
        const element=lista[index];
        if(elementt<min){
            min=element
        }
    }
    return min
}