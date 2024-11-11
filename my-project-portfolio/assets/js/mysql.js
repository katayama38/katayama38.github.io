export const mysqlQuizQuestions = [
    // 初心者向け
    {
        question: "MySQLでデータベースを作成するためのSQL文はどれですか？",
        options: ["CREATE DATABASE dbname;", "MAKE DATABASE dbname;", "NEW DATABASE dbname;", "ADD DATABASE dbname;"],
        answer: "CREATE DATABASE dbname;"
    },
    {
        question: "MySQLでテーブルを作成するためのSQL文はどれですか？",
        options: ["CREATE TABLE tablename (...);", "MAKE TABLE tablename (...);", "NEW TABLE tablename (...);", "ADD TABLE tablename (...);"],
        answer: "CREATE TABLE tablename (...);"
    },
    {
        question: "MySQLでデータベースを削除するためのSQL文はどれですか？",
        options: ["DROP DATABASE dbname;", "DELETE DATABASE dbname;", "REMOVE DATABASE dbname;", "CLEAR DATABASE dbname;"],
        answer: "DROP DATABASE dbname;"
    },
    {
        question: "MySQLでテーブルを削除するためのSQL文はどれですか？",
        options: ["DROP TABLE tablename;", "DELETE TABLE tablename;", "REMOVE TABLE tablename;", "CLEAR TABLE tablename;"],
        answer: "DROP TABLE tablename;"
    },
    {
        question: "MySQLでデータを挿入するためのSQL文はどれですか？",
        options: ["INSERT INTO tablename VALUES (...);", "ADD INTO tablename VALUES (...);", "INSERT INTO tablename (...) VALUES (...);", "INSERT INTO VALUES tablename (...);"],
        answer: "INSERT INTO tablename VALUES (...);"
    },
    {
        question: "MySQLでテーブルのデータを更新するためのSQL文はどれですか？",
        options: ["UPDATE tablename SET column1 = value1 WHERE condition;", "MODIFY tablename SET column1 = value1 WHERE condition;", "ALTER tablename SET column1 = value1 WHERE condition;", "CHANGE tablename SET column1 = value1 WHERE condition;"],
        answer: "UPDATE tablename SET column1 = value1 WHERE condition;"
    },
    {
        question: "MySQLで特定の条件に一致するデータを削除するSQL文はどれですか？",
        options: ["DELETE FROM tablename WHERE condition;", "REMOVE FROM tablename WHERE condition;", "CLEAR FROM tablename WHERE condition;", "DROP FROM tablename WHERE condition;"],
        answer: "DELETE FROM tablename WHERE condition;"
    },
    {
        question: "MySQLでテーブルの構造を変更するSQL文はどれですか？",
        options: ["ALTER TABLE tablename ADD columnname datatype;", "CHANGE TABLE tablename ADD columnname datatype;", "MODIFY TABLE tablename ADD columnname datatype;", "UPDATE TABLE tablename ADD columnname datatype;"],
        answer: "ALTER TABLE tablename ADD columnname datatype;"
    },

    // 中級者向け
    {
        question: "MySQLでデータベース内のテーブルの一覧を取得するSQL文はどれですか？",
        options: ["SHOW TABLES;", "LIST TABLES;", "SHOW DATABASES;", "GET TABLES;"],
        answer: "SHOW TABLES;"
    },
    {
        question: "MySQLで指定した条件に一致するデータを検索するためのSQL文はどれですか？",
        options: ["SELECT * FROM tablename WHERE condition;", "FIND * FROM tablename WHERE condition;", "GET * FROM tablename WHERE condition;", "SEARCH * FROM tablename WHERE condition;"],
        answer: "SELECT * FROM tablename WHERE condition;"
    },
    {
        question: "MySQLでカラムの順番を変更するためのSQL文はどれですか？",
        options: ["ALTER TABLE tablename MODIFY COLUMN columnname datatype AFTER columnname2;", "ALTER TABLE tablename CHANGE COLUMN columnname columnname2 datatype;", "ALTER TABLE tablename RENAME COLUMN columnname TO columnname2;", "UPDATE TABLE tablename MOVE COLUMN columnname TO columnname2;"],
        answer: "ALTER TABLE tablename MODIFY COLUMN columnname datatype AFTER columnname2;"
    },
    {
        question: "MySQLで複数のテーブルを結合してデータを取得するためのSQL文はどれですか？",
        options: ["SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;", "SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;", "SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;", "SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;"],
        answer: "SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;"
    },
    {
        question: "MySQLで特定の列だけを取得するSQL文はどれですか？",
        options: ["SELECT column1, column2 FROM tablename;", "GET column1, column2 FROM tablename;", "FETCH column1, column2 FROM tablename;", "SHOW column1, column2 FROM tablename;"],
        answer: "SELECT column1, column2 FROM tablename;"
    },
    {
        question: "MySQLでデータをソートして取得するためのSQL文はどれですか？",
        options: ["SELECT * FROM tablename ORDER BY columnname ASC;", "SELECT * FROM tablename SORT BY columnname ASC;", "SELECT * FROM tablename ARRANGE BY columnname ASC;", "SELECT * FROM tablename GROUP BY columnname ASC;"],
        answer: "SELECT * FROM tablename ORDER BY columnname ASC;"
    },
    {
        question: "MySQLでグループ化して集計を行うSQL文はどれですか？",
        options: ["SELECT columnname, COUNT(*) FROM tablename GROUP BY columnname;", "SELECT columnname, SUM(*) FROM tablename GROUP BY columnname;", "SELECT columnname, AVG(*) FROM tablename GROUP BY columnname;", "SELECT columnname, MAX(*) FROM tablename GROUP BY columnname;"],
        answer: "SELECT columnname, COUNT(*) FROM tablename GROUP BY columnname;"
    },
    {
        question: "MySQLで複数の条件を指定してデータを検索するためのSQL文はどれですか？",
        options: ["SELECT * FROM tablename WHERE condition1 AND condition2;", "SELECT * FROM tablename WHERE condition1 OR condition2;", "SELECT * FROM tablename WHERE condition1, condition2;", "SELECT * FROM tablename WHERE condition1 THEN condition2;"],
        answer: "SELECT * FROM tablename WHERE condition1 AND condition2;"
    },

    // 上級者向け
    {
        question: "MySQLでインデックスを作成するSQL文はどれですか？",
        options: ["CREATE INDEX indexname ON tablename (columnname);", "CREATE INDEX ON tablename (columnname);", "MAKE INDEX indexname ON tablename (columnname);", "ADD INDEX indexname ON tablename (columnname);"],
        answer: "CREATE INDEX indexname ON tablename (columnname);"
    },
    {
        question: "MySQLで複雑なトランザクションを扱うために使用するSQL文はどれですか？",
        options: ["START TRANSACTION;", "BEGIN TRANSACTION;", "INIT TRANSACTION;", "BEGIN WORK;"],
        answer: "START TRANSACTION;"
    },
    {
        question: "MySQLで外部キー制約を設定するSQL文はどれですか？",
        options: ["ALTER TABLE tablename ADD CONSTRAINT fk_name FOREIGN KEY (columnname) REFERENCES other_table(columnname);", "ALTER TABLE tablename ADD FOREIGN KEY (columnname) REFERENCES other_table(columnname);", "CREATE TABLE tablename ADD CONSTRAINT fk_name FOREIGN KEY (columnname) REFERENCES other_table(columnname);", "CREATE TABLE tablename ADD FOREIGN KEY (columnname) REFERENCES other_table(columnname);"],
        answer: "ALTER TABLE tablename ADD CONSTRAINT fk_name FOREIGN KEY (columnname) REFERENCES other_table(columnname);"
    },
    {
        question: "MySQLでビューを作成するSQL文はどれですか？",
        options: ["CREATE VIEW viewname AS SELECT * FROM tablename;", "CREATE VIEW viewname SELECT * FROM tablename;", "MAKE VIEW viewname AS SELECT * FROM tablename;", "NEW VIEW viewname AS SELECT * FROM tablename;"],
        answer: "CREATE VIEW viewname AS SELECT * FROM tablename;"
    },
    {
        question: "MySQLでストアドプロシージャを作成するSQL文はどれですか？",
        options: ["CREATE PROCEDURE procname () BEGIN ... END;", "CREATE FUNCTION procname () BEGIN ... END;", "MAKE PROCEDURE procname () BEGIN ... END;", "NEW PROCEDURE procname () BEGIN ... END;"],
        answer: "CREATE PROCEDURE procname () BEGIN ... END;"
    },
    {
        question: "MySQLで一意制約（UNIQUE）をカラムに設定するSQL文はどれですか？",
        options: ["ALTER TABLE tablename ADD CONSTRAINT UNIQUE (columnname);", "CREATE TABLE tablename ADD UNIQUE (columnname);", "ADD CONSTRAINT UNIQUE (columnname);", "CREATE UNIQUE (columnname);"],
        answer: "ALTER TABLE tablename ADD CONSTRAINT UNIQUE (columnname);"
    },
    {
        question: "MySQLでエラーを発生させるために使用するSQL文はどれですか？",
        options: ["SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error message';", "THROW ERROR 'Error message';", "RAISE ERROR 'Error message';", "ERROR MESSAGE 'Error message';"],
        answer: "SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error message';"
    }
];
