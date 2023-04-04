import { ACTIONS } from "./App"


export default function OperationButton({ dispatch, operation, id }) {

  return (
    <button id={id} className="op-btn" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
  )
}