# Using Netlify CLI to develop a Vite React app 

I am trying to use Netlify CLI while developing a Vite React app. I'm running into an issue with having the react app 
on a non-index.html page.

I can boot the application and navigate to all of the desired locations, but if I refresh the page, I get a 404 error.
Note that all of this works while it's deployed to Netlify, it's only an error when run locally using the Netlify CLI. 
It appears that the netlify.toml redirects are not being applied for the `/app/*` routes.

## Replication Steps

1. Clone the repository
2. Run `npm install`
3. Run `npm run netlify`
4. Navigate to `http://localhost:8888`
5. Click on the `Navigate to React SPA` button. This will take you to the `/app` route.
6. Click on the `Page 1` link. This will take you to the `/app/page1` route.
7. Refresh the page. You will see a 404 error. 

If this application is deployed to Netlify, the refresh works as expected. This is demontrated at [https://non-index-demo.netlify.app](https://non-index-demo.netlify.app).