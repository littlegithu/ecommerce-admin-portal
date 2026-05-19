# E‑commerce Admin Portal

## Setup
1. Clone the repo
2. Run `npm install`
3. Start the backend: `npx json-server --watch db.json --port 4000`
4. Start the frontend: `npm run dev`

## Features
- Full CRUD operations on products
- Live search filtering
- Update product price on detail page
- Responsive design (mobile first)
- Custom `useLocalStorage` hook for persistent filters

## Testing
Run `npm run test` to execute the test suite.

## Routes
| Path | Description |
|------|-------------|
| `/` | Landing page |
| `/shop` | Browse products, search, delete |
| `/shop/:id` | Edit product price |
| `/admin` | Add a new product |

## Known Limitations
- No authentication (demo admin portal)
- Data resets when json‑server restarts
