import { ADD_WISH } from "./action";

const initialState = {
  wishes: []
};

const wishReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISH: {
      const { id, wish } = action.payload
      return {
        ...state,
        wishes: [ ...state.wishes, { id, wish }]
      };
    }
    default:
      return state;
  }
}

export default wishReducer;