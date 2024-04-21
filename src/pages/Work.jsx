import { AspectRatio, Box, Heading, SimpleGrid } from "@chakra-ui/react";  

const Work = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Work
      </Heading>
      {/* Video showcase components */}
  <SimpleGrid columns={[1, null, 3]} spacing="40px">
    <Box>
      <AspectRatio ratio={1}>
        <iframe
          title="Video 1"
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
    <Box>
      <AspectRatio ratio={1}>
        <iframe 
          title="Video 2"
          src="https://www.youtube.com/embed/VIDEO_ID_2" 
          allowFullScreen
        />
      </AspectRatio>
    </Box>
    <Box>
      <AspectRatio ratio={1}>
        <iframe
          title="Video 3" 
          src="https://www.youtube.com/embed/VIDEO_ID_3"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  </SimpleGrid>
    </Box>
  );
};

export default Work;
