

function flatten2DArray(array2D) {
    return array2D.reduce((acc, row) => {
        return acc.concat(row);
    }, []);
}
function Table(props) {
    var array = props.array;
    array=flatten2DArray(array)
    if (array.length !== 64) {
        throw new Error("Input array must contain exactly 64 items.");
    }

    

    // Create the table rows and cells using JSX
    const rows = [];
    for (let i = 0; i < 8; i++) {
        const cells = [];
        for (let j = 0; j < 8; j++) {
            cells.push(
                <td  key={j} style={{ border: '1px solid black', padding: '12px' }}>
                    {array[i * 8 + j]}
                </td>
            );
        }
        rows.push(<tr key={i}>{cells}</tr>);
    }

    return (
        <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default Table;
