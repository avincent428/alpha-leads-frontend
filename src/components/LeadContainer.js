import Lead from "./Lead";
import { Link } from "react-router-dom";

function LeadContainer(props) {
  return (
    <div className="lead-container">
      <h1 className="lead-header">Potential Leads:</h1>
      {props.leads.map((lead) => {
        if (lead.client == false && lead.archived == false) {
          return (
            <Link to={`/admin/${lead._id}`}>
              <Lead lead={lead} />
            </Link>
          );
        }
      })}
    </div>
  );
}

export default LeadContainer;
