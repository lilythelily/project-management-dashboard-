function ContactModal({contactOpen, client}) {
  return (
    <>
      {/* --- card 1 --- */}
      <div className="clients__card--invoice">
      <div className="modal__close modal__close--invoice" onClick={contactOpen}></div>
        {/* --- line 1 --- */}
        <p className="clients__name clients__name--invoice">{client}</p>
        <div className="clients__icon-text">
          <div className="clients__icon"></div>
          <p className="clients__text lowercase">sample@{client}.com</p>
        </div>
        {/* --- line 2 --- */}
        <div className="clients__icon-text">
          <div className="clients__icon clients__icon--2"></div>
          <p className="clients__text lowercase">@{client}</p>
        </div>
        {/* --- line 3 --- */}
        <div className="clients__icon-text">
          <div className="clients__icon clients__icon--3"></div>
          <p className="clients__text">0123-4567-8910</p>
        </div>
        {/* --- line 4 --- */}
        <div className="clients__icon-text">
          <div className="clients__icon clients__icon--4"></div>
          <p className="clients__text">Jane Stewart</p>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
