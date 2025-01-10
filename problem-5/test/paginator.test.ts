import { getPagination } from '../utils/paginator'

describe('getPagination', () => {
  test('should return correct limit and offset for valid page and size', () => {
    const page = 2
    const size = 20
    const result = getPagination(page, size)
    expect(result).toEqual({ limit: 20, offset: 40 })
  })

  test('should default limit to 10 when size is not provided', () => {
    const page = 1
    const size = undefined as unknown as number
    const result = getPagination(page, size)
    expect(result).toEqual({ limit: 10, offset: 10 })
  })

  test('should default offset to 0 when page is not provided', () => {
    const page = undefined as unknown as number
    const size = 15
    const result = getPagination(page, size)
    expect(result).toEqual({ limit: 15, offset: 0 })
  })

  test('should default limit to 10 and offset to 0 when page and size are not provided', () => {
    const page = undefined as unknown as number
    const size = undefined as unknown as number
    const result = getPagination(page, size)
    expect(result).toEqual({ limit: 10, offset: 0 })
  })

  test('should handle edge case: page = 0, size = 0', () => {
    const page = 0
    const size = 0
    const result = getPagination(page, size)
    expect(result).toEqual({ limit: 10, offset: 0 })
  })
})
