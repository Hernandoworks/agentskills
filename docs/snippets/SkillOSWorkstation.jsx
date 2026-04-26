export const SkillOSWorkstation = () => {
  const agents = [
    { name: "Planner", state: "Running", color: "ready" },
    { name: "Research", state: "Indexing", color: "working" },
    { name: "Builder", state: "Compiling", color: "working" },
    { name: "Reviewer", state: "Idle", color: "idle" }
  ];

  const files = [
    "skills/marketing/SKILL.md",
    "skills/finance/SKILL.md",
    "skills/onboarding/SKILL.md",
    "scripts/validate-skills.py",
    "README.md"
  ];

  return (
    <div className="skill-os-shell">
      <header className="skill-os-topbar">
        <div className="skill-os-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="skill-os-title">Skill OS — Full Workstation</div>
        <div className="skill-os-status">Connected · 4 Agents</div>
      </header>

      <main className="skill-os-grid">
        <aside className="skill-os-sidebar">
          <h4>Workspaces</h4>
          <ul>
            <li className="active">Core Skills</li>
            <li>Agent Playground</li>
            <li>Eval Suite</li>
            <li>Deployment</li>
          </ul>
          <h4>Recent Files</h4>
          <ul className="skill-os-files">
            {files.map((file) => (
              <li key={file}>{file}</li>
            ))}
          </ul>
        </aside>

        <section className="skill-os-editor">
          <div className="skill-os-panel-title">SKILL.md</div>
          <pre>
{`---
name: customer-onboarding
description: Guides customer setup, ticket routing, and handoff workflows.
---

## Workflow
1. Collect account metadata from CRM.
2. Generate onboarding checklist based on plan tier.
3. Assign owners and due dates.
4. Produce final handoff summary for support.

## Quality checks
- Ensure all integrations are validated.
- Confirm contacts and escalation paths are set.
- Log unresolved blockers in /ops/incidents.
`}
          </pre>
        </section>

        <section className="skill-os-right">
          <div className="skill-os-panel">
            <div className="skill-os-panel-title">Agent Queue</div>
            <ul className="skill-os-agents">
              {agents.map((agent) => (
                <li key={agent.name}>
                  <span className={`dot ${agent.color}`} />
                  <span>{agent.name}</span>
                  <span className="state">{agent.state}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-os-panel">
            <div className="skill-os-panel-title">Terminal</div>
            <pre className="skill-os-terminal">
{`$ skills-ref validate skills/
✔ Parsed 42 skill manifests
✔ Lint checks passed
✔ Prompt XML generated

$ git status
On branch feat/skill-os-workstation
Changes not staged for commit:
  modified: docs/style.css
  added: docs/snippets/SkillOSWorkstation.jsx
`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};
