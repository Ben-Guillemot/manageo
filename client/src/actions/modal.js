export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function actionToggleModal(modal, bool) {
  return {
    type: TOGGLE_MODAL,
    payload: { modal, bool },
  };
}
