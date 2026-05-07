export const initialTree = {
  id: "root",
  label: "Root",
  meta: { type: "root", version: "1.0" },
  children: [
    {
      id: "a",
      label: "Frontend",
      meta: { type: "module", owner: "UI Team" },
      children: [
        {
          id: "a1",
          label: "React",
          meta: { type: "library", version: "18.x" },
          children: [
            { id: "a1a", label: "Components", meta: { type: "folder", files: 24 }, children: [] },
            { id: "a1b", label: "Hooks", meta: { type: "folder", files: 8 }, children: [] },
          ],
        },
        {
          id: "a2",
          label: "Styling",
          meta: { type: "module", owner: "Design" },
          children: [
            { id: "a2a", label: "CSS Modules", meta: { type: "tool" }, children: [] },
            { id: "a2b", label: "Tokens", meta: { type: "config" }, children: [] },
          ],
        },
        {
          id: "a3",
          label: "State",
          meta: { type: "module", owner: "Arch Team" },
          children: [
            { id: "a3a", label: "Zustand", meta: { type: "library", version: "4.x" }, children: [] },
          ],
        },
      ],
    },
    {
      id: "b",
      label: "Backend",
      meta: { type: "module", owner: "API Team" },
      children: [
        {
          id: "b1",
          label: "API",
          meta: { type: "service", port: 3000 },
          children: [
            { id: "b1a", label: "REST", meta: { type: "spec" }, children: [] },
            { id: "b1b", label: "GraphQL", meta: { type: "spec" }, children: [] },
          ],
        },
        {
          id: "b2",
          label: "Database",
          meta: { type: "service", engine: "PostgreSQL" },
          children: [
            { id: "b2a", label: "Migrations", meta: { type: "folder", count: 42 }, children: [] },
            { id: "b2b", label: "Seeds", meta: { type: "folder", count: 7 }, children: [] },
          ],
        },
      ],
    },
    {
      id: "c",
      label: "DevOps",
      meta: { type: "module", owner: "Infra Team" },
      children: [
        {
          id: "c1",
          label: "CI/CD",
          meta: { type: "pipeline", provider: "GitHub Actions" },
          children: [
            { id: "c1a", label: "Build", meta: { type: "step" }, children: [] },
            { id: "c1b", label: "Test", meta: { type: "step" }, children: [] },
            { id: "c1c", label: "Deploy", meta: { type: "step" }, children: [] },
          ],
        },
        {
          id: "c2",
          label: "Monitoring",
          meta: { type: "service", provider: "Datadog" },
          children: [
            { id: "c2a", label: "Alerts", meta: { type: "config" }, children: [] },
          ],
        },
      ],
    },
  ],
};
