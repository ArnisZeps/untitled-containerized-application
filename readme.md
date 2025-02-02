# Hackmotion Page

## Description
A monorepo for the Customer Portal UI and Analytics Service.

- Next.js with the App Router is used for server-side rendering.
- Tailwind CSS is used for styling.
- Node.js with the Express.js framework powers the Analytics Service.
- To launch the app, simply run `docker compose up`.

## Analytics Service
The Analytics Service provides logging functionality and supports multiple log groups. A log group is passed as a parameter. The directory structure for storing logs follows this format: `yyyy/mm/dd/hh`.

### Environment Variables
- `PORT`: The exposed port for network requests.

## Customer Portal UI
The Customer Portal is built with the Next.js web framework.

- The home page includes a dynamic string (Quiz result). The value for this string is taken from the URL query parameter `result`.
- Each visitor is assigned a unique client ID using Next.js middleware.
- On every page view, analytics data `[Timestamp, URL, Client ID, Device Info]` is sent to the Analytics Service.
- When a user watches a video in full, an event is sent to the Analytics Service.

### Environment Variables
- `NEXT_PUBLIC_ANALYTICS_SERVICE_API`: The API URL for client-side requests.
- `ANALYTICS_CONTAINER_NAME`: The URL for making requests within the local container network.
