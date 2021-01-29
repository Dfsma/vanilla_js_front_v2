class Categories {
    constructor() {
      this.adapter = new CategoriesAdapter();
      this.app  = document.getElementById('app');
      this.categoryDropDown = document.getElementById("categoryDropDown");
      this.fetchAndLoadCategories();
      this.bindEventListeners();
      
      
    }

    bindEventListeners() {
      
      this.categoryDropDown.addEventListener("change", function() {
        this.fetchAndLoadProductsByCategory();
      }.bind(this))
     
    }
    

    fetchAndLoadCategories(){
      this.adapter.getCategories()
      .then( (data) => {
        
        const html = data.data  
        .map((category) => {
          return `
            <option id="category" value="${category.id}">${category.attributes.name}</option>
          `;
        })
        .join("");
        document.querySelector("#categoryDropDown").insertAdjacentHTML("beforeend", html)
        
      })

    }

    
    fetchAndLoadProductsByCategory(){
      const selectedOption = event.target.value
      this.adapter.getProductsByCategory(selectedOption)
      .then((data) => {
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