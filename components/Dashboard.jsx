import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NewTask from "./NewTask";
import plus from "../assets/icons/plus-01.svg";
import hourglass from "../assets/icons/hourglass-outline.svg"
import clock from "../assets/icons/clock-forward.svg"
import check from "../assets/icons/check-broken.svg"

function Dashboard() {
  const [displayWeekly, setDisplayWeekly] = useState(false);
  const [displayDaily, setDisplayDaily] = useState(false);
  const [displayMonthly, setDisplayMonthly] = useState(true);
  const [monthlyActive, setMonthlyActive] = useState(true);
  const [weeklyActive, setWeeklyActive] = useState(false);
  const [dailyActive, setDailyActive] = useState(false);

  const toggleMonthly = () => {
    setDisplayWeekly(false);
    setDisplayMonthly(true);
    setDisplayDaily(false);

    setMonthlyActive(true);
    setWeeklyActive(false);
    setDailyActive(false);
  };

  const toggleWeekly = () => {
    setDisplayWeekly(true);
    setDisplayMonthly(false);
    setDisplayDaily(false);

    setMonthlyActive(false);
    setWeeklyActive(true);
    setDailyActive(false);
  };

  const toggleDaily = () => {
    setDisplayWeekly(false);
    setDisplayMonthly(false);
    setDisplayDaily(true);

    setMonthlyActive(false);
    setWeeklyActive(false);
    setDailyActive(true);
  };

  const [taskOpen, setTaskOpen] = useState(false);
  const taskRef = useRef(null);
  const toggleTask = () => {
    setTaskOpen((prev) => !prev);
  }

  const [isChecked, setIsChecked] = useState(true);
  const toggleChecked = () => {
    setIsChecked((prev) => !prev);
  }
  const [isUnchecked, setIsUnchecked] = useState(true);
  const toggleUnchecked = () => {
    setIsUnchecked((prev) => !prev);
  }

  return (
    <>
      <main>
        {taskOpen && <div className="overlay"></div>}
        {taskOpen && <NewTask ref={taskRef} taskOpen={toggleTask} />}
        <ul className="dashboard-tab">
          <Link to="/" className="tab__link">
            <li className="tab__item tab__item--active">Dashboard</li>
          </Link>
          <Link to="/projects" className="tab__link">
            <li className="tab__item tab__item2">Projects</li>
          </Link>
          <Link to="/invoices" className="tab__link">
            <li className="tab__item tab__item3">Invoices</li>
          </Link>
        </ul>

        {/* === dashboard === */}

        <div className="dashboard-container">
          <div className="dashboard-wrapper">
            {/* --- overview --- */}
            <section className="section-overview">
              <div className="overview__title">
                <div className="overview__h1-p">
                  <h1>Overview</h1>
                  <p className="overview__p">
                    Track your projects and workflow progress
                  </p>
                </div>
                <div className="overview__period">
                  <p
                    className={
                      monthlyActive
                        ? "overview__period-tag overview__period-tag--active"
                        : "overview__period-tag"
                    }
                    onClick={toggleMonthly}
                  >
                    Monthly
                  </p>
                  <p
                    className={
                      weeklyActive
                        ? "overview__period-tag overview__period-tag--active"
                        : "overview__period-tag"
                    }
                    onClick={toggleWeekly}
                  >
                    Weekly
                  </p>
                  <p
                    className={
                      dailyActive
                        ? "overview__period-tag overview__period-tag--active"
                        : "overview__period-tag"
                    }
                    onClick={toggleDaily}
                  >
                    Daily
                  </p>
                </div>
              </div>

              {/* --- monthly card --- */}

              {displayMonthly && (
                <div className="overview__card-container">
                  <div className="overview__card">
                    <p className="overview__card-title">Total Projects</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">8</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag">Design</p>
                        <p className="overview__tag overview__tag--dev">
                          Development
                        </p>
                        <p className="overview__tag overview__tag--branding">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card2-- */}
                  <div className="overview__card overview__card--2">
                    <p className="overview__card-title">Action Needed</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">5</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag overview__tag--dev">
                          Revision
                        </p>
                        <p className="overview__tag overview__tag--branding">
                          Invoice
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card3-- */}
                  <div className="overview__card overview__card--3">
                    <p className="overview__card-title">In progress</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">2</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag overview__tag--dev">
                          Development
                        </p>
                        <p className="overview__tag overview__tag--branding">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card4-- */}
                  <div className="overview__card overview__card--4">
                    <p className="overview__card-title">Tasks</p>
                    <div className="overview__progress-wrapper">
                      <div className="overview__tag-number">
                        <p className="overview__progress-tag">
                          <img
                            src={hourglass}
                            alt="hourglass"
                          ></img>
                          Not Started
                        </p>
                        <p className="overview__task-number">24</p>
                      </div>

                      <div className="overview__tag-number">
                        <p className="overview__progress-tag overview__progress-tag--purple">
                          <img
                            src={clock}
                            alt="clock"
                          ></img>
                          In Progress
                        </p>
                        <p className="overview__task-number">12</p>
                      </div>

                      <div className="overview__tag-number">
                        <p className="overview__progress-tag overview__progress-tag--green">
                          <img
                            src={check}
                            alt="check"
                          ></img>
                          Completed
                        </p>
                        <p className="overview__task-number">10</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* --- weekly card --- */}

              {displayWeekly && (
                <div className="overview__card-container overview__card-container--weekly">
                  <div className="overview__card">
                    <p className="overview__card-title">Total Projects</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">4</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag">Design</p>

                        <p className="overview__tag overview__tag--branding">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card2-- */}
                  <div className="overview__card overview__card--2">
                    <p className="overview__card-title">Action Needed</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">1</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag overview__tag--dev">
                          Revision
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card3-- */}
                  <div className="overview__card overview__card--3">
                    <p className="overview__card-title">In progress</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">3</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag">Design</p>
                        <p className="overview__tag overview__tag--branding">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card4-- */}
                  <div className="overview__card overview__card--4">
                    <p className="overview__card-title">Tasks</p>
                    <div className="overview__progress-wrapper">
                      <div className="overview__tag-number">
                        <p className="overview__progress-tag">
                          <img
                            src={hourglass}
                            alt="hourglass"
                          ></img>
                          Not Started
                        </p>
                        <p className="overview__task-number">12</p>
                      </div>

                      <div className="overview__tag-number">
                        <p className="overview__progress-tag overview__progress-tag--purple">
                          <img
                            src={clock}
                            alt="clock"
                          ></img>
                          In Progress
                        </p>
                        <p className="overview__task-number">8</p>
                      </div>

                      <div className="overview__tag-number">
                        <p className="overview__progress-tag overview__progress-tag--green">
                          <img
                            src={check}
                            alt="check"
                          ></img>
                          Completed
                        </p>
                        <p className="overview__task-number">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* --- daily card --- */}

              {displayDaily && (
                <div className="overview__card-container overview__card-container--daily">
                  <div className="overview__card">
                    <p className="overview__card-title">Total Projects</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">1</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag overview__tag--dev">
                          Development
                        </p>
                        <p className="overview__tag overview__tag--branding">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card2-- */}
                  <div className="overview__card overview__card--2">
                    <p className="overview__card-title">Action Needed</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">3</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag overview__tag--dev">
                          Revision
                        </p>
                        <p className="overview__tag overview__tag--branding">
                          Invoice
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card3-- */}
                  <div className="overview__card overview__card--3">
                    <p className="overview__card-title">In progress</p>
                    <div className="overview__number-tags">
                      <p className="overview__number">1</p>
                      <div className="overview__tag-wrapper">
                        <p className="overview__tag overview__tag--dev">
                          Development
                        </p>
                        <p className="overview__tag overview__tag--branding">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --card4-- */}
                  <div className="overview__card overview__card--4">
                    <p className="overview__card-title">Tasks</p>
                    <div className="overview__progress-wrapper">
                      <div className="overview__tag-number">
                        <p className="overview__progress-tag">
                          <img
                            src={hourglass}
                            alt="hourglass"
                          ></img>
                          Not Started
                        </p>
                        <p className="overview__task-number">18</p>
                      </div>

                      <div className="overview__tag-number">
                        <p className="overview__progress-tag overview__progress-tag--purple">
                          <img
                            src={clock}
                            alt="clock"
                          ></img>
                          In Progress
                        </p>
                        <p className="overview__task-number">5</p>
                      </div>

                      <div className="overview__tag-number">
                        <p className="overview__progress-tag overview__progress-tag--green">
                          <img
                            src={check}
                            alt="check"
                          ></img>
                          Completed
                        </p>
                        <p className="overview__task-number">3</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* --- cards end --- */}
            </section>

            {/* --- recent project --- */}

            <Link to="/details" className="recent-link">
              <section className="section-recent">
                <h2 className="h2 recent__h2">Recent projects</h2>
                <div className="recent__card">
                  <div className="recent__title-client">
                    <p className="recent__title">
                      E-Commerce Website Design & Development
                    </p>
                    <p className="recent__client">TechStyle</p>
                  </div>

                  <div className="recent__progress-bar-arrow">
                    <div className="recent__bar-number">
                      <div className="recent__progress-bar">
                        <div className="recent__current-progress"></div>
                      </div>
                      <p className="recent__tasks">
                        4/15<span className="recent__span">Tasks</span>
                      </p>
                    </div>
                    <div className="circle-arrow"></div>
                  </div>
                </div>
              </section>
            </Link>

            {/* --- performance --- */}
            <div className="performance-task">
              <section className="section-performance">
                <div className="performance__title">
                  <div className="performance__h2-year">
                    <h2 className="h2 performance__h2">Performance</h2>

                    <p className="performance__year">2026</p>
                  </div>
                  <p className="performance__currency">(in USD 1,000)</p>
                </div>

                <div className="performance__card">
                  <div className="performance__vertical">
                    <p className="vertical-number">5</p>
                    <p className="vertical-number">4</p>
                    <p className="vertical-number">3</p>
                    <p className="vertical-number">2</p>
                    <p className="vertical-number">1</p>
                  </div>
                  <div className="performance__chart-month">
                    <div className="performance__chart"></div>
                    <div className="performance__horizontal">
                      <p className="horizontal-month">Jan</p>
                      <p className="horizontal-month">Feb</p>
                      <p className="horizontal-month">Mar</p>
                      <p className="horizontal-month">Apr</p>
                      <p className="horizontal-month">May</p>
                      <p className="horizontal-month">Jun</p>
                      <p className="horizontal-month">Jul</p>
                      <p className="horizontal-month">Sep</p>
                      <p className="horizontal-month">Oct</p>
                      <p className="horizontal-month">Nov</p>
                      <p className="horizontal-month">Dec</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- tasks --- */}

              <section className="section-tasks">
                <div className="tasks__title">
                  <h2 className="tasks__h2">Tasks</h2>
                  <button
                    type="button"
                    className="main-btn"
                    onClick={toggleTask}
                  >
                    <img src={plus} alt="plus"></img>Add
                    Task
                  </button>
                </div>

                <div className="tasks__dashboard-card">
                  <div className="tasks__table-header">
                    <p className="tasks__item">Item</p>
                    <p className="tasks__item">Client</p>
                    <p className="tasks__item">Due</p>
                    <p className="tasks__item">Status</p>
                  </div>
                  <div className="tasks__table-wrapper">
                    <div className="tasks__table--content">
                      <p
                        className={
                          isChecked
                            ? "tasks__item--content tasks__item--content-done"
                            : "tasks__item--content"
                        }
                      >
                        Proposal
                      </p>
                      <p
                        className={
                          isChecked
                            ? "tasks__item--content tasks__item--content-done"
                            : "tasks__item--content"
                        }
                      >
                        VP.Co
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
                    <div className="tasks__table--content">
                      <p
                        className={
                          isUnchecked
                            ? "tasks__item--content"
                            : "tasks__item--content tasks__item--content-done"
                        }
                      >
                        Moodboard & Ideation
                      </p>
                      <p
                        className={
                          isUnchecked
                            ? "tasks__item--content"
                            : "tasks__item--content tasks__item--content-done"
                        }
                      >
                        Hopkins
                      </p>
                      <p
                        className={
                          isUnchecked
                            ? "tasks__item--content"
                            : "tasks__item--content tasks__item--content-done"
                        }
                      >
                        2026/04/22
                      </p>
                      <div className="tasks__item--content2">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
