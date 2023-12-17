import { Box } from "@mui/material";
import React from "react";
import Item from "./Item";

const CenterBody = () => {
  return (
    <Box flex={3} p={2} sx={{}}>
      {write_data.map((data) => {
        return (
          <Item
            title={data.title}
            content={data.content}
            imageUrl={data.imageUrl}
            writeDate={data.writeDate}
            writer={data.writer}
            bgcolor={data.bgcolor}
          />
        );
      })}
    </Box>
  );
};

export default CenterBody;

const write_data = [
  {
    title: "My Breakfast today",
    content:
      "I want to have bread and coffee in the morning without any pressure. I like half-cooked eggs for fried eggs!",
    imageUrl: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    writeDate: "December 17, 2023",
    writer: "Hyo",
    bgcolor: "pink",
  },
  {
    title: "My favorite burger",
    content:
      "I'm into handmade hamburgers these days. Actually, I might like French fries more than hamburgers",
    imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    writeDate: "November 28, 2023",
    writer: "Marn",
    bgcolor: "red",
  },
  {
    title: "I started the morning with coffee",
    content: "I've always wanted to try making coffee at a cafe..",
    imageUrl: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    writeDate: "November 14, 2023",
    writer: "Wean",
    bgcolor: "purple",
  },
  {
    title: "My hobby is riding a bicycle",
    content: "I'm not good at riding a bike, but I'm going for it!",
    imageUrl: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    writeDate: "September 30, 2023",
    writer: "Joy",
    bgcolor: "green",
  },
];
