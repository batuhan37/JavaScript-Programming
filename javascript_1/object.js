let ogrenci={
    ad:'Batuhan',
    yas:23,
    email:'batuhan@hotmail.com',
    sinif:4,
    dersler:['javascript','php','pyhton','C#'],
    login(){
        console.log('Öğrenci giriş yaptı.');

    },
    logout(){
        console.log('Ögrenci çıkış yaptı.');
    },

    printlesson(){
        console.log(this.dersler);
        this.dersler.forEach(ders =>{
            console.log(ders);
        })
    }


};

console.log(ogrenci);


ogrenci['ad']='Neriman';
ogrenci.yas=20;
ogrenci.sinif=2;
console.log(ogrenci);

ogrenci.printlesson();