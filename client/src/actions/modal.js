export const TOGGLE_MODAL = 'TOGGLE_MODAL';

/**
 * action called to change modal state
 * @param {string} modal wich modal to change
 * @param {boolean} bool value of change
 * @returns action TOGGLE_MODAL
 */
export function actionToggleModal(modal, bool) {
  return {
    type: TOGGLE_MODAL,
    payload: { modal, bool },
  };
}
