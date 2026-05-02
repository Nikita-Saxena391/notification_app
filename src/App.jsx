import { useState } from "react";
import NotificationForm from "./components/NotificationForm";
import NotificationList from "./components/NotificationList";

function App() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (newNotification) => {
    setNotifications((prev) => [newNotification, ...prev]);
  };

  return (
    <>
      <NotificationForm addNotification={addNotification} />
      <NotificationList notifications={notifications} />
    </>
  );
}

export default App;