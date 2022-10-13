import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    asChild?: boolean
}

export const Button = ({ children, asChild, className, ...props }: ButtonProps) => {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={clsx(
                'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white', className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}
