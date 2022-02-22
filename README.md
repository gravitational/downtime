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

# Contribution Process
## Submitting Requests
Create an issue for image suggestions and website changes. A priority tag (`P1`, `P2`, `P3`) may also be added.

### Image Contributions:
- **Image Sourcing:** Images should be open source or sourced from [istockphoto.com](https://www.istockphoto.com/).
- **Image size:** Image size should be 1200px (horizontal) by 800px (vertical). The image name should be appended with `@2x` when added to the repo for optimal sizing by the browser.
# Development Process

## Daily Joke Publishing Protocol
1. Create a branch to add the daily joke.

2. Select a joke and corresponding image from the "Ready To Deploy" section [here](https://docs.google.com/document/d/13T4yOefHZg2io-KqJ9r0XDzbBWr9kN4_HvyGNZ3-IZQ/edit#). Move your selected joke to the "Live" section of this document.

3. Add new joke to the bottom of the `RawJokes` array in `data/jokes.ts` as shown:

**Important:**
  - `smoker`: If the joke begins with a word like "report" or "breaking", add that word (include the `:`; no space) to the optional `smoker` key. Add the rest of the joke to the `headline` key.
  - `pubDate`:
    - Month is zero-indexed. Jan = 0, Feb = 1, etc
    - Day is one-indexed. 1 = 1, 2 = 2, etc
  - `anchor`:
    - 5 digit code that must be unique
    - Protocol: start with `10..`. End with the current `joke-count`, which is visible in the console. For example, if the `joke-count` is `23`, `anchor` should be `10023`.
  - `twitterImage`: will be updated in step 6 using the "Embed Tweet" option on Twitter.
```js
//RawJokes
{
    smoker: "Breaking:",
    headline:
      "Don’t Stare, But Kelsey Hightower Just Walked Into This Barnes & Noble",
    image: "/assets/images/barnesAndNobleClackamas@2x.jpeg",
    twitterImage: "pic.twitter.com/TCAe11Cto7",
    pubDate: new Date(2022, 0, 1),
    anchor: 10007,
  },
```

4. Open Twitter. Create a tweet and add the joke's image as "media" to your Twitter post. Publish tweet. **This tweet must not be deleted as it provides the source image used when sharing the tweet on Twitter.**

5. Open the kebab menu on your published Twitter post; select "Embed Tweet"; select "copy code".

6. Replace the code in the `twitter.html` file in this repo with the copied code from Twitter:

```html
<blockquote class="twitter-tweet">
  <p lang="ht" dir="ltr">
    bla bla bla <a href="https://t.co/5xEXIOt58j">pic.twitter.com/5xEXIOt58j</a> <!--this is the twitter media id -->
  </p>
  &mdash;
  <a
    href="https://twitter.com/zzzzz41646467/status/1486784514835714050?ref_src=twsrc%5Etfw"
    >January 27, 2022</a
  >
</blockquote>
<script
  async
  src="https://platform.twitter.com/widgets.js"
  charset="utf-8"
></script>
```
Replace the existing value for `twitterImage` in `data/jokes.ts` with the Twitter ID (`pic.twitter.com/5xEXIOt58j` in this example).

7. Joke update is now complete. To check that the link was correctly created, run locally and click "share this on twitter" from the new joke entry on localhost. Append the uniform resource locater created by Twitter to your local url: `localhost:3000/#10023`. This should route the browser directly to the newly added joke.

8. Create a pull request with these changes and follow pull request process below.

9. Delete any extra tweets created during the development process. The tweet used for embedding the image must NOT be deleted.
## Overview of general contributions

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
