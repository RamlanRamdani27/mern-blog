const initialState = {
  name: 'Ramlan',
};

const globalReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'Ramdani',
    };
  }
  return state;
};

export default globalReducer;
