# Reviewing match data on Football-Data.co.uk

Inspecting the England archive on 22 November 2026. Task: find the current Premier League statistics for a match debrief. The site offers season downloads; it is an adjacent workflow for locating match statistics. Screen details below identify the evidence. The existing project's FotMob audit count is not used here. [Examined archive](https://football-data.co.uk/englandm.php)

| ID / severity | Annotated screen detail or check | Principle and consequence | Improvement |
|---|---|---|---|
| A1 High | Pressed Tab six times from the loaded page. Focus traversed links and the Network Sites selector before reaching any league download. | Keyboard bypass / efficient navigation. Repeated navigation slows access to the main task. | Add a visible-on-focus skip link to league downloads. |
| A2 High | “Data Files: England” and season labels appear as ordinary text. The rendered document had zero h1, h2 or h3 elements. | Semantic relationships. Heading navigation cannot jump to a season. | Use one page heading and season subheadings. |
| A3 Medium | 34 links have exactly the text “Premier League” across seasons. | Link purpose. In an isolated list of links the season is ambiguous. | Include season and league in each accessible name. |
| A4 Medium | The date near the top reads 20/11/26; the archive section gives 16/11/26. | System status. A reviewer must infer which date applies to the match file. | Label site and dataset dates separately at point of choice. |
| A5 Medium | League rows list “FT & HT” and “AH”; definitions are in a separate Notes.txt file. | Match with user language / recognition. The reviewer leaves the choice to decode coverage. | Explain abbreviations inline and preview relevant columns. |
| A6 Medium | Season entries lead to league-wide CSVs. The index presents no match picker alongside the file list. | Task efficiency. Choosing one fixture requires opening and filtering another artifact. | Offer a team/date preview with a route to the full dataset. |

**States on the audited index.** Normal lists available seasons. Loading and success are delegated to the browser download flow. No-results, load failure and disabled match actions were not observed on this static index. No deceptive pattern was established in the task.

**Implications for the coach.** Identify each fixture by opponent + date; keep denominators with rates; show explicit confirmation. In the companion prototype check the main task by keyboard and retain tabular access to every aggregate shown on the pitch. This inspection does not certify WCAG conformance.
