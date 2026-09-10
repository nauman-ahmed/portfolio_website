import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Runs the Vercel serverless functions in `api/` during `npm run dev`.
 *
 * Vite's dev server knows nothing about Vercel functions, so without this the
 * contact form 404s locally and can only be tested by deploying. The handler is
 * loaded through Vite so edits hot-reload like any other source file.
 */
function devApi(env) {
  return {
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res, next) => {
        // req.url has the /api prefix stripped by connect: "/send-email".
        const route = (req.url || '').split('?')[0].replace(/^\/|\/$/g, '');
        if (!route) return next();

        let mod;
        try {
          mod = await server.ssrLoadModule(`/api/${route}.js`);
        } catch {
          return next();
        }

        // The functions read credentials from process.env, which Vite does not
        // populate on the server side by itself.
        process.env.EMAIL_USER = process.env.EMAIL_USER || env.EMAIL_USER;
        process.env.EMAIL_PASS = process.env.EMAIL_PASS || env.EMAIL_PASS;

        try {
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const raw = Buffer.concat(chunks).toString('utf8');
          req.body = raw ? JSON.parse(raw) : {};
        } catch {
          req.body = {};
        }

        // Minimal shim for the Vercel response helpers the handlers use.
        res.status = (code) => {
          res.statusCode = code;
          return res;
        };
        res.json = (payload) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(payload));
          return res;
        };

        try {
          await mod.default(req, res);
        } catch (error) {
          server.config.logger.error(`[dev-api] ${route}: ${error.message}`);
          if (!res.writableEnded) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'Dev handler threw' }));
          }
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // '' loads every variable, not just the VITE_-prefixed ones.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss(), devApi(env)],
    base: './', // Ensures all assets are loaded relatively
  }
})
