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
const afisareSumaTotala = document.getElementById("afisareSumaTotala")
const afisareSumaPariata = document.getElementById("afisareSumaPariata")
const afisareLinii = document.getElementById("afisareLinii")
let sumaTotala = 100
let miza = 1
let increment = 1

actiune.addEventListener("click",()=>{
    if(sumaTotala<miza){alert("Lipsa fonduri!");return}
    sumaTotala-=miza
    afisareSumaTotala.innerHTML = "Suma totala: " + sumaTotala + " RON"
    let valoares11i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s11i.setAttribute("src","resurse/"+valoares11i+".png")
    let valoares12i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s12i.setAttribute("src","resurse/"+valoares12i+".png")
    let valoares13i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s13i.setAttribute("src","resurse/"+valoares13i+".png")
    let valoares21i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s21i.setAttribute("src","resurse/"+valoares21i+".png")
    let valoares22i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s22i.setAttribute("src","resurse/"+valoares22i+".png")
    let valoares23i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s23i.setAttribute("src","resurse/"+valoares23i+".png")
    let valoares31i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s31i.setAttribute("src","resurse/"+valoares31i+".png")
    let valoares32i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s32i.setAttribute("src","resurse/"+valoares32i+".png")
    let valoares33i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    s33i.setAttribute("src","resurse/"+valoares33i+".png")
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