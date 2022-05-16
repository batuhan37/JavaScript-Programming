import { productList } from "./productList";
import  products from "../json/products.json";


const element = document.querySelector('#appleProducts');
const appleProducts = new productList(products, element);

appleProducts.init();