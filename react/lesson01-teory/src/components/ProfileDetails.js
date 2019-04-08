import React from 'react';

const ProfileDetails = ({ name, age }) => (
  <section>
    <h3>Profile Details</h3>
    <p>{name}</p>
    <p>{age}</p>
  </section>
);

export default ProfileDetails;
