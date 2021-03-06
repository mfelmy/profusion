import React, { useEffect } from "react";

// * --- D A T A  F I E L D S ---
// * name
// * description
// * time
// * time_investment
// * level
// * nof_people
// * material_costs
// * rating
// * reported

export default function FormProtest({ data, onDataChange }) {
  useEffect(() => {
    onDataChange({ ...data, reported: false });
  }, []);

  return <div>Meldung wiederufen</div>;
}
