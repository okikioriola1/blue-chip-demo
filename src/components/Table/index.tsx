import * as React from "react";
import "./table.scss";


interface TableDataCardProps {
	id?: string;
	title?: string;
	project?: string;
    category?:string;
    urgency?:string;
    impact?:string;
    assigned_to:string;
    status?:string;
    date?:string;
    action?:string;
}
interface TableColumnProps {
  title: string;
  dataIndex: string;
}

interface TableProps {
  columns: TableColumnProps[];
  data: TableDataCardProps[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
              {columns.map((column, index) => (
                <td key={index}>
                  {column.dataIndex === "urgency" ? (
                    <p
                      className={`${
                        item[column.dataIndex] === "Medium"
                          ? "yellow"
                          : item[column.dataIndex] === "High"
                          ? "red"
                          : item[column.dataIndex] === "Critical"
                          ? "very-red"
                          : "green"
                      }`}
                    >
                      <span className="dot"></span>
                      {item[column.dataIndex]}
                    </p>
                  ) : column.dataIndex === "status" ? (
                    <p className="pill">{item[column.dataIndex]}</p>
                  ) : column.dataIndex === "assigned_to" && item[column.dataIndex] && item ? (
                    <p className="assignedto">
                      <span>
                        <img
                          src={item[column.dataIndex]
                            .split(" ")[0]
                            .slice(1, -1)}
                          alt="user"
                        />
                      </span>
                      <span className="assignedtoInfo">
                        {" "}
                        <span className="name">
                          {" "}
                          {item[column.dataIndex]
                            .split(" ")
                            .slice(1, -2)
                            .join(" ")}
                        </span>
                        <span className="role">
                          {item[column.dataIndex]
                            .split(" ")
                            .slice(-2)
                            .join(" ")}{" "}
                        </span>
                      </span>
                    </p>
                  ) : column.dataIndex === "action" ? (
                    <>
                    <img src={item[column.dataIndex]} alt="action"/>
                    </>

                  ): (
                    <p>{item[column.dataIndex as keyof typeof item]}</p>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
