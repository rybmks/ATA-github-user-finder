/**
 * Card component — a responsive, rounded container with border, background and shadow.
 *
 * @param {string} [props.className=''] - Additional class names to apply.
 * @param {import('react').ReactNode} [props.children] - Content to be rendered inside the card.
 * @returns {JSX.Element} The rendered card element wrapping the provided children.
 *
 * @example
 * // Basic usage example
 * import React from 'react';
 * import Card from 'components/Card/Card';
 *
 * export default function App() {
 *   return (
 *     <Card className="max-w-md">
 *       <h2 className="text-xl font-semibold">Card Title</h2>
 *       <p className="text-sm text-slate-600">This is some example content inside the card.</p>
 *     </Card>
 *   );
 * }
 */
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
