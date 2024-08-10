"use client";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Index = () => {
  const [loadingComplete, setLoadingComplete] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Loader />
      {!loadingComplete && (
        <div>
          <h1>Hello</h1>
        </div>
      )}
    </>
  );
};

export default Index;
