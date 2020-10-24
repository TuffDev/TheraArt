import React, { useEffect, useState } from "react";
import TherapistList from "./TherapistList";
import TherapistMap from "./TherapistMap";
export default function TherapistPage() {
  return (
    <React.Fragment>
      <TherapistList></TherapistList>;<TherapistMap></TherapistMap>
    </React.Fragment>
  );
}
