import React from "react";
import { Typography, Cascader, Card, Button } from "antd";
import Image from "next/image";
import { RightCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import listOfevents from "../../../fake-data.json";

console.log("listOfevents", listOfevents);

const { Title, Paragraph } = Typography;

interface EventListProps {
  eventList?: Event[];
}

interface Event {
  id: string;
  title: string;
  image?: string;
  description: string;
  date: string;
  QRCodeLink?: string;
}

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: "1",
    label: "Trải nghiệm mạng 5G MobiFone tại tỉnh Hưng Yên",
  },
  {
    value: "2",
    label:
      "MobiFone và Tổng công ty Đường sắt Việt Nam ký Biên bản ghi nhớ hợp tác",
  },
  {
    value: "3",
    label: "MobiFone vinh dự nhận 5 giải thưởng Sao Khuê 2023",
  },
];

export const EventList: React.FC<EventListProps> = ({ eventList }) => {
  const [selectedEvent, setSelectedEvent] = React.useState<
    Event | null | undefined
  >(null);

  const router = useRouter();

  const onChange = (value: any) => {
    const event = listOfevents.find((event) => event.id === value[0]);
    setSelectedEvent(event);
  };

  const onBtnClick = () => {
    if (selectedEvent) {
      router.push(`/events/${selectedEvent.id}`);
    }
  };

  const displayRender = (labels: string[]) => labels[labels.length - 1];
  return (
    <>
      <Title level={2}>All Events</Title>

      <Cascader
        size="large"
        options={options}
        expandTrigger="hover"
        displayRender={displayRender}
        className="w-1/2 md:w-7/12"
        onChange={onChange}
        placeholder="Select an event"
        dropdownMenuColumnStyle={{ width: "100%" }}
      />

      {selectedEvent && (
        <Card
          title={selectedEvent.title}
          hoverable
          cover={
            <Image
              src={selectedEvent.image as string}
              alt="Picture of the author"
              width={500}
              height={300}
            />
          }
          className="mt-4 w-1/2 md:w-7/12 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between">
            <Paragraph style={{ height: 150, wordBreak: "break-word" }}>
              {selectedEvent.description}
            </Paragraph>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-2">
            <Button
              icon={<RightCircleOutlined />}
              size="large"
              className="flex justify-center items-center"
              onClick={onBtnClick}
            >
              Continue
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};
