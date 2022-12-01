const envs = import.meta.env;

export default {
  apiKey: envs.VITE_API_KEY,
  privateKey: envs.VITE_API_PRIVATE_KEY,
  baseApiUrl: envs.VITE_BASE_API_URL
};
