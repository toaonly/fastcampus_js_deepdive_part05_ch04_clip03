import createElement from './createElement'
import { dateFormat } from './utils'

const CLASSNAME = {
  LIST_ROW: 'todo-items-container__list__row',
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

export default function renderTodoItem({ id, content, createdAt, completedAt, done }) {
  return createElement('div', { className: CLASSNAME.LIST_ROW }, [
    createElement('div', { className: CLASSNAME.LIST_ROW_ID }, [id]),
    createElement('div', { className: CLASSNAME.LIST_ROW_CONTENT }, [content]),
    createElement('div', { className: CLASSNAME.LIST_ROW_DONE }, [
      createElement('input', { type: 'checkbox', checked: done, disabled: true }),
    ]),
    createElement('div', { className: CLASSNAME.LIST_ROW_DATE }, [
      createElement('div', { className: CLASSNAME.LIST_ROW_DATE_CREATED_AT }, [dateFormat(createdAt)]),
      createElement('div', { className: CLASSNAME.LIST_ROW_DATE_COMPLETED_AT }, [dateFormat(completedAt)]),
    ]),
  ])
}
