import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("outcomes", "routes/outcomes.tsx"),
  route("how-it-works", "routes/how-it-works.tsx"),
  route("proof", "routes/proof.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("faq", "routes/faq.tsx"),
] satisfies RouteConfig;
