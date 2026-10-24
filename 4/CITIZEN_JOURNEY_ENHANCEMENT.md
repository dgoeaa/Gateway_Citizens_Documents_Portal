# Citizen Premium Portfolio Journey UX Enhancement

## Change summary

A focused, additive citizen-journey layer improves orientation, keyboard access, feedback, responsive behaviour, contextual help, state preservation and print integrity while preserving the portal's existing business logic, routes, content, DGO/NITDA visual system, endpoint configuration, data contracts and user flows.

## Modified files and components

- `index.html`, `submit.html`, `track.html`, `support.html`, `privacy.html`, `404.html`: shared journey stylesheet and script references.
- `portal-journey.css`: new additive interaction, accessibility, responsive and print layer.
- `js/portal-journey.js`: new additive journey and assistive behaviour.
- `sw.js`: new journey assets added to the offline shell; cache build rotated.
- `BUILD-ID.json`: package advanced to `2026.10.22-1` with a new code fingerprint.
- No endpoint, configuration, taxonomy, content, branding asset, submission payload or tracking contract was changed.

## Before and after

1. **Page orientation**: pages previously relied on the primary navigation and page heading. They now also expose a compact citizen-portal location indicator and explicit active-page state.
2. **Journey position**: long pages previously offered no persistent progress signal. They now include a slim brand-aligned reading-progress line and a back-to-top return path.
3. **Back/forward context**: browser return navigation previously used browser defaults only. The enhancement preserves the last scroll position for back/forward restoration.
4. **Submission steps**: the visual stepper remains unchanged, while current, completed and upcoming states are now reflected in accessible labels and announced as the wizard advances.
5. **Dynamic results**: key upload, review, tracking and live-information regions now expose polite live-region semantics where missing.
6. **Validation and busy states**: invalid controls receive `aria-invalid` and linked error guidance; application loading states are mirrored through `aria-busy` and a non-colour spinner treatment.
7. **Overlays and mobile navigation**: Escape closes supported dialogs or the mobile navigation and restores a logical focus target.
8. **Component integrity**: panels, cards, fields, tables, figures, headings and captions avoid inappropriate print fragmentation.

## Navigation improvements

- Active primary and mobile navigation state via `aria-current="page"`.
- Citizen-portal location indicator on every portal surface.
- Page progress indicator and back-to-top action.
- Scroll-position restoration for browser back/forward navigation.
- Escape-key recovery for dialogs and mobile navigation.
- Existing breadcrumbs, page routes, wizard controls and command search remain authoritative and unchanged.

## Interface feedback and response states

- Existing portal success, warning, error, loading, upload-progress and confirmation flows are preserved.
- Added polite announcements for step changes, processing, invalid input and dialog closure.
- Existing `data-loading` states are exposed as `aria-busy` and receive a supplementary spinner treatment.
- Invalid inputs retain entered data and are linked to their existing field-level error messages.
- Existing destructive-action dialogs remain the only confirmation mechanism; the enhancement adds explanatory context but does not duplicate confirmation.
- Existing duplicate-submission prevention in the submission and tracking flows is preserved.

## Tooltips and assistive indicators

- Icon-only controls with accessible names receive keyboard- and pointer-accessible supplementary tooltips.
- Controls explicitly using `data-tooltip` receive the same treatment.
- The back-to-top action explains its purpose.
- The form-clear action explains that the portal asks for confirmation before removal.
- Essential labels and instructions remain visible and are never replaced by tooltips.

## Accessibility and responsive design

- High-visibility focus indicators using the approved gold accent.
- Touch behaviour and 44-pixel controls at narrow breakpoints.
- Screen-reader status region and state announcements.
- Accessible step labels and current-step semantics.
- Linked field errors, `aria-invalid`, `aria-busy` and active-page states.
- Reduced-motion support for new animation and transitions.
- Safe-area-aware floating action placement.
- Print break controls for complete components, headings and field groups.
- Small-screen location indicator overflow protection without hiding essential content.

## Regression tests and results

See `CITIZEN_JOURNEY_TEST_RESULTS.json` for machine-readable results. Checks cover source integrity, modified-file scope, HTML entry points, local asset references, JavaScript syntax, stylesheet structure, service-worker precache coverage, routes, forms, endpoint configuration integrity and final bundle checksums.

## Limitations and assumptions

- The supplied package is a static citizen portal; live endpoint execution was not performed because external tenant credentials and production workflow calls are outside this build environment.
- Browser and assistive-technology visual QA should still be completed in the organisation's supported device matrix.
- Existing portal dialogs, toasts, draft storage, upload processing and tracking writeback remain the source of truth; the enhancement adds semantics and navigation support without replacing them.
