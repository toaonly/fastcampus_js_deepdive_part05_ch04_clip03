import { describe } from 'vitest'
import { dateFormat } from '../utils'

describe('utils 테스트', () => {
  describe('dateFormat 함수 테스트', () => {
    it('파라미터에 정상적인 날짜 값을 넣었을 경우 year.month.date 포맷으로 값이 나온다.', () => {
      const cases = [
        ['2024-03-01T00:00:00+09:00', '2024.03.01'],

        ['2024-03-01', '2024.03.01'],
        ['2024/03/01', '2024.03.01'],
        ['2024.03.01', '2024.03.01'],

        ['03-01-2024', '2024.03.01'],
        ['03/01/2024', '2024.03.01'],
        ['03.01.2024', '2024.03.01'],

        [1709218800000, '2024.03.01'],

        [new Date(1709218800000), '2024.03.01'],
      ]

      cases.forEach(([param, result]) => {
        expect(dateFormat(param)).toBe(result)
      })
    })

    it('파라미터에 정상적이지 않은 날짜 값을 넣었을 경우 공백으로 값이 나온다.', () => {
      const cases = [
        [null, ''],
        [undefined, ''],
        [[], ''],
        [{}, ''],
        ['13.01.2024', ''],
        ['2024.13.01', ''],
        ['12.2024.01', ''],
        ['01.2024.12', ''],
      ]

      cases.forEach(([param, result]) => {
        expect(dateFormat(param)).toBe(result)
      })
    })
  })
})
