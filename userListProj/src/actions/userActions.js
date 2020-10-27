import axios from "axios";
function requestStart() {
  console.log("started");
  return {
    type: "USER_FETCH_START",
  };
}

function requestFail(err) {
  return {
    type: "USER_FETCH_FAIL",
    err,
  };
}
function requestSuccess(data) {
  console.log("success");
  return {
    type: "USER_FETCH_SUCCESS",
    data,
  };
}

function postSuccess() {
  console.log("post sucess");
  return {
    type: "ADD_USER",
  };
}

function putSuccess() {
  console.log("post sucess");
  return {
    type: "UPDATE_USER",
  };
}

function deleteSuccess() {
  console.log("delete sucess");
  return {
    type: "DELETE_USER",
  };
}

export const getUsers = (params) => {
  const { page, search, sortMethod, sortDir } = params;
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .get(
        `/api/users?page=${page}&search=${search}&sortMethod=${sortMethod}&sortDir=${sortDir}`
      )
      .then((res) => {
        dispatch(requestSuccess(res.data));
      })
      .catch((err) => {
        console.log("fail");
        dispatch(requestFail(err));
      });
  };
};

export const addUser = (input) => {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .post("/api/", {
        firstName: input.firstNameInput,
        lastName: input.lastNameInput,
        sex: input.sexInput,
        age: parseInt(input.ageInput),
        password: input.passwordInput,
      })
      .then((res) => {
        dispatch(postSuccess());
      })
      .catch((err) => {
        console.log("fail");
        dispatch(requestFail(err));
      });
  };
};

export const updateUser = (input) => {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .put(`/api/users/${input.id}`, {
        firstName: input.firstNameInput,
        lastName: input.lastNameInput,
        sex: input.sexInput,
        age: parseInt(input.ageInput),
        password: input.passwordInput,
      })
      .then((res) => {
        dispatch(putSuccess());
      })
      .catch((err) => {
        console.log("fail");
        dispatch(requestFail(err));
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .delete(`/api/${id}`)
      .then((res) => {
        dispatch(deleteSuccess());
      })
      .catch((err) => {
        dispatch(requestFail(err));
      });
  };
};
