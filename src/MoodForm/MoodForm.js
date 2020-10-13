import React, { useState } from "react";

const MoodForm = () => {
  const [start, setStart] = useState("");

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
