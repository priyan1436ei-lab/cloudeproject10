import { cn } from '@/lib/utils';

export function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 hover:border-cyan-400/60 hover:text-cyan-300',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
