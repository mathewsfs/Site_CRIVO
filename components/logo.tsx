import Image from "next/image"
import Link from "next/link"

export function Logo({ height = 32 }: { height?: number }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="https://bitrix24public.com/crivo.bitrix24.com.br/docs/pub/3862b6e3fb4f9ef1a91b1a231ef3d9ad/showPreview/?&token=cr8dv5a8d523"
        alt="Crivo Digital"
        width={height * 3.5}
        height={height}
        className="h-auto w-auto"
        priority
        style={{ maxHeight: height }}
      />
    </Link>
  )
}