import React from 'react';
import { useCollection } from '../firebase/utils';

function Members({ channelId }) {
  const members = useCollection('users', undefined, [
    `channels.${channelId}`,
    '==',
    true
  ]);

  return (
    <div className="Members">
      {members &&
        members.sort(sortByDisplayName).map(member => (
          <div key={member.id}>
            <div className="Member">
              <div
                className={`MemberStatus ${member.status &&
                  member.status.state}`}
              />
              {member.displayName}
            </div>
          </div>
        ))}
    </div>
  );
}

function sortByDisplayName(a, b) {
  var nameA = a.displayName.toLowerCase();
  var nameB = b.displayName.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0;
}

export default Members;
