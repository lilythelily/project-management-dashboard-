import save from "../assets/icons/save.svg";

function EditTask({editTaskOpen}) {
  return (
    <>
      <form className="modal modal__edit-task" noValidate>
        <div className="modal__title">
          <h3 className="modal__h3">Edit Task</h3>
          <div className="modal__close" onClick={editTaskOpen}></div>
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
            <label htmlFor="due" className="modal__label">
              Status
            </label>
            <select className="modal__select">
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          
          {/* ---field3--- */}
          <div className="modal__label-input">
            <label htmlFor="description" className="modal__label">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="Create a proposal"
              className="modal__textarea"
            ></textarea>
          </div>

          {/* --- field4 --- */}
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
          <button type="button" className="outline-btn" onClick={editTaskOpen}>
            Cancel
          </button>
          <button type="submit" className="main-btn">
            <img src={save} alt="save"></img>Save Changes
          </button>
        </div>
      </form>
    </>
  );
}

export default EditTask;
