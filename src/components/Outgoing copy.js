import React, { useState } from 'react';
import styles from './Outgoing.module.css';

const Outgoing = () => {
  const [data, setData] = useState([
    { id: 1, itemName: 'Veritas NetBackup', model: 'Ver2', unit: 'EA', rack: 'ABC', barcode: '22082500877', date: '2022-11-05 13:42:52' },
    // Add more data as needed
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [outgoingData, setOutgoingData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleOutgoing = (item) => {
    setOutgoingData([...outgoingData, { ...item, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
    setData(data.filter(dataItem => dataItem.id !== item.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>출고관리 | 2024-06-02</h1>
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
                    <th>Rack</th>
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
