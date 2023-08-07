class UI {
    constructor(node){
        this.node=node;

        this.productImage=      ".image";
        this.productCim=        ".cim";
        this.productSzerzo=     ".szerzo";
        this.productLeiras=     ".leiras";
        this.productEvjarat=    ".year";

        this.productImageElement=       this.node.querySelector(this.productImage);
        this.productCimElement=         this.node.querySelector(this.productCim);
        this.productSzerzoElement=      this.node.querySelector(this.productSzerzo);
        this.productLeirasElement=      this.node.querySelector(this.productLeiras);
        this.productEvjaratElement=     this.node.querySelector(this.productEvjarat);
    }

    setProductImage(image){
        this.productImageElement.src=image;
    };
    setProductCim(title){
        this.productCimElement.textContent=title;
    };
    setProductSzerzo(author){
        this.productSzerzoElement.textContent=author;
    };
    setProductLeiras(description){
        this.productLeirasElement.textContent=description;
    };
    setProductEvjarat(year){
        this.productEvjaratElement.textContent=year;
    };
    appendTo(parentElement) {
        parentElement.appendChild(this.node);
    };

};

class Product{
    constructor(productInfo){
        this.year=          productInfo.year;
        this.title=         productInfo.title;
        this.image=         productInfo.image;
        this.author=        productInfo.author;
        this.description=   productInfo.description;
        
    };

    getTitle(){
        return this.title;
    };
    getImage(){
        return `${this.image}.png`;
    };
    getAuthor(){
        return this.author;
    };
    getDescription(){
        return this.description;
    };
    getYear(){
        return `Megjelenés: ${this.year}`;
    }
};

/*fetch('konyvek.json')
.then(response => response.json())
.then(productsData => {
  const ProductListElement = document.querySelector(".prodList");

  productsData.forEach(productInfo => {
    const UITemplate = document.querySelector(".konyvecske");
    const ShopUI = new UI(UITemplate);
    const product = new Product(productInfo);

    ShopUI.setProductCim(product.getTitle());
    ShopUI.setProductEvjarat(product.getYear());
    ShopUI.setProductImage(product.getImage());
    ShopUI.setProductLeiras(product.getDescription());
    ShopUI.setProductSzerzo(product.getAuthor());

    ShopUI.appendTo(ProductListElement);
  });
})
.catch(err => {
  console.error('Hiba történt az olvasás során:', err);
});*/
fetch('konyvek.json')
.then(response => response.json())
.then(productsData => {
  const ProductListElement = document.querySelector(".prodList");
  
  productsData.forEach(productInfo => {
    const UITemplate = document.querySelector(".konyvecske");
    const UITemplateClone = UITemplate.cloneNode(true);

    UITemplateClone.classList.remove("konyvecske"); // Osztály eltávolítása a klónból

    const ShopUI = new UI(UITemplateClone);
    const product = new Product(productInfo);

    ShopUI.setProductCim(product.getTitle());
    ShopUI.setProductEvjarat(product.getYear());
    ShopUI.setProductImage(product.getImage());
    ShopUI.setProductLeiras(product.getDescription());
    ShopUI.setProductSzerzo(product.getAuthor());

    ShopUI.appendTo(ProductListElement);
    ProductListElement.appendChild(UITemplateClone); // Hozzáadás a DOM-hoz
  });
})
.catch(err => {
  console.error('Hiba történt az olvasás során:', err);
});
