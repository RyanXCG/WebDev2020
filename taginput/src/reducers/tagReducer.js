const initState = [];

const tagReducer = (state = initState, action) => {
  switch (action.type) {
    case "add_tag":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case "delete_tag":
      let newTags = state.filter((tag) => {
        return tag.id !== action.id;
      });
      return newTags;
    default:
      return state;
  }
};

export default tagReducer;
