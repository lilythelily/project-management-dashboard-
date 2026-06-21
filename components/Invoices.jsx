import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import NewInvoice from "./NewInvoice";
import arrowBack from "../assets/icons/arrow_back.svg";
import caretUp from "../assets/icons/caret-up.svg";
import caretDown from "../assets/icons/caret-down.svg";
import plus from "../assets/icons/plus-01.svg";

function Invoices() {
  // --- back button ---
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length <= 1) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  // --- add invoice modal ---
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const invoiceRef = useRef(null);
  const toggleInvoice = () => {
    setInvoiceOpen((prev) => !prev);
  };

  // --- display contact info ---
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef(null);
    const [selectedClient, setSelectedClient] = useState("");
  const toggleContact = (clientName) => {
    setSelectedClient(clientName);
    setContactOpen(true);
  };

  // --- payment dropdown ---
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // --- fetch json data ---

  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/invoices.json");
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        const data = await response.json();
        setInvoiceData(data);
        console.log(data);
      } catch (error) {
        console.error("failed to fetch", error);
      }
    }
    fetchData();
  }, []);

  const statusStyle = {
    "Paid": {
      className: "invoices__payment-status",
    },
    "Pending": {
      className: "invoices__payment-status invoices__payment-status-pending",
    },
    "Overdue": {
      className: "invoices__payment-status invoices__payment-status-overdue",
    },
  };

  const [activeStatus, setActiveStatus] = useState('All');




  return (
    <>
      <main>
        {invoiceOpen && <div className="overlay"></div>}
        {invoiceOpen && (
          <NewInvoice ref={invoiceRef} invoiceOpen={toggleInvoice} />
        )}
        {/* --- overlay & modal --- */}
        {contactOpen && <div className="overlay"></div>}
        {contactOpen && (
          <ContactModal
            ref={contactRef}
            contactOpen={()=>setContactOpen(false)}
            client={selectedClient}
          />
        )}

        <ul className="dashboard-tab">
          <Link to="/" className="tab__link">
            <li className="tab__item">Dashboard</li>
          </Link>
          <Link to="/projects" className="tab__link">
            <li className="tab__item tab__item2">Projects</li>
          </Link>
          <Link to="/invoices" className="tab__link">
            <li className="tab__item tab__item3  tab__item--active">
              Invoices
            </li>
          </Link>
        </ul>

        {/* === dashboard === */}

        <div className="dashboard-container project-container">
          {/* -- back button -- */}
          <div className="back-text" onClick={handleBack}>
            <img src={arrowBack} alt="arrow" className="back-arrow"></img>
            Back
          </div>
          <div className="dashboard-wrapper invoices-wrapper">
            {/* --- invoice section --- */}

            <section className="section-invoices">
              <div className="invoices__title-btn">
                <div className="invoices__title-desc">
                  <h1 className="invoices__h1">Invoices</h1>
                  <p className="invoices__desc">Track all issued invoices</p>
                </div>

                <div className="dropdown-btn">
                  <div
                    className="payment-status-dropdown"
                    onClick={toggleDropdown}
                  >
                    <div
                      className="invoices__payment-status 
                    invoices__payment-status-all
                    invoices__payment-status-sort"
                    >
                      All
                    </div>
                    <img src={caretDown} alt="caret"></img>

                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="payment-status-dropdown-open"
                      >
                        <div
                          className="tab-caret"
                          onClick={() => setActiveStatus("All")}
                        >
                          <div
                            className="invoices__payment-status
                          invoices__payment-status-all invoices__payment-status-sort"
                          >
                            All
                          </div>
                          <img src={caretUp} alt="caret"></img>
                        </div>
                        <div
                          className="tab-caret"
                          onClick={() => setActiveStatus("Paid")}
                        >
                          <div className="invoices__payment-status invoices__payment-status-sort">
                            Paid
                          </div>
                          <img
                            src={caretUp}
                            alt="caret"
                            className="opacity"
                          ></img>
                        </div>

                        <div
                          className="tab-caret"
                          onClick={() => setActiveStatus("Pending")}
                        >
                          <div className="invoices__payment-status invoices__payment-status-pending invoices__payment-status-sort">
                            Pending
                          </div>
                          <img
                            src={caretUp}
                            alt="caret"
                            className="opacity"
                          ></img>
                        </div>

                        <div
                          className="tab-caret"
                          onClick={() => setActiveStatus("Overdue")}
                        >
                          <div className="invoices__payment-status invoices__payment-status-overdue invoices__payment-status-sort">
                            Overdue
                          </div>
                          <img
                            src={caretUp}
                            alt="caret"
                            className="opacity"
                          ></img>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className="main-btn"
                    onClick={toggleInvoice}
                  >
                    <img src={plus} alt="plus"></img>New Invoice
                  </button>
                </div>
              </div>

              {/* --- container --- */}
              <div className="invoices__container">
                <div className="invoices__header">
                  <p className="invoices__header-item">Project</p>
                  <p className="invoices__header-item">Client</p>
                  <p className="invoices__header-item">Issue</p>
                  <p className="invoices__header-item">Due</p>
                  <p className="invoices__header-item">Payment Method</p>
                  <p className="invoices__header-item">Status</p>
                  <p className="invoices__header-item">Contact</p>
                </div>
                {/* --- invoice list --- */}
                {/* --- list item --- */}
                {invoiceData &&
                  invoiceData
                    .filter((item) => {
                      if (activeStatus === "All") return true;
                      return item.status === activeStatus;
                    })

                    .map((item) => {
                      const currentStatus =
                        statusStyle[item.status] || statusStyle["Pending"];

                      return (
                        <div
                          className="invoices__list"
                          key={item.id || item.project}
                          onClick={() => toggleContact(item.client)}
                        >
                          <div className="invoices__list-item">
                            {item.project}
                          </div>
                          <div className="invoices__list-item invoices__list-item2">
                            {item.client}
                          </div>
                          <div className="invoices__list-item invoices__list-item2">
                            {item.issue}
                          </div>
                          <div className="invoices__list-item invoices__list-item2">
                            {item.due}
                          </div>
                          <div className="invoices__list-item invoices__list-item2">
                            {item.method}
                          </div>
                          <div className="invoices__list-item">
                            <div className={`${currentStatus.className}`}>
                              {item.status}
                            </div>
                          </div>

                          <div
                            className="invoices__list-item-contact"
                            onClick={()=>toggleContact(item.client)}
                          ></div>
                        </div>
                      );
                    })}{" "}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Invoices;
