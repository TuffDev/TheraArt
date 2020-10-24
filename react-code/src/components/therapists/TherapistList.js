import React, { useEffect, useState } from "react";
import TherapistCard from "./TherapistCard";
import TherapistMap from "./TherapistMap";
export default function TherapistList() {
  const THERAPISTS = [
    { image: "", name: "Bob Ross", rating: "3.7", address: "123 Art Ave." },
    { image: "", name: "Monet", rating: "3.8", address: "456 Art St." },
    { image: "", name: "Frida Kahlo", rating: "3.5", address: "789 Art Ln." },
  ];

  return (
    <div>
      {THERAPISTS.map((therapist) => (
        <TherapistCard therapist={therapist} />
      ))}
    </div>
  );
}
