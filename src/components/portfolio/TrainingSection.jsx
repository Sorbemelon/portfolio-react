import { trainingIntro, trainingItems } from "@/data/training";

export default function TrainingSection() {
    return (
        <section id="training" className="flex flex-col items-center mt-4 mb-12">
            <div className="w-full flex items-center mb-4">
                <hr className="h-0.5 w-full md:ml-30 mr-4 bg-linear-to-r from-none to-black border-none dark:to-slate-500" />
                <h2 className="text-center text-2xl md:text-3xl font-semibold">Training</h2>
                <hr className="h-0.5 w-full ml-4 md:mr-30 bg-linear-to-l from-none to-black border-none dark:to-slate-500" />
            </div>
            <p className="text-center text-lg max-w-3xl mx-auto px-4 mb-8">
                {trainingIntro}
            </p>
            <div className="flex flex-col md:flex-row gap-8 px-4">
                {trainingItems.map((item) => (
                    <div key={item.title} className="flex flex-col max-w-sm items-center text-center">
                        <img src={item.image} alt={item.imageAlt} className="w-50" />
                        <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-base">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full flex mt-8">
                    <hr className="h-0.5 w-full md:ml-30 bg-linear-to-r from-none to-black border-none dark:to-slate-500" />
                    <hr className="h-0.5 w-full md:mr-30 bg-linear-to-l from-none to-black border-none dark:to-slate-500" />
            </div>
        </section>
    )
}
