import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        }}
      ></div>

      <div className="journal__entry-body">
        <div className="journal__entry-title">A new day</div>
        <div className="journal__entry-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
