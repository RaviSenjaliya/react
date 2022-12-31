export const plus = (payload) => ({
  type: "plus",
  payload,
});
export const Minus = (payload) => ({
  type: "Minus",
  payload,
});
export const Multy = (payload) => ({
  type: "Multy",
  payload,
});
export const div = (payload) => ({
  type: "div",
  payload,
});

export const AsncMinus = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "MinusCount",
        payload: num,
      });
    }, 1000);
  };
};
// ===================================================================

export const UserListStart = () => ({
  type: "Start",
});

export const UserListsuccess = (payload) => ({
  type: "Success",
  payload,
});

export const UserListFail = (payload) => ({
  type: "Fail",
  payload,
});

export const getUserList =
  (page = 1) =>
  async (dispatch) => {
    dispatch(UserListStart());
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();
      dispatch(UserListsuccess(data));
    } catch (err) {
      dispatch(UserListFail(err.message));
    }
  };

// ====================================================================
