/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface AccessControlDefaultAdminRulesInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "acceptDefaultAdminTransfer"
      | "beginDefaultAdminTransfer"
      | "cancelDefaultAdminTransfer"
      | "changeDefaultAdminDelay"
      | "defaultAdmin"
      | "defaultAdminDelay"
      | "defaultAdminDelayIncreaseWait"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "owner"
      | "pendingDefaultAdmin"
      | "pendingDefaultAdminDelay"
      | "renounceRole"
      | "revokeRole"
      | "rollbackDefaultAdminDelay"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DefaultAdminDelayChangeCanceled"
      | "DefaultAdminDelayChangeScheduled"
      | "DefaultAdminTransferCanceled"
      | "DefaultAdminTransferScheduled"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptDefaultAdminTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beginDefaultAdminTransfer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDefaultAdminTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeDefaultAdminDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdminDelayIncreaseWait",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingDefaultAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingDefaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rollbackDefaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beginDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdminDelayIncreaseWait",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingDefaultAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollbackDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
}

export namespace DefaultAdminDelayChangeCanceledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultAdminDelayChangeScheduledEvent {
  export type InputTuple = [
    newDelay: BigNumberish,
    effectSchedule: BigNumberish
  ];
  export type OutputTuple = [newDelay: bigint, effectSchedule: bigint];
  export interface OutputObject {
    newDelay: bigint;
    effectSchedule: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultAdminTransferCanceledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultAdminTransferScheduledEvent {
  export type InputTuple = [
    newAdmin: AddressLike,
    acceptSchedule: BigNumberish
  ];
  export type OutputTuple = [newAdmin: string, acceptSchedule: bigint];
  export interface OutputObject {
    newAdmin: string;
    acceptSchedule: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AccessControlDefaultAdminRules extends BaseContract {
  connect(runner?: ContractRunner | null): AccessControlDefaultAdminRules;
  waitForDeployment(): Promise<this>;

  interface: AccessControlDefaultAdminRulesInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  acceptDefaultAdminTransfer: TypedContractMethod<[], [void], "nonpayable">;

  beginDefaultAdminTransfer: TypedContractMethod<
    [newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  cancelDefaultAdminTransfer: TypedContractMethod<[], [void], "nonpayable">;

  changeDefaultAdminDelay: TypedContractMethod<
    [newDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  defaultAdmin: TypedContractMethod<[], [string], "view">;

  defaultAdminDelay: TypedContractMethod<[], [bigint], "view">;

  defaultAdminDelayIncreaseWait: TypedContractMethod<[], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pendingDefaultAdmin: TypedContractMethod<
    [],
    [[string, bigint] & { newAdmin: string; schedule: bigint }],
    "view"
  >;

  pendingDefaultAdminDelay: TypedContractMethod<
    [],
    [[bigint, bigint] & { newDelay: bigint; schedule: bigint }],
    "view"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  rollbackDefaultAdminDelay: TypedContractMethod<[], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptDefaultAdminTransfer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "beginDefaultAdminTransfer"
  ): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cancelDefaultAdminTransfer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeDefaultAdminDelay"
  ): TypedContractMethod<[newDelay: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "defaultAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "defaultAdminDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "defaultAdminDelayIncreaseWait"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingDefaultAdmin"
  ): TypedContractMethod<
    [],
    [[string, bigint] & { newAdmin: string; schedule: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pendingDefaultAdminDelay"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { newDelay: bigint; schedule: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rollbackDefaultAdminDelay"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  getEvent(
    key: "DefaultAdminDelayChangeCanceled"
  ): TypedContractEvent<
    DefaultAdminDelayChangeCanceledEvent.InputTuple,
    DefaultAdminDelayChangeCanceledEvent.OutputTuple,
    DefaultAdminDelayChangeCanceledEvent.OutputObject
  >;
  getEvent(
    key: "DefaultAdminDelayChangeScheduled"
  ): TypedContractEvent<
    DefaultAdminDelayChangeScheduledEvent.InputTuple,
    DefaultAdminDelayChangeScheduledEvent.OutputTuple,
    DefaultAdminDelayChangeScheduledEvent.OutputObject
  >;
  getEvent(
    key: "DefaultAdminTransferCanceled"
  ): TypedContractEvent<
    DefaultAdminTransferCanceledEvent.InputTuple,
    DefaultAdminTransferCanceledEvent.OutputTuple,
    DefaultAdminTransferCanceledEvent.OutputObject
  >;
  getEvent(
    key: "DefaultAdminTransferScheduled"
  ): TypedContractEvent<
    DefaultAdminTransferScheduledEvent.InputTuple,
    DefaultAdminTransferScheduledEvent.OutputTuple,
    DefaultAdminTransferScheduledEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "DefaultAdminDelayChangeCanceled()": TypedContractEvent<
      DefaultAdminDelayChangeCanceledEvent.InputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputObject
    >;
    DefaultAdminDelayChangeCanceled: TypedContractEvent<
      DefaultAdminDelayChangeCanceledEvent.InputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputObject
    >;

    "DefaultAdminDelayChangeScheduled(uint48,uint48)": TypedContractEvent<
      DefaultAdminDelayChangeScheduledEvent.InputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputObject
    >;
    DefaultAdminDelayChangeScheduled: TypedContractEvent<
      DefaultAdminDelayChangeScheduledEvent.InputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputObject
    >;

    "DefaultAdminTransferCanceled()": TypedContractEvent<
      DefaultAdminTransferCanceledEvent.InputTuple,
      DefaultAdminTransferCanceledEvent.OutputTuple,
      DefaultAdminTransferCanceledEvent.OutputObject
    >;
    DefaultAdminTransferCanceled: TypedContractEvent<
      DefaultAdminTransferCanceledEvent.InputTuple,
      DefaultAdminTransferCanceledEvent.OutputTuple,
      DefaultAdminTransferCanceledEvent.OutputObject
    >;

    "DefaultAdminTransferScheduled(address,uint48)": TypedContractEvent<
      DefaultAdminTransferScheduledEvent.InputTuple,
      DefaultAdminTransferScheduledEvent.OutputTuple,
      DefaultAdminTransferScheduledEvent.OutputObject
    >;
    DefaultAdminTransferScheduled: TypedContractEvent<
      DefaultAdminTransferScheduledEvent.InputTuple,
      DefaultAdminTransferScheduledEvent.OutputTuple,
      DefaultAdminTransferScheduledEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
