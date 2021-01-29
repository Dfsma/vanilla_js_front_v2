class CategoriesAdapter {
    constructor() {
      this.baseURL = "http://localhost:3000/categories"
    }
  
    getCategories(){
      return fetch(this.baseURL)
      .then((response) => {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
    }

    getProductsByCategory(selectedOption){
      return fetch(this.baseURL + `/${selectedOption}` +`/products`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
    }
}