/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MockIncentivesControllerInterface extends ethers.utils.Interface {
  functions: {
    "DISTRIBUTION_END()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "REWARD_TOKEN()": FunctionFragment;
    "assets(address)": FunctionFragment;
    "claimRewards(address[],uint256,address)": FunctionFragment;
    "claimRewardsOnBehalf(address[],uint256,address,address)": FunctionFragment;
    "configureAssets(address[],uint256[])": FunctionFragment;
    "getAssetData(address)": FunctionFragment;
    "getClaimer(address)": FunctionFragment;
    "getRewardsBalance(address[],address)": FunctionFragment;
    "getUserAssetData(address,address)": FunctionFragment;
    "getUserUnclaimedRewards(address)": FunctionFragment;
    "handleAction(address,uint256,uint256)": FunctionFragment;
    "setClaimer(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_END",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "REWARD_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "assets", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string[], BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardsOnBehalf",
    values: [string[], BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetData",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getClaimer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRewardsBalance",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUnclaimedRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleAction",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimer",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getClaimer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUnclaimedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;

  events: {
    "ClaimerSet(address,address)": EventFragment;
    "RewardsAccrued(address,uint256)": EventFragment;
    "RewardsClaimed(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
}

export type ClaimerSetEvent = TypedEvent<
  [string, string] & { user: string; claimer: string }
>;

export type RewardsAccruedEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type RewardsClaimed_address_address_uint256_Event = TypedEvent<
  [string, string, BigNumber] & { user: string; to: string; amount: BigNumber }
>;

export type RewardsClaimed_address_address_address_uint256_Event = TypedEvent<
  [string, string, string, BigNumber] & {
    user: string;
    to: string;
    claimer: string;
    amount: BigNumber;
  }
>;

export class MockIncentivesController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockIncentivesControllerInterface;

  functions: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRECISION(overrides?: CallOverrides): Promise<[number]>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    claimRewards(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimRewardsOnBehalf(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    configureAssets(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAssetData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getClaimer(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    getRewardsBalance(
      arg0: string[],
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserAssetData(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserUnclaimedRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    handleAction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimer(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

  PRECISION(overrides?: CallOverrides): Promise<number>;

  REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

  assets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  claimRewards(
    arg0: string[],
    arg1: BigNumberish,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimRewardsOnBehalf(
    arg0: string[],
    arg1: BigNumberish,
    arg2: string,
    arg3: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  configureAssets(
    arg0: string[],
    arg1: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAssetData(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  getClaimer(arg0: string, overrides?: CallOverrides): Promise<string>;

  getRewardsBalance(
    arg0: string[],
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserAssetData(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserUnclaimedRewards(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handleAction(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimer(
    arg0: string,
    arg1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<number>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    claimRewards(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configureAssets(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAssetData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getClaimer(arg0: string, overrides?: CallOverrides): Promise<string>;

    getRewardsBalance(
      arg0: string[],
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimer(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClaimerSet(address,address)"(
      user?: string | null,
      claimer?: string | null
    ): TypedEventFilter<[string, string], { user: string; claimer: string }>;

    ClaimerSet(
      user?: string | null,
      claimer?: string | null
    ): TypedEventFilter<[string, string], { user: string; claimer: string }>;

    "RewardsAccrued(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    RewardsAccrued(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "RewardsClaimed(address,address,uint256)"(
      user?: string | null,
      to?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; to: string; amount: BigNumber }
    >;

    "RewardsClaimed(address,address,address,uint256)"(
      user?: string | null,
      to?: string | null,
      claimer?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { user: string; to: string; claimer: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    assets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configureAssets(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAssetData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getClaimer(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRewardsBalance(
      arg0: string[],
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimer(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewardsOnBehalf(
      arg0: string[],
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configureAssets(
      arg0: string[],
      arg1: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAssetData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimer(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsBalance(
      arg0: string[],
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAssetData(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserUnclaimedRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleAction(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimer(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
