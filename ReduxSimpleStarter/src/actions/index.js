export function selectBook(book) {
    //selectBook is and Action Creator it needs to return an action.
    //an object with a type prorperty
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}