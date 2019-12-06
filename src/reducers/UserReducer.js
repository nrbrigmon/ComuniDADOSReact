function createNewUser() {
  return {};
}

export default function(state = {}, { type, payload }) {
  switch (type) {
    case "DEFAULT_USER":
      return state;
    case "NEW_USER":
      return createNewUser();
    default:
      return state;
  }
}