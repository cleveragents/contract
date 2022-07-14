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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ICALotteryInterface extends utils.Interface {
  functions: {
    "buyTickets(uint256,uint32[])": FunctionFragment;
    "claimTickets(uint256,uint256[],uint32[])": FunctionFragment;
    "closeLottery(uint256)": FunctionFragment;
    "drawFinalNumberAndMakeLotteryClaimable(uint256,bool)": FunctionFragment;
    "injectFunds(uint256,uint256)": FunctionFragment;
    "startLottery(uint256,uint256,uint256,uint256[6])": FunctionFragment;
    "viewCurrentLotteryId()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyTickets"
      | "claimTickets"
      | "closeLottery"
      | "drawFinalNumberAndMakeLotteryClaimable"
      | "injectFunds"
      | "startLottery"
      | "viewCurrentLotteryId"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyTickets",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimTickets",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "closeLottery",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "drawFinalNumberAndMakeLotteryClaimable",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "injectFunds",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startLottery",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "viewCurrentLotteryId",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "buyTickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "drawFinalNumberAndMakeLotteryClaimable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "injectFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewCurrentLotteryId",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICALottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICALotteryInterface;

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
    buyTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketIds: PromiseOrValue<BigNumberish>[],
      _brackets: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closeLottery(
      _lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    drawFinalNumberAndMakeLotteryClaimable(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _autoInjection: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    injectFunds(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startLottery(
      _endTime: PromiseOrValue<BigNumberish>,
      _priceTicketInBpt: PromiseOrValue<BigNumberish>,
      _discountDivisor: PromiseOrValue<BigNumberish>,
      _rewardsBreakdown: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    viewCurrentLotteryId(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyTickets(
    _lotteryId: PromiseOrValue<BigNumberish>,
    _ticketNumbers: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimTickets(
    _lotteryId: PromiseOrValue<BigNumberish>,
    _ticketIds: PromiseOrValue<BigNumberish>[],
    _brackets: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closeLottery(
    _lotteryId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  drawFinalNumberAndMakeLotteryClaimable(
    _lotteryId: PromiseOrValue<BigNumberish>,
    _autoInjection: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  injectFunds(
    _lotteryId: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startLottery(
    _endTime: PromiseOrValue<BigNumberish>,
    _priceTicketInBpt: PromiseOrValue<BigNumberish>,
    _discountDivisor: PromiseOrValue<BigNumberish>,
    _rewardsBreakdown: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  viewCurrentLotteryId(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketIds: PromiseOrValue<BigNumberish>[],
      _brackets: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    closeLottery(
      _lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    drawFinalNumberAndMakeLotteryClaimable(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _autoInjection: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    injectFunds(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startLottery(
      _endTime: PromiseOrValue<BigNumberish>,
      _priceTicketInBpt: PromiseOrValue<BigNumberish>,
      _discountDivisor: PromiseOrValue<BigNumberish>,
      _rewardsBreakdown: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    viewCurrentLotteryId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    buyTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketIds: PromiseOrValue<BigNumberish>[],
      _brackets: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closeLottery(
      _lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    drawFinalNumberAndMakeLotteryClaimable(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _autoInjection: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    injectFunds(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startLottery(
      _endTime: PromiseOrValue<BigNumberish>,
      _priceTicketInBpt: PromiseOrValue<BigNumberish>,
      _discountDivisor: PromiseOrValue<BigNumberish>,
      _rewardsBreakdown: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    viewCurrentLotteryId(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimTickets(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _ticketIds: PromiseOrValue<BigNumberish>[],
      _brackets: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closeLottery(
      _lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    drawFinalNumberAndMakeLotteryClaimable(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _autoInjection: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    injectFunds(
      _lotteryId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startLottery(
      _endTime: PromiseOrValue<BigNumberish>,
      _priceTicketInBpt: PromiseOrValue<BigNumberish>,
      _discountDivisor: PromiseOrValue<BigNumberish>,
      _rewardsBreakdown: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    viewCurrentLotteryId(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
