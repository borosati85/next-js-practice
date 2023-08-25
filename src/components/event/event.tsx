import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from './event.module.css';

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

  const { image, title, date, location, id } = dummyEvent;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink =`/events/${id}`

  return (
    <div className={classes.item}>
      <Image src={`/${image}`} alt="event_image" width={800} height={500} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore</Link>
        </div>
      </div>      
    </div>
  );
};
