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

# Adding and Publishing Jokes with Contentful

## Adding A Joke
1. Visit the "DowntimeData" space on Contentful. 
2. To add a joke select the "Content" tab from the top navigation bar, verify that content type is "joke", and select "Add Joke" on right hand side.
3. Add joke data in each field:
  - **headline** (required): This is the joke.
  - **smoker** (optional): If the joke begins with something like "report" or "breaking", add that word (include the colon `:`; but no space) to the optional `smoker` field. Add the rest of the joke to the `headline` field.
  - **pubDate** (required): This is the date the joke will be published. Only the date needs to be selected here. The time is set by default to "00:00 UTC-05:00", which is the equivalent of 12am EST time. 
    - _Note:_ The date applied to pubDate should be the same date selected for publishing the post with "Set Schedule".
  - **image** (required): follow prompts to "add existing media" or "add new media". Make sure that the image is set to "published" so it can be sent by Contentful. 
    - _Image size_: Note optimal image size above. Image must be within the following parameters to be added to the joke:
      - width: 1000 - 1300px
      - height: 700 - 900px
  - **anchor** (required): This is the unique slug used for linking to this particular joke on the joke homepage. This must be a unique, 5 digit number sequence. 
    - _Protocol:_ Start with `10..`. Try to end with the current joke count. For example, if the joke count is `23`, `anchor` should be `10023`. However, this field will alert you on save if it is not unique. If necessary, choose any unique numerical sequence. 
  - **twitterImage** (required): This ensures the joke's image displays when the "share on Twitter" button is selected. Follow instructions in "twitterHTMLEmbedFull" for getting this information
  - **twitterHTMLEmbedFull** (optional - offered for parsing twitterImage): 
    - Open Twitter. Create a tweet and add the joke's image as "media" to your Twitter post. Publish tweet.
    - Open the kebab menu on your published Twitter post; select "Embed Tweet"; select "copy code".
    - Paste the code from Twitter in the "twitterHTMLEmbedFull" field as shown:
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
    - Update the "twitterImage" field with with the Twitter ID (`pic.twitter.com/5xEXIOt58j` in this example).

4. Delete any tweets created during "twitterImage" process.

5. Schedule joke for publishing.
## Set Publishing Schedule:
**Common Practice:**
In most cases the joke should be scheduled for a future publishing date that matches the "pubDate" field. In this case, select the dropdown to the right of the green "Publish" button and select "Set Schedule." Schedule the joke to be published on the "pubDate", at 9am GMT-05:00 (US EST).

If a joke should be published **immediately** select the green "Publish" button on the right hand side of the screen. 

That's it - the integration with Vercel will immediately begin re-building the site with the new joke at publishing time.

# Development Process
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
