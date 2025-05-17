import React, { useState } from "react";
import { sendIRCC } from "../api/sonyApi";

const VOLUME_UP = "AAAAAQAAAAEAAAASAw=="; // IRCC Code for Volume Up
const VOLUME_DOWN = "AAAAAQAAAAEAAAATAw=="; // IRCC Code for Volume Down

export default function RemoteControl() {
  const [loading, setLoading] = useState(false);

  const handleVolume = async (type) => {
    if (loading) return;

    setLoading(true);
    const code = type === "up" ? VOLUME_UP : VOLUME_DOWN;
    try {
      await sendIRCC(code);
    } catch (error) {
      console.error("Failed to send IRCC:", error);
    }
    setTimeout(() => setLoading(false), 200); // 200ms delay
  };

  return (
    <div style={styles.container}>
      <h2>Sony Remote</h2>
      <button
        style={styles.button}
        onClick={() => handleVolume("up")}
        disabled={loading}
      >
        Volume +
      </button>
      <button
        style={styles.button}
        onClick={() => handleVolume("down")}
        disabled={loading}
      >
        Volume -
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "100px",
  },
  button: {
    margin: "10px",
    padding: "20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};
