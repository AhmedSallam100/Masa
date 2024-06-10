import path from "path";

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
    },
  },
};
