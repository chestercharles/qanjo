import { Middleware } from 'redux';
export const apiRequestMiddleware: Middleware = () => (next) => (action) => {
  if (!action.apiRequest) {
    return next(action);
  } else {
    const actionData = { ...action };
    delete actionData.type;
    delete actionData.apiRequest;

    const newAction = {
      type: `${action.type}_SUBMIT`,
      ...actionData,
      meta: {
        offline: {
          effect: action.apiRequest,
          commit: {
            type: `${action.type}_COMMIT`,
            ...actionData,
          },
          rollback: {
            type: `${action.type}_ROLLBACK`,
            ...actionData,
          },
        },
      },
    };

    next(newAction);
  }
};
