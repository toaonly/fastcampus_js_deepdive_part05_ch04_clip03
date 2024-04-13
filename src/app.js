import api from './api'
import renderTodoItems from './todoItemsContainer'

export default async function renderApp() {
  const app = document.querySelector('#app')
  const todoItems = await api.getTodoItems()

  app.append(renderTodoItems({ todoItems }))
}
