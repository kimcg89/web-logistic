import React, { useState, useEffect } from 'react';
import styles from './Outgoing.module.css';

const Outgoing = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('inStorageData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [outgoingData, setOutgoingData] = useState(() => {
    const savedOutgoingData = localStorage.getItem('outgoingList');
    return savedOutgoingData ? JSON.parse(savedOutgoingData) : [];
  });

  const [latestDate, setLatestDate] = useState('2024-06-02');

  useEffect(() => {
    localStorage.setItem('outgoingList', JSON.stringify(outgoingData));
    if (outgoingData.length > 0) {
      const sortedData = [...outgoingData].sort((a, b) => new Date(b.date) - new Date(a.date));
      setLatestDate(sortedData[0].date.split(' ')[0]);
    }
  }, [outgoingData]);

  const handleDelete = (id) => {
    setOutgoingData(outgoingData.filter(item => item.id !== id));
  };

  const handleOutgoing = (item) => {
    setOutgoingData([...outgoingData, { ...item, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
    setData(data.filter(dataItem => dataItem.id !== item.id));
    localStorage.setItem('inStorageData', JSON.stringify(data.filter(dataItem => dataItem.id !== item.id)));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>출고관리 | {latestDate}</h1>
        <button className={styles.newOutgoing} onClick={() => setShowPopup(true)}>새 출고 등록</button>
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
              <th>출고일시</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {outgoingData.map(item => (
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
            <div className={styles.popupHeader}>
              <h2>출고 가능 List</h2>
              <button className={styles.closeButton} onClick={() => setShowPopup(false)}>닫기</button>
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
                        <button className={styles.outgoingButton} onClick={() => handleOutgoing(item)}>출고</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Outgoing;
