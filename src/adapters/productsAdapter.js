class ProductsAdapter {
    constructor() {
      this.baseUrl = 'http://localhost:3000/products'
      this.baseUrlCategory = 'http://localhost:3000/categories'
    }
  
    getProducts() {
      return fetch(this.baseUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error("Error");
        }
        
        return response.json();
      })
      
    }
  
  
    
}