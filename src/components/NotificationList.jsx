import { useState } from "react";

const NotificationList = ({ notifications }) => {
  const [filter, setFilter] = useState("All");

  const priority = {
    Placement: 1,
    Event: 2,
    Result: 3
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  const sorted = [...filtered].sort((a, b) => {
    if (priority[a.type] !== priority[b.type]) {
      return priority[a.type] - priority[b.type];
    }
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  const getColor = (type) => {
    if (type === "Placement") return "#4CAF50";
    if (type === "Event") return "#2196F3";
    return "#FF9800";
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Notifications</h3>

      {/* Filters */}
      <div style={styles.filters}>
        {["All", "Placement", "Event", "Result"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.filterBtn,
              backgroundColor: filter === f ? "#333" : "#eee",
              color: filter === f ? "#fff" : "#000"
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      {sorted.length === 0 ? (
        <p>No notifications</p>
      ) : (
        sorted.map((n, i) => (
          <div key={i} style={styles.card}>
            
            <span
              style={{
                ...styles.badge,
                backgroundColor: getColor(n.type)
              }}
            >
              {n.type}
            </span>

            <p style={styles.message}>{n.message}</p>
            <p style={styles.date}>{n.timestamp}</p>

          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto"
  },
  heading: {
    textAlign: "center"
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px"
  },
  filterBtn: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    background: "#f9f9f9",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  badge: {
    padding: "5px 10px",
    borderRadius: "6px",
    color: "white",
    fontSize: "12px"
  },
  message: {
    marginTop: "10px",
    fontWeight: "500"
  },
  date: {
    fontSize: "12px",
    color: "gray"
  }
};

export default NotificationList;