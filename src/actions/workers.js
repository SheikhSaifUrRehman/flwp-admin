import axios from 'axios';
import { path } from './../path';

export const setUnverifiedWorkers = () => async (dispatch) => {
  let url = `${path}api/workers/verified`;
  const res = await axios.get(url).catch((err) => {
    console.log(err.response);
    return { error: err.response };
  });

  if (res.error) return res;

  dispatch({
    type: 'SET_WORKERS',
    payload: {
      workers: res.data.workers,
    },
  });
};
