# BoxDrop — frontend build checklist

## Setup

- [*] Vite + React project created
- [*] Tailwind v4 installed (`@tailwindcss/vite` plugin)
- [*] `@theme` colors set in `index.css` (primary, secondary, accent, white)
- [*] React Router installed and set up
- [ ] Axios installed
- [*] Font Awesome/react-icons installed (npm, class-string props)

## Folder structure

- [ ] `src/api/` — axiosInstance.js, authApi.js, parcelApi.js, adminApi.js
- [*] `src/components/ui/` — Button, Input, Badge, Card, Loader, Modal
- [ ] `src/components/layout/` — Navbar, Footer, AdminSidebar, AdminTopbar
- [*] `src/components/section/` — Hero, HowItWorks, Services, WhyChooseUs,FAQ CTA
- [ ] `src/components/parcels/` — ParcelSearchBar, ParcelTable, ParcelCard, TrackResult, StatusTimeline
- [ ] `src/pages/` — all page files scaffolded
- [ ] `src/context/AuthContext.jsx`
- [ ] `src/routes/` — ProtectedRoute, AdminRoute
- [ ] `src/hooks/useAuth.js`
- [ ] `src/utils/statusColors.js`

## Routes wired in App.jsx

- [ ] `/` — Landing page
- [ ] `/login` — Login
- [ ] `/register` — Register
- [ ] `/track` — Track search (empty state)
- [ ] `/track/:trackingId` — Track result
- [ ] `/dashboard` — User dashboard (protected)
- [ ] `/dashboard/parcel/:id` — Parcel detail (protected)
- [ ] `/admin` — Admin dashboard (admin only)
- [ ] `/admin/parcels/:id` — Admin parcel edit (admin only)
- [ ] `/admin/users` — Admin user list (optional)
- [ ] `/*` — 404 Not Found

## Landing page

- [*] Navbar (logo, nav links, Track button, Login/Register CTA)
- [*] Hero (headline + inline tracking search bar)
- [*] How It Works (4-step process)
- [*] Services (card grid)
- [*] Why Choose Us (benefits grid)
- [*] faq section
- [*] CTA section
- [*] Footer

## Auth pages

- [ ] Login form (email + password, error state, link to register)
- [ ] Register form (name, email, password, confirm password, validation)
- [ ] AuthContext wired (user state, login/logout functions)
- [ ] Axios interceptor (withCredentials: true, 401 auto-logout)

## Public tracking

- [ ] ParcelSearchBar component (reused across landing + track page)
- [ ] TrackPage handles both empty state and `:trackingId` param
- [ ] Loading state while fetching
- [ ] Error/fallback state (invalid ID, search bar stays visible)
- [ ] TrackResult + StatusTimeline display

## User dashboard

- [ ] UserDashboard — parcel count summary + ParcelTable (own parcels only)
- [ ] ParcelDetail — full info + StatusTimeline (read-only)
- [ ] ProtectedRoute redirect logic working

## Admin dashboard

- [ ] AdminDashboard — stats cards (total, pending, in transit, delivered)
- [ ] ParcelTable — all parcels, search/filter/pagination
- [ ] AdminParcelEdit — update status + location
- [ ] AdminRoute redirect logic working
- [ ] AdminUsers (optional)

## Polish

- [ ] Responsive check (mobile/tablet)
- [ ] 404 page
- [ ] Loading skeletons/spinners on all async views
- [ ] Empty states (no parcels yet, etc.)

## Before backend integration

- [ ] All pages built with dummy/mock data
- [ ] API function signatures decided (matches planned Express routes)
