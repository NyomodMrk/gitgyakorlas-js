document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("gomb").addEventListener("click",function(){
        const input1=document.getElementById("input1").value;
        const input2=document.getElementById("input2").value;
        const visszajelzes = document.getElementById("visszajelzes")
        visszajelzes.innerHTML=nagyobb(input1,input2)
    })
})

function melyiknagyobb(szam1,szam2) {
    if (szam1>szam2) {
        return "Az első szám a nagyobb"+szam1
    }
    else if (szam1<szam2) {
        return "A második szám a nagyobb"+szam2
    }
    else {
        return "A két szám egyenlő"
    }
}