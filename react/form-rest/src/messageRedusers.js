const sendMessage = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return state.concat([action.payload.data]);
    case "DELETE_MESSAGE":
      return state.filter(historyposts => historyposts.id !== action.id);
    case "CHANGE_MESSAGE":
      return state.map(historyposts =>
        historyposts.id === action.id
          ? { ...historyposts, add: !historyposts.add }
          : historyposts
      );
    case "UPDATE_MESSAGE":
      return state.map(historyposts => {
        if (historyposts.id === action.id) {
          return {
            ...historyposts,
            message: action.data.newMessage,
            add: !historyposts.add
          };
        } else return historyposts;
      });
    default:
      return state;
  }
};

export default sendMessage;
