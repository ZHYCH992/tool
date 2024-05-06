import { Button, Space } from 'antd';
import { useRef } from 'react';
import { sLoading } from 'stoolchain';
import './../style/index.less';
import './index.less';
export default function () {
  const element = useRef(null);
  return (
    <Space className="loadingDom" ref={element} direction="vertical">
      <Space>
        <Button onClick={() => sLoading.show({ element: document.body })}>
          全屏Loading
        </Button>
        <Button
          onClick={() => {
            console.log(element.current === document.body);
            sLoading.show({ element: element.current });
          }}
        >
          当前窗口Loading
        </Button>
        <Button
          onClick={() => {
            sLoading.auto({ element: document.body, time: 3000 });
          }}
        >
          三秒后隐藏
        </Button>
      </Space>
      <Space>
        <Button
          style={{ position: 'relative', zIndex: 10000 }}
          onClick={() => {
            sLoading.hiden({ element: document.body });
          }}
        >
          隐藏全屏
        </Button>
        <Button
          style={{ position: 'relative', zIndex: 10000 }}
          onClick={() => {
            sLoading.hiden({ element: element.current });
          }}
        >
          隐藏当前窗口
        </Button>
      </Space>
    </Space>
  );
}
