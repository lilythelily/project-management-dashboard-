import plus from "../assets/icons/plus-01.svg";

function NewClient({clientOpen}) {
  return (
    <>
      <form className="modal modal__new-client" noValidate>
        <div className="modal__title">
          <h3 className="modal__h3">New Client</h3>
          <div className="modal__close" onClick={clientOpen}></div>
        </div>

        <div className="modal__field-container">
          {/* --- field1 --- */}
          <div className="modal__label-input">
            <label htmlFor="company" className="modal__label">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="ABC Co."
              className="modal__input"
            ></input>
          </div>

          {/* --- field2 --- */}
          <div className="modal__label-input">
            <label htmlFor="contact-person" className="modal__label">
              Contact Person
            </label>
            <input
              type="text"
              id="contact-person"
              name="contact-person"
              placeholder="Jane Doe"
              className="modal__input"
            ></input>
          </div>

          {/* --- field3 --- */}
          <div className="modal__label-input">
            <label htmlFor="email" className="modal__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="sample@sample.com"
              className="modal__input"
            ></input>
          </div>

          {/* --- field4 --- */}
          <div className="modal__label-input">
            <label htmlFor="instagram" className="modal__label">
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              placeholder="@abc"
              className="modal__input"
            ></input>
          </div>

          {/* --- field5 --- */}
          <div className="modal__label-input">
            <label htmlFor="phone" className="modal__label">
              Telephone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="0123-4567-8910"
              className="modal__input"
            ></input>
          </div>
        </div>
        <div className="modal__btns">
          <button type="button" className="outline-btn" onClick={clientOpen}>
            Cancel
          </button>
          <button type="button" className="main-btn">
            <img src={plus} alt="plus"></img>Add Client
          </button>
        </div>
      </form>
    </>
  );
}

export default NewClient;
