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

export default function renderTodoItemRow({ id, content, createdAt, completedAt, done }) {
  return createElement('div', { className: CLASSNAME.LIST_ROW }, [
    createElement(
      'div',
      {
        className: CLASSNAME.LIST_ROW_ID,
        dataset: {
          testId: `todoItem__id`,
        },
      },
      [id]
    ),
    createElement(
      'div',
      {
        className: CLASSNAME.LIST_ROW_CONTENT,
        dataset: {
          testId: `todoItem__content`,
        },
      },
      [content]
    ),
    createElement('div', { className: CLASSNAME.LIST_ROW_DONE }, [
      createElement('input', {
        type: 'checkbox',
        dataset: {
          testId: `todoItem__done`,
        },
        checked: done,
        disabled: true,
      }),
    ]),
    createElement('div', { className: CLASSNAME.LIST_ROW_DATE }, [
      createElement(
        'div',
        {
          className: CLASSNAME.LIST_ROW_DATE_CREATED_AT,
          dataset: {
            testId: `todoItem__created-at`,
          },
        },
        [dateFormat(createdAt)]
      ),
      createElement(
        'div',
        {
          className: CLASSNAME.LIST_ROW_DATE_COMPLETED_AT,
          dataset: {
            testId: `todoItem__completed-at`,
          },
        },
        [dateFormat(completedAt)]
      ),
    ]),
  ])
}
