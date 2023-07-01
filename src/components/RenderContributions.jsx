import { addDays, format } from "date-fns";

const RenderContributions = ({state}) => {
  const dates = Object.keys(state).map((date) => new Date(date));
  const startDate = new Date(Math.min(...dates));
  const endDate = new Date(Math.max(...dates));
  const dateRange = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    dateRange.push(formattedDate);
    currentDate = addDays(currentDate, 1);
  }

  return dateRange.map((date) => {
    const count = state[date] || 0;
    if (count >= 30) {
      return (
        <div className="contribution more30">
          <div className="contributionDate">
            <p>{count} contributions</p>
            <p>{date}</p>
          </div>
        </div>)
    } 
    else if (count >= 20) {
      return (
        <div className="contribution more20">
          <div className="contributionDate">
            <p>{count} contributions</p>
            <p>{date}</p>
          </div>
        </div>)
    }
    else if (count >= 10) {
      return (
        <div className="contribution more10">
          <div className="contributionDate">
            <p>{count} contributions</p>
            <p>{date}</p>
          </div>
        </div>)
    }
    else if (count > 0) {
      return (
        <div className="contribution more0">
          <div className="contributionDate">
            <p>{count} contributions</p>
            <p>{date}</p>
          </div>
        </div>)
    }
    return (
      <div className="contribution">
        <div className="contributionDate">
            <p>{count} contributions</p>
            <p>{date}</p>
        </div>
      </div>)
  });
}

export default RenderContributions;