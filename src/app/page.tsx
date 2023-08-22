import { getAllEvents } from "@/dummy-data";
import { List } from "@/components/list/list";
import { ListItem } from "@/components/list/listItem";
import { DummyEvent } from "@/components/event/event";

const Home = () => {
  const allEvents = getAllEvents().map((item) => (
    <DummyEvent dummyEvent={item} />
  ));

  return (
    <List>
      {allEvents.map((item) => (
        <ListItem>{item}</ListItem>
      ))}
    </List>
  );
};

export default Home;
