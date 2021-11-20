// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract  photoSharing {
     string public name = "Share Photos";

     uint public imageCount  = 0;
     //  mappings are arr like datatypes
     mapping(uint => Image) public images;
     //  Structs are Obj like
     struct Image {
          uint id;
          address  Imageowner;
          uint tip;
          string imgHash;
          string desctiption;
     }         
     //  Declaring events to emit in future
     event ImageUploded(
          address _from,
          string  _imgHash,
          string  _desc
     );
     //  Functions
     function uploadImg(string memory _imgHash,string memory _desc) public {
          imageCount++;
          // Creating new Images struct with data
          images[imageCount] = Image(imageCount,msg.sender,0,_imgHash,_desc);
          //  Emitting Events
          emit ImageUploded(msg.sender,_imgHash,_desc);
     }
      
}