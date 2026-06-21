import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirm from "./DeleteComfirm";
import NewTask from "./NewTask";
import EditTask from "./EditTask";
import arrowBack from "../assets/icons/arrow_back.svg";
import deleteBtn from "../assets/icons/delete.svg";
import user from "../assets/icons/user-gray.svg";
import calendar from "../assets/icons/calendar.svg";
import clock from "../assets/icons/clock-forward.svg";
import list from "../assets/icons/list.svg";
import hourGlass from "../assets/icons/hourglass-outline.svg";
import check from "../assets/icons/check-broken.svg";
import plus from "../assets/icons/plus-01.svg";


function ProjectDetail() {
  // --- back button ---
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length <= 1) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  // --- add task modal ---
  const [taskOpen, setTaskOpen] = useState(false);
  const taskRef = useRef(null);
  const toggleTask = () => {
    setTaskOpen((prev) => !prev);
  };

  // --- edit task modal ---

  const [editTaskOpen, setEditTaskOpen] = useState(false);
  const editTaskRef = useRef(null);
  const toggleEditTask = () => {
    setEditTaskOpen((prev) => !prev);
  };

  // --- delete modal ---

  const [deleteOpen, setDeleteOpen] = useState(false);
  const deleteRef = useRef(null);
  const toggleDelete = () => {
    setDeleteOpen((prev) => !prev);
  };

  // --- fetch json ---

  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/details.json");
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        const data = await response.json();
        setProjectData(data);
        console.log(data);
      } catch (error) {
        console.error("failed to fetch", error);
      }
    }
    fetchData();
  }, []);

  const statusConfig = {
    "In progress": {
      className: "overview__progress-tag overview__progress-tag--purple",
      icon: clock,
      border: "tasks__card--purple",
    },
    Completed: {
      className: "overview__progress-tag overview__progress-tag--green",
      icon: check,
      border: "tasks__card",
    },
    "Not started": {
      className: "overview__progress-tag overview__progress-tag--gray",
      icon: hourGlass,
      border: "tasks__card--gray"
    },
  };

  const [activeTab, setActiveTab] = useState('All');


  return (
    <>
      <main>
        {taskOpen && <div className="overlay"></div>}
        {taskOpen && <NewTask taskOpen={toggleTask}  />}

        {editTaskOpen && <div className="overlay"></div>}
        {editTaskOpen && (
          <EditTask ref={editTaskRef} editTaskOpen={toggleEditTask} />
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
            <img src={arrowBack} alt="arrow" className="back-arrow"></img>
            Back
          </div>
          <div className="dashboard-wrapper">
            {/* --- projects description --- */}
            <section className="section-details">
              <div className="projects__header details__header">
                <div className="projects__h1-p details__h1-p">
                  <h1 className="details__h1">
                    E-Commerce Website Design & Development
                  </h1>
                  <p className="details__p">
                    Complete design and development of E-commerce platform with
                    modern UI/UX
                  </p>
                </div>
                <button
                  type="button"
                  className="main-btn delete-btn"
                  onClick={toggleDelete}
                >
                  Delete
                  <img src={deleteBtn} alt="delete"></img>
                </button>
              </div>

              <div className="details__tag-icon">
                <div className="details__icon-text">
                  <img src={user} alt="user"></img>
                  TechStyle
                </div>

                <div className="details__icon-text">
                  <img src={calendar} alt="calendar"></img>
                  Due: 2026/07/28
                </div>

                <div className="details__tag-wrapper">
                  <p className="overview__tag">Design</p>
                  <p className="overview__tag overview__tag--dev">
                    Development
                  </p>
                </div>
              </div>
            </section>

            {/* --- progress --- */}

            <section className="section-progress">
              <div className="progress_percentage-title">
                <div className="progress__percentage">
                  37 <span className="progress__small">%</span>
                </div>
                <p className="progress__title">Tasks Completed</p>
              </div>

              <div className="recent__progress-bar progress__progress-bar ">
                <div className="recent__current-progress progress__current-progress"></div>
              </div>

              <div className="projects__tag-text progress__tag-text">
                <p className="overview__progress-tag overview__progress-tag--purple">
                  <img src={clock} alt="clock"></img>
                  In Progress
                </p>
                <p className="projects__progress-text">Wireframing</p>
              </div>
            </section>

            {/* --- task list --- */}

            {/* --- task tab menus --- */}
            <section className="setcion__tasks">
              <div className="section__tabs-btn">
                <div className="tasks__tab-wrapper">
                  <div
                    className="overview__progress-tag tasks__tab"
                    onClick={() => setActiveTab("All")}
                  >
                    <img
                      src={list}
                      alt="list"
                      className="tasks__tab-icon"
                    ></img>
                    All
                    <div
                      className={`tasks__underbar ${
                        activeTab === "All" ? "" : "opacity"
                      }`}
                    ></div>
                  </div>

                  <div
                    className="overview__progress-tag tasks__tab tasks__tab--gray" 
                    onClick={() => setActiveTab("Not started")}
                  >
                    <img
                      src={hourGlass}
                      alt="hourglass"
                      className="tasks__tab-icon"
                    ></img>
                    Not Started
                    <div
                      className={`tasks__underbar tasks__underbar--gray ${
                        activeTab === "Not started" ? "" : "opacity"
                      }`}
                    ></div>
                  </div>

                  <div
                    className="overview__progress-tag tasks__tab tasks__tab--purple"
                    onClick={() => setActiveTab("In progress")}
                  >
                    <img
                      src={clock}
                      alt="clock"
                      className="tasks__tab-icon"
                    ></img>
                    In Progress
                    <div
                      className={`tasks__underbar tasks__underbar--purple ${
                        activeTab === "In progress" ? "" : "opacity"
                      }`}
                    ></div>
                  </div>

                  <div
                    className="overview__progress-tag tasks__tab tasks__tab--green"
                    onClick={() => setActiveTab("Completed")}
                  >
                    <img
                      src={check}
                      alt="check"
                      className="tasks__tab-icon"
                    ></img>
                    Completed
                    <div
                      className={`tasks__underbar tasks__underbar--green ${
                        activeTab === "Completed" ? "" : "opacity"
                      }`}
                    ></div>
                  </div>
                </div>

                <button
                  type="button"
                  className="main-btn  main-btn--tab"
                  onClick={toggleTask}
                >
                  <img src={plus} alt="plus"></img>Add Task
                </button>
              </div>

              {/* --- task list cards --- */}
         
              <div className="tasks__cards--container">
              

                {/* --- card-item --- */}
                {projectData &&
                  projectData
                    .filter((item) => {
                      if (activeTab === "All") return true;
                      return item.status === activeTab;
                    })

                    .map((item) => {
                      const currentStatus =
                        statusConfig[item.status] ||
                        statusConfig["Not Started"];

                      return (
                        <div
                          className={`tasks__card ${currentStatus.border} key={item.id} || item.title}`}
                        >
                          <div className="tasks__title-desc">
                            <p className="tasks__title">{item.title}</p>
                            <p className="tasks__description">{item.desc}</p>
                          </div>

                          <div className="tasks__due">
                            <img src={calendar} alt="calendar"></img>
                            Due: {item.due}
                          </div>

                          <p
                            className={`
                        overview__progress-tag ${currentStatus.className}`}
                          >
                            <img
                              src={`${currentStatus.icon}`}
                              alt="check"
                            ></img>
                            {item.status}
                          </p>

                          <div className="tasks__btns">
                            <div
                              className="tasks__edit-btn"
                              onClick={toggleEditTask}
                            ></div>
                            <div
                              className="tasks__delete-btn"
                              onClick={toggleDelete}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectDetail;
