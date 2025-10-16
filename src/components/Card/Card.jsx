function Card({ className, children }) {
  return (
    <div
      className={`px-8 py-4 ml-10 mr-10 mt-5 rounded-lg shadow-md border-slate-200 border-1 ${className || ''}`}
    >
      {children}
    </div>
  );
}

export default Card;
