import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NewResource from "./NewResource";
import DeleteConfirm from "./DeleteComfirm";
import EditResource from "./EditResource";
import backArrow from "../assets/icons/arrow_back.svg";
import plus from "../assets/icons/plus-01.svg";
import clipboard from "../assets/icons/clipboard-list-outline.svg";

function Resources() {
  // --- back button ---
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length <= 1) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  // --- delete modal ---

  const [deleteOpen, setDeleteOpen] = useState(false);
  const deleteRef = useRef(null);
  const toggleDelete = () => {
    setDeleteOpen((prev) => !prev);
  };

  // --- add resource ---
  const [resourceOpen, setResourceOpen] = useState(false);
  const resourceRef = useRef(null);
  const toggleResource = () => {
    setResourceOpen((prev) => !prev);
  }

  // --- edit resource ---
  const [editOpen, setEditOpen] = useState(false);
  const editRef = useRef(null);
  const toggleEdit = () => {
    setEditOpen((prev) => !prev);
  }

  // --- fetch json data ---

  const [resourceData, setResourceData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/resources.json');
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        const data = await response.json();
        setResourceData(data);

      } catch (error) {
        console.error('failed to fetch', error);
      }
    }
    fetchData();
  }, []);

  const categoryStyle = {
    "Design": {
      className: "overview__tag",
    },
    "Development":{
  className: "overview__tag overview__tag--dev",
    },
    "Branding":{
    className: "overview__tag overview__tag--branding"}
  };


  return (
    <>
      <main>
        {deleteOpen && <div className="overlay"></div>}
        {deleteOpen && (
          <DeleteConfirm ref={deleteRef} deleteOpen={toggleDelete} />
        )}

        {resourceOpen && <div className="overlay"></div>}
        {resourceOpen && (
          <NewResource ref={resourceRef} resourceOpen={toggleResource} />
        )}

        {editOpen && <div className="overlay"></div>}
        {editOpen && (
          <EditResource ref={editRef} editOpen={toggleEdit} />
        )}

        <ul className="dashboard-tab">
          <Link to="/" className="tab__link">
            <li className="tab__item">Dashboard</li>
          </Link>
          <Link to="/projects" className="tab__link">
            <li className="tab__item tab__item2 ">Projects</li>
          </Link>
          <Link to="/invoices" className="tab__link">
            <li className="tab__item tab__item3">Invoices</li>
          </Link>
        </ul>

        {/* === dashboard === */}

        <div className="dashboard-container project-container">
          {/* -- back button -- */}
          <div className="back-text" onClick={handleBack}>
            <img src={backArrow} alt="arrow" class="back-arrow"></img>
            Back
          </div>
          <div className="dashboard-wrapper invoices-wrapper">
            {/* --- resources section --- */}

            <section className="section-invoices section-resources">
              <div className="invoices__title-btn">
                <div className="invoices__title-desc">
                  <h1 className="invoices__h1">Project Resources</h1>
                  <p className="invoices__desc">
                    Documentation, Template, URL Links
                  </p>
                </div>

                <button
                  type="button"
                  className="main-btn"
                  onClick={toggleResource}
                >
                  <img src={plus} alt="plus"></img>Add New
                </button>
              </div>

              {/* --- container --- */}
              <div className="invoices__container resources__container">
                <div className="resources__header">
                  <p className="resources__header-item">Item</p>
                  <p className="resources__header-item resources__header-item--category">
                    Category
                  </p>
                  <p className="resources__header-item">Link</p>
                </div>

                {/* --- resource list --- */}
                {/* --- list container1 --- */}
                <div className="resources__wrapper">

                  {resourceData && resourceData.map((item) => {

                    const currentCategory = categoryStyle[item.category] || categoryStyle["Design"];

                    return (
                    <>
                        {item.header && (
                      <div className="resources__category-header" key={item.id || item.item}>
                      
                    <img src={clipboard} alt="clipboard"></img> {item.header}
                  </div>
                 )}

                      
                  <div className="resources__list">
                    <div className="resouces__item-link">
                      <div className="invoices__list-item resources__list-item">
                        {item.item}
                      </div>
                      <div className={`${currentCategory.className}`}>{item.category}</div>
                      <div className="resources__list-item-url">
                        {item.Link}
                      </div>
                    </div>
                    <div className="resources__btns">
                      <div className="tasks__edit-btn" onClick={toggleEdit}></div>
                      <div
                        className="tasks__delete-btn"
                        onClick={toggleDelete}
                      ></div>
                    </div>
                      </div>
                    </>);    
                    
                  })}
                  </div>
       </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Resources;

           {/* <div className="resources__category-header">
                    <img src={clipboard} alt="clipboard"></img> Discovery Forms
                  </div>
        
                  <div className="resources__list">
                    <div className="resouces__item-link">
                      <div className="invoices__list-item resources__list-item">
                        UI/UX Discovery Form
                      </div>
                      <div className="overview__tag">Design</div>
                      <div className="resources__list-item-url">
                        https://www.dropbox.com/123456abcdefjk
                      </div>
                    </div>
                    <div className="resources__btns">
                      <div className="tasks__edit-btn" onClick={toggleEdit}></div>
                      <div
                        className="tasks__delete-btn"
                        onClick={toggleDelete}
                      ></div>
                    </div>
                  </div>

                </div> */}