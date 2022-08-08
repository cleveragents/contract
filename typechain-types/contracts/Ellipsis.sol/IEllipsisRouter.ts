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

export interface IEllipsisRouterInterface extends utils.Interface {
  functions: {
    "add_liquidity(uint256[2],uint256)": FunctionFragment;
    "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "add_liquidity" | "remove_liquidity_one_coin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_one_coin",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_one_coin",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IEllipsisRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEllipsisRouterInterface;

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
    add_liquidity(
      amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      min_mint_amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remove_liquidity_one_coin(
      _token_amount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      _min_amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  add_liquidity(
    amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    min_mint_amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remove_liquidity_one_coin(
    _token_amount: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    _min_amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    add_liquidity(
      amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      min_mint_amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    remove_liquidity_one_coin(
      _token_amount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      _min_amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    add_liquidity(
      amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      min_mint_amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    remove_liquidity_one_coin(
      _token_amount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      _min_amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add_liquidity(
      amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      min_mint_amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remove_liquidity_one_coin(
      _token_amount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      _min_amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
