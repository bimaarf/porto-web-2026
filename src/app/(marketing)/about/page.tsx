import * as React from 'react';

import NextImage from 'next/image';

import Link from '@/components/link';

import portrait from '@/app/(marketing)/about/_images/bima-portrait.png';

export default function AboutPage() {
    return (
        <div className="relative flex flex-col gap-y-32 overflow-hidden py-20">
            <div className="container lg:flex">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-8 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-xl lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">Hi, I&#39;m Bima Arifa Rachman.</h2>

                        <p className="mt-6 text-base/7 text-slate-600">
                            I&#39;m a Full-Stack Developer and Software Engineer based in Pontianak, Indonesia, with hands-on experience building web,
                            backend, mobile, and realtime applications across professional, freelance, and product development environments.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">
                            My core stack includes Laravel, PHP, React.js, Next.js, Node.js, React Native, RESTful APIs, MySQL, PostgreSQL, Redis,
                            Socket.IO, Docker, Linux, and Nginx. I also build authentication and RBAC systems, payment gateway integrations, webhooks,
                            WhatsApp workflows, media processing, AI integrations, RAG, embeddings, and production monitoring with Prometheus and
                            Grafana.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">
                            I am the Founder and Full-Stack Developer of Yz-Course, an English-learning platform covering LMS, enrollment, learning
                            progress, analytics, transactions, realtime discussion forum, and AI-assisted personalization. I&#39;m passionate about
                            scalable backends, realtime products, and software that solves real business problems.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">
                            I reside in Pontianak, West Kalimantan. And I&#39;m always enthusiastic about connecting with new people. If you&#39;d
                            like to get in touch, please feel free to visit my social media or reach out to me via email at bimaarifa5@gmail.com.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">Thank you, and I&#39;m looking forward to connecting with you!</p>
                    </div>

                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <div className="w-[37rem] max-w-none bg-gradient-to-br from-slate-100 via-white to-cyan-50 px-8 pt-10 ring-1 ring-slate-200">
                                <NextImage
                                    src={portrait}
                                    alt="Bima Arifa Rachman, Full-Stack Developer"
                                    className="mx-auto w-full max-w-[20rem] object-contain"
                                    priority
                                />

                                <p className="pt-6 text-center text-base font-bold text-slate-700">Bima Arifa Rachman</p>

                                <p className="pb-8 pt-1 text-center text-sm text-slate-500">Full-Stack Developer — Pontianak, Indonesia</p>
                            </div>
                        </div>

                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <div className="flex aspect-[4/3] w-[24rem] max-w-none flex-none flex-col items-center justify-center bg-slate-700 ring-1 ring-slate-700">
                                    <span className="text-5xl font-extrabold tracking-tight text-white">BR</span>

                                    <span className="mt-2 text-xs font-medium uppercase tracking-widest text-cyan-300">Full-Stack Developer</span>
                                </div>
                            </div>

                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <div className="flex aspect-[7/5] w-[37rem] max-w-none flex-none flex-col justify-center bg-cyan-50 px-8 ring-1 ring-cyan-100">
                                    <p className="text-lg font-bold text-slate-700">Pontianak, West Kalimantan, Indonesia</p>

                                    <p className="mt-2 max-w-md text-sm/6 text-slate-600">
                                        Open to opportunities and collaborations in Full-Stack Development, Realtime Systems, and AI-powered products.
                                    </p>
                                </div>
                            </div>

                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <div className="flex aspect-[4/3] w-[24rem] max-w-none flex-col justify-center bg-white px-8 ring-1 ring-slate-200">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Core stack</p>

                                    <p className="mt-2 text-base font-bold text-slate-700">Laravel • React • Next.js • Node.js</p>

                                    <p className="mt-1 text-sm text-slate-500">PostgreSQL • Redis • Docker • AI / RAG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="max-w-2xl lg:max-w-none">
                    <h3 className="text-xl font-bold tracking-tight text-slate-700">Licenses & Certifications</h3>

                    <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
                        <li className="flex flex-col gap-x-4 gap-y-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">
                                    <Link
                                        href="https://itbox.id/certificate-verifier/12D742CC9-132EF843D-302A689"
                                        className="underline decoration-cyan-500 decoration-2 underline-offset-2"
                                    >
                                        Cyber Security Course — Advanced Level
                                    </Link>{' '}
                                    <Link
                                        href="https://itbox.id/certificates/itbox-certificate/view/12D742CC9-132EF843D-302A689/"
                                        className="text-sm font-normal text-slate-500 underline underline-offset-2"
                                    >
                                        (PDF)
                                    </Link>
                                </p>
                                <p className="text-sm text-slate-500">ITBOX</p>
                            </div>
                        </li>

                        <li className="flex flex-col gap-x-4 gap-y-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">
                                    <Link
                                        href="https://itbox.id/certificate-verifier/12D742CC9-132EF5EBE-302A689/"
                                        className="underline decoration-cyan-500 decoration-2 underline-offset-2"
                                    >
                                        Cyber Security Course — Intermediate Level
                                    </Link>{' '}
                                    <Link
                                        href="https://itbox.id/certificates/itbox-certificate/view/12D742CC9-132EF5EBE-302A689/"
                                        className="text-sm font-normal text-slate-500 underline underline-offset-2"
                                    >
                                        (PDF)
                                    </Link>
                                </p>
                                <p className="text-sm text-slate-500">ITBOX</p>
                            </div>
                        </li>

                        <li className="flex flex-col gap-x-4 gap-y-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">
                                    <Link
                                        href="https://itbox.id/certificate-verifier/12D742CC9-132FEC86E-302A689/"
                                        className="underline decoration-cyan-500 decoration-2 underline-offset-2"
                                    >
                                        Cyber Security Course — Basic Level
                                    </Link>{' '}
                                    <Link
                                        href="https://itbox.id/certificates/itbox-certificate/view/12D742CC9-132FEC86E-302A689/"
                                        className="text-sm font-normal text-slate-500 underline underline-offset-2"
                                    >
                                        (PDF)
                                    </Link>
                                </p>
                                <p className="text-sm text-slate-500">ITBOX</p>
                            </div>
                        </li>

                        <li className="flex flex-col gap-x-4 gap-y-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">
                                    Certificate of Completion — Mahir Membuat Website Modern Dengan React JS
                                </p>
                                <p className="text-sm text-slate-500">Wegodev · Issued Jul 2022 · Credential ID 2430460713</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
