import React, { useState, useEffect } from 'react';
import styles from './InStorage.module.css';

const InStorage = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('inStorageData');
    return savedData ? JSON.parse(savedData) : [
      { id: 1, itemName: 'Veritas NetBackup', model: 'Ver2', unit: 'EA', rack: 'ABC', barcode: '22082500877', date: '2022-10-05 13:42:52' }
    ];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [newItem, setNewItem] = useState({
    itemName: '사이다 2.0패키지',
    model: 'Cider Ver 2.0',
    unit: 'EA',
    rack: '1',
    barcode: '2046524579521',
    date: new Date().toISOString().split('T')[0]
  });

  const [latestDate, setLatestDate] = useState('2024-06-01');

  useEffect(() => {
    localStorage.setItem('inStorageData', JSON.stringify(data));
    if (data.length > 0) {
      const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
      setLatestDate(sortedData[0].date.split(' ')[0]);
    }
  }, [data]);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleAddNewItem = () => {
    setData([...data, { ...newItem, id: Date.now() }]);
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>입고관리 | {latestDate}</h1>
        <button className={styles.newOutgoing} onClick={() => setShowPopup(true)}>새 입고 등록</button>
      </div>
      <div className={styles.inputSection}>
        <h2>바코드를 입력하세요.</h2>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>제품명</th>
              <th>모델명</th>
              <th>규격</th>
              <th>수량</th>
              <th>바코드</th>
              <th>입고일시</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.model}</td>
                <td>{item.unit}</td>
                <td>{item.rack}</td>
                <td>{item.barcode}</td>
                <td>{item.date}</td>
                <td>
                  <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <div className={styles.productDetails}>
              <p><strong>제품명:</strong> {newItem.itemName}</p>
              <p><strong>모델명:</strong> {newItem.model}</p>
              <p><strong>바코드:</strong> {newItem.barcode}</p>
              <p><strong>규격:</strong> {newItem.unit}</p>
              <p><strong>수량:</strong> {newItem.rack}</p>
              <p><strong>입고일시:</strong> {newItem.date}</p>
            </div>
            <div className={styles.rightContent}>
              <img className={styles.productImage} src="/image/Ciderv2.jpg" alt="Product" />
            </div>
            <button className={styles.registerButton} onClick={handleAddNewItem}>입고 등록</button>
            <button className={styles.cancelButton} onClick={() => setShowPopup(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InStorage;
