interface DivideSectionProps {
  title: string
}

export function DivideSection({ title }: DivideSectionProps) {
  return <h2 className='text-xs font-bold text-neutral-500 uppercase'>{title}</h2>
}
