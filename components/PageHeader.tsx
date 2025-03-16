interface PageHeaderProps {
    title: string
    description: string
    imagePath: string
  }
  
  export default function PageHeader({ title, description, imagePath }: PageHeaderProps) {
    return (
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imagePath})` }} />
        <div className="absolute inset-0 bg-black/50" />
  
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>
    )
  }
  
  