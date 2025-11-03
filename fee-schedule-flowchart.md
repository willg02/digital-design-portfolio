# Estate Planning Process Flowchart

**Process Driven**: State of the art technology drives our process, ensuring nothing falls through the cracks and that your plan will work, period!

## Legend
- 🟢 **Green**: Requires Client Action
- 🔵 **Blue**: Client Meeting At The Office
- 🔴 **Red**: Not Included In Lite Level Package

---

```mermaid
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'14px'}}}%%
flowchart LR
    %% COLOR STYLES
    classDef clientAction fill:#90EE90,stroke:#333,stroke-width:2px,color:#000
    classDef meeting fill:#87CEEB,stroke:#333,stroke-width:2px,color:#000
    classDef premium fill:#FFB6C1,stroke:#333,stroke-width:2px,color:#000
    classDef standard fill:#FFF,stroke:#333,stroke-width:2px,color:#000
    classDef legendBox fill:#F5F5F5,stroke:#666,stroke-width:1px,color:#333

    %% LEGEND
    subgraph Legend[" "]
        direction TB
        LegendTitle["<b>📋 LEGEND</b>"]:::legendBox
        L1["Client Action"]:::clientAction
        L2["In-Office Meeting"]:::meeting
        L3["Premium Service*"]:::premium
        L4["Standard Step"]:::standard
        LegendTitle ~~~ L1 ~~~ L2 ~~~ L3 ~~~ L4
    end

    %% STAGE 1: ONBOARDING
    subgraph Stage1[" "]
        direction TB
        Stage1Title["<b>⭐ STAGE 1: Client Onboarding</b>"]:::legendBox
        S1["<b>1. Initial Client Contact</b><br/><small>You reach out to begin<br/>the estate planning process</small>"]:::clientAction
        S2["<b>2. Schedule Session</b><br/><small>Family Wealth Planning<br/>Session™ scheduled</small>"]:::standard
        S3["<b>3. Send Welcome Packet</b><br/><small>Pre-meeting packet &<br/>questionnaire sent</small>"]:::standard
        S4["<b>4. Client Confirms</b><br/><small>Confirm receipt &<br/>answer questions</small>"]:::standard
        S5["<b>5. Return Intake Forms</b><br/><small>Complete & return in<br/>postage-paid envelope</small>"]:::clientAction
        S6["<b>6. Planning Meeting</b><br/><small>Diagnose needs, design plan,<br/>sign engagement agreement</small>"]:::meeting
        Stage1Title ~~~ S1 --> S2 --> S3 --> S4 --> S5 --> S6
    end

    %% STAGE 2: DOCUMENT PREP
    subgraph Stage2[" "]
        direction TB
        Stage2Title["<b>📄 STAGE 2: Document Preparation</b>"]:::legendBox
        S7["<b>7. Attorney Follow-Up</b><br/><small>Personal call to<br/>address questions</small>"]:::standard
        S8["<b>8. Send Confirmation</b><br/><small>Confirmation of Important<br/>Information document</small>"]:::standard
        S9["<b>9. Client Approval</b><br/><small>Review & approve or<br/>provide corrections</small>"]:::clientAction
        S10["<b>10. Draft Documents</b><br/><small>Attorney creates first<br/>draft of estate plan</small>"]:::standard
        S11["<b>11. Fly-Speck Review</b><br/><small>Thorough review for<br/>errors & accuracy</small>"]:::standard
        S12["<b>12. Print & Collate</b><br/><small>Final draft printed<br/>& prepared</small>"]:::standard
        S13["<b>13. Signing Meeting</b><br/><small>Review & sign legal docs,<br/>witnessed & notarized</small>"]:::meeting
        Stage2Title ~~~ S7 --> S8 --> S9 --> S10 --> S11 --> S12 --> S13
    end

    %% STAGE 3: FINALIZATION
    subgraph Stage3[" "]
        direction TB
        Stage3Title["<b>✨ STAGE 3: Premium Services & Aftercare</b>"]:::legendBox
        S14["<b>14. Executor Letters*</b><br/><small>Letters to executors &<br/>trustees explaining roles</small>"]:::premium
        S15["<b>15. Trust Funding Docs*</b><br/><small>Deeds, DMV forms, transfer<br/>letters & asset spreadsheet</small>"]:::premium
        S16["<b>16. Digital Scanning*</b><br/><small>PDF creation, document CD<br/>& digital file storage</small>"]:::premium
        S17["<b>17. Ancillary Docs</b><br/><small>Owner's manual, toolkit,<br/>locator & glossary</small>"]:::standard
        S18["<b>18. Assemble Binder</b><br/><small>Complete estate planning<br/>binder prepared</small>"]:::standard
        S19["<b>19. Final Meeting</b><br/><small>Present binder, review plans,<br/>family legacy interview</small>"]:::meeting
        S20["<b>20. Monthly Follow-Up*</b><br/><small>Trust funding verification<br/>& follow-up process</small>"]:::premium
        S21["<b>21. Tri-Annual Check-Ups</b><br/><small>Complimentary check-ups<br/>for life</small>"]:::standard
        Stage3Title ~~~ S14 --> S15 --> S16 --> S17 --> S18 --> S19 --> S20 --> S21
    end

    %% CONNECT STAGES
    Legend -.-> Stage1
    Stage1 ==> Stage2 ==> Stage3
```

---

## How to Use This Flowchart

### In VS Code:
1. Right-click this file and select **"Open Preview"** to see the rendered flowchart
2. You can edit the text and see live updates in the preview

### For WordPress:
1. Install a Mermaid plugin like **"WP Mermaid"** or **"Embed Mermaid Charts"**
2. Copy the code between the \`\`\`mermaid tags
3. Paste it into your WordPress page/post using the Mermaid block or shortcode

### To Export as Image:
1. Use the preview to screenshot
2. Or use online tools like mermaid.live to export as SVG/PNG

---

## Notes for Customization
- Want to change colors? Modify the `classDef` lines at the top of the diagram
- Need to add/remove steps? Just add/remove boxes and connections
- Want different flow? We can adjust the connections between steps
