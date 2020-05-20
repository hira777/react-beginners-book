import axios from 'axios';

const baseUrl = 'http://localhost:3001/todos';

// Todo を取得する
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// Todo を更新する
const update = async (id, newTodo) => {
  const response = await axios.put(`${baseUrl}/${id}`, newTodo);
  // 通信が成功したこと通知するため、更新した Todo 情報を返却する
  return response.data;
};

// Todo を削除する
const _delete = async id => {
  await axios.delete(`${baseUrl}/${id}`);
  // 通信が成功したこと通知するため、削除した Todo の ID を返却する
  return id;
};

// Todoを追加する
const add = async newTodo => {
  const response = await axios.post(baseUrl, newTodo);
  // 通信が成功したこと通知するため、追加した Todo 情報を返却する
  return response.data;
};

export default { getAll, update, delete: _delete, add };
