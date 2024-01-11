import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'

const pageContainerVariants = cva(
  'fixed inset-0 -z-50 h-screen overflow-hidden bg-cover font-sans lg:flex lg:flex-co',
  {
    variants: {
      variant: {
        home: 'bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop',
        destination:
          'bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop',
        crew: 'bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop',
        technology:
          'bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop',
      },
    },
    defaultVariants: {
      variant: 'home',
    },
  }
)

function PageContainer({ children, className, variant }) {
  return (
    <div className={cn(pageContainerVariants({ variant, className }))}>
      {children}
    </div>
  )
}

export default PageContainer
