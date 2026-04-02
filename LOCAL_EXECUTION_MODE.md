# Local Execution Mode

This repository follows the shared governance pack from `HenrikFaul/governance`.

For execution behavior, treat these shared files as canonical:
- `agent_execution_rules.md`
- `no_permission_loop.md`
- `connector_write_minimization.md`

Local operating expectation:
- do not open extra chat-level permission loops for GitHub, Jira, changelog, governance, or documentation writes when the request already implies execution
- continue after tool-level confirmation dialogs without re-asking the same thing in chat
- minimize connector friction by grouping writes where possible
