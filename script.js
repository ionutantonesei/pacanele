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
const afisareSumaTotala = document.getElementById("afisareSumaTotala")
const afisareSumaPariata = document.getElementById("afisareSumaPariata")
const afisareLinii = document.getElementById("afisareLinii")
let sumaTotala = 100
let miza = 1
let increment = 1

actiune.addEventListener("click",()=>{
    let valoares11i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares12i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares13i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares21i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares22i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares23i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares31i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares32i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    let valoares33i = Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())
    if ((valoares11i===valoares12i)&&(valoares12i===valoares13i)){
        let sunet = new Audio("./resurse/sunete/"+valoares11i+".mp3")
        sunet.play()
        sumaTotala+= valoares11i*miza}
    else if ((valoares21i===valoares22i)&&(valoares22i===valoares23i)){
        let sunet = new Audio("./resurse/sunete/"+valoares22i+".mp3")
        sunet.play()
        sumaTotala+= valoares21i*miza}
    else if ((valoares31i===valoares32i)&&(valoares32i===valoares33i)){
        let sunet = new Audio("./resurse/sunete/"+valoares33i+".mp3")
        sunet.play()
        sumaTotala+= valoares31i*miza}
    else (sumaTotala-=miza)
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