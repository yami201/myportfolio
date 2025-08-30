const Section = ({ id, children, className }) => (
  <section
    id={id}
    className={`relative max-w-full scroll-smooth ${className}`}
  >
    {children}
  </section>
)


export default Section
