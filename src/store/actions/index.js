'use strict';
import * as types from '../types/index';

let user = {
  name: 'xxx',
  age: 12
}

export function isLogining() {
  return {
    type: types.LOGIN_IN_DOING
  }
}

export function loginSuccess(user) {
  console.log('登录成功');
  return {
    type: types.LOGIN_IN_DONE,
    user: user
  }
}

export function loginError() {
  console.log('登录失败');
  return {
    type: types.LOGIN_IN_ERROR,
  }
}

export function login() {
  return dispatch => {
    dispatch(isLogining());
    let res = setTimeout(() => {
      dispatch(loginSuccess(user));
    }, 1000)
  }
}