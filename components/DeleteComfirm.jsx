import deleteBtn from "../assets/icons/delete.svg";

function DeleteConfirm({ deleteOpen }) {
  return (
    <>
      <form className="modal modal__delete-confirm" noValidate>
        <div
          className="modal__close modal__delete-close"
          onClick={deleteOpen}
        ></div>

        <div className="delete__exclamation"></div>
        <p className="delete__title">Delete Confirmation</p>
        <p className="delete__message">
          Are you sure you want to <span className="delete__red">delete </span>
          this item? This action cannot be undone.
        </p>

        <div className="modal__btns">
          <button type="button" className="outline-btn" onClick={deleteOpen}>
            Cancel
          </button>
          <button type="submit" className="main-btn delete-btn">
            Delete
            <img src={deleteBtn} alt="delete"></img>
          </button>
        </div>
      </form>
    </>
  );
}

export default DeleteConfirm;
