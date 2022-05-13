var items = ['item 1', 'item 2', 'item 3', 'item 4'];

var list = document.querySelector('#myList');

//  liste elemanlarını item olarak yazdırma

items.forEach(function (item) {

    CreateItem(item);
});

// itemlere checked stilini atama 

    list.addEventListener('click', function (item) {

        if (item.target.tagName  == 'LI') {
            item.target.classList.toggle('checked');
            toggleDeleteButton();
        }

    });

    function toggleDeleteButton(){
        var checkList = document.querySelectorAll('.list-group-item.checked');

        if(checkList.length>0){
            document.querySelector('#deleteAll').classList.remove('d-none');
        }

        else{
            document.querySelector('#deleteAll').classList.add('d-none');

        }
    }

    document.querySelector('#deleteAll').onclick=function(){
        var elements = document.querySelectorAll('.checked');
        
        elements.forEach(function(item){
            item.style.display='none';
       });
      

    }

    // yeni itemler oluşturma

document.querySelector('#btnCreate').onclick=function(){
    var item = document.querySelector('#txtitem').value;

    if(item===''){
        alert('lütfen bir değer giriniz.');
        return;
    }

    CreateItem(item);
}




function CreateItem(item){

        //itemleri oluşturma

        var li = document.createElement('li')
        var t = document.createTextNode(item);
        li.className = 'list-group-item';
        li.appendChild(t);
        list.appendChild(li);
    
            //spanları oluşturma
    
        var span = document.createElement('span');
        var text = document.createTextNode(' \u00D7');
        span.className = 'close';
        span.appendChild(text);
        li.appendChild(span);
    
        //spana tıklayınca silinmesini sağlar
    
        span.onclick= function(){
            var li = this.parentElement;
            li.style.display= 'none';
            li.classList.remove('checked');
        }

}