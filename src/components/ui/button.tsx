import clsx from "clsx"
import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface ButtonProps{
  children: React.ReactNode
  variant?: "primary" | "secondary"  | "dark" | "default"
  type?: "button" | 'submit'
  shape?: "fill" | "outlined"
  size?: "small" | "medium" | "large"
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  className?: string
}

const ThemedButton = ({
  children,
  variant = "default",
  type = "button",
  shape = "fill",
  icon: Icon,
  size = "medium",
  className
}: ButtonProps) => {
  let variantClass = ""
  let sizeClass = ""

  if (shape === "fill") {
    variantClass = clsx({
      "bg-default text-white hover:opacity-90": variant === "default",
      "bg-primary text-white hover:opacity-90": variant === "primary",
      "bg-dark text-white hover:opacity-90": variant === "dark",
      "bg-secondary text-white hover:opacity-90": variant === "secondary",
    })
  } else {
    variantClass = clsx(
      "border hover:text-white hover:opacity-90",
      {
        "text-default border-default hover:bg-default": variant === "default",
        "text-primary border-primary hover:bg-primary": variant === "primary",
        "text-dark border-dark hover:bg-dark": variant === "dark",
        "text-secondary border-secondary hover:bg-secondary": variant === "secondary",
      }
    )
  }

  sizeClass = clsx({
    "px-5 py-2 text-sm": size === "small",
    "px-8 py-3 text-md": size === "medium",
    "px-13 py-3 text-xl": size === "large",
  })

  const baseClass = "rounded font-jura font-semibold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-3"

  return (
    <button type={type} className={clsx(baseClass, variantClass, sizeClass, className)}>
      {Icon && <Icon size={25} />}
      {children}
    </button>
  )
}

export default ThemedButton
