# Rider Campus Feed

A campus opportunity demo for Business, Cybersecurity and Musical Theatre students. Browse stored events, clubs, career information and source links filtered by major.

## Run locally

Install Node.js 22 or later and Git, then:

```sh
git clone https://github.com/FloresFreddyGH/rider-campus-feed.git
cd rider-campus-feed
npm run dev
```

Open http://127.0.0.1:4173. No API keys or third-party dependencies are needed. Stop the server with Ctrl+C; restart after editing source files.

To check the project:

```sh
npm run build
npm test
```

## Source files

- `src/index.html`: browser interface, filters and saved records.
- `src/worker.mjs`: HTTP API and page serving.
- `lib/knowledge.mjs`: stored public-source data and major relevance rules.
- `scripts/`: local server and build commands.
- `tests/`: API and retrieval checks.

The local server binds to your computer only. Saved items and major preferences use browser storage. Editing this copy does not change the existing hosted demo.

## Data and limitations

Records are manually collected snapshots from Rider University, Bronc Nation and Rider News, with source links. Coverage is incomplete; check the linked source for current dates and availability. The app does not automatically scrape, refresh, or learn from websites. Relevance uses editorial mappings and topic matching. No live language model or SOL integration is configured.

Update records in `lib/knowledge.mjs` to maintain the dataset. The build creates a Cloudflare-compatible Worker in `dist/server/index.js`. Hosting configuration and credentials are deliberately excluded from this copy; local development does not need them.

## API examples

- `/api/majors`
- `/api/campus-feed/for-you?major=business`
- `/api/campus-feed/for-you?major=musical-theatre&type=event`
- `/api/retrieve?major=cybersecurity&q=security`

Source articles and linked media belong to their respective owners.
