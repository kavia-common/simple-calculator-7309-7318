import React from "react";

/**
 * UserStats component displays user statistics in a simple, modern card-style layout.
 * Includes a demonstration function that intentionally uses an undefined variable and logs to the console.
 * Styling leverages the app's light, modern CSS theme.
 */
// PUBLIC_INTERFACE
function UserStats() {
  // Helper function intentionally referencing an undefined variable for demonstration.
  function demoFunction() {
    console.log("UserStats loaded");
    // Attempt to use an undefined variable (deliberate for testing)
    // eslint-disable-next-line no-undef
    let something = statsDataNotDefined.foo; // This variable does not exist
    return something;
  }

  // Call the demo function on component mount (single render)
  React.useEffect(() => {
    try {
      demoFunction();
    } catch (e) {
      // Swallow error for demonstration; do not break UI.
      // Optionally, you can log e if desired.
    }
  }, []);

  // Placeholder statistics for demonstration
  const stats = {
    totalCalculations: 42,
    lastOperation: "Multiplication (6 × 7)",
    averagePerSession: 10.5,
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
      aria-label="User Statistics"
    >
      <h2 style={{ fontSize: "1.3rem", margin: "0 0 10px 0", fontWeight: 600 }}>
        User Statistics
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 500 }}>Total Calculations:</span>{" "}
          <span>{stats.totalCalculations}</span>
        </li>
        <li style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 500 }}>Last Operation:</span>{" "}
          <span>{stats.lastOperation}</span>
        </li>
        <li>
          <span style={{ fontWeight: 500 }}>Average per Session:</span>{" "}
          <span>{stats.averagePerSession}</span>
        </li>
      </ul>
      <p
        style={{
          fontSize: "0.88rem",
          color: "var(--text-secondary, #64748b)",
          margin: "16px 0 0 0",
        }}
      >
        (This is a demo card for user stats display.)
      </p>
    </div>
  );
}

export default UserStats;
