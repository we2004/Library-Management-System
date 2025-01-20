//this file to validate the member ID
//used in memberValidation and bookValidation
import { timeOutMessage } from "./timeOutMessage.js";
import { members } from "../members_scripts/membersList.js";
import { isAlpha } from "./isAlphaSpace.js";

//looks for a specific member ID in the list
//returns true if found and faulse if not
export function findMemberId(memberId, selector, message, type) {

    const membersLength = members.length;

    if (type === 'member') {//when I call the function in memberValidation
        for (let i = 0; i < membersLength; i++) {
            if (members[i].id == memberId) {
                timeOutMessage(`${selector}`, message);
                console.log('it does exist')

                return 1;
            }
        }
    }

    else if (type === 'book') {//when I call the fucntion in bookValidaiton
        for (let i = 0; i < membersLength; i++) {
            if (members[i].id == memberId) {

                return 1;
            }
        }
        timeOutMessage(`${selector}`, message);
    }



    return 0;
}

export function isMemberIdValid(memberId, selector, lengthMessage, digitMessage) {
    const theLength = memberId.length;

    //to check the length of the ID
    if (theLength != 4) {
        timeOutMessage(`${selector}`, lengthMessage);
        return 0;
    }

    //to check that the ID is only digits
    for (let i = 0; i < theLength; i++) {
        if (isAlpha(memberId[i])) {
            timeOutMessage(`${selector}`, digitMessage);
            return 0;
        }
    }

    
    return 1;
}