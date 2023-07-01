import axios from "axios";
import { useEffect, useState } from "react";
import GraphDays from "./GraphDays";
import GraphMonths from "./GraphMonths";
import "./GraphStyles.css";
import RenderContributions from "./RenderContributions";

const API = "https://dpg.gg/test/calendar.json";

const ContributionGraph = () => {
  const [state, setState] = useState({});

  const getDates = async (api) => {
    const { data } = await axios.get(api);
    setState(data);
  };

  useEffect(() => {
    getDates(API);
  }, []);

  return(
    <div className="main-container">
        <GraphMonths />
        <div className="container">
            <GraphDays />
            <div className="contribution-graph">
                <RenderContributions state={state} />
            </div>
        </div>
    </div>
  )
};

export default ContributionGraph;