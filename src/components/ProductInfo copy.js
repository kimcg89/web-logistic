import React from 'react';
import styles from './ProductInfo.module.css';
import productImage from '../assets/image.png';

const ProductInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.header}>
            <h2>제품 상세 정보</h2>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productDetails}>
              <p><strong>제품명:</strong> 사이다 2.0패키지</p>
              <p><strong>바코드:</strong> 2046524579521</p>
              <p><strong>구매가:</strong> ₩,000</p>
              <p><strong>판매가:</strong> ₩,000</p>
              <p><strong>카테고리:</strong> 백업 솔루션</p>
              <p><strong>브랜드:</strong> 가이아웨어</p>
              <p><strong>상품코드:</strong> 245003</p>
              <p><strong>안전 재고:</strong> 15</p>
              <p><strong>바코드:</strong> -</p>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img className={styles.productImage} src="/image/Ciderv2.jpg" alt="Product" />
        </div>
      </div>
      <div className={styles.stockInfo}>
        <h2>현재 재고 및 내역</h2>
        <ul className={styles.stockList}>
          <li>
            <span>출고</span>
            <span>2022-08-10</span>
            <span>-5</span>
          </li>
          <li>
            <span>입고</span>
            <span>2022-06-28</span>
            <span>+1</span>
          </li>
          <li>
            <span>출고</span>
            <span>2022-05-13</span>
            <span>-2</span>
          </li>
          <li>
            <span>출고</span>
            <span>2022-05-04</span>
            <span>-4</span>
          </li>
          <li>
            <span>조정</span>
            <span>2022-05-04</span>
            <span>+21</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default ProductInfo;
