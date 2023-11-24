


export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}


export const getCarts = () => {
  const data = localStorage.getItem('carts');
  return data === null ? [] : JSON.parse(data);
}

export const setCarts = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}


export const getUser = () => {
  const data = localStorage.getItem('user');
  return data === null ? null : JSON.parse(data);
}




export const clearAllData = () => {
  localStorage.clear();
}