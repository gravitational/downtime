# downtime.dev

View the live site at [downtime.dev](https://www.downtime.dev/).

# Getting Started
## Installation and Dependencies

Clone the repo with your preferred process and `cd` into it:

```bash
git clone git@github.com:gravitational/downtime.git
cd downtime
```

Install dependencies with:

```bash
yarn
 # or
npm install
```

## Development

Run the development server with:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Development Process
## Submitting Requests
Create an issue for image suggestions and website changes. A priority tag (`P1`, `P2`, `P3`) may also be added.
## Overview of contributing

1. Checkout `main` and pull the latest version
2. **Create your own branch** ex. `delia/new-image`
3. View and edit your changes locally
4. Make changes
5. See your changes by running the site on `http://localhost:3000/` with `yarn dev` or `npm run dev`
6. Create a pull request detailing changes
7. After a pull request is approved, "squash and merge" into `main`

## Creating a pull request

1. Include a description of your changes
2. Include a reference to tickets you are closing (if applicable)
3. Assign reviewer(s)
4. The reviewers must approve changes
5. Once approved you may merge your branch into `main`
6. **Please note, changes in `main` are automatically deployed. Do not merge items into `main` that are not production ready.**
