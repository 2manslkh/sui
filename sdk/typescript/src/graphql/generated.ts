// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable */

import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Base64: { input: any; output: any; }
  /** String representation of an arbitrary width, possibly signed integer. */
  BigInt: { input: any; output: any; }
  /** ISO-8601 Date and Time: RFC3339 in UTC with format: YYYY-MM-DDTHH:MM:SS.mmmZ. Note that the milliseconds part is optional, and it may be omitted if its value is 0. */
  DateTime: { input: any; output: any; }
  /** Arbitrary JSON data. */
  JSON: { input: any; output: any; }
  /**
   * The contents of a Move Value, corresponding to the following recursive type:
   *
   * type MoveData =
   *     { Address: SuiAddress }
   *   | { UID:     SuiAddress }
   *   | { ID:      SuiAddress }
   *   | { Bool:    bool }
   *   | { Number:  BigInt }
   *   | { String:  string }
   *   | { Vector:  [MoveData] }
   *   | { Option:   MoveData? }
   *   | { Struct:  [{ name: string, value: MoveData }] }
   */
  MoveData: { input: any; output: any; }
  /**
   * The shape of a concrete Move Type (a type with all its type parameters instantiated with concrete types), corresponding to the following recursive type:
   *
   * type MoveTypeLayout =
   *     "address"
   *   | "bool"
   *   | "u8" | "u16" | ... | "u256"
   *   | { vector: MoveTypeLayout }
   *   | {
   *       struct: {
   *         type: string,
   *         fields: [{ name: string, layout: MoveTypeLayout }],
   *       }
   *     }
   */
  MoveTypeLayout: { input: any; output: any; }
  /**
   * The signature of a concrete Move Type (a type with all its type parameters instantiated with concrete types, that contains no references), corresponding to the following recursive type:
   *
   * type MoveTypeSignature =
   *     "address"
   *   | "bool"
   *   | "u8" | "u16" | ... | "u256"
   *   | { vector: MoveTypeSignature }
   *   | {
   *       datatype: {
   *         package: string,
   *         module: string,
   *         type: string,
   *         typeParameters: [MoveTypeSignature],
   *       }
   *     }
   */
  MoveTypeSignature: { input: any; output: any; }
  /**
   * The shape of an abstract Move Type (a type that can contain free type parameters, and can optionally be taken by reference), corresponding to the following recursive type:
   *
   * type OpenMoveTypeSignature = {
   *   ref: ("&" | "&mut")?,
   *   body: OpenMoveTypeSignatureBody,
   * }
   *
   * type OpenMoveTypeSignatureBody =
   *     "address"
   *   | "bool"
   *   | "u8" | "u16" | ... | "u256"
   *   | { vector: OpenMoveTypeSignatureBody }
   *   | {
   *       datatype {
   *         package: string,
   *         module: string,
   *         type: string,
   *         typeParameters: [OpenMoveTypeSignatureBody]
   *       }
   *     }
   *   | { typeParameter: number }
   */
  OpenMoveTypeSignature: { input: any; output: any; }
  /** String containing 32B hex-encoded address, with a leading "0x". Leading zeroes can be omitted on input but will always appear in outputs (SuiAddress in output is guaranteed to be 66 characters long). */
  SuiAddress: { input: any; output: any; }
};

export type ActiveJwk = {
  __typename?: 'ActiveJwk';
  /** The JWK algorithm parameter, (RFC 7517, Section 4.4). */
  alg: Scalars['String']['output'];
  /** The JWK RSA public exponent, (RFC 7517, Section 9.3). */
  e: Scalars['String']['output'];
  /** The most recent epoch in which the JWK was validated. */
  epoch?: Maybe<Epoch>;
  /** The string (Issuing Authority) that identifies the OIDC provider. */
  iss: Scalars['String']['output'];
  /** The string (Key ID) that identifies the JWK among a set of JWKs, (RFC 7517, Section 4.5). */
  kid: Scalars['String']['output'];
  /** The JWK key type parameter, (RFC 7517, Section 4.1). */
  kty: Scalars['String']['output'];
  /** The JWK RSA modulus, (RFC 7517, Section 9.3). */
  n: Scalars['String']['output'];
};

export type ActiveJwkConnection = {
  __typename?: 'ActiveJwkConnection';
  /** A list of edges. */
  edges: Array<ActiveJwkEdge>;
  /** A list of nodes. */
  nodes: Array<ActiveJwk>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ActiveJwkEdge = {
  __typename?: 'ActiveJwkEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: ActiveJwk;
};

export type Address = ObjectOwner & {
  __typename?: 'Address';
  address: Scalars['SuiAddress']['output'];
  balance?: Maybe<Balance>;
  balanceConnection?: Maybe<BalanceConnection>;
  /**
   * The coin objects for the given address.
   * The type field is a string of the inner type of the coin
   * by which to filter (e.g., 0x2::sui::SUI).
   */
  coinConnection?: Maybe<CoinConnection>;
  defaultNameServiceName?: Maybe<Scalars['String']['output']>;
  /** This resolver is not supported on the Address type. */
  dynamicField?: Maybe<DynamicField>;
  dynamicFieldConnection?: Maybe<DynamicFieldConnection>;
  /** This resolver is not supported on the Address type. */
  dynamicObjectField?: Maybe<DynamicField>;
  objectConnection?: Maybe<ObjectConnection>;
  /** The `0x3::staking_pool::StakedSui` objects owned by the given address. */
  stakedSuiConnection?: Maybe<StakedSuiConnection>;
  /**
   * The SuinsRegistration NFTs owned by the given object. These grant the owner
   * the capability to manage the associated domain.
   */
  suinsRegistrations?: Maybe<SuinsRegistrationConnection>;
  /**
   * Similar behavior to the `transactionBlockConnection` in Query but
   * supports additional `AddressTransactionBlockRelationship` filter
   */
  transactionBlockConnection?: Maybe<TransactionBlockConnection>;
};


export type AddressBalanceArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type AddressBalanceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AddressCoinConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type AddressDynamicFieldArgs = {
  name: DynamicFieldName;
};


export type AddressDynamicFieldConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AddressDynamicObjectFieldArgs = {
  name: DynamicFieldName;
};


export type AddressObjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AddressStakedSuiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AddressSuinsRegistrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AddressTransactionBlockConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionBlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<AddressTransactionBlockRelationship>;
};

export enum AddressTransactionBlockRelationship {
  Paid = 'PAID',
  Recv = 'RECV',
  Sent = 'SENT',
  Sign = 'SIGN'
}

export type AuthenticatorStateCreateTransaction = {
  __typename?: 'AuthenticatorStateCreateTransaction';
  /** A workaround to define an empty variant of a GraphQL union. */
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthenticatorStateExpireTransaction = {
  __typename?: 'AuthenticatorStateExpireTransaction';
  /** The initial version that the AuthenticatorStateUpdate was shared at. */
  authenticatorObjInitialSharedVersion: Scalars['Int']['output'];
  /** Expire JWKs that have a lower epoch than this. */
  minEpoch?: Maybe<Epoch>;
};

/** System transaction for updating the on-chain state used by zkLogin. */
export type AuthenticatorStateUpdateTransaction = {
  __typename?: 'AuthenticatorStateUpdateTransaction';
  /** The initial version of the authenticator object that it was shared at. */
  authenticatorObjInitialSharedVersion: Scalars['Int']['output'];
  /** Epoch of the authenticator state update transaction. */
  epoch?: Maybe<Epoch>;
  /** Newly active JWKs (JSON Web Keys). */
  newActiveJwks: ActiveJwkConnection;
  /** Consensus round of the authenticator state update. */
  round: Scalars['Int']['output'];
};


/** System transaction for updating the on-chain state used by zkLogin. */
export type AuthenticatorStateUpdateTransactionNewActiveJwksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AvailableRange = {
  __typename?: 'AvailableRange';
  first?: Maybe<Checkpoint>;
  last?: Maybe<Checkpoint>;
};

export type Balance = {
  __typename?: 'Balance';
  /** How many coins of this type constitute the balance */
  coinObjectCount?: Maybe<Scalars['Int']['output']>;
  /** Coin type for the balance, such as 0x2::sui::SUI */
  coinType?: Maybe<MoveType>;
  /** Total balance across all coin objects of the coin type */
  totalBalance?: Maybe<Scalars['BigInt']['output']>;
};

/** Effects to the balance (sum of coin values per coin type) owned by an address or object. */
export type BalanceChange = {
  __typename?: 'BalanceChange';
  /** The signed balance change. */
  amount?: Maybe<Scalars['BigInt']['output']>;
  /** The inner type of the coin whose balance has changed (e.g. `0x2::sui::SUI`). */
  coinType?: Maybe<MoveType>;
  /** The address or object whose balance has changed. */
  owner?: Maybe<Owner>;
};

export type BalanceConnection = {
  __typename?: 'BalanceConnection';
  /** A list of edges. */
  edges: Array<BalanceEdge>;
  /** A list of nodes. */
  nodes: Array<Balance>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BalanceEdge = {
  __typename?: 'BalanceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Balance;
};

/**
 * A system transaction that updates epoch information on-chain (increments the current epoch).
 * Executed by the system once per epoch, without using gas. Epoch change transactions cannot be
 * submitted by users, because validators will refuse to sign them.
 *
 * This transaction kind is deprecated in favour of `EndOfEpochTransaction`.
 */
export type ChangeEpochTransaction = {
  __typename?: 'ChangeEpochTransaction';
  /** The total amount of gas charged for computation during the previous epoch (in MIST). */
  computationCharge: Scalars['BigInt']['output'];
  /** The next (to become) epoch. */
  epoch?: Maybe<Epoch>;
  /**
   * The total gas retained from storage fees, that will not be returned by storage rebates when
   * the relevant objects are cleaned up (in MIST).
   */
  nonRefundableStorageFee: Scalars['BigInt']['output'];
  /** The protocol version in effect in the new epoch. */
  protocolVersion: Scalars['Int']['output'];
  /** Time at which the next epoch will start. */
  startTimestamp: Scalars['DateTime']['output'];
  /** The total amount of gas charged for storage during the previous epoch (in MIST). */
  storageCharge: Scalars['BigInt']['output'];
  /** The SUI returned to transaction senders for cleaning up objects (in MIST). */
  storageRebate: Scalars['BigInt']['output'];
  /**
   * System packages (specifically framework and move stdlib) that are written before the new
   * epoch starts, to upgrade them on-chain. Validators write these packages out when running the
   * transaction.
   */
  systemPackages: MovePackageConnection;
};


/**
 * A system transaction that updates epoch information on-chain (increments the current epoch).
 * Executed by the system once per epoch, without using gas. Epoch change transactions cannot be
 * submitted by users, because validators will refuse to sign them.
 *
 * This transaction kind is deprecated in favour of `EndOfEpochTransaction`.
 */
export type ChangeEpochTransactionSystemPackagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Checkpoint = {
  __typename?: 'Checkpoint';
  /**
   * A 32-byte hash that uniquely identifies the checkpoint contents, encoded in Base58. This
   * hash can be used to verify checkpoint contents by checking signatures against the committee,
   * Hashing contents to match digest, and checking that the previous checkpoint digest matches.
   */
  digest: Scalars['String']['output'];
  /** The epoch this checkpoint is part of. */
  epoch?: Maybe<Epoch>;
  /**
   * A commitment by the committee at the end of epoch on the contents of the live object set at
   * that time. This can be used to verify state snapshots.
   */
  liveObjectSetDigest?: Maybe<Scalars['String']['output']>;
  /** The total number of transaction blocks in the network by the end of this checkpoint. */
  networkTotalTransactions?: Maybe<Scalars['Int']['output']>;
  /** The digest of the checkpoint at the previous sequence number. */
  previousCheckpointDigest?: Maybe<Scalars['String']['output']>;
  /**
   * The computation cost, storage cost, storage rebate, and non-refundable storage fee
   * accumulated during this epoch, up to and including this checkpoint. These values increase
   * monotonically across checkpoints in the same epoch, and reset on epoch boundaries.
   */
  rollingGasSummary?: Maybe<GasCostSummary>;
  /**
   * This checkpoint's position in the total order of finalized checkpoints, agreed upon by
   * consensus.
   */
  sequenceNumber: Scalars['Int']['output'];
  /**
   * The timestamp at which the checkpoint is agreed to have happened according to consensus.
   * Transactions that access time in this checkpoint will observe this timestamp.
   */
  timestamp: Scalars['DateTime']['output'];
  /** Transactions in this checkpoint. */
  transactionBlockConnection?: Maybe<TransactionBlockConnection>;
  /**
   * This is an aggregation of signatures from a quorum of validators for the checkpoint
   * proposal.
   */
  validatorSignatures: Scalars['Base64']['output'];
};


export type CheckpointTransactionBlockConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionBlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CheckpointConnection = {
  __typename?: 'CheckpointConnection';
  /** A list of edges. */
  edges: Array<CheckpointEdge>;
  /** A list of nodes. */
  nodes: Array<Checkpoint>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CheckpointEdge = {
  __typename?: 'CheckpointEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Checkpoint;
};

/** Filter either by the digest, or the sequence number, or neither, to get the latest checkpoint. */
export type CheckpointId = {
  digest?: InputMaybe<Scalars['String']['input']>;
  sequenceNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type Coin = {
  __typename?: 'Coin';
  /** Convert the coin object into a Move object */
  asMoveObject: MoveObject;
  /** Balance of the coin object */
  balance?: Maybe<Scalars['BigInt']['output']>;
};

export type CoinConnection = {
  __typename?: 'CoinConnection';
  /** A list of edges. */
  edges: Array<CoinEdge>;
  /** A list of nodes. */
  nodes: Array<Coin>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoinEdge = {
  __typename?: 'CoinEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Coin;
};

export type CoinMetadata = {
  __typename?: 'CoinMetadata';
  /** Convert the coin metadata object into a Move object. */
  asMoveObject: MoveObject;
  /** The number of decimal places used to represent the token. */
  decimals?: Maybe<Scalars['Int']['output']>;
  /** Optional description of the token, provided by the creator of the token. */
  description?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  /** Full, official name of the token. */
  name?: Maybe<Scalars['String']['output']>;
  /** The overall quantity of tokens that will be issued. */
  supply?: Maybe<Scalars['BigInt']['output']>;
  /** The token's identifying abbreviation. */
  symbol?: Maybe<Scalars['String']['output']>;
};

/**
 * System transaction that runs at the beginning of a checkpoint, and is responsible for setting
 * the current value of the clock, based on the timestamp from consensus.
 */
export type ConsensusCommitPrologueTransaction = {
  __typename?: 'ConsensusCommitPrologueTransaction';
  /** Unix timestamp from consensus. */
  commitTimestamp: Scalars['DateTime']['output'];
  /**
   * Digest of consensus output, encoded as a Base58 string (only available from V2 of the
   * transaction).
   */
  consensusCommitDigest?: Maybe<Scalars['String']['output']>;
  /** Epoch of the commit prologue transaction. */
  epoch?: Maybe<Epoch>;
  /** Consensus round of the commit. */
  round: Scalars['Int']['output'];
};

/**
 * The set of named templates defined on-chain for the type of this object,
 * to be handled off-chain. The server substitutes data from the object
 * into these templates to generate a display string per template.
 */
export type DisplayEntry = {
  __typename?: 'DisplayEntry';
  /** An error string describing why the template could not be rendered. */
  error?: Maybe<Scalars['String']['output']>;
  /** The identifier for a particular template string of the Display object. */
  key: Scalars['String']['output'];
  /** The template string for the key with placeholder values substituted. */
  value?: Maybe<Scalars['String']['output']>;
};

export type DynamicField = {
  __typename?: 'DynamicField';
  /**
   * The string type, data, and serialized value of the DynamicField's 'name' field.
   * This field is used to uniquely identify a child of the parent object.
   */
  name?: Maybe<MoveValue>;
  /**
   * The actual data stored in the dynamic field.
   * The returned dynamic field is an object if its return type is MoveObject,
   * in which case it is also accessible off-chain via its address.
   */
  value?: Maybe<DynamicFieldValue>;
};

export type DynamicFieldConnection = {
  __typename?: 'DynamicFieldConnection';
  /** A list of edges. */
  edges: Array<DynamicFieldEdge>;
  /** A list of nodes. */
  nodes: Array<DynamicField>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DynamicFieldEdge = {
  __typename?: 'DynamicFieldEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: DynamicField;
};

export type DynamicFieldName = {
  /** The Base64 encoded bcs serialization of the DynamicField's 'name' field. */
  bcs: Scalars['Base64']['input'];
  /**
   * The string type of the DynamicField's 'name' field.
   * A string representation of a Move primitive like 'u64', or a struct type like '0x2::kiosk::Listing'
   */
  type: Scalars['String']['input'];
};

export type DynamicFieldValue = MoveObject | MoveValue;

/**
 * System transaction that supersedes `ChangeEpochTransaction` as the new way to run transactions
 * at the end of an epoch. Behaves similarly to `ChangeEpochTransaction` but can accommodate other
 * optional transactions to run at the end of the epoch.
 */
export type EndOfEpochTransaction = {
  __typename?: 'EndOfEpochTransaction';
  /** The list of system transactions that are allowed to run at the end of the epoch. */
  transactions: EndOfEpochTransactionKindConnection;
};


/**
 * System transaction that supersedes `ChangeEpochTransaction` as the new way to run transactions
 * at the end of an epoch. Behaves similarly to `ChangeEpochTransaction` but can accommodate other
 * optional transactions to run at the end of the epoch.
 */
export type EndOfEpochTransactionTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type EndOfEpochTransactionKind = AuthenticatorStateCreateTransaction | AuthenticatorStateExpireTransaction | ChangeEpochTransaction | RandomnessStateCreateTransaction;

export type EndOfEpochTransactionKindConnection = {
  __typename?: 'EndOfEpochTransactionKindConnection';
  /** A list of edges. */
  edges: Array<EndOfEpochTransactionKindEdge>;
  /** A list of nodes. */
  nodes: Array<EndOfEpochTransactionKind>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EndOfEpochTransactionKindEdge = {
  __typename?: 'EndOfEpochTransactionKindEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: EndOfEpochTransactionKind;
};

export type Epoch = {
  __typename?: 'Epoch';
  /** The epoch's corresponding checkpoints */
  checkpoints: CheckpointConnection;
  /** The epoch's ending timestamp */
  endTimestamp?: Maybe<Scalars['DateTime']['output']>;
  /** The epoch's id as a sequence number that starts at 0 and is incremented by one at every epoch change */
  epochId: Scalars['Int']['output'];
  /** The storage fees paid for transactions executed during the epoch. */
  fundInflow?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The storage fee rebates paid to users
   * who deleted the data associated with past transactions.
   */
  fundOutflow?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The storage fund available in this epoch.
   * This fund is used to redistribute storage fees from past transactions
   * to future validators.
   */
  fundSize?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The difference between the fund inflow and outflow, representing
   * the net amount of storage fees accumulated in this epoch.
   */
  netInflow?: Maybe<Scalars['BigInt']['output']>;
  /** The epoch's corresponding protocol configuration, including the feature flags and the configuration options */
  protocolConfigs: ProtocolConfigs;
  /** The minimum gas price that a quorum of validators are guaranteed to sign a transaction for */
  referenceGasPrice?: Maybe<Scalars['BigInt']['output']>;
  /**
   * Information about whether this epoch was started in safe mode, which happens if the full epoch
   * change logic fails for some reason.
   */
  safeMode?: Maybe<SafeMode>;
  /** The epoch's starting timestamp */
  startTimestamp: Scalars['DateTime']['output'];
  /**
   * SUI set aside to account for objects stored on-chain, at the start of the epoch.
   * This is also used for storage rebates.
   */
  storageFund?: Maybe<StorageFund>;
  /** Details of the system that are decided during genesis. */
  systemParameters?: Maybe<SystemParameters>;
  /** Parameters related to the subsidy that supplements staking rewards */
  systemStakeSubsidy?: Maybe<StakeSubsidy>;
  /**
   * The value of the `version` field of `0x5`, the `0x3::sui::SuiSystemState` object.  This
   * version changes whenever the fields contained in the system state object (held in a dynamic
   * field attached to `0x5`) change.
   */
  systemStateVersion?: Maybe<Scalars['Int']['output']>;
  /** The total number of checkpoints in this epoch. */
  totalCheckpoints?: Maybe<Scalars['BigInt']['output']>;
  /** The total amount of gas fees (in MIST) that were paid in this epoch. */
  totalGasFees?: Maybe<Scalars['BigInt']['output']>;
  /** The total MIST rewarded as stake. */
  totalStakeRewards?: Maybe<Scalars['BigInt']['output']>;
  /** The amount added to total gas fees to make up the total stake rewards. */
  totalStakeSubsidies?: Maybe<Scalars['BigInt']['output']>;
  /** The epoch's corresponding transaction blocks */
  transactionBlockConnection?: Maybe<TransactionBlockConnection>;
  /** Validator related properties, including the active validators */
  validatorSet?: Maybe<ValidatorSet>;
};


export type EpochCheckpointsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EpochTransactionBlockConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionBlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Event = {
  __typename?: 'Event';
  bcs: Scalars['Base64']['output'];
  /** Structured contents of a Move value. */
  data: Scalars['MoveData']['output'];
  /**
   * Representation of a Move value in JSON, where:
   *
   * - Addresses, IDs, and UIDs are represented in canonical form, as JSON strings.
   * - Bools are represented by JSON boolean literals.
   * - u8, u16, and u32 are represented as JSON numbers.
   * - u64, u128, and u256 are represented as JSON strings.
   * - Vectors are represented by JSON arrays.
   * - Structs are represented by JSON objects.
   * - Empty optional values are represented by `null`.
   *
   * This form is offered as a less verbose convenience in cases where the layout of the type is
   * known by the client.
   */
  json: Scalars['JSON']['output'];
  /** Addresses of the senders of the event */
  senders?: Maybe<Array<Address>>;
  /**
   * The Move module containing some function that when called by
   * a programmable transaction block (PTB) emitted this event.
   * For example, if a PTB invokes A::m1::foo, which internally
   * calls A::m2::emit_event to emit an event,
   * the sending module would be A::m1.
   */
  sendingModule?: Maybe<MoveModule>;
  /** UTC timestamp in milliseconds since epoch (1/1/1970) */
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  type: MoveType;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  /** A list of edges. */
  edges: Array<EventEdge>;
  /** A list of nodes. */
  nodes: Array<Event>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Event;
};

export type EventFilter = {
  /**
   * Events emitted by a particular module. An event is emitted by a
   * particular module if some function in the module is called by a
   * PTB and emits an event.
   *
   * Modules can be filtered by their package, or package::module.
   */
  emittingModule?: InputMaybe<Scalars['String']['input']>;
  /**
   * This field is used to specify the type of event emitted.
   *
   * Events can be filtered by their type's package, package::module,
   * or their fully qualified type name.
   *
   * Generic types can be queried by either the generic type name, e.g.
   * `0x2::coin::Coin`, or by the full type name, such as
   * `0x2::coin::Coin<0x2::sui::SUI>`.
   */
  eventType?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['SuiAddress']['input']>;
  transactionDigest?: InputMaybe<Scalars['String']['input']>;
};

export type ExecutionResult = {
  __typename?: 'ExecutionResult';
  /** The digest field captures the digest of the transaction block */
  digest: Scalars['String']['output'];
  /** The errors field captures any errors that occurred during execution */
  errors?: Maybe<Array<Scalars['String']['output']>>;
};

export enum ExecutionStatus {
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

/**
 * Groups of features served by the RPC service.  The GraphQL Service can be configured to enable
 * or disable these features.
 */
export enum Feature {
  /** Statistics about how the network was running (TPS, top packages, APY, etc) */
  Analytics = 'ANALYTICS',
  /** Coin metadata, per-address coin and balance information. */
  Coins = 'COINS',
  /** Querying an object's dynamic fields. */
  DynamicFields = 'DYNAMIC_FIELDS',
  /** SuiNS name and reverse name look-up. */
  NameService = 'NAME_SERVICE',
  /** Transaction and Event subscriptions. */
  Subscriptions = 'SUBSCRIPTIONS',
  /**
   * Aspects that affect the running of the system that are managed by the
   * validators either directly, or through system transactions.
   */
  SystemState = 'SYSTEM_STATE'
}

/**
 * Access to the gas inputs, after they have been smashed into one coin. The gas coin can only be
 * used by reference, except for with `TransferObjectsTransaction` that can accept it by value.
 */
export type GasCoin = {
  __typename?: 'GasCoin';
  /** A workaround to define an empty variant of a GraphQL union. */
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type GasCostSummary = {
  __typename?: 'GasCostSummary';
  /** Gas paid for executing this transaction (in MIST). */
  computationCost?: Maybe<Scalars['BigInt']['output']>;
  /**
   * Part of storage cost that is not reclaimed when data created by this transaction is cleaned
   * up (in MIST).
   */
  nonRefundableStorageFee?: Maybe<Scalars['BigInt']['output']>;
  /** Gas paid for the data stored on-chain by this transaction (in MIST). */
  storageCost?: Maybe<Scalars['BigInt']['output']>;
  /**
   * Part of storage cost that can be reclaimed by cleaning up data created by this transaction
   * (when objects are deleted or an object is modified, which is treated as a deletion followed
   * by a creation) (in MIST).
   */
  storageRebate?: Maybe<Scalars['BigInt']['output']>;
};

export type GasEffects = {
  __typename?: 'GasEffects';
  gasObject?: Maybe<Object>;
  gasSummary?: Maybe<GasCostSummary>;
};

export type GasInput = {
  __typename?: 'GasInput';
  /** The maximum number of gas units that can be expended by executing this transaction */
  gasBudget?: Maybe<Scalars['BigInt']['output']>;
  /** Objects used to pay for a transaction's execution and storage */
  gasPayment?: Maybe<ObjectConnection>;
  /**
   * An unsigned integer specifying the number of native tokens per gas unit this transaction
   * will pay (in MIST).
   */
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  /** Address of the owner of the gas object(s) used */
  gasSponsor?: Maybe<Address>;
};


export type GasInputGasPaymentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** System transaction that initializes the network and writes the initial set of objects on-chain. */
export type GenesisTransaction = {
  __typename?: 'GenesisTransaction';
  /** Objects to be created during genesis. */
  objects: ObjectConnection;
};


/** System transaction that initializes the network and writes the initial set of objects on-chain. */
export type GenesisTransactionObjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** One of the input objects or primitive values to the programmable transaction block. */
export type Input = {
  __typename?: 'Input';
  /** Index of the programmable transaction block input (0-indexed). */
  ix: Scalars['Int']['output'];
};

/** Information used by a package to link to a specific version of its dependency. */
export type Linkage = {
  __typename?: 'Linkage';
  /** The ID on-chain of the first version of the dependency. */
  originalId: Scalars['SuiAddress']['output'];
  /** The ID on-chain of the version of the dependency that this package depends on. */
  upgradedId: Scalars['SuiAddress']['output'];
  /** The version of the dependency that this package depends on. */
  version: Scalars['Int']['output'];
};

/** Create a vector (possibly empty). */
export type MakeMoveVecTransaction = {
  __typename?: 'MakeMoveVecTransaction';
  /** The values to pack into the vector, all of the same type. */
  elements: Array<TransactionArgument>;
  /** If the elements are not objects, or the vector is empty, a type must be supplied. */
  type?: Maybe<MoveType>;
};

/** Merges `coins` into the first `coin` (produces no results). */
export type MergeCoinsTransaction = {
  __typename?: 'MergeCoinsTransaction';
  /** The coin to merge into. */
  coin: TransactionArgument;
  /** The coins to be merged. */
  coins: Array<TransactionArgument>;
};

export enum MoveAbility {
  Copy = 'COPY',
  Drop = 'DROP',
  Key = 'KEY',
  Store = 'STORE'
}

/** A call to either an entry or a public Move function. */
export type MoveCallTransaction = {
  __typename?: 'MoveCallTransaction';
  /** The actual function parameters passed in for this move call. */
  arguments: Array<TransactionArgument>;
  /** The function being called, resolved. */
  function?: Maybe<MoveFunction>;
  /** The name of the function being called. */
  functionName: Scalars['String']['output'];
  /** The name of the module the function being called is defined in. */
  module: Scalars['String']['output'];
  /** The storage ID of the package the function being called is defined in. */
  package: Scalars['SuiAddress']['output'];
  /** The actual type parameters passed in for this move call. */
  typeArguments: Array<MoveType>;
};

export type MoveField = {
  __typename?: 'MoveField';
  name: Scalars['String']['output'];
  type?: Maybe<OpenMoveType>;
};

/** Signature of a function, defined in a Move module. */
export type MoveFunction = {
  __typename?: 'MoveFunction';
  /** Whether the function has the `entry` modifier or not. */
  isEntry?: Maybe<Scalars['Boolean']['output']>;
  /** The module this function was defined in. */
  module: MoveModule;
  /** The function's (unqualified) name. */
  name: Scalars['String']['output'];
  /**
   * The function's parameter types.  These types can reference type parameters introduce by this
   * function (see `typeParameters`).
   */
  parameters?: Maybe<Array<OpenMoveType>>;
  /**
   * The function's return types.  There can be multiple because functions in Move can return
   * multiple values.  These types can reference type parameters introduced by this function (see
   * `typeParameters`).
   */
  return?: Maybe<Array<OpenMoveType>>;
  /**
   * Constraints on the function's formal type parameters.  Move bytecode does not name type
   * parameters, so when they are referenced (e.g. in parameter and return types) they are
   * identified by their index in this list.
   */
  typeParameters?: Maybe<Array<MoveFunctionTypeParameter>>;
  /** The function's visibility: `public`, `public(friend)`, or `private`. */
  visibility?: Maybe<MoveVisibility>;
};

export type MoveFunctionConnection = {
  __typename?: 'MoveFunctionConnection';
  /** A list of edges. */
  edges: Array<MoveFunctionEdge>;
  /** A list of nodes. */
  nodes: Array<MoveFunction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MoveFunctionEdge = {
  __typename?: 'MoveFunctionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: MoveFunction;
};

export type MoveFunctionTypeParameter = {
  __typename?: 'MoveFunctionTypeParameter';
  constraints: Array<MoveAbility>;
};

/**
 * Represents a module in Move, a library that defines struct types
 * and functions that operate on these types.
 */
export type MoveModule = {
  __typename?: 'MoveModule';
  /** The Base64 encoded bcs serialization of the module. */
  bytes?: Maybe<Scalars['Base64']['output']>;
  /** Textual representation of the module's bytecode. */
  disassembly?: Maybe<Scalars['String']['output']>;
  /** Format version of this module's bytecode. */
  fileFormatVersion: Scalars['Int']['output'];
  /**
   * Modules that this module considers friends (these modules can access `public(friend)`
   * functions from this module).
   */
  friends: MoveModuleConnection;
  /** Look-up the signature of a function defined in this module, by its name. */
  function?: Maybe<MoveFunction>;
  /** Iterate through the signatures of functions defined in this module. */
  functions?: Maybe<MoveFunctionConnection>;
  /** The module's (unqualified) name. */
  name: Scalars['String']['output'];
  /** The package that this Move module was defined in */
  package: MovePackage;
  /** Look-up the definition of a struct defined in this module, by its name. */
  struct?: Maybe<MoveStruct>;
  /** Iterate through the structs defined in this module. */
  structs?: Maybe<MoveStructConnection>;
};


/**
 * Represents a module in Move, a library that defines struct types
 * and functions that operate on these types.
 */
export type MoveModuleFriendsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Represents a module in Move, a library that defines struct types
 * and functions that operate on these types.
 */
export type MoveModuleFunctionArgs = {
  name: Scalars['String']['input'];
};


/**
 * Represents a module in Move, a library that defines struct types
 * and functions that operate on these types.
 */
export type MoveModuleFunctionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Represents a module in Move, a library that defines struct types
 * and functions that operate on these types.
 */
export type MoveModuleStructArgs = {
  name: Scalars['String']['input'];
};


/**
 * Represents a module in Move, a library that defines struct types
 * and functions that operate on these types.
 */
export type MoveModuleStructsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MoveModuleConnection = {
  __typename?: 'MoveModuleConnection';
  /** A list of edges. */
  edges: Array<MoveModuleEdge>;
  /** A list of nodes. */
  nodes: Array<MoveModule>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MoveModuleEdge = {
  __typename?: 'MoveModuleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: MoveModule;
};

export type MoveObject = {
  __typename?: 'MoveObject';
  /** Attempts to convert the Move object into a `0x2::coin::Coin`. */
  asCoin?: Maybe<Coin>;
  /** Attempts to convert the Move object into a `0x2::coin::CoinMetadata`. */
  asCoinMetadata?: Maybe<CoinMetadata>;
  /**
   * Attempts to convert the Move object into an Object
   * This provides additional information such as version and digest on the top-level
   */
  asObject: Object;
  /** Attempts to convert the Move object into a `0x3::staking_pool::StakedSui`. */
  asStakedSui?: Maybe<StakedSui>;
  /**
   * Displays the contents of the MoveObject in a JSON string and through graphql types.  Also
   * provides the flat representation of the type signature, and the bcs of the corresponding
   * data
   */
  contents?: Maybe<MoveValue>;
  /**
   * Determines whether a transaction can transfer this object, using the TransferObjects
   * transaction command or `sui::transfer::public_transfer`, both of which require the object to
   * have the `key` and `store` abilities.
   */
  hasPublicTransfer: Scalars['Boolean']['output'];
};

export type MovePackage = {
  __typename?: 'MovePackage';
  asObject: Object;
  /**
   * BCS representation of the package's modules.  Modules appear as a sequence of pairs (module
   * name, followed by module bytes), in alphabetic order by module name.
   */
  bcs?: Maybe<Scalars['Base64']['output']>;
  /** The transitive dependencies of this package. */
  linkage?: Maybe<Array<Linkage>>;
  /**
   * A representation of the module called `name` in this package, including the
   * structs and functions it defines.
   */
  module?: Maybe<MoveModule>;
  /** Paginate through the MoveModules defined in this package. */
  modules?: Maybe<MoveModuleConnection>;
  /** The (previous) versions of this package that introduced its types. */
  typeOrigins?: Maybe<Array<TypeOrigin>>;
};


export type MovePackageModuleArgs = {
  name: Scalars['String']['input'];
};


export type MovePackageModulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MovePackageConnection = {
  __typename?: 'MovePackageConnection';
  /** A list of edges. */
  edges: Array<MovePackageEdge>;
  /** A list of nodes. */
  nodes: Array<MovePackage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MovePackageEdge = {
  __typename?: 'MovePackageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: MovePackage;
};

/** Description of a type, defined in a Move module. */
export type MoveStruct = {
  __typename?: 'MoveStruct';
  /** Abilities this struct has. */
  abilities?: Maybe<Array<MoveAbility>>;
  /**
   * The names and types of the struct's fields.  Field types reference type parameters, by their
   * index in the defining struct's `typeParameters` list.
   */
  fields?: Maybe<Array<MoveField>>;
  /** The module this struct was originally defined in. */
  module: MoveModule;
  /** The struct's (unqualified) type name. */
  name: Scalars['String']['output'];
  /**
   * Constraints on the struct's formal type parameters.  Move bytecode does not name type
   * parameters, so when they are referenced (e.g. in field types) they are identified by their
   * index in this list.
   */
  typeParameters?: Maybe<Array<MoveStructTypeParameter>>;
};

export type MoveStructConnection = {
  __typename?: 'MoveStructConnection';
  /** A list of edges. */
  edges: Array<MoveStructEdge>;
  /** A list of nodes. */
  nodes: Array<MoveStruct>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MoveStructEdge = {
  __typename?: 'MoveStructEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: MoveStruct;
};

export type MoveStructTypeParameter = {
  __typename?: 'MoveStructTypeParameter';
  constraints: Array<MoveAbility>;
  isPhantom: Scalars['Boolean']['output'];
};

/** Represents concrete types (no type parameters, no references) */
export type MoveType = {
  __typename?: 'MoveType';
  /** The abilities this concrete type has. */
  abilities: Array<MoveAbility>;
  /** Structured representation of the "shape" of values that match this type. */
  layout: Scalars['MoveTypeLayout']['output'];
  /** Flat representation of the type signature, as a displayable string. */
  repr: Scalars['String']['output'];
  /** Structured representation of the type signature. */
  signature: Scalars['MoveTypeSignature']['output'];
};

export type MoveValue = {
  __typename?: 'MoveValue';
  bcs: Scalars['Base64']['output'];
  /** Structured contents of a Move value. */
  data: Scalars['MoveData']['output'];
  /**
   * Representation of a Move value in JSON, where:
   *
   * - Addresses, IDs, and UIDs are represented in canonical form, as JSON strings.
   * - Bools are represented by JSON boolean literals.
   * - u8, u16, and u32 are represented as JSON numbers.
   * - u64, u128, and u256 are represented as JSON strings.
   * - Vectors are represented by JSON arrays.
   * - Structs are represented by JSON objects.
   * - Empty optional values are represented by `null`.
   *
   * This form is offered as a less verbose convenience in cases where the layout of the type is
   * known by the client.
   */
  json: Scalars['JSON']['output'];
  type: MoveType;
};

export enum MoveVisibility {
  Friend = 'FRIEND',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Execute a transaction, committing its effects on chain.
   *
   * `txBytes` is a `TransactionData` struct that has been BCS-encoded
   * and then Base64-encoded.
   * `signatures` are a list of `flag || signature || pubkey` bytes,
   * Base64-encoded.
   *
   * Waits until the transaction has been finalized on chain to return
   * its transaction digest.  If the transaction could not be
   * finalized, returns the errors that prevented it, instead.
   */
  executeTransactionBlock: ExecutionResult;
};


export type MutationExecuteTransactionBlockArgs = {
  signatures: Array<Scalars['String']['input']>;
  txBytes: Scalars['String']['input'];
};

export type Object = ObjectOwner & {
  __typename?: 'Object';
  /** The address of the object, named as such to avoid conflict with the address type. */
  address: Scalars['SuiAddress']['output'];
  /** Attempts to convert the object into a MoveObject */
  asMoveObject?: Maybe<MoveObject>;
  /** Attempts to convert the object into a MovePackage */
  asMovePackage?: Maybe<MovePackage>;
  /** The balance of coin objects of a particular coin type owned by the object. */
  balance?: Maybe<Balance>;
  /** The balances of all coin types owned by the object. Coins of the same type are grouped together into one Balance. */
  balanceConnection?: Maybe<BalanceConnection>;
  /** The Base64 encoded bcs serialization of the object's content. */
  bcs?: Maybe<Scalars['Base64']['output']>;
  /**
   * The coin objects for the given address.
   *
   * The type field is a string of the inner type of the coin by which to filter
   * (e.g. `0x2::sui::SUI`). If no type is provided, it will default to `0x2::sui::SUI`.
   */
  coinConnection?: Maybe<CoinConnection>;
  /** The domain that a user address has explicitly configured as their default domain */
  defaultNameServiceName?: Maybe<Scalars['String']['output']>;
  /** 32-byte hash that identifies the object's current contents, encoded as a Base58 string. */
  digest: Scalars['String']['output'];
  /**
   * The set of named templates defined on-chain for the type of this object,
   * to be handled off-chain. The server substitutes data from the object
   * into these templates to generate a display string per template.
   */
  display?: Maybe<Array<DisplayEntry>>;
  /**
   * Access a dynamic field on an object using its name.
   * Names are arbitrary Move values whose type have `copy`, `drop`, and `store`, and are specified
   * using their type, and their BCS contents, Base64 encoded.
   * Dynamic fields on wrapped objects can be accessed by using the same API under the Owner type.
   */
  dynamicField?: Maybe<DynamicField>;
  /**
   * The dynamic fields on an object.
   * Dynamic fields on wrapped objects can be accessed by using the same API under the Owner type.
   */
  dynamicFieldConnection?: Maybe<DynamicFieldConnection>;
  /**
   * Access a dynamic object field on an object using its name.
   * Names are arbitrary Move values whose type have `copy`, `drop`, and `store`, and are specified
   * using their type, and their BCS contents, Base64 encoded.
   * The value of a dynamic object field can also be accessed off-chain directly via its address (e.g. using `Query.object`).
   * Dynamic fields on wrapped objects can be accessed by using the same API under the Owner type.
   */
  dynamicObjectField?: Maybe<DynamicField>;
  /**
   * Objects can either be immutable, shared, owned by an address,
   * or are child objects (part of a dynamic field)
   */
  kind?: Maybe<ObjectKind>;
  /** The objects owned by this object */
  objectConnection?: Maybe<ObjectConnection>;
  /**
   * The Address or Object that owns this Object.  Immutable and Shared Objects do not have
   * owners.
   */
  owner?: Maybe<Owner>;
  /** The transaction block that created this version of the object. */
  previousTransactionBlock?: Maybe<TransactionBlock>;
  /** The `0x3::staking_pool::StakedSui` objects owned by the given object. */
  stakedSuiConnection?: Maybe<StakedSuiConnection>;
  /**
   * The amount of SUI we would rebate if this object gets deleted or mutated.
   * This number is recalculated based on the present storage gas price.
   */
  storageRebate?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The SuinsRegistration NFTs owned by the given object. These grant the owner
   * the capability to manage the associated domain.
   */
  suinsRegistrations?: Maybe<SuinsRegistrationConnection>;
  version: Scalars['Int']['output'];
};


export type ObjectBalanceArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type ObjectBalanceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectCoinConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type ObjectDynamicFieldArgs = {
  name: DynamicFieldName;
};


export type ObjectDynamicFieldConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectDynamicObjectFieldArgs = {
  name: DynamicFieldName;
};


export type ObjectObjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectStakedSuiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectSuinsRegistrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Effect on an individual Object (keyed by its ID). */
export type ObjectChange = {
  __typename?: 'ObjectChange';
  /** The address of the object that has changed. */
  address: Scalars['SuiAddress']['output'];
  /** Whether the ID was created in this transaction. */
  idCreated?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the ID was deleted in this transaction. */
  idDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The contents of the object immediately before the transaction. */
  inputState?: Maybe<Object>;
  /** The contents of the object immediately after the transaction. */
  outputState?: Maybe<Object>;
};

export type ObjectConnection = {
  __typename?: 'ObjectConnection';
  /** A list of edges. */
  edges: Array<ObjectEdge>;
  /** A list of nodes. */
  nodes: Array<Object>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ObjectEdge = {
  __typename?: 'ObjectEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Object;
};

export type ObjectFilter = {
  /** Filter for live objects by their IDs. */
  objectIds?: InputMaybe<Array<Scalars['SuiAddress']['input']>>;
  /** Filter for live or potentially historical objects by their ID and version. */
  objectKeys?: InputMaybe<Array<ObjectKey>>;
  /** Filter for live objects by their current owners. */
  owner?: InputMaybe<Scalars['SuiAddress']['input']>;
  /**
   * This field is used to specify the type of objects that should be included in the query
   * results.
   *
   * Objects can be filtered by their type's package, package::module, or their fully qualified
   * type name.
   *
   * Generic types can be queried by either the generic type name, e.g. `0x2::coin::Coin`, or by
   * the full type name, such as `0x2::coin::Coin<0x2::sui::SUI>`.
   */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ObjectKey = {
  objectId: Scalars['SuiAddress']['input'];
  version: Scalars['Int']['input'];
};

export enum ObjectKind {
  Child = 'CHILD',
  Immutable = 'IMMUTABLE',
  Owned = 'OWNED',
  Shared = 'SHARED'
}

export type ObjectOwner = {
  address: Scalars['SuiAddress']['output'];
  balance?: Maybe<Balance>;
  balanceConnection?: Maybe<BalanceConnection>;
  coinConnection?: Maybe<CoinConnection>;
  defaultNameServiceName?: Maybe<Scalars['String']['output']>;
  dynamicField?: Maybe<DynamicField>;
  dynamicFieldConnection?: Maybe<DynamicFieldConnection>;
  dynamicObjectField?: Maybe<DynamicField>;
  objectConnection?: Maybe<ObjectConnection>;
  stakedSuiConnection?: Maybe<StakedSuiConnection>;
  suinsRegistrations?: Maybe<SuinsRegistrationConnection>;
};


export type ObjectOwnerBalanceArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type ObjectOwnerBalanceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectOwnerCoinConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type ObjectOwnerDynamicFieldArgs = {
  name: DynamicFieldName;
};


export type ObjectOwnerDynamicFieldConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectOwnerDynamicObjectFieldArgs = {
  name: DynamicFieldName;
};


export type ObjectOwnerObjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectOwnerStakedSuiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ObjectOwnerSuinsRegistrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Represents types that could contain references or free type parameters.  Such types can appear
 * as function parameters, in fields of structs, or as actual type parameter.
 */
export type OpenMoveType = {
  __typename?: 'OpenMoveType';
  /** Flat representation of the type signature, as a displayable string. */
  repr: Scalars['String']['output'];
  /** Structured representation of the type signature. */
  signature: Scalars['OpenMoveTypeSignature']['output'];
};

/** A Move object, either immutable, or owned mutable. */
export type OwnedOrImmutable = {
  __typename?: 'OwnedOrImmutable';
  /** ID of the object being read. */
  address: Scalars['SuiAddress']['output'];
  /**
   * 32-byte hash that identifies the object's contents at this version, encoded as a Base58
   * string.
   */
  digest: Scalars['String']['output'];
  /** The object at this version.  May not be available due to pruning. */
  object?: Maybe<Object>;
  /** Version of the object being read. */
  version: Scalars['Int']['output'];
};

export type Owner = ObjectOwner & {
  __typename?: 'Owner';
  address: Scalars['SuiAddress']['output'];
  asAddress?: Maybe<Address>;
  asObject?: Maybe<Object>;
  balance?: Maybe<Balance>;
  balanceConnection?: Maybe<BalanceConnection>;
  /**
   * The coin objects for the given address or object.
   *
   * The type field is a string of the inner type of the coin by which to filter
   * (e.g. `0x2::sui::SUI`). If no type is provided, it will default to `0x2::sui::SUI`.
   */
  coinConnection?: Maybe<CoinConnection>;
  defaultNameServiceName?: Maybe<Scalars['String']['output']>;
  /**
   * Access a dynamic field on an object using its name.
   * Names are arbitrary Move values whose type have `copy`, `drop`, and `store`, and are specified
   * using their type, and their BCS contents, Base64 encoded.
   * This field exists as a convenience when accessing a dynamic field on a wrapped object.
   */
  dynamicField?: Maybe<DynamicField>;
  /**
   * The dynamic fields on an object.
   * This field exists as a convenience when accessing a dynamic field on a wrapped object.
   */
  dynamicFieldConnection?: Maybe<DynamicFieldConnection>;
  /**
   * Access a dynamic object field on an object using its name.
   * Names are arbitrary Move values whose type have `copy`, `drop`, and `store`, and are specified
   * using their type, and their BCS contents, Base64 encoded.
   * The value of a dynamic object field can also be accessed off-chain directly via its address (e.g. using `Query.object`).
   * This field exists as a convenience when accessing a dynamic field on a wrapped object.
   */
  dynamicObjectField?: Maybe<DynamicField>;
  objectConnection?: Maybe<ObjectConnection>;
  /** The `0x3::staking_pool::StakedSui` objects owned by the given object. */
  stakedSuiConnection?: Maybe<StakedSuiConnection>;
  /**
   * The SuinsRegistration NFTs owned by the given object. These grant the owner
   * the capability to manage the associated domain.
   */
  suinsRegistrations?: Maybe<SuinsRegistrationConnection>;
};


export type OwnerBalanceArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type OwnerBalanceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OwnerCoinConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type OwnerDynamicFieldArgs = {
  name: DynamicFieldName;
};


export type OwnerDynamicFieldConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OwnerDynamicObjectFieldArgs = {
  name: DynamicFieldName;
};


export type OwnerObjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OwnerStakedSuiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OwnerSuinsRegistrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** A single transaction, or command, in the programmable transaction block. */
export type ProgrammableTransaction = MakeMoveVecTransaction | MergeCoinsTransaction | MoveCallTransaction | PublishTransaction | SplitCoinsTransaction | TransferObjectsTransaction | UpgradeTransaction;

/**
 * A user transaction that allows the interleaving of native commands (like transfer, split coins,
 * merge coins, etc) and move calls, executed atomically.
 */
export type ProgrammableTransactionBlock = {
  __typename?: 'ProgrammableTransactionBlock';
  /** Input objects or primitive values. */
  inputs: TransactionInputConnection;
  /** The transaction commands, executed sequentially. */
  transactions: ProgrammableTransactionConnection;
};


/**
 * A user transaction that allows the interleaving of native commands (like transfer, split coins,
 * merge coins, etc) and move calls, executed atomically.
 */
export type ProgrammableTransactionBlockInputsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * A user transaction that allows the interleaving of native commands (like transfer, split coins,
 * merge coins, etc) and move calls, executed atomically.
 */
export type ProgrammableTransactionBlockTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ProgrammableTransactionConnection = {
  __typename?: 'ProgrammableTransactionConnection';
  /** A list of edges. */
  edges: Array<ProgrammableTransactionEdge>;
  /** A list of nodes. */
  nodes: Array<ProgrammableTransaction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProgrammableTransactionEdge = {
  __typename?: 'ProgrammableTransactionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: ProgrammableTransaction;
};

/** A single protocol configuration value. */
export type ProtocolConfigAttr = {
  __typename?: 'ProtocolConfigAttr';
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

/** Whether or not a single feature is enabled in the protocol config. */
export type ProtocolConfigFeatureFlag = {
  __typename?: 'ProtocolConfigFeatureFlag';
  key: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

/**
 * Constants that control how the chain operates.
 *
 * These can only change during protocol upgrades which happen on epoch boundaries.
 */
export type ProtocolConfigs = {
  __typename?: 'ProtocolConfigs';
  /** Query for the value of the configuration with name `key`. */
  config?: Maybe<ProtocolConfigAttr>;
  /**
   * List all available configurations and their values.  These configurations can take any value
   * (but they will all be represented in string form), and do not include feature flags.
   */
  configs: Array<ProtocolConfigAttr>;
  /** Query for the state of the feature flag with name `key`. */
  featureFlag?: Maybe<ProtocolConfigFeatureFlag>;
  /**
   * List all available feature flags and their values.  Feature flags are a form of boolean
   * configuration that are usually used to gate features while they are in development.  Once a
   * flag has been enabled, it is rare for it to be disabled.
   */
  featureFlags: Array<ProtocolConfigFeatureFlag>;
  /**
   * The protocol is not required to change on every epoch boundary, so the protocol version
   * tracks which change to the protocol these configs are from.
   */
  protocolVersion: Scalars['Int']['output'];
};


/**
 * Constants that control how the chain operates.
 *
 * These can only change during protocol upgrades which happen on epoch boundaries.
 */
export type ProtocolConfigsConfigArgs = {
  key: Scalars['String']['input'];
};


/**
 * Constants that control how the chain operates.
 *
 * These can only change during protocol upgrades which happen on epoch boundaries.
 */
export type ProtocolConfigsFeatureFlagArgs = {
  key: Scalars['String']['input'];
};

/** Publishes a Move Package. */
export type PublishTransaction = {
  __typename?: 'PublishTransaction';
  /** IDs of the transitive dependencies of the package to be published. */
  dependencies: Array<Scalars['SuiAddress']['output']>;
  /** Bytecode for the modules to be published, BCS serialized and Base64 encoded. */
  modules: Array<Scalars['Base64']['output']>;
};

/** BCS encoded primitive value (not an object or Move struct). */
export type Pure = {
  __typename?: 'Pure';
  /** BCS serialized and Base64 encoded primitive value. */
  bytes: Scalars['Base64']['output'];
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  /**
   * Range of checkpoints that the RPC has data available for (for data
   * that can be tied to a particular checkpoint).
   */
  availableRange: AvailableRange;
  /**
   * First four bytes of the network's genesis checkpoint digest (uniquely identifies the
   * network).
   */
  chainIdentifier: Scalars['String']['output'];
  /**
   * Fetch checkpoint information by sequence number or digest (defaults to the latest available
   * checkpoint).
   */
  checkpoint?: Maybe<Checkpoint>;
  checkpoints: CheckpointConnection;
  /**
   * The coin objects that exist in the network.
   *
   * The type field is a string of the inner type of the coin by which to filter
   * (e.g. `0x2::sui::SUI`). If no type is provided, it will default to `0x2::sui::SUI`.
   */
  coinConnection?: Maybe<CoinConnection>;
  coinMetadata?: Maybe<CoinMetadata>;
  /** Fetch epoch information by ID (defaults to the latest epoch). */
  epoch?: Maybe<Epoch>;
  eventConnection?: Maybe<EventConnection>;
  object?: Maybe<Object>;
  objectConnection?: Maybe<ObjectConnection>;
  owner?: Maybe<ObjectOwner>;
  /**
   * Fetch the protocol config by protocol version (defaults to the latest protocol
   * version known to the GraphQL)
   */
  protocolConfig: ProtocolConfigs;
  /** Resolves the owner address of the provided domain name */
  resolveNameServiceAddress?: Maybe<Address>;
  /** Configuration for this RPC service */
  serviceConfig: ServiceConfig;
  /** Fetch a transaction block by its transaction digest. */
  transactionBlock?: Maybe<TransactionBlock>;
  transactionBlockConnection?: Maybe<TransactionBlockConnection>;
  /**
   * Fetch a structured representation of a concrete type, including its layout information.
   * Fails if the type is malformed.
   */
  type: MoveType;
};


export type QueryAddressArgs = {
  address: Scalars['SuiAddress']['input'];
};


export type QueryCheckpointArgs = {
  id?: InputMaybe<CheckpointId>;
};


export type QueryCheckpointsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCoinConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCoinMetadataArgs = {
  coinType: Scalars['String']['input'];
};


export type QueryEpochArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryObjectArgs = {
  address: Scalars['SuiAddress']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryObjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOwnerArgs = {
  address: Scalars['SuiAddress']['input'];
};


export type QueryProtocolConfigArgs = {
  protocolVersion?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryResolveNameServiceAddressArgs = {
  name: Scalars['String']['input'];
};


export type QueryTransactionBlockArgs = {
  digest: Scalars['String']['input'];
};


export type QueryTransactionBlockConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionBlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTypeArgs = {
  type: Scalars['String']['input'];
};

export type RandomnessStateCreateTransaction = {
  __typename?: 'RandomnessStateCreateTransaction';
  /** A workaround to define an empty variant of a GraphQL union. */
  _?: Maybe<Scalars['Boolean']['output']>;
};

/** System transaction to update the source of on-chain randomness. */
export type RandomnessStateUpdateTransaction = {
  __typename?: 'RandomnessStateUpdateTransaction';
  /** Epoch of the randomness state update transaction. */
  epoch?: Maybe<Epoch>;
  /** Updated random bytes, encoded as Base64. */
  randomBytes: Scalars['Base64']['output'];
  /** The initial version the randomness object was shared at. */
  randomnessObjInitialSharedVersion: Scalars['Int']['output'];
  /** Randomness round of the update. */
  randomnessRound: Scalars['Int']['output'];
};

/** A Move object that can be received in this transaction. */
export type Receiving = {
  __typename?: 'Receiving';
  /** ID of the object being read. */
  address: Scalars['SuiAddress']['output'];
  /**
   * 32-byte hash that identifies the object's contents at this version, encoded as a Base58
   * string.
   */
  digest: Scalars['String']['output'];
  /** The object at this version.  May not be available due to pruning. */
  object?: Maybe<Object>;
  /** Version of the object being read. */
  version: Scalars['Int']['output'];
};

/** The result of another transaction command. */
export type Result = {
  __typename?: 'Result';
  /** The index of the previous command (0-indexed) that returned this result. */
  cmd: Scalars['Int']['output'];
  /**
   * If the previous command returns multiple values, this is the index of the individual result
   * among the multiple results from that command (also 0-indexed).
   */
  ix?: Maybe<Scalars['Int']['output']>;
};

/** Information about whether epoch changes are using safe mode. */
export type SafeMode = {
  __typename?: 'SafeMode';
  /**
   * Whether safe mode was used for the last epoch change.  The system will retry a full epoch
   * change on every epoch boundary and automatically reset this flag if so.
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Accumulated fees for computation and cost that have not been added to the various reward
   * pools, because the full epoch change did not happen.
   */
  gasSummary?: Maybe<GasCostSummary>;
};

export type ServiceConfig = {
  __typename?: 'ServiceConfig';
  /** Default number of elements allowed on a single page of a connection. */
  defaultPageSize: Scalars['Int']['output'];
  /** List of all features that are enabled on this GraphQL service. */
  enabledFeatures: Array<Feature>;
  /** Check whether `feature` is enabled on this GraphQL service. */
  isEnabled: Scalars['Boolean']['output'];
  /**
   * Maximum estimated cost of a database query used to serve a GraphQL request.  This is
   * measured in the same units that the database uses in EXPLAIN queries.
   */
  maxDbQueryCost: Scalars['BigInt']['output'];
  /** Maximum nesting allowed in struct fields when calculating the layout of a single Move Type. */
  maxMoveValueDepth: Scalars['Int']['output'];
  /**
   * The maximum number of output nodes in a GraphQL response.
   *
   * If a node is a connection, it is counted as the specified 'first' or 'last' number of items,
   * or the default_page_size as set by the server. Non-connection nodes and fields are not included
   * in this count.
   *
   * The count of output nodes is multiplicative. For example, if the current node is a connection
   * with first: 10 and has a field to a connection with last: 20, the total estimated output nodes
   * would be 10 * 20 = 200.
   */
  maxOutputNodes: Scalars['Int']['output'];
  /** Maximum number of elements allowed on a single page of a connection. */
  maxPageSize: Scalars['Int']['output'];
  /** The maximum depth a GraphQL query can be to be accepted by this service. */
  maxQueryDepth: Scalars['Int']['output'];
  /** The maximum number of nodes (field names) the service will accept in a single query. */
  maxQueryNodes: Scalars['Int']['output'];
  /** Maximum length of a query payload string. */
  maxQueryPayloadSize: Scalars['Int']['output'];
  /** Maximum nesting allowed in type arguments in Move Types resolved by this service. */
  maxTypeArgumentDepth: Scalars['Int']['output'];
  /**
   * Maximum number of type arguments passed into a generic instantiation of a Move Type resolved
   * by this service.
   */
  maxTypeArgumentWidth: Scalars['Int']['output'];
  /**
   * Maximum number of structs that need to be processed when calculating the layout of a single
   * Move Type.
   */
  maxTypeNodes: Scalars['Int']['output'];
  /** Maximum time in milliseconds that will be spent to serve one request. */
  requestTimeoutMs: Scalars['Int']['output'];
};


export type ServiceConfigIsEnabledArgs = {
  feature: Feature;
};

/** A Move object that's shared. */
export type SharedInput = {
  __typename?: 'SharedInput';
  address: Scalars['SuiAddress']['output'];
  /** The version that this this object was shared at. */
  initialSharedVersion: Scalars['Int']['output'];
  /**
   * Controls whether the transaction block can reference the shared object as a mutable
   * reference or by value. This has implications for scheduling: Transactions that just read
   * shared objects at a certain version (mutable = false) can be executed concurrently, while
   * transactions that write shared objects (mutable = true) must be executed serially with
   * respect to each other.
   */
  mutable: Scalars['Boolean']['output'];
};

/**
 * The transaction accepted a shared object as input, but it was deleted before the transaction
 * executed.
 */
export type SharedObjectDelete = {
  __typename?: 'SharedObjectDelete';
  /** ID of the shared object. */
  address: Scalars['SuiAddress']['output'];
  /**
   * Whether this transaction intended to use this shared object mutably or not. See
   * `SharedInput.mutable` for further details.
   */
  mutable: Scalars['Boolean']['output'];
  /**
   * The version of the shared object that was assigned to this transaction during by consensus,
   * during sequencing.
   */
  version: Scalars['Int']['output'];
};

/** The transaction accepted a shared object as input, but only to read it. */
export type SharedObjectRead = {
  __typename?: 'SharedObjectRead';
  /** ID of the object being read. */
  address: Scalars['SuiAddress']['output'];
  /**
   * 32-byte hash that identifies the object's contents at this version, encoded as a Base58
   * string.
   */
  digest: Scalars['String']['output'];
  /** The object at this version.  May not be available due to pruning. */
  object?: Maybe<Object>;
  /** Version of the object being read. */
  version: Scalars['Int']['output'];
};

/**
 * Splits off coins with denominations in `amounts` from `coin`, returning multiple results (as
 * many as there are amounts.)
 */
export type SplitCoinsTransaction = {
  __typename?: 'SplitCoinsTransaction';
  /** The denominations to split off from the coin. */
  amounts: Array<TransactionArgument>;
  /** The coin to split. */
  coin: TransactionArgument;
};

export enum StakeStatus {
  /** The stake object is active in a staking pool and it is generating rewards */
  Active = 'ACTIVE',
  /** The stake awaits to join a staking pool in the next epoch */
  Pending = 'PENDING',
  /** The stake is no longer active in any staking pool */
  Unstaked = 'UNSTAKED'
}

/** Parameters related to subsiding staking rewards */
export type StakeSubsidy = {
  __typename?: 'StakeSubsidy';
  /**
   * SUI set aside for stake subsidies -- reduces over time as stake subsidies are paid out over
   * time.
   */
  balance?: Maybe<Scalars['BigInt']['output']>;
  /** Amount of stake subsidy deducted from the balance per distribution -- decays over time. */
  currentDistributionAmount?: Maybe<Scalars['BigInt']['output']>;
  /**
   * Percentage of the current distribution amount to deduct at the end of the current subsidy
   * period, expressed in basis points.
   */
  decreaseRate?: Maybe<Scalars['Int']['output']>;
  /**
   * Number of times stake subsidies have been distributed subsidies are distributed with other
   * staking rewards, at the end of the epoch.
   */
  distributionCounter?: Maybe<Scalars['Int']['output']>;
  /**
   * Maximum number of stake subsidy distributions that occur with the same distribution amount
   * (before the amount is reduced).
   */
  periodLength?: Maybe<Scalars['Int']['output']>;
};

export type StakedSui = {
  __typename?: 'StakedSui';
  /** The epoch at which this stake became active */
  activatedEpoch?: Maybe<Epoch>;
  /** The corresponding `0x3::staking_pool::StakedSui` Move object. */
  asMoveObject: MoveObject;
  /**
   * The estimated reward for this stake object, calculated as:
   *
   * principal * (initial_stake_rate / current_stake_rate - 1.0)
   *
   * Or 0, if this value is negative, where:
   *
   * - `initial_stake_rate` is the stake rate at the epoch this stake was activated at.
   * - `current_stake_rate` is the stake rate in the current epoch.
   *
   * This value is only available if the stake is active.
   */
  estimatedReward?: Maybe<Scalars['BigInt']['output']>;
  /** The SUI that was initially staked. */
  principal?: Maybe<Scalars['BigInt']['output']>;
  /** The epoch at which this object was requested to join a stake pool */
  requestedEpoch?: Maybe<Epoch>;
  /** A stake can be pending, active, or unstaked */
  status: StakeStatus;
};

export type StakedSuiConnection = {
  __typename?: 'StakedSuiConnection';
  /** A list of edges. */
  edges: Array<StakedSuiEdge>;
  /** A list of nodes. */
  nodes: Array<StakedSui>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StakedSuiEdge = {
  __typename?: 'StakedSuiEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: StakedSui;
};

/** SUI set aside to account for objects stored on-chain. */
export type StorageFund = {
  __typename?: 'StorageFund';
  /**
   * The portion of the storage fund that will never be refunded through storage rebates.
   *
   * The system maintains an invariant that the sum of all storage fees into the storage fund is
   * equal to the sum of of all storage rebates out, the total storage rebates remaining, and the
   * non-refundable balance.
   */
  nonRefundableBalance?: Maybe<Scalars['BigInt']['output']>;
  /** Sum of storage rebates of live objects on chain. */
  totalObjectStorageRebates?: Maybe<Scalars['BigInt']['output']>;
};

export type SuinsRegistration = {
  __typename?: 'SuinsRegistration';
  /** Convert the SuinsRegistration object into a Move object */
  asMoveObject: MoveObject;
  /** Domain name of the SuinsRegistration object */
  domain: Scalars['String']['output'];
};

export type SuinsRegistrationConnection = {
  __typename?: 'SuinsRegistrationConnection';
  /** A list of edges. */
  edges: Array<SuinsRegistrationEdge>;
  /** A list of nodes. */
  nodes: Array<SuinsRegistration>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SuinsRegistrationEdge = {
  __typename?: 'SuinsRegistrationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: SuinsRegistration;
};

/** Details of the system that are decided during genesis. */
export type SystemParameters = {
  __typename?: 'SystemParameters';
  /** Target duration of an epoch, in milliseconds. */
  durationMs?: Maybe<Scalars['BigInt']['output']>;
  /** The maximum number of active validators that the system supports. */
  maxValidatorCount?: Maybe<Scalars['Int']['output']>;
  /** The minimum number of active validators that the system supports. */
  minValidatorCount?: Maybe<Scalars['Int']['output']>;
  /** Minimum stake needed to become a new validator. */
  minValidatorJoiningStake?: Maybe<Scalars['BigInt']['output']>;
  /** The epoch at which stake subsidies start being paid out. */
  stakeSubsidyStartEpoch?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of epochs that a validator has to recover from having less than
   * `validatorLowStakeThreshold` stake.
   */
  validatorLowStakeGracePeriod?: Maybe<Scalars['BigInt']['output']>;
  /**
   * Validators with stake below this threshold will enter the grace period (see
   * `validatorLowStakeGracePeriod`), after which they are removed from the active validator set.
   */
  validatorLowStakeThreshold?: Maybe<Scalars['BigInt']['output']>;
  /**
   * Validators with stake below this threshold will be removed from the the active validator set
   * at the next epoch boundary, without a grace period.
   */
  validatorVeryLowStakeThreshold?: Maybe<Scalars['BigInt']['output']>;
};

/** An argument to a programmable transaction command. */
export type TransactionArgument = GasCoin | Input | Result;

export type TransactionBlock = {
  __typename?: 'TransactionBlock';
  /** Serialized form of this transaction's `SenderSignedData`, BCS serialized and Base64 encoded. */
  bcs?: Maybe<Scalars['Base64']['output']>;
  /**
   * A 32-byte hash that uniquely identifies the transaction block contents, encoded in Base58.
   * This serves as a unique id for the block on chain.
   */
  digest: Scalars['String']['output'];
  /** The effects field captures the results to the chain of executing this transaction. */
  effects?: Maybe<TransactionBlockEffects>;
  /** Events emitted by this transaction block. */
  events: EventConnection;
  /**
   * This field is set by senders of a transaction block. It is an epoch reference that sets a
   * deadline after which validators will no longer consider the transaction valid. By default,
   * there is no deadline for when a transaction must execute.
   */
  expiration?: Maybe<Epoch>;
  /**
   * The gas input field provides information on what objects were used as gas as well as the
   * owner of the gas object(s) and information on the gas price and budget.
   *
   * If the owner of the gas object(s) is not the same as the sender, the transaction block is a
   * sponsored transaction block.
   */
  gasInput?: Maybe<GasInput>;
  /**
   * The type of this transaction as well as the commands and/or parameters comprising the
   * transaction of this kind.
   */
  kind?: Maybe<TransactionBlockKind>;
  /**
   * The address corresponding to the public key that signed this transaction. System
   * transactions do not have senders.
   */
  sender?: Maybe<Address>;
  /**
   * A list of all signatures, Base64-encoded, from senders, and potentially the gas owner if
   * this is a sponsored transaction.
   */
  signatures?: Maybe<Array<Scalars['Base64']['output']>>;
};


export type TransactionBlockEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TransactionBlockConnection = {
  __typename?: 'TransactionBlockConnection';
  /** A list of edges. */
  edges: Array<TransactionBlockEdge>;
  /** A list of nodes. */
  nodes: Array<TransactionBlock>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TransactionBlockEdge = {
  __typename?: 'TransactionBlockEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: TransactionBlock;
};

export type TransactionBlockEffects = {
  __typename?: 'TransactionBlockEffects';
  /**
   * The effect this transaction had on the balances (sum of coin values per coin type) of
   * addresses and objects.
   */
  balanceChanges?: Maybe<Array<BalanceChange>>;
  /** Base64 encoded bcs serialization of the on-chain transaction effects. */
  bcs: Scalars['Base64']['output'];
  /** The checkpoint this transaction was finalized in. */
  checkpoint?: Maybe<Checkpoint>;
  /** Transactions whose outputs this transaction depends upon. */
  dependencies?: Maybe<Array<TransactionBlock>>;
  /** The epoch this transaction was finalized in. */
  epoch?: Maybe<Epoch>;
  /** The reason for a transaction failure, if it did fail. */
  errors?: Maybe<Scalars['String']['output']>;
  /** Effects to the gas object. */
  gasEffects?: Maybe<GasEffects>;
  /**
   * The latest version of all objects (apart from packages) that have been created or modified
   * by this transaction, immediately following this transaction.
   */
  lamportVersion: Scalars['Int']['output'];
  /** The effect this transaction had on objects on-chain. */
  objectChanges?: Maybe<Array<ObjectChange>>;
  /** Whether the transaction executed successfully or not. */
  status?: Maybe<ExecutionStatus>;
  /** Timestamp corresponding to the checkpoint this transaction was finalized in. */
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  /** The transaction that ran to produce these effects. */
  transactionBlock?: Maybe<TransactionBlock>;
  /** Shared objects that are referenced by but not changed by this transaction. */
  unchangedSharedObjects?: Maybe<Array<UnchangedSharedObject>>;
};

export type TransactionBlockFilter = {
  afterCheckpoint?: InputMaybe<Scalars['Int']['input']>;
  atCheckpoint?: InputMaybe<Scalars['Int']['input']>;
  beforeCheckpoint?: InputMaybe<Scalars['Int']['input']>;
  changedObject?: InputMaybe<Scalars['SuiAddress']['input']>;
  function?: InputMaybe<Scalars['String']['input']>;
  inputObject?: InputMaybe<Scalars['SuiAddress']['input']>;
  kind?: InputMaybe<TransactionBlockKindInput>;
  module?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['SuiAddress']['input']>;
  paidAddress?: InputMaybe<Scalars['SuiAddress']['input']>;
  recvAddress?: InputMaybe<Scalars['SuiAddress']['input']>;
  sentAddress?: InputMaybe<Scalars['SuiAddress']['input']>;
  signAddress?: InputMaybe<Scalars['SuiAddress']['input']>;
  transactionIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TransactionBlockKind = AuthenticatorStateUpdateTransaction | ChangeEpochTransaction | ConsensusCommitPrologueTransaction | EndOfEpochTransaction | GenesisTransaction | ProgrammableTransactionBlock | RandomnessStateUpdateTransaction;

export enum TransactionBlockKindInput {
  ProgrammableTx = 'PROGRAMMABLE_TX',
  SystemTx = 'SYSTEM_TX'
}

export type TransactionInput = OwnedOrImmutable | Pure | Receiving | SharedInput;

export type TransactionInputConnection = {
  __typename?: 'TransactionInputConnection';
  /** A list of edges. */
  edges: Array<TransactionInputEdge>;
  /** A list of nodes. */
  nodes: Array<TransactionInput>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TransactionInputEdge = {
  __typename?: 'TransactionInputEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: TransactionInput;
};

/**
 * Transfers `inputs` to `address`. All inputs must have the `store` ability (allows public
 * transfer) and must not be previously immutable or shared.
 */
export type TransferObjectsTransaction = {
  __typename?: 'TransferObjectsTransaction';
  /** The address to transfer to. */
  address: TransactionArgument;
  /** The objects to transfer. */
  inputs: Array<TransactionArgument>;
};

/** Information about which previous versions of a package introduced its types. */
export type TypeOrigin = {
  __typename?: 'TypeOrigin';
  /** The storage ID of the package that first defined this type. */
  definingId: Scalars['SuiAddress']['output'];
  /** Module defining the type. */
  module: Scalars['String']['output'];
  /** Name of the struct. */
  struct: Scalars['String']['output'];
};

/**
 * Details pertaining to shared objects that are referenced by but not changed by a transaction.
 * This information is considered part of the effects, because although the transaction specifies
 * the shared object as input, consensus must schedule it and pick the version that is actually
 * used.
 */
export type UnchangedSharedObject = SharedObjectDelete | SharedObjectRead;

/** Upgrades a Move Package. */
export type UpgradeTransaction = {
  __typename?: 'UpgradeTransaction';
  /** ID of the package being upgraded. */
  currentPackage: Scalars['SuiAddress']['output'];
  /** IDs of the transitive dependencies of the package to be published. */
  dependencies: Array<Scalars['SuiAddress']['output']>;
  /** Bytecode for the modules to be published, BCS serialized and Base64 encoded. */
  modules: Array<Scalars['Base64']['output']>;
  /** The `UpgradeTicket` authorizing the upgrade. */
  upgradeTicket: TransactionArgument;
};

export type Validator = {
  __typename?: 'Validator';
  /** Validator's address. */
  address: Address;
  /**
   * The APY of this validator in basis points.
   * To get the APY in percentage, divide by 100.
   */
  apy?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of epochs for which this validator has been below the
   * low stake threshold.
   */
  atRisk?: Maybe<Scalars['Int']['output']>;
  /** The fee charged by the validator for staking services. */
  commissionRate?: Maybe<Scalars['Int']['output']>;
  /** Validator's set of credentials. */
  credentials?: Maybe<ValidatorCredentials>;
  /** Validator's description. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The validator's current exchange object. The exchange rate is used to determine
   * the amount of SUI tokens that each past SUI staker can withdraw in the future.
   */
  exchangeRates?: Maybe<MoveObject>;
  /** Number of exchange rates in the table. */
  exchangeRatesSize?: Maybe<Scalars['Int']['output']>;
  /** The reference gas price for this epoch. */
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  /** Validator's url containing their custom image. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Validator's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The proposed next epoch fee for the validator's staking services. */
  nextEpochCommissionRate?: Maybe<Scalars['Int']['output']>;
  /** Validator's set of credentials for the next epoch. */
  nextEpochCredentials?: Maybe<ValidatorCredentials>;
  /** The validator's gas price quote for the next epoch. */
  nextEpochGasPrice?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The total number of SUI tokens in this pool plus
   * the pending stake amount for this epoch.
   */
  nextEpochStake?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The validator's current valid `Cap` object. Validators can delegate
   * the operation ability to another address. The address holding this `Cap` object
   * can then update the reference gas price and tallying rule on behalf of the validator.
   */
  operationCap?: Maybe<MoveObject>;
  /** Pending pool token withdrawn during the current epoch, emptied at epoch boundaries. */
  pendingPoolTokenWithdraw?: Maybe<Scalars['BigInt']['output']>;
  /** Pending stake amount for this epoch. */
  pendingStake?: Maybe<Scalars['BigInt']['output']>;
  /** Pending stake withdrawn during the current epoch, emptied at epoch boundaries. */
  pendingTotalSuiWithdraw?: Maybe<Scalars['BigInt']['output']>;
  /** Total number of pool tokens issued by the pool. */
  poolTokenBalance?: Maybe<Scalars['BigInt']['output']>;
  /** Validator's homepage URL. */
  projectUrl?: Maybe<Scalars['String']['output']>;
  /** The addresses of other validators this validator has reported. */
  reportRecords?: Maybe<Array<Address>>;
  /** The epoch stake rewards will be added here at the end of each epoch. */
  rewardsPool?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The validator's current staking pool object, used to track the amount of stake
   * and to compound staking rewards.
   */
  stakingPool?: Maybe<MoveObject>;
  /** The epoch at which this pool became active. */
  stakingPoolActivationEpoch?: Maybe<Scalars['Int']['output']>;
  /** The total number of SUI tokens in this pool. */
  stakingPoolSuiBalance?: Maybe<Scalars['BigInt']['output']>;
  /** The voting power of this validator in basis points (e.g., 100 = 1% voting power). */
  votingPower?: Maybe<Scalars['Int']['output']>;
};

export type ValidatorCredentials = {
  __typename?: 'ValidatorCredentials';
  netAddress?: Maybe<Scalars['String']['output']>;
  networkPubKey?: Maybe<Scalars['Base64']['output']>;
  p2PAddress?: Maybe<Scalars['String']['output']>;
  primaryAddress?: Maybe<Scalars['String']['output']>;
  proofOfPossession?: Maybe<Scalars['Base64']['output']>;
  protocolPubKey?: Maybe<Scalars['Base64']['output']>;
  workerAddress?: Maybe<Scalars['String']['output']>;
  workerPubKey?: Maybe<Scalars['Base64']['output']>;
};

/** Representation of `0x3::validator_set::ValidatorSet`. */
export type ValidatorSet = {
  __typename?: 'ValidatorSet';
  /** The current list of active validators. */
  activeValidators?: Maybe<Array<Validator>>;
  inactivePoolsSize?: Maybe<Scalars['Int']['output']>;
  pendingActiveValidatorsSize?: Maybe<Scalars['Int']['output']>;
  /**
   * Validators that are pending removal from the active validator set, expressed as indices in
   * to `activeValidators`.
   */
  pendingRemovals?: Maybe<Array<Scalars['Int']['output']>>;
  stakePoolMappingsSize?: Maybe<Scalars['Int']['output']>;
  /** Total amount of stake for all active validators at the beginning of the epoch. */
  totalStake?: Maybe<Scalars['BigInt']['output']>;
  validatorCandidatesSize?: Maybe<Scalars['Int']['output']>;
};

export type GetCheckpointQueryVariables = Exact<{
  id?: InputMaybe<CheckpointId>;
}>;


export type GetCheckpointQuery = { __typename?: 'Query', checkpoint?: { __typename?: 'Checkpoint', digest: string, networkTotalTransactions?: number | null, previousCheckpointDigest?: string | null, sequenceNumber: number, timestamp: any, validatorSignatures: any, epoch?: { __typename?: 'Epoch', epochId: number } | null, rollingGasSummary?: { __typename?: 'GasCostSummary', computationCost?: any | null, storageCost?: any | null, storageRebate?: any | null, nonRefundableStorageFee?: any | null } | null, transactionBlockConnection?: { __typename?: 'TransactionBlockConnection', nodes: Array<{ __typename?: 'TransactionBlock', digest: string }> } | null } | null };

export type GetCheckpointsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCheckpointsQuery = { __typename?: 'Query', checkpoints: { __typename?: 'CheckpointConnection', pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, nodes: Array<{ __typename?: 'Checkpoint', digest: string, networkTotalTransactions?: number | null, previousCheckpointDigest?: string | null, sequenceNumber: number, timestamp: any, validatorSignatures: any, epoch?: { __typename?: 'Epoch', epochId: number } | null, rollingGasSummary?: { __typename?: 'GasCostSummary', computationCost?: any | null, storageCost?: any | null, storageRebate?: any | null, nonRefundableStorageFee?: any | null } | null, transactionBlockConnection?: { __typename?: 'TransactionBlockConnection', nodes: Array<{ __typename?: 'TransactionBlock', digest: string }> } | null }> } };

export type Rpc_Checkpoint_FieldsFragment = { __typename?: 'Checkpoint', digest: string, networkTotalTransactions?: number | null, previousCheckpointDigest?: string | null, sequenceNumber: number, timestamp: any, validatorSignatures: any, epoch?: { __typename?: 'Epoch', epochId: number } | null, rollingGasSummary?: { __typename?: 'GasCostSummary', computationCost?: any | null, storageCost?: any | null, storageRebate?: any | null, nonRefundableStorageFee?: any | null } | null, transactionBlockConnection?: { __typename?: 'TransactionBlockConnection', nodes: Array<{ __typename?: 'TransactionBlock', digest: string }> } | null };

export type GetAllBalancesQueryVariables = Exact<{
  owner: Scalars['SuiAddress']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllBalancesQuery = { __typename?: 'Query', address?: { __typename?: 'Address', balanceConnection?: { __typename?: 'BalanceConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'Balance', coinObjectCount?: number | null, totalBalance?: any | null, coinType?: { __typename?: 'MoveType', repr: string } | null }> } | null } | null };

export type GetBalanceQueryVariables = Exact<{
  owner: Scalars['SuiAddress']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetBalanceQuery = { __typename?: 'Query', address?: { __typename?: 'Address', balance?: { __typename?: 'Balance', coinObjectCount?: number | null, totalBalance?: any | null, coinType?: { __typename?: 'MoveType', repr: string } | null } | null } | null };

export type GetChainIdentifierQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChainIdentifierQuery = { __typename?: 'Query', chainIdentifier: string };

export type GetCoinMetadataQueryVariables = Exact<{
  coinType: Scalars['String']['input'];
}>;


export type GetCoinMetadataQuery = { __typename?: 'Query', coinMetadata?: { __typename?: 'CoinMetadata', decimals?: number | null, name?: string | null, symbol?: string | null, description?: string | null, iconUrl?: string | null, asMoveObject: { __typename?: 'MoveObject', asObject: { __typename?: 'Object', address: any } } } | null };

export type GetCoinsQueryVariables = Exact<{
  owner: Scalars['SuiAddress']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCoinsQuery = { __typename?: 'Query', address?: { __typename?: 'Address', address: any, coinConnection?: { __typename?: 'CoinConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'Coin', balance?: any | null, asMoveObject: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null, asObject: { __typename?: 'Object', version: number, digest: string, coinObjectId: any, previousTransactionBlock?: { __typename?: 'TransactionBlock', digest: string } | null } } }> } | null } | null };

export type GetCurrentEpochQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentEpochQuery = { __typename?: 'Query', epoch?: { __typename?: 'Epoch', epochId: number, startTimestamp: any, endTimestamp?: any | null, referenceGasPrice?: any | null, validatorSet?: { __typename?: 'ValidatorSet', activeValidators?: Array<{ __typename?: 'Validator', atRisk?: number | null, commissionRate?: number | null, exchangeRatesSize?: number | null, description?: string | null, gasPrice?: any | null, imageUrl?: string | null, name?: string | null, nextEpochCommissionRate?: number | null, nextEpochGasPrice?: any | null, nextEpochStake?: any | null, pendingPoolTokenWithdraw?: any | null, pendingStake?: any | null, pendingTotalSuiWithdraw?: any | null, poolTokenBalance?: any | null, projectUrl?: string | null, rewardsPool?: any | null, stakingPoolActivationEpoch?: number | null, stakingPoolSuiBalance?: any | null, votingPower?: number | null, exchangeRates?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any } | null, asObject: { __typename?: 'Object', address: any } } | null, credentials?: { __typename?: 'ValidatorCredentials', netAddress?: string | null, networkPubKey?: any | null, p2PAddress?: string | null, primaryAddress?: string | null, workerPubKey?: any | null, workerAddress?: string | null, proofOfPossession?: any | null, protocolPubKey?: any | null } | null, nextEpochCredentials?: { __typename?: 'ValidatorCredentials', netAddress?: string | null, networkPubKey?: any | null, p2PAddress?: string | null, primaryAddress?: string | null, workerPubKey?: any | null, workerAddress?: string | null, proofOfPossession?: any | null, protocolPubKey?: any | null } | null, operationCap?: { __typename?: 'MoveObject', asObject: { __typename?: 'Object', address: any } } | null, stakingPool?: { __typename?: 'MoveObject', asObject: { __typename?: 'Object', address: any } } | null, address: { __typename?: 'Address', address: any }, reportRecords?: Array<{ __typename?: 'Address', address: any }> | null }> | null } | null, firstCheckpoint: { __typename?: 'CheckpointConnection', nodes: Array<{ __typename?: 'Checkpoint', sequenceNumber: number }> } } | null };

export type Rpc_Validator_FieldsFragment = { __typename?: 'Validator', atRisk?: number | null, commissionRate?: number | null, exchangeRatesSize?: number | null, description?: string | null, gasPrice?: any | null, imageUrl?: string | null, name?: string | null, nextEpochCommissionRate?: number | null, nextEpochGasPrice?: any | null, nextEpochStake?: any | null, pendingPoolTokenWithdraw?: any | null, pendingStake?: any | null, pendingTotalSuiWithdraw?: any | null, poolTokenBalance?: any | null, projectUrl?: string | null, rewardsPool?: any | null, stakingPoolActivationEpoch?: number | null, stakingPoolSuiBalance?: any | null, votingPower?: number | null, exchangeRates?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any } | null, asObject: { __typename?: 'Object', address: any } } | null, credentials?: { __typename?: 'ValidatorCredentials', netAddress?: string | null, networkPubKey?: any | null, p2PAddress?: string | null, primaryAddress?: string | null, workerPubKey?: any | null, workerAddress?: string | null, proofOfPossession?: any | null, protocolPubKey?: any | null } | null, nextEpochCredentials?: { __typename?: 'ValidatorCredentials', netAddress?: string | null, networkPubKey?: any | null, p2PAddress?: string | null, primaryAddress?: string | null, workerPubKey?: any | null, workerAddress?: string | null, proofOfPossession?: any | null, protocolPubKey?: any | null } | null, operationCap?: { __typename?: 'MoveObject', asObject: { __typename?: 'Object', address: any } } | null, stakingPool?: { __typename?: 'MoveObject', asObject: { __typename?: 'Object', address: any } } | null, address: { __typename?: 'Address', address: any }, reportRecords?: Array<{ __typename?: 'Address', address: any }> | null };

export type Rpc_Credential_FieldsFragment = { __typename?: 'ValidatorCredentials', netAddress?: string | null, networkPubKey?: any | null, p2PAddress?: string | null, primaryAddress?: string | null, workerPubKey?: any | null, workerAddress?: string | null, proofOfPossession?: any | null, protocolPubKey?: any | null };

export type GetDynamicFieldObjectQueryVariables = Exact<{
  parentId: Scalars['SuiAddress']['input'];
  name: DynamicFieldName;
}>;


export type GetDynamicFieldObjectQuery = { __typename?: 'Query', object?: { __typename?: 'Object', dynamicObjectField?: { __typename?: 'DynamicField', name?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null, value?: { __typename: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any, type: { __typename?: 'MoveType', repr: string } } | null, asObject: { __typename?: 'Object', address: any, digest: string, version: number } } | { __typename: 'MoveValue' } | null } | null } | null };

export type GetDynamicFieldsQueryVariables = Exact<{
  parentId: Scalars['SuiAddress']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetDynamicFieldsQuery = { __typename?: 'Query', object?: { __typename?: 'Object', dynamicFieldConnection?: { __typename?: 'DynamicFieldConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'DynamicField', name?: { __typename?: 'MoveValue', bcs: any, json: any, type: { __typename?: 'MoveType', layout: any, repr: string } } | null, value?: { __typename: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any, type: { __typename?: 'MoveType', repr: string } } | null, asObject: { __typename?: 'Object', storageRebate?: any | null, address: any, digest: string, version: number } } | { __typename: 'MoveValue' } | null }> } | null } | null };

export type GetLatestCheckpointSequenceNumberQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestCheckpointSequenceNumberQuery = { __typename?: 'Query', checkpoint?: { __typename?: 'Checkpoint', sequenceNumber: number } | null };

export type GetLatestSuiSystemStateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestSuiSystemStateQuery = { __typename?: 'Query', epoch?: { __typename?: 'Epoch', epochId: number, startTimestamp: any, endTimestamp?: any | null, referenceGasPrice?: any | null, systemStateVersion?: number | null, safeMode?: { __typename?: 'SafeMode', enabled?: boolean | null, gasSummary?: { __typename?: 'GasCostSummary', computationCost?: any | null, nonRefundableStorageFee?: any | null, storageCost?: any | null, storageRebate?: any | null } | null } | null, systemStakeSubsidy?: { __typename?: 'StakeSubsidy', balance?: any | null, currentDistributionAmount?: any | null, decreaseRate?: number | null, distributionCounter?: number | null, periodLength?: number | null } | null, storageFund?: { __typename?: 'StorageFund', nonRefundableBalance?: any | null, totalObjectStorageRebates?: any | null } | null, systemParameters?: { __typename?: 'SystemParameters', minValidatorCount?: number | null, maxValidatorCount?: number | null, minValidatorJoiningStake?: any | null, durationMs?: any | null, validatorLowStakeThreshold?: any | null, validatorLowStakeGracePeriod?: any | null, validatorVeryLowStakeThreshold?: any | null } | null, protocolConfigs: { __typename?: 'ProtocolConfigs', protocolVersion: number }, validatorSet?: { __typename?: 'ValidatorSet', inactivePoolsSize?: number | null, pendingActiveValidatorsSize?: number | null, validatorCandidatesSize?: number | null, pendingRemovals?: Array<number> | null, totalStake?: any | null, activeValidators?: Array<{ __typename?: 'Validator', atRisk?: number | null, commissionRate?: number | null, exchangeRatesSize?: number | null, description?: string | null, gasPrice?: any | null, imageUrl?: string | null, name?: string | null, nextEpochCommissionRate?: number | null, nextEpochGasPrice?: any | null, nextEpochStake?: any | null, pendingPoolTokenWithdraw?: any | null, pendingStake?: any | null, pendingTotalSuiWithdraw?: any | null, poolTokenBalance?: any | null, projectUrl?: string | null, rewardsPool?: any | null, stakingPoolActivationEpoch?: number | null, stakingPoolSuiBalance?: any | null, votingPower?: number | null, exchangeRates?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any } | null, asObject: { __typename?: 'Object', address: any } } | null, credentials?: { __typename?: 'ValidatorCredentials', netAddress?: string | null, networkPubKey?: any | null, p2PAddress?: string | null, primaryAddress?: string | null, workerPubKey?: any | null, workerAddress?: string | null, proofOfPossession?: any | null, protocolPubKey?: any | null } | null, nextEpochCredentials?: { __typename?: 'ValidatorCredentials', netAddress?: string | null, networkPubKey?: any | null, p2PAddress?: string | null, primaryAddress?: string | null, workerPubKey?: any | null, workerAddress?: string | null, proofOfPossession?: any | null, protocolPubKey?: any | null } | null, operationCap?: { __typename?: 'MoveObject', asObject: { __typename?: 'Object', address: any } } | null, stakingPool?: { __typename?: 'MoveObject', asObject: { __typename?: 'Object', address: any } } | null, address: { __typename?: 'Address', address: any }, reportRecords?: Array<{ __typename?: 'Address', address: any }> | null }> | null } | null } | null };

export type GetMoveFunctionArgTypesQueryVariables = Exact<{
  packageId: Scalars['SuiAddress']['input'];
  module: Scalars['String']['input'];
  function: Scalars['String']['input'];
}>;


export type GetMoveFunctionArgTypesQuery = { __typename?: 'Query', object?: { __typename?: 'Object', asMovePackage?: { __typename?: 'MovePackage', module?: { __typename?: 'MoveModule', fileFormatVersion: number, function?: { __typename?: 'MoveFunction', parameters?: Array<{ __typename?: 'OpenMoveType', signature: any }> | null } | null } | null } | null } | null };

export type GetNormalizedMoveFunctionQueryVariables = Exact<{
  packageId: Scalars['SuiAddress']['input'];
  module: Scalars['String']['input'];
  function: Scalars['String']['input'];
}>;


export type GetNormalizedMoveFunctionQuery = { __typename?: 'Query', object?: { __typename?: 'Object', address: any, asMovePackage?: { __typename?: 'MovePackage', module?: { __typename?: 'MoveModule', fileFormatVersion: number, function?: { __typename?: 'MoveFunction', name: string, visibility?: MoveVisibility | null, isEntry?: boolean | null, parameters?: Array<{ __typename?: 'OpenMoveType', signature: any }> | null, typeParameters?: Array<{ __typename?: 'MoveFunctionTypeParameter', constraints: Array<MoveAbility> }> | null, return?: Array<{ __typename?: 'OpenMoveType', repr: string, signature: any }> | null } | null } | null } | null } | null };

export type Rpc_Move_Function_FieldsFragment = { __typename?: 'MoveFunction', name: string, visibility?: MoveVisibility | null, isEntry?: boolean | null, parameters?: Array<{ __typename?: 'OpenMoveType', signature: any }> | null, typeParameters?: Array<{ __typename?: 'MoveFunctionTypeParameter', constraints: Array<MoveAbility> }> | null, return?: Array<{ __typename?: 'OpenMoveType', repr: string, signature: any }> | null };

export type GetNormalizedMoveModuleQueryVariables = Exact<{
  packageId: Scalars['SuiAddress']['input'];
  module: Scalars['String']['input'];
}>;


export type GetNormalizedMoveModuleQuery = { __typename?: 'Query', object?: { __typename?: 'Object', asMovePackage?: { __typename?: 'MovePackage', module?: { __typename?: 'MoveModule', name: string, fileFormatVersion: number, friends: { __typename?: 'MoveModuleConnection', nodes: Array<{ __typename?: 'MoveModule', name: string, package: { __typename?: 'MovePackage', asObject: { __typename?: 'Object', address: any } } }> }, structs?: { __typename?: 'MoveStructConnection', nodes: Array<{ __typename?: 'MoveStruct', name: string, abilities?: Array<MoveAbility> | null, fields?: Array<{ __typename?: 'MoveField', name: string, type?: { __typename?: 'OpenMoveType', signature: any } | null }> | null, typeParameters?: Array<{ __typename?: 'MoveStructTypeParameter', isPhantom: boolean, constraints: Array<MoveAbility> }> | null }> } | null, functions?: { __typename?: 'MoveFunctionConnection', nodes: Array<{ __typename?: 'MoveFunction', name: string, visibility?: MoveVisibility | null, isEntry?: boolean | null, parameters?: Array<{ __typename?: 'OpenMoveType', signature: any }> | null, typeParameters?: Array<{ __typename?: 'MoveFunctionTypeParameter', constraints: Array<MoveAbility> }> | null, return?: Array<{ __typename?: 'OpenMoveType', repr: string, signature: any }> | null }> } | null } | null } | null } | null };

export type Rpc_Move_Module_FieldsFragment = { __typename?: 'MoveModule', name: string, fileFormatVersion: number, friends: { __typename?: 'MoveModuleConnection', nodes: Array<{ __typename?: 'MoveModule', name: string, package: { __typename?: 'MovePackage', asObject: { __typename?: 'Object', address: any } } }> }, structs?: { __typename?: 'MoveStructConnection', nodes: Array<{ __typename?: 'MoveStruct', name: string, abilities?: Array<MoveAbility> | null, fields?: Array<{ __typename?: 'MoveField', name: string, type?: { __typename?: 'OpenMoveType', signature: any } | null }> | null, typeParameters?: Array<{ __typename?: 'MoveStructTypeParameter', isPhantom: boolean, constraints: Array<MoveAbility> }> | null }> } | null, functions?: { __typename?: 'MoveFunctionConnection', nodes: Array<{ __typename?: 'MoveFunction', name: string, visibility?: MoveVisibility | null, isEntry?: boolean | null, parameters?: Array<{ __typename?: 'OpenMoveType', signature: any }> | null, typeParameters?: Array<{ __typename?: 'MoveFunctionTypeParameter', constraints: Array<MoveAbility> }> | null, return?: Array<{ __typename?: 'OpenMoveType', repr: string, signature: any }> | null }> } | null };

export type GetNormalizedMoveModulesByPackageQueryVariables = Exact<{
  packageId: Scalars['SuiAddress']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNormalizedMoveModulesByPackageQuery = { __typename?: 'Query', object?: { __typename?: 'Object', asMovePackage?: { __typename?: 'MovePackage', asObject: { __typename?: 'Object', address: any }, modules?: { __typename?: 'MoveModuleConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'MoveModule', name: string, fileFormatVersion: number, friends: { __typename?: 'MoveModuleConnection', nodes: Array<{ __typename?: 'MoveModule', name: string, package: { __typename?: 'MovePackage', asObject: { __typename?: 'Object', address: any } } }> }, structs?: { __typename?: 'MoveStructConnection', nodes: Array<{ __typename?: 'MoveStruct', name: string, abilities?: Array<MoveAbility> | null, fields?: Array<{ __typename?: 'MoveField', name: string, type?: { __typename?: 'OpenMoveType', signature: any } | null }> | null, typeParameters?: Array<{ __typename?: 'MoveStructTypeParameter', isPhantom: boolean, constraints: Array<MoveAbility> }> | null }> } | null, functions?: { __typename?: 'MoveFunctionConnection', nodes: Array<{ __typename?: 'MoveFunction', name: string, visibility?: MoveVisibility | null, isEntry?: boolean | null, parameters?: Array<{ __typename?: 'OpenMoveType', signature: any }> | null, typeParameters?: Array<{ __typename?: 'MoveFunctionTypeParameter', constraints: Array<MoveAbility> }> | null, return?: Array<{ __typename?: 'OpenMoveType', repr: string, signature: any }> | null }> } | null }> } | null } | null } | null };

export type GetNormalizedMoveStructQueryVariables = Exact<{
  packageId: Scalars['SuiAddress']['input'];
  module: Scalars['String']['input'];
  struct: Scalars['String']['input'];
}>;


export type GetNormalizedMoveStructQuery = { __typename?: 'Query', object?: { __typename?: 'Object', asMovePackage?: { __typename?: 'MovePackage', asObject: { __typename?: 'Object', address: any }, module?: { __typename?: 'MoveModule', fileFormatVersion: number, struct?: { __typename?: 'MoveStruct', name: string, abilities?: Array<MoveAbility> | null, fields?: Array<{ __typename?: 'MoveField', name: string, type?: { __typename?: 'OpenMoveType', signature: any } | null }> | null, typeParameters?: Array<{ __typename?: 'MoveStructTypeParameter', isPhantom: boolean, constraints: Array<MoveAbility> }> | null } | null } | null } | null } | null };

export type Rpc_Move_Struct_FieldsFragment = { __typename?: 'MoveStruct', name: string, abilities?: Array<MoveAbility> | null, fields?: Array<{ __typename?: 'MoveField', name: string, type?: { __typename?: 'OpenMoveType', signature: any } | null }> | null, typeParameters?: Array<{ __typename?: 'MoveStructTypeParameter', isPhantom: boolean, constraints: Array<MoveAbility> }> | null };

export type GetProtocolConfigQueryVariables = Exact<{
  protocolVersion?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetProtocolConfigQuery = { __typename?: 'Query', protocolConfig: { __typename?: 'ProtocolConfigs', protocolVersion: number, configs: Array<{ __typename?: 'ProtocolConfigAttr', key: string, value?: string | null }>, featureFlags: Array<{ __typename?: 'ProtocolConfigFeatureFlag', key: string, value: boolean }> } };

export type GetReferenceGasPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReferenceGasPriceQuery = { __typename?: 'Query', epoch?: { __typename?: 'Epoch', referenceGasPrice?: any | null } | null };

export type GetTotalSupplyQueryVariables = Exact<{
  coinType: Scalars['String']['input'];
}>;


export type GetTotalSupplyQuery = { __typename?: 'Query', coinMetadata?: { __typename?: 'CoinMetadata', supply?: any | null, decimals?: number | null } | null };

export type GetTotalTransactionBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalTransactionBlocksQuery = { __typename?: 'Query', checkpoint?: { __typename?: 'Checkpoint', networkTotalTransactions?: number | null } | null };

export type ResolveNameServiceAddressQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type ResolveNameServiceAddressQuery = { __typename?: 'Query', resolveNameServiceAddress?: { __typename?: 'Address', address: any } | null };

export type ResolveNameServiceNamesQueryVariables = Exact<{
  address: Scalars['SuiAddress']['input'];
}>;


export type ResolveNameServiceNamesQuery = { __typename?: 'Query', address?: { __typename?: 'Address', defaultNameServiceName?: string | null } | null };

export type GetOwnedObjectsQueryVariables = Exact<{
  owner: Scalars['SuiAddress']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  showBcs?: InputMaybe<Scalars['Boolean']['input']>;
  showContent?: InputMaybe<Scalars['Boolean']['input']>;
  showDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  showType?: InputMaybe<Scalars['Boolean']['input']>;
  showOwner?: InputMaybe<Scalars['Boolean']['input']>;
  showPreviousTransaction?: InputMaybe<Scalars['Boolean']['input']>;
  showStorageRebate?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ObjectFilter>;
}>;


export type GetOwnedObjectsQuery = { __typename?: 'Query', address?: { __typename?: 'Address', objectConnection?: { __typename?: 'ObjectConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'Object', bcs?: any | null, version: number, storageRebate?: any | null, digest: string, objectId: any, asMoveObject?: { __typename?: 'MoveObject', hasPublicTransfer: boolean, contents?: { __typename?: 'MoveValue', data: any, bcs: any, type: { __typename?: 'MoveType', repr: string, layout: any, signature: any } } | null } | null, owner?: { __typename?: 'Owner', address: any, asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, previousTransactionBlock?: { __typename?: 'TransactionBlock', digest: string } | null, display?: Array<{ __typename?: 'DisplayEntry', key: string, value?: string | null, error?: string | null }> | null }> } | null } | null };

export type GetObjectQueryVariables = Exact<{
  id: Scalars['SuiAddress']['input'];
  showBcs?: InputMaybe<Scalars['Boolean']['input']>;
  showOwner?: InputMaybe<Scalars['Boolean']['input']>;
  showPreviousTransaction?: InputMaybe<Scalars['Boolean']['input']>;
  showContent?: InputMaybe<Scalars['Boolean']['input']>;
  showDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  showType?: InputMaybe<Scalars['Boolean']['input']>;
  showStorageRebate?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetObjectQuery = { __typename?: 'Query', object?: { __typename?: 'Object', bcs?: any | null, version: number, storageRebate?: any | null, digest: string, objectId: any, asMoveObject?: { __typename?: 'MoveObject', hasPublicTransfer: boolean, contents?: { __typename?: 'MoveValue', data: any, bcs: any, type: { __typename?: 'MoveType', repr: string, layout: any, signature: any } } | null } | null, owner?: { __typename?: 'Owner', address: any, asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, previousTransactionBlock?: { __typename?: 'TransactionBlock', digest: string } | null, display?: Array<{ __typename?: 'DisplayEntry', key: string, value?: string | null, error?: string | null }> | null } | null };

export type TryGetPastObjectQueryVariables = Exact<{
  id: Scalars['SuiAddress']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
  showBcs?: InputMaybe<Scalars['Boolean']['input']>;
  showOwner?: InputMaybe<Scalars['Boolean']['input']>;
  showPreviousTransaction?: InputMaybe<Scalars['Boolean']['input']>;
  showContent?: InputMaybe<Scalars['Boolean']['input']>;
  showDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  showType?: InputMaybe<Scalars['Boolean']['input']>;
  showStorageRebate?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type TryGetPastObjectQuery = { __typename?: 'Query', object?: { __typename?: 'Object', bcs?: any | null, version: number, storageRebate?: any | null, digest: string, objectId: any, asMoveObject?: { __typename?: 'MoveObject', hasPublicTransfer: boolean, contents?: { __typename?: 'MoveValue', data: any, bcs: any, type: { __typename?: 'MoveType', repr: string, layout: any, signature: any } } | null } | null, owner?: { __typename?: 'Owner', address: any, asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, previousTransactionBlock?: { __typename?: 'TransactionBlock', digest: string } | null, display?: Array<{ __typename?: 'DisplayEntry', key: string, value?: string | null, error?: string | null }> | null } | null };

export type MultiGetObjectsQueryVariables = Exact<{
  ids: Array<Scalars['SuiAddress']['input']> | Scalars['SuiAddress']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  showBcs?: InputMaybe<Scalars['Boolean']['input']>;
  showContent?: InputMaybe<Scalars['Boolean']['input']>;
  showDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  showType?: InputMaybe<Scalars['Boolean']['input']>;
  showOwner?: InputMaybe<Scalars['Boolean']['input']>;
  showPreviousTransaction?: InputMaybe<Scalars['Boolean']['input']>;
  showStorageRebate?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type MultiGetObjectsQuery = { __typename?: 'Query', objectConnection?: { __typename?: 'ObjectConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'Object', bcs?: any | null, version: number, storageRebate?: any | null, digest: string, objectId: any, asMoveObject?: { __typename?: 'MoveObject', hasPublicTransfer: boolean, contents?: { __typename?: 'MoveValue', data: any, bcs: any, type: { __typename?: 'MoveType', repr: string, layout: any, signature: any } } | null } | null, owner?: { __typename?: 'Owner', address: any, asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, previousTransactionBlock?: { __typename?: 'TransactionBlock', digest: string } | null, display?: Array<{ __typename?: 'DisplayEntry', key: string, value?: string | null, error?: string | null }> | null }> } | null };

export type Rpc_Object_FieldsFragment = { __typename?: 'Object', bcs?: any | null, version: number, storageRebate?: any | null, digest: string, objectId: any, asMoveObject?: { __typename?: 'MoveObject', hasPublicTransfer: boolean, contents?: { __typename?: 'MoveValue', data: any, bcs: any, type: { __typename?: 'MoveType', repr: string, layout: any, signature: any } } | null } | null, owner?: { __typename?: 'Owner', address: any, asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, previousTransactionBlock?: { __typename?: 'TransactionBlock', digest: string } | null, display?: Array<{ __typename?: 'DisplayEntry', key: string, value?: string | null, error?: string | null }> | null };

export type QueryEventsQueryVariables = Exact<{
  filter: EventFilter;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QueryEventsQuery = { __typename?: 'Query', eventConnection?: { __typename?: 'EventConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor?: string | null, startCursor?: string | null }, nodes: Array<{ __typename?: 'Event', json: any, bcs: any, timestamp?: any | null, sendingModule?: { __typename?: 'MoveModule', name: string, package: { __typename?: 'MovePackage', asObject: { __typename?: 'Object', address: any } } } | null, senders?: Array<{ __typename?: 'Address', address: any }> | null, type: { __typename?: 'MoveType', repr: string } }> } | null };

export type GetStakesQueryVariables = Exact<{
  owner: Scalars['SuiAddress']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetStakesQuery = { __typename?: 'Query', address?: { __typename?: 'Address', stakedSuiConnection?: { __typename?: 'StakedSuiConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'StakedSui', principal?: any | null, estimatedReward?: any | null, activatedEpoch?: { __typename?: 'Epoch', epochId: number, referenceGasPrice?: any | null } | null, requestedEpoch?: { __typename?: 'Epoch', epochId: number } | null, asMoveObject: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any } | null, asObject: { __typename?: 'Object', address: any } } }> } | null } | null };

export type GetStakesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['SuiAddress']['input']> | Scalars['SuiAddress']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetStakesByIdsQuery = { __typename?: 'Query', objectConnection?: { __typename?: 'ObjectConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'Object', asMoveObject?: { __typename?: 'MoveObject', asStakedSui?: { __typename?: 'StakedSui', principal?: any | null, estimatedReward?: any | null, activatedEpoch?: { __typename?: 'Epoch', epochId: number, referenceGasPrice?: any | null } | null, requestedEpoch?: { __typename?: 'Epoch', epochId: number } | null, asMoveObject: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any } | null, asObject: { __typename?: 'Object', address: any } } } | null } | null }> } | null };

export type Rpc_Stake_FieldsFragment = { __typename?: 'StakedSui', principal?: any | null, estimatedReward?: any | null, activatedEpoch?: { __typename?: 'Epoch', epochId: number, referenceGasPrice?: any | null } | null, requestedEpoch?: { __typename?: 'Epoch', epochId: number } | null, asMoveObject: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', json: any } | null, asObject: { __typename?: 'Object', address: any } } };

export type QueryTransactionBlocksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  showBalanceChanges?: InputMaybe<Scalars['Boolean']['input']>;
  showEffects?: InputMaybe<Scalars['Boolean']['input']>;
  showInput?: InputMaybe<Scalars['Boolean']['input']>;
  showObjectChanges?: InputMaybe<Scalars['Boolean']['input']>;
  showRawInput?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TransactionBlockFilter>;
}>;


export type QueryTransactionBlocksQuery = { __typename?: 'Query', transactionBlockConnection?: { __typename?: 'TransactionBlockConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, nodes: Array<{ __typename?: 'TransactionBlock', digest: string, signatures?: Array<any> | null, rawTransaction?: any | null, sender?: { __typename?: 'Address', address: any } | null, effects?: { __typename?: 'TransactionBlockEffects', timestamp?: any | null, status?: ExecutionStatus | null, checkpoint?: { __typename?: 'Checkpoint', sequenceNumber: number } | null, balanceChanges?: Array<{ __typename?: 'BalanceChange', amount?: any | null, coinType?: { __typename?: 'MoveType', repr: string } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null }> | null, dependencies?: Array<{ __typename?: 'TransactionBlock', digest: string }> | null, gasEffects?: { __typename?: 'GasEffects', gasObject?: { __typename?: 'Object', digest: string, version: number, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, gasSummary?: { __typename?: 'GasCostSummary', storageCost?: any | null, storageRebate?: any | null, nonRefundableStorageFee?: any | null, computationCost?: any | null } | null } | null, executedEpoch?: { __typename?: 'Epoch', epochId: number } | null, objectChanges?: Array<{ __typename?: 'ObjectChange', idCreated?: boolean | null, idDeleted?: boolean | null, inputState?: { __typename?: 'Object', version: number, digest: string, address: any, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, outputState?: { __typename?: 'Object', version: number, digest: string, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null } | null }> | null } | null }> } | null };

export type GetTransactionBlockQueryVariables = Exact<{
  digest: Scalars['String']['input'];
  showBalanceChanges?: InputMaybe<Scalars['Boolean']['input']>;
  showEffects?: InputMaybe<Scalars['Boolean']['input']>;
  showInput?: InputMaybe<Scalars['Boolean']['input']>;
  showObjectChanges?: InputMaybe<Scalars['Boolean']['input']>;
  showRawInput?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetTransactionBlockQuery = { __typename?: 'Query', transactionBlock?: { __typename?: 'TransactionBlock', digest: string, signatures?: Array<any> | null, rawTransaction?: any | null, sender?: { __typename?: 'Address', address: any } | null, effects?: { __typename?: 'TransactionBlockEffects', timestamp?: any | null, status?: ExecutionStatus | null, checkpoint?: { __typename?: 'Checkpoint', sequenceNumber: number } | null, balanceChanges?: Array<{ __typename?: 'BalanceChange', amount?: any | null, coinType?: { __typename?: 'MoveType', repr: string } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null }> | null, dependencies?: Array<{ __typename?: 'TransactionBlock', digest: string }> | null, gasEffects?: { __typename?: 'GasEffects', gasObject?: { __typename?: 'Object', digest: string, version: number, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, gasSummary?: { __typename?: 'GasCostSummary', storageCost?: any | null, storageRebate?: any | null, nonRefundableStorageFee?: any | null, computationCost?: any | null } | null } | null, executedEpoch?: { __typename?: 'Epoch', epochId: number } | null, objectChanges?: Array<{ __typename?: 'ObjectChange', idCreated?: boolean | null, idDeleted?: boolean | null, inputState?: { __typename?: 'Object', version: number, digest: string, address: any, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, outputState?: { __typename?: 'Object', version: number, digest: string, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null } | null }> | null } | null } | null };

export type MultiGetTransactionBlocksQueryVariables = Exact<{
  digests: Array<Scalars['String']['input']> | Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  showBalanceChanges?: InputMaybe<Scalars['Boolean']['input']>;
  showEffects?: InputMaybe<Scalars['Boolean']['input']>;
  showInput?: InputMaybe<Scalars['Boolean']['input']>;
  showObjectChanges?: InputMaybe<Scalars['Boolean']['input']>;
  showRawInput?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type MultiGetTransactionBlocksQuery = { __typename?: 'Query', transactionBlockConnection?: { __typename?: 'TransactionBlockConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, nodes: Array<{ __typename?: 'TransactionBlock', digest: string, signatures?: Array<any> | null, rawTransaction?: any | null, sender?: { __typename?: 'Address', address: any } | null, effects?: { __typename?: 'TransactionBlockEffects', timestamp?: any | null, status?: ExecutionStatus | null, checkpoint?: { __typename?: 'Checkpoint', sequenceNumber: number } | null, balanceChanges?: Array<{ __typename?: 'BalanceChange', amount?: any | null, coinType?: { __typename?: 'MoveType', repr: string } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null }> | null, dependencies?: Array<{ __typename?: 'TransactionBlock', digest: string }> | null, gasEffects?: { __typename?: 'GasEffects', gasObject?: { __typename?: 'Object', digest: string, version: number, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, gasSummary?: { __typename?: 'GasCostSummary', storageCost?: any | null, storageRebate?: any | null, nonRefundableStorageFee?: any | null, computationCost?: any | null } | null } | null, executedEpoch?: { __typename?: 'Epoch', epochId: number } | null, objectChanges?: Array<{ __typename?: 'ObjectChange', idCreated?: boolean | null, idDeleted?: boolean | null, inputState?: { __typename?: 'Object', version: number, digest: string, address: any, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, outputState?: { __typename?: 'Object', version: number, digest: string, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null } | null }> | null } | null }> } | null };

export type Rpc_Transaction_FieldsFragment = { __typename?: 'TransactionBlock', digest: string, signatures?: Array<any> | null, rawTransaction?: any | null, sender?: { __typename?: 'Address', address: any } | null, effects?: { __typename?: 'TransactionBlockEffects', timestamp?: any | null, status?: ExecutionStatus | null, checkpoint?: { __typename?: 'Checkpoint', sequenceNumber: number } | null, balanceChanges?: Array<{ __typename?: 'BalanceChange', amount?: any | null, coinType?: { __typename?: 'MoveType', repr: string } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null }> | null, dependencies?: Array<{ __typename?: 'TransactionBlock', digest: string }> | null, gasEffects?: { __typename?: 'GasEffects', gasObject?: { __typename?: 'Object', digest: string, version: number, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, gasSummary?: { __typename?: 'GasCostSummary', storageCost?: any | null, storageRebate?: any | null, nonRefundableStorageFee?: any | null, computationCost?: any | null } | null } | null, executedEpoch?: { __typename?: 'Epoch', epochId: number } | null, objectChanges?: Array<{ __typename?: 'ObjectChange', idCreated?: boolean | null, idDeleted?: boolean | null, inputState?: { __typename?: 'Object', version: number, digest: string, address: any, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null } | null, outputState?: { __typename?: 'Object', version: number, digest: string, address: any, owner?: { __typename?: 'Owner', asAddress?: { __typename?: 'Address', address: any } | null, asObject?: { __typename?: 'Object', address: any } | null } | null, asMoveObject?: { __typename?: 'MoveObject', contents?: { __typename?: 'MoveValue', type: { __typename?: 'MoveType', repr: string } } | null } | null } | null }> | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const Rpc_Checkpoint_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_Checkpoint_Fields on Checkpoint {
  digest
  epoch {
    epochId
  }
  rollingGasSummary {
    computationCost
    storageCost
    storageRebate
    nonRefundableStorageFee
  }
  networkTotalTransactions
  previousCheckpointDigest
  sequenceNumber
  timestamp
  transactionBlockConnection {
    nodes {
      digest
    }
  }
  validatorSignatures
}
    `, {"fragmentName":"RPC_Checkpoint_Fields"}) as unknown as TypedDocumentString<Rpc_Checkpoint_FieldsFragment, unknown>;
export const Rpc_Credential_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_CREDENTIAL_FIELDS on ValidatorCredentials {
  netAddress
  networkPubKey
  p2PAddress
  primaryAddress
  workerPubKey
  workerAddress
  proofOfPossession
  protocolPubKey
}
    `, {"fragmentName":"RPC_CREDENTIAL_FIELDS"}) as unknown as TypedDocumentString<Rpc_Credential_FieldsFragment, unknown>;
export const Rpc_Validator_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_VALIDATOR_FIELDS on Validator {
  atRisk
  commissionRate
  exchangeRatesSize
  exchangeRates {
    contents {
      json
    }
    asObject {
      address
    }
  }
  description
  gasPrice
  imageUrl
  name
  credentials {
    ...RPC_CREDENTIAL_FIELDS
  }
  nextEpochCommissionRate
  nextEpochGasPrice
  nextEpochCredentials {
    ...RPC_CREDENTIAL_FIELDS
  }
  nextEpochStake
  nextEpochCommissionRate
  operationCap {
    asObject {
      address
    }
  }
  pendingPoolTokenWithdraw
  pendingStake
  pendingTotalSuiWithdraw
  poolTokenBalance
  projectUrl
  rewardsPool
  stakingPool {
    asObject {
      address
    }
  }
  stakingPoolActivationEpoch
  stakingPoolSuiBalance
  address {
    address
  }
  votingPower
  reportRecords {
    address
  }
}
    fragment RPC_CREDENTIAL_FIELDS on ValidatorCredentials {
  netAddress
  networkPubKey
  p2PAddress
  primaryAddress
  workerPubKey
  workerAddress
  proofOfPossession
  protocolPubKey
}`, {"fragmentName":"RPC_VALIDATOR_FIELDS"}) as unknown as TypedDocumentString<Rpc_Validator_FieldsFragment, unknown>;
export const Rpc_Move_Struct_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_MOVE_STRUCT_FIELDS on MoveStruct {
  name
  abilities
  fields {
    name
    type {
      signature
    }
  }
  typeParameters {
    isPhantom
    constraints
  }
}
    `, {"fragmentName":"RPC_MOVE_STRUCT_FIELDS"}) as unknown as TypedDocumentString<Rpc_Move_Struct_FieldsFragment, unknown>;
export const Rpc_Move_Function_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_MOVE_FUNCTION_FIELDS on MoveFunction {
  name
  visibility
  isEntry
  parameters {
    signature
  }
  typeParameters {
    constraints
  }
  return {
    repr
    signature
  }
}
    `, {"fragmentName":"RPC_MOVE_FUNCTION_FIELDS"}) as unknown as TypedDocumentString<Rpc_Move_Function_FieldsFragment, unknown>;
export const Rpc_Move_Module_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_MOVE_MODULE_FIELDS on MoveModule {
  name
  friends(first: 50) {
    nodes {
      name
      package {
        asObject {
          address
        }
      }
    }
  }
  structs(first: 50) {
    nodes {
      ...RPC_MOVE_STRUCT_FIELDS
    }
  }
  fileFormatVersion
  functions(first: 50) {
    nodes {
      ...RPC_MOVE_FUNCTION_FIELDS
    }
  }
}
    fragment RPC_MOVE_FUNCTION_FIELDS on MoveFunction {
  name
  visibility
  isEntry
  parameters {
    signature
  }
  typeParameters {
    constraints
  }
  return {
    repr
    signature
  }
}
fragment RPC_MOVE_STRUCT_FIELDS on MoveStruct {
  name
  abilities
  fields {
    name
    type {
      signature
    }
  }
  typeParameters {
    isPhantom
    constraints
  }
}`, {"fragmentName":"RPC_MOVE_MODULE_FIELDS"}) as unknown as TypedDocumentString<Rpc_Move_Module_FieldsFragment, unknown>;
export const Rpc_Object_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_OBJECT_FIELDS on Object {
  objectId: address
  bcs @include(if: $showBcs)
  version
  asMoveObject @include(if: $showType) {
    contents {
      type {
        repr
      }
    }
  }
  asMoveObject @include(if: $showContent) {
    hasPublicTransfer
    contents {
      data
      type {
        repr
        layout
        signature
      }
    }
  }
  asMoveObject @include(if: $showBcs) {
    hasPublicTransfer
    contents {
      bcs
      type {
        repr
      }
    }
  }
  owner @include(if: $showOwner) {
    address
    asAddress {
      address
    }
    asObject {
      address
    }
  }
  previousTransactionBlock @include(if: $showPreviousTransaction) {
    digest
  }
  storageRebate @include(if: $showStorageRebate)
  digest
  version
  display @include(if: $showDisplay) {
    key
    value
    error
  }
}
    `, {"fragmentName":"RPC_OBJECT_FIELDS"}) as unknown as TypedDocumentString<Rpc_Object_FieldsFragment, unknown>;
export const Rpc_Stake_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_STAKE_FIELDS on StakedSui {
  principal
  activatedEpoch {
    epochId
    referenceGasPrice
  }
  requestedEpoch {
    epochId
  }
  asMoveObject {
    contents {
      json
    }
    asObject {
      address
    }
  }
  estimatedReward
}
    `, {"fragmentName":"RPC_STAKE_FIELDS"}) as unknown as TypedDocumentString<Rpc_Stake_FieldsFragment, unknown>;
export const Rpc_Transaction_FieldsFragmentDoc = new TypedDocumentString(`
    fragment RPC_TRANSACTION_FIELDS on TransactionBlock {
  digest
  rawTransaction: bcs @include(if: $showInput)
  rawTransaction: bcs @include(if: $showRawInput)
  sender {
    address
  }
  signatures
  effects {
    checkpoint {
      sequenceNumber
    }
    timestamp
    balanceChanges @include(if: $showBalanceChanges) {
      coinType {
        repr
      }
      owner {
        asAddress {
          address
        }
        asObject {
          address
        }
      }
      amount
    }
    dependencies @include(if: $showEffects) {
      digest
    }
    status @include(if: $showEffects)
    gasEffects @include(if: $showEffects) {
      gasObject {
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
        digest
        version
        address
      }
      gasSummary {
        storageCost
        storageRebate
        nonRefundableStorageFee
        computationCost
      }
    }
    executedEpoch: epoch @include(if: $showEffects) {
      epochId
    }
    objectChanges @include(if: $showEffects) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
      }
      outputState {
        version
        digest
        address
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
    objectChanges @include(if: $showObjectChanges) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
      outputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
  }
}
    `, {"fragmentName":"RPC_TRANSACTION_FIELDS"}) as unknown as TypedDocumentString<Rpc_Transaction_FieldsFragment, unknown>;
export const GetCheckpointDocument = new TypedDocumentString(`
    query getCheckpoint($id: CheckpointId) {
  checkpoint(id: $id) {
    ...RPC_Checkpoint_Fields
  }
}
    fragment RPC_Checkpoint_Fields on Checkpoint {
  digest
  epoch {
    epochId
  }
  rollingGasSummary {
    computationCost
    storageCost
    storageRebate
    nonRefundableStorageFee
  }
  networkTotalTransactions
  previousCheckpointDigest
  sequenceNumber
  timestamp
  transactionBlockConnection {
    nodes {
      digest
    }
  }
  validatorSignatures
}`) as unknown as TypedDocumentString<GetCheckpointQuery, GetCheckpointQueryVariables>;
export const GetCheckpointsDocument = new TypedDocumentString(`
    query getCheckpoints($first: Int, $before: String, $last: Int, $after: String) {
  checkpoints(first: $first, after: $after, last: $last, before: $before) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...RPC_Checkpoint_Fields
    }
  }
}
    fragment RPC_Checkpoint_Fields on Checkpoint {
  digest
  epoch {
    epochId
  }
  rollingGasSummary {
    computationCost
    storageCost
    storageRebate
    nonRefundableStorageFee
  }
  networkTotalTransactions
  previousCheckpointDigest
  sequenceNumber
  timestamp
  transactionBlockConnection {
    nodes {
      digest
    }
  }
  validatorSignatures
}`) as unknown as TypedDocumentString<GetCheckpointsQuery, GetCheckpointsQueryVariables>;
export const GetAllBalancesDocument = new TypedDocumentString(`
    query getAllBalances($owner: SuiAddress!, $limit: Int, $cursor: String) {
  address(address: $owner) {
    balanceConnection(first: $limit, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        coinType {
          repr
        }
        coinObjectCount
        totalBalance
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetAllBalancesQuery, GetAllBalancesQueryVariables>;
export const GetBalanceDocument = new TypedDocumentString(`
    query getBalance($owner: SuiAddress!, $type: String = "0x2::sui::SUI") {
  address(address: $owner) {
    balance(type: $type) {
      coinType {
        repr
      }
      coinObjectCount
      totalBalance
    }
  }
}
    `) as unknown as TypedDocumentString<GetBalanceQuery, GetBalanceQueryVariables>;
export const GetChainIdentifierDocument = new TypedDocumentString(`
    query getChainIdentifier {
  chainIdentifier
}
    `) as unknown as TypedDocumentString<GetChainIdentifierQuery, GetChainIdentifierQueryVariables>;
export const GetCoinMetadataDocument = new TypedDocumentString(`
    query getCoinMetadata($coinType: String!) {
  coinMetadata(coinType: $coinType) {
    decimals
    name
    symbol
    description
    iconUrl
    asMoveObject {
      asObject {
        address
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCoinMetadataQuery, GetCoinMetadataQueryVariables>;
export const GetCoinsDocument = new TypedDocumentString(`
    query getCoins($owner: SuiAddress!, $first: Int, $cursor: String, $type: String = "0x2::sui::SUI") {
  address(address: $owner) {
    address
    coinConnection(first: $first, after: $cursor, type: $type) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        balance
        asMoveObject {
          contents {
            type {
              repr
            }
          }
          asObject {
            coinObjectId: address
            version
            digest
            previousTransactionBlock {
              digest
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCoinsQuery, GetCoinsQueryVariables>;
export const GetCurrentEpochDocument = new TypedDocumentString(`
    query getCurrentEpoch {
  epoch {
    epochId
    validatorSet {
      activeValidators {
        ...RPC_VALIDATOR_FIELDS
      }
    }
    firstCheckpoint: checkpoints(first: 1) {
      nodes {
        sequenceNumber
      }
    }
    startTimestamp
    endTimestamp
    referenceGasPrice
  }
}
    fragment RPC_VALIDATOR_FIELDS on Validator {
  atRisk
  commissionRate
  exchangeRatesSize
  exchangeRates {
    contents {
      json
    }
    asObject {
      address
    }
  }
  description
  gasPrice
  imageUrl
  name
  credentials {
    ...RPC_CREDENTIAL_FIELDS
  }
  nextEpochCommissionRate
  nextEpochGasPrice
  nextEpochCredentials {
    ...RPC_CREDENTIAL_FIELDS
  }
  nextEpochStake
  nextEpochCommissionRate
  operationCap {
    asObject {
      address
    }
  }
  pendingPoolTokenWithdraw
  pendingStake
  pendingTotalSuiWithdraw
  poolTokenBalance
  projectUrl
  rewardsPool
  stakingPool {
    asObject {
      address
    }
  }
  stakingPoolActivationEpoch
  stakingPoolSuiBalance
  address {
    address
  }
  votingPower
  reportRecords {
    address
  }
}
fragment RPC_CREDENTIAL_FIELDS on ValidatorCredentials {
  netAddress
  networkPubKey
  p2PAddress
  primaryAddress
  workerPubKey
  workerAddress
  proofOfPossession
  protocolPubKey
}`) as unknown as TypedDocumentString<GetCurrentEpochQuery, GetCurrentEpochQueryVariables>;
export const GetDynamicFieldObjectDocument = new TypedDocumentString(`
    query getDynamicFieldObject($parentId: SuiAddress!, $name: DynamicFieldName!) {
  object(address: $parentId) {
    dynamicObjectField(name: $name) {
      name {
        type {
          repr
        }
      }
      value {
        __typename
        ... on MoveObject {
          contents {
            json
            type {
              repr
            }
          }
          asObject {
            address
            digest
            version
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetDynamicFieldObjectQuery, GetDynamicFieldObjectQueryVariables>;
export const GetDynamicFieldsDocument = new TypedDocumentString(`
    query getDynamicFields($parentId: SuiAddress!, $first: Int, $cursor: String) {
  object(address: $parentId) {
    dynamicFieldConnection(first: $first, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        name {
          bcs
          json
          type {
            layout
            repr
          }
        }
        value {
          __typename
          ... on MoveObject {
            contents {
              type {
                repr
              }
              json
            }
            asObject {
              storageRebate
              address
              digest
              version
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetDynamicFieldsQuery, GetDynamicFieldsQueryVariables>;
export const GetLatestCheckpointSequenceNumberDocument = new TypedDocumentString(`
    query getLatestCheckpointSequenceNumber {
  checkpoint {
    sequenceNumber
  }
}
    `) as unknown as TypedDocumentString<GetLatestCheckpointSequenceNumberQuery, GetLatestCheckpointSequenceNumberQueryVariables>;
export const GetLatestSuiSystemStateDocument = new TypedDocumentString(`
    query getLatestSuiSystemState {
  epoch {
    epochId
    startTimestamp
    endTimestamp
    referenceGasPrice
    safeMode {
      enabled
      gasSummary {
        computationCost
        nonRefundableStorageFee
        storageCost
        storageRebate
      }
    }
    systemStakeSubsidy {
      balance
      currentDistributionAmount
      decreaseRate
      distributionCounter
      periodLength
    }
    storageFund {
      nonRefundableBalance
      totalObjectStorageRebates
    }
    systemStateVersion
    systemParameters {
      minValidatorCount
      maxValidatorCount
      minValidatorJoiningStake
      durationMs
      validatorLowStakeThreshold
      validatorLowStakeGracePeriod
      validatorVeryLowStakeThreshold
    }
    protocolConfigs {
      protocolVersion
    }
    validatorSet {
      activeValidators {
        ...RPC_VALIDATOR_FIELDS
      }
      inactivePoolsSize
      pendingActiveValidatorsSize
      validatorCandidatesSize
      pendingRemovals
      totalStake
    }
  }
}
    fragment RPC_VALIDATOR_FIELDS on Validator {
  atRisk
  commissionRate
  exchangeRatesSize
  exchangeRates {
    contents {
      json
    }
    asObject {
      address
    }
  }
  description
  gasPrice
  imageUrl
  name
  credentials {
    ...RPC_CREDENTIAL_FIELDS
  }
  nextEpochCommissionRate
  nextEpochGasPrice
  nextEpochCredentials {
    ...RPC_CREDENTIAL_FIELDS
  }
  nextEpochStake
  nextEpochCommissionRate
  operationCap {
    asObject {
      address
    }
  }
  pendingPoolTokenWithdraw
  pendingStake
  pendingTotalSuiWithdraw
  poolTokenBalance
  projectUrl
  rewardsPool
  stakingPool {
    asObject {
      address
    }
  }
  stakingPoolActivationEpoch
  stakingPoolSuiBalance
  address {
    address
  }
  votingPower
  reportRecords {
    address
  }
}
fragment RPC_CREDENTIAL_FIELDS on ValidatorCredentials {
  netAddress
  networkPubKey
  p2PAddress
  primaryAddress
  workerPubKey
  workerAddress
  proofOfPossession
  protocolPubKey
}`) as unknown as TypedDocumentString<GetLatestSuiSystemStateQuery, GetLatestSuiSystemStateQueryVariables>;
export const GetMoveFunctionArgTypesDocument = new TypedDocumentString(`
    query getMoveFunctionArgTypes($packageId: SuiAddress!, $module: String!, $function: String!) {
  object(address: $packageId) {
    asMovePackage {
      module(name: $module) {
        fileFormatVersion
        function(name: $function) {
          parameters {
            signature
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetMoveFunctionArgTypesQuery, GetMoveFunctionArgTypesQueryVariables>;
export const GetNormalizedMoveFunctionDocument = new TypedDocumentString(`
    query getNormalizedMoveFunction($packageId: SuiAddress!, $module: String!, $function: String!) {
  object(address: $packageId) {
    address
    asMovePackage {
      module(name: $module) {
        fileFormatVersion
        function(name: $function) {
          ...RPC_MOVE_FUNCTION_FIELDS
        }
      }
    }
  }
}
    fragment RPC_MOVE_FUNCTION_FIELDS on MoveFunction {
  name
  visibility
  isEntry
  parameters {
    signature
  }
  typeParameters {
    constraints
  }
  return {
    repr
    signature
  }
}`) as unknown as TypedDocumentString<GetNormalizedMoveFunctionQuery, GetNormalizedMoveFunctionQueryVariables>;
export const GetNormalizedMoveModuleDocument = new TypedDocumentString(`
    query getNormalizedMoveModule($packageId: SuiAddress!, $module: String!) {
  object(address: $packageId) {
    asMovePackage {
      module(name: $module) {
        ...RPC_MOVE_MODULE_FIELDS
      }
    }
  }
}
    fragment RPC_MOVE_FUNCTION_FIELDS on MoveFunction {
  name
  visibility
  isEntry
  parameters {
    signature
  }
  typeParameters {
    constraints
  }
  return {
    repr
    signature
  }
}
fragment RPC_MOVE_MODULE_FIELDS on MoveModule {
  name
  friends(first: 50) {
    nodes {
      name
      package {
        asObject {
          address
        }
      }
    }
  }
  structs(first: 50) {
    nodes {
      ...RPC_MOVE_STRUCT_FIELDS
    }
  }
  fileFormatVersion
  functions(first: 50) {
    nodes {
      ...RPC_MOVE_FUNCTION_FIELDS
    }
  }
}
fragment RPC_MOVE_STRUCT_FIELDS on MoveStruct {
  name
  abilities
  fields {
    name
    type {
      signature
    }
  }
  typeParameters {
    isPhantom
    constraints
  }
}`) as unknown as TypedDocumentString<GetNormalizedMoveModuleQuery, GetNormalizedMoveModuleQueryVariables>;
export const GetNormalizedMoveModulesByPackageDocument = new TypedDocumentString(`
    query getNormalizedMoveModulesByPackage($packageId: SuiAddress!, $limit: Int = 50, $cursor: String) {
  object(address: $packageId) {
    asMovePackage {
      asObject {
        address
      }
      modules(first: $limit, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          ...RPC_MOVE_MODULE_FIELDS
        }
      }
    }
  }
}
    fragment RPC_MOVE_FUNCTION_FIELDS on MoveFunction {
  name
  visibility
  isEntry
  parameters {
    signature
  }
  typeParameters {
    constraints
  }
  return {
    repr
    signature
  }
}
fragment RPC_MOVE_MODULE_FIELDS on MoveModule {
  name
  friends(first: 50) {
    nodes {
      name
      package {
        asObject {
          address
        }
      }
    }
  }
  structs(first: 50) {
    nodes {
      ...RPC_MOVE_STRUCT_FIELDS
    }
  }
  fileFormatVersion
  functions(first: 50) {
    nodes {
      ...RPC_MOVE_FUNCTION_FIELDS
    }
  }
}
fragment RPC_MOVE_STRUCT_FIELDS on MoveStruct {
  name
  abilities
  fields {
    name
    type {
      signature
    }
  }
  typeParameters {
    isPhantom
    constraints
  }
}`) as unknown as TypedDocumentString<GetNormalizedMoveModulesByPackageQuery, GetNormalizedMoveModulesByPackageQueryVariables>;
export const GetNormalizedMoveStructDocument = new TypedDocumentString(`
    query getNormalizedMoveStruct($packageId: SuiAddress!, $module: String!, $struct: String!) {
  object(address: $packageId) {
    asMovePackage {
      asObject {
        address
      }
      module(name: $module) {
        fileFormatVersion
        struct(name: $struct) {
          ...RPC_MOVE_STRUCT_FIELDS
        }
      }
    }
  }
}
    fragment RPC_MOVE_STRUCT_FIELDS on MoveStruct {
  name
  abilities
  fields {
    name
    type {
      signature
    }
  }
  typeParameters {
    isPhantom
    constraints
  }
}`) as unknown as TypedDocumentString<GetNormalizedMoveStructQuery, GetNormalizedMoveStructQueryVariables>;
export const GetProtocolConfigDocument = new TypedDocumentString(`
    query getProtocolConfig($protocolVersion: Int) {
  protocolConfig(protocolVersion: $protocolVersion) {
    protocolVersion
    configs {
      key
      value
    }
    featureFlags {
      key
      value
    }
  }
}
    `) as unknown as TypedDocumentString<GetProtocolConfigQuery, GetProtocolConfigQueryVariables>;
export const GetReferenceGasPriceDocument = new TypedDocumentString(`
    query getReferenceGasPrice {
  epoch {
    referenceGasPrice
  }
}
    `) as unknown as TypedDocumentString<GetReferenceGasPriceQuery, GetReferenceGasPriceQueryVariables>;
export const GetTotalSupplyDocument = new TypedDocumentString(`
    query getTotalSupply($coinType: String!) {
  coinMetadata(coinType: $coinType) {
    supply
    decimals
  }
}
    `) as unknown as TypedDocumentString<GetTotalSupplyQuery, GetTotalSupplyQueryVariables>;
export const GetTotalTransactionBlocksDocument = new TypedDocumentString(`
    query getTotalTransactionBlocks {
  checkpoint {
    networkTotalTransactions
  }
}
    `) as unknown as TypedDocumentString<GetTotalTransactionBlocksQuery, GetTotalTransactionBlocksQueryVariables>;
export const ResolveNameServiceAddressDocument = new TypedDocumentString(`
    query resolveNameServiceAddress($name: String!) {
  resolveNameServiceAddress(name: $name) {
    address
  }
}
    `) as unknown as TypedDocumentString<ResolveNameServiceAddressQuery, ResolveNameServiceAddressQueryVariables>;
export const ResolveNameServiceNamesDocument = new TypedDocumentString(`
    query resolveNameServiceNames($address: SuiAddress!) {
  address(address: $address) {
    defaultNameServiceName
  }
}
    `) as unknown as TypedDocumentString<ResolveNameServiceNamesQuery, ResolveNameServiceNamesQueryVariables>;
export const GetOwnedObjectsDocument = new TypedDocumentString(`
    query getOwnedObjects($owner: SuiAddress!, $limit: Int, $cursor: String, $showBcs: Boolean = false, $showContent: Boolean = false, $showDisplay: Boolean = false, $showType: Boolean = false, $showOwner: Boolean = false, $showPreviousTransaction: Boolean = false, $showStorageRebate: Boolean = false, $filter: ObjectFilter) {
  address(address: $owner) {
    objectConnection(first: $limit, after: $cursor, filter: $filter) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...RPC_OBJECT_FIELDS
      }
    }
  }
}
    fragment RPC_OBJECT_FIELDS on Object {
  objectId: address
  bcs @include(if: $showBcs)
  version
  asMoveObject @include(if: $showType) {
    contents {
      type {
        repr
      }
    }
  }
  asMoveObject @include(if: $showContent) {
    hasPublicTransfer
    contents {
      data
      type {
        repr
        layout
        signature
      }
    }
  }
  asMoveObject @include(if: $showBcs) {
    hasPublicTransfer
    contents {
      bcs
      type {
        repr
      }
    }
  }
  owner @include(if: $showOwner) {
    address
    asAddress {
      address
    }
    asObject {
      address
    }
  }
  previousTransactionBlock @include(if: $showPreviousTransaction) {
    digest
  }
  storageRebate @include(if: $showStorageRebate)
  digest
  version
  display @include(if: $showDisplay) {
    key
    value
    error
  }
}`) as unknown as TypedDocumentString<GetOwnedObjectsQuery, GetOwnedObjectsQueryVariables>;
export const GetObjectDocument = new TypedDocumentString(`
    query getObject($id: SuiAddress!, $showBcs: Boolean = false, $showOwner: Boolean = false, $showPreviousTransaction: Boolean = false, $showContent: Boolean = false, $showDisplay: Boolean = false, $showType: Boolean = false, $showStorageRebate: Boolean = false) {
  object(address: $id) {
    ...RPC_OBJECT_FIELDS
  }
}
    fragment RPC_OBJECT_FIELDS on Object {
  objectId: address
  bcs @include(if: $showBcs)
  version
  asMoveObject @include(if: $showType) {
    contents {
      type {
        repr
      }
    }
  }
  asMoveObject @include(if: $showContent) {
    hasPublicTransfer
    contents {
      data
      type {
        repr
        layout
        signature
      }
    }
  }
  asMoveObject @include(if: $showBcs) {
    hasPublicTransfer
    contents {
      bcs
      type {
        repr
      }
    }
  }
  owner @include(if: $showOwner) {
    address
    asAddress {
      address
    }
    asObject {
      address
    }
  }
  previousTransactionBlock @include(if: $showPreviousTransaction) {
    digest
  }
  storageRebate @include(if: $showStorageRebate)
  digest
  version
  display @include(if: $showDisplay) {
    key
    value
    error
  }
}`) as unknown as TypedDocumentString<GetObjectQuery, GetObjectQueryVariables>;
export const TryGetPastObjectDocument = new TypedDocumentString(`
    query tryGetPastObject($id: SuiAddress!, $version: Int, $showBcs: Boolean = false, $showOwner: Boolean = false, $showPreviousTransaction: Boolean = false, $showContent: Boolean = false, $showDisplay: Boolean = false, $showType: Boolean = false, $showStorageRebate: Boolean = false) {
  object(address: $id, version: $version) {
    ...RPC_OBJECT_FIELDS
  }
}
    fragment RPC_OBJECT_FIELDS on Object {
  objectId: address
  bcs @include(if: $showBcs)
  version
  asMoveObject @include(if: $showType) {
    contents {
      type {
        repr
      }
    }
  }
  asMoveObject @include(if: $showContent) {
    hasPublicTransfer
    contents {
      data
      type {
        repr
        layout
        signature
      }
    }
  }
  asMoveObject @include(if: $showBcs) {
    hasPublicTransfer
    contents {
      bcs
      type {
        repr
      }
    }
  }
  owner @include(if: $showOwner) {
    address
    asAddress {
      address
    }
    asObject {
      address
    }
  }
  previousTransactionBlock @include(if: $showPreviousTransaction) {
    digest
  }
  storageRebate @include(if: $showStorageRebate)
  digest
  version
  display @include(if: $showDisplay) {
    key
    value
    error
  }
}`) as unknown as TypedDocumentString<TryGetPastObjectQuery, TryGetPastObjectQueryVariables>;
export const MultiGetObjectsDocument = new TypedDocumentString(`
    query multiGetObjects($ids: [SuiAddress!]!, $limit: Int, $cursor: String, $showBcs: Boolean = false, $showContent: Boolean = false, $showDisplay: Boolean = false, $showType: Boolean = false, $showOwner: Boolean = false, $showPreviousTransaction: Boolean = false, $showStorageRebate: Boolean = false) {
  objectConnection(first: $limit, after: $cursor, filter: {objectIds: $ids}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      ...RPC_OBJECT_FIELDS
    }
  }
}
    fragment RPC_OBJECT_FIELDS on Object {
  objectId: address
  bcs @include(if: $showBcs)
  version
  asMoveObject @include(if: $showType) {
    contents {
      type {
        repr
      }
    }
  }
  asMoveObject @include(if: $showContent) {
    hasPublicTransfer
    contents {
      data
      type {
        repr
        layout
        signature
      }
    }
  }
  asMoveObject @include(if: $showBcs) {
    hasPublicTransfer
    contents {
      bcs
      type {
        repr
      }
    }
  }
  owner @include(if: $showOwner) {
    address
    asAddress {
      address
    }
    asObject {
      address
    }
  }
  previousTransactionBlock @include(if: $showPreviousTransaction) {
    digest
  }
  storageRebate @include(if: $showStorageRebate)
  digest
  version
  display @include(if: $showDisplay) {
    key
    value
    error
  }
}`) as unknown as TypedDocumentString<MultiGetObjectsQuery, MultiGetObjectsQueryVariables>;
export const QueryEventsDocument = new TypedDocumentString(`
    query queryEvents($filter: EventFilter!, $before: String, $after: String, $first: Int, $last: Int) {
  eventConnection(
    filter: $filter
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    nodes {
      sendingModule {
        package {
          asObject {
            address
          }
        }
        name
      }
      senders {
        address
      }
      type {
        repr
      }
      json
      bcs
      timestamp
    }
  }
}
    `) as unknown as TypedDocumentString<QueryEventsQuery, QueryEventsQueryVariables>;
export const GetStakesDocument = new TypedDocumentString(`
    query getStakes($owner: SuiAddress!, $limit: Int, $cursor: String) {
  address(address: $owner) {
    stakedSuiConnection(first: $limit, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...RPC_STAKE_FIELDS
      }
    }
  }
}
    fragment RPC_STAKE_FIELDS on StakedSui {
  principal
  activatedEpoch {
    epochId
    referenceGasPrice
  }
  requestedEpoch {
    epochId
  }
  asMoveObject {
    contents {
      json
    }
    asObject {
      address
    }
  }
  estimatedReward
}`) as unknown as TypedDocumentString<GetStakesQuery, GetStakesQueryVariables>;
export const GetStakesByIdsDocument = new TypedDocumentString(`
    query getStakesByIds($ids: [SuiAddress!]!, $limit: Int, $cursor: String) {
  objectConnection(first: $limit, after: $cursor, filter: {objectIds: $ids}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      asMoveObject {
        asStakedSui {
          ...RPC_STAKE_FIELDS
        }
      }
    }
  }
}
    fragment RPC_STAKE_FIELDS on StakedSui {
  principal
  activatedEpoch {
    epochId
    referenceGasPrice
  }
  requestedEpoch {
    epochId
  }
  asMoveObject {
    contents {
      json
    }
    asObject {
      address
    }
  }
  estimatedReward
}`) as unknown as TypedDocumentString<GetStakesByIdsQuery, GetStakesByIdsQueryVariables>;
export const QueryTransactionBlocksDocument = new TypedDocumentString(`
    query queryTransactionBlocks($first: Int, $last: Int, $before: String, $after: String, $showBalanceChanges: Boolean = false, $showEffects: Boolean = false, $showInput: Boolean = false, $showObjectChanges: Boolean = false, $showRawInput: Boolean = false, $filter: TransactionBlockFilter) {
  transactionBlockConnection(
    first: $first
    after: $after
    last: $last
    before: $before
    filter: $filter
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    nodes {
      ...RPC_TRANSACTION_FIELDS
    }
  }
}
    fragment RPC_TRANSACTION_FIELDS on TransactionBlock {
  digest
  rawTransaction: bcs @include(if: $showInput)
  rawTransaction: bcs @include(if: $showRawInput)
  sender {
    address
  }
  signatures
  effects {
    checkpoint {
      sequenceNumber
    }
    timestamp
    balanceChanges @include(if: $showBalanceChanges) {
      coinType {
        repr
      }
      owner {
        asAddress {
          address
        }
        asObject {
          address
        }
      }
      amount
    }
    dependencies @include(if: $showEffects) {
      digest
    }
    status @include(if: $showEffects)
    gasEffects @include(if: $showEffects) {
      gasObject {
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
        digest
        version
        address
      }
      gasSummary {
        storageCost
        storageRebate
        nonRefundableStorageFee
        computationCost
      }
    }
    executedEpoch: epoch @include(if: $showEffects) {
      epochId
    }
    objectChanges @include(if: $showEffects) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
      }
      outputState {
        version
        digest
        address
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
    objectChanges @include(if: $showObjectChanges) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
      outputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<QueryTransactionBlocksQuery, QueryTransactionBlocksQueryVariables>;
export const GetTransactionBlockDocument = new TypedDocumentString(`
    query getTransactionBlock($digest: String!, $showBalanceChanges: Boolean = false, $showEffects: Boolean = false, $showInput: Boolean = false, $showObjectChanges: Boolean = false, $showRawInput: Boolean = false) {
  transactionBlock(digest: $digest) {
    ...RPC_TRANSACTION_FIELDS
  }
}
    fragment RPC_TRANSACTION_FIELDS on TransactionBlock {
  digest
  rawTransaction: bcs @include(if: $showInput)
  rawTransaction: bcs @include(if: $showRawInput)
  sender {
    address
  }
  signatures
  effects {
    checkpoint {
      sequenceNumber
    }
    timestamp
    balanceChanges @include(if: $showBalanceChanges) {
      coinType {
        repr
      }
      owner {
        asAddress {
          address
        }
        asObject {
          address
        }
      }
      amount
    }
    dependencies @include(if: $showEffects) {
      digest
    }
    status @include(if: $showEffects)
    gasEffects @include(if: $showEffects) {
      gasObject {
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
        digest
        version
        address
      }
      gasSummary {
        storageCost
        storageRebate
        nonRefundableStorageFee
        computationCost
      }
    }
    executedEpoch: epoch @include(if: $showEffects) {
      epochId
    }
    objectChanges @include(if: $showEffects) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
      }
      outputState {
        version
        digest
        address
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
    objectChanges @include(if: $showObjectChanges) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
      outputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<GetTransactionBlockQuery, GetTransactionBlockQueryVariables>;
export const MultiGetTransactionBlocksDocument = new TypedDocumentString(`
    query multiGetTransactionBlocks($digests: [String!]!, $limit: Int, $cursor: String, $showBalanceChanges: Boolean = false, $showEffects: Boolean = false, $showInput: Boolean = false, $showObjectChanges: Boolean = false, $showRawInput: Boolean = false) {
  transactionBlockConnection(
    first: $limit
    after: $cursor
    filter: {transactionIds: $digests}
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    nodes {
      ...RPC_TRANSACTION_FIELDS
    }
  }
}
    fragment RPC_TRANSACTION_FIELDS on TransactionBlock {
  digest
  rawTransaction: bcs @include(if: $showInput)
  rawTransaction: bcs @include(if: $showRawInput)
  sender {
    address
  }
  signatures
  effects {
    checkpoint {
      sequenceNumber
    }
    timestamp
    balanceChanges @include(if: $showBalanceChanges) {
      coinType {
        repr
      }
      owner {
        asAddress {
          address
        }
        asObject {
          address
        }
      }
      amount
    }
    dependencies @include(if: $showEffects) {
      digest
    }
    status @include(if: $showEffects)
    gasEffects @include(if: $showEffects) {
      gasObject {
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
        digest
        version
        address
      }
      gasSummary {
        storageCost
        storageRebate
        nonRefundableStorageFee
        computationCost
      }
    }
    executedEpoch: epoch @include(if: $showEffects) {
      epochId
    }
    objectChanges @include(if: $showEffects) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
      }
      outputState {
        version
        digest
        address
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
    objectChanges @include(if: $showObjectChanges) {
      idCreated
      idDeleted
      inputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
      outputState {
        version
        digest
        address
        asMoveObject {
          contents {
            type {
              repr
            }
          }
        }
        owner {
          asAddress {
            address
          }
          asObject {
            address
          }
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<MultiGetTransactionBlocksQuery, MultiGetTransactionBlocksQueryVariables>;