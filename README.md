# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a friendship-tracking web app that helps you stay in touch with the people who matter. It reminds you how long it's been since you last connected with a friend, lets you log quick check-ins (call, text, video), and visualizes your interaction history over time.

## 🛠️ Technologies Used

- **React.js** (Vite)
- **React Router DOM** — client-side routing
- **Tailwind CSS** — styling & responsive layout
- **Recharts** — analytics pie chart
- **Lucide React** — icons
- **React Hot Toast** — toast notifications
- **localStorage** — persists your check-in timeline across reloads

## ✨ Key Features

1. **Friend Dashboard** — A responsive grid of friend cards showing status (overdue / almost due / on-track), tags, and days since last contact, pulled from a structured `friends.json` dataset.
2. **Friend Detail & Quick Check-In** — A two-column detail page per friend with stats, relationship goals, and one-tap Call / Text / Video buttons that instantly log a new Timeline entry with a toast confirmation.
3. **Timeline & Analytics** — A filterable interaction history page (by Call / Text / Video) plus a Friendship Analytics page with a live Recharts pie chart summarizing how you've been staying in touch.

## 📂 Project Structure

```
src/
  components/   → Navbar, Footer, FriendCard, SummaryCard, StatusBadge
  context/      → TimelineContext (shared state + localStorage)
  data/         → friends.json (seed data)
  pages/        → Home, FriendDetails, Timeline, Stats, NotFound
```

## 🚀 Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build      # production build
```

## 🌐 Deployment

Configured with SPA fallback for both **Vercel** (`vercel.json`) and **Netlify** (`public/_redirects`), so reloading any route after deployment works correctly.

## 📬 Submission

- **Live Link**:
- **GitHub Repository Link**:
