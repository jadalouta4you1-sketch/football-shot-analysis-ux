<!--@slide Opening-->
# Can a shot map help coaches compare zones?
A UX/UI semester project by JAD ALOUTA · PEJE99

Question: does adding a shot map to the same statistics improve the accuracy or speed of a zone comparison?

All match values shown here are illustrative, not real match evidence.

---

<!--@slide The user and situation-->
# Coaches need to choose a pattern for video review
A university coach or student analyst reviews a match before planning a debrief or training session.

They need to compare where attempts came from, how many became goals, and whether a rate is based on enough attempts to interpret.

---

<!--@slide Problem frame-->
# We do not yet know whether the map adds value
A table shows the counts and calculations; a shot map may make location easier to scan.

The riskiest assumption is that the map helps the user decide beyond what the table already provides.

**How might we** help a coach compare locations and rates while keeping counts and small-sample limits clear?

---

<!--@slide Evidence status-->
# The current numbers are examples, not research
Illustrative example:
- Inside the box: 2 goals from 10 attempts (20%).
- Outside the box: 1 goal from 2 attempts (50%).

The outside rate has a very small denominator. It should not be treated as proof that outside shots are better.

No participant accuracy or timing results have been collected yet.

---

<!--@slide Task flow-->
# The prototype supports one complete review task
1. Select a sample match.
2. Compare the same counts in a table and on a pitch.
3. Choose a candidate pattern.
4. Review the summary.
5. Save and confirm the saved state.

The design also needs clear states for no attempts, equal rates, and unavailable data.

---

<!--@slide Design decisions-->
# Counts stay beside rates to make comparisons checkable
The table shows attempts, goals, and conversion in the same row.

The pitch shows shot locations and needs a nearby legend that explains goal and miss markers.

Illustrative data stays labeled. A high percentage with few attempts must remain visibly contextualized.

---

<!--@slide Prototype interaction-->
# Saving now has a visible outcome
In the documented designer walkthrough, Save candidate produced no visible confirmation.

The change routes the save action to a screen headed “Saved for video review,” with a separate way back to comparison.

The designer confirmed the new navigation. This was not a participant usability test.

---

<!--@slide Research plan-->
# A small comparison test will answer the open question
Recruit 3–5 coaches, analysts, or football students for a formative study.

Give each participant equivalent tasks in both layouts, vary which layout comes first, and record correct choices, reasoning, time, hesitation, and help needed.

Ask about recent match-review behavior before showing the proposed design.

---

<!--@slide Success and limitations-->
# The success target is proposed, not achieved
Proposed target: at least 80% of participants complete the zone-comparison task correctly within 60 seconds and explain their choice using counts as well as rate.

Compare the raw observations and sample size. Do not generalize beyond the participants or claim statistical significance.

**Current result:** pending participant testing.

---

<!--@slide Next step-->
# Test with users before claiming the map works
Run the planned sessions, document the findings and accessibility audit, prioritize issues, and retest changes.

Then update the results, limitations, portfolio case, and final presentation using only the evidence collected.
