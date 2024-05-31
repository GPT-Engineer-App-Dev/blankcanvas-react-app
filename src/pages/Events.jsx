import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editEvent, setEditEvent] = useState("");

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      setEvents([...events, newEvent]);
      setNewEvent("");
    }
  };

  const handleDeleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const handleEditEvent = (index) => {
    setEditIndex(index);
    setEditEvent(events[index]);
  };

  const handleUpdateEvent = () => {
    if (editEvent.trim()) {
      const updatedEvents = events.map((event, index) =>
        index === editIndex ? editEvent : event
      );
      setEvents(updatedEvents);
      setEditIndex(null);
      setEditEvent("");
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Events</Heading>
        <Flex>
          <Input
            placeholder="Add new event"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
          <Button onClick={handleAddEvent} ml={2}>Add Event</Button>
        </Flex>
        <Stack spacing={4}>
          {events.map((event, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px">
              {editIndex === index ? (
                <Flex>
                  <Input
                    value={editEvent}
                    onChange={(e) => setEditEvent(e.target.value)}
                  />
                  <Button onClick={handleUpdateEvent} ml={2}>Update</Button>
                </Flex>
              ) : (
                <Flex justify="space-between">
                  <Text>{event}</Text>
                  <Box>
                    <Button onClick={() => handleEditEvent(index)} mr={2}>Edit</Button>
                    <Button onClick={() => handleDeleteEvent(index)}>Delete</Button>
                  </Box>
                </Flex>
              )}
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Events;