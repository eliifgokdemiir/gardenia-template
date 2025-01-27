import TeamDetailsArea from '@/components/team-details/TeamDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const TeamDetailsMain = ({ params }: { params: { id: number } }) => {
    const id = params.id;
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