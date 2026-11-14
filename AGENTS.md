# AGENTS.md — Global Directives for PT NEXUS DIGITAL STRATEGY

<!-- antislop:start -->
## Mandatory Skill & Rule Orchestration
For ANY prompt or task in this repository (UI, frontend, backend, copy, security, or architecture), the agent must automatically enforce:
- **Anti-AI Slop**: Follow the complete ruleset from `antislop` (R-01 to R-38), `no-ai-slop`, `antislop-ui`, `antislop-copywriting`, `antislop-human`, `antislop-layoutmobile`, and `antislop-code`.
- **Visual Design System**: Adhere strictly to [design.md](file:///c:/Users/Lenovo/project/Web%20Project/nexus-digital/design.md) (Editorial Luxury, Quiet Confidence, Deep Navy `#031F44`, Newsreader serif display, Schibsted Grotesk, 1px hairlines).
- **Frontend Quality**: Follow `frontend-ui-engineering`, `ui-craft`, `high-end-visual-design`, and `emil-design-eng` (mobile-first, WCAG AA contrast, complete loading/error/empty states, keyboard accessibility).
- **Security & Hardening**: Follow `security-and-hardening` (OWASP compliance, strict Zod schemas, CSP/security headers, server-side sanitization, zero credential exposure).
- **Engineering Verification**: Follow `verification-before-completion`, `code-review-and-quality`, and `systematic-debugging`.
<!-- antislop:end -->

---

## Behavioral Checklist Applied Automatically Every Prompt:
1. **Never use the em dash (`—`)** in generated copy or text.
2. **Never write generic AI buzzwords** ("cutting edge", "seamless", "next generation", etc.).
3. **Never fabricate statistics, testimonials, or claims**.
4. **Never create dead interactive elements**; all buttons and links must be functional.
5. **Always provide full, un-truncated, working code**.
6. **Always adhere to the institutional, quiet-confidence brand direction of NEXUS**.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
