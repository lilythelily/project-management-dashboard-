import plus from "../assets/icons/plus-01.svg";

function NewInvoice({invoiceOpen}) {
  return (
    <>
      <form className="modal modal__new-invoice" noValidate>
        <div className="modal__title">
          <h3 className="modal__h3">New Invoice</h3>
          <div className="modal__close" onClick={invoiceOpen}></div>
        </div>

        <div className="modal__field-container">
          {/* --- field1 --- */}
          <div className="modal__label-input">
            <label htmlFor="project" className="modal__label">
              Project
            </label>
            <input
              type="text"
              id="project"
              name="project"
              placeholder="Front-end Development"
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
              placeholder="Flash"
              className="modal__input"
            ></input>
          </div>

          {/* --- field3 --- */}
          <div className="modal__label-input">
            <label htmlFor="issue" className="modal__label">
              Issue Date
            </label>
            <input
              type="date"
              id="issue"
              name="issue"
              placeholder="2026/01/12"
              className="modal__input"
            ></input>
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
              placeholder="2026/01/10"
              className="modal__input"
            ></input>
          </div>

          {/* --- field5 --- */}
          <div className="modal__label-input">
            <label htmlFor="method" className="modal__label">
              Payment Method
            </label>
            <input
              type="text"
              id="method"
              name="method"
              placeholder="Stripe"
              className="modal__input"
            ></input>
          </div>
        </div>
        <div className="modal__btns">
          <button type="button" className="outline-btn" onClick={invoiceOpen}>
            Cancel
          </button>
          <button type="button" className="main-btn">
            <img src={plus} alt="plus"></img>Add Invoice
          </button>
        </div>
      </form>
    </>
  );
}

export default NewInvoice;
