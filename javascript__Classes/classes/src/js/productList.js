export class productList {
  constructor(list, element){
    this.list = list;
    this.element = element;

  }
  init(){

    this.render(this.list.products);

  }

  render(list) {
    const element = this.element
  
    list.forEach((item) => {
     element.innerHTML += `
        <div class="col">
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.price} ${item.currency}</p>
              <a href="#" class="btn btn-primary">Sepete Ekle</a>
            </div>
          </div>
        </div>
   `
    });

  }
}