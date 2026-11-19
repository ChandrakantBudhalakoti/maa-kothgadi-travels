import next from "eslint-config-next";

const config = [...next, { ignores: ["legacy/**", ".next/**"] }];

export default config;
