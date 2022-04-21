export const activeUserSelector = state => state.auth.activeUser;
export const isAuthenticatedSelector = state => !!state.auth.token;