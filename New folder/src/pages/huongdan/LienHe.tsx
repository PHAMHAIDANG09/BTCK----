import React from 'react';
import { Typography, Card } from 'antd';
import Navbar from '../trangchu/Navbar';
import FooterPTIT from '../../component/dunglai/FooterPTIT';

const { Title, Paragraph } = Typography;

const LienHe: React.FC = () => (
  <>
    <Navbar />
    <div style={{ maxWidth: 900, margin: '32px auto', background: '#fff', borderRadius: 12, padding: 32 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>Liên hệ hỗ trợ</Title>
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Paragraph>
          Nếu cần hỗ trợ về đăng ký, tra cứu, nộp lệ phí hoặc các vấn đề khác, vui lòng liên hệ:
        </Paragraph>
        <Paragraph>
          <b>Hotline:</b> 1800 1234<br />
          <b>Email:</b> hotro@xettuyen.edu.vn<br />
          <b>Chat trực tuyến:</b> Sử dụng biểu tượng chat ở góc phải màn hình.
        </Paragraph>
        <Paragraph>
          Bộ phận hỗ trợ sẽ phản hồi trong giờ hành chính hoặc sớm nhất có thể.
        </Paragraph>
      </Card>
    </div>
    <FooterPTIT />
  </>
);

export default LienHe; 