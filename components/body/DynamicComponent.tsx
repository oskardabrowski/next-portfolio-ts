import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface Props {
    children?: ReactNode
}

// @ ts-ignore
const Dynamic = ({ children }:Props) => <>{children}</>

export default dynamic(() => Promise.resolve(Dynamic), { ssr: false })