import { getAllEvents } from "@/dummy-data";
import { List } from "@/components/list/list";
import { ListItem } from "@/components/list/listItem";
import { DummyEvent } from "@/components/event/event";

const Home = () => {
  const allEvents = getAllEvents().map((item) => (
    <DummyEvent key={item.id} dummyEvent={item} />
  ));

  return (
    <List>
      {allEvents.map((item) => (
        <ListItem key={item.key}>{item}</ListItem>
      ))}
    </List>
  );
};

export default Home;
