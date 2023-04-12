const es11 = document.getElementById("s11i")
const es12 = document.getElementById("s12i")
const es13 = document.getElementById("s13i")
const es21 = document.getElementById("s21i")
const es22 = document.getElementById("s22i")
const es23 = document.getElementById("s23i")
const es31 = document.getElementById("s31i")
const es32 = document.getElementById("s32i")
const es33 = document.getElementById("s33i")
const actiune = document.getElementById("buton-start")
const cresteMiza = document.getElementById("buton-creste-miza")
const scadeMiza = document.getElementById("buton-scade-miza")
const cresteMiza10 = document.getElementById("buton-creste-miza10")
const scadeMiza10 = document.getElementById("buton-scade-miza10")
const cresteLinii = document.getElementById("buton-creste-linii")
const scadeLinii = document.getElementById("buton-scade-linii")
const retrageSuma = document.getElementById("buton-retragere-suma")
const afisareInformatii = document.getElementById("buton-afisare-informatii")
const afisareSumaTotala = document.getElementById("afisareSumaTotala")
const afisareSumaPariata = document.getElementById("afisareSumaPariata")
const afisareLinii = document.getElementById("afisareLinii")
const containerInformatii = document.getElementById("container-informatii")
const containerPrincipal = document.getElementById("container_principal")
let sumaTotala
let sumaRetrasa = localStorage.getItem("sumatotala")
if (sumaRetrasa === null){sumaTotala = 100}
else {sumaTotala = sumaRetrasa}
let miza = 1
let linii = 3
afisareSumaTotala.innerHTML = "Suma totala: " + sumaTotala + " RON"

afisareInformatii.addEventListener("click",()=>{
    if(containerInformatii.style.display === "flex"){
        containerInformatii.style.display = "none"
        containerPrincipal.style.width = "90%"
    }
    else{
        containerInformatii.style.display = "flex"
        containerPrincipal.style.width = "65%"
    }
})

actiune.addEventListener("click",()=>{
    let valoares11i = Math.floor(Math.random()*6+1)
    let valoares12i = Math.floor(Math.random()*6+1)
    let valoares13i = Math.floor(Math.random()*6+1)
    let valoares21i = Math.floor(Math.random()*6+1)
    let valoares22i = Math.floor(Math.random()*6+1)
    let valoares23i = Math.floor(Math.random()*6+1)
    let valoares31i = Math.floor(Math.random()*6+1)
    let valoares32i = Math.floor(Math.random()*6+1)
    let valoares33i = Math.floor(Math.random()*6+1)
    localStorage.setItem("sumatotala",sumaTotala)
    if ((valoares11i===valoares12i)&&(valoares12i===valoares13i)&&(linii > 0)){
        let sunet = new Audio("./resurse/sunete/"+valoares11i+".mp3")
        sunet.play()
        sumaTotala+= Math.floor((valoares11i*miza*linii))
        localStorage.setItem("sumatotala",sumaTotala)}
    else if ((valoares21i===valoares22i)&&(valoares22i===valoares23i)&&(linii > 1)){
        let sunet = new Audio("./resurse/sunete/"+valoares22i+".mp3")
        sunet.play()
        sumaTotala+= Math.floor((valoares21i*miza*linii))
        localStorage.setItem("sumatotala",sumaTotala)}
    else if ((valoares31i===valoares32i)&&(valoares32i===valoares33i)&&(linii > 2)){
        let sunet = new Audio("./resurse/sunete/"+valoares33i+".mp3")
        sunet.play()
        sumaTotala+= Math.floor((valoares31i*miza*linii))
        localStorage.setItem("sumatotala",sumaTotala)}
    else {sumaTotala = sumaTotala-miza-linii
        localStorage.setItem("sumatotala",sumaTotala)}
    if(sumaTotala<miza){alert("Lipsa fonduri!");return}
    afisareSumaTotala.innerHTML = "Suma totala: " + sumaTotala + " RON"
    s11i.setAttribute("src","resurse/"+valoares11i+".png")
    s12i.setAttribute("src","resurse/"+valoares12i+".png")
    s13i.setAttribute("src","resurse/"+valoares13i+".png")
    s21i.setAttribute("src","resurse/"+valoares21i+".png")
    s22i.setAttribute("src","resurse/"+valoares22i+".png")
    s23i.setAttribute("src","resurse/"+valoares23i+".png")
    s31i.setAttribute("src","resurse/"+valoares31i+".png")
    s32i.setAttribute("src","resurse/"+valoares32i+".png")
    s33i.setAttribute("src","resurse/"+valoares33i+".png")
    console.log([valoares11i,valoares12i,valoares13i],[valoares21i,valoares22i,valoares23i],[valoares31i,valoares32i,valoares33i],sumaTotala)
})
cresteMiza.addEventListener("click",()=>{
    if(miza>=sumaTotala){return}
    miza+=1
    afisareSumaPariata.innerHTML = "Suma pariata: " + miza + " RON"
})
scadeMiza.addEventListener("click",()=>{
    if(miza<=0){return}
    miza-=1
    afisareSumaPariata.innerHTML = "Suma pariata: " + miza + " RON"
})

cresteMiza10.addEventListener("click",()=>{
    if(miza>=sumaTotala-9){return}
    miza+=10
    afisareSumaPariata.innerHTML = "Suma pariata: " + miza + " RON"
})
scadeMiza10.addEventListener("click",()=>{
    if(miza<=9){return}
    miza-=10
    afisareSumaPariata.innerHTML = "Suma pariata: " + miza + " RON"
})
cresteLinii.addEventListener("click",()=>{
    if((linii>0)&&(linii<3)){
        linii+=1
        afisareLinii.innerHTML = "Linii: " + linii
    }
    else return
})
scadeLinii.addEventListener("click",()=>{
    if((linii>1)&&(linii<=3)){
        linii-=1
        afisareLinii.innerHTML = "Linii: " + linii
    }
    else return
})
retrageSuma.addEventListener("click",()=>{
    sumaRetrasa = localStorage.getItem("sumatotala")
})