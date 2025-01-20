import { members, removeMember } from './membersList.js';
export function renderMembersPage() {

  let membersHTML = '';
  if (members.length != 0) {
    members.forEach((member) => {//generates the html for each member in the list
      membersHTML += ` 
      
          <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.phone}</td>
            <td><button class="del-btn" data-member-Id = "${member.id}">Delete</button></td>
          </tr>
      `
    })
  }

  document.querySelector('.content-table-body').innerHTML = membersHTML;//to display the generated html


  //add an event listener to the delete button
  document.querySelectorAll('.del-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const { memberId } = button.dataset;//to get the Id of the member we want to delete
      removeMember(memberId);
      renderMembersPage();//to refresh the page after deleting the member
    })
  })

}

