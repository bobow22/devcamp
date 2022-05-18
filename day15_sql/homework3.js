// ค้นหาหนังสือจากชื่อ เช่น The Marquis and I ให้ค้นว่า Mar ก็ต้องหาเจอ
// SELECT * FROM book WHERE title LIKE '%Mar%'

// ดึงหนังสือมาแสดง 2 เล่มแรก ที่ชื่อมีตัวอักษร o
// SELECT * FROM book WHERE title LIKE '%o%' LIMIT 2

// เพิ่มรายการขายหนังสือ 10 รายการ
// INSERT INTO sale (isbn, id_employee, price, number) VALUES
// ("9783598215933", 1, 250, 1),
//   ("9783598215933", 2, 250, 2),
//   ("9784087925869", 2, 1720, 2),
//   ("9784894328129", 1, 151, 3),
//   ("9784789013505", 2, 720, 5),
//   ("9784087925876", 1, 618, 3),
//   ("9784087925869", 3, 1720, 3),
//   ("9784087925944", 4, 480, 5),
//   ("9784789013505", 2, 720, 3),
//   ("9783598215919", 4, 199, 1),
//   ("9784894328129", 2, 151, 1);

// หาว่าขายหนังสือได้กี่เล่ม
// SELECT SUM(number) FROM sale;

// หาว่ามีหนังสืออะไรบ้างที่ขายออก (แสดงแค่ ISBN ของหนังสือ)
// SELECT DISTINCT isbn FROM sale

// หาว่าขายหนังสือได้เงินทั้งหมดเท่าไร
// SELECT SUM(price * number) as Result FROM sale