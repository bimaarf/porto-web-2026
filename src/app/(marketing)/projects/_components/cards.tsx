import * as React from 'react';

import NextImage from 'next/image';

import type { TProjectFrontmatter } from '@/types/mdx.type';
import Button from '@/components/button';

type TCardsProps = {
    projects: Array<TProjectFrontmatter>;
};

type TCardProps = {
    project: TProjectFrontmatter;
};

function Card({ project }: TCardProps) {
    return (
        <article className="relative border border-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]">
            {project.images?.[0] ? (
                <NextImage
                    src={project.images[0]}
                    alt={project.title}
                    className="aspect-[16/9] w-full border-b border-slate-200 object-cover"
                    placeholder="blur"
                />
            ) : null}

            <div className="p-4">
                <h2 className="text-sm font-semibold line-clamp-1">{project.title}</h2>

                <p className="text-base/7 font-medium mt-2 line-clamp-2 h-14">{project.description}</p>

                <div className="mt-2 flex items-center gap-2">
                    <Button.Link href={project.url} variant="outline" size="xs">
                        Live Demo
                    </Button.Link>

                    {project.repository && (
                        <Button.Link href={project.repository} variant="outline" size="xs">
                            GitHub
                        </Button.Link>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Cards({ projects }: TCardsProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
                <Card key={project.slug} project={project} />
            ))}
        </div>
    );
}
