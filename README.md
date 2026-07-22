# Eternal Education

## Run locally

1. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` and a long, random `JWT_SECRET`.
2. Start the API: `cd server && npm start`.
3. In another terminal, start the site: `npm run dev`.

## Deploy for sign-in on any device

Deploy the `server` folder to a Node host (such as Render or Railway), then configure the host with `MONGO_URI`, `JWT_SECRET`, and `CLIENT_ORIGINS` equal to your website URL. In the frontend host, set `VITE_API_URL` to the server's public URL followed by `/api` (for example `https://api.example.com/api`) and redeploy.

Accounts and journals are saved in MongoDB, so they are available wherever a user signs in. Do not commit `.env` files; rotate the MongoDB password that was previously embedded in `server/server.js`.
