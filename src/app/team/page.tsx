import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import BlogSectionFive from '@/components/team/BlogSectionFive';
import TeamIntroSection from '@/components/team/TeamIntroSection';
import TeamsSection from '@/components/team/TeamSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const TeamMain = () => {
    return (
        <>
    <MetaData pageTitle="Team">
      <Wrapper>
        <main>
        <Breadcrumb breadTitle={'expert management'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Team'} />
        <TeamsSection/>
        <TeamIntroSection />
        <BlogSectionFive />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default TeamMain;