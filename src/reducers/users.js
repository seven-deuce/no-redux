export default function reducer(state, action) {
  switch (action.type) {
    case "get-users":
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
