import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransaction()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transcation => (
            <tr key={transcation.id}>
              <td>{transcation.title}</td>
              <td className={transcation.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transcation.amount)}
              </td>
              <td>{transcation.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transcation.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}