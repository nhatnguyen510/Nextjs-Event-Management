import React from "react";
import { List, Card, Col, Row } from "antd";
import { Typography } from "antd";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Title, Paragraph } = Typography;

interface EventListProps {
  eventList?: Event[];
}

interface Event {
  id: number;
  title: string;
  image?: string;
  description: string;
  date: string;
}

const showTotal: PaginationProps["showTotal"] = (total) =>
  `Total ${total} items`;

const events: Event[] = [
  {
    id: 1,
    title: "Trải nghiệm mạng 5G MobiFone tại tỉnh Hưng Yên",
    image:
      "https://api.mobifone.vn/images/article/1684744212387_z4366618811433_9bc0c469d898e39fb091e7026c5e550a%20-%20Copy.jpg",
    description:
      "Ngày 20/5/2023, Tổng công ty viễn thông MobiFone đã khai trương mạng 5G tại tỉnh Hưng Yên, là địa phương tiếp theo trong số 17 tỉnh thành phố trên toàn quốc được phủ sóng 5G MobiFone.",
    date: "2023-07-12",
  },
  {
    id: 2,
    title:
      "MobiFone và Tổng công ty Đường sắt Việt Nam ký Biên bản ghi nhớ hợp tác",
    image:
      "https://api.mobifone.vn/images/article/1687334370703_S.A.Y-Media-00948%20-%20Copy.jpg",
    description:
      "Ngày 21/6/2023, Tổng công ty Viễn thông MobiFone và Tổng công ty Đường sắt Việt Nam (VNR) đã ký kết thành công Biên bản ghi nhớ hợp tác. Theo đó, MobiFone chính thức trở thành nhà cung cấp hạ tầng số, giải pháp số và dịch vụ số cho VNR.",
    date: "2023-06-21",
  },
  {
    id: 3,
    title: "MobiFone vinh dự nhận 5 giải thưởng Sao Khuê 2023",
    image:
      "https://api.mobifone.vn/images/notifications/1682672931084_%E1%BA%A3nh%20gi%E1%BA%A3i%20th%C6%B0%E1%BB%9Fng.jpg",
    description:
      "Hà Nội ngày 28/4/2023, Tổng công ty Viễn thông MobiFone đã xuất sắc đạt 5 giải thưởng trong tổng số 182 giải thưởng trao cho các nền tảng số, dịch vụ số, giải pháp số và sản phẩm CNTT tiên phong của quốc gia tại lễ trao giải Giải thưởng Sao Khuê 2023 do Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA) tổ chức.",
    date: "2023-04-28",
  },
];

export const EventList: React.FC<EventListProps> = ({ eventList }) => {
  const router = useRouter();

  return (
    <>
      <Title level={2}>All Events</Title>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        dataSource={events}
        renderItem={(event) => (
          <List.Item
            onClick={(e) => {
              e.preventDefault();

              router.push(`/events/${event.id}`);
            }}
          >
            <Card
              title={event.title}
              hoverable
              cover={
                <Image
                  src={event.image as string}
                  alt="Picture of the author"
                  width={500}
                  height={300}
                />
              }
              className="md:h-[560px] h-auto flex flex-col justify-between"
            >
              <div className="flex flex-col justify-between">
                <Paragraph style={{ height: 150, wordBreak: "break-word" }}>
                  {event.description}
                </Paragraph>
                <Paragraph className="mt-2 text-end">
                  Date: {event.date}
                </Paragraph>
              </div>
            </Card>
          </List.Item>
        )}
      />

      <Pagination
        size="small"
        total={50}
        showTotal={showTotal}
        showQuickJumper
        style={{
          marginTop: "5rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "end",
        }}
      />
    </>
  );
};
