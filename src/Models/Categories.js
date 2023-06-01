import Category from "./Category";

export default class Categories {
    constructor(categories) {
        this.categories = categories?.map(category => new Category(category));
        this.length = this.categories?.length
    }
    map(callback) {
        return this.categories?.map(callback);
      }
    getCategory(categoryName) {
        return this.categories?.find(category => category.category === categoryName);
    }

    static ALL = 'all';
}

