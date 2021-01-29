class Products {
    constructor() {
      

      this.adapter = new ProductsAdapter();

      this.app  = document.getElementById('app');
     
      this.fetchAndLoadProducts();

      this.allButton = document.getElementById("all-submit");
      this.bindEventListeners();
    }
  
    bindEventListeners() {
      this.allButton.addEventListener("click", function() {
        event.preventDefault();
        this.fetchAndLoadProducts();
      }.bind(this))
    }
    
    fetchAndLoadProducts() {
      this.adapter.getProducts()
      .then( (data) => {
        
        const html = data.data  
        .map((product) => {
          return `
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                
                <div class="card-body">
                  <h4><b>${product.attributes.name}</b></h4>
                  <p>Precio: ${product.attributes.price}</p>
                  <p>Descuento: ${product.attributes.discount} %</p>
                  <p>Categoria: ${product.attributes.category.name}</p>
                </div>
              </div>
            </div>
            
          `;
        })
        .join("");
        document.querySelector("#app").innerHTML = html;
        
      })
    }


    clear() {
      this.app.innerHTML = "";
    }
  
    

  }