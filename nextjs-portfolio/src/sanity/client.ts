import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "c2s2sg6g",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});