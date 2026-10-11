import * as React from 'react';

import clsxm from '@/utils/clsxm';

type TLogoProps = React.ComponentPropsWithoutRef<'span'>;

export default function Logo({ className, ...props }: TLogoProps) {
    return (
        <span className={clsxm('inline-flex items-center gap-x-2 font-extrabold tracking-tight text-slate-700', className)} {...props}>
            <svg width={36} height={28} viewBox="0 0 110 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto flex-none">
                <path
                    d="M-7 41.2329L32.5386 41.1368L39.5532 29.798L48.9308 58.0488L62.6623 15L71.3701 41.2329H106.871"
                    stroke="#EF4444"
                    strokeWidth="8.33203"
                    strokeLinecap="square"
                />
            </svg>

            <span className="text-lg leading-none">
                bima<span className="text-red-500">arf</span>
            </span>
        </span>
    );
}
