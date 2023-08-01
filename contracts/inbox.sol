// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract inbox{
   string  public message;

constructor(string memory initalMessage) public{
    message=initalMessage;
}

function setMessage(string memory newMessage) public
{
    message=newMessage;
}

}