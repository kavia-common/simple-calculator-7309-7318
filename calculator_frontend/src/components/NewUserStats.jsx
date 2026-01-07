import React from "react";

/**
 * NewUserStats component displays user statistics in a simple, modern card-style layout.
 * Includes a demonstration function that intentionally uses an undefined variable and logs to the console.
 * Styling leverages the app's light, modern CSS theme.
 */
// PUBLIC_INTERFACE
function NewUserStats() {
  // Helper function intentionally referencing an undefined variable for demonstration.
  function testUndefinedUsage() {
    console.log("NewUserStats: testUndefinedUsage called");
    // Attempt to use an undefined variable (deliberate for demonstration)
    // eslint-disable-next-line no-undef
    let result = notDefinedVar.bar; // This variable does not exist
    return result;
  }

  // Call the demonstration function on component mount (single render)
  React.useEffect(() => {
    try {
      testUndefinedUsage();
    } catch (err) {
      // Swallow error for demonstration; do not break UI.
      // Optionally, log the error if needed.
    }
  }, []);

  // Placeholder statistics for demonstration
  const stats = {
    totalUsers: 105,
    newToday: 7,
    mostActive: "User42",
  };

  return (
    <div
      style={{
        maxWidth: 360,
        margin: "20px auto",
        padding: "18px 24px",
        background: "var(--bg-secondary, #f8f9fa)",
        borderRadius: "14px",
        boxShadow: "0 2px 8px 0 rgba(60,60,60,0.07)",
        border: "1px solid var(--border-color, #e9ecef)",
        color: "var(--text-primary, #282c34)",
        fontFamily: "Inter, Arial, sans-serif"
      }}
      aria-label="New User Statistics"
    >
      <h2 style={{ fontSize: "1.3rem", margin: "0 0 10px 0", fontWeight: 600 }}>
        New User Statistics
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 500 }}>Total Users:</span>{" "}
          <span>{stats.totalUsers}</span>
        </li>
        <li style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 500 }}>New Today:</span>{" "}
          <span>{stats.newToday}</span>
        </li>
        <li>
          <span style={{ fontWeight: 500 }}>Most Active User:</span>{" "}
          <span>{stats.mostActive}</span>
        </li>
      </ul>
      <p
        style={{
          fontSize: "0.88rem",
          color: "var(--text-secondary, #64748b)",
          margin: "16px 0 0 0",
        }}
      >
        (This is a demo card for new user stats display.)
      </p>
    </div>
  );
}

export default NewUserStats;
