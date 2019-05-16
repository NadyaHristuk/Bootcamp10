const ADD_CHANNEL = "ADD-CHANNEL";
const UPDATE_CHANNELS = "UPDATE_CHANELS";
const ADD_CURRENT_CHANNEL = "ADD_CURRENT_CHANNEL";

let initialState = {
  channels: [
    {
      id: 1,
      channelName: "# General",
      createdBy: "Andrii",
      details: "This dialog for all users",
      path: "/channel/"
    }
  ],
  userName: [
    { id: 1, name: "Andrii", path: "/dialogs/" },
    { id: 2, name: "Alexandr", path: "/dialogs/" },
    { id: 3, name: "Nikita", path: "/dialogs/" },
    { id: 4, name: "Maxim", path: "/dialogs/" },
    { id: 5, name: "Nastya", path: "/dialogs/" },
    { id: 6, name: "Alisa", path: "/dialogs/" },
    { id: 7, name: "Lina", path: "/dialogs/" }
  ],
  newChannelName: "",
  currentChannel: ""
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      let newChannel = state.newChannelName;

      return {
        ...state,
        newChannelName: "",
        channels: [
          { id: state.channels.length + 1, channelName: newChannel },
          ...state.channels
        ]
      };

    case UPDATE_CHANNELS:
      return { ...state, newChannelName: action.newChannelName };

    case ADD_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.currentChannel
      };

    default:
      return state;
  }
};

export const addChannelActionCreator = () => ({ type: ADD_CHANNEL });
export const updateChannelsActionCreator = name => ({
  type: UPDATE_CHANNELS,
  newChannelName: name
});
export const addCurrentChannelActionCreator = activeChannel => ({
  type: ADD_CURRENT_CHANNEL,
  currentChannel: activeChannel
});

export default channelReducer;
