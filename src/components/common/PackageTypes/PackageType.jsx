import React from "react";
import "./PackageType.css";
const PackageType = () => {
  const packages = [
    {
      id: "1",
      availability: "Free Forever",
      title: "Free Starter",
      caption:
        "The quickest and easiest way to try Protocols with basic functionalities",
      button: "Get Started",
      users: "Upto 8 Users",
      storage: "Upto 3gb Storage",
      support: "Email Support",
      benefits:
        "Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included",
      buttonColor: "#C1F88A",
    },
    {
      id: "2",
      availability: "Let's Connect",
      title: "Enterprise Plan",
      caption:
        "Effortlessly customize and fine-tune services as your need's shift, ensuring the perfect tools for success",
      button: "Contact Us",
      users: "More than 75 Users",
      storage: "",
      support: "",
      benefits: "Customization of all other features",
      buttonColor: "#8AB8FF",
    },
  ];

  const isEmpty = (value) => {
    return value === undefined || value === null || value === "";
  };

  return (
    <>
      {packages.map((packageDetails) => (
        <div className="package_type_card" key={packageDetails.id}>
          <div className="package_title">
            <span style={{ background: packageDetails.buttonColor }}>
              {packageDetails.availability}
            </span>
            <h1>{packageDetails.title}</h1>
            <p>{packageDetails.caption}</p>
            <button
              className="package_getStarted"
              style={{ background: packageDetails.buttonColor }}
            >
              {packageDetails.button}
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </button>
          </div>
          <div className="package_features">
            <p>What you'll get: </p>
            <ul>
              {!isEmpty(packageDetails.users) && (
                <li>
                  <i className="material-symbols-outlined">person</i>
                  <p>{packageDetails.users}</p>
                </li>
              )}
              {!isEmpty(packageDetails.storage) && (
                <li>
                  <i className="material-symbols-outlined">cloud_upload</i>
                  <p>{packageDetails.storage}</p>
                </li>
              )}
              {!isEmpty(packageDetails.support) && (
                <li>
                  <i className="material-symbols-outlined">mail</i>
                  <p>{packageDetails.support}</p>
                </li>
              )}
              {!isEmpty(packageDetails.benefits) && (
                <li>
                  <i className="material-symbols-outlined">done_all</i>
                  <p>{packageDetails.benefits}</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PackageType;
