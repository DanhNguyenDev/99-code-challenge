"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingData = void 0;
exports.getPagination = getPagination;
function getPagination(page, size) {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
}
const getPagingData = (data, page, limit, mapper) => {
    let { count: totalItems, rows: items } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    if (mapper) {
        items = items ? mapper(items) : mapper([]);
    }
    if (!totalItems) {
        return { totalItems: 0, items: [], totalPages: 0, currentPage };
    }
    return { totalItems, items, totalPages, currentPage };
};
exports.getPagingData = getPagingData;
