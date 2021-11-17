let initialState = {
  friends: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Viktor" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Andrey" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
