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

    const contributionClass =
      count >= 30
        ? "contribution more30"
        : count >= 20
        ? "contribution more20"
        : count >= 10
        ? "contribution more10"
        : count > 0
        ? "contribution more0"
        : "contribution";

      return (
        <div className={contributionClass}>
          <div className="contributionDate">
            <p>{count} contributions</p>
            <p>{date}</p>
          </div>
        </div>
      )
  });
}

export default RenderContributions;