import { TableBody, TableHead, TableRowBody, TableRowHead, Td, Th, TransactionTable } from "./Transaction.styled";
import PropTypes from 'prop-types'; 


export const TransactionHistory = (props) => {
    return (
        <TransactionTable>
            <TableHead>
                <TableRowHead>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {props.items.map((item, i) => {
                    return (
                        <TableRowBody key={item.id} data-even={i % 2 === 0}>
                            <Td>{ item.type}</Td>
                            <Td>{ item.amount}</Td>
                            <Td>{ item.currency}</Td>
                        </TableRowBody>
                    )
                })}
            </TableBody>
        </TransactionTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }),
    )
}