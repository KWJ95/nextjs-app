import { Suspense } from "react"
import Loading from '../[locale]/notes/loading';

interface ProviderChildrenProps {
    children: React.ReactNode
}

export default function Providers( { children }: ProviderChildrenProps) {
    return (
        <Suspense fallback={<Loading/>}>
            {children}
        </Suspense>
    )
};
