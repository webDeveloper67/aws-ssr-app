const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://master.d2oc99ofw725ys.amplifyapp.com";
