"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1>Something is wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Restart
      </button>
    </div>
  );
}
