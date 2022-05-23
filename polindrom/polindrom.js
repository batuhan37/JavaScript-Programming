//vue instance
// vuejs parametlerini kullanmamı sağlayacak

const app = Vue.createApp({
    // html den çekerek kullanacağım değişkenleri bir data içerisiine yazıyoruz.

    data() {
        return {
            poliValue: null,
            result:""

        };

    },

    methods: {
        // bana bir event bilgisi gelecek
        updateValue(event) {

          this.poliValue = event.target.value;
          const result =this.checkPalindrome(this.poliValue)
          if(result) {
              this.result = this.poliValue + " polindrom sayıdır."
          }
          else{
            this.result = this.poliValue + " polindrom sayı değildir."
          }
            // event parametresinin içerisindeki değeri yazdır
            // console.log(event.target.value)
            // bu değeri konsol yerine buradaki todoValue içerisine yazıyoruz.
            // this.todoValue = event.target.value;
        },

        
        checkPalindrome(Word) {
            // if(Word.startsWith("-")){
            //     Word = Word.replace("-","")
            // }
            var l = Word.length;
            for (var i = 0; i < l / 2; i++) {
                if (Word.charAt(i) !== Word.charAt(l - 1 - i)) {
                    return false;
                }

            }
            return true;
        }


    }

    // id si app olan bölgeyi kontrol et 
}).mount("#app")

