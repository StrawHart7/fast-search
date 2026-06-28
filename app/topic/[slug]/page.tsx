type Props = {
  params: Promise<{ slug: string }>
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold">
        Sujet : <span className="text-blue-400">{slug}</span>
      </h1>
      <p className="text-gray-400 mt-2">Les news sur {slug} vont apparaître ici</p>
    </main>
  )
}