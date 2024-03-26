/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC2309,
  IERC2309Interface,
} from "../../../../../contracts/@openzeppelin/contracts/interfaces/IERC2309";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toAddress",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
] as const;

export class IERC2309__factory {
  static readonly abi = _abi;
  static createInterface(): IERC2309Interface {
    return new Interface(_abi) as IERC2309Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): IERC2309 {
    return new Contract(address, _abi, runner) as unknown as IERC2309;
  }
}
