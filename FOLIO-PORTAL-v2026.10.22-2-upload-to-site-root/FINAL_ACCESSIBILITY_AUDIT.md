# Final Accessibility Audit

**Standard:** WCAG 2.2 Level AA  
**Package:** FOLIO-PORTAL v2026.10.22-2  
**Date:** 2026-10-22  
**Outcome:** PASS WITH MANUAL VERIFICATION REQUIRED

## Automated and static outcome

- Critical findings: 0
- Serious findings: 0
- Moderate findings: 0
- Minor findings: 0
- Six citizen-facing HTML pages inspected.
- All enhancement feature checks passed.
- All enhancement colour pairs tested at or above 4.5:1.

## Remediations applied

1. Added an explicit accessible name to the visually hidden attachment file input.
2. Added Windows forced-colors support for progress, focus, tooltip and floating return controls.
3. Rotated the service-worker cache and advanced the build to `2026.10.22-2`.

## Verified controls

- Unique IDs, document language, page titles and main landmarks.
- One primary H1 per page and logical heading order within the main landmark.
- Alternative text for static images.
- Accessible names for static links, buttons, form controls and upload controls.
- Valid local in-page targets and ARIA references.
- Visible focus, reduced motion, forced-colors support and mobile touch targets.
- Current-page and current-step semantics.
- Validation, busy-state and live-region semantics.
- Escape recovery and focus restoration.
- Back/forward position restoration.
- Print component integrity and offline precache coverage.

## Enhancement contrast results

- Emerald on deep green: 8.1:1
- Gold on deep green: 10.22:1
- White on deep green: 18.03:1
- Deep green on emerald: 8.1:1

## Manual verification required before formal certification

- Keyboard-only traversal and focus order in a rendered browser.
- NVDA, JAWS and VoiceOver announcements.
- Reflow at 320 CSS pixels and 400% zoom.
- Computed contrast across all inherited design-system states and themes.
- Touch tooltip behaviour on representative mobile devices.
- Production workflow error, timeout, upload, verification and submission states.
- Browser-specific print/PDF pagination.

## Audit limitation

The execution environment did not provide a browser engine or an automated accessibility engine. The result therefore represents a complete static WCAG-oriented audit, syntax validation, integrity verification and explicit enhancement contrast test. It does not replace human assistive-technology testing or a rendered-browser axe/Accessibility Insights run.
