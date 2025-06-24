import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crivo Digital - CRM e Gestão Empresarial com IA',
  description: 'Especialistas em CRM e processos de gestão empresarial com inteligência artificial. Parceiros oficiais Bitrix24.',
}

export default function PTLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}