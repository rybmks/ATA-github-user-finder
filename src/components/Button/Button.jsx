function Button({ className = '', children }) {
  return (
    <button
      className={`min-w-20 min-h-9 md:min-w-25 md:min-h-12 rounded bg-slate-800 py-1.5 px-3 
        border border-transparent text-center text-sm text-white
        transition-all shadow-sm hover:shadow
      hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700
        focus:outline-none focus:shadow-none active:shadow-none
        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
        ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
