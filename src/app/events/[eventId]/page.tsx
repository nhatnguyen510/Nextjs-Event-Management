"use client";
import React from "react";
import { Typography, Divider, QRCode } from "antd";
import listOfEvents from "../../../../fake-data.json";
import Image from "next/image";
import WelcomeLogo from "@/public/welcome.png";

interface EventDetailProps {
  params: { eventId: string };
}

const EventDetail: React.FC<EventDetailProps> = ({ params: { eventId } }) => {
  const post = {
    title: "Ấn tượng trải nghiệm mạng 5G MobiFone tại tỉnh Hưng Yên",
    content: `
    <p><strong><em>Ngày 20/5/2023, Tổng công ty viễn thông MobiFone đã khai trương mạng 5G tại tỉnh Hưng Yên, là địa phương tiếp theo trong số 17 tỉnh thành phố trên toàn quốc được phủ sóng 5G MobiFone.</em></strong></p>

    <p>Hiện nay, mạng 5G của MobiFone đã được thử nghiệm và phủ sóng tại một số tỉnh thành trên toàn quốc. Giai đoạn 2023 - 2025, xác định mục tiêu thực hiện Chương trình chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030, MobiFone đồng hành cùng Chính phủ phát triển Chính phủ số, kinh tế số, xã hội số, sẵn sàng về mặt hạ tầng và công nghệ cho việc thương mại hóa 5G chính thức tại Việt Nam.</p>
    
    <p>5G được coi là một công cụ quan trọng để thúc đẩy nhanh quá trình chuyển đổi số trong mọi lĩnh vực, từ sản xuất, giáo dục, y tế, nông nghiệp, tài chính ngân hàng, năng lượng đến thương mại dịch vụ. Với đường truyền dữ liệu nhanh và ổn định hơn, công nghệ 5G hứa hẹn sẽ tạo ra những bước đột phá đáng kinh ngạc, có thể thay đổi hoàn toàn bộ mặt kết nối toàn cầu.</p>
    
    <p>Với cam kết luôn mang đến cho khách hàng của mình những sản phẩm, dịch vụ có chất lượng cao nhất, Tổng Công ty Viễn thông MobiFone luôn luôn chú trọng việc nghiên cứu, phát triển, đầu tư cho công nghệ, đóng vai trò tiên phong trong chiến lược chuyển đổi số tại Việt Nam, mang lại những nền tảng công nghệ và trải nghiệm tuyệt vời nhất cho các cá nhân và doanh nghiệp.</p>
    
    <p style="text-align: center;"><img alt="" src="https://api.mobifone.vn/images/notifications/1684744068727_IMG_0043.jpg" style="width:80%"></p>
    
    <p>Kể từ ngày 20/5/2023, khách hàng tại khu vực tỉnh Hưng Yên đã có cơ hội trải nghiệm sự đột phá về tốc độ của 5G MobiFone so với các công nghệ 3G, 4G trước đây, cùng với đó là những tiện ích vô cùng phong phú đối với mọi mặt của cuộc sống.&nbsp;&nbsp;&nbsp;</p>
    
    <p>Điểm nổi bật nhất của công nghệ 5G là cho phép truyền dữ liệu tốc độ cao, độ trễ thấp, thời gian thực (real-time), độ ổn định cao, được coi là cơ sở để MobiFone phát triển thêm các dịch vụ giá trị gia tăng, mang lại nhiều tiện ích hơn cho các thuê bao sử dụng thiết bị di động kết nối 5G.</p>
    
    <p>Thông qua hệ Internet Speed Test, MobiFone đã ghi nhận tốc độ 5G tại sự kiện đạt mốc từ 600-800 Mbps, trong đó lần ghi nhận tốc độ cao nhất đạt tới trên 1,5Gbps, tương đương với những gói Internet cáp quang cao cấp hiện nay. Trong lần ra mắt này, MobiFone phối hợp với Samsung triển khai hệ thống thiết bị ăng-ten 64T64R 5G Massive MIMO, đây là công nghệ ăng-ten hiện đại nhất hiện nay, cho phép truyền dẫn trong các khu vực đông dân cư, giúp mở rộng độ phủ, tăng tốc độ dữ liệu để nâng cao trải nghiệm cho người dùng mạng 5G.</p>
    
    <p>Tại công viên mùa hạ - Ecopark Hưng Yên, MobiFone cũng giới thiệu các dịch vụ, giải pháp công nghệ phát huy tối đa tiềm năng của 5G như ClipTV 8K, Cloudgame, VR (thực tế ảo). Công nghệ 5G của MobiFone đem đến trải nghiệm trực tuyến mượt mà, chân thật ở mức gần như tuyệt đối, đạt tiêu chuẩn tương thích với các dòng tivi có độ phân giải 8K.</p>
    
    <p style="text-align: center;"><img alt="" src="https://api.mobifone.vn/images/notifications/1684744167172_z4366618811433_9bc0c469d898e39fb091e7026c5e550a.jpg" style="width:80%"></p>
    
    <p>Khách hàng có mặt tại sự kiện còn có cơ hội trải nghiệm dịch vụ Cloud Game trên nền tảng mạng 5G MobiFone. Cloud Game tận dụng tối đa sức mạnh của 5G, băng thông rộng, độ trễ thấp đem đến cho khách hàng trải nghiệm Game độ phân giải cao, kho game đa dạng tới hàng trăm game với nhiều thể loại mà người chơi không cần tải xuống thiết bị. Với Cloud Game người chơi sẽ không còn quan tâm đến cấu hình của thiết bị nữa. Người chơi có thể chơi trên bất kỳ thiết bị nào có kết nối internet với yêu cầu băng thông tối thiểu 100Mbps.</p>
    
    <p>Anh Hoàng Tùng (25 tuổi, Hà Nội) cho biết: “Là một người đam mê về game và công nghệ, sau khi test mạng 5G MobiFone và chơi thử một số tựa game như Asphalt9 tôi thấy trải nghiệm trên điện thoại mượt mà, hình ảnh đẹp sống động, độ sắc nét cao, tương thích với cả dòng máy chạy hệ điều hành Android lẫn IOS”.</p>
    
    <p>Khách hàng của MobiFone chỉ cần sử dụng thiết bị có hỗ trợ mạng 5G và đăng ký sử dụng dịch vụ theo các gói hiện hữu của MobiFone là có thể trải nghiệm các dịch vụ mọi lúc, mọi nơi với chất lượng mạng 5G tốc độ cao.</p>
    
    <p>Việc tiến tới thương mại hóa mạng 5G trên toàn quốc của MobiFone góp phần nâng cao trải nghiệm người dùng cũng như đẩy nhanh quá trình chuyển đổi kỹ thuật số của các quốc gia trong trong khu vực. Trong thời gian tới, MobiFone sẽ tiếp tục hoàn thiện và cập nhật những công nghệ hiện đại, tiên tiến nhất để đưa vào các sản phẩm, giải pháp công nghệ số trên thị trường.</p>
    `,

    QRCodeLink: "https://mobifone.vn",
  };

  const event = listOfEvents.find((event) => event.id === eventId);

  return (
    <>
      <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-4">
        <Image src={WelcomeLogo} alt="" width={200} height={100} />
        <Image src={event?.image as string} alt="" width={500} height={300} />
        <Typography.Title level={1} className="text-center">
          {event?.title}
        </Typography.Title>
        <Typography.Title level={2} className="mt-0">
          Date: {event?.date}
        </Typography.Title>
        <QRCode value={event?.QRCodeLink as string} />
      </div>
    </>
  );
};

export default EventDetail;
