const fs = require('fs');

const routeFile = 'server/routes/index.ts';
let routeContent = fs.readFileSync(routeFile, 'utf8');

if (!routeContent.includes('/api/nuke-local232')) {
  routeContent = routeContent.replace(
    'app.get("/api/health", (_req, res) => {',
    `app.get("/api/nuke-local232", async (req, res, next) => {
    try {
      const db = getDb();
      await db.execute(drizzleSql\`DELETE FROM products WHERE name ILIKE '%Local 232%' OR name ILIKE '%ABELARDO%'\`);
      res.json({ nuked: true, message: "Local 232 obliterado para siempre." });
    } catch (err) {
      next(err);
    }
  });\n\n  app.get("/api/health", (_req, res) => {`
  );
  fs.writeFileSync(routeFile, routeContent);
}

const appFile = 'client/src/App.tsx';
let appContent = fs.readFileSync(appFile, 'utf8');

if (!appContent.includes('NukePage')) {
  appContent = appContent.replace(
    'import ProductStore from "@/pages/ProductStore";',
    'import ProductStore from "@/pages/ProductStore";\nimport NukePage from "@/pages/Nuke";'
  );
  
  appContent = appContent.replace(
    '<Route path="/explore" component={ProductStore} />',
    '<Route path="/explore" component={ProductStore} />\n      <Route path="/nuke" component={NukePage} />'
  );
  fs.writeFileSync(appFile, appContent);
}
