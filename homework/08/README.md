---
week: 08
neptun: PEJE99
---
# Usability comparison and UI guidelines

**Question.** Can a coach identify the higher-rate zone and explain its shot count within a minute? The comparison below uses three scripted roles. Their responses and timings are examples. A separate browser check exercised the actual interface.

**Test plan.** The intended participants are adults who review football matches as coaches or student analysts. For a live session, use anonymous participant codes and written notes with consent. Give each reviewer equivalent fixtures in two layouts and vary which layout comes first. Record the zone, goals and attempts they report, elapsed seconds, requests for help and whether they recognize the saved state. Ask one follow-up: “How do you know your choice was saved?”

In the scenario, tomorrow's training starts with a video discussion. Choose a zone to investigate, explain which zone had the higher rate and how many goals and attempts support it, then leave your selection ready for the video session. Allow either zone as the candidate if justified. Prompt once at the end for how the reviewer knows it was saved. Brief for any live replication: “We are reviewing the interface. Participation is voluntary. You can stop at any time. With your permission I will keep anonymous task notes.”

Score the comparison from task start to explanation: correct higher-rate zone AND correct numerator/denominator AND within 60 seconds unassisted. Score save comprehension separately. Target ≥80%; with three roles that requires 3/3. A = Northside (outside 1/2 vs inside 2/10). B = Riverside (inside 1/3 vs outside 2/9). Each row below is part of the scripted exercise.

| Role | First layout / fixture / response | Second layout / fixture / response | Save observation in initial scenario |
|---|---|---|---|
| P1 | Table / A / outside, 1 of 2, 48 s ✓ | Both / B / inside, 1 of 3, 50 s ✓ | Identified completion |
| P2 | Both / A / outside, 1 of 2, 67 s × | Table / B / inside, 1 of 3, 53 s ✓ | Identified completion |
| P3 | Table / B / inside, omitted attempts, 44 s × | Both / A / outside, 1 of 2, 55 s ✓ | Mistook review for completion |

Both layouts score **2/3** in this scenario. Neither reaches 80%. Task order is only partially balanced with three roles. Simulated times do not estimate time savings.

**Retest scenario after clarifying the legend, counts and saved state** (both layout): P1 B, inside 1 of 3, 46 s; P2 A, outside 1 of 2, 52 s; P3 B, inside 1 of 3, 57 s. Each role identifies the exact saved zone on the confirmation screen. The scripted retest meets 3/3 in this exercise. Repeat exposure and authored outcomes prevent a causal claim. A future live test should use fresh fixtures and counterbalanced order.


## Mini UI guideline

Body 17 px, section heading about 22 px, main heading 32–58 px; system sans. Use spacing steps of 8, 16, 24 and 32 px. Action #075B45 on white, body #16332B on white, focus #9A3B00 on white. White-on-action contrast exceeds 8:1. Use outline plus shape and text for marker meaning. Primary button advances, secondary returns, disabled waits for an eligible selection. Optional note has labeled default, outlined focus and text-error states. Radio buttons select exactly one zone. Tabbing follows reading order. New screens focus the heading. The table carries the map's numeric equivalent.

[Severity and changes](../09/README.md) · [Figma design](https://www.figma.com/design/UZGFEctx8ckCYBNd13DlqQ)

[FigJam walkthrough and retest](https://www.figma.com/board/VBS5Rkxi8Wo0WOWR1HYMJs?node-id=17-227)
