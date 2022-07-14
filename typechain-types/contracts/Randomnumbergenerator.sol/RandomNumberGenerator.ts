/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface RandomNumberGeneratorInterface extends utils.Interface {
  functions: {
    "caLottery()": FunctionFragment;
    "fee()": FunctionFragment;
    "getRandomNumber(uint256)": FunctionFragment;
    "keyHash()": FunctionFragment;
    "latestLotteryId()": FunctionFragment;
    "latestRequestId()": FunctionFragment;
    "owner()": FunctionFragment;
    "randomResult()": FunctionFragment;
    "rawFulfillRandomness(bytes32,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setKeyHash(bytes32)": FunctionFragment;
    "setLotteryAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "viewLatestLotteryId()": FunctionFragment;
    "viewRandomResult()": FunctionFragment;
    "withdrawTokens(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "caLottery"
      | "fee"
      | "getRandomNumber"
      | "keyHash"
      | "latestLotteryId"
      | "latestRequestId"
      | "owner"
      | "randomResult"
      | "rawFulfillRandomness"
      | "renounceOwnership"
      | "setFee"
      | "setKeyHash"
      | "setLotteryAddress"
      | "transferOwnership"
      | "viewLatestLotteryId"
      | "viewRandomResult"
      | "withdrawTokens"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "caLottery", values?: undefined): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "keyHash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "latestLotteryId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "randomResult",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomness",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setKeyHash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLotteryAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "viewLatestLotteryId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "viewRandomResult",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "caLottery", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "keyHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestLotteryId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKeyHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLotteryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewLatestLotteryId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewRandomResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RandomNumberGenerator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RandomNumberGeneratorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    caLottery(overrides?: CallOverrides): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRandomNumber(
      _seed: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    keyHash(overrides?: CallOverrides): Promise<[string]>;

    latestLotteryId(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestRequestId(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    randomResult(overrides?: CallOverrides): Promise<[number]>;

    rawFulfillRandomness(
      requestId: PromiseOrValue<BytesLike>,
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setKeyHash(
      _keyHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLotteryAddress(
      _caLottery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    viewLatestLotteryId(overrides?: CallOverrides): Promise<[BigNumber]>;

    viewRandomResult(overrides?: CallOverrides): Promise<[number]>;

    withdrawTokens(
      _tokenAddress: PromiseOrValue<string>,
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  caLottery(overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  getRandomNumber(
    _seed: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  keyHash(overrides?: CallOverrides): Promise<string>;

  latestLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

  latestRequestId(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  randomResult(overrides?: CallOverrides): Promise<number>;

  rawFulfillRandomness(
    requestId: PromiseOrValue<BytesLike>,
    randomness: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFee(
    _fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setKeyHash(
    _keyHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLotteryAddress(
    _caLottery: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  viewLatestLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

  viewRandomResult(overrides?: CallOverrides): Promise<number>;

  withdrawTokens(
    _tokenAddress: PromiseOrValue<string>,
    _tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    caLottery(overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomNumber(
      _seed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    keyHash(overrides?: CallOverrides): Promise<string>;

    latestLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

    latestRequestId(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    randomResult(overrides?: CallOverrides): Promise<number>;

    rawFulfillRandomness(
      requestId: PromiseOrValue<BytesLike>,
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setKeyHash(
      _keyHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLotteryAddress(
      _caLottery: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    viewLatestLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

    viewRandomResult(overrides?: CallOverrides): Promise<number>;

    withdrawTokens(
      _tokenAddress: PromiseOrValue<string>,
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    caLottery(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomNumber(
      _seed: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    keyHash(overrides?: CallOverrides): Promise<BigNumber>;

    latestLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

    latestRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    randomResult(overrides?: CallOverrides): Promise<BigNumber>;

    rawFulfillRandomness(
      requestId: PromiseOrValue<BytesLike>,
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setKeyHash(
      _keyHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLotteryAddress(
      _caLottery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    viewLatestLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

    viewRandomResult(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawTokens(
      _tokenAddress: PromiseOrValue<string>,
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    caLottery(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRandomNumber(
      _seed: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    keyHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestLotteryId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomResult(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rawFulfillRandomness(
      requestId: PromiseOrValue<BytesLike>,
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setKeyHash(
      _keyHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLotteryAddress(
      _caLottery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    viewLatestLotteryId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewRandomResult(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawTokens(
      _tokenAddress: PromiseOrValue<string>,
      _tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
