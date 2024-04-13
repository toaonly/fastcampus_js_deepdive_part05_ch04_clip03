import { describe, expect } from 'vitest'
import db from '../../db/db.json'
import renderTodoItemRow from '../todoItemRow'
import { dateFormat } from '../utils'

describe('renderTodoItemRow 테스트', () => {
  const todoItems = [db.todoItems[0], db.todoItems[1]]

  it('todoItem 의 정보가 정상적으로 렌더링이 된다', () => {
    todoItems.forEach(todoItem => {
      const todoItemRowEl = renderTodoItemRow(todoItem)
      const idEl = todoItemRowEl.querySelector('[data-test-id="todoItem__id"]')
      const contentEl = todoItemRowEl.querySelector('[data-test-id="todoItem__content"]')
      const doneEl = todoItemRowEl.querySelector('[data-test-id="todoItem__done"]')
      const createdAtEl = todoItemRowEl.querySelector('[data-test-id="todoItem__created-at"]')
      const completedAtEl = todoItemRowEl.querySelector('[data-test-id="todoItem__completed-at"]')

      expect(idEl.textContent).toBe(todoItem.id)
      expect(contentEl.textContent).toBe(todoItem.content)
      expect(doneEl.checked).toBe(todoItem.done)
      expect(createdAtEl.textContent).toBe(dateFormat(todoItem.createdAt))
      expect(completedAtEl.textContent).toBe(dateFormat(todoItem.completedAt))
    })
  })
})
