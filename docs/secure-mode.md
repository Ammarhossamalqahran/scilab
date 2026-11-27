# Monitored test mode (spot test, exam identify station)

Active only while a test is running. Code: `src/lib/useTestGuard.ts`, `src/components/TestGuardNotice.tsx`.

## What it really does
- Shows a "this test is monitored" notice during the test.
- Detects leaving the page: tab switch, app switch, lost window focus, page hide. Counts each one.
- Covers the questions with a blank screen while the page is not in front.
- Shows the number of exits next to the result at the end of the spot test.
- Blocks copy, cut, right-click, text selection, dragging, Ctrl/Cmd+P/S/C/X/U, and hides the page in print.
- Notes a PrintScreen key press (desktop keyboards only) and tries to clear the clipboard.

## What it cannot do (web limits)
- It cannot block or detect screenshots or screen recording. Browsers give pages no way to do that.
- It cannot stop screen sharing, a second phone photographing the screen, or a remote helper.
- Phone screenshot gestures do not always change focus, so they may leave no trace.
- Anyone with dev tools or a modified browser can switch the guard off.
- It only records and warns. It does not void or fail an attempt (easy to add later).

## What would really block screenshots
A native Android wrapper (FLAG_SECURE) for the Google Play version. That is Android only. iOS needs a separate approach.
