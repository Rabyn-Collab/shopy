


export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}


export const getUser = () => {
  const data = localStorage.getItem('user');
  return data === null ? null : JSON.parse(data);
}



export const clearAllData = () => {
  localStorage.clear();
}