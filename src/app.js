import api from './api'
import renderTodoItemRows from './todoItemsContainer'

export default async function renderApp() {
  const app = document.querySelector('#app')
  const todoItems = await api.getTodoItems()

  app.append(renderTodoItemRows({ todoItems }))
}
