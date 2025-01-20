import {addMemberToTheList } from './membersList.js';
import { timeOutMessage } from '../utils/timeOutMessage.js';
import { isMemberIdValid,findMemberId } from '../utils/memberIdValidation.js';
import {isAlpha, isAlphaOrSpace} from '../utils/isAlphaSpace.js';
//conatants
const memberIdMessage = {
    LENGTH: 'Member ID must be 4 digits!',
    DIGITSONLY: 'Member ID must be only digits!',
    UNIQUE: 'This ID already exists!'
}
const memberPhoneMessage = {
    LENGTH: 'Phone number must be 10 digits!',
    FORMAT: 'Phone number must starts with 05!',
    DIGITSONLY: 'Phone number must be digits only!'
}

//event listener to submit button and enter
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    startTheProgram();

})

//if everthing correct this will move the data to the list
function startTheProgram() {
    let memberId, memberName, memberPhone;

    memberId = document.querySelector('#memberId').value || '';
    memberName = document.querySelector('#memberName').value || '';
    memberPhone = document.querySelector('#memberPhone').value || '';

    if (isMemberIdValid(memberId,'.memberId .js-message',memberIdMessage.LENGTH,memberIdMessage.UNIQUE) && !findMemberId(memberId, '.memberId .js-message', memberIdMessage.UNIQUE,'member') && isMemberNameValid(memberName) && isMemberPhoneValid(memberPhone)) {
        console.log('entered');
        addMemberToTheList(memberId, memberName, memberPhone);

    }

}



//to validate the member name
function isMemberNameValid(memberName) {
    const theLength = memberName.length;
    for (let i = 0; i < theLength; i++) {
        if (!isAlphaOrSpace(memberName[i])) {

            timeOutMessage('.memberName .js-message', `Use only characters from a-z`);
            return 0;
        }
    }
    return 1;
}

//to validate the member phone number
function isMemberPhoneValid(memberPhone) {
    const theLength = memberPhone.length;
    if (theLength != 10) {
        timeOutMessage('.memberPhone .js-message', memberPhoneMessage.LENGTH);
        return 0;
    }

    if (memberPhone[0] != 0 || memberPhone[1] != 5) {
        timeOutMessage('.memberPhone .js-message', memberPhoneMessage.FORMAT);
        return 0;
    }

    for (let i = 0; i < theLength; i++) {
        if (isAlpha(memberPhone[i])) {
            timeOutMessage('.memberPhone .js-message', memberPhoneMessage.DIGITSONLY);
            return 0;
        }
    }

    return 1;
}






