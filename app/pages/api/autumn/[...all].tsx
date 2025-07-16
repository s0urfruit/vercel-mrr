import { autumnHandler } from "autumn-js/react-router";

/*
THIS IS AUTUMN'S RECOMMENDED IMPLEMENTATION FOR REACT ROUTER. 
THEY DO NOT KNOW THE SPECIFICS OF HOW RR7 WORKS.

// https://docs.useautumn.com/quickstart/quickstart#4-mount-the-autumn-handler

THIS THROWS AN ERROR:
[react-router:route-exports] Cannot remove destructured export "loader"
file: /Users/sourfruit/Desktop/vercel-mrr/app/pages/api/autumn/[...all].tsx

export const { loader, action } = autumnHandler({
    // THIS WILL BE REVOKED! IT IS A TEST MODE KEY! THIS IS EXPOSED PURELY FOR DEMO PURPOSES!
    secretKey: "am_sk_test_dnVfbsiDOkTvkgiFbw2iDyhYWm4abz67bdXUhsVLqR",
    identify: async (args) => {
        // act as if auth occurred.
        return {
            customerId: "123",
            customerData: {
                name: "John Doe",
                email: "john.doe@example.com",
            },
        };
    }
});
*/

/* 
THIS IS THE "MORE" CORRECT IMPLEMENTATION FOR REACT ROUTER.
IT ACTUALLY BUILDS! BUT, IT DOES NOT DEPLOY ON VERCEL.
*/

const handlers = autumnHandler({
    // THIS WILL BE REVOKED! IT IS A TEST MODE KEY! THIS IS EXPOSED PURELY FOR DEMO PURPOSES!
    secretKey: "am_sk_test_dnVfbsiDOkTvkgiFbw2iDyhYWm4abz67bdXUhsVLqR",
    identify: async (args) => {
        return {
            customerId: "user123",
            customerData: {
                name: "John Doe",
                email: "john@example.com",
            },
        };
    },
});

export const loader = handlers.loader;
export const action = handlers.action;

/*
✓ 7 modules transformed.
build/server/nodejs_eyJydW50aW1lIjoibm9kZWpzIn0/.vite/manifest.json               0.23 kB
build/server/nodejs_eyJydW50aW1lIjoibm9kZWpzIn0/assets/server-build-DpvXtVtZ.css  4.87 kB
build/server/nodejs_eyJydW50aW1lIjoibm9kZWpzIn0/index.js                          9.13 kB

✓ 1 asset cleaned from React Router server build.
build/server/nodejs_eyJydW50aW1lIjoibm9kZWpzIn0/assets/server-build-DpvXtVtZ.css

✓ built in 37ms
✅  Build Completed in .vercel/output [2s]
Vercel CLI 44.4.1
🔍  Inspect: https://vercel.com/sourfruit-pro/vercel-mrr/2JTCccDWheLewJKxpJXRMN5iDkMC [5s]
✅  Production: https://vercel-40fqu80mn-sourfruit-pro.vercel.app [5s]
2025-07-16T02:10:43.523Z  Running build in Washington, D.C., USA (East) – iad1
2025-07-16T02:10:43.523Z  Build machine configuration: 4 cores, 8 GB
2025-07-16T02:10:43.540Z  Retrieving list of deployment files...
2025-07-16T02:10:43.626Z  Previous build caches not available
2025-07-16T02:10:43.961Z  Downloading 111 deployment files...
2025-07-16T02:10:44.659Z  Using prebuilt build artifacts...
Error: An unexpected error happened when running this build. We have been notified of the problem. If you have any questions, please contact Vercel Support https://vercel.com/help
> 

> To check build logs run: `vercel inspect vercel-40fqu80mn-sourfruit-pro.vercel.app --logs`
> Or inspect them in your browser at https://vercel-40fqu80mn-sourfruit-pro.vercel.app/_logs
*/