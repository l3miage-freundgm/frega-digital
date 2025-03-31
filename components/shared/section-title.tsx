interface SectionTitleProps {
  badge?: string
  title: string
  description?: string
  className?: string
}

export default function SectionTitle({ badge, title, description, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 text-center ${className}`}>
      <div className="space-y-2">
        {badge && (
          <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">{badge}</div>
        )}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
        {description && (
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

