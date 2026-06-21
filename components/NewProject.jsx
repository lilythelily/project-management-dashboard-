import plus from "../assets/icons/plus-01.svg";

function NewProject({projectOpen}) {
  return (
    <>
      <form className="modal modal__new-project" noValidate>
        <div className="modal__title">
          <h3 className="modal__h3">New Project</h3>
          <div className="modal__close" onClick={projectOpen}></div>
        </div>

        <div className="modal__field-container">
          {/* --- field1 --- */}
          <div className="modal__label-input">
            <label htmlFor="task" className="modal__label">
              Title
            </label>
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Bottle Packaging"
              className="modal__input"
            ></input>
          </div>

          {/* --- field2 --- */}
          <div className="modal__label-input">
            <label htmlFor="client" className="modal__label">
              Client
            </label>
            <input
              type="text"
              id="client"
              name="client"
              placeholder="SummerVille"
              className="modal__input"
            ></input>
          </div>

          {/* --- field3 --- */}
          <div className="modal__label-input">
            <label htmlFor="due" className="modal__label">
              Category
            </label>
            <select className="modal__select">
              <option>Design</option>
              <option>Development</option>
              <option>Branding</option>
            </select>
          </div>

          {/* --- field4 --- */}
          <div className="modal__label-input">
            <label htmlFor="description" className="modal__label">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="Brief description"
              className="modal__textarea"
            ></textarea>
          </div>

          {/* --- field5 --- */}
          <div className="modal__label-input">
            <label htmlFor="delivery" className="modal__label">
              Delivery Date
            </label>
            <input
              type="date"
              id="delivery"
              name="delivery"
              placeholder="2026/08/12"
              className="modal__input"
            ></input>
          </div>
        </div>
        <div className="modal__btns">
          <button type="button" className="outline-btn">
            Cancel
          </button>
          <button type="submit" className="main-btn">
            <img src={plus} alt="plus"></img>Add Project
          </button>
        </div>
      </form>
    </>
  );
}

export default NewProject;
