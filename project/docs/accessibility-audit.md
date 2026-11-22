# Usability and accessibility audit

**Status: in progress.** This file separates observed evidence from items that have not been checked.

## Documented observation

| ID | Evidence | Issue | Change | Verification | Status |
|---|---|---|---|---|---|
| A-01 | Designer walkthrough of the summary screen | Clicking “Save candidate” gave no visible confirmation, so the user could not tell whether the action completed | The button now opens a saved-state screen headed “Saved for video review”; “Back to comparison” remains a separate action | The designer clicked Save candidate again and saw the saved-state heading | Navigation checked; user understanding not yet tested |

The presentation previously mentioned five “verified” findings without listing the evidence. That count is not substantiated in the repository and is intentionally not repeated here. Add findings only after directly observing and documenting them.

## Audit checklist

Review the Figma screens and clickable prototype. For every issue, record the screen/state, exact evidence, user consequence, severity, recommendation, and retest status.

- **Task clarity:** Can the user identify the match, compare zones, choose a pattern, and understand what is saved?
- **Counts and rates:** Are attempts, goals, and conversion rate visible together? Is the denominator clear? Does the UI avoid implying that a 1/2 rate is strong evidence?
- **Visual encoding:** Are goal and miss markers distinguishable without relying only on color? Is a legend close to the pitch map?
- **Feedback and errors:** Are loading, empty, unavailable-data, success, and error states distinct? Can a user recover?
- **Keyboard use:** Can every action be reached and operated with a keyboard, with a visible focus indicator and sensible order?
- **Text and controls:** Are labels descriptive, text readable, contrast sufficient, and controls large enough to use comfortably?
- **Responsive behavior:** Does the comparison remain understandable on narrow screens and at enlarged text?
- **Assistive technology:** Are controls named, relationships understandable, and status changes announced where applicable?
- **Ethics:** Are illustrative values clearly labeled? Does the interface avoid misleading recommendations or unsupported performance claims?

A checklist item is not a verified pass until it has been inspected and the evidence is recorded. Use the course’s required WCAG reference when assigning criteria; do not guess criterion numbers.
