# The Warden

The Warden is an AI agent that helps a Cipher owner manage a reserve position. The owner sets the limits. Smart contracts enforce them.

## Project facts

| Item | Value |
|---|---|
| Ecosystem | The Veil Syndicate |
| Network | Robinhood Chain |
| Token | `$VSYNC` |
| Reserve asset | ZEC |
| Main feature | The Window |
| Team | `0xsbcntrl` |
| Contact | [@0xsbcntrl on X](https://x.com/0xsbcntrl), [@sbcntrl on Telegram](https://t.me/sbcntrl) |

## The problem

An active Cipher has a rank, a ZEC cage, a net redeemable value, an open Window balance, and a set of transfer rules. The owner must also watch reserve utilization and the current `$VSYNC` burn quote.

The Warden reads these values and explains the available choices. It can prepare an action. It can execute an action only when a signed mandate allows it.

## Example mandate

An owner can write:

> Keep at least 70% of my net cage. Open a Window only when the burn is below 8,000 `$VSYNC` and global utilization is below 15%. Send future distributions to repayment. Do not transfer or redeem the Cipher.

The Warden converts this request into limits:

```yaml
minimum_net_cage: 70%
maximum_window: 30%
maximum_vsync_burn: 8000
maximum_global_utilization: 15%
distribution_destination: window_repayment
can_transfer: false
can_redeem: false
mandate_expiry: 30 days
```

The smart account checks these values before every transaction. The language model cannot change them.

## Authority levels

### Observer

The Warden can read the Cipher, calculate Window capacity, compare repayment cases, and send reports. It cannot prepare or execute a transaction.

### Copilot

The Warden can prepare a transaction and explain it. The owner signs every action.

### Autopilot

The Warden can execute a small set of approved functions. Each mandate sets a burn cap, a value cap, a Window limit, a minimum net cage, an allowed utilization level, an expiry time, and a revocation method.

Transfer, permanent redemption, mandate expansion, and unrestricted token transfers require direct owner approval.

## What the Warden can do

### Compare Window choices

For each choice, the Warden shows:

- ZEC received;
- `$VSYNC` burned;
- gross and net cage after the action;
- estimated repayment time;
- effect on transfer and redemption;
- conditions that can block the action.

It can compare a 10% advance, a 20% advance, the maximum rank limit, and a wait condition when the owner uses those limits.

### Execute approved actions

Within a mandate, the Warden can wait for conditions, open or increase a Window, direct distributions to repayment, close a Window when the balance allows it, and stop its own actions when conditions become unsafe.

### Explain the Cipher state

The Warden reports reserve coverage, Window utilization, cage obligations, distribution history, burn quote changes, contract pause states, mandate expiry, and transfer effects.

### Prepare a transfer report

Before a transfer, it can show the open obligation, net reserve value, Veiled transition, and repayment choices. It can revoke its own mandate after ownership changes.

### Produce reserve reports

Each report can include gross and net reserve, open Window exposure, burns by action, repayment progress, utilization, actions taken under each mandate, and forecast errors. Each value must link to on-chain data.

## `$VSYNC` use

The Warden can add token use for actions that require access or execution:

| Agent action | Token use |
|---|---|
| Activate a mandate | Burn |
| Renew a mandate | Burn |
| Increase execution capacity | Burn |
| Open or increase The Window | Burn through the Window function |
| Request an advanced simulation | Small burn or protocol credit |
| Register an automation policy | Burn |

Monitoring should remain available at low cost. Actions with financial effect can require a larger burn. The agent must not pay rewards through token emissions.

## Contract boundary

The model reads intent and compares cases. A policy compiler turns the intent into limits. The owner signs the mandate. A restricted executor submits an allowed function. The protocol contract checks the transaction. The result stays on-chain.

The model chooses from allowed actions. It does not define reserve value, Window limits, or redemption rules.

## Security rules

The Warden must not:

- change Window limits;
- change reserve accounting;
- transfer or redeem a Cipher without approval;
- send funds to an arbitrary address;
- exceed a burn or value cap;
- extend its own mandate;
- change the owner's risk policy;
- bypass a protocol pause;
- hide an action.

The system must use allowlisted contracts and functions, value caps, mandate expiry, owner revocation, simulation before execution, transaction receipts, an emergency pause outside the model, and separate storage for prompts, policies, and signing authority. The language model must not receive a private key.

## Agent-owned Ciphers

In a later phase, an agent can operate a Cipher under a human or organization constitution. The Cipher can hold a ZEC cage, a `$VSYNC` budget, a rank, an open Window balance, a signed mandate, an action history, and a reputation record.

The agent can use the Window for approved work. Future distributions can repay the advance. The authority remains limited by the constitution and the contract rules.

## Reputation

The Warden can use an agent identity standard such as [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004).

Reputation can record mandate compliance, successful execution rate, blocked policy violations, forecast accuracy, repayment performance, emergency-pause response, and independent validation.

Reputation must not increase authority. A trusted Warden still follows the signed mandate for each Cipher.

## Build order

### 1. Observer

Read Cipher and reserve state. Answer questions. Compare Window cases. Send alerts. Execute no transactions.

### 2. Copilot

Prepare transactions. Convert plain-language goals into policies. Require owner approval. Explain each transaction before and after execution.

### 3. Limited Autopilot

Use expiring mandates, allowlisted functions, burn caps, value caps, immediate revocation, and low execution limits.

### 4. Autonomous Ciphers

Add agent identity, reputation, bounded operating budgets, independent action validation, and tests for agent-to-agent actions.

## Measures of success

Track active mandates, authority-level use, `$VSYNC` burned by agent actions, actions within limits, blocked policy violations, Window repayment time, forecast error, mandate revocations, value under restricted mandates, and agent-operated Ciphers.

## Open decisions

- one Warden for all Ciphers or one identity per Cipher;
- burn for mandate activation and renewal;
- first Autopilot functions;
- maximum mandate duration;
- burn for advanced simulations;
- smart-account design;
- identity and reputation standard;
- forecast data sources;
- privacy for user instructions;
- legal treatment of automated actions;
- requirements for agent-owned Ciphers.

## Application summary

The Warden is the AI agent for The Veil Syndicate. It helps Cipher owners read a ZEC reserve position and manage The Window. Owners write a goal in plain language. The Warden turns that goal into a limited mandate. Contracts check every action.

The first release should only observe and explain. Later releases can prepare transactions and run small, expiring automations. The project should enable agent-owned Ciphers only after the contract limits, revocation path, and action records work in production.
