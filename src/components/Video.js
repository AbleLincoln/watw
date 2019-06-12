import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';

const VideoWrapper = styled.div`
  position: relative;
  margin: 1rem 0;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = () => (
  <ContentSection>
    <VideoWrapper>
      <iframe
        title="Middle of Nowhere Live Rehearsal"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_uww6skdxnk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoWrapper>

    <VideoWrapper>
      <iframe
        title="Breaks Just Fine"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VQAXPbjeRPA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoWrapper>
  </ContentSection>
);

export default Video;
