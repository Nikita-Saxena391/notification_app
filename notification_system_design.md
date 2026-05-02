# Notification System Design

## Architecture
- Frontend: React
- Backend: External Test Server APIs

## Flow
1. Register user → get clientID & clientSecret
2. Fetch auth token
3. Send notification using token
4. Log all actions via logging middleware

## Logging Strategy
- Logs captured for:
  - App initialization
  - API calls (start/success/failure)
  - User actions

## Tech Stack
- React
- Axios
- Custom Logging Middleware