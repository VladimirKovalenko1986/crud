const URL = 'https://6448213150c25337443949ec.mockapi.io/api/todos/';

const saveTask = task => {
  console.log('POST');
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(task),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   return fetch(URL, options);

  // ! Спробуємо через аксіос
  return axios.post(URL, task);
};

const loadTasks = () => {
  console.log('GET');
  //   return fetch(URL).then(res => res.json());
  // ! Спробуємо через аксіос
  return axios.get(URL).then(res => res.data);
};

const updateTasks = (id, status) => {
  console.log(`PUT: \n\tid: ${id} \n\tstatus: ${status}`);

  //   const options = {
  //     method: 'PUT',
  //     body: JSON.stringify({ isDone: status }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   return fetch(`${URL}/${id}`, options);

  // ! Спробуємо через аксіос
  return axios.put(`${URL}/${id}`, { isDone: status });
};

const deleteTasks = id => {
  console.log(`DELETE: \n\tid: ${id}`);

  //   const options = {
  //     method: 'DELETE',
  //   };
  //   return fetch(`${URL}/${id}`, options);

  // ! Спробуємо через аксіос
  return axios.delete(`${URL}/${id}`);
};

export { saveTask, loadTasks, updateTasks, deleteTasks };
