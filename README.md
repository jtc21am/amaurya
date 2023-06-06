- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Render](https://render.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) with [Contentlayer](https://www.contentlayer.dev/)

## Running Locally

### Installation

1. Clone this repo



2. Change directory


3. Install yarn packages

```bash
yarn
```

1. Create a `.env.local` file following the `.env.example`

```bash
cp .env.example .env.local
```

5. Add your environment variables to `.env.local`

```txt
SPOTIFY_REFRESH_TOKEN=<Your env>
SPOTIFY_CLIENT_SECRET=<Your env>
SPOTIFY_CLIENT_ID=<Your env>
// ...
```

6. Run the development server

```bash
yarn dev
```
