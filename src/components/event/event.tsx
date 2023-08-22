import React from "react";

interface DummyEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

interface Props {
  dummyEvent: DummyEvent;
}

export const DummyEvent = ({ dummyEvent }: Props) => {
  return (
    <div>
      <p>{dummyEvent.title}</p>
      <p>{dummyEvent.description}</p>
      <p>{dummyEvent.location}</p>
      <p>{dummyEvent.date}</p>
      <img src={dummyEvent.image} />
    </div>
  );
};
