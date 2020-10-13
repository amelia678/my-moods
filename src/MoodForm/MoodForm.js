import React, { useState } from "react";
import moment from "moment";

const MoodForm = () => {
  const [start, setStart] = useState("");
  const [today, setToday] = useState(moment().format("YYYY-MM-DD"));

  const calculateDay = (start) => {
    const startDate = moment(start);
    const endDate = moment(today);

    return endDate.diff(startDate, "days");
  };

  return (
    <div>
      <form>
        <label>
          When did your last period start?
          <div style={styles.formInput}>
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            ></input>
          </div>
        </label>
        {start && <div> Day {calculateDay(start)} </div>}
      </form>
    </div>
  );
};

const styles = {
  formInput: {
    padding: 5,
  },
};

export default MoodForm;
