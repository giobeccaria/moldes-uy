export default function Faq({ items }: { items: { pregunta: string; respuesta: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details className="faq-item" key={f.pregunta}>
          <summary>
            <span>{f.pregunta}</span>
            <span className="faq-toggle" aria-hidden="true" />
          </summary>
          <p>{f.respuesta}</p>
        </details>
      ))}
    </div>
  )
}
