const StatisticLine = ({text, value, format}) => {

    return (
        <>
        <tr>
            <td>
            { text }
            </td>
            <td>
            { value } { format === 'percent' && '%'} 
            </td>
        </tr>
        </>
    )
} 

export default StatisticLine;