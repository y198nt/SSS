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

export interface ICompoundTimelockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "GRACE_PERIOD"
      | "MAXIMUM_DELAY"
      | "MINIMUM_DELAY"
      | "acceptAdmin"
      | "admin"
      | "cancelTransaction"
      | "delay"
      | "executeTransaction"
      | "pendingAdmin"
      | "queueTransaction"
      | "queuedTransactions"
      | "setDelay"
      | "setPendingAdmin"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CancelTransaction"
      | "ExecuteTransaction"
      | "NewAdmin"
      | "NewDelay"
      | "NewPendingAdmin"
      | "QueueTransaction"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "GRACE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelTransaction",
    values: [AddressLike, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [AddressLike, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queueTransaction",
    values: [AddressLike, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedTransactions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingAdmin",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "GRACE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queueTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;
}

export namespace CancelTransactionEvent {
  export type InputTuple = [
    txHash: BytesLike,
    target: AddressLike,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish
  ];
  export type OutputTuple = [
    txHash: string,
    target: string,
    value: bigint,
    signature: string,
    data: string,
    eta: bigint
  ];
  export interface OutputObject {
    txHash: string;
    target: string;
    value: bigint;
    signature: string;
    data: string;
    eta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecuteTransactionEvent {
  export type InputTuple = [
    txHash: BytesLike,
    target: AddressLike,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish
  ];
  export type OutputTuple = [
    txHash: string,
    target: string,
    value: bigint,
    signature: string,
    data: string,
    eta: bigint
  ];
  export interface OutputObject {
    txHash: string;
    target: string;
    value: bigint;
    signature: string;
    data: string;
    eta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewAdminEvent {
  export type InputTuple = [newAdmin: AddressLike];
  export type OutputTuple = [newAdmin: string];
  export interface OutputObject {
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewDelayEvent {
  export type InputTuple = [newDelay: BigNumberish];
  export type OutputTuple = [newDelay: bigint];
  export interface OutputObject {
    newDelay: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewPendingAdminEvent {
  export type InputTuple = [newPendingAdmin: AddressLike];
  export type OutputTuple = [newPendingAdmin: string];
  export interface OutputObject {
    newPendingAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QueueTransactionEvent {
  export type InputTuple = [
    txHash: BytesLike,
    target: AddressLike,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish
  ];
  export type OutputTuple = [
    txHash: string,
    target: string,
    value: bigint,
    signature: string,
    data: string,
    eta: bigint
  ];
  export interface OutputObject {
    txHash: string;
    target: string;
    value: bigint;
    signature: string;
    data: string;
    eta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ICompoundTimelock extends BaseContract {
  connect(runner?: ContractRunner | null): ICompoundTimelock;
  waitForDeployment(): Promise<this>;

  interface: ICompoundTimelockInterface;

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

  GRACE_PERIOD: TypedContractMethod<[], [bigint], "view">;

  MAXIMUM_DELAY: TypedContractMethod<[], [bigint], "view">;

  MINIMUM_DELAY: TypedContractMethod<[], [bigint], "view">;

  acceptAdmin: TypedContractMethod<[], [void], "nonpayable">;

  admin: TypedContractMethod<[], [string], "view">;

  cancelTransaction: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  delay: TypedContractMethod<[], [bigint], "view">;

  executeTransaction: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish
    ],
    [string],
    "payable"
  >;

  pendingAdmin: TypedContractMethod<[], [string], "view">;

  queueTransaction: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  queuedTransactions: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  setDelay: TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;

  setPendingAdmin: TypedContractMethod<
    [arg0: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "GRACE_PERIOD"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAXIMUM_DELAY"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MINIMUM_DELAY"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "acceptAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cancelTransaction"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "delay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "executeTransaction"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "pendingAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "queueTransaction"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "queuedTransactions"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "setDelay"
  ): TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPendingAdmin"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "CancelTransaction"
  ): TypedContractEvent<
    CancelTransactionEvent.InputTuple,
    CancelTransactionEvent.OutputTuple,
    CancelTransactionEvent.OutputObject
  >;
  getEvent(
    key: "ExecuteTransaction"
  ): TypedContractEvent<
    ExecuteTransactionEvent.InputTuple,
    ExecuteTransactionEvent.OutputTuple,
    ExecuteTransactionEvent.OutputObject
  >;
  getEvent(
    key: "NewAdmin"
  ): TypedContractEvent<
    NewAdminEvent.InputTuple,
    NewAdminEvent.OutputTuple,
    NewAdminEvent.OutputObject
  >;
  getEvent(
    key: "NewDelay"
  ): TypedContractEvent<
    NewDelayEvent.InputTuple,
    NewDelayEvent.OutputTuple,
    NewDelayEvent.OutputObject
  >;
  getEvent(
    key: "NewPendingAdmin"
  ): TypedContractEvent<
    NewPendingAdminEvent.InputTuple,
    NewPendingAdminEvent.OutputTuple,
    NewPendingAdminEvent.OutputObject
  >;
  getEvent(
    key: "QueueTransaction"
  ): TypedContractEvent<
    QueueTransactionEvent.InputTuple,
    QueueTransactionEvent.OutputTuple,
    QueueTransactionEvent.OutputObject
  >;

  filters: {
    "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)": TypedContractEvent<
      CancelTransactionEvent.InputTuple,
      CancelTransactionEvent.OutputTuple,
      CancelTransactionEvent.OutputObject
    >;
    CancelTransaction: TypedContractEvent<
      CancelTransactionEvent.InputTuple,
      CancelTransactionEvent.OutputTuple,
      CancelTransactionEvent.OutputObject
    >;

    "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)": TypedContractEvent<
      ExecuteTransactionEvent.InputTuple,
      ExecuteTransactionEvent.OutputTuple,
      ExecuteTransactionEvent.OutputObject
    >;
    ExecuteTransaction: TypedContractEvent<
      ExecuteTransactionEvent.InputTuple,
      ExecuteTransactionEvent.OutputTuple,
      ExecuteTransactionEvent.OutputObject
    >;

    "NewAdmin(address)": TypedContractEvent<
      NewAdminEvent.InputTuple,
      NewAdminEvent.OutputTuple,
      NewAdminEvent.OutputObject
    >;
    NewAdmin: TypedContractEvent<
      NewAdminEvent.InputTuple,
      NewAdminEvent.OutputTuple,
      NewAdminEvent.OutputObject
    >;

    "NewDelay(uint256)": TypedContractEvent<
      NewDelayEvent.InputTuple,
      NewDelayEvent.OutputTuple,
      NewDelayEvent.OutputObject
    >;
    NewDelay: TypedContractEvent<
      NewDelayEvent.InputTuple,
      NewDelayEvent.OutputTuple,
      NewDelayEvent.OutputObject
    >;

    "NewPendingAdmin(address)": TypedContractEvent<
      NewPendingAdminEvent.InputTuple,
      NewPendingAdminEvent.OutputTuple,
      NewPendingAdminEvent.OutputObject
    >;
    NewPendingAdmin: TypedContractEvent<
      NewPendingAdminEvent.InputTuple,
      NewPendingAdminEvent.OutputTuple,
      NewPendingAdminEvent.OutputObject
    >;

    "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)": TypedContractEvent<
      QueueTransactionEvent.InputTuple,
      QueueTransactionEvent.OutputTuple,
      QueueTransactionEvent.OutputObject
    >;
    QueueTransaction: TypedContractEvent<
      QueueTransactionEvent.InputTuple,
      QueueTransactionEvent.OutputTuple,
      QueueTransactionEvent.OutputObject
    >;
  };
}
