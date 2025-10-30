function Card({ className = '', children }) {
  return (
    <div
      className={`
        rounded-2xl border border-slate-200
        bg-white
        shadow-sm hover:shadow transition-shadow
        p-4 sm:p-6 lg:p-8
        w-full
        max-w-xl md:max-w-2xl lg:max-w-4xl
        mx-auto my-3
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
