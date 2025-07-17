// src/components/RequireAuth.tsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }: { children: React.ReactElement }) {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
