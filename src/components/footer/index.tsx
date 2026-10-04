import * as React from 'react';

import Navigation from '@/components/footer/navigation';

import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL, YZ_COURSE_URL, SOURCE_CODE_URL } from '@/constants/urls';

export type TNavigation = typeof navigation;

const navigation = {
    Works: [
        { name: 'Yz-Course', href: YZ_COURSE_URL },
        { name: 'GitHub', href: GITHUB_URL },
        { name: 'LinkedIn', href: LINKEDIN_URL },
    ],
    Contacts: [{ name: 'Email', href: EMAIL_URL }],
    Others: [{ name: 'Source Code', href: SOURCE_CODE_URL }],
};

export default function Footer() {
    return (
        <footer className="bg-white">
            <h2 className="sr-only">Footer</h2>

            <div className="border-y border-slate-200">
                <Navigation {...{ navigation }} />
            </div>

            <div className="container py-6">
                <p className="text-sm/7 font-medium">&copy; {new Date().getFullYear()} - Bima Arifa Rachman. All rights reserved.</p>
            </div>
        </footer>
    );
}
