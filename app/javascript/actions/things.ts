import { Dispatch } from 'redux';
import { GET_THINGS_SUCCESS } from '../types/constants';
import { IActionGetThingsSuccess } from '../types/actions-things';
import { IResponseThings } from '../types/response-things';

const getThingsSuccess = (data: IResponseThings): IActionGetThingsSuccess => {
  return { type: GET_THINGS_SUCCESS, data };
};

// eslint-disable-next-line import/prefer-default-export
export const getThings = (): any => {
  return (dispatch: Dispatch<IActionGetThingsSuccess>): any => {
    fetch('api/v1/things.json')
      .then((response) => response.json())
      .then((data) => dispatch(getThingsSuccess(data)))
      .catch((error) => console.log(error));
  };
};