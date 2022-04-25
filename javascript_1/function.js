// const fatura = function(urunler, vergi){
//     let toplam = 0;
//     for(let i =0; i< urunler.length; i++){
//         toplam += urunler[i] + urunler[i] * vergi;
//     }
//     return toplam;
// }
// console.log(fatura([10,20,30,40,50,100],0.20));



// arrow function şeklinde yazımı 

const fatura = (urunler, vergi)=>{
    let toplam = 0;
    for(let i =0; i< urunler.length; i++){
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}
console.log(fatura([10,20,30,40,50,100],0.20));