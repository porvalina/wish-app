export const ADD_WISH = "ADD_WISH";

let wishId = 0;

export const addWish = wish => ({
  type: ADD_WISH,
  payload: {
    id: ++wishId,
    wish
  }
});