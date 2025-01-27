import TeamDetailsArea from '@/components/team-details/TeamDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const TeamDetailsMain = () => {
  const id =1;
    return (
        <>
  <MetaData pageTitle="Team Details">
       <Wrapper>
        <main>
          <TeamDetailsArea id={id}/>
        </main>
      </Wrapper>
 </MetaData>
        </>
    );
};

export default TeamDetailsMain;