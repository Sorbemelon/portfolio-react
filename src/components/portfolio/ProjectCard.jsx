import { Link } from "react-router-dom";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const linkLabels = {
  github: "GitHub",
  live: "Live",
}

export default function ProjectCard({ project }) {
    const projectImage = (
        <img
            src={project.image}
            alt={project.imageAlt}
            className={project.imageClassName}
        />
    )
    const projectLinks = Object.entries(project.links ?? {}).filter(([, href]) => href)

    return (
        <Card className="w-full border-none p-0 shadow-xl">
            <MagicCard className={`h-full`}>
                <div>
                    {project.links?.live ? (
                        <Link to={project.links.live} target="_blank">
                            {projectImage}
                        </Link>
                    ) : (
                        projectImage
                    )}
                </div>
                <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                    <CardTitle className={`text-3xl`}>{project.title}</CardTitle>
                    <CardDescription className={`*:mr-1 *:mb-1`}>
                        <p className="text-base font-semibold text-black mb-2">{project.subtitle}</p>
                        <Badge className={project.statusClassName}>{project.status}</Badge>
                        {project.tags.map((tag) => (
                            <Badge key={tag.label} className={tag.className}>{tag.label}</Badge>
                        ))}
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                    {project.description}
                </CardContent>
                {projectLinks.length > 0 && (
                    <CardFooter className="p-4 pt-0 gap-4">
                        {projectLinks.map(([type, href]) => (
                            <Link key={type} to={href} target="_blank" className="font-semibold underline">
                                {linkLabels[type] ?? type}
                            </Link>
                        ))}
                    </CardFooter>
                )}
            </MagicCard>
        </Card>
    )
}
