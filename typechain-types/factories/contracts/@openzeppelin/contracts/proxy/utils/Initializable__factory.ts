/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Initializable,
  InitializableInterface,
} from "../../../../../../contracts/@openzeppelin/contracts/proxy/utils/Initializable";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
] as const;

export class Initializable__factory {
  static readonly abi = _abi;
  static createInterface(): InitializableInterface {
    return new Interface(_abi) as InitializableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Initializable {
    return new Contract(address, _abi, runner) as unknown as Initializable;
  }
}
