const getLocalStorage = () => {
  const meals = localStorage.getItem('meals');
  if (meals) {
    return JSON.parse(meals);
  }
}

const addToLocalStorate = (id) => {
  let data = [];
  const preData = getLocalStorage();
  if (preData) {
    const uniqueMeal = preData.filter(data => id !== data);
    data = [...uniqueMeal, id];
  } else {
    data = [id]
  }
  localStorage.setItem('meals', JSON.stringify(data))
}



export { addToLocalStorate, getLocalStorage, }