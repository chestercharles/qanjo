export const userActionTypes = {
  LOGIN: {
    REQUEST: 'LOGIN',
    SUBMIT: 'SUBMIT',
    COMMIT: 'LOGIN_COMMIT',
    ROLLBACK: 'LOGIN_ROLLBACK',
  },
  LOGOUT: 'LOGOUT',
} as const;
