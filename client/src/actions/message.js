export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';

/**
 * action called to change message state
 * @param {string} message wich message to change
 * @param {boolean} bool value of change
 * @returns action TOGGLE_MESSAGE
 */
export function actionToggleMessage(message, bool) {
  return {
    type: TOGGLE_MESSAGE,
    payload: { message, bool },
  };
}
