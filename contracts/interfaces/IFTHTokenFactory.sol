// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.10;

interface IFTHTokenFactory {
    event FTHTokenCreated(address fthToken, address srcToken);

    function getFTHToken(address srcToken) external view returns (address);

    function getSource(address fthToken) external view returns (address);
}
