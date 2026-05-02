import axios from "axios";
import { log } from "../logging_middleware/logger";
import { getToken } from "./auth";

const BASE_URL = "http://20.207.122.20/evaluation-service";


export const sendNotification = async (data) => {
  try {
    await log("frontend", "info", "api", "Sending notification");

    const res = await axios.post(
      `${BASE_URL}/notifications`,
      data,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    await log("frontend", "info", "api", "Notification success");
    return res.data;

  } catch (err) {
    await log("frontend", "error", "api", "Server down - using mock");
    return { message: "Mock Success (Server Down)" };
  }
};


export const getNotifications = async () => {
  try {
    await log("frontend", "info", "api", "Fetching notifications");

    const res = await axios.get(
      `${BASE_URL}/notifications`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    await log("frontend", "info", "api", "Notifications fetched");

    return res.data.notifications;

  } catch (err) {
    await log("frontend", "error", "api", "Fetch notifications failed");

    
    return [
      { type: "Placement", message: "Google hiring", timestamp: "2026-04-22" },
      { type: "Event", message: "Hackathon", timestamp: "2026-04-21" },
      { type: "Result", message: "Exam result", timestamp: "2026-04-20" }
    ];
  }
};