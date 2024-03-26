const CompC = ({ day = "early" }) => {
  // get hour of the day 
  const hour = new Date().getHours();
  return hour < 12 ? <h1>Below 12:00 PM</h1> : <h2>Above 12:00 PM</h2>;
};

export default CompC;
