import React, { useState } from "react";
import "./MainPage.css";
import Plans from "../../common/Plans/Plans";
import PackageType from "../../common/PackageTypes/PackageType";

const MainPage = () => {
  const [monthlyPlan, setMonthlyPlan] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const handleYearlyPlan = () => {
    setMonthlyPlan(false);
    setSelectedPeriod("yearly")
  };

  const handleMonthlyPlan = () => {
    setMonthlyPlan(true);
    setSelectedPeriod("monthly")
  };

  return (
    <div className="main_page">
      <div className="mainpage_title">
        <h1>Choose a plan that's just right for you !</h1>
        <div className="period_btn">
          <button
            onClick={() => handleMonthlyPlan()}
            className={selectedPeriod === "monthly" ? "selected" : ""}
          >
            Monthly
          </button>
          <button
            onClick={() => handleYearlyPlan()}
            className={selectedPeriod === "yearly" ? "selected" : ""}
          >
            Annually
          </button>
        </div>
      </div>
      <div className="plan_card">
        <Plans monthlyPlan={monthlyPlan} setMonthlyPlan={setMonthlyPlan} />
      </div>
      <div className="package_card">
        <PackageType />
      </div>
      <p className="instruction">
        *some unique features are provided as add-ons with individual plans for
        each features
      </p>
    </div>
  );
};

export default MainPage;
