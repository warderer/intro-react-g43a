const Info = ({ title, message }) => {
  return (
    <section className="info">
        <div className="contenedor">
            <h2 className="titulo left">{title}</h2>
            <p>{message}</p>
        </div>
    </section>
  )
}

export default Info