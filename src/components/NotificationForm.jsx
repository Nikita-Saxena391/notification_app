import { useState, useEffect } from "react";
import { sendNotification } from "../services/api";
import { register, getAuthToken } from "../services/auth";
import { log } from "../logging_middleware/logger";

const NotificationForm = ({ addNotification }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("Placement");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        await register();
        await getAuthToken();
      } catch {}
    };

    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNotification = {
      type,
      message,
      timestamp: new Date().toISOString().split("T")[0]
    };

    addNotification(newNotification);

    try {
      await sendNotification({ message });
      setStatus("Sent ✅");
    } catch {
      setStatus("Mock Sent ⚠️");
    }

    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notification System</h2>

      <form onSubmit={handleSubmit}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Placement</option>
          <option>Event</option>
          <option>Result</option>
        </select>

        <br /><br />

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />

        <button type="submit">Send</button>
      </form>

      <p>{status}</p>
    </div>
  );
};

export default NotificationForm;