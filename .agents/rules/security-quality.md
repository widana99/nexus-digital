# Security & Quality Engineering Rules

## Application Security & Hardening (OWASP Compliance)
1. **Zero Client Secrets**: Never expose database strings, private keys, or API tokens in client code or Git. Use `.env.local` with strict environment schema checks.
2. **Strict Server-Side Validation**: Every incoming request, form submission, or parameter must be validated with Zod before database queries or external service calls.
3. **Defense Against Injection & XSS**:
   - Never render raw untrusted user HTML without DOMPurify/sanitization.
   - Use parameterized queries / Prisma / Drizzle / Payload CMS ORM layers exclusively.
4. **Security Headers & CSRF**:
   - Ensure Content-Security-Policy (CSP), Strict-Transport-Security, X-Frame-Options (DENY), and X-Content-Type-Options (nosniff) are configured.
5. **Rate Limiting**: Public forms and sensitive endpoints must be throttled to prevent credential stuffing and automated submission spam.

## Code Craft & Completeness
1. **Full Output**: Generate full, production-ready code. Do not omit implementations or leave placeholder ellipsis `// ... rest of code`.
2. **Error Handling**: Graceful degradation with typed errors and clean user-facing error messages (no raw stack traces exposed to clients).
3. **Verification**: Verify builds and test outputs before reporting completion.
