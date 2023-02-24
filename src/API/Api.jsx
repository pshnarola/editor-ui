/* eslint-disable react-hooks/rules-of-hooks */
//------------------------------------------------------------------------------------------------
//POST API
//------------------------------------------------------------------------------------------------

export const signupApi = async (user) => {
  return fetch(" http://192.168.100.89:4000/api/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((data) => data.json());
};
export const loginApi = async (user) => {
  return fetch("http://192.168.100.89:4000/api/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((data) => data.json());
};
export const addComponentApi = async (pageData, token) => {
  return fetch("http://192.168.100.89:4000/api/page", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(pageData),
  }).then((data) => data.json());
};
export const logoutApi = async (token) => {
  return fetch("http://192.168.1.241:8000/api/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  });
};

//------------------------------------------------------------------------------------------------
//GET API
//------------------------------------------------------------------------------------------------
export const getPagesData = async (token) => {
  return fetch("http://192.168.100.89:4000/api/page", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`, // notice the Bearer before your token
    },
    body: JSON.stringify(),
  }).then((data) => data.json());
};

//------------------------------------------------------------------------------------------------
//update API
//------------------------------------------------------------------------------------------------
export const UpdatePage = async (token, editPage, pageID) => {
  return fetch(`http://192.168.100.89:4000/api/page/${pageID}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(editPage),
  }).then((data) => data.json());
};
//------------------------------------------------------------------------------------------------
//Delete API
//------------------------------------------------------------------------------------------------

export const deletePageApi = async (token, pageID) => {
  return fetch(` http://192.168.100.89:4000/api/page/${pageID}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`, // notice the Bearer before your token
    },
    body: JSON.stringify(),
  });
};
