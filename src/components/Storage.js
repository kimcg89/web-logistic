import React, { useState } from 'react';
import styles from './Storage.module.css'; // 새로운 CSS 파일을 import
import ProductInfo from './ProductInfo';
import Outgoing from './Outgoing';
import InStorage from './InStorage';

const Storage = () => {
  const [activePage, setActivePage] = useState('productList');

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <img src="/image/overview_ci_logo01.png" alt="img" />
        <nav>
          <ul>
            <li onClick={() => setActivePage('inStorage')}>입고 List</li>
            <li onClick={() => setActivePage('outgoing')}>출고 List</li>
            <li onClick={() => setActivePage('productList')}>바코드 Read 상품</li>
            <li>바코드 인쇄</li>
            <li>조정</li>
            <li>히스토리</li>
            <li>재고 링크</li>
            <li>구매 및 판매</li>
            <li>분석 및 알림</li>
            <li>데이터 관리</li>
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        {activePage === 'productList' && <ProductInfo />}
        {activePage === 'inStorage' && <InStorage />}
        {activePage === 'outgoing' && <Outgoing />}
      </div>
    </div>
  );
};

export default Storage;
