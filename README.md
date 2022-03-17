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
```

## Development

Run the development server with:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Contribution Process
## Submitting Requests
Create a request in Asana for website changes.

### Image Contributions:
- **Image Sourcing:** Images should be open source or sourced from [istockphoto.com](https://www.istockphoto.com/).
- **Image size:** Image size should be 1200px (horizontal) by 800px (vertical) and less than 1MB. The image name should be appended with `@2x` for optimal sizing by the browser.

# Adding and Publishing Jokes with Contentful

## Adding A Joke

1. Visit the "DowntimeData" space on Contentful.

2. To add a joke select the "Content" tab from the top navigation bar, verify that content type is "joke", and select "Add Joke" on right hand side.

3. Add joke data in each field:

- **headline** (required): This is the joke.
- **slug** (automatically generated): This is automatically generated based on the headline in a url friendly format. Please do not edit this field.
  - _Note:_ Any changes to the headline BEFORE it is published will automically be reflected in the slug. After the joke is published, the slug will remain the same because it represents a live url.
- **pubDate** (required): Select the date the joke will be published and set timezone to UTC-5:00. Time can remain at default of 00:00. **IMPORTANT: Timezone must be set to UTC-5:00 in order to render properly.**
  - _Note:_ The date applied to pubDate should be the same date selected for publishing the post.
- **image** (required): follow prompts to "add existing media" or "add new media". Make sure that the image is set to "published" so it can be sent by Contentful.
  - _Image size_: 
    - Dimensions: image should be as close to 1200px width by 800px height as possible, but cannot be larger than these dimensions.
    - File size: no larger than 1MB

4. Schedule joke for publishing.

## Set Publishing Schedule:

**Option 1 - Schedule Future Publishing Date:** The joke may be scheduled for a future publishing date that matches the "pubDate" field. In this case, select the dropdown to the right of the green "Publish" button and select "Set Schedule." Schedule the joke to be published on the "pubDate", at 9am GMT-05:00 (US EST).

**Option 2 - Publish Immediately:** If a joke should be published **immediately** select the green "Publish" button on the right hand side of the screen.

That's it for adding a joke - the integration with Vercel will immediately begin re-building the site with the new joke at publishing time.

## Overview of general contributions

1. Checkout `main` and pull the latest version

2. **Create your own branch** ex. `delia/new-image`

3. View and edit your changes locally

4. Make changes

5. See your changes by running the site on `http://localhost:3000/` with `yarn dev`

6. Create a pull request detailing changes

7. After a pull request is approved, "squash and merge" into `main`
## Creating a pull request

1. Include a description of your changes

2. Include a reference to tickets you are closing (if applicable)

3. Assign reviewer(s)

4. The reviewers must approve changes

5. Once approved you may merge your branch into `main`

6. **Please note, changes in `main` are automatically deployed. Do not merge items into `main` that are not production ready.**
