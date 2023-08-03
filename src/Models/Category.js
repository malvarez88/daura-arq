const categoryColors = {
  Naranja: '#DF6537',
  Azul: '#2B457E',
  Verde: '#7F9052',
  Bordo: '#7F403B',
  Dorado: '#CBA971',
};

const textColors = {
  Negro: 'black',
  Blanco: 'white',
};

export default class Category {
  constructor(category) {
    this.id = category.id;
    this.category = category?.attributes?.nombre;
    this.categoryColor = categoryColors[category?.attributes?.color];
    this.categoryTextColor = textColors[category?.attributes?.colorLetra];
  }
}
