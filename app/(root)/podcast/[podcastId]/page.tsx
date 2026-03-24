import React from 'react';

const PodcastDetails = async ({
  params,
}: {
  params: { podcastId: string };
}) => {
  const { podcastId } = await params;
  return <p>PodcastDetails for: {podcastId}</p>;
};

export default PodcastDetails;
