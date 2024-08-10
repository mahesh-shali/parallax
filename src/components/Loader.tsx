"use client";

import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [colorScreen, setColorScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setLoading(false);
        setColorScreen(true);
        setTimeout(() => {
          setColorScreen(false);
        }, 1000);
      }, 100000);
    }, 100000);
    return () => clearTimeout(timer);
  });

  if (!loading) return null;
  return (
    <>
      {loading && (
        <div
          className={`${styles.loader} ${exiting ? styles.exiting : ""}`}
        ></div>
      )}
      {colorScreen && <div className={styles.colorScreen}></div>}
    </>
  );
};

export default Loader;
