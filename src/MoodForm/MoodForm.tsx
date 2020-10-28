import React, { useState } from "react";
import moment from "moment";

const MoodForm = () => {
  const [start, setStart] = useState("");
  const [today, setToday] = useState(moment().format("YYYY-MM-DD"));
  const [mood, setMood] = useState("")
  const [anxiety, setAnxiety] = useState("")

  const calculateDay = (start: string) => {
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
        <div style={styles.formInput}>
        {start && <div> Day {calculateDay(start)} </div>}
        </div>
        <div style={styles.formInput}>
        <label>
          How would you rate your mood?
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </label>
        </div>
        <div style={styles.formInput}>
        <label>
          How would you rate your anxiety?
          <select value={anxiety} onChange={(e) => setAnxiety(e.target.value)}>
            <option></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </label>
        </div>
        <div style={styles.formInput}>
        <button type='submit'>Submit</button>
        </div>
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
