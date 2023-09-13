import { Box, Flex } from "@chakra-ui/react";
import ImageSlider from "./Components/Slider/ImageSlider";
import { SlideData } from "./Components/Slider/SlideData";
import banner from "./Components/images/fashion-banner.png";
import visacard from "./Components/images/visa-card.jpg";
import Brandslider from "./Components/Brand/Brandslider";
import Header from "./Components/Header/Noon/src/component/Header/Header";


export default function App() {
  return (
    <div>
      <Header />
      <img src={visacard} width="100%"/>
      <Flex>
        <Box flex={2}>
          <div>
            <ImageSlider slides={SlideData} />
          </div>
        </Box>
        <Box flex={1}>
          <div>
            <img src={banner} width="100%" height="450" style={{ margin: "0px 10px ", height: "210px" }} />
          </div>
        </Box>
      </Flex>
      <Brandslider />
    </div>
  );
}