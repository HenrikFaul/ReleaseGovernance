# App Repo Governance Template

This template is preconfigured to consume the shared governance pack from `HenrikFaul/governance`.

## Initial subtree command
```bash
git subtree add --prefix .governance https://github.com/HenrikFaul/governance.git main --squash
```

## Regenerate AI instruction files
```bash
node .governance/tools/generate-instructions.mjs
```


## Append-only governance sync note
When the shared governance pack changes, pull the updated `.governance/` subtree and preserve append-only local changelog history.
Do not replace or truncate historical `CHANGELOG.md` content during governance sync work.
