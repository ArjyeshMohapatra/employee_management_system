# Responsive Changes

## src/styles/shared/dashboard-page.css
- Fixed the mobile dashboard layout so the content area no longer keeps the desktop sidebar offset.
- Replaced the invalid mobile `margin-left` declaration with `margin-left: 0`.
- Added `width: 100%` on mobile so the dashboard content can use the full screen width.

## src/app/features/hr-portal/hr-portal.component.html
- Replaced the custom flex filter wrapper with a responsive Bootstrap grid.
- Kept the search bar and status select side by side on large screens with `g-3` spacing.
- Stacked both controls to full width on phones so their left and right edges line up.
- Added an `aria-label` to the status select for accessibility.

## src/app/features/hr-portal/hr-portal.component.css
- Removed the fixed widths and mobile overrides that were forcing the search field and select to misalign.
- Left only a minimal `min-width: 0` rule for the select.

## src/app/shared/ui/search-bar/search-bar.component.css
- Made the search bar host and pill expand to the available width instead of forcing a fixed 320px size.
- Removed the extra bottom margin so spacing is handled by the parent layout gap.
- Added `min-width: 0` so the control can shrink cleanly inside flex and grid layouts.
