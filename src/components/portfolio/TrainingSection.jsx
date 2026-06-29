import { trainingIntro, trainingItems } from "@/data/training";

export default function TrainingSection() {
    return (
        <section id="training" className="scroll-mt-24 bg-transparent px-4 py-14 text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-center text-3xl font-bold text-slate-950 dark:text-slate-50">Training</h2>
                <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg md:leading-8">
                    {trainingIntro}
                </p>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {trainingItems.map((item) => (
                        <article
                            key={item.title}
                            className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white/85 p-6 text-center shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/75 dark:shadow-blue-950/20"
                        >
                            <div className="flex h-24 items-center justify-center">
                                <img src={item.image} alt={item.imageAlt} className="max-h-24 w-auto max-w-56 object-contain" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-slate-50">{item.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base md:leading-7">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
