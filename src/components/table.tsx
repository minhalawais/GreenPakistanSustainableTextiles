import type React from "react"
interface TableProps {
  children: React.ReactNode
  className?: string
}

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full ${className}`} {...props}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ children, className, ...props }: TableProps) {
  return (
    <thead className={`bg-gray-50 ${className}`} {...props}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className, ...props }: TableProps) {
  return (
    <tbody className={`divide-y divide-gray-200 ${className}`} {...props}>
      {children}
    </tbody>
  )
}

export function TableRow({ children, className, ...props }: TableProps) {
  return (
    <tr className={`hover:bg-gray-50 ${className}`} {...props}>
      {children}
    </tr>
  )
}

export function TableHead({ children, className, ...props }: TableProps) {
  return (
    <th
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
      {...props}
    >
      {children}
    </th>
  )
}

export function TableCell({ children, className, ...props }: TableProps) {
  return (
    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </td>
  )
}

