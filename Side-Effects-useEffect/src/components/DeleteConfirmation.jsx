import { useEffect } from "react";
import ProgressBar from "./ProgressBar";
const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  
  // this cose execute even we cancel popup, its delete the item
  // setTimeout(() => {
  //   onConfirm();
  // }, 3000);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('timer set');
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
