const api = {
  getTodoItems() {
    return fetch(`http://localhost:3000/todoItems`).then(res => res.json())
  },
}

export default api
