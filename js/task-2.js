const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const ingredientsListRef = document.querySelector('#ingredients');

const newListItem = ingredients.map((elem, index, arr) =>{
    arr[index] = document.createElement('li');
    arr[index].textContent = elem;
    return arr[index];
}
);
  
ingredientsListRef.append(...newListItem);
  

