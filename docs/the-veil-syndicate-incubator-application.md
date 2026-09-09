# The Veil Syndicate

`$VSYNC` is spent to change a Cipher's state. ZEC records the value assigned to that Cipher. The Window lets an active owner take an advance from that recorded value.

## Project facts

| Item | Value |
|---|---|
| Network | Robinhood Chain |
| Collection | 2,100 Ciphers |
| Access token | `$VSYNC` |
| Reserve asset | ZEC |
| Main financial feature | The Window |
| Team | `0xsbcntrl` |
| Contact | [@0xsbcntrl on X](https://x.com/0xsbcntrl), [@sbcntrl on Telegram](https://t.me/sbcntrl) |

## What the protocol does

Every Cipher starts as **Veiled**. It can move between wallets, but it has no reserve weight and receives no ZEC distribution.

The owner burns `50,000–250,000 $VSYNC (TBD)` to activate it as rank 01, Cipher. Activation gives the Cipher a reserve weight and access to The Window. The burn does not create a staking position or a promised return.

The Window advances part of the Cipher's own ZEC cage. It uses ZEC accounting, not the market price of the NFT or `$VSYNC`. Future eligible distributions repay the advance first. Redemption deducts any open balance before it pays the remaining ZEC.

## Ranks

| Rank | Name | Weight | Supply limit | Upgrade cost |
|---:|---|---:|---:|---|
| 01 | Cipher | 1x | Open within 2,100 | `50,000–250,000 $VSYNC (TBD)` for activation |
| 02 | Nullifier | 2x | 210 | TBD |
| 03 | Shadow | 3x | 105 | TBD |
| 04 | Syndicate | 5x | 21 | TBD |
| 05 | Sovereign | 10x | TBD | TBD |

Weight controls a Cipher's share of an eligible distribution. It does not set an interest rate.

The team must test the rank caps, upgrade burns, and Sovereign limit before deployment.

## The Window

The Window gives an active owner access to part of the Cipher's recorded ZEC cage. The owner keeps the Cipher.

The owner sees these values before an advance:

- gross cage value;
- open Window balance;
- net redeemable value;
- rank limit;
- current reserve utilization;
- required `$VSYNC` burn.

The owner then selects an amount, reviews the burn, and signs the transaction. Eligible distributions repay the Window before the owner receives a normal distribution.

### Starting limits

These limits are test values:

| Rank | Maximum share of the cage |
|---|---:|
| Cipher | 10% |
| Nullifier | 20% |
| Shadow | 30% |
| Syndicate | 40% |
| Sovereign | 50% |

The first system-wide target is to keep open Windows below 20% of eligible reserve liquidity. New Windows pause when the limit is reached.

### Burn quote

The proposed quote is:

```text
VSYNC burn quote = base burn x duration factor x utilization multiplier
```

The quote can rise as utilization rises. The formula and its limits require simulation before launch.

### Transfer and redemption

An active Cipher becomes Veiled when it moves to another wallet. Its history, cage, rank, and open obligations remain attached to it. The new owner must reactivate it before it can receive distributions again.

The team must choose between two transfer rules:

1. allow the open obligation to move with the Cipher;
2. block the transfer until the Window is closed.

The owner can burn a Cipher to redeem its cage. The contract settles the open Window first. A redeemed Cipher does not return to the collection.

## Token use

`$VSYNC` is used when a holder requests a protocol action.

| Action | Token use |
|---|---|
| Activate a Veiled Cipher | Burn |
| Reactivate after transfer | Burn |
| Upgrade a rank | Burn |
| Open a Window | Burn |
| Increase or extend a Window | Burn |

There is no planned `$VSYNC` staking emission. Holding the token alone does not produce ZEC.

## Reserve rules

The protocol must keep token accounting and ZEC accounting separate.

It must:

- add only realized and verifiable ZEC to reserve records;
- show gross cage value, liabilities, and net value for each Cipher;
- keep reserve, treasury, and liquidity balances separate;
- pause distributions when published coverage limits are not met;
- avoid fixed APY and fixed distribution promises.

The Window does not create yield. It changes when the owner can use ZEC already assigned to a Cipher.

## ZEC and Robinhood Chain

Zcash can provide privacy inside supported shielded Zcash transactions. Robinhood Chain is a public EVM network. The protocol must not say that a Cipher or a ZEC position makes public EVM activity private.

Before launch, the team must specify the ZEC instrument, custody model, bridge exposure, and redemption path.

## Who this is for

The first users are NFT owners who want a reserve position, Zcash users who want ZEC accounting in an EVM system, and DeFi users who want an advance without a price-based liquidation.

## Work required before launch

1. Simulate rank concentration, burn demand, reserve utilization, and redemption stress.
2. Define the Cipher state machine and Window settlement rules.
3. Choose and document the ZEC custody or representation model.
4. Obtain legal advice for the token, NFT, reserve, and lending features.
5. Launch with low Window limits and publish the results.

## Metrics

The project should publish:

- active Ciphers;
- activation and reactivation rate;
- `$VSYNC` burns by action;
- gross and net ZEC reserve;
- reserve coverage;
- open Window balance;
- global utilization;
- average Window size and duration;
- Window repayment rate;
- redemption volume and fulfillment time;
- concentration by rank and wallet.

## Main risks

**Reserve liquidity.** Open advances can reduce the ZEC available for redemption. Rank caps, a global utilization limit, a liquidity buffer, and automatic pauses reduce this risk.

**Contract accounting.** A settlement error can make the displayed balance wrong. The project needs small contracts, formal invariants, audits, and public monitoring.

**ZEC integration.** Custody and bridge choices add trust assumptions. The reserve instrument and settlement path must be public.

**Concentration.** A small number of wallets can hold most rank weight or Window capacity. Supply caps and concentration reports make this visible.

**Legal classification.** Token burns, reserve distributions, and advances can create obligations in each launch jurisdiction. The team needs jurisdiction-specific advice before sale or launch.

## Open decisions

- `$VSYNC` supply and initial distribution;
- reserve fee and seeding policy;
- upgrade burns for ranks 02–05;
- Sovereign supply limit;
- Window duration;
- utilization-based burn quote;
- transfer rules for open obligations;
- ZEC custody and redemption model;
- governance and emergency control;
- launch jurisdiction.

## Application summary

The Veil Syndicate is building a reserve protocol on Robinhood Chain. Its 2,100 Ciphers start inactive. A holder burns `$VSYNC` to activate a Cipher, increase its rank, or use The Window. The Window advances part of the Cipher's own ZEC cage. Future eligible distributions repay the advance first. The system uses ZEC accounting instead of a market-price liquidation model.

The incubation work is specific: test the economic limits, define the contracts, choose a credible ZEC settlement path, and publish the reserve data needed for users to judge the system.
