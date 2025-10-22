function Card({ className = '', children }) {
  return (
    <div
      className={` 
        rounded-2xl border border-slate-200
        bg-white
        shadow-sm hover:shadow transition-shadow
        p-4 sm:p-6 lg:p-8
        mx-1 my-2 sm:mx-6 md:mx-8 lg:mx-auto
        max-w-xl md:max-w-2xl lg:max-w-4xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
