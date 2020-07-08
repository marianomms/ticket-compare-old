import { Dispatch } from 'redux';
import { GET_THINGS_SUCCESS } from 'app/types/constants';
import { IActionGetThingsSuccess } from 'app/types/actions-things';
import { IResponseThings } from 'app/types/response-things';

const getThingsSuccess = (data: IResponseThings): IActionGetThingsSuccess => {
  return { type: GET_THINGS_SUCCESS, data };
};

// eslint-disable-next-line import/prefer-default-export
export const getThings = (): unknown => {
  return (dispatch: Dispatch<IActionGetThingsSuccess>) => {
    fetch('api/v1/things.json')
      .then((response) => response.json())
      .then((data) => dispatch(getThingsSuccess(data)))
      .catch((error) => console.log(error));
  };
};
