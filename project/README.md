# Football Shot Analysis for Training Decisions

**Student:** JAD ALOUTA · **Neptun:** PEJE99  
**Project type:** One individual UX/UI semester project, developed through the course stages.

## Project summary

A university football coach or student analyst reviewing a match needs to compare attempts, goals, and conversion rates by pitch zone, then save a candidate pattern for video review. The project explores whether pairing a shot map with the same statistics makes that comparison easier than a table alone.

**Evidence status:** The figures in the current prototype are illustrative. The comparison study has not been run, so the benefit of the map is still a hypothesis. This project does not claim measured improvement.

## Framing

- **User goal:** Identify a shot pattern worth reviewing and understand the counts behind the rate.
- **Organizational goal:** Help coaching staff prepare a focused match debrief and training discussion.
- **Constraint:** The present sample data are illustrative; a small number of attempts can make a conversion rate misleading.
- **Problem statement:** A coach preparing a match debrief wants to compare shot outcomes by location, but the current evidence does not show whether a map alongside a table helps them choose and explain a pattern more accurately or quickly.
- **How might we:** How might we help a coach compare shot locations and conversion rates at a glance while keeping attempt counts and small-sample limits clear?
- **User story:** As a coach, I want to compare attempts and goals by zone, so I can choose a candidate for video review and explain why it merits a closer look.
- **Proposed success criterion (not yet tested):** In a small moderated pilot, at least 80% of participants complete the zone-comparison task correctly within 60 seconds and explain their choice using the counts as well as the conversion rate. Report the sample size and individual observations; do not generalize beyond the sample.

## Scope and task flow

1. Select the illustrative match.
2. Compare attempts, goals, and conversion by zone in the table and shot map.
3. Select a candidate pattern.
4. Review the summary.
5. Save it and confirm the visible saved state.

The interface should distinguish: a zone with no attempts, equal rates, and unavailable match data. It should show the attempt count beside every rate and identify illustrative data.

## Course-stage timeline and evidence

| Stage | Course work | Current status |
|---|---|---|
| 1 | Product thinking, goals, constraints, problem frame, success criterion | Framed here; assumptions and criterion are explicitly unvalidated |
| 2 | Research questions, interviews/observation, insights, persona and journey | Research plan is documented; participant evidence is pending |
| 3 | Usability, accessibility, error/feedback states, ethics | One save-feedback issue was observed in a designer walkthrough; full heuristic and accessibility audit is pending |
| 4 | Brief, stakeholders, target user, user story, HMW, prioritization | Core user and HMW are framed here; stakeholder and prioritization artifacts still need to be added to FigJam |
| 5 | Content structure, sitemap, navigation, task flow and edge cases | Main task and edge cases are specified here; sitemap and visual flow artifact still need verification in FigJam |
| 6 | Low-fidelity wireframes, hierarchy, visual system, components and responsive behavior | Existing Figma pages are labeled for this stage; screens need a manual review for required evidence |
| 7 | Interaction patterns, scenario and clickable prototype | Existing prototype is linked; interaction sequence needs a manual end-to-end check |
| 8 | Usability test plan, moderation, metrics, findings and severity | Test protocol is documented; actual participant sessions and findings are pending |
| 9 | Hypotheses, decision log, iteration, results and handoff | Save-confirmation change is recorded; retest with participants, remaining decision log and developer handoff are pending |
| 10 | Evidence-led presentation, portfolio case and reflection | Updated presentation source is in the repository; final results and portfolio case must follow real testing |

## Current evidence and limitations

The current presentation documents a designer walkthrough in which Save candidate had no visible confirmation. A saved-state screen was added and the click path was checked again. That verifies the navigation change only; it does not establish usability with participants.

The earlier PDF in the repository is a snapshot, not a final evidence-complete submission. It includes a claim about five audit findings without listing them. Use the audit log and current presentation source for the evidence status; do not submit the old PDF as if the five findings were documented.

## Next evidence to collect

1. Complete the FigJam artifacts for research, framing, prioritization, and information architecture.
2. Conduct and document a small ethical study with relevant participants using the plan in `docs/research-and-testing-plan.md`.
3. Complete the heuristic and accessibility audit in `docs/accessibility-audit.md`.
4. Retest the changed prototype, record results and limitations, and update the presentation from the actual evidence.

## Assessment reminder

The course assessment page lists the final project, at least 70% class attendance, and a mandatory written test. This project repository cannot document attendance or replace the written test.
