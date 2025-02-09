export function getPagination(page: number, size: number) {
  const limit = size ? +size : 10
  const offset = page ? page * limit : 0
  return { limit, offset }
}
export const getPagingData = (data: any, page: number, limit: number, mapper: any) => {
  let { count: totalItems, rows: items } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  if (mapper) {
    items = items ? mapper(items) : mapper([])
  }

  if (!totalItems) {
    return { totalItems: 0, items: [], totalPages: 0, currentPage }
  }

  return { totalItems, items, totalPages, currentPage }
}
