const Section = ({ id, children, className }) => (
  <section
    id={id}
    className={`relative max-w-full border border-white scroll-smooth ${className}`}
  >
    {children}
  </section>
)


export default Section
