import { GET_THINGS_SUCCESS } from './constants';
import { IResponseThings } from './response-things';

/**
 * Redux action to be used in reducers to hide the flash error
 */
export interface IActionGetThingsSuccess {
  type: typeof GET_THINGS_SUCCESS;
  data: IResponseThings
}
