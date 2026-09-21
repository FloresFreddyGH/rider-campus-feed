# Run Rider Campus Feed on your PC

Install Node.js 22 or later and Git. Clone this repository (or download and extract its ZIP), open a terminal in the project folder, and run:

```sh
npm run dev
```

Open http://127.0.0.1:4173 in your browser. Stop with Ctrl+C. No API keys or third-party packages are required. Restart the server after editing files. Running locally does not change the hosted website.

To build and test:

```sh
npm run build
npm test
```

## Current app

The three major choices are Business, Cybersecurity and Musical Theatre. The app includes stored campus opportunities, events, relevance matching, source links, browser-local saves and a read-only API.

- `src/index.html`: interface.
- `src/worker.mjs`: API and page serving.
- `lib/knowledge.mjs`: source records and matching rules.
- `scripts/`: build and local server.
- `tests/`: API and retrieval checks.

Data consists of manually reviewed public-source snapshots. Coverage is incomplete; this app does not automatically refresh websites or use a connected AI model. Check original sources for current dates and availability. SOL integration is not configured. Older descriptions in README.md may reflect an earlier demo; this guide describes the current major choices.

For a private GitHub repository, the owner must invite the friend through repository Settings → Collaborators. After accepting, the friend can clone the repository and follow the steps above.
