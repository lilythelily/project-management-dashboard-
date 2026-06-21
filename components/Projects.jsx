import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NewTask from "./NewTask";
import NewProject from "./NewProject";
import NewClient from "./NewClient";
import EditClient from "./EditClient";
import DeleteConfirm from "./DeleteComfirm";
import backArrow from "../assets/icons/arrow_back.svg";
import plus from "../assets/icons/plus-01.svg";
import clock from "../assets/icons/clock-forward.svg";

function Projects() {
  // --- add task modal ---
  const [taskOpen, setTaskOpen] = useState(false);
  const taskRef = useRef(null);
  const toggleTask = () => {
    setTaskOpen((prev) => !prev);
  };

  // --- task checkbox ---
  const [isChecked, setIsChecked] = useState(true);
  const toggleChecked = () => {
    setIsChecked((prev) => !prev);
  };
  const [isUnchecked, setIsUnchecked] = useState(true);
  const toggleUnchecked = () => {
    setIsUnchecked((prev) => !prev);
  };

  // --- add project modal ---
  const [projectOpen, setProjectOpen] = useState(false);
  const projectRef = useRef(null);
  const toggleProject = () => {
    setProjectOpen((prev) => !prev);
  };

  // --- add client modal ---
  const [clientOpen, setClientOpen] = useState(false);
  const clientRef = useRef(null);
  const toggleClient = () => {
    setClientOpen((prev) => !prev);
  };

  // --- edit client modal ---
  const [editOpen, setEditOpen] = useState(false);
  const editRef = useRef(null);
  const toggleEdit = () => {
    setEditOpen((prev) => !prev);
  };

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
    setEditOpen(false);
  };

  return (
    <>
      <main>
        {taskOpen && <div className="overlay"></div>}
        {taskOpen && <NewTask ref={taskRef} taskOpen={toggleTask} />}

        {projectOpen && <div className="overlay"></div>}
        {projectOpen && (
          <NewProject ref={projectRef} projectOpen={toggleProject} />
        )}

        {clientOpen && <div className="overlay"></div>}
        {clientOpen && <NewClient ref={clientRef} clientOpen={toggleClient} />}

        {editOpen && <div className="overlay"></div>}
        {editOpen && (
          <EditClient
            ref={editRef}
            editOpen={toggleEdit}
            deleteOpen={toggleDelete}
          />
        )}

        {deleteOpen && <div className="overlay"></div>}
        {deleteOpen && (
          <DeleteConfirm ref={deleteRef} deleteOpen={toggleDelete} />
        )}

        <ul className="dashboard-tab">
          <Link to="/" className="tab__link">
            <li className="tab__item">Dashboard</li>
          </Link>
          <Link to="/projects" className="tab__link">
            <li className="tab__item tab__item2 tab__item--active">Projects</li>
          </Link>
          <Link to="/invoices" className="tab__link">
            <li className="tab__item tab__item3">Invoices</li>
          </Link>
        </ul>

        {/* === dashboard === */}

        <div className="dashboard-container project-container">
          {/* -- back button -- */}
          <div className="back-text" onClick={handleBack}>
            <img src={backArrow} alt="arrow" className="back-arrow"></img>
            Back
          </div>
          <div className="dashboard-wrapper project-wrapper">
            {/* --- projects --- */}
            <section className="section-projects">
              <div className="projects__header">
                <div className="projects__h1-p">
                  <h1>Projects</h1>
                  <p className="projects__p">Manage all projects</p>
                </div>
                <button
                  type="button"
                  className="main-btn"
                  onClick={toggleProject}
                >
                  <img src={plus} alt="plus"></img>New Project
                </button>
              </div>
              {/* --- cards --- */}

              <div className="projects__cards-container">
                {/* --- card 1--- */}
                <Link to="/details" className="link-card">
                  <div className="recent__card projects__card">
                    <div className="projects__title-tags">
                      <div className="projects__title-client">
                        <p className="recent__title projects__title">
                          E-Commerce Website Design & Development
                        </p>
                        <p className="projects__client">TechStyle</p>
                      </div>
                      <div className="projects__tag-wrapper">
                        <p className="overview__tag">Design</p>
                        <p className="overview__tag overview__tag--dev">
                          Development
                        </p>
                      </div>
                    </div>

                    <p className="projects__description">
                      Complete design and development of E-commerce platform
                      with modern UI/UX
                    </p>

                    <div className="recent__bar-number projects__bar-number">
                      <div className="recent__progress-bar projects__progress-bar">
                        <div className="recent__current-progress projects__current-progress"></div>
                      </div>
                      <p className="recent__tasks projects__tasks">
                        4/15
                        <span className="recent__span projects__span">
                          Tasks
                        </span>
                      </p>
                    </div>

                    <div className="projects__tag-text">
                      <p className="overview__progress-tag overview__progress-tag--purple">
                        <img src={clock} alt="clock"></img>
                        In Progress
                      </p>
                      <p className="projects__progress-text">Wireframing</p>
                    </div>
                  </div>
                </Link>
                {/* --- card 2--- */}
                <div className="recent__card projects__card">
                  <div className="projects__title-tags">
                    <div className="projects__title-client">
                      <p className="recent__title projects__title">
                        Maple Syrup Branding
                      </p>
                      <p className="projects__client">Maple's</p>
                    </div>
                    <div className="projects__tag-wrapper">
                      <p className="overview__tag">Design</p>
                      <p className="overview__tag overview__tag--branding">
                        Branding
                      </p>
                    </div>
                  </div>

                  <p className="projects__description">
                    Redesign organic maple syrup brand with new logo and visual
                    identities
                  </p>

                  <div className="recent__bar-number projects__bar-number">
                    <div className="recent__progress-bar projects__progress-bar">
                      <div className="recent__current-progress projects__current-progress projects__current-progress2"></div>
                    </div>
                    <p className="recent__tasks projects__tasks">
                      7/10
                      <span className="recent__span projects__span">Tasks</span>
                    </p>
                  </div>

                  <div className="projects__tag-text">
                    <p className="overview__progress-tag overview__progress-tag--purple">
                      <img src={clock} alt="clock"></img>
                      In Progress
                    </p>
                    <p className="projects__progress-text">Final Feedback</p>
                  </div>
                </div>

                {/* --- card 3--- */}
                <div className="recent__card projects__card">
                  <div className="projects__title-tags">
                    <div className="projects__title-client">
                      <p className="recent__title projects__title">
                        Supplement Packaging Design
                      </p>
                      <p className="projects__client">Hopkins</p>
                    </div>
                    <div className="projects__tag-wrapper">
                      <p className="overview__tag">Design</p>
                      <p className="overview__tag overview__tag--branding">
                        Branding
                      </p>
                    </div>
                  </div>

                  <p className="projects__description">
                    Packaging design for herbal supplement
                  </p>

                  <div className="recent__bar-number projects__bar-number">
                    <div className="recent__progress-bar projects__progress-bar">
                      <div className="recent__current-progress projects__current-progress projects__current-progress3"></div>
                    </div>
                    <p className="recent__tasks projects__tasks">
                      1/11
                      <span className="recent__span projects__span">Tasks</span>
                    </p>
                  </div>

                  <div className="projects__tag-text">
                    <p className="overview__progress-tag overview__progress-tag--purple">
                      <img src={clock} alt="clock"></img>
                      In Progress
                    </p>
                    <p className="projects__progress-text">Moodboard</p>
                  </div>
                </div>
              </div>
            </section>

            {/* --- needs action --- */}

            <div className="action-clients-wrapper">
              <section className="section-tasks section-action">
                <div className="tasks__title action__title">
                  <h2 className="tasks__h2 action__h2">Action Needed</h2>
                  <button
                    type="button"
                    className="main-btn"
                    onClick={toggleTask}
                  >
                    <img src={plus} alt="plus"></img>Add Task
                  </button>
                </div>

                <div className="tasks__dashboard-card action__card">
                  <div className="tasks__table-header action__table-header">
                    <p className="tasks__item action__item">Item</p>
                    <p className="tasks__item action__item">Client</p>
                    <p className="tasks__item action__item">Due</p>
                    <p className="tasks__item action__item">Status</p>
                  </div>
                  <div className="tasks__table-wrapper action__table-wrapper">
                    <div className="tasks__table--content action__table--content">
                      <p
                        className={
                          isChecked
                            ? "tasks__item--content tasks__item--content-done"
                            : "tasks__item--content"
                        }
                      >
                        Moodboard
                      </p>
                      <p
                        className={
                          isChecked
                            ? "tasks__item--content tasks__item--content-done"
                            : "tasks__item--content"
                        }
                      >
                        Hopkins
                      </p>
                      <p
                        className={
                          isChecked
                            ? "tasks__item--content tasks__item--content-done"
                            : "tasks__item--content"
                        }
                      >
                        2026/04/19
                      </p>
                      <div className="tasks__item--content2">
                        <div
                          className={
                            isChecked
                              ? "tasks__item--check tasks__item--check-done"
                              : "tasks__item--check"
                          }
                          onClick={toggleChecked}
                        ></div>
                      </div>
                    </div>
                    {/* --- item 2 --- */}
                    <div className="tasks__table--content action__table--content">
                      <p
                        className={
                          isUnchecked
                            ? "tasks__item--content"
                            : "tasks__item--content tasks__item--content-done"
                        }
                      >
                        Unit Test
                      </p>
                      <p
                        className={
                          isUnchecked
                            ? "tasks__item--content"
                            : "tasks__item--content tasks__item--content-done"
                        }
                      >
                        TechStyle
                      </p>
                      <p
                        className={
                          isUnchecked
                            ? "tasks__item--content"
                            : "tasks__item--content tasks__item--content-done"
                        }
                      >
                        2026/04/26
                      </p>
                      <div className="tasks__item--content2 action__item--content2">
                        <div
                          className={
                            isUnchecked
                              ? "tasks__item--check"
                              : "tasks__item--check tasks__item--check-done"
                          }
                          onClick={toggleUnchecked}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- clients --- */}

              <section className="section-clients">
                <div className="tasks__title clients__title">
                  <h2 className="tasks__h2 action__h2">Clients</h2>
                  <button
                    type="button"
                    className="main-btn"
                    onClick={toggleClient}
                  >
                    <img src={plus} alt="plus"></img>Add New
                  </button>
                </div>

                {/* --- client cards --- */}
                <div className="clients__cards-container">
                  {/* --- card 1 --- */}
                  <div className="clients__card" onClick={toggleEdit}>
                    {/* --- line 1 --- */}
                    <p className="clients__name">TechStyle</p>
                    <div className="clients__icon-text">
                      <div className="clients__icon"></div>
                      <p className="clients__text">techstyle@tstyle.com</p>
                    </div>
                    {/* --- line 2 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--2"></div>
                      <p className="clients__text">@techstyle</p>
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

                  {/* --- card 2 --- */}
                  <div className="clients__card">
                    {/* --- line 1 --- */}
                    <p className="clients__name">Maple's</p>
                    <div className="clients__icon-text">
                      <div className="clients__icon"></div>
                      <p className="clients__text">inquiry@maples.com</p>
                    </div>
                    {/* --- line 2 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--2"></div>
                      <p className="clients__text">@maples</p>
                    </div>
                    {/* --- line 3 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--3"></div>
                      <p className="clients__text">0123-4567-8910</p>
                    </div>
                    {/* --- line 4 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--4"></div>
                      <p className="clients__text">Thomas Vaugh</p>
                    </div>
                  </div>
                  {/* --- card 3 --- */}
                  <div className="clients__card">
                    {/* --- line 1 --- */}
                    <p className="clients__name">Hopkins</p>
                    <div className="clients__icon-text">
                      <div className="clients__icon"></div>
                      <p className="clients__text">jj@hopkins.com</p>
                    </div>
                    {/* --- line 2 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--2"></div>
                      <p className="clients__text">@hopkins</p>
                    </div>
                    {/* --- line 3 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--3"></div>
                      <p className="clients__text">0123-4567-8910</p>
                    </div>
                    {/* --- line 4 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--4"></div>
                      <p className="clients__text">Mildred Tse</p>
                    </div>
                  </div>

                  {/* --- card 4 --- */}
                  <div className="clients__card">
                    {/* --- line 1 --- */}
                    <p className="clients__name">Cafe Tree</p>
                    <div className="clients__icon-text">
                      <div className="clients__icon"></div>
                      <p className="clients__text">contact@ctree.com</p>
                    </div>
                    {/* --- line 2 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--2"></div>
                      <p className="clients__text">@ctree</p>
                    </div>
                    {/* --- line 3 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--3"></div>
                      <p className="clients__text">0123-4567-8910</p>
                    </div>
                    {/* --- line 4 --- */}
                    <div className="clients__icon-text">
                      <div className="clients__icon clients__icon--4"></div>
                      <p className="clients__text">Gregory Mann</p>
                    </div>
                  </div>

                  {/* --- container ends --- */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
