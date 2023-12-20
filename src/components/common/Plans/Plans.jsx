import React from "react";
import "./Plans.css";

const Plans = ({ monthlyPlan }) => {
  const calcYrplan = (monthlyValue) => {
    const value = monthlyValue * 12;
    return Math.round((value + Number.EPSILON) * 100) / 100;
  };
  const monthlyPlanData = [
    {
      id: "1",
      title: "Basic",
      previousPrize: 89.99,
      currentPrize: 9.99,
      period: "mo",
      users: "Upto 25 Users",
      storage: "Upto 25gb Storage",
      support: "Email Support",
      buttonColor: "#FFE7A9",
    },
    {
      id: "2",
      title: "Standard",
      previousPrize: 189.99,
      currentPrize: 99.99,
      period: "mo",
      users: "Upto 50 Users",
      storage: "Upto 60gb Storage",
      support: "Email+Chat Support",
      buttonColor: "#D17979",
    },
    {
      id: "3",
      title: "Premium",
      previousPrize: 389.99,
      currentPrize: 199.99,
      period: "mo",
      users: "Upto 75 Users",
      storage: "Upto 100gb Storage",
      support: "Email+Chat+Whatsapp Support",
      buttonColor: "#C98CDE",
    },
  ];
  const yearlyPlanData = [
    {
      id: "1",
      title: "Basic",
      previousPrize: calcYrplan(89.99),
      currentPrize: calcYrplan(9.99),
      period: "yr",
      users: "Upto 25 Users per month",
      storage: "Upto 25gb Storage per month",
      support: "Email Support",
      buttonColor: "#FFE7A9",
    },
    {
      id: "2",
      title: "Standard",
      previousPrize: calcYrplan(189.99),
      currentPrize: calcYrplan(99.99),
      period: "yr",
      users: "Upto 50 Users per month",
      storage: "Upto 60gb Storage per month",
      support: "Email+Chat Support",
      buttonColor: "#D17979",
    },
    {
      id: "3",
      title: "Premium",
      previousPrize: calcYrplan(389.99),
      currentPrize: calcYrplan(199.99),
      period: "yr",
      users: "Upto 75 Users per month",
      storage: "Upto 100gb Storage per month",
      support: "Email+Chat+Whatsapp Support",
      buttonColor: "#C98CDE",
    },
  ];

  let planDatas;
  const handlePlan = () => {
    if (monthlyPlan) {
      planDatas = monthlyPlanData;
    } else {
      planDatas = yearlyPlanData;
    }
  };

  handlePlan();

  return (
    <>
      {planDatas.map((plan) => (
        <div className="plans" key={plan.id}>
          <div className="price">
            <h1>{plan.title}</h1>
            <p>
              $ {plan.previousPrize}/{plan.period}
            </p>
            <h2>
              $ {plan.currentPrize}/{plan.period}
            </h2>
            <button
              className="get_started_btn"
              style={{ background: plan.buttonColor }}
            >
              <p>Get Started</p>
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </button>
          </div>
          <div className="features">
            <p>What you'll get :</p>
            <ul>
              <li>
                <i className="material-symbols-outlined">person</i>
                <p>{plan.users}</p>
              </li>
              <li>
                <i className="material-symbols-outlined">cloud_upload</i>
                <p>{plan.storage}</p>
              </li>
              <li>
                <i className="material-symbols-outlined">mail</i>
                <p>{plan.support}</p>
              </li>
            </ul>
            <div className="features_explore">
              <h5>EXPLORE FEATURES</h5>
              <i
                className="material-symbols-outlined"
                style={{ color: plan.buttonColor }}
              >
                arrow_right
              </i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Plans;
