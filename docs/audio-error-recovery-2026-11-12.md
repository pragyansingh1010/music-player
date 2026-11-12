# Audio Error Recovery

Date: 2026-11-12

## Purpose

Describe reliable recovery behavior when a track cannot be loaded or playback is interrupted.

## Behavior guidelines

- Keep the current track and queue state predictable after a playback failure.
- Show a clear message when audio cannot be loaded.
- Allow the user to retry or move to another available track.
- Avoid leaving playback controls in a misleading active state.

## Verification checklist

- [ ] Test a valid audio source.
- [ ] Test a missing or unavailable audio source.
- [ ] Confirm retry and next-track actions work.
- [ ] Confirm the queue remains intact after an error.
