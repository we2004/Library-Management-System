//an array to store the members info
export let members = [];

//to first load the members' data from local storage
loadFromStorage();

//function to get the data from the local storage
export function loadFromStorage() {
    members = JSON.parse(localStorage.getItem('membersList')) || [
        { id: 1001, name: "John Doe", phone: "0512345678" },
        { id: 1002, name: "Jane Smith", phone: "0512345678" },
        { id: 1003, name: "Michael Johnson", phone: "0512345678" },
        { id: 1004, name: "Emily Davis", phone: "0512345678" },
        { id: 1005, name: "David Wilson", phone: "0512345678" },
        { id: 1006, name: "Sarah Miller", phone: "0512345678" },
        { id: 1007, name: "Chris Brown", phone: "0512345678" },
        { id: 1008, name: "Jessica Garcia", phone: "0512345678" },
        { id: 1009, name: "Daniel Martinez", phone: "0512345678" },
        { id: 1010, name: "Sophia Anderson", phone: "0512345678" }];
}


//function to store the data in the storage
export function saveMemberToStorage() {
    localStorage.setItem('membersList', JSON.stringify(members));
}

//adds the new member's data to the list
export function addMemberToTheList(memberId, memberName, memberPhone) {
    let newMember = { id: memberId, name: memberName, phone: memberPhone }

    members.push(newMember);

    document.querySelector('.added-message').innerHTML = `Member added successfully!`;
    setTimeout(() => {
        reset();
    }, 3000);
    saveMemberToStorage();

}

//resets the form
function reset() {
    document.querySelector('#memberId').value = '';
    document.querySelector('#memberName').value = '';
    document.querySelector('#memberPhone').value = '';
    document.querySelector('.added-message').innerHTML = '';

}

//reomves a member from the list
//by introducing a new members list in exclude the member that we want to delete
export function removeMember(memberId) {
    const newMemberList = [];
    members.forEach((member) => {
        if (member.id != memberId) {
            newMemberList.push(member);
        }
    })
    members = newMemberList;

    //to save the new data to the local storage
    saveMemberToStorage();
}