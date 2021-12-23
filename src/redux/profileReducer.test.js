import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "How are you", likesCount: 15 },
    { id: 2, message: "I'm fine", likesCount: 21 },
    { id: 3, message: "Hello", likesCount: 151 },
  ],
};

test("length should bу incremented", () => {
  // 1. test data
  let action = addPostActionCreator("Testing");
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(4);
});
test("message of new post should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("Testing");

  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[3].message).toBe("Testing");
});
test("after deleting length of message should be decrement", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(2);
});
