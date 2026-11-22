---
week: 04
neptun: PEJE99
---
# Project brief and priorities

The coach needs to choose one shooting pattern for video review. Reading the highest percentage alone can send the discussion toward a conclusion based on two attempts. The primary task ends when the coach saves one candidate with enough information to explain the choice. Live match feeds, video playback and tactical predictions are outside scope.

| Stakeholder | Need | Constraint |
|---|---|---|
| Coach | Explain one candidate | Limited preparation time (assumption) |
| Student analyst | Trace rate back to counts | Illustrative events only |
| Developer | Implement states consistently | No production service or persistence |

**User story.** As the debrief coach I want to see where a pattern comes from so I can choose a clip sequence and explain the choice. Three design questions guided selection. How might we expose sample size? How might we make shot outcomes readable without color? How might we communicate the point when a choice becomes saved?

| Estimated user impact ↓ / feasibility → | Easy within semester | More effort |
|---|---|---|
| High | Pair counts with rates; put the marker key on the pitch panel; show a receipt with zone and match | Compare the same data in two layouts |
| Lower | Identify fixtures by opponent and date; add an optional review note | Play synchronized video; integrate a live feed |

Estimates are design judgments. Start with the counts and a visible receipt because the primary task depends on both. Keep the map switchable so its contribution can be investigated.


[Problem and success criterion](../01/README.md) · [FigJam board](https://www.figma.com/board/VBS5Rkxi8Wo0WOWR1HYMJs)
