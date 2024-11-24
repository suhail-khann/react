import { buildTimeValue } from "@testing-library/user-event/dist/utils";

const DataTable = (props) => {
    const { data } = props;
    return (
        <table border ={5}>
            <thead>
                <tr>
                    <th>name </th>
                    <th>name </th>
                </tr>
            </thead>
            <tbody>
                {data.map((value, index) => {
                    return(
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.designation}</td>
                        </tr>
                    );
                })}
                
            </tbody>
        </table>
    )
};
export default DataTable;