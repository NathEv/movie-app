// 3.4 : composition avec children — Panel ne sait pas ce qu'il contient
export default function Panel({ title, children }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
