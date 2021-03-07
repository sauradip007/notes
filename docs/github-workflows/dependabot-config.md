# Dependabot Config

This is my standard configuration for GitHub's Dependabot package management tool. This configuration is designed specifically for Node.js projects.

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    labels:
      - "🚦 status: awaiting triage"
```
