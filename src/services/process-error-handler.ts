import { store } from '../store';
import { setError } from '../store/error-process/error-process';

const TIMEOUT_SHOW_ERROR = 2000;

export const processErrorHandler = (message: string) => {
  store.dispatch(setError(message));

  setTimeout(
    () => store.dispatch(setError(null)),
    TIMEOUT_SHOW_ERROR
  );
};
