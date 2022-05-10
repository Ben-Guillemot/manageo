export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';

export function actionToggleMessage(message, bool) {
  return {
    type: TOGGLE_MESSAGE,
    payload: { message, bool },
  };
}
