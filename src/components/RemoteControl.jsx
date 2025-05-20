import React, { useState } from "react";
import {
  sendIRCC,
  powerToggle,
  volumeUp,
  volumeDown,
  mute,
  navigate,
  pressButton,
  switchInput,
  IRCC_CODES,
} from "../api/sonyApi";

// Basic styling for the remote control
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  button: {
    padding: "12px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    minWidth: "60px",
    fontWeight: "bold",
  },
  powerButton: {
    backgroundColor: "#dc3545",
  },
  navigationContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    margin: "20px 0",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  statusMessage: {
    margin: "15px 0",
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
    textAlign: "center",
  },
};

const RemoteControl = () => {
  const [status, setStatus] = useState("");

  // Helper to handle API calls and update status
  const handleAction = async (action, description) => {
    setStatus(`Sending ${description}...`);
    try {
      await action();
      setStatus(`${description} sent successfully`);
    } catch (error) {
      setStatus(`Error: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sony TV Remote</h2>

      {status && <div style={styles.statusMessage}>{status}</div>}

      {/* Power */}
      <div style={styles.buttonRow}>
        <button
          style={{ ...styles.button, ...styles.powerButton }}
          onClick={() => handleAction(powerToggle, "Power toggle")}
        >
          Power
        </button>
      </div>

      {/* Volume controls */}
      <div style={styles.buttonRow}>
        <button
          style={styles.button}
          onClick={() => handleAction(volumeDown, "Volume down")}
        >
          Vol-
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(mute, "Mute toggle")}
        >
          Mute
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(volumeUp, "Volume up")}
        >
          Vol+
        </button>
      </div>

      {/* Navigation controls */}
      <div style={styles.navigationContainer}>
        <div></div>
        <button
          style={styles.button}
          onClick={() => handleAction(() => navigate("up"), "Up")}
        >
          ↑
        </button>
        <div></div>

        <button
          style={styles.button}
          onClick={() => handleAction(() => navigate("left"), "Left")}
        >
          ←
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(() => navigate("enter"), "Enter")}
        >
          OK
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(() => navigate("right"), "Right")}
        >
          →
        </button>

        <div></div>
        <button
          style={styles.button}
          onClick={() => handleAction(() => navigate("down"), "Down")}
        >
          ↓
        </button>
        <div></div>
      </div>

      {/* HDMI inputs */}
      <div style={styles.buttonRow}>
        <button
          style={styles.button}
          onClick={() => handleAction(() => switchInput(1), "HDMI 1")}
        >
          HDMI 1
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(() => switchInput(2), "HDMI 2")}
        >
          HDMI 2
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(() => switchInput(3), "HDMI 3")}
        >
          HDMI 3
        </button>
      </div>

      {/* Home and Back buttons */}
      <div style={styles.buttonRow}>
        <button
          style={styles.button}
          onClick={() => handleAction(() => pressButton("home"), "Home")}
        >
          Home
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(() => pressButton("back"), "Back")}
        >
          Back
        </button>
      </div>

      {/* Playback controls */}
      <div style={styles.buttonRow}>
        <button
          style={styles.button}
          onClick={() => handleAction(() => pressButton("play"), "Play")}
        >
          ▶
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(() => pressButton("pause"), "Pause")}
        >
          ⏸
        </button>
        <button
          style={styles.button}
          onClick={() => handleAction(() => pressButton("stop"), "Stop")}
        >
          ⏹
        </button>
      </div>
    </div>
  );
};

export default RemoteControl;
