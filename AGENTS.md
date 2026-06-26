<!-- BEGIN CROSSHELIX MANAGED BLOCK -->
# CrossHelix for Codex

Use CrossHelix only for non-trivial repo work where local repo evidence helps: unfamiliar areas, broad edits, responsibility-sensitive changes, impact/test focus, or handoff.

CrossHelix is installed in this repo. Use CrossHelix for this repo. Detailed CrossHelix skill: `.agents/skills/crosshelix-codex/SKILL.md`.

Skip CrossHelix for trivial edits, non-repo questions, already-visible one-file fixes, and tiny work where direct reading is cheaper. Do not pass the exact noisy user prompt into CrossHelix; convert the task into precise repo terms, and run `crosshelix reindex --full` if `crosshelix status` shows a missing or stale index before relying on `prepare`/`search`.
<!-- END CROSSHELIX MANAGED BLOCK -->
