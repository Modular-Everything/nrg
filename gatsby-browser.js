import React from "react";
import Layout from "./src/components/Core/Layout";

// ---

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
