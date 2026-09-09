# The Veil Syndicate

> `$VSYNC` is an access token. Users burn it to activate Ciphers and use The Window. ZEC backs each active Cipher.

## Project facts

| Item | Value |
|---|---|
| Project | The Veil Syndicate |
| Network | Robinhood Chain |
| Token | `$VSYNC` |
| Reserve asset | ZEC |
| NFT supply | 2,100 Ciphers |
| Main feature | The Window |
| Team | `0xsbcntrl` |
| Contact | X: [@0xsbcntrl](https://x.com/0xsbcntrl), Telegram: [@sbcntrl](https://t.me/sbcntrl) |

## Short description

The Veil Syndicate is a reserve protocol for Robinhood Chain.

The protocol has a fixed set of 2,100 Ciphers. Each Cipher starts in the Veiled state. The owner burns `$VSYNC` to activate the Cipher. An active Cipher has a ZEC cage and a rank weight.

The Window lets an active owner receive an advance from the Cipher's ZEC cage. The owner burns `$VSYNC` for access. The advance does not use the market price of the Cipher or `$VSYNC`. Future eligible distributions repay the advance first.

## Main terms

- **Cipher:** A programmable NFT with a state, rank, cage, and obligations.
- **Veiled:** The inactive state of a Cipher.
- **Cage:** The ZEC balance assigned to one Cipher.
- **The Window:** An advance against part of a Cipher's cage.
- **Rank weight:** The share used to calculate an eligible distribution.

## How the protocol works

### 1. Veiled state

All 2,100 Ciphers start as Veiled.

A Veiled Cipher:

- remains part of the fixed collection;
- has no reserve weight;
- receives no ZEC distribution;
- cannot open The Window;
- can move to another wallet.

Veiled is a state. It is not a rank.

### 2. Activation

The owner burns `50,000–250,000 $VSYNC (TBD)` to activate a Veiled Cipher as rank 01.

Activation:

- removes the required tokens from circulation;
- creates no staking position;
- creates no token emission;
- enables reserve accounting;
- enables access to The Window.

The protocol does not use the activation burn to pay token holders.

### 3. Ranks

| Rank | Name | Weight | Upgrade cost | Supply limit |
|---:|---|---:|---|---|
| 01 | Cipher | 1x | `50,000–250,000 $VSYNC (TBD)` for activation | Open within 2,100 Ciphers |
| 02 | Nullifier | 2x | TBD | 210 Ciphers |
| 03 | Shadow | 3x | TBD | 105 Ciphers |
| 04 | Syndicate | 5x | TBD | 21 Ciphers |
| 05 | Sovereign | 10x | TBD | TBD |

Weight sets the relative share of an eligible distribution. Weight is not an interest rate. Weight is not a promise of return.

The team must test all rank limits and upgrade costs before deployment.

### 4. Transfer

When an active Cipher moves to another wallet, it becomes Veiled.

The Cipher keeps its history, cage, rank, and obligations. It stops receiving distributions until the new owner burns `$VSYNC` to reactivate it.

The team must decide if an open Window can move with the Cipher. The other option is to block a transfer until the Window is closed.

### 5. Redemption

The owner can burn a Cipher to close the position.

The contract pays the ZEC that remains in the cage after it settles all open Window obligations. Redemption is final. A burned Cipher does not return to the collection.

## The Window

The Window is an advance from a Cipher's accounted ZEC cage.

It lets the owner access liquidity without:

- selling the Cipher;
- burning the Cipher;
- using the market price of `$VSYNC`;
- using a market price oracle;
- facing a price-based liquidation.

### User flow

1. The owner connects an active Cipher.
2. The protocol shows the cage, obligations, rank limit, and available Window.
3. The owner selects an amount within the limit.
4. The protocol shows the required `$VSYNC` burn.
5. The owner burns `$VSYNC` and receives the approved ZEC advance.
6. Future eligible distributions repay the Window first.
7. After repayment, future distributions go to the owner.

If the owner redeems before repayment, the contract subtracts the open advance from the cage.

### Starting limits

These values are for testing. They are not final commitments.

| Rank | Maximum Window share of the cage |
|---|---:|
| Cipher | 10% |
| Nullifier | 20% |
| Shadow | 30% |
| Syndicate | 40% |
| Sovereign | 50% |

The protocol should also set a global utilization limit. The first target is 20% of eligible reserve liquidity.

### Burn quote

The required burn can use system utilization:

```text
VSYNC burn quote = base burn x duration factor x utilization multiplier
```

The burn can be lower when utilization is low. The burn can be higher when utilization is high. New Windows pause when utilization reaches the global limit.

### Solvency rules

The protocol must enforce these rules:

1. The cage and the advance use ZEC accounting.
2. The credit limit does not use a market price.
3. The same ZEC is not assigned to two Ciphers.
4. The advance stays below the rank limit.
5. Future distributions repay the advance first.
6. Redemption subtracts the open obligation.

The interface must show gross cage value, open advance, and net redeemable value as separate values.

## `$VSYNC` utility

`$VSYNC` is an access token. Holding the token alone does not create a return.

| Action | Token action |
|---|---|
| Activate a Veiled Cipher | Burn |
| Reactivate after transfer | Burn |
| Upgrade a rank | Burn |
| Open a Window | Burn |
| Increase or extend a Window | Burn |

The protocol has no planned `$VSYNC` staking emission.

## Reserve policy

The protocol keeps ZEC accounting separate from `$VSYNC` accounting.

The reserve policy must follow these rules:

- Do not promise a fixed APY.
- Do not promise a fixed distribution schedule.
- Do not use an activation burn as reserve revenue.
- Add only realized and verifiable ZEC to the reserve.
- Keep reserve, treasury, and liquidity balances separate.
- Show gross cage value, liabilities, and net value for each Cipher.
- Pause distributions when published coverage limits are not met.

The Window does not create yield. It gives earlier access to ZEC that belongs to a Cipher.

## ZEC and Robinhood Chain

Zcash supports privacy in supported shielded Zcash transactions. Robinhood Chain is a public EVM network. The protocol must not say that ZEC or a Cipher makes public EVM activity private.

Robinhood Chain gives the project an EVM market and a consumer-finance distribution thesis. The project must define the ZEC representation, bridge risk, custody model, and settlement path before launch.

## Users

The first users are:

- users who want reserve-based utility instead of token emissions;
- NFT owners who want a reserve position;
- Zcash users who want ZEC accounting in an EVM system;
- DeFi users who want access without price liquidation;
- collectors who want scarce ranks with public rules.

## Launch plan

### Phase 0: Public specification

- Publish the state machine, reserve policy, and risk disclosures.
- Publish simulations for burns, rank concentration, utilization, and redemption stress.
- Select the ZEC custody or representation model.
- Obtain legal advice.

### Phase 1: Collection and activation

- Deploy the 2,100 Ciphers.
- Deploy `$VSYNC` burn functions.
- Enable activation in the provisional range.
- Show activation and burn data on-chain.

### Phase 2: Cage accounting

- Deploy auditable ZEC accounting.
- Show gross and net values for each Cipher.
- Test redemption with low limits.
- Publish coverage and liquidity data.

### Phase 3: The Window

- Start with low rank limits and low global utilization.
- Allow small advances during the guarded launch.
- Measure utilization, repayment time, and redemption behavior.
- Increase limits only after audits and live data.

## Metrics

Report these metrics:

- active Ciphers;
- activation and reactivation rate;
- `$VSYNC` burned by action;
- gross and net ZEC reserve;
- reserve coverage;
- open Window balance;
- global utilization;
- average Window size and duration;
- Window repayment rate;
- redemption volume and fulfillment time;
- rank and wallet concentration.

## Main risks

### Reserve liquidity

Too much ZEC can leave the reserve while owners request redemption.

Use rank limits, a global utilization limit, a liquidity buffer, and automatic pauses.

### Circular token demand

Demand can depend only on expected token price or distributions.

Make `$VSYNC` necessary for activation, reactivation, rank access, and reserve liquidity. Do not use token emissions or fixed returns.

### Contract risk

An accounting or settlement error can create insolvency.

Use small contracts, formal invariants, audits, guarded limits, and public monitoring.

### ZEC integration

Custody, bridges, and representation can add trust risk.

Publish the reserve instrument and settlement path. Isolate bridge risk. Do not call a wrapped or custodial asset native shielded ZEC.

### Legal risk

The token, NFT, distributions, and advances can have legal requirements.

Obtain advice for each launch jurisdiction. Do not use fixed-return language.

### Concentration

A small number of wallets can gain most rank weight or Window capacity.

Use rank caps, wallet limits, and public concentration data.

## The protocol does not promise

- a fixed yield;
- privacy for public EVM transactions;
- `$VSYNC` staking emissions;
- Window solvency based on the market price of `$VSYNC`;
- uninterrupted redemption or Window access.

## Incubator goals

The project needs support for:

1. Economic tests for rank caps, burns, utilization, coverage, and stress.
2. Contract design for state, cages, Window settlement, and transfers.
3. A credible ZEC reserve and settlement model.
4. Legal analysis for token, NFT, reserve, and lending features.
5. Go-to-market work that focuses on access and public accounting.

## Open decisions

- `$VSYNC` supply and initial distribution;
- reserve fee and seeding policy;
- upgrade burns for ranks 02–05;
- Sovereign supply limit;
- Window duration;
- burn quote model;
- transfer rules for open obligations;
- global utilization limit;
- ZEC custody, bridge, and redemption model;
- governance and emergency control;
- launch jurisdiction.

## Tagline

> `$VSYNC` is the access key. Burn it to activate a Cipher. Open The Window to reach the reserve beneath the veil.
