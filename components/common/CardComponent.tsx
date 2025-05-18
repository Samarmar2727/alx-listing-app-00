type CardProps = {
  title: string
}

export function Card({ title }: CardProps) {
  return <div className="p-4 border rounded">{title}</div>
}
