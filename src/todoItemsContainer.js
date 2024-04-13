import createElement from './createElement'
import renderTodoItemRow from './todoItemRow'

const CLASSNAME = {
  CONTAINER: 'todo-items-container',
  get LIST() {
    return `${this.CONTAINER}__list`
  },
  get LIST_ROW() {
    return `${this.LIST}__row`
  },
  get LIST_ROW_ID() {
    return `${this.LIST_ROW}__id`
  },
  get LIST_ROW_CONTENT() {
    return `${this.LIST_ROW}__content`
  },
  get LIST_ROW_DONE() {
    return `${this.LIST_ROW}__done`
  },
  get LIST_ROW_DATE() {
    return `${this.LIST_ROW}__date`
  },
  get LIST_ROW_DATE_CREATED_AT() {
    return `${this.LIST_ROW_DATE}__created-at`
  },
  get LIST_ROW_DATE_COMPLETED_AT() {
    return `${this.LIST_ROW_DATE}__completed-at`
  },
}

export default function renderTodoItemRows({ todoItems }) {
  return createElement(
    'div',
    {
      className: CLASSNAME.CONTAINER,
    },
    [
      createElement(
        'div',
        { className: CLASSNAME.LIST },
        todoItems.map(todoItem => renderTodoItemRow(todoItem))
      ),
    ]
  )
}
