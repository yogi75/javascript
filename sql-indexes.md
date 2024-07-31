### SQL INDEX
The Index in SQL is a special table used to speed up the searching of the data in the database tables. It also retrieves a vast amount of data from the tables frequently. The INDEX requires its own space in the hard disk.

The index concept in SQL is same as the index concept in the novel or a book.

It is the best SQL technique for improving the performance of queries. The drawback of using indexes is that they slow down the execution time of UPDATE and INSERT statements. But they have one advantage also as they speed up the execution time of SELECT and WHERE statements.

In SQL, an Index is created on the fields of the tables. We can easily build one or more indexes on a table. The creation and deletion of the Index do not affect the data of the database.

#### Benefits
SQL Indexes can search the information of the large database quickly.
This concept is a quick process for those columns, including different values.
This data structure sorts the data values of columns (fields) either in ascending or descending order. And then, it assigns the entry for each value.
Each Index table contains only two columns. The first column is row_id, and the other is indexed-column.
When indexes are used with smaller tables, the performance of the index may not be recognized.
#### When not to use

SQL Indexes can be avoided when the size of the table is small.
When the table needs to be updated frequently.
Indexed should not be used on those cases when the column of a table contains a large number of NULL values.

CREATE INDEX Index_Name ON Table_Name ( column_name1, column_name2, ...., column_nameN);  
CREATE UNIQUE INDEX Index_Name ON Table_Name ( Column_Name);  
ALTER INDEX old_Index_Name RENAME TO new_Index_Name;  

In Oracle database:
DROP INDEX Index_Name; 

In MySQL database:
ALTER TABLE Table_Name DROP INDEX Index_Name; 

In Ms-Access database:
DROP INDEX Index_Name ON Table_Name;  

In SQL Server Database:
DROP INDEX Table_Name.Index_Name; 

https://www.javatpoint.com/how-to-create-index-in-mysql
