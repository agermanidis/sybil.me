pragma solidity ^0.4.18;

contract Sybil {
    event AttributeUpdated(address, string, string);

    mapping (address => mapping (string => string)) registry;
    
    string constant NICKNAME_KEY = 'nickname';
    string constant AVATAR_KEY = 'avatar';
    
    function set (string key, string value) public {
        registry[msg.sender][key] = value;
        AttributeUpdated(msg.sender, key, value);
    }
    
    function get (address subject, string key) public view returns (string) {
        return registry[subject][key];
    }
    
    function getBasicInfo (address subject) public view returns (string, string) {
        return (registry[subject][NICKNAME_KEY], registry[subject][AVATAR_KEY]);
    }
}
