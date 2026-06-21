import save from "../assets/icons/save.svg";

function EditResource({editOpen}) {
  return (
    <>
      <form className="modal modal__new-resource" noValidate>
        <div className="modal__title">
          <h3 className="modal__h3">Edit Resource</h3>
          <div className="modal__close" onClick={editOpen}></div>
        </div>

        <div className="modal__field-container">
          {/* --- field1 --- */}
          <div className="modal__label-input">
            <label htmlFor="item" className="modal__label">
              Item
            </label>
            <input
              type="text"
              id="item"
              name="item"
              placeholder="Front-end Development"
              className="modal__input"
            ></input>
          </div>

          {/* --- field2 --- */}
          <div className="modal__label-input">
            <label htmlFor="category" className="modal__label">
              Category
            </label>
            <select className="modal__select">
              <option>Design</option>
              <option>Development</option>
              <option>Branding</option>
            </select>
          </div>

         

          {/* --- field3 --- */}
          <div className="modal__label-input">
            <label htmlFor="url" className="modal__label">
              URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="www.google.com"
              className="modal__input"
            ></input>
          </div>
        </div>
        <div className="modal__btns">
          <button type="button" className="outline-btn" onClick={editOpen}>
            Cancel
          </button>
          <button type="submit" className="main-btn" onClick={editOpen}>
            <img src={save} alt="save"></img>Save
          </button>
        </div>
      </form>
    </>
  );
}

export default EditResource;
