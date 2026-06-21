
import plus from "../assets/icons/plus-01.svg";

function NewTask({ taskOpen}) {

 
  
  return (
    <>
      <form className="modal modal__new-task" noValidate>
        <div className="modal__title">
          <h3 className="modal__h3">New Task</h3>
          <div className="modal__close" onClick={taskOpen}></div>
        </div>

        <div className="modal__field-container">
          {/* --- field1 --- */}
          <div className="modal__label-input">
            <label htmlFor="task" className="modal__label">
              Task
            </label>
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Initial Concept"
              className="modal__input"
            ></input>
          </div>

          {/* --- field2 --- */}
          <div className="modal__label-input">
            <label htmlFor="desc" className="modal__label">
              Description
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              placeholder="Ideation"
              className="modal__input"
            ></input>
          </div>

          {/* --- field3 --- */}
          <div className="modal__label-input">
            <label htmlFor="due" className="modal__label">
              Due Date
            </label>
            <input
              type="date"
              id="due"
              name="due"
              placeholder="2026/07/12"
              className="modal__input"
            ></input>
          </div>
        </div>
        <div className="modal__btns">
          <button type="button" className="outline-btn" onClick={taskOpen}>
            Cancel
          </button>
          <button type="button" className="main-btn">
            <img src={plus} alt="plus"></img>Add Task
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTask;
