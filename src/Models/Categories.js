import Category from './Category';

const allCategory = {
  id: 0,
  attributes: {
    nombre: 'all',
    color: 'Naranja',
    colorLetra: 'Negro',
  },
};
export default class Categories {
  constructor(categories) {
    this.categories = categories ? categories?.map((category) => new Category(category)) : [];
    this.categories.unshift(new Category(allCategory));
    this.length = this.categories?.length;
  }

  map(callback) {
    return this.categories?.map(callback);
  }

  getCategory(categoryName) {
    return this.categories?.find((category) => category.category === categoryName);
  }

  static ALL = 'all';
}
