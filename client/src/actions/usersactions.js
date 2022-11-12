import {
  FETCH_ALL_USERS,
  ERROR,
  BLOCK,
  UNBLOCK,
} from "../constants/actionTypes";
import { Users, block, unblock } from "../api/index";

export const UserList = () => async (dispatch) => {
  try {
    const { data } = await Users();
    console.log(data);
    dispatch({
      type: FETCH_ALL_USERS,
      payload: data.filter((ele) => !ele.admin),
    });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const BlockUser = (id, data) => async (dispatch) => {
  try {
    const user = data.filter((ele) => ele.id);
    await block(id, user[0]);
    dispatch({ type: BLOCK, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const UnBlockUser = (id, data) => async (dispatch) => {
  try {
    const user = data.filter((ele) => ele.id);
    await unblock(id, user[0]);
    dispatch({ type: UNBLOCK, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};
