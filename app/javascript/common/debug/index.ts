import Debug from 'debug';

const APP_NAMESPACE = 'ticket-compare';

const initDebug = (namespace: string): Debug.Debugger => {
  return Debug(`${APP_NAMESPACE}:${namespace}`);
};

const enableDebug = (): void => {
  localStorage.debug = `${APP_NAMESPACE}:*`;
};

export { initDebug, enableDebug };
