# Sapper + Firebase Auth App

## Getting started
```bash
git clone https://github.com/KrishSkywalker/sapper-firebase-auth-template.git
```

### Running the project
Once you have created the project, install dependencies and run the project in development mode:
```bash
cd sapper-firebase-auth-template
npm i
npm run dev
```

The app should now be live in development mode at [localhost:3000](localhost:3000)

**Note:** I took the directory structure from the generic Sapper Rollup template i.e. `npx degit "sveltejs/sapper-template#rollup" sapper-firebase-auth-template`

### Setting up Firebase auth
Copy your Firebase credentials from the console and paste them in `static/firebase.js`

The CDN scripts have been already

### Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [Vercel Now](https://vercel.com) when using `sapper export`, run these commands:

```bash
npm install -g vercel
vercel
```

If your app can't be exported to a static site, you can use the [now-sapper](https://github.com/thgh/now-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/now-sapper#basic-usage).

## 📝 Important Notes
Make sure that the static folder is not more than 20MB, if it is and you don't need caching, disable `service-worker.js`, however if you need caching, set up a CDN, the best idea is to use Next.JS because it automatically serves all deployed static files through a Vercel CDN.

Use the now-sapper](https://github.com/thgh/now-sapper) builder for exporting to a static site.

Make sure you edit `manifest.json`, `package.json` and the meta tags accordingly, the SEO is already done in `template.html`.

Major shoutout to this [article on Firebase + Sapper](https://medium.com/swlh/authentication-with-sapper-firebase-d3b060ad30e5)
### Now go out there and smash it 👊