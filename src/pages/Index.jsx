import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, useToast, Image } from "@chakra-ui/react";
import { FaPrint, FaQrcode, FaSave } from "react-icons/fa";

const Index = () => {
  const [link, setLink] = useState("");
  const toast = useToast();

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleGenerateQRCode = () => {
    // TODO: Implement QR code generation logic
    toast({
      title: "QR Code Generated.",
      description: "We've generated your QR code. You can now print it.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handlePrintQRCode = () => {
    // TODO: Implement QR code printing logic
    toast({
      title: "Printing QR Code.",
      description: "Your QR code is being sent to the printer.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Stack spacing={6}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            QR Code Generator
          </Text>
          <FormControl id="url">
            <FormLabel>Enter your link here:</FormLabel>
            <Input value={link} onChange={handleLinkChange} placeholder="https://example.com" />
          </FormControl>
          <Button leftIcon={<FaQrcode />} colorScheme="teal" mt={4} onClick={handleGenerateQRCode}>
            Generate QR Code
          </Button>
        </Box>

        {/* Placeholder for QR Code image */}
        <Box boxSize="sm" borderWidth="1px" rounded="md" overflow="hidden" p={4} textAlign="center">
          <Text mb={4}>Your QR Code will appear here</Text>
          {/* This image is a placeholder, replace with actual QR code */}
          <Image src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGV8ZW58MHx8fHwxNzA5MjUzNDQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Generated QR Code" />
        </Box>

        <Button leftIcon={<FaPrint />} colorScheme="blue" onClick={handlePrintQRCode}>
          Print QR Code
        </Button>

        {/* Optionally save the QR code */}
        <Button leftIcon={<FaSave />} colorScheme="green">
          Save QR Code
        </Button>
      </Stack>
    </Container>
  );
};

export default Index;
