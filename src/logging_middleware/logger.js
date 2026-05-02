import axios from "axios";

const LOG_API = "http://20.207.122.20/evaluation-service/logs";

export const log = async (stack, level, pkg, message) => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : {}
      }
    );

  } catch (err) {
    console.error("Log error:", err.message);
  }
};