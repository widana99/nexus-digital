# Anti-Slop & Human Copywriting Rules

These rules apply universally to all code, text, mockups, and designs produced in this workspace:

## Absolute Prohibitions (Hard Gates)
1. **Em Dash Prohibition (R-02)**: Do not use the em dash (`—`) in UI copy, marketing text, documentation, or code comments written by the agent. Use commas, periods, colons, or parentheses instead.
2. **AI Buzzword Ban (R-16)**: Banned words include: *AI-powered, revolutionary, next-generation, seamless, cutting-edge, ultimate, effortless, powerful, intelligent, robust, game-changing*. Write clear, grounded, institutional sentences.
3. **No Fabricated Evidence (R-17, R-18, R-36)**:
   - No fake statistics (e.g. "99.9% uptime", "10k+ clients", "300% faster").
   - No fake client testimonials, fictional executive quotes, or artificial reviews.
   - If real data is missing, use explicit placeholders like `[REAL DATA]` or omit the metric entirely.
4. **No Dead Interactive Controls (R-26)**:
   - Every button, dropdown, link, and toggle must be wired to real behavior, real routes, or legitimate modal states.
   - Never ship placeholder buttons that do nothing when clicked.
5. **No Visual AI Clichés (R-01, R-05, R-07, R-10, R-13, R-22)**:
   - No generic blue-to-purple or rainbow gradients.
   - No stacked trendy effects (excessive blur + neon glow + floating cards + grid lines).
   - No fake terminal windows with typing animations unless explicitly required.
   - No 3D blob characters or stock unDraw illustrations.

## UI States & Verification (R-27, R-35)
- Every component fetching or displaying dynamic data must implement:
  - **Loading state** (clean, proportional skeleton or subtle indicator)
  - **Empty state** (clear guidance on what to do when no records exist)
  - **Error state** (actionable retry or support path)
- Run the Delivery Gate before finalizing any deliverable.
