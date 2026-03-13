"use client";

export default function Dashboard() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="https://personaldashboard-ivba.onrender.com/"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}
